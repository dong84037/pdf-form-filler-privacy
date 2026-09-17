// 실제 서비스 전 법률/세무 전문가 검토 필요 — 표준 배송정책 템플릿을 기반으로 작성한 placeholder입니다.
import { LegalArticle, LegalPageHeader } from "@/components/ui/LegalContent";
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from "@/lib/cart-calculations";
import { formatPriceKRW } from "@/lib/utils";

export default function ShippingPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <LegalPageHeader title="배송정책" lastUpdated="[작성 예정]" />

      <LegalArticle title="1. 배송 지역">
        <p>대한민국 전역으로 배송합니다. 제주 및 도서산간 지역은 추가 배송비가 발생할 수 있습니다(추가 배송비: [입력]).</p>
      </LegalArticle>

      <LegalArticle title="2. 배송 방법 및 업체">
        <p>배송 업체: [택배사 입력]. 주문 시 입력한 배송지로 발송하며, 송장번호는 발송 완료 후 안내드립니다.</p>
      </LegalArticle>

      <LegalArticle title="3. 배송 기간">
        <p>
          결제 완료 후 영업일 기준 [입력]일 이내에 발송합니다. 원두는 주문 후 로스팅하는 특성상
          일반 상품보다 발송까지 시간이 더 소요될 수 있습니다.
        </p>
      </LegalArticle>

      <LegalArticle title="4. 배송비">
        <p>
          상품금액 {formatPriceKRW(FREE_SHIPPING_THRESHOLD)} 이상 구매 시 배송비가 무료이며, 미만인
          경우 {formatPriceKRW(SHIPPING_FEE)}의 배송비가 부과됩니다.
        </p>
      </LegalArticle>

      <LegalArticle title="5. 배송 지연 안내">
        <p>
          천재지변, 물류 업체 사정 등 회사가 통제할 수 없는 사유로 배송이 지연될 경우, 몰 공지 또는
          개별 안내를 통해 사유와 예상 지연 기간을 알려드립니다.
        </p>
      </LegalArticle>
    </div>
  );
}
