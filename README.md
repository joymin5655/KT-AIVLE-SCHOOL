# 바른자세 지킴이 · Posture Keeper

[![라이브 데모](https://img.shields.io/badge/▶_라이브_데모-바로_체험-5fb0d9?style=for-the-badge)](https://joymin5655.github.io/KT-AIVLE-SCHOOL/dashboard/live/)
[![설계도](https://img.shields.io/badge/설계도-시스템_구조-0b2545?style=for-the-badge)](https://joymin5655.github.io/KT-AIVLE-SCHOOL/)

> **웹캠만으로 내 자세를 실시간 감시하고, 나쁜 자세가 오래 지속되면 알려주는 AI 헬스케어 웹 서비스.**
> KT AIVLE School **4기** (수도권 AI 4반) · **Team 10** · 미니프로젝트 (2024.09 – 2024.10)

![Python](https://img.shields.io/badge/Python-3.11-blue?style=flat-square&logo=python)
![Django](https://img.shields.io/badge/Django-4.2.7-092e20?style=flat-square&logo=django)
![MediaPipe](https://img.shields.io/badge/MediaPipe-Pose-ff6f00?style=flat-square)
![XGBoost](https://img.shields.io/badge/XGBoost-자세_분류-b8003e?style=flat-square)
![ONNX](https://img.shields.io/badge/ONNX-브라우저_추론-005ce6?style=flat-square)

---

## 🎬 바로 체험하기

별도 설치 없이 링크만 누르면 됩니다.

| | 무엇인가 | 링크 |
|---|---|---|
| ▶ **라이브 데모** | **웹캠으로 직접 체험** — 브라우저에서 실제로 자세를 판별합니다 (백엔드 불필요) | **[열기](https://joymin5655.github.io/KT-AIVLE-SCHOOL/dashboard/live/)** |
| 🖥 **제품 데모** | 실제로 만든 화면 20페이지 둘러보기 (통계·게시판·챗봇 등) | [열기](https://joymin5655.github.io/KT-AIVLE-SCHOOL/dashboard/) |
| 📐 **설계도** | 프로젝트 목적과 전체 시스템 구조 (한/영) | [열기](https://joymin5655.github.io/KT-AIVLE-SCHOOL/) |

> 💡 라이브 데모는 카메라 권한만 허용하면 됩니다. **영상은 기기 밖으로 절대 나가지 않습니다** (아래 [보안 설계](#-라이브-데모가-특별한-이유) 참고).

---

## 🤔 이게 뭐하는 건가요?

책상 앞에서 일하다 보면 나도 모르게 거북목이 되고 자세가 무너집니다. 이 서비스는:

1. **웹캠으로 내 모습을 봅니다** (몇 초마다 한 장씩)
2. **AI가 자세를 5종류로 분류합니다** — 바른 자세 / 거북목 / 턱 괴기 / 엎드림 / 누워 기댐
3. **나쁜 자세가 1분 넘게 이어지면 알림**을 줍니다

여기에 스트레칭 게임, 자세 통계, 커뮤니티 게시판, FAQ 챗봇까지 붙인 웹 서비스입니다.

**전체 기능**

| 기능 | 설명 |
|---|---|
| 실시간 자세 모니터링 | 웹캠 → AI 분류 → 나쁜 자세 시 알림 |
| 스트레칭 게임 | 포즈 가이드 따라 하며 자세 교정 |
| 통계·시각화 | 바른/나쁜 자세 비율, 주간 추이 (Chart.js) |
| 커뮤니티 게시판 | 글·댓글 CRUD + 검색 |
| RAG 챗봇 | FAQ 기반 질의응답 (LangChain) |
| 계정 | 로그인·회원가입 (Google·Naver 소셜) |

---

## ⚙️ 어떻게 동작하나요?

자세 판별의 핵심 흐름은 간단합니다:

```
📷 웹캠  →  🦴 몸의 관절 위치 추출 (MediaPipe)
         →  📐 관절 간 거리·각도로 특징 201개 계산
         →  🤖 XGBoost 모델이 자세 5종 분류
         →  🔔 나쁜 자세 1분↑ 이면 알림
```

- 자세 분류 클래스: `0` 바른 자세 · `1~4` 나쁜 자세 유형 · `-1` 사람 없음
- 사용하는 관절 9개: 코·눈·귀·어깨·손목 (`[0,2,5,7,8,11,12,15,16]`)

---

## ✨ 라이브 데모가 특별한 이유

원래 이 앱은 **서버(Django)가 있어야만** 자세를 판별합니다. 그런데 GitHub Pages는 정적 호스팅이라 서버가 없죠. 그래서 **서버가 하던 일을 전부 브라우저로 옮겼습니다.**

| 원래 (서버에서) | 라이브 데모 (브라우저에서) |
|---|---|
| MediaPipe Holistic | MediaPipe **PoseLandmarker** (WASM, 같은 관절 구조) |
| 파이썬 특징 계산 `preprocessing.py` | 자바스크립트로 이식 `posture-features.js` |
| XGBoost `.pkl` 모델 | **같은 모델을 ONNX로 변환**해 브라우저에서 추론 |
| DB 저장 + 서버 알림 | 브라우저 내 처리 + 웹 알림 |

**"진짜 같은 결과가 나오나?"** — 검증했습니다:
- 브라우저 특징 계산 = 파이썬 원본과 오차 **0.000005**
- 브라우저 ONNX 추론 = 원본 `.pkl`과 **분류 결과·확률 일치**

**🔒 프라이버시·보안**
- 영상·판정 결과가 **브라우저 밖으로 전혀 안 나감** (전송·저장·녹화 코드 자체가 없음)
- 필요한 AI 라이브러리를 전부 저장소에 포함(`live/vendor/`)해, 외부 CDN에도 **요청 0건**
- **CSP** 적용 — 혹시 코드가 변조돼도 외부로의 데이터 전송을 브라우저가 차단

---

## 🧱 두 가지 프론트엔드 (정직한 설명)

이 저장소엔 겉모습이 비슷한 화면이 **두 종류** 있습니다. 헷갈리지 않게 구분하면:

| | 실제 동작 앱 | 포트폴리오 데모 |
|---|---|---|
| 형태 | **Django + jQuery** (서버 렌더) | React SPA |
| 위치 | `src/backend/` | `src/frontend/` · `docs/_react-demo-backup/` |
| 데이터 | 진짜 AI 추론 + DB | 가짜 목업 데이터 |
| 백엔드 연결 | ✅ 있음 | ❌ 없음 |

- **`docs/dashboard/`** = 위 실제 Django 화면 20페이지를 **정적 HTML로 변환**한 둘러보기용 데모. (챗봇 답변은 서버가 필요해서 데모에선 안내 배너만 표시)
- **`docs/dashboard/live/`** = 위에서 설명한, **자세 판별이 진짜로 동작**하는 브라우저 버전.

---

## 🛠 기술 스택

**백엔드 / ML** — Python 3.11 · Django 4.2.7 · MediaPipe · OpenCV · scikit-learn · **XGBoost** · LangChain · ChromaDB · SQLite · django-allauth
**라이브 데모** — MediaPipe Tasks Vision (WASM) · onnxruntime-web · 순수 JavaScript
**포트폴리오 프론트** — React 19 · Vite · Chart.js (목업, 보관)

> 참고: `requirements.txt`에 `tensorflow`·`mlflow`가 있으나, 실제 배포된 자세 판별기는 **XGBoost `.pkl`** 이며 mlflow는 비활성 레거시입니다.

---

## 📁 프로젝트 구조

```
KT-AIVLE-SCHOOL/
├── docs/                      # GitHub Pages (master 브랜치 /docs 서빙)
│   ├── index.html             # 설계도/랜딩
│   └── dashboard/             # 제품 데모 (Django 화면 20페이지 정적 변환)
│       ├── live/              # ★ 라이브 데모 (브라우저 자세판별)
│       │   ├── app.js         #   실행 로직
│       │   ├── posture-features.js  # 특징 201개 계산 (preprocessing.py 이식)
│       │   └── vendor/        #   AI 라이브러리 (외부 요청 0을 위해 동봉)
│       └── model/             # pose_classification.onnx (.pkl → ONNX 변환)
└── src/
    ├── ai/                    # 모델링·전처리 노트북
    ├── backend/               # 실제 동작 Django 앱 (home·service·chatbot·brd·accounts)
    └── frontend/              # React 데모 소스 (보관)
```

---

## 💻 로컬에서 실행하기

### 실제 앱 (Django)

```bash
git clone https://github.com/joymin5655/KT-AIVLE-SCHOOL.git
cd KT-AIVLE-SCHOOL

python -m venv venv && source venv/bin/activate    # Windows: venv\Scripts\activate
pip install -r requirements.txt

cd src/backend
python manage.py migrate
python manage.py runserver        # http://localhost:8000
```

필요한 것:
- 자세 모델 `.pkl` 2개를 `src/backend/service/`에 배치 (git 미포함, 별도 준비)
- 챗봇·소셜 로그인은 `.env`에 OpenAI / OAuth 키 (`DJANGO_SECRET_KEY`도 환경변수로 주입 권장)

### 라이브 데모 (설치 불필요)

브라우저로 열기만 하면 됩니다 → https://joymin5655.github.io/KT-AIVLE-SCHOOL/dashboard/live/

---

## 👥 팀 · 역할

**Team 10 — KT AIVLE School 4기 (수도권 AI 4반)**: 김현주 · 이돈규 · 이성규 · 조용민 · 채수빈 · 현동욱

| 이름 | 담당 (발표자료 기준) |
|---|---|
| 김현주 | 로그인·회원가입·소셜로그인 · RAG 챗봇 |
| 이돈규 | AI 설계 · 데이터 · 알고리즘 |
| 이성규 | AI 설계/고도화 · 자세 데이터 수집·전처리 · Mlflow · 실행 알고리즘 |
| **조용민** | 바른 자세 판별 AI 모델 · 메인/게시판 페이지 · 검색 · 통계·시각화 · DB 관리 |
| 채수빈 | 웹캠 출력/전송 · 서비스 페이지 · 스트레칭 모델 · 시각화 |
| 현동욱 | 백엔드 · DB · 모델 성능 고도화 · 문서 |

> **정직성 노트.** 위는 팀 최종 발표자료 기준입니다. 조용민의 과제정의서 공식 역할은 FE·BE·UI/UX·DB·데이터·문서(AI는 팀 분담)이며, 자세 판별 모델·DB는 git 커밋 저자가 팀원과 섞여 있어 **공동 작업**으로 보는 것이 정확합니다. (라이브 데모·정적 변환·설계도 페이지는 이후 조용민 개인 작업.)

---

## 📄 출처 · 라이선스

- 원본 팀 저장소 [`sbchae11/team10`](https://github.com/sbchae11/team10)을 팀원이었던 조용민이 개인 아카이브(`joymin5655/KT-AIVLE-SCHOOL`)로 가져온 것입니다.
- KT AIVLE School 교육용 미니프로젝트이며 학습·포트폴리오 목적입니다. 상업적 사용·무단 재배포·저작자 사칭은 금지합니다.

<p align="center"><sub>© 2024 Posture Keeper · Team 10 · KT AIVLE School 4기</sub></p>
