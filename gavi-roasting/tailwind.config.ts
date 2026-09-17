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
        // 브랜드 디렉션 3: 블랙 + 카퍼 포인트
        ink: "#121212", // 기본 배경
        surface: "#1C1C1C", // 카드/구획 배경
        copper: "#C2703D", // 포인트 컬러
        paper: "#F5F5F5", // 밝은 배경 위 텍스트 / 라이트 섹션 배경
        muted: "#8A8A8A", // 보조 텍스트
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
