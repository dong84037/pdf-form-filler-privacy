"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

interface FormState {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  expectedMonthlyVolumeKg: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  companyName: "",
  contactName: "",
  phone: "",
  email: "",
  expectedMonthlyVolumeKg: "",
  message: "",
};

const FIELD_CLASSES =
  "mt-1 w-full border border-ink/15 bg-transparent px-3 py-2 text-sm text-paper placeholder:text-muted focus:border-copper focus:outline-none";

export function WholesaleInquiryForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function updateField(patch: Partial<FormState>) {
    setForm((prev) => ({ ...prev, ...patch }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !form.companyName.trim() ||
      !form.contactName.trim() ||
      !form.phone.trim() ||
      !form.email.trim()
    ) {
      setErrorMessage("업체명, 담당자, 연락처, 이메일은 필수 입력 항목입니다.");
      return;
    }

    setErrorMessage(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/wholesale-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.companyName,
          contactName: form.contactName,
          phone: form.phone,
          email: form.email,
          expectedMonthlyVolumeKg: form.expectedMonthlyVolumeKg
            ? Number(form.expectedMonthlyVolumeKg)
            : null,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "문의 접수에 실패했습니다.");
      }

      setStatus("success");
    } catch (error) {
      console.error("도매 문의 제출 실패", error);
      setErrorMessage(error instanceof Error ? error.message : "문의 접수에 실패했습니다.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-ink/10 p-8 text-center">
        <p className="font-display text-xl text-copper">문의가 접수되었습니다</p>
        <p className="mt-2 text-sm text-muted">
          담당자가 확인 후 입력하신 연락처로 안내드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="companyName" className="text-sm text-paper">
          업체명
        </label>
        <input
          id="companyName"
          value={form.companyName}
          onChange={(e) => updateField({ companyName: e.target.value })}
          placeholder="가비 카페"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="contactName" className="text-sm text-paper">
          담당자명
        </label>
        <input
          id="contactName"
          value={form.contactName}
          onChange={(e) => updateField({ contactName: e.target.value })}
          placeholder="홍길동"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm text-paper">
          연락처
        </label>
        <input
          id="phone"
          value={form.phone}
          onChange={(e) => updateField({ phone: e.target.value })}
          placeholder="010-0000-0000"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm text-paper">
          이메일
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => updateField({ email: e.target.value })}
          placeholder="you@example.com"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="expectedMonthlyVolumeKg" className="text-sm text-paper">
          예상 월 물량 (kg, 선택)
        </label>
        <input
          id="expectedMonthlyVolumeKg"
          type="number"
          min="0"
          value={form.expectedMonthlyVolumeKg}
          onChange={(e) => updateField({ expectedMonthlyVolumeKg: e.target.value })}
          placeholder="예: 20"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm text-paper">
          메시지 (선택)
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => updateField({ message: e.target.value })}
          rows={4}
          placeholder="문의 내용을 자유롭게 남겨주세요."
          className={FIELD_CLASSES}
        />
      </div>

      {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}

      <Button type="submit" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? "제출 중..." : "문의 제출하기"}
      </Button>
    </form>
  );
}
