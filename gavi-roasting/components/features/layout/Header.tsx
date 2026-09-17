import Link from "next/link";
import { CartLink } from "@/components/features/cart/CartLink";
import { MobileNav } from "@/components/features/layout/MobileNav";
import { NAV_LINKS } from "@/components/features/layout/nav-links";

export function Header() {
  return (
    <header className="relative border-b border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <MobileNav />
          <Link href="/" className="font-logo whitespace-nowrap text-xl text-copper sm:text-3xl">
            Gavi Roasting
          </Link>
        </div>
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
          <CartLink />
        </div>
      </div>
    </header>
  );
}
