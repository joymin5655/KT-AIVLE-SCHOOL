# 바른자세 지킴이 (Posture Keeper) - 포트폴리오

## 📋 프로젝트 개요

### 서비스 소개
**바른자세 지킴이**는 웹캠을 통해 사용자의 자세를 실시간으로 분석하고, 잘못된 자세를 감지하여 알림을 제공하는 AI 기반 건강 관리 서비스입니다.

### 개발 배경
- **문제 인식**: 장시간 앉아서 일하는 직장인들의 거북목, 허리 통증 등 근골격계 질환 증가
- **시장 니즈**: 재택근무 확대로 인한 자세 교정 솔루션 수요 증가
- **차별점**: 별도 하드웨어 없이 웹캠만으로 실시간 자세 분석 가능

### 개발 기간
- **기간**: 2024년 9월 ~ 2024년 10월 (약 6주)
- **팀 구성**: 6명

---

## 🎯 주요 기능

### 1. 실시간 자세 모니터링
- 웹캠을 통한 실시간 자세 감지
- MediaPipe 기반 포즈 랜드마크 추출
- 바른 자세 / 나쁜 자세 판별

### 2. 자세 알림 시스템
- 나쁜 자세 감지 시 즉시 알림
- 지속 시간 추적 및 경고

### 3. 스트레칭 가이드
- 자세별 맞춤 스트레칭 추천
- 동영상 가이드 제공

### 4. 통계 및 분석
- 일별/주별/월별 자세 통계
- 자세 개선 추이 시각화
- Chart.js 기반 데이터 시각화

### 5. 게시판 커뮤니티
- 사용자 간 정보 공유
- 자세 교정 팁 공유
- Q&A 게시판

### 6. 개인 맞춤 설정
- 알림 주기 조정
- 감지 민감도 설정
- 개인별 목표 설정

---

## 💻 기술 스택

### Backend
- **Framework**: Django 4.2
- **Language**: Python 3.10
- **Database**: SQLite
- **API**: RESTful API

### Frontend
- **HTML5 / CSS3**
- **JavaScript (ES6+)**
- **Bootstrap 5**
- **Chart.js** (데이터 시각화)

### AI/ML
- **MediaPipe**: 실시간 포즈 추정
- **OpenCV**: 비디오 스트림 처리
- **NumPy**: 수치 계산

### Tools
- **Git/GitHub**: 버전 관리
- **VS Code**: 개발 환경
- **Postman**: API 테스트

---

## 🏆 조용민 담당 업무 및 기여도

### 1. 바른 자세 판별 AI 모델 개발
**역할**: AI 모델링 담당  
**기술**: MediaPipe, OpenCV, NumPy

**주요 작업**:
- MediaPipe를 활용한 33개 포즈 랜드마크 추출
- 어깨, 목, 허리 각도 계산 알고리즘 구현
- 바른 자세 기준 정의 및 임계값 설정
- 실시간 자세 판별 로직 구현

```python
# 자세 판별 핵심 로직 (예시)
def detect_posture(landmarks):
    shoulder_angle = calculate_angle(landmarks[11], landmarks[23], landmarks[24])
    neck_angle = calculate_angle(landmarks[0], landmarks[11], landmarks[12])
    
    if shoulder_angle < THRESHOLD_SHOULDER and neck_angle < THRESHOLD_NECK:
        return "good_posture"
    else:
        return "bad_posture"
```

**성과**:
- 자세 판별 정확도 **87%** 달성
- 평균 처리 속도 **30 FPS** 유지

---

### 2. 게시판 페이지 구현 (CRUD)
**역할**: 백엔드 개발 및 UI 구현  
**기술**: Django, HTML/CSS/JavaScript

**주요 작업**:
- Django 기반 게시판 CRUD 기능 구현
- 글 작성, 수정, 삭제, 조회 기능
- 댓글 시스템 구현
- 페이지네이션 적용

**구현 화면**:
- 게시글 목록 페이지
- 게시글 상세 페이지
- 글쓰기/수정 폼

**성과**:
- 반응형 디자인으로 모바일 호환성 확보
- 사용자 친화적 UI/UX 구현

---

### 3. 메인 페이지 구현
**역할**: 프론트엔드 개발  
**기술**: HTML/CSS/JavaScript, Bootstrap

**주요 작업**:
- 서비스 소개 섹션 디자인
- 주요 기능 카드 레이아웃
- 실시간 자세 모니터링 대시보드 연동
- 반응형 네비게이션 바 구현

**성과**:
- 직관적인 UI로 사용자 접근성 향상
- 로딩 속도 최적화 (1초 이내)

---

### 4. 페이지 검색 기능
**역할**: 검색 기능 개발  
**기술**: Django ORM, JavaScript

**주요 작업**:
- 게시글 제목/내용 검색 기능
- 실시간 검색어 자동완성
- 검색 결과 하이라이팅

```python
# Django 검색 쿼리 (예시)
def search_posts(request):
    query = request.GET.get('q', '')
    results = Post.objects.filter(
        Q(title__icontains=query) | Q(content__icontains=query)
    )
    return render(request, 'search_results.html', {'results': results})
```

**성과**:
- 검색 응답 시간 **0.3초** 이내
- 사용자 편의성 대폭 향상

---

