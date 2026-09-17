import { WholesaleInquiryForm } from "@/components/features/wholesale/WholesaleInquiryForm";

export default function WholesalePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-display text-3xl text-paper">도매 문의</h1>
      <p className="mt-4 text-muted">
        카페·업체용 원두 도매 문의를 남겨주시면 담당자가 확인 후 연락드립니다. 결제와는 무관한
        문의 접수 절차입니다.
      </p>

      <div className="mt-10">
        <WholesaleInquiryForm />
      </div>
    </div>
  );
}
