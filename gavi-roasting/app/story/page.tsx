import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export default function StoryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl text-paper">브랜드 스토리</h1>

      <section className="mt-10">
        <h2 className="font-display text-xl text-copper">로스팅 철학</h2>
        <PlaceholderImage
          filename="roasting-philosophy.jpg"
          className="mt-4 aspect-video w-full"
        />
        <p className="mt-4 text-muted">
          로스팅 철학에 관한 본문 (placeholder) — 배치별 기록, 재현 가능한 프로파일링 등
          실제 카피로 교체 예정입니다.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl text-copper">소싱 원칙</h2>
        <PlaceholderImage
          filename="sourcing-principles.jpg"
          className="mt-4 aspect-video w-full"
        />
        <p className="mt-4 text-muted">
          소싱 원칙에 관한 본문 (placeholder) — 산지 협력, 품질 기준 등 실제 카피로 교체
          예정입니다.
        </p>
      </section>
    </div>
  );
}
