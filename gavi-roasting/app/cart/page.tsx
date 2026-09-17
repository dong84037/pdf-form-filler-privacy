"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { calculateCartTotal } from "@/lib/cart-calculations";
import { CartItem } from "@/components/features/cart/CartItem";
import { CartSummary } from "@/components/features/cart/CartSummary";
import { BUTTON_BASE_CLASSES, BUTTON_VARIANT_CLASSES } from "@/components/ui/Button";

export default function CartPage() {
  const lines = useCartStore((state) => state.lines);
  const total = calculateCartTotal(lines);

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-3xl text-paper">장바구니</h1>
        <p className="mt-8 text-muted">장바구니가 비어있습니다.</p>
        <Link href="/products" className="mt-4 inline-block text-copper underline underline-offset-4">
          원두 보러가기
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl text-paper">장바구니</h1>

      <div className="mt-8 border-t border-white/10">
        {lines.map((line) => (
          <CartItem key={`${line.productId}-${line.optionId}`} line={line} />
        ))}
      </div>

      <div className="mt-8">
        <CartSummary {...total} />
      </div>

      <Link
        href="/checkout"
        className={`mt-6 block w-full text-center ${BUTTON_BASE_CLASSES} ${BUTTON_VARIANT_CLASSES.primary}`}
      >
        체크아웃으로 이동
      </Link>
    </div>
  );
}
