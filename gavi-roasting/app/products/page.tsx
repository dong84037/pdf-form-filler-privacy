import { getProducts } from "@/lib/products";
import { ProductGrid } from "@/components/features/product/ProductGrid";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-3xl text-paper">원두</h1>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
