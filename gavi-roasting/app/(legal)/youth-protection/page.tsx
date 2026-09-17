// 실제 서비스 전 법률/세무 전문가 검토 필요 — 표준 청소년보호정책 템플릿을 기반으로 작성한 placeholder입니다.
import { LegalArticle, LegalPageHeader } from "@/components/ui/LegalContent";

export default function YouthProtectionPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <LegalPageHeader title="청소년보호정책" lastUpdated="[작성 예정]" />

      <LegalArticle title="1. 목적">
        <p>
          가비 로스팅은 청소년이 유해한 환경으로부터 보호받을 수 있도록 「청소년보호법」에 따라
          다음과 같은 청소년보호정책을 수립·시행합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="2. 청소년보호 책임자 지정">
        <p>성명: [입력] · 직책: [입력] · 연락처: [이메일 입력]</p>
      </LegalArticle>

      <LegalArticle title="3. 유해정보로부터의 청소년 보호 대책">
        <p>
          회사는 청소년에게 유해한 정보가 몰 내에 게시되지 않도록 관리하며, 이용자가 게시한 정보 중
          청소년에게 유해한 정보를 발견할 경우 관련 법령에 따라 삭제 등 조치를 취합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="4. 상담 및 신고">
        <p>
          청소년 유해정보로 의심되는 내용을 발견하신 경우 청소년보호 책임자 연락처로 신고해 주시기
          바랍니다. 신고 접수 후 신속히 확인하여 조치하겠습니다.
        </p>
      </LegalArticle>
    </div>
  );
}
