import { RoastLevel } from "@/types/product";

const ROAST_LABELS: Record<RoastLevel, string> = {
  light: "라이트 로스트",
  medium: "미디엄 로스트",
  "medium-dark": "미디엄다크 로스트",
  dark: "다크 로스트",
};

export function RoastLevelBadge({ level }: { level: RoastLevel }) {
  return (
    <span className="inline-block border border-copper/40 px-2 py-0.5 text-xs text-copper">
      {ROAST_LABELS[level]}
    </span>
  );
}
