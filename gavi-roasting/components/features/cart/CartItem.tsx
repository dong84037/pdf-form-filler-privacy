"use client";

import { CartLine, useCartStore } from "@/lib/cart-store";
import { formatPriceKRW } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function CartItem({ line }: { line: CartLine }) {
  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeLine = useCartStore((state) => state.removeLine);

  return (
    <div className="flex gap-4 border-b border-white/10 py-4">
      <PlaceholderImage
        filename={`${line.productSlug}.jpg`}
        className="h-16 w-16 flex-shrink-0"
      />
      <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-paper">{line.productName}</p>
          <p className="text-xs text-muted">{line.optionLabel}</p>
          <p className="mt-1 text-sm text-copper">{formatPriceKRW(line.unitPrice)}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-white/15">
            <button
              type="button"
              onClick={() =>
                setQuantity(line.productId, line.optionId, Math.max(1, line.quantity - 1))
              }
              className="px-3 py-1 text-paper hover:text-copper"
              aria-label="수량 감소"
            >
              −
            </button>
            <span className="w-10 text-center text-paper">{line.quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(line.productId, line.optionId, line.quantity + 1)}
              className="px-3 py-1 text-paper hover:text-copper"
              aria-label="수량 증가"
            >
              +
            </button>
          </div>
          <p className="w-20 text-right text-sm text-paper">
            {formatPriceKRW(line.unitPrice * line.quantity)}
          </p>
          <button
            type="button"
            onClick={() => removeLine(line.productId, line.optionId)}
            className="text-xs text-muted hover:text-copper"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
