import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/features/layout/Header";
import { Footer } from "@/components/features/layout/Footer";
import { fontDisplay, fontBody } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Gavi Roasting",
  description: "스페셜티 커피 로스팅 · 도매 — Gavi Roasting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="flex min-h-screen flex-col bg-ink font-body text-paper antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
