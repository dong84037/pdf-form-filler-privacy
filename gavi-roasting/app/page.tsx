import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            로스팅 한 배치, 한 번의 정직한 기록
          </h1>
          <p className="mt-4 text-neutral-600">
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
        <h2 className="text-xl font-semibold">대표 원두</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {["ethiopia-yirgacheffe", "colombia-huila", "guatemala-antigua"].map(
            (slug) => (
              <Link
                key={slug}
                href={`/products/${slug}`}
                className="block border p-4"
              >
                <PlaceholderImage
                  filename={`${slug}.jpg`}
                  className="aspect-square w-full"
                />
                <p className="mt-3 text-sm text-neutral-500">준비 중인 원두명</p>
              </Link>
            )
          )}
        </div>
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-2">
        <Link
          href="/products"
          className="border p-8 text-center hover:bg-neutral-50"
        >
          <p className="text-lg font-medium">원두 구매하기</p>
          <p className="mt-1 text-sm text-neutral-500">소매 고객용 쇼핑</p>
        </Link>
        <Link
          href="/wholesale"
          className="border p-8 text-center hover:bg-neutral-50"
        >
          <p className="text-lg font-medium">도매 문의하기</p>
          <p className="mt-1 text-sm text-neutral-500">카페·업체용 문의</p>
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold">브랜드 스토리</h2>
        <p className="mt-4 max-w-2xl text-neutral-600">
          로스팅 철학과 소싱 원칙에 관한 소개 문구가 이 자리에 들어갑니다. (placeholder)
        </p>
        <Link href="/story" className="mt-4 inline-block underline">
          더 알아보기
        </Link>
      </section>
    </div>
  );
}
