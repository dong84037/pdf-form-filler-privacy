import { Button } from "@/components/ui/Button";

// 이메일 매직링크 로그인 — Supabase Auth 연동은 이후 Phase에서 진행됩니다.
export default function LoginPage() {
  return (
    <div className="mx-auto max-w-sm px-4 py-16">
      <h1 className="font-display text-3xl text-paper">로그인</h1>
      <p className="mt-2 text-sm text-muted">이메일로 로그인 링크를 받으세요.</p>
      <form className="mt-8 flex flex-col gap-3">
        <input
          type="email"
          placeholder="you@example.com"
          disabled
          className="border border-ink/15 bg-transparent px-3 py-2 text-sm text-paper placeholder:text-muted"
        />
        <Button disabled>매직링크 전송 (연동 전)</Button>
      </form>
    </div>
  );
}
