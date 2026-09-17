import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 블랙 + 카퍼 포인트 방향에서, 배경을 무드보드 1안의 크림으로 교체
        cream: "#F5EDE1", // 기본 배경
        surface: "#EFE6D8", // 카드/구획 배경 (크림보다 한 톤 짙게)
        copper: "#C2703D", // 포인트 컬러
        ink: "#2B1B12", // 기본 텍스트 / 카퍼 버튼 위 텍스트
        paper: "#2B1B12", // 본문 텍스트 (크림 배경 위이므로 짙은 색)
        muted: "#7A6A56", // 보조 텍스트 (크림 배경 대비 4.5:1 확보)
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        logo: ["var(--font-logo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
