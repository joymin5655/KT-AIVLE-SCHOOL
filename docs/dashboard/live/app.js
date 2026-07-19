// Posture Keeper — live in-browser posture classification.
// All assets are vendored (see ./vendor/) so the page makes NO third-party
// requests; combined with the page's CSP, it can only talk to its own origin.
import { PoseLandmarker, FilesetResolver, DrawingUtils }
  from "./vendor/mediapipe/vision_bundle.mjs";

const PF = window.PostureFeatures;
const $ = id => document.getElementById(id);
const els = {
  start:$('start'), stop:$('stop'), status:$('status'),
  video:$('video'), overlay:$('overlay'), ph:$('ph'), stage:$('stage'),
  livedot:$('livedot'), corner:$('cornertxt'), fps:$('fps'),
  verdict:$('verdict'), vlabel:$('vlabel'), vcls:$('vcls'),
  visbar:$('visbar'), vismeta:$('vismeta'), problist:$('problist'),
  badtimer:$('badtimer'), alert:$('alert'),
};

const CLASS_ORDER = [0,1,2,3,4]; // ONNX proba column order
let poseLandmarker=null, ortSession=null, drawUtils=null;
let running=false, rafId=null, lastVideoTime=-1;
let lastClassifyAt=0, badSince=null, alerted=false;
let frames=0, fpsAt=performance.now();

// --- build probability rows once ---
els.problist.innerHTML = CLASS_ORDER.map(c=>{
  const t = PF.LABELS[String(c)].ko;
  return `<div class="prow" data-c="${c}">
    <span class="pt">${t}</span>
    <span class="pbar"><i></i></span>
    <span class="pv">0%</span></div>`;
}).join('');

function setStatus(t){ els.status.textContent = t; }

// absolute URLs (relative to this page) — onnxruntime imports the wasm glue as
// an ES module, and a bare relative path is not a valid module specifier.
const V = p => new URL(p, document.baseURI).href;

async function loadModels(){
  setStatus('자세 모델(ONNX) 로딩 중…');
  ort.env.wasm.wasmPaths = V("vendor/onnxruntime/");
  ortSession = await ort.InferenceSession.create(V("../model/pose_classification.onnx"));

  setStatus('MediaPipe PoseLandmarker 로딩 중… (최초 1회 다운로드)');
  const vision = await FilesetResolver.forVisionTasks(V("vendor/mediapipe/wasm"));
  const opts = {
    baseOptions:{
      modelAssetPath:V("vendor/mediapipe/pose_landmarker_lite.task"),
      delegate:"GPU"
    },
    runningMode:"VIDEO", numPoses:1, minPoseDetectionConfidence:0.5
  };
  try { poseLandmarker = await PoseLandmarker.createFromOptions(vision, opts); }
  catch(e){ opts.baseOptions.delegate="CPU"; poseLandmarker = await PoseLandmarker.createFromOptions(vision, opts); }

  setStatus('준비 완료. ▶ 버튼을 눌러 시작하세요.');
  els.start.disabled = false;
}

async function start(){
  if(running) return;
  els.start.disabled = true;
  setStatus('카메라 권한 요청 중…');
  let stream;
  try{
    stream = await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:'user'},audio:false});
  }catch(e){
    setStatus('카메라를 열 수 없습니다: '+e.message);
    els.start.disabled=false; return;
  }
  if(window.Notification && Notification.permission==='default'){ try{ await Notification.requestPermission(); }catch(_){} }

  els.video.srcObject = stream;
  await els.video.play();
  els.overlay.width = els.video.videoWidth || 640;
  els.overlay.height = els.video.videoHeight || 480;
  drawUtils = new DrawingUtils(els.overlay.getContext('2d'));

  els.ph.style.display='none';
  els.video.style.display='block';
  els.overlay.style.display='block';
  els.start.style.display='none';
  els.stop.style.display='inline-block';
  els.livedot.classList.add('live');
  els.corner.textContent='LIVE';
  running = true; lastVideoTime=-1; lastClassifyAt=0; badSince=null; alerted=false;
  setStatus('실시간 판별 중…');
  loop();
}

function stop(){
  running=false;
  if(rafId) cancelAnimationFrame(rafId);
  const s = els.video.srcObject;
  if(s) s.getTracks().forEach(t=>t.stop());
  els.video.srcObject=null;
  els.video.style.display='none';
  els.overlay.style.display='none';
  els.ph.style.display='flex';
  els.stop.style.display='none';
  els.start.style.display='inline-block';
  els.start.disabled=false;
  els.livedot.classList.remove('live');
  els.corner.textContent='STANDBY'; els.fps.textContent='';
  resetVerdict();
  setStatus('중지됨. 다시 시작할 수 있습니다.');
}

