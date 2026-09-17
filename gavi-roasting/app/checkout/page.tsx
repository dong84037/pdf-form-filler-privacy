"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { useCartStore } from "@/lib/cart-store";
import { calculateCartTotal } from "@/lib/cart-calculations";
import { CartSummary } from "@/components/features/cart/CartSummary";
import { ShippingForm, ShippingFormValue } from "@/components/features/checkout/ShippingForm";
import {
  TossPaymentWidget,
  TossPaymentWidgetHandle,
} from "@/components/features/checkout/TossPaymentWidget";
import { Button } from "@/components/ui/Button";
import { buildOrderName, formatPriceKRW } from "@/lib/utils";

const EMPTY_SHIPPING_FORM: ShippingFormValue = {
  recipientName: "",
  recipientPhone: "",
  address: "",
  requestMessage: "",
};

export default function CheckoutPage() {
  const lines = useCartStore((state) => state.lines);
  const total = calculateCartTotal(lines);
  const [shipping, setShipping] = useState<ShippingFormValue>(EMPTY_SHIPPING_FORM);
  const [orderId] = useState(() => crypto.randomUUID());
  const [widgetReady, setWidgetReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const widgetRef = useRef<TossPaymentWidgetHandle>(null);

  const orderName = useMemo(() => buildOrderName(lines), [lines]);
  const shippingComplete =
    shipping.recipientName.trim() !== "" &&
    shipping.recipientPhone.trim() !== "" &&
    shipping.address.trim() !== "";

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-3xl text-paper">주문/결제</h1>
        <p className="mt-8 text-muted">장바구니가 비어있습니다.</p>
        <Link href="/products" className="mt-4 inline-block text-copper underline underline-offset-4">
          원두 보러가기
        </Link>
      </div>
    );
  }

  async function handlePayment() {
    if (!shippingComplete) {
      setErrorMessage("수령인, 연락처, 배송지 주소를 입력해주세요.");
      return;
    }

    setErrorMessage(null);
    setSubmitting(true);
    try {
      await widgetRef.current?.requestPayment({
        orderId,
        orderName,
        customerName: shipping.recipientName,
      });
      // 요청이 성공하면 successUrl로 페이지가 이동하므로 이후 코드는 실행되지 않는다.
    } catch (error) {
      console.error("결제 요청 실패", error);
      setErrorMessage("결제 요청 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl text-paper">주문/결제</h1>

      <section className="mt-8">
        <h2 className="font-display text-lg text-paper">주문 상품</h2>
        <div className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
          {lines.map((line) => (
            <div
              key={`${line.productId}-${line.optionId}`}
              className="flex items-center justify-between py-3 text-sm"
            >
              <div>
                <p className="text-paper">{line.productName}</p>
                <p className="text-muted">
                  {line.optionLabel} · {line.quantity}개
                </p>
              </div>
              <p className="text-paper">{formatPriceKRW(line.unitPrice * line.quantity)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-lg text-paper">배송 정보</h2>
        <div className="mt-4">
          <ShippingForm
            value={shipping}
            onChange={(patch) => setShipping((prev) => ({ ...prev, ...patch }))}
          />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-lg text-paper">결제 수단</h2>
        <p className="mt-1 text-xs text-muted">
          테스트 모드입니다. 실제로 청구되지 않습니다. 카드 결제 시 임의의 카드번호를 입력해도
          승인됩니다.
        </p>
        <div className="mt-4">
          <TossPaymentWidget
            ref={widgetRef}
            amount={total.total}
            onReadyChange={setWidgetReady}
            onError={setErrorMessage}
          />
        </div>
      </section>

      <section className="mt-8">
        <CartSummary {...total} />
      </section>

      {errorMessage && <p className="mt-4 text-sm text-red-400">{errorMessage}</p>}

      <Button
        onClick={handlePayment}
        disabled={!widgetReady || submitting}
        className="mt-6 w-full"
      >
        {submitting ? "결제 요청 중..." : `${formatPriceKRW(total.total)} 결제하기`}
      </Button>
    </div>
  );
}
