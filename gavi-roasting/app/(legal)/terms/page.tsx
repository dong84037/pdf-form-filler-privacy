// 실제 서비스 전 법률/세무 전문가 검토 필요 — 표준 이용약관 템플릿을 기반으로 작성한 placeholder입니다.
import { LegalArticle, LegalPageHeader } from "@/components/ui/LegalContent";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <LegalPageHeader title="이용약관" lastUpdated="[작성 예정]" />

      <LegalArticle title="제1조 (목적)">
        <p>
          이 약관은 가비 로스팅(이하 &quot;회사&quot;)이 운영하는 온라인 쇼핑몰(이하
          &quot;몰&quot;)에서 제공하는 인터넷 관련 서비스를 이용함에 있어 회사와 이용자의 권리,
          의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제2조 (정의)">
        <p>
          &quot;몰&quot;이란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등
          정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을
          말합니다. &quot;이용자&quot;란 몰에 접속하여 이 약관에 따라 회사가 제공하는 서비스를
          받는 회원 및 비회원을 말합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제3조 (약관의 게시와 개정)">
        <p>
          회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 몰의 초기 서비스화면에 게시합니다.
          회사는 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있으며, 개정 시 적용일자
          및 개정사유를 명시하여 현행 약관과 함께 적용일자 7일 전부터 공지합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제4조 (서비스의 제공 및 변경)">
        <p>
          회사는 원두 및 관련 상품 판매, 상품 정보 제공, 구매계약이 체결된 상품의 배송 등의
          서비스를 제공합니다. 회사는 상품 품절 또는 기술적 사양 변경 등의 경우 향후 제공할
          서비스의 내용을 변경할 수 있으며, 이 경우 변경된 서비스의 내용 및 제공일자를 몰에
          공지합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제5조 (서비스의 중단)">
        <p>
          회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한
          경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제6조 (회원가입 및 로그인)">
        <p>
          이용자는 회사가 정한 절차에 따라 이메일 주소로 가입 신청을 하며, 회사는 이메일로
          발송되는 로그인 링크(매직링크) 인증을 통해 회원가입을 승낙합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제7조 (구매신청 및 계약의 성립)">
        <p>
          이용자는 몰에서 구매할 상품을 장바구니에 담고 배송 정보를 입력한 후 결제수단을 선택하여
          구매를 신청합니다. 회사가 이용자의 구매신청에 대해 결제 승인을 완료한 시점에 계약이
          성립한 것으로 봅니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제8조 (지급방법)">
        <p>
          몰에서 구매한 상품에 대한 대금 지급은 전자결제대행(PG)사가 제공하는 신용카드, 계좌이체,
          간편결제 등의 방법으로 할 수 있습니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제9조 (배송)">
        <p>
          회사는 이용자와 상품구매에 관한 계약을 체결한 날로부터 배송정책에서 정한 기간 내에 상품을
          배송할 수 있도록 조치합니다. 배송에 관한 상세 내용은 배송정책 페이지를 따릅니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제10조 (청약철회 및 환불)">
        <p>
          이용자의 청약철회 및 환불에 관한 사항은 전자상거래 등에서의 소비자보호에 관한 법률에
          따르며, 상세 내용은 청약철회 및 환불 정책 페이지를 따릅니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제11조 (개인정보보호)">
        <p>
          회사는 이용자의 개인정보를 보호하기 위해 관련 법령에서 정하는 바를 준수하며, 상세 내용은
          개인정보처리방침 페이지를 따릅니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제12조 (회사의 의무)">
        <p>
          회사는 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고
          안정적으로 서비스를 제공하기 위해 노력합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제13조 (이용자의 의무)">
        <p>
          이용자는 신청 또는 변경 시 허위 내용을 등록하지 않으며, 회사가 게시한 정보를 변경하거나
          회사의 지적재산권을 침해하는 행위를 해서는 안 됩니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제14조 (분쟁해결 및 재판권)">
        <p>
          회사와 이용자 간 발생한 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기하며, 이 약관은
          대한민국 법령에 따라 규율되고 해석됩니다.
        </p>
      </LegalArticle>

      <LegalArticle title="부칙">
        <p>이 약관은 [작성 예정]부터 적용됩니다.</p>
      </LegalArticle>
    </div>
  );
}
