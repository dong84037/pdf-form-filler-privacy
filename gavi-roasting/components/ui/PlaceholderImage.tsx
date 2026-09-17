interface PlaceholderImageProps {
  /** 실제 자산 준비 시 교체될 파일명 — 디자이너/사업주 인수인계용 */
  filename: string;
  label?: string;
  className?: string;
}

// 실사진처럼 보이지 않도록 의도적으로 회색 블록 + 파일명만 표시한다.
export function PlaceholderImage({ filename, label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 border border-white/10 bg-neutral-700 text-neutral-400 ${className}`}
    >
      <span className="text-xs">{label ?? "이미지 준비 중"}</span>
      <span className="font-mono text-[10px]">{filename}</span>
    </div>
  );
}
