import Link from "next/link";
import { Product } from "@/types/product";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { RoastLevelBadge } from "./RoastLevelBadge";
import { formatPriceKRW, isOutOfStock } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const lowestPrice = Math.min(...product.options.map((option) => option.price));
  const soldOut = product.options.every((option) => isOutOfStock(option.stock));

  return (
    <Link
      href={`/products/${product.slug}`}
      className="block border border-ink/10 p-4 hover:border-copper/60"
    >
      <div className="relative">
        <PlaceholderImage filename={`${product.slug}.jpg`} className="aspect-square w-full" />
        {soldOut && (
          <span className="absolute right-2 top-2 border border-ink/15 bg-cream/90 px-2 py-1 text-xs text-ink">
            품절
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-paper">{product.name}</p>
        <RoastLevelBadge level={product.roastLevel} />
      </div>
      <p className="mt-1 text-sm text-muted">{product.origin}</p>
      <p className="mt-2 text-sm text-copper">{formatPriceKRW(lowestPrice)}~</p>
    </Link>
  );
}