function resetVerdict(){
  els.verdict.className='verdict'; els.vlabel.textContent='대기'; els.vcls.textContent='class —';
  els.visbar.style.width='0%'; els.vismeta.textContent='—';
  els.badtimer.textContent='0.0s'; els.alert.classList.remove('show');
  CLASS_ORDER.forEach(c=>{
    const row = els.problist.querySelector(`.prow[data-c="${c}"]`);
    row.classList.remove('top'); row.querySelector('i').style.width='0%'; row.querySelector('.pv').textContent='0%';
  });
}

function loop(){
  if(!running) return;
  rafId = requestAnimationFrame(loop);
  const v = els.video;
  if(v.readyState < 2 || v.currentTime===lastVideoTime){ return; }
  lastVideoTime = v.currentTime;

  const now = performance.now();
  const res = poseLandmarker.detectForVideo(v, now);
  const ctx = els.overlay.getContext('2d');
  ctx.clearRect(0,0,els.overlay.width,els.overlay.height);

  const has = res.landmarks && res.landmarks.length>0;
  const lms = has ? res.landmarks[0] : null;
  const vis = has ? PF.meanVisibility(lms) : 0;

  // fps
  frames++;
  if(now - fpsAt > 500){ els.fps.textContent = Math.round(frames*1000/(now-fpsAt))+' fps'; frames=0; fpsAt=now; }

  // visibility gate -> class -1
  if(!has || vis <= PF.VISIBILITY_THRESHOLD){
    if(has) drawSkeleton(lms,'#5f88a8');
    updateVisibility(vis);
    applyLabel(-1, null);
    updateBadTimer(false, now);
    return;
  }

  updateVisibility(vis);

  // throttle heavy classification to ~2/sec; draw skeleton every frame
  if(now - lastClassifyAt >= 450){
    lastClassifyAt = now;
    classify(lms, now);
  }
  if(window.__lastGood!==undefined) drawSkeleton(lms, window.__lastGood ? '#48d597' : (window.__lastGood===false ? '#ff6b6b' : '#5fb0d9'));
  else drawSkeleton(lms,'#5fb0d9');
}

async function classify(lms, now){
  try{
    const feat = PF.buildFeatures(lms);            // Float32Array(201)
    const tensor = new ort.Tensor('float32', feat, [1,201]);
    const out = await ortSession.run({ input: tensor });
    const label = Number(out.label.data[0]);
    const probs = out.probabilities.data;          // len 5
    applyLabel(label, probs);
    const good = PF.LABELS[String(label)].good;    // true good / false bad / null
    window.__lastGood = good;
    updateBadTimer(good===false, now);
  }catch(e){ setStatus('추론 오류: '+e.message); }
}

function applyLabel(label, probs){
  const info = PF.LABELS[String(label)];
  els.vlabel.textContent = info.ko;
  els.vcls.textContent = 'class '+label;
  els.verdict.className = 'verdict' + (info.good===true?' good':info.good===false?' bad':'');
  if(!probs){
    CLASS_ORDER.forEach(c=>{
      const row=els.problist.querySelector(`.prow[data-c="${c}"]`);
      row.classList.remove('top'); row.querySelector('i').style.width='0%'; row.querySelector('.pv').textContent='—';
    });
    return;
  }
  let maxi=0; for(let i=1;i<probs.length;i++) if(probs[i]>probs[maxi]) maxi=i;
  CLASS_ORDER.forEach((c,i)=>{
    const row=els.problist.querySelector(`.prow[data-c="${c}"]`);
    const p = probs[i]!=null ? probs[i] : 0;
    row.classList.toggle('top', i===maxi);
    row.querySelector('i').style.width = (p*100).toFixed(1)+'%';
    row.querySelector('.pv').textContent = (p*100).toFixed(1)+'%';
  });
}

function updateVisibility(v){
  els.visbar.style.width = Math.min(100, v*100).toFixed(0)+'%';
  els.vismeta.textContent = (v*100).toFixed(0)+'%';
}

function updateBadTimer(isBad, now){
  if(isBad){
    if(badSince===null) badSince = now;
    const dur = (now - badSince)/1000;
    els.badtimer.textContent = dur.toFixed(1)+'s';
    if(dur>=60 && !alerted){
      alerted=true;
      els.alert.classList.add('show');
      if(window.Notification && Notification.permission==='granted'){
        try{ new Notification('바른자세 지킴이', {body:'나쁜 자세가 1분 이상 지속되고 있어요. 바르게 앉아 주세요!'}); }catch(_){}
      }
    }
  }else{
    badSince=null; alerted=false;
    els.badtimer.textContent='0.0s';
    els.alert.classList.remove('show');
  }
}

function drawSkeleton(lms, color){
  drawUtils.drawConnectors(lms, PoseLandmarker.POSE_CONNECTIONS, {color:color, lineWidth:3});
  drawUtils.drawLandmarks(lms, {color:'#e8f1f8', fillColor:color, radius:3, lineWidth:1});
}

els.start.addEventListener('click', start);
els.stop.addEventListener('click', stop);
els.start.disabled = true;
loadModels().catch(e=>{ setStatus('모델 로딩 실패: '+e.message); });
