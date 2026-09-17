import Link from "next/link";

const LEGAL_LINKS = [
  { href: "/terms", label: "이용약관" },
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/refund-policy", label: "청약철회/환불 정책" },
  { href: "/business-info", label: "사업자정보" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">
        <nav className="flex flex-wrap gap-4">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6">
          상호 [상호명 입력] · 대표 [대표자명 입력] · 사업자등록번호 [사업자등록번호 입력]
        </p>
        <p className="mt-1">문의: [이메일 입력]</p>
      </div>
    </footer>
  );
}
