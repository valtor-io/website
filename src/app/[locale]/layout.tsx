import type { Metadata } from "next";
import type { Locale } from "@/i18n/translations";

const locales = ["de", "en"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";
  const altLocale = isDE ? "en" : "de";

  return {
    metadataBase: new URL("https://www.valtor.io"),
    title: {
      default: isDE
        ? "Valtor.io — AI-First Business Optimization für den Mittelstand"
        : "Valtor.io — AI-First Business Optimization for Mid-Market Companies",
      template: "%s | Valtor.io",
    },
    description: isDE
      ? "Wir schaffen deterministische Geschäftswahrheit — strukturierte P&Ls, vereinheitlichte Daten, Prozess-Intelligence — damit mittelständische Unternehmen wissen, was tatsächlich kaputt ist, bevor sie entscheiden, was gebaut werden soll."
      : "We create deterministic business truth — structured P&Ls, unified data, process intelligence — so mid-market companies know what is actually broken before deciding what to build.",
    keywords: isDE
      ? ["Geschäftsoptimierung", "EBITDA-Verbesserung", "Cashflow-Optimierung", "Management-P&L", "Prozess-Intelligence", "Mittelstand", "DACH", "AI-first"]
      : ["business optimization", "EBITDA improvement", "cash flow optimization", "management P&L", "process intelligence", "mid-market", "DACH", "AI-first"],
    authors: [{ name: "Valtor.io" }],
    creator: "Valtor.io",
    publisher: "Valtor.io",
    alternates: {
      canonical: `https://www.valtor.io/${locale}`,
      languages: {
        "de-DE": "https://www.valtor.io/de",
        "en-US": "https://www.valtor.io/en",
      },
    },
    openGraph: {
      title: isDE
        ? "Valtor.io — Was vor Wie. Wahrheit vor Automatisierung."
        : "Valtor.io — What Before How. Truth Before Automation.",
      description: isDE
        ? "AI-first Business Optimization für den Mittelstand. Deterministische Finanzwahrheit, vereinheitlichte Daten und monatliche Steuerungsintelligenz."
        : "AI-first business optimization for mid-market companies. Deterministic financial truth, unified data, and monthly steering intelligence.",
      url: `https://www.valtor.io/${locale}`,
      siteName: "Valtor.io",
      type: "website",
      locale: isDE ? "de_DE" : "en_US",
      alternateLocale: isDE ? "en_US" : "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: isDE
        ? "Valtor.io — AI-First Business Optimization"
        : "Valtor.io — AI-First Business Optimization",
      description: isDE
        ? "Deterministische Geschäftswahrheit für den Mittelstand. Strukturierte P&Ls, vereinheitlichte Daten, Prozess-Intelligence."
        : "Deterministic business truth for mid-market companies. Structured P&Ls, unified data, process intelligence.",
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
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    },
    other: {
      "theme-color": "#FAFAF9",
    },
  };
}

function buildJsonLd(locale: string) {
  return {
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
      {
        "@type": "VideoObject",
        name: locale === "de"
          ? "Valtor.io — AI-First Business Optimization"
          : "Valtor.io — AI-First Business Optimization",
        description: locale === "de"
          ? "Deterministische Geschäftswahrheit für den Mittelstand: strukturierte P&Ls, vereinheitlichte Daten, Prozess-Intelligence."
          : "Deterministic business truth for mid-market companies: structured P&Ls, unified data, process intelligence.",
        contentUrl: "https://www.valtor.io/header.mp4",
        thumbnailUrl: "https://www.valtor.io/opengraph-image",
        uploadDate: "2026-03-20",
        publisher: { "@id": "https://www.valtor.io/#organization" },
        inLanguage: locale === "de" ? "de-DE" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Valtor.io",
            item: `https://www.valtor.io/${locale}`,
          },
        ],
      },
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const jsonLd = buildJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
