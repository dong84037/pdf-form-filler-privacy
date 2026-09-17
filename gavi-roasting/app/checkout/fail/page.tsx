export default function CheckoutFailPage({
  searchParams,
}: {
  searchParams: { message?: string };
}) {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold">결제에 실패했습니다</h1>
      <p className="mt-4 text-neutral-500">
        {searchParams.message ?? "잠시 후 다시 시도해주세요."}
      </p>
    </div>
  );
}
