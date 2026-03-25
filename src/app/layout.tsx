import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        {/* Preconnect to Vercel CDN for faster asset delivery */}
        <link rel="dns-prefetch" href="https://www.valtor.io" />
      </head>
      <body>{children}</body>
    </html>
  );
}
