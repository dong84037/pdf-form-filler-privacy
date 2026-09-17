import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

interface WholesaleInquiryPayload {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  expectedMonthlyVolumeKg: number | null;
  message: string;
}

function parsePayload(body: unknown): WholesaleInquiryPayload | null {
  if (typeof body !== "object" || body === null) return null;
  const { companyName, contactName, phone, email, expectedMonthlyVolumeKg, message } =
    body as Record<string, unknown>;

  if (typeof companyName !== "string" || companyName.trim() === "") return null;
  if (typeof contactName !== "string" || contactName.trim() === "") return null;
  if (typeof phone !== "string" || phone.trim() === "") return null;
  if (typeof email !== "string" || email.trim() === "") return null;
  if (expectedMonthlyVolumeKg !== null && typeof expectedMonthlyVolumeKg !== "number") return null;
  if (message !== undefined && typeof message !== "string") return null;

  return {
    companyName: companyName.trim(),
    contactName: contactName.trim(),
    phone: phone.trim(),
    email: email.trim(),
    expectedMonthlyVolumeKg,
    message: typeof message === "string" ? message.trim() : "",
  };
}

// 도매 문의 제출 처리 — supabase/schema.sql의 wholesale_inquiries 테이블에 저장한다.
export async function POST(request: Request) {
  let payload: WholesaleInquiryPayload | null;
  try {
    payload = parsePayload(await request.json());
  } catch {
    payload = null;
  }

  if (!payload) {
    return NextResponse.json(
      { error: "업체명, 담당자, 연락처, 이메일을 정확히 입력해주세요." },
      { status: 400 }
    );
  }

  try {
    const supabase = createClient();
    const { error } = await supabase.from("wholesale_inquiries").insert({
      company_name: payload.companyName,
      contact_name: payload.contactName,
      phone: payload.phone,
      email: payload.email,
      expected_monthly_volume_kg: payload.expectedMonthlyVolumeKg,
      message: payload.message,
    });

    if (error) {
      console.error("도매 문의 저장 실패", error);
      return NextResponse.json(
        { error: "문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("도매 문의 처리 중 오류", error);
    return NextResponse.json(
      { error: "문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
