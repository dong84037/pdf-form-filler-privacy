import { Black_Han_Sans, IBM_Plex_Sans_KR } from "next/font/google";

// 방향 3 (블랙 + 카퍼 포인트) 타이포그래피: 디스플레이는 굵고 임팩트 있게, 본문은 절제된 그로테스크로.
export const fontDisplay = Black_Han_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const fontBody = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
