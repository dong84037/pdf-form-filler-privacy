"use client";

import { useState } from "react";
import { ProductOption } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { formatPriceKRW, isOutOfStock } from "@/lib/utils";

export function ProductOptionSelector({ options }: { options: ProductOption[] }) {
  const firstAvailable = options.find((option) => !isOutOfStock(option.stock)) ?? options[0];
  const [selectedId, setSelectedId] = useState(firstAvailable.id);
  const [quantity, setQuantity] = useState(1);

  const selected = options.find((option) => option.id === selectedId) ?? firstAvailable;
  const selectedSoldOut = isOutOfStock(selected.stock);

  return (
    <div className="mt-6">
      <p className="text-xl font-medium text-copper">{formatPriceKRW(selected.price)}</p>

      <div className="mt-6">
        <p className="text-sm font-medium text-paper">용량 선택</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {options.map((option) => {
            const soldOut = isOutOfStock(option.stock);
            const active = option.id === selectedId;
            return (
              <button
                key={option.id}
                type="button"
                disabled={soldOut}
                onClick={() => setSelectedId(option.id)}
                className={`border px-4 py-2 text-sm transition-colors ${
                  active ? "border-copper text-copper" : "border-white/15 text-paper"
                } ${soldOut ? "cursor-not-allowed opacity-40" : "hover:border-copper/60"}`}
              >
                {option.label}
                {soldOut && " (품절)"}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <p className="text-sm font-medium text-paper">수량</p>
        <div className="flex items-center border border-white/15">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 text-paper hover:text-copper"
            aria-label="수량 감소"
          >
            −
          </button>
          <span className="w-10 text-center text-paper">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 text-paper hover:text-copper"
            aria-label="수량 증가"
          >
            +
          </button>
        </div>
      </div>

      <Button disabled={selectedSoldOut} className="mt-8 w-full">
        {selectedSoldOut ? "품절" : "장바구니 담기 (연동 전)"}
      </Button>
    </div>
  );
}
