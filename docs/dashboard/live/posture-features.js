/* Posture Keeper — client-side feature engineering.
   Faithful port of src/backend/service/views.py (send_image) + preprocessing.py.
   Produces the exact 201-dim vector the XGBoost model expects, in the same order.
   NOTE: the original reference_distance lookup used a string key on a tuple-keyed
   dict, so it always fell back to 1. We replicate that (ref = 1) for parity:
   relative distances == distances, relative_z == z. */
(function (root) {
  'use strict';

  var SELECTED = [0, 2, 5, 7, 8, 11, 12, 15, 16];

  // class id -> Korean label. 0 = good, 1..4 = bad types, -1 = no person.
  var LABELS = {
    '-1': { ko: '사람이 감지되지 않음', good: null },
    '0':  { ko: '바른 자세',        good: true },
    '1':  { ko: '거북목 자세',       good: false },
    '2':  { ko: '턱 괴는 자세',      good: false },
    '3':  { ko: '엎드리는 자세',     good: false },
    '4':  { ko: '누워 기대는 자세',  good: false }
  };

  function dist3(a, b) {
    var dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  function angle3(a, b, c) {
    var bax = a.x - b.x, bay = a.y - b.y, baz = a.z - b.z;
    var bcx = c.x - b.x, bcy = c.y - b.y, bcz = c.z - b.z;
    var dot = bax * bcx + bay * bcy + baz * bcz;
    var nba = Math.sqrt(bax * bax + bay * bay + baz * baz);
    var nbc = Math.sqrt(bcx * bcx + bcy * bcy + bcz * bcz);
    var cos = dot / (nba * nbc);
    if (cos > 1) cos = 1; else if (cos < -1) cos = -1;
    return Math.acos(cos) * 180 / Math.PI;
  }

  /* landmarks: array of 33 {x,y,z,visibility}. Returns 201-length Float32Array. */
  function buildFeatures(landmarks) {
    var L = SELECTED.map(function (i) { return landmarks[i]; });
    var n = SELECTED.length, row = [], i, j, k;

    // 1. positions + visibility (9 x 4 = 36)
    for (i = 0; i < n; i++) {
      var p = L[i];
      row.push(p.x, p.y, p.z, (p.visibility != null ? p.visibility : 0));
    }
    // 2. pairwise distances (C(9,2) = 36)
    var dists = [];
    for (i = 0; i < n; i++) {
      for (j = i + 1; j < n; j++) {
        var d = dist3(L[i], L[j]);
        row.push(d); dists.push(d);
      }
    }
    // 3. relative distances (ref = 1 -> identical to distances) (36)
    for (i = 0; i < dists.length; i++) row.push(dists[i]);
    // 4. relative z = z * 1 (9)
    for (i = 0; i < n; i++) row.push(L[i].z);
    // 5. angles (C(9,3) = 84)
    for (i = 0; i < n; i++) {
      for (j = i + 1; j < n; j++) {
        for (k = j + 1; k < n; k++) {
          row.push(angle3(L[i], L[j], L[k]));
        }
      }
    }
    return Float32Array.from(row);
  }

  /* mean visibility of all pose landmarks; < 0.4 -> treat as no person (class -1) */
  function meanVisibility(landmarks) {
    if (!landmarks || !landmarks.length) return 0;
    var s = 0, c = 0;
    for (var i = 0; i < landmarks.length; i++) {
      if (landmarks[i].visibility != null) { s += landmarks[i].visibility; c++; }
    }
    return c ? s / c : 0;
  }

  root.PostureFeatures = {
    SELECTED: SELECTED, LABELS: LABELS,
    buildFeatures: buildFeatures, meanVisibility: meanVisibility,
    VISIBILITY_THRESHOLD: 0.4
  };
})(typeof window !== 'undefined' ? window : globalThis);
