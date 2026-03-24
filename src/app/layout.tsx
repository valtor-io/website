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
  title: "Valtor.io — Management Truth for Mid-Market Companies",
  description:
    "Structured management P&L, process intelligence, and monthly steering for DACH mid-market companies. From DATEV compliance to management visibility.",
  openGraph: {
    title: "Valtor.io — Management Truth for Mid-Market Companies",
    description:
      "Structured management P&L, process intelligence, and monthly steering for DACH mid-market companies.",
    type: "website",
    locale: "de_DE",
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
        {/* Preload hero video for faster first paint */}
        <link rel="preload" href="/header.mp4" as="video" type="video/mp4" />
      </head>
      <body>{children}</body>
    </html>
  );
}
