import { NextResponse } from "next/server";

// 도매 문의 제출 처리 — Supabase wholesale_inquiries 저장 로직은 Phase 6에서 연동됩니다.
export async function POST() {
  return NextResponse.json(
    { error: "도매 문의 접수가 아직 준비되지 않았습니다." },
    { status: 501 }
  );
}
