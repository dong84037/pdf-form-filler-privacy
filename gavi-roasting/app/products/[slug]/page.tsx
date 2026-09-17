import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";

// Phase 3에서 Supabase products 테이블 조회 + 장바구니 담기 로직으로 교체됩니다.
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="grid gap-8 sm:grid-cols-2">
        <PlaceholderImage filename={`${params.slug}.jpg`} className="aspect-square w-full" />
        <div>
          <h1 className="font-display text-3xl text-paper">
            준비 중인 원두명 ({params.slug})
          </h1>
          <p className="mt-2 text-muted">원산지 · 로스팅 정도 · 맛 프로파일 (placeholder)</p>
          <p className="mt-6 text-xl font-medium text-copper">가격 준비 중</p>

          <div className="mt-6">
            <p className="text-sm font-medium text-paper">용량 선택</p>
            <p className="mt-2 text-sm text-muted">옵션 UI는 Phase 3에서 연동됩니다.</p>
          </div>

          <Button disabled className="mt-8 w-full">
            장바구니 담기 (연동 전)
          </Button>
        </div>
      </div>
    </div>
  );
}
