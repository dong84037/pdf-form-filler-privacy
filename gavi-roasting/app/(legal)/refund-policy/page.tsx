// 실제 서비스 전 법률/세무 전문가 검토 필요 — 전자상거래 등에서의 소비자보호에 관한 법률 표준 청약철회/환불 템플릿을 기반으로 작성한 placeholder입니다.
// 신선식품(로스팅 원두) 특성에 따른 청약철회 제한 여부는 반드시 법률 전문가 확인 후 확정할 것.
import Link from "next/link";
import { LegalArticle, LegalPageHeader } from "@/components/ui/LegalContent";
import { SHIPPING_FEE } from "@/lib/cart-calculations";
import { formatPriceKRW } from "@/lib/utils";

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <LegalPageHeader title="청약철회 및 환불 정책" lastUpdated="[작성 예정]" />

      <LegalArticle title="1. 청약철회 가능 기간">
        <p>
          이용자는 상품을 수령한 날로부터 7일 이내에 「전자상거래 등에서의 소비자보호에 관한
          법률」 제17조에 따라 청약철회를 요청할 수 있습니다.
        </p>
      </LegalArticle>

      <LegalArticle title="2. 청약철회가 제한되는 경우">
        <p>
          다음의 경우에는 청약철회가 제한될 수 있습니다. 이용자에게 책임 있는 사유로 상품이
          멸실·훼손된 경우, 이용자의 사용 또는 일부 소비로 상품의 가치가 현저히 감소한 경우,
          시간의 경과로 재판매가 곤란할 정도로 상품의 가치가 현저히 감소한 경우. 로스팅 원두는
          신선식품에 준하는 특성이 있어 포장 개봉 후에는 청약철회가 제한될 수 있으며, 정확한 기준은
          [입력 — 법률 전문가 확인 필요].
        </p>
      </LegalArticle>

      <LegalArticle title="3. 환불 절차 및 소요 기간">
        <p>
          청약철회 접수 후 반품 상품 확인이 완료되면, 결제수단 승인 취소 등 환불 절차를 진행하며
          영업일 기준 3~5일 이내에 환불이 완료됩니다. 카드 결제의 경우 카드사 사정에 따라 실제
          환불 반영까지 추가 기간이 소요될 수 있습니다.
        </p>
      </LegalArticle>

      <LegalArticle title="4. 반품 배송비 부담">
        <p>
          단순 변심에 의한 청약철회의 경우 반품 배송비는 이용자가 부담합니다(편도{" "}
          {formatPriceKRW(SHIPPING_FEE)} 기준, 변경될 수 있음). 상품 불량 또는 오배송 등 회사의
          귀책사유로 인한 청약철회의 경우 반품 배송비는 회사가 부담합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="5. 교환 및 환불 문의">
        <p>
          청약철회, 교환, 환불에 관한 문의는{" "}
          <Link href="/business-info" className="text-copper underline underline-offset-4">
            사업자정보
          </Link>
          에 기재된 이메일로 접수해 주시기 바랍니다.
        </p>
      </LegalArticle>
    </div>
  );
}
