import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/lib/products";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { RoastLevelBadge } from "@/components/features/product/RoastLevelBadge";
import { ProductOptionSelector } from "@/components/features/product/ProductOptionSelector";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="grid gap-8 sm:grid-cols-2">
        <PlaceholderImage filename={`${product.slug}.jpg`} className="aspect-square w-full" />
        <div>
          <h1 className="font-display text-3xl text-paper">{product.name}</h1>
          <p className="mt-2 text-muted">{product.origin}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            <RoastLevelBadge level={product.roastLevel} />
            {product.flavorNotes.map((note) => (
              <span key={note} className="border border-white/15 px-2 py-0.5 text-xs text-muted">
                {note}
              </span>
            ))}
          </div>

          <ProductOptionSelector options={product.options} />
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8">
        <h2 className="font-display text-xl text-paper">상세 설명</h2>
        <p className="mt-4 max-w-2xl text-muted">{product.description}</p>
      </div>
    </div>
  );
}
