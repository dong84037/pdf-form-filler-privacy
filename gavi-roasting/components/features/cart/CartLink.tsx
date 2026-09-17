"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";

export function CartLink() {
  const itemCount = useCartStore((state) =>
    state.lines.reduce((sum, line) => sum + line.quantity, 0)
  );

  return (
    <Link href="/cart" className="hover:text-copper">
      장바구니{itemCount > 0 && <span className="ml-1 text-copper">({itemCount})</span>}
    </Link>
  );
}
