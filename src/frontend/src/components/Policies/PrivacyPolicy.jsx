import React from 'react';
import './PolicyStyles.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <h1>개인정보 보호정책</h1>
        <p>마지막 업데이트: 2024년 11월</p>
      </div>

      <div className="policy-container">
        <div className="policy-content">
          <section className="policy-section">
            <h2>1. 개요</h2>
            <p>
              포스처키퍼(이하 "서비스")는 사용자의 개인정보를 보호하는 것을 최우선으로 합니다.
              본 개인정보 보호정책은 서비스가 수집하는 정보와 그 사용 방법에 대해 설명합니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. 수집하는 정보</h2>
            <h3>2.1 사용자가 직접 제공하는 정보</h3>
            <ul>
              <li>이름, 이메일 주소</li>
              <li>계정 생성 시 입력하는 프로필 정보</li>
              <li>서비스 이용 과정에서 입력하는 데이터</li>
            </ul>

            <h3>2.2 자동으로 수집되는 정보</h3>
            <ul>
              <li>기기 정보 (브라우저 종류, 운영체제)</li>
              <li>IP 주소</li>
              <li>쿠키 및 추적 기술을 통한 이용 정보</li>
              <li>서비스 이용 패턴 및 통계</li>
            </ul>

            <h3>2.3 생체 정보 (선택사항)</h3>
            <ul>
              <li>자세 분석을 위해 선택적으로 제공되는 비디오 또는 이미지</li>
              <li>운동 데이터 및 건강 관련 정보</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. 정보의 사용</h2>
            <p>수집된 정보는 다음의 목적으로만 사용됩니다:</p>
            <ul>
              <li>서비스 제공 및 개선</li>
              <li>사용자 계정 관리</li>
              <li>개인화된 스트레칭 가이드 제공</li>
              <li>성능 분석 및 통계</li>
              <li>법적 의무 이행</li>
              <li>서비스 보안 유지</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. 정보 공유</h2>
            <p>
              포스처키퍼는 사용자의 명시적 동의 없이 제3자와 개인정보를 공유하지 않습니다.
              다음의 경우는 예외입니다:
            </p>
            <ul>
              <li>법적 요구가 있는 경우</li>
              <li>서비스 제공을 위해 필요한 신뢰할 수 있는 서비스 제공자</li>
              <li>사용자의 안전을 위해 긴급한 경우</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. 데이터 보안</h2>
            <p>
              포스처키퍼는 사용자의 개인정보를 보호하기 위해 다양한 보안 조치를 취합니다:
            </p>
            <ul>
              <li>SSL 암호화 통신</li>
              <li>접근 제어 및 권한 관리</li>
              <li>정기적인 보안 감사</li>
              <li>데이터 백업 및 복구 체계</li>
            </ul>
            <p>
              그러나 인터넷을 통한 완벽한 보안은 보장할 수 없습니다.
              비밀번호는 절대 공유하지 마세요.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. 쿠키 및 추적 기술</h2>
            <p>
              포스처키퍼는 사용자 경험을 개선하기 위해 쿠키를 사용할 수 있습니다.
              사용자는 브라우저 설정을 통해 쿠키 수집을 제한할 수 있습니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. 사용자의 권리</h2>
            <p>사용자는 다음의 권리를 가집니다:</p>
            <ul>
              <li>자신의 개인정보 접근 및 확인 권리</li>
              <li>정보 정정 및 삭제 권리</li>
              <li>정보 처리 중단 요청 권리</li>
              <li>정보 이동 권리</li>
            </ul>
            <p>
              이러한 권리는 언제든지 support@posturekeeper.com으로 연락하여 행사할 수 있습니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. 데이터 보관 기간</h2>
            <p>
              개인정보는 서비스 이용 목적이 달성될 때까지 보관됩니다.
              계정 삭제 시 개인정보는 법적 의무가 있는 경우를 제외하고
              30일 이내에 완전히 삭제됩니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. 미성년자 보호</h2>
            <p>
              본 서비스는 18세 이상의 사용자를 대상으로 합니다.
              미성년자의 개인정보를 알게 된 경우 즉시 삭제 조치를 취합니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. 정책 변경</h2>
            <p>
              포스처키퍼는 필요에 따라 본 정책을 변경할 수 있습니다.
              중요한 변경사항은 이메일이나 서비스 내 공지를 통해 알립니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>11. 문의</h2>
            <p>
              개인정보 보호와 관련된 질문이나 요청사항이 있으시면
              아래로 연락해주세요:
            </p>
            <div className="contact-info">
              <p><strong>이메일:</strong> privacy@posturekeeper.com</p>
              <p><strong>주소:</strong> 서울시 강남구 테헤란로 123</p>
              <p><strong>연락처:</strong> 1599-1234</p>
            </div>
          </section>
        </div>

        <div className="policy-sidebar">
          <div className="sidebar-box">
            <h3>목차</h3>
            <ul className="toc">
              <li><a href="#section1">개요</a></li>
              <li><a href="#section2">수집하는 정보</a></li>
              <li><a href="#section3">정보의 사용</a></li>
              <li><a href="#section4">정보 공유</a></li>
              <li><a href="#section5">데이터 보안</a></li>
              <li><a href="#section6">쿠키 및 추적</a></li>
              <li><a href="#section7">사용자의 권리</a></li>
              <li><a href="#section8">데이터 보관</a></li>
              <li><a href="#section9">미성년자 보호</a></li>
              <li><a href="#section10">정책 변경</a></li>
              <li><a href="#section11">문의</a></li>
            </ul>
          </div>

          <div className="sidebar-box important">
            <h3>⚠️ 중요</h3>
            <p>본 정책에 동의하지 않으시면 서비스를 사용하지 마세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
