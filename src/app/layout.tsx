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
  metadataBase: new URL("https://www.valtor.io"),
  title: {
    default: "Valtor.io — AI-First Business Optimization for Mid-Market Companies",
    template: "%s | Valtor.io",
  },
  description:
    "We create deterministic business truth — structured P&Ls, unified data, process intelligence — so mid-market companies know what is actually broken before deciding what to build. EBITDA and cash flow improvement through structured operational intelligence.",
  keywords: ["business optimization", "EBITDA improvement", "cash flow optimization", "management P&L", "process intelligence", "mid-market", "DACH", "AI-first", "Geschäftsoptimierung", "Unternehmenssteuerung"],
  authors: [{ name: "Valtor.io" }],
  creator: "Valtor.io",
  publisher: "Valtor.io",
  alternates: {
    canonical: "https://www.valtor.io",
    languages: {
      "de-DE": "https://www.valtor.io",
      "en-US": "https://www.valtor.io",
    },
  },
  openGraph: {
    title: "Valtor.io — What Before How. Truth Before Automation.",
    description:
      "AI-first business optimization for mid-market companies. Deterministic financial truth, unified data, and monthly steering intelligence.",
    url: "https://www.valtor.io",
    siteName: "Valtor.io",
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valtor.io — AI-First Business Optimization",
    description:
      "Deterministic business truth for mid-market companies. Structured P&Ls, unified data, process intelligence, monthly steering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#FAFAF9",
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
        <link rel="dns-prefetch" href="https://www.valtor.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.valtor.io/#organization",
                  name: "Valtor.io",
                  url: "https://www.valtor.io",
                  email: "kontakt@valtor.io",
                  description:
                    "AI-first business optimization agency for mid-market companies in DACH. Deterministic business truth through structured P&Ls, unified data, and process intelligence.",
                  areaServed: [
                    { "@type": "Country", name: "Germany" },
                    { "@type": "Country", name: "Austria" },
                    { "@type": "Country", name: "Switzerland" },
                  ],
                  knowsAbout: [
                    "Business Optimization",
                    "EBITDA Improvement",
                    "Management P&L",
                    "Process Intelligence",
                    "Cash Flow Optimization",
                    "Data Unification",
                    "FP&A",
                  ],
                },
                {
                  "@type": "Service",
                  "@id": "https://www.valtor.io/#diagnostic",
                  name: "Diagnostic & Business Structuring",
                  provider: { "@id": "https://www.valtor.io/#organization" },
                  serviceType: "Business Optimization Consulting",
                  description:
                    "Audit and diagnosis of business model, P&L reconstruction, identification of EBITDA and cash flow improvement opportunities.",
                  areaServed: [
                    { "@type": "Country", name: "Germany" },
                    { "@type": "Country", name: "Austria" },
                    { "@type": "Country", name: "Switzerland" },
                  ],
                },
                {
                  "@type": "Service",
                  "@id": "https://www.valtor.io/#build",
                  name: "Data Unification & Intelligence Build",
                  provider: { "@id": "https://www.valtor.io/#organization" },
                  serviceType: "Operational Intelligence",
                  description:
                    "End-to-end data unification, event logging, process intelligence, and dynamic FP&A dashboard deployment.",
                },
                {
                  "@type": "Service",
                  "@id": "https://www.valtor.io/#steer",
                  name: "Monthly Steering Intelligence",
                  provider: { "@id": "https://www.valtor.io/#organization" },
                  serviceType: "Recurring Management Intelligence",
                  description:
                    "Monthly AI-native steering mechanism with evidence-based recommendations, KPI tracking, and continuous improvement.",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.valtor.io/#website",
                  url: "https://www.valtor.io",
                  name: "Valtor.io",
                  publisher: { "@id": "https://www.valtor.io/#organization" },
                  inLanguage: ["de-DE", "en-US"],
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