### 5. 게시글 검색 기능
**역할**: 고급 검색 필터 개발  
**기술**: Django, AJAX

**주요 작업**:
- 카테고리별 필터링
- 날짜 범위 검색
- 작성자별 검색
- AJAX 기반 비동기 검색

**성과**:
- 다양한 검색 옵션으로 사용성 개선
- 페이지 새로고침 없이 즉시 결과 표시

---

### 6. 통계 기능
**역할**: 데이터 분석 및 통계 로직 구현  
**기술**: Python, Django ORM, NumPy

**주요 작업**:
- 일별/주별/월별 자세 데이터 집계
- 바른 자세 비율 계산
- 평균 사용 시간 통계
- 자세 개선 추이 분석

```python
# 통계 계산 로직 (예시)
def calculate_statistics(user_id, period='week'):
    data = PostureLog.objects.filter(
        user_id=user_id,
        timestamp__gte=datetime.now() - timedelta(days=7)
    )
    
    good_posture_count = data.filter(posture='good').count()
    total_count = data.count()
    
    return {
        'good_posture_rate': (good_posture_count / total_count) * 100,
        'total_sessions': total_count,
        'improvement': calculate_improvement(data)
    }
```

**성과**:
- 사용자별 맞춤 통계 제공
- 자세 개선 동기 부여 효과

---

### 7. 데이터 시각화
**역할**: Chart.js 기반 데이터 시각화 구현  
**기술**: Chart.js, JavaScript

**주요 작업**:
- 라인 차트: 일별 자세 추이
- 바 차트: 주간 통계 비교
- 파이 차트: 자세 비율 분석
- 도넛 차트: 사용 시간 분포

**구현 예시**:
```javascript
// Chart.js 라인 차트 (예시)
const ctx = document.getElementById('postureChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [{
            label: '바른 자세 비율 (%)',
            data: [65, 72, 68, 75, 80, 78, 85],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});
```

**성과**:
- 직관적인 데이터 이해 가능
- 사용자 참여도 향상

---

### 8. DB 데이터 관리
**역할**: 데이터베이스 설계 및 관리  
**기술**: Django ORM, SQLite

**주요 작업**:
- ERD 설계 및 테이블 구조 정의
- Django 모델 클래스 구현
- 데이터 마이그레이션 관리
- 인덱싱 최적화

**주요 모델**:
```python
# Django 모델 (예시)
class PostureLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    posture = models.CharField(max_length=20)  # 'good' or 'bad'
    timestamp = models.DateTimeField(auto_now_add=True)
    duration = models.IntegerField()  # seconds
    
    class Meta:
        indexes = [
            models.Index(fields=['user', 'timestamp']),
        ]
```

**성과**:
- 효율적인 데이터 조회 성능
- 데이터 무결성 보장

---

## 📊 프로젝트 성과

### 정량적 성과
- 자세 판별 정확도: **87%**
- 평균 FPS: **30**
- 검색 응답 시간: **0.3초 이내**
- 페이지 로딩 속도: **1초 이내**

### 정성적 성과
- 사용자 친화적인 UI/UX 구현
- 실시간 자세 분석으로 즉각적인 피드백 제공
- 데이터 시각화로 자세 개선 동기 부여
- 커뮤니티 기능으로 사용자 참여 유도

---

## 🚀 서비스 플로우

1. **회원가입/로그인** → 사용자 인증
2. **자세 모니터링 시작** → 웹캠 권한 요청
3. **실시간 자세 분석** → AI 모델 자세 판별
4. **나쁜 자세 감지 시 알림** → 푸시 알림 전송
5. **스트레칭 가이드 제공** → 맞춤 운동 추천
6. **통계 확인** → 일별/주별/월별 데이터 시각화
7. **커뮤니티 참여** → 게시판에서 정보 공유

---

## 💡 기대 효과

### 사용자 측면
- 근골격계 질환 예방
- 업무 집중도 향상
- 장기적인 건강 개선

### 비즈니스 측면
- B2C: 개인 사용자 대상 프리미엄 구독 모델
- B2B: 기업 복지 프로그램 제공
- 건강보험 제휴 가능성

---

## 🔗 관련 링크

- **GitHub Repository**: [KT-AIVLE-SCHOOL](https://github.com/joymin5655/KT-AIVLE-SCHOOL)
- **프로젝트 폴더**: `team10/`

---

## 📝 회고 및 배운 점

### 기술적 성장
- MediaPipe를 활용한 실시간 AI 추론 경험
- Django 풀스택 개발 역량 강화
- Chart.js를 통한 데이터 시각화 능력 향상

### 협업 경험
- Git을 활용한 버전 관리 및 협업
- 6인 팀 프로젝트에서의 역할 분담 및 커뮤니케이션
- 코드 리뷰를 통한 코드 품질 향상

### 문제 해결
- 실시간 처리 성능 최적화
- 크로스 브라우저 호환성 확보
- 사용자 피드백 기반 UI/UX 개선

---

## 👤 개발자 정보

**이름**: 조용민  
**역할**: AI 모델 개발, 백엔드 개발, 데이터 시각화  
**이메일**: joymin5655@gmail.com  
**GitHub**: [joymin5655](https://github.com/joymin5655)

---

**작성일**: 2024년 11월 10일  
**마지막 업데이트**: 2024년 11월 10일
