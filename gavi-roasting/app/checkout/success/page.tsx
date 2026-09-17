export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { orderId?: string; amount?: string };
}) {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold">결제가 완료되었습니다</h1>
      <p className="mt-4 text-neutral-500">
        주문번호 {searchParams.orderId ?? "-"} · 결제금액 {searchParams.amount ?? "-"}원
      </p>
    </div>
  );
}
