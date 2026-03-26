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
  const isDE = locale === "de";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://www.valtor.io/#organization",
        name: "Valtor.io",
        url: "https://www.valtor.io",
        email: "kontakt@valtor.io",
        description: isDE
          ? "AI-first Business-Optimization-Agentur für den Mittelstand in DACH. Deterministische Geschäftswahrheit durch strukturierte P&Ls, vereinheitlichte Daten und Prozess-Intelligence."
          : "AI-first business optimization agency for mid-market companies in DACH. Deterministic business truth through structured P&Ls, unified data, and process intelligence.",
        slogan: isDE
          ? "DATEV gibt Buchhaltungswahrheit. Valtor gibt Managementwahrheit."
          : "DATEV gives bookkeeping truth. Valtor gives management truth.",
        areaServed: [
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Austria" },
          { "@type": "Country", name: "Switzerland" },
        ],
        knowsAbout: [
          "Business Optimization",
          "EBITDA Improvement",
          "Management P&L",
          "Profit Center Analysis",
          "Process Intelligence",
          "Process Mining",
          "Cash Flow Optimization",
          "Working Capital Optimization",
          "Data Unification",
          "FP&A",
          "Cost-to-Serve Analysis",
          "Customer Profitability Analysis",
          "Whale Curve Analysis",
          "Deterministic Analytics",
          "AI Readiness Assessment",
          "EU AI Act Compliance",
          "Controlling Mittelstand",
          "Operative Intelligenz",
        ],
        sameAs: [
          "https://www.linkedin.com/company/valtor-io",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isDE ? "Valtor.io Leistungen" : "Valtor.io Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://www.valtor.io/#diagnostic",
                name: isDE ? "Diagnose & Geschäftsstrukturierung" : "Diagnostic & Business Structuring",
                description: isDE
                  ? "Audit und Diagnose des Geschäftsmodells, P&L-Rekonstruktion, Identifikation von EBITDA- und Cashflow-Verbesserungspotenzial."
                  : "Audit and diagnosis of business model, P&L reconstruction, identification of EBITDA and cash flow improvement opportunities.",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                minPrice: 5000,
                maxPrice: 15000,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://www.valtor.io/#build",
                name: isDE ? "Datenvereinheitlichung & Intelligence-Aufbau" : "Data Unification & Intelligence Build",
                description: isDE
                  ? "End-to-End Datenvereinheitlichung, Event-Logging, Prozess-Intelligence und dynamische FP&A-Dashboard-Bereitstellung."
                  : "End-to-end data unification, event logging, process intelligence, and dynamic FP&A dashboard deployment.",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                minPrice: 20000,
                maxPrice: 50000,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://www.valtor.io/#steer",
                name: isDE ? "Monatliche Steuerungsintelligenz" : "Monthly Steering Intelligence",
                description: isDE
                  ? "Monatlicher AI-nativer Steuerungsmechanismus mit evidenzbasierten Empfehlungen, KPI-Tracking und kontinuierlicher Verbesserung."
                  : "Monthly AI-native steering mechanism with evidence-based recommendations, KPI tracking, and continuous improvement.",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                minPrice: 3000,
                maxPrice: 8000,
                billingDuration: { "@type": "Duration", name: "P1M" },
              },
            },
          ],
        },
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
        "@type": "HowTo",
        name: isDE
          ? "Valtor.io Methodik: Von der Diagnose zur Steuerungsintelligenz"
          : "Valtor.io Methodology: From Diagnosis to Steering Intelligence",
        description: isDE
          ? "Unser 7-Stufen-Prozess baut deterministische Managementwahrheit für den Mittelstand auf."
          : "Our 7-stage process builds deterministic management truth for mid-market companies.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: isDE ? "Audit & Diagnose" : "Audit & Diagnosis",
            text: isDE
              ? "Geschäftsmodell, Monetarisierung, Organisationsstruktur und Wertschöpfungskette verstehen. Historische P&L rekonstruieren."
              : "Understand business model, monetization, org structure, and value chain. Reconstruct historical P&L.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: isDE ? "Geschäftsstrukturierung & P&L-Rekonstruktion" : "Business Structuring & P&L Reconstruction",
            text: isDE
              ? "Profit Center definieren, Management-P&L-Logik aufbauen, strukturierte Ergebnisrechnung erstellen."
              : "Define profit centers, build management P&L logic, create structured true P&L.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: isDE ? "EBITDA- & Cash-Verbesserung" : "EBITDA & Cash Improvement",
            text: isDE
              ? "Kostensenkungspotenziale identifizieren, Cashflow-Lecks finden, Working-Capital-Lücken aufdecken, nach Impact priorisieren."
              : "Identify cost reduction opportunities, find cash flow leaks, uncover working capital gaps, prioritize by impact.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: isDE ? "End-to-End Datenvereinheitlichung" : "End-to-End Data Unification",
            text: isDE
              ? "Alle Quellsysteme verbinden, einheitliches Datenmodell erstellen, konsistente IDs und Zuordnungen sicherstellen."
              : "Connect all source systems, create unified data model, ensure consistent IDs and attributions.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: isDE ? "Event-Logging & Prozess-Intelligence" : "Event Logging & Process Intelligence",
            text: isDE
              ? "Event-Capture für jeden Statuswechsel, Zykluszeiten berechnen, Engpässe identifizieren, Prozesswahrheit sichtbar machen."
              : "Deploy event capture for every status change, compute cycle times, identify bottlenecks, surface process truth.",
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: isDE ? "Dynamische FP&A & Management-Intelligence" : "Dynamic FP&A & Management Intelligence",
            text: isDE
              ? "Prognose-Schicht aufbauen, Dashboards mit Drill-Down bereitstellen, monatlichen Steuerungsmechanismus mit evidenzbasierten Empfehlungen erstellen."
              : "Build forecasting layer, deploy dashboards with drill-down, create monthly steering mechanism with evidence-based recommendations.",
          },
          {
            "@type": "HowToStep",
            position: 7,
            name: isDE ? "Ausführungsebene" : "Execution Layer",
            text: isDE
              ? "Hochwertige Verbesserungen umsetzen: Systemdesign, Workflow-Redesign, Automatisierung, prozessübergreifende Integration."
              : "Execute high-value improvements: system design, workflow redesign, automation, cross-system integrations.",
          },
        ],
      },
      {
        "@type": "VideoObject",
        name: "Valtor.io — AI-First Business Optimization",
        description: isDE
          ? "Deterministische Geschäftswahrheit für den Mittelstand: strukturierte P&Ls, vereinheitlichte Daten, Prozess-Intelligence."
          : "Deterministic business truth for mid-market companies: structured P&Ls, unified data, process intelligence.",
        contentUrl: "https://www.valtor.io/header.mp4",
        thumbnailUrl: "https://www.valtor.io/opengraph-image",
        uploadDate: "2026-03-20",
        publisher: { "@id": "https://www.valtor.io/#organization" },
        inLanguage: isDE ? "de-DE" : "en-US",
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
