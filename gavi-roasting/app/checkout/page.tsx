"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/lib/cart-store";
import { calculateCartTotal } from "@/lib/cart-calculations";
import { CartSummary } from "@/components/features/cart/CartSummary";
import { ShippingForm, ShippingFormValue } from "@/components/features/checkout/ShippingForm";
import { Button } from "@/components/ui/Button";
import { formatPriceKRW } from "@/lib/utils";

const EMPTY_SHIPPING_FORM: ShippingFormValue = {
  recipientName: "",
  recipientPhone: "",
  address: "",
  requestMessage: "",
};

// 토스페이먼츠 결제위젯 연동은 Phase 5에서 진행됩니다. 지금은 주문 요약과 배송지 입력 UI만 구성합니다.
export default function CheckoutPage() {
  const lines = useCartStore((state) => state.lines);
  const total = calculateCartTotal(lines);
  const [shipping, setShipping] = useState<ShippingFormValue>(EMPTY_SHIPPING_FORM);

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

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl text-paper">주문/결제</h1>

      <section className="mt-8">
        <h2 className="font-display text-lg text-paper">주문 상품</h2>
        <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
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
        <CartSummary {...total} />
      </section>

      <section className="mt-8 border border-dashed border-white/15 p-6 text-center text-sm text-muted">
        토스페이먼츠 결제위젯 영역 — Phase 5에서 연동됩니다.
      </section>

      <Button disabled className="mt-6 w-full">
        결제하기 (Phase 5에서 연동)
      </Button>
    </div>
  );
}
