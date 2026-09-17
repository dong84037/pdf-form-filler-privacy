// 실제 서비스 전 법률/세무 전문가 검토 필요 — 표준 쿠키정책 템플릿을 기반으로 작성한 placeholder입니다.
import { LegalArticle, LegalPageHeader } from "@/components/ui/LegalContent";

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <LegalPageHeader title="쿠키정책" lastUpdated="[작성 예정]" />

      <LegalArticle title="1. 쿠키란">
        <p>
          쿠키(Cookie)는 웹사이트를 운영하는 데 이용되는 서버가 이용자의 브라우저에 보내는 작은
          텍스트 파일로, 이용자의 컴퓨터에 저장됩니다.
        </p>
      </LegalArticle>

      <LegalArticle title="2. 쿠키의 사용 목적">
        <p>
          가비 로스팅은 로그인 상태 유지, 장바구니 정보 저장 등 이용자 편의를 위해 쿠키 및 유사한
          브라우저 저장 기술(localStorage)을 사용합니다. 별도의 광고·추적 목적 쿠키는 사용하지
          않습니다.
        </p>
      </LegalArticle>

      <LegalArticle title="3. 쿠키의 설치·운영 및 거부">
        <p>
          이용자는 웹 브라우저 설정을 통해 쿠키 저장을 허용하거나 거부할 수 있습니다. 다만 쿠키
          저장을 거부할 경우 로그인 유지, 장바구니 저장 등 일부 서비스 이용에 어려움이 있을 수
          있습니다.
        </p>
      </LegalArticle>
    </div>
  );
}
