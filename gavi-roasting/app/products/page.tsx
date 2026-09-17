import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

// Phase 3에서 Supabase products 테이블 조회로 교체됩니다.
const PLACEHOLDER_SLUGS = [
  "ethiopia-yirgacheffe",
  "colombia-huila",
  "guatemala-antigua",
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-3xl text-paper">원두</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {PLACEHOLDER_SLUGS.map((slug) => (
          <Link
            key={slug}
            href={`/products/${slug}`}
            className="block border border-white/10 p-4 hover:border-copper/60"
          >
            <PlaceholderImage filename={`${slug}.jpg`} className="aspect-square w-full" />
            <p className="mt-3 text-sm text-muted">준비 중인 원두명</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
