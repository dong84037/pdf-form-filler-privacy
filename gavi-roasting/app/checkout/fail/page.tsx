import Link from "next/link";

export default function CheckoutFailPage({
  searchParams,
}: {
  searchParams: { code?: string; message?: string; orderId?: string };
}) {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <h1 className="font-display text-3xl text-paper">결제에 실패했습니다</h1>
      <p className="mt-4 text-muted">{searchParams.message ?? "잠시 후 다시 시도해주세요."}</p>
      {searchParams.code && (
        <p className="mt-2 text-xs text-muted">오류 코드: {searchParams.code}</p>
      )}
      <Link href="/checkout" className="mt-6 inline-block text-copper underline underline-offset-4">
        다시 시도하기
      </Link>
    </div>
  );
}
