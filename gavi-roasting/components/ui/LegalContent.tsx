import { ReactNode } from "react";

export function LegalPageHeader({ title, lastUpdated }: { title: string; lastUpdated: string }) {
  return (
    <div>
      <h1 className="font-display text-2xl text-paper">{title}</h1>
      <p className="mt-2 text-sm text-muted">최종 수정일: {lastUpdated}</p>
    </div>
  );
}

export function LegalArticle({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-base text-copper">{title}</h2>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted">{children}</div>
    </section>
  );
}
