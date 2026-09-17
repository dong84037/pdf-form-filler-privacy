import { CartTotal } from "@/lib/cart-calculations";
import { formatPriceKRW } from "@/lib/utils";

export function CartSummary({ subtotal, shippingFee, total }: CartTotal) {
  return (
    <div className="border border-white/10 p-6">
      <div className="flex justify-between text-sm text-muted">
        <span>상품금액</span>
        <span>{formatPriceKRW(subtotal)}</span>
      </div>
      <div className="mt-2 flex justify-between text-sm text-muted">
        <span>배송비</span>
        <span>{shippingFee === 0 ? "무료" : formatPriceKRW(shippingFee)}</span>
      </div>
      <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-base font-medium text-paper">
        <span>총 결제금액</span>
        <span className="text-copper">{formatPriceKRW(total)}</span>
      </div>
    </div>
  );
}
