import { NextResponse } from "next/server";

// 토스페이먼츠 결제 승인 콜백 — 실제 승인 API 연동은 Phase 5에서 진행됩니다.
export async function POST() {
  return NextResponse.json(
    { error: "결제 연동이 아직 준비되지 않았습니다." },
    { status: 501 }
  );
}
