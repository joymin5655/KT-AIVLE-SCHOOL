import React from 'react';
import './PolicyStyles.css';

const TermsOfService = () => {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <h1>서비스 이용약관</h1>
        <p>마지막 업데이트: 2024년 11월</p>
      </div>

      <div className="policy-container">
        <div className="policy-content">
          <section className="policy-section">
            <h2>1. 총칙</h2>
            <h3>1.1 약관의 적용</h3>
            <p>
              본 약관은 포스처키퍼(이하 "서비스")의 이용에 관한 제반 조건 및 절차,
              그리고 회사와 사용자 간의 권리, 의무 및 책임사항을 규정합니다.
            </p>

            <h3>1.2 약관의 효력</h3>
            <p>
              본 약관에 동의하고 서비스에 가입한 모든 사용자에게 적용됩니다.
              약관을 수정하는 경우 공지사항을 통해 14일 전에 고지하고,
              고지 후 동의를 거쳐 효력을 발생합니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. 서비스의 제공</h2>
            <h3>2.1 서비스의 범위</h3>
            <p>포스처키퍼는 다음과 같은 서비스를 제공합니다:</p>
            <ul>
              <li>자세 분석 및 모니터링</li>
              <li>개인화된 스트레칭 가이드</li>
              <li>건강 통계 및 분석</li>
              <li>게이미피케이션 및 도전 과제</li>
              <li>커뮤니티 게시판</li>
              <li>AI 챗봇 상담</li>
            </ul>

            <h3>2.2 서비스 변경</h3>
            <p>
              회사는 기술적 문제 또는 보안상의 이유로 서비스 내용을
              사전 공지하고 변경할 수 있습니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. 사용자의 의무</h2>
            <h3>3.1 회원 정보</h3>
            <ul>
              <li>정확한 정보를 입력하고 항상 최신 상태로 유지해야 합니다</li>
              <li>본인의 계정과 비밀번호에 대한 관리 책임이 있습니다</li>
              <li>자신의 계정으로 발생한 모든 활동에 대해 책임집니다</li>
            </ul>

            <h3>3.2 금지 행위</h3>
            <p>사용자는 다음 행위를 하면 안 됩니다:</p>
            <ul>
              <li>법률 위반, 범죄 행위</li>
              <li>다른 사용자의 개인정보 도용</li>
              <li>부정확한 정보 입력 또는 타인의 정보 사용</li>
              <li>서비스의 정상적인 운영을 방해하는 행위</li>
              <li>저작권, 상표권 등의 지적재산권 침해</li>
              <li>욕설, 명예훼손, 개인정보 침해</li>
              <li>광고, 스팸, 상업적 목적의 정보 제공</li>
              <li>해킹, 버그 악용 등 시스템 위협</li>
              <li>다른 사용자의 권리 침해 행위</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. 서비스 요금</h2>
            <h3>4.1 무료 및 유료 서비스</h3>
            <p>
              포스처키퍼는 기본적으로 무료 서비스를 제공합니다.
              향후 프리미엄 서비스 도입 시 별도의 약관을 공지합니다.
            </p>

            <h3>4.2 환불 정책</h3>
            <p>
              유료 서비스에 가입한 경우, 구독 취소 시 다음 청구일까지
              서비스를 이용할 수 있습니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. 계정 보안</h2>
            <ul>
              <li>회사는 계정 보안을 위해 SSL 암호화를 사용합니다</li>
              <li>비밀번호는 절대 공유하지 마세요</li>
              <li>계정 탈취 의심 시 즉시 알려주세요</li>
              <li>회사는 기술적으로 합리적인 범위의 보안을 보장합니다</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. 지적재산권</h2>
            <h3>6.1 서비스의 소유권</h3>
            <p>
              포스처키퍼의 모든 콘텐츠, 디자인, 코드는 회사의
              지적재산권으로 보호됩니다.
            </p>

            <h3>6.2 사용자 저작물</h3>
            <p>
              사용자가 게시판에 올린 글, 댓글, 이미지는 회사에 면허를
              부여합니다. 회사는 이를 서비스 개선에 사용할 수 있습니다.
            </p>

            <h3>6.3 저작권 침해 신고</h3>
            <p>
              저작권 침해를 발견하면 support@posturekeeper.com으로
              신고해주세요. 30일 이내에 대응하겠습니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. 책임 제한</h2>
            <h3>7.1 의료 면책</h3>
            <p>
              포스처키퍼는 의료 서비스 제공 업체가 아닙니다.
              심각한 건강 문제가 있으면 의료 전문가와 상담하세요.
            </p>

            <h3>7.2 손해배상 제한</h3>
            <p>
              회사는 서비스 이용으로 인한 간접적, 부수적 손해에
              대해 책임지지 않습니다.
            </p>

            <h3>7.3 서비스 중단</h3>
            <p>
              유지보수, 기술적 문제, 보안상의 이유로 서비스를 중단할 수
              있습니다. 이에 따른 손해에는 책임지지 않습니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. 분쟁 해결</h2>
            <h3>8.1 분쟁 해결 절차</h3>
            <ul>
              <li>먼저 고객 지원팀에 문제를 보고합니다</li>
              <li>협의를 통해 해결합니다</li>
              <li>합의되지 않으면 중재를 신청할 수 있습니다</li>
            </ul>

            <h3>8.2 관할권</h3>
            <p>
              본 약관에 관한 모든 분쟁은 대한민국 법률을 준거법으로 하며,
              서울 중앙지방법원을 관할법원으로 합니다.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. 약관 위반</h2>
            <h3>9.1 벌칙</h3>
            <p>약관을 위반하는 경우 다음 조치를 취할 수 있습니다:</p>
            <ul>
              <li>경고 및 주의</li>
              <li>게시물 삭제</li>
              <li>계정 일시 정지</li>
              <li>계정 영구 삭제</li>
              <li>법적 조치</li>
            </ul>

            <h3>9.2 이의 제기</h3>
            <p>
              벌칙에 이의가 있으면 7일 이내에 support@posturekeeper.com으로
              문의하세요.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. 기타</h2>
            <h3>10.1 약관 외 규정</h3>
            <p>
              서비스에 관한 기타 규정은 회사의 정책에 따릅니다.
              이는 언제든지 변경될 수 있습니다.
            </p>

            <h3>10.2 과도한 조항</h3>
            <p>
              본 약관의 일부 조항이 무효라고 판단되면, 그 부분을 제외한
              나머지는 유효합니다.
            </p>

            <h3>10.3 연락처</h3>
            <p>
              약관 관련 질문이 있으시면 support@posturekeeper.com으로
              문의해주세요.
            </p>
          </section>
        </div>

        <div className="policy-sidebar">
          <div className="sidebar-box">
            <h3>목차</h3>
            <ul className="toc">
              <li><a href="#section1">총칙</a></li>
              <li><a href="#section2">서비스 제공</a></li>
              <li><a href="#section3">사용자 의무</a></li>
              <li><a href="#section4">서비스 요금</a></li>
              <li><a href="#section5">계정 보안</a></li>
              <li><a href="#section6">지적재산권</a></li>
              <li><a href="#section7">책임 제한</a></li>
              <li><a href="#section8">분쟁 해결</a></li>
              <li><a href="#section9">약관 위반</a></li>
              <li><a href="#section10">기타</a></li>
            </ul>
          </div>

          <div className="sidebar-box important">
            <h3>⚠️ 동의 필수</h3>
            <p>이 약관에 동의해야 서비스를 이용할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
