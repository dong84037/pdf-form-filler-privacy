import { NextResponse } from "next/server";
import { TOSS_PAYMENT_MODE } from "@/lib/toss/config";

// 토스페이먼츠 결제위젯 문서 공개 테스트 시크릿 키. 브라우저에 노출되면 안 되므로 이 서버 라우트 밖으로 절대 내보내지 않는다.
const TEST_SECRET_KEY = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";

// 라이브 전환 전 확인 필요:
// 사업자등록 + 통신판매업 신고 + 토스페이먼츠 PG 가맹심사가 끝나기 전까지는
// TOSS_PAYMENT_MODE가 "test"로 고정되어 있어 이 함수는 항상 테스트 시크릿 키를 사용한다.
function getSecretKey(): string {
  if (TOSS_PAYMENT_MODE === "live") {
    const liveSecretKey = process.env.TOSS_LIVE_SECRET_KEY;
    if (!liveSecretKey) {
      throw new Error("TOSS_LIVE_SECRET_KEY 환경변수가 설정되지 않았습니다.");
    }
    return liveSecretKey;
  }
  return TEST_SECRET_KEY;
}

interface ConfirmPayload {
  paymentKey: string;
  orderId: string;
  amount: number;
}

function parseConfirmPayload(body: unknown): ConfirmPayload | null {
  if (typeof body !== "object" || body === null) return null;
  const { paymentKey, orderId, amount } = body as Record<string, unknown>;
  if (typeof paymentKey !== "string" || paymentKey.length === 0) return null;
  if (typeof orderId !== "string" || orderId.length === 0) return null;
  if (typeof amount !== "number" || Number.isNaN(amount)) return null;
  return { paymentKey, orderId, amount };
}

// 토스페이먼츠 결제위젯이 successUrl로 넘겨준 paymentKey/orderId/amount로 결제 승인 API를 호출한다.
// 이 승인 호출이 성공해야 결제가 최종적으로 완료된다 (위젯의 requestPayment 성공만으로는 아직 승인 전 상태).
export async function POST(request: Request) {
  let payload: ConfirmPayload | null;
  try {
    payload = parseConfirmPayload(await request.json());
  } catch {
    payload = null;
  }

  if (!payload) {
    return NextResponse.json({ error: "잘못된 결제 승인 요청입니다." }, { status: 400 });
  }

  try {
    const secretKey = getSecretKey();
    const response = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${secretKey}:`).toString("base64")}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      // 토스페이먼츠가 승인을 거절한 경우 — 사용자에게는 안내 메시지만 노출하고 상세 원인은 서버 로그로 남긴다.
      console.error("토스페이먼츠 결제 승인 거절", data);
      return NextResponse.json(
        { error: data.message ?? "결제 승인에 실패했습니다." },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("토스페이먼츠 결제 승인 처리 중 오류", error);
    return NextResponse.json(
      { error: "결제 승인 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
