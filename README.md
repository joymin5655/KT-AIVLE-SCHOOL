# 바른자세 지킴이 · Posture Keeper

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-green?style=flat-square&logo=github)](https://joymin5655.github.io/KT-AIVLE-SCHOOL/)
[![Python](https://img.shields.io/badge/Python-3.11-blue?style=flat-square&logo=python)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-4.2.7-092e20?style=flat-square&logo=django)](https://www.djangoproject.com/)
[![MediaPipe](https://img.shields.io/badge/MediaPipe-Holistic-ff6f00?style=flat-square)](https://developers.google.com/mediapipe)
[![XGBoost](https://img.shields.io/badge/XGBoost-classifier-b8003e?style=flat-square)](https://xgboost.readthedocs.io/)

> 웹캠만으로 실시간 자세를 감지하는 AI 헬스케어 웹 서비스.
> KT AIVLE School **4기** (수도권 AI 4반) · **Team 10** · 미니프로젝트 (2024.09 – 2024.10)

---

## 링크

- **설계도 / 랜딩** — https://joymin5655.github.io/KT-AIVLE-SCHOOL/ (목적 + 전체 시스템 아키텍처 청사진, 한/영)
- **제품 데모** — https://joymin5655.github.io/KT-AIVLE-SCHOOL/dashboard/ (실제 구축한 Django 화면 20페이지의 **정적 데모**)
  - 예: [통계](https://joymin5655.github.io/KT-AIVLE-SCHOOL/dashboard/statistics.html) · [모니터링](https://joymin5655.github.io/KT-AIVLE-SCHOOL/dashboard/service.html) · [게시판](https://joymin5655.github.io/KT-AIVLE-SCHOOL/dashboard/board.html) · [챗봇](https://joymin5655.github.io/KT-AIVLE-SCHOOL/dashboard/chatbot.html)
- **원본 저장소** — [sbchae11/team10](https://github.com/sbchae11/team10) (팀 원본) → 본 저장소는 팀원 조용민의 개인 아카이브

---

## 이 프로젝트의 실제 구조 (정직한 설명)

프론트엔드가 **두 갈래**로 나뉩니다. 겉모습은 비슷하지만 성격이 완전히 다릅니다.

| | 실제 동작 앱 | 포트폴리오 데모 |
|---|---|---|
| 형태 | **Django 서버렌더 템플릿 + jQuery** | React SPA (Vite) |
| 위치 | `src/backend/` (로컬 `runserver`) | `src/frontend/` (소스) · `docs/_react-demo-backup/` (빌드, 보관) |
| 데이터 | 실제 ML 추론 + SQLite | `mockData.js` 목업 (백엔드 호출 0) |
| 백엔드 연결 | ✅ | ❌ |

**GitHub Pages `docs/dashboard/`** 는 위 실제 Django 화면(home·서비스·통계·게시판·챗봇·회원 등 20페이지)을 **정적으로 변환한 제품 데모**입니다. 실시간 웹캠 자세판별·챗봇 응답은 백엔드(MediaPipe·XGBoost·LangChain)가 있어야 동작하므로, 정적 데모에서는 각 페이지 상단 배너로 안내합니다. (초기 React 목업은 `docs/_react-demo-backup/`에 보관.)

---

## 핵심 기능

- **실시간 자세 모니터링** — 웹캠 프레임을 3초마다 캡처 → MediaPipe Holistic 랜드마크 → 특징 엔지니어링 → **XGBoost 분류**(정상/거북목/턱괴기/엎드림/기댐) → 1분 이상 나쁜 자세 시 웹 알림
- **스트레칭 게임** — 포즈 가이드 + 실시간 자세 판정
- **통계·시각화** — 정확/부정확 자세 비율, 주간 추이 등 Chart.js 시각화
- **커뮤니티 게시판** — 글/댓글 CRUD + 검색 + 페이징
- **RAG 챗봇** — FAQ CSV → 임베딩 → ChromaDB 오프라인 적재, 런타임 LangChain 에이전트(gpt-3.5-turbo)
- **계정** — django-allauth 기반 로그인/회원가입(Google·Naver 소셜)

---

## 기술 스택 (requirements.txt · package.json 기준)

**백엔드 / ML** — Python 3.11 · Django 4.2.7 · MediaPipe · OpenCV · scikit-learn · **XGBoost**(자세 분류기) · LangChain · OpenAI · ChromaDB · FAISS · SQLite · django-allauth
**포트폴리오 프론트** — React 19 · Vite · React Router · Chart.js · Recharts (목업 데모, 현재 보관)
**정적 데모 변환** — Django 템플릿 → 오프라인 렌더로 정적 HTML 생성 (전처리로 `{% url/static %}` 치환 + 데모 데이터)

> 참고: `requirements.txt`에 `tensorflow-cpu`·`mlflow`가 있으나, 배포된 자세 판별기는 **XGBoost `.pkl`** 이며 mlflow는 비활성 레거시 import입니다.

---

## 실시간 자세 판별 파이프라인

```
Webcam ─capture.js(canvas 3s)─▶ POST /service/send_image/
   ─▶ MediaPipe Holistic ─▶ service/preprocessing.py(거리·각도 특징)
   ─▶ XGBoost .pkl ─▶ PostureDetection(SQLite)
   ─▶ JSON{class_name} ─▶ notification.js(1분 나쁜자세 알림)
```

- 자세 랜드마크 셋 `[0,2,5,7,8,11,12,15,16]` · 스트레칭 `[0,2,5,6,7,8,11,12,13,14,15,16,21,22]`
- 클래스: `0` 정상 · `1~4` 나쁜 자세 유형 · `-1` 사람 없음

---

## 프로젝트 구조

```
KT-AIVLE-SCHOOL/
├── README.md
├── requirements.txt                # 백엔드/ML 파이썬 의존성
├── docs/                           # GitHub Pages (master 브랜치 /docs 서빙)
│   ├── index.html                  # 설계도/랜딩 (cyanotype 청사진, 한/영)
│   ├── 404.html
│   ├── dashboard/                  # 제품 데모 = 실제 Django 화면의 정적 변환본(20페이지 + static)
│   └── _react-demo-backup/         # 초기 React SPA 목업 (보관)
└── src/
    ├── ai/                         # 자세/스트레칭 분류 (전처리·모델링 노트북·실시간 추론)
    ├── backend/                    # 실제 동작 Django 앱
    │   ├── team10/                 # 프로젝트 설정 (settings·urls)
    │   ├── home/  accounts/  service/  chatbot/  brd/
    │   ├── templates/layout.html   # 전역 레이아웃
    │   └── static/                 # css·js·images·webfonts
    └── frontend/                   # React 데모 소스 (Vite)
```

---

## 로컬 실행

### 실제 앱 (Django) — 권장

```bash
git clone https://github.com/joymin5655/KT-AIVLE-SCHOOL.git
cd KT-AIVLE-SCHOOL

python -m venv venv && source venv/bin/activate    # Windows: venv\Scripts\activate
pip install -r requirements.txt

cd src/backend
python manage.py migrate
python manage.py runserver        # http://localhost:8000
```

- 자세 판별 모델 `.pkl` 2개(`pose_classification_model.pkl`, `pose_classification_model_stretch_final.pkl`)가 `src/backend/service/`에 있어야 합니다. (원 저장소에서는 git에 포함되지 않아 별도 배치 필요.)
- 챗봇·소셜 로그인은 `.env`의 OpenAI / OAuth 키가 필요합니다.

### React 데모 (선택, 목업)

```bash
cd src/frontend
npm install
npm run dev        # http://localhost:5173
```

### 정적 제품 데모 배포

`docs/`는 master 브랜치 `/docs` 경로로 GitHub Pages에 자동 배포됩니다. `docs/dashboard/`는 위 Django 화면을 정적 변환해 넣은 결과물입니다.

---

## 팀 · 역할

**Team 10 — KT AIVLE School 4기 (수도권 AI 4반)**: 김현주 · 이돈규 · 이성규 · 조용민 · 채수빈 · 현동욱

역할 분담(최종 발표자료 slide4 · 과제정의서 기준, 요약):

| 이름 | 담당 (발표자료) |
|---|---|
| 김현주 | 로그인·회원가입·소셜로그인 · **RAG 챗봇** |
| 이돈규 | AI 설계 · 데이터 · 알고리즘 |
| 이성규 | AI 설계/고도화 · 거리·자세 판별 데이터 수집/전처리 · Mlflow · AI 실행 알고리즘 |
| **조용민** | 바른 자세 판별 AI 모델 · 메인/게시판 페이지 · 페이지·게시글 검색 · 통계 · 데이터 시각화 · DB 데이터 관리 |
| 채수빈 | 웹캠 출력/전송 · 서비스 페이지 · 스트레칭 기본 AI 모델 · 시각화 |
| 현동욱 | 백엔드 · DB · 모델 성능 고도화 · 문서 |

> **정직성 노트.** 위는 팀 최종 발표자료 기재 기준입니다. 조용민의 과제정의서 공식 역할은 FE·BE·UI/UX·DB·데이터·문서이며(AI는 팀 분담), 자세 판별 모델·DB는 git 커밋 저자가 팀원과 합쳐져 있어 **공동 작업**으로 보는 것이 정확합니다. 자세한 근거·아키텍처는 [설계도 페이지](https://joymin5655.github.io/KT-AIVLE-SCHOOL/)를 참고하세요.

---

## 출처 · 라이선스

- 원본 팀 저장소 [`sbchae11/team10`](https://github.com/sbchae11/team10) 을 팀원이었던 조용민이 개인 아카이브(`joymin5655/KT-AIVLE-SCHOOL`)로 가져온 것입니다.
- KT AIVLE School 교육용 미니프로젝트이며 학습·포트폴리오 목적입니다. 상업적 사용·무단 재배포·저작자 사칭은 금지합니다.

<p align="center"><sub>© 2024 Posture Keeper · Team 10 · KT AIVLE School 4기</sub></p>
