import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
// import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description: "「Next.js＋ヘッドレスCMSではじめる!かんたん・モダンwebサイト入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description: "「Next.js＋ヘッドレスCMSではじめる!かんたん・モダンwebサイト入門」で作成されるサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  }
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-XXX" />
    </html>
  );
}