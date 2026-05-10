import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IT인들의 놀이터 — 네트워킹 모임 Vol.01",
  description:
    "개발자·디자이너·기획자·PM이 한자리에 모이는 오프라인 IT 네트워킹 모임. 2026년 6월 7일 토요일, 서울 강남구. 선착순 20명 모집 중.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={noto.variable}>
      <body>{children}</body>
    </html>
  );
}
