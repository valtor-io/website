import type { Metadata } from "next";
import { Inter, DM_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valtor.io — AI-First Business Optimization for Mid-Market Companies",
  description:
    "We create deterministic business truth — structured P&Ls, unified data, process intelligence — so mid-market companies know what is actually broken before deciding what to build. EBITDA and cash flow improvement through structured operational intelligence.",
  keywords: ["business optimization", "EBITDA improvement", "cash flow optimization", "management P&L", "process intelligence", "mid-market", "DACH", "AI-first"],
  openGraph: {
    title: "Valtor.io — What Before How. Truth Before Automation.",
    description:
      "AI-first business optimization for mid-market companies. Deterministic financial truth, unified data, and monthly steering intelligence.",
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${dmMono.variable} ${playfair.variable} antialiased`}
    >
      <head>
        {/* Preconnect to Vercel CDN for faster asset delivery */}
        <link rel="dns-prefetch" href="https://www.valtor.io" />
      </head>
      <body>{children}</body>
    </html>
  );
}
