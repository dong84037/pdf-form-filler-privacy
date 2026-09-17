import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { getProducts } from "@/lib/products";
import { ProductGrid } from "@/components/features/product/ProductGrid";

export default async function HomePage() {
  const featuredProducts = (await getProducts()).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <h1 className="font-display text-4xl tracking-tight text-paper">
            로스팅 한 배치, 한 번의 정직한 기록
          </h1>
          <p className="mt-4 text-muted">
            가비 로스팅은 산지와 로스팅 과정을 있는 그대로 전합니다.
          </p>
        </div>
        <PlaceholderImage
          filename="hero-roasting-scene.jpg"
          label="로스팅 현장 사진"
          className="aspect-[4/3] w-full"
        />
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">대표 원두</h2>
        <div className="mt-6">
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-2">
        <Link
          href="/products"
          className="border border-copper/60 p-8 text-center hover:bg-copper/10"
        >
          <p className="font-display text-lg text-copper">원두 구매하기</p>
          <p className="mt-1 text-sm text-muted">소매 고객용 쇼핑</p>
        </Link>
        <Link
          href="/wholesale"
          className="border border-white/15 p-8 text-center hover:border-copper/60"
        >
          <p className="font-display text-lg text-paper">도매 문의하기</p>
          <p className="mt-1 text-sm text-muted">카페·업체용 문의</p>
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">브랜드 스토리</h2>
        <p className="mt-4 max-w-2xl text-muted">
          로스팅 철학과 소싱 원칙에 관한 소개 문구가 이 자리에 들어갑니다. (placeholder)
        </p>
        <Link href="/story" className="mt-4 inline-block text-copper underline underline-offset-4">
          더 알아보기
        </Link>
      </section>
    </div>
  );
}
