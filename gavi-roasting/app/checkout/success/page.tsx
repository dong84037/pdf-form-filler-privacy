"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCartStore } from "@/lib/cart-store";
import { formatPriceKRW } from "@/lib/utils";

type ConfirmState =
  | { status: "confirming" }
  | { status: "success"; orderId: string; amount: number }
  | { status: "error"; message: string };

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const clearCart = useCartStore((state) => state.clear);
  const [state, setState] = useState<ConfirmState>({ status: "confirming" });

  useEffect(() => {
    const paymentKey = searchParams.get("paymentKey");
    const orderId = searchParams.get("orderId");
    const amount = searchParams.get("amount");

    if (!paymentKey || !orderId || !amount) {
      setState({ status: "error", message: "결제 정보가 올바르지 않습니다." });
      return;
    }

    let cancelled = false;

    // 결제위젯의 requestPayment 성공은 승인 전 상태다. 여기서 서버의 결제 승인 API를 호출해야
    // 결제가 최종 완료된다.
    async function confirm() {
      try {
        const response = await fetch("/api/payments/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentKey, orderId, amount: Number(amount) }),
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error ?? "결제 승인에 실패했습니다.");
        }

        if (!cancelled) {
          clearCart();
          setState({ status: "success", orderId: orderId as string, amount: Number(amount) });
        }
      } catch (error) {
        console.error("결제 승인 확인 실패", error);
        if (!cancelled) {
          setState({
            status: "error",
            message: error instanceof Error ? error.message : "결제 승인에 실패했습니다.",
          });
        }
      }
    }

    confirm();
    return () => {
      cancelled = true;
    };
  }, [searchParams, clearCart]);

  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      {state.status === "confirming" && <p className="text-muted">결제를 확인하고 있습니다...</p>}

      {state.status === "success" && (
        <>
          <h1 className="font-display text-3xl text-copper">결제가 완료되었습니다</h1>
          <p className="mt-4 text-muted">
            주문번호 {state.orderId} · 결제금액 {formatPriceKRW(state.amount)}
          </p>
          <Link
            href="/mypage"
            className="mt-6 inline-block text-copper underline underline-offset-4"
          >
            주문내역 확인하기
          </Link>
        </>
      )}

      {state.status === "error" && (
        <>
          <h1 className="font-display text-3xl text-paper">결제 확인에 실패했습니다</h1>
          <p className="mt-4 text-muted">{state.message}</p>
          <Link href="/cart" className="mt-6 inline-block text-copper underline underline-offset-4">
            장바구니로 돌아가기
          </Link>
        </>
      )}
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-lg px-4 py-16 text-center text-muted">불러오는 중...</div>}>
      <CheckoutSuccessContent />
    </Suspense>
  );
}
