import Link from "next/link";

const NAV_LINKS = [
  { href: "/products", label: "원두" },
  { href: "/story", label: "브랜드 스토리" },
  { href: "/wholesale", label: "도매 문의" },
];

export function Header() {
  return (
    <header className="border-b border-white/10 bg-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-xl tracking-tight text-copper">
          Gavi Roasting
        </Link>
        <nav className="hidden gap-6 text-sm text-paper/80 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-copper">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-sm text-paper/80">
          <Link href="/mypage/login" className="hover:text-copper">
            로그인
          </Link>
          <Link href="/cart" className="hover:text-copper">
            장바구니
          </Link>
        </div>
      </div>
    </header>
  );
}
