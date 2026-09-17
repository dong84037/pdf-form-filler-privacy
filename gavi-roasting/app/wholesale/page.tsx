// Phase 6에서 폼 상태 + /api/wholesale-inquiry 제출 로직으로 교체됩니다.
export default function WholesalePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-display text-3xl text-paper">도매 문의</h1>
      <p className="mt-4 text-muted">
        카페·업체용 원두 도매 문의를 남겨주시면 담당자가 확인 후 연락드립니다.
      </p>
      <p className="mt-8 text-sm text-muted">문의 폼은 Phase 6에서 연동됩니다.</p>
    </div>
  );
}
