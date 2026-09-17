import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/payments/confirm/route";

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/payments/confirm", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

describe("POST /api/payments/confirm", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("필수 값이 없으면 400을 반환한다", async () => {
    const res = await POST(makeRequest({ paymentKey: "pk_1" }));
    expect(res.status).toBe(400);
  });

  it("amount가 숫자가 아니면 400을 반환한다", async () => {
    const res = await POST(makeRequest({ paymentKey: "pk_1", orderId: "order_1", amount: "18000" }));
    expect(res.status).toBe(400);
  });

  it("잘못된 JSON 본문이면 400을 반환한다", async () => {
    const res = await POST(
      new Request("http://localhost/api/payments/confirm", { method: "POST", body: "not-json" })
    );
    expect(res.status).toBe(400);
  });

  it("토스페이먼츠 승인이 성공하면 승인 결과를 그대로 반환한다", async () => {
    const mockResult = { paymentKey: "pk_1", orderId: "order_1", status: "DONE", totalAmount: 18000 };
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResult,
      })
    );

    const res = await POST(makeRequest({ paymentKey: "pk_1", orderId: "order_1", amount: 18000 }));
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data).toEqual(mockResult);
  });

  it("토스페이먼츠가 승인을 거절하면 사용자 친화적 메시지와 원래 상태 코드를 전달한다", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 400,
        json: async () => ({ message: "카드 승인이 거절되었습니다." }),
      })
    );

    const res = await POST(makeRequest({ paymentKey: "pk_1", orderId: "order_1", amount: 18000 }));
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toBe("카드 승인이 거절되었습니다.");
  });

  it("네트워크 오류가 발생하면 500과 함께 재시도 안내 메시지를 반환한다", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network down")));

    const res = await POST(makeRequest({ paymentKey: "pk_1", orderId: "order_1", amount: 18000 }));
    const data = await res.json();

    expect(res.status).toBe(500);
    expect(data.error).toContain("다시 시도");
  });
});
