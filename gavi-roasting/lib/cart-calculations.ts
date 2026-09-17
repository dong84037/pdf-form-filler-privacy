import { CartLine } from "./cart-store";

export const FREE_SHIPPING_THRESHOLD = 50000; // 5만원 이상 구매 시 배송비 무료
export const SHIPPING_FEE = 3500;

export interface CartTotal {
  subtotal: number;
  shippingFee: number;
  total: number;
}

// 장바구니가 비어있으면 배송비를 매기지 않고, 상품금액이 무료배송 기준 미만이면 고정 배송비를 더한다.
export function calculateCartTotal(lines: CartLine[]): CartTotal {
  const subtotal = lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0);
  const shippingFee = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  return { subtotal, shippingFee, total: subtotal + shippingFee };
}
