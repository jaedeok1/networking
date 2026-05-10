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
  title: "IT인들의 놀이터 - 네트워킹",
  description:
    "개발자·디자이너·기획자 등 IT에 관심있는 누구나 모이는 오프라인 네트워킹 모임. 5월 17일 일요일, 서울 서초구 카페위드. 선착순 20명 모집 중.",
  openGraph: {
    title: "IT인들의 놀이터 - 네트워킹",
    description:
      "개발자·디자이너·기획자 등 IT에 관심있는 누구나 모이는 오프라인 네트워킹 모임. 5월 17일 일요일, 서울 서초구 카페위드. 선착순 20명 모집 중.",
    url: "https://itpeoplenetworking.netlify.app",
    siteName: "IT인들의 놀이터",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={noto.variable}>
      <body>{children}</body>
    </html>
  );
}
