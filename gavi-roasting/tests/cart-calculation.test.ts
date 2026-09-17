import { describe, expect, it } from "vitest";
import { calculateCartTotal, FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from "@/lib/cart-calculations";
import { CartLine } from "@/lib/cart-store";

function line(overrides: Partial<CartLine> = {}): CartLine {
  return {
    productId: "p1",
    productSlug: "ethiopia-yirgacheffe",
    productName: "에티오피아 예가체프 G1",
    optionId: "p1-200g",
    optionLabel: "200g",
    unitPrice: 18000,
    quantity: 1,
    ...overrides,
  };
}

describe("calculateCartTotal", () => {
  it("빈 장바구니는 배송비 없이 0원", () => {
    expect(calculateCartTotal([])).toEqual({ subtotal: 0, shippingFee: 0, total: 0 });
  });

  it("무료배송 기준 미만이면 고정 배송비가 붙는다", () => {
    const result = calculateCartTotal([line({ unitPrice: 18000, quantity: 1 })]);
    expect(result.subtotal).toBe(18000);
    expect(result.shippingFee).toBe(SHIPPING_FEE);
    expect(result.total).toBe(18000 + SHIPPING_FEE);
  });

  it("무료배송 기준을 정확히 만족하면 배송비가 0원", () => {
    const result = calculateCartTotal([
      line({ unitPrice: FREE_SHIPPING_THRESHOLD, quantity: 1 }),
    ]);
    expect(result.subtotal).toBe(FREE_SHIPPING_THRESHOLD);
    expect(result.shippingFee).toBe(0);
    expect(result.total).toBe(FREE_SHIPPING_THRESHOLD);
  });

  it("여러 상품 라인의 수량을 곱해 합산한다", () => {
    const result = calculateCartTotal([
      line({ productId: "p1", optionId: "p1-200g", unitPrice: 18000, quantity: 2 }),
      line({ productId: "p2", optionId: "p2-1kg", unitPrice: 71000, quantity: 1 }),
    ]);
    expect(result.subtotal).toBe(18000 * 2 + 71000);
    expect(result.shippingFee).toBe(0);
    expect(result.total).toBe(result.subtotal);
  });
});
