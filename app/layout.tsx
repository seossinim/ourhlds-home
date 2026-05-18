import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "아우어에이치엘디에스 | OUR H.L.D.S",
  description:
    "콘텐츠, 커머스, 플랫폼, 온라인 광고를 연결하는 1인 가구 라이프스타일 스타트업 아우어에이치엘디에스",

  keywords: [
    "아우어에이치엘디에스",
    "OUR H.L.D.S",
    "1인 가구",
    "스타트업",
    "라이프스타일",
    "OUR SIGNAL",
    "홀로알다",
    "1OUR",
    "온라인 광고",
    "플랫폼",
  ],

  authors: [{ name: "서은호" }],
  creator: "아우어에이치엘디에스",

  openGraph: {
    title: "아우어에이치엘디에스 | OUR H.L.D.S",
    description:
      "콘텐츠와 브랜드를 연결하는 1인 가구 라이프스타일 스타트업",
    url: "https://ourhlds.com",
    siteName: "아우어에이치엘디에스",
    locale: "ko_KR",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OUR H.L.D.S OG IMAGE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "아우어에이치엘디에스 | OUR H.L.D.S",
    description:
      "콘텐츠와 브랜드를 연결하는 1인 가구 라이프스타일 스타트업",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}