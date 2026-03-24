export type Locale = "de" | "en";

export const translations = {
  nav: {
    problem: { de: "Ausgangslage", en: "Challenge" },
    solution: { de: "Ansatz", en: "Approach" },
    method: { de: "Methodik", en: "Method" },
    results: { de: "Ergebnisse", en: "Results" },
    contact: { de: "Kontakt", en: "Contact" },
  },
  hero: {
    label: { de: "Management Operating System", en: "Management Operating System" },
    h1_line1: { de: "Ihre Buchhaltung", en: "Your accounting" },
    h1_line2: { de: "ist konform.", en: "is compliant." },
    h1_line3: { de: "Aber steuert Ihr", en: "But is your management" },
    h1_line4: { de: "Management blind?", en: "flying blind?" },
    body: {
      de: "Wir transformieren Ihre DATEV-Daten, CRM, HR und operativen Systeme in eine strukturierte Management-P&L mit vollst\u00e4ndigem Drill-Down bis zur Einzelbuchung. Jeden Monat erfahren Sie, was sich verbessern l\u00e4sst \u2014 und warum.",
      en: "We transform your DATEV data, CRM, HR, and operational systems into a structured management P&L with full drill-down to every single transaction. Every month, you learn what can be improved \u2014 and why.",
    },
    cta_primary: { de: "Kostenfreies Erstgespr\u00e4ch", en: "Free consultation" },
    cta_secondary: { de: "Wie es funktioniert", en: "How it works" },
    headline: {
      de: "Ihr Unternehmen verliert Umsatz, Marge und Liquidit\u00e4t.",
      en: "Your business is leaking revenue, margin, and cash.",
    },
    subheadline: {
      de: "Valtor verbindet Ihre gesamte Wertsch\u00f6pfungskette \u2014 von Marketing bis Zahlungseingang \u2014 und zeigt, wo Performance bricht und was zuerst zu beheben ist.",
      en: "Valtor connects your full value chain \u2014 from marketing to cash collection \u2014 to show where performance breaks and what to fix first.",
    },
    kpi_revenue: { de: "Umsatz gef\u00e4hrdet", en: "Revenue at Risk" },
    kpi_margin: { de: "Marge verloren", en: "Margin Leakage" },
    kpi_cash: { de: "Cash gebunden", en: "Cash Trapped" },
    kpi_forecast: { de: "Forecast-Konfidenz", en: "Forecast Confidence" },
    mission_label: { de: "Unser Ansatz", en: "Our Approach" },
    mission_steps: [
      {
        de: "Umsatz- und Kostenstruktur aufbauen",
        en: "Fix revenue structure, then cost structure",
      },
      {
        de: "Unn\u00f6tige Kosten eliminieren",
        en: "Remove unnecessary costs",
      },
      {
        de: "O2C optimieren & Cashflow maximieren",
        en: "Improve Order-to-Cash & maximize cashflow",
      },
      {
        de: "Monatlich steuern: Revenue Engine & Cost Engine verbessern \u2014 basierend auf vernetzten Gesch\u00e4ftsdaten, Event-Log-Analyse und dynamischem Forecasting",
        en: "Steer monthly: improve revenue engine & cost engine \u2014 based on full business relational data, event log analysis, and dynamic forecasting",
      },
    ],
  },
  hero_visual: {
    label: { de: "Management P&L", en: "Management P&L" },
    revenue_label: { de: "Gesamt-Umsatz", en: "Total Revenue" },
    product: { de: "SaaS Produkt", en: "SaaS Product" },
    drill_hint: {
      de: "Klicken zum Drill-Down in Einzelbuchungen",
      en: "Click to drill down into individual transactions",
    },
  },
  problem: {
    label: { de: "Ausgangslage", en: "The Challenge" },
    h2_line1: { de: "Ihr Unternehmen w\u00e4chst.", en: "Your company is growing." },
    h2_line2: { de: "Ihr Reporting h\u00e4lt nicht mit.", en: "Your reporting can\u2019t keep up." },
    items: [
      {
        number: "01",
        title: {
          de: "Buchhaltung ist nicht Management-Finance",
          en: "Bookkeeping is not management finance",
        },
        description: {
          de: "DATEV liefert steuerlich korrekte Zahlen. Aber keine Management-P&L nach Profit Center, Produktlinie oder Gesch\u00e4ftsbereich. Die Entscheidungsgrundlage fehlt.",
          en: "DATEV delivers tax-compliant numbers. But no management P&L by profit center, product line, or business unit. The decision-making foundation is missing.",
        },
      },
      {
        number: "02",
        title: {
          de: "Daten in 8\u201315 Systemen, keine Verbindung",
          en: "Data in 8\u201315 systems, no connection",
        },
        description: {
          de: "CRM, HR, Buchhaltung, Fakturierung, Projektmanagement \u2014 jedes System kennt einen Teil der Wahrheit. Niemand sieht das Gesamtbild.",
          en: "CRM, HR, accounting, invoicing, project management \u2014 each system knows part of the truth. No one sees the full picture.",
        },
      },
      {
        number: "03",
        title: {
          de: "Keine Prozess-Transparenz",
          en: "No process transparency",
        },
        description: {
          de: "Wie lange dauert es von Lead zu Deal? Von Rechnung zu Zahlung? Von Einstellung zu Produktivit\u00e4t? Ohne Messung keine Verbesserung.",
          en: "How long from lead to deal? From invoice to payment? From hire to productivity? Without measurement, no improvement.",
        },
      },
      {
        number: "04",
        title: {
          de: "Berater liefern Reports, keine Systeme",
          en: "Consultants deliver reports, not systems",
        },
        description: {
          de: "BI-Projekte enden mit Dashboards, die niemand pflegt. Berater liefern PDFs und gehen. Zur\u00fcck bleibt keine dauerhafte F\u00e4higkeit.",
          en: "BI projects end with dashboards nobody maintains. Consultants deliver PDFs and leave. No lasting capability remains.",
        },
      },
    ],
  },
  solution: {
    label: { de: "Ansatz", en: "Approach" },
    h2_line1: { de: "Von Buchhaltungs-", en: "From bookkeeping" },
    h2_line2: { de: "wahrheit zu", en: "truth to" },
    h2_line3: { de: "Management-Wahrheit.", en: "management truth." },
    body: {
      de: "DATEV liefert steuerliche Konformit\u00e4t. Wir bauen darauf ein System, das Ihrem F\u00fchrungsteam zeigt, wo Wert entsteht, wo er verloren geht und was als N\u00e4chstes verbessert werden muss.",
      en: "DATEV delivers tax compliance. We build a system on top that shows your leadership team where value is created, where it leaks, and what to improve next.",
    },
    capabilities: [
      {
        label: { de: "Management P&L", en: "Management P&L" },
        title: {
          de: "Profitabilit\u00e4t nach Gesch\u00e4ftsbereich",
          en: "Profitability by business unit",
        },
        description: {
          de: "Strukturierte P&L nach Profit Center, Produktlinie und Segment. Jede Zahl mit Drill-Down bis zur Einzelbuchung in DATEV.",
          en: "Structured P&L by profit center, product line, and segment. Every number with drill-down to individual transactions in DATEV.",
        },
      },
      {
        label: { de: "Prozess-Intelligence", en: "Process Intelligence" },
        title: {
          de: "Zykluszeiten messen, Engp\u00e4sse finden",
          en: "Measure cycle times, find bottlenecks",
        },
        description: {
          de: "Lead-to-Deal, Deal-to-Cash, Hire-to-Productivity \u2014 jeder Statuswechsel wird erfasst und ausgewertet. Bottlenecks werden sichtbar.",
          en: "Lead-to-Deal, Deal-to-Cash, Hire-to-Productivity \u2014 every status change is captured and analyzed. Bottlenecks become visible.",
        },
      },
      {
        label: { de: "Zentrales Datensystem", en: "Central Data System" },
        title: {
          de: "Alle Quellsysteme verbunden",
          en: "All source systems connected",
        },
        description: {
          de: "DATEV, CRM, HR, Fakturierung, Projektmanagement \u2014 verkn\u00fcpft \u00fcber ein einheitliches ID-Schema. Ein System, eine Wahrheit.",
          en: "DATEV, CRM, HR, invoicing, project management \u2014 linked through a unified ID schema. One system, one truth.",
        },
      },
      {
        label: { de: "Monatliches Steering", en: "Monthly Steering" },
        title: {
          de: "Jeden Monat wissen, was zu tun ist",
          en: "Know what to do every month",
        },
        description: {
          de: "Strukturierter monatlicher Report mit Abweichungsanalyse, Prozess-Performance und priorisiertem Verbesserungsplan. Evidenzbasiert.",
          en: "Structured monthly report with variance analysis, process performance, and prioritized improvement plan. Evidence-based.",
        },
      },
    ],
  },
  method: {
    label: { de: "Methodik", en: "Methodology" },
    h2_line1: { de: "Drei Phasen.", en: "Three phases." },
    h2_line2: { de: "Ein permanentes System.", en: "One permanent system." },
    deliverables_label: { de: "Ergebnisse", en: "Deliverables" },
    phases: [
      {
        phase: "01",
        name: { de: "Diagnose", en: "Diagnose" },
        duration: { de: "4\u20136 Wochen", en: "4\u20136 weeks" },
        description: {
          de: "Tiefes Verst\u00e4ndnis Ihres Gesch\u00e4ftsmodells, Ihrer Datenlandschaft und Ihrer Prozesse. Wir definieren die Management-P&L-Struktur, auditieren alle Systeme und liefern eine priorisierte Roadmap.",
          en: "Deep understanding of your business model, data landscape, and processes. We define the management P&L structure, audit all systems, and deliver a prioritized roadmap.",
        },
        deliverables: {
          de: ["Gesch\u00e4ftsmodell-Analyse", "Management-P&L-Struktur", "Datenquellen-Audit", "Verbesserungs-Roadmap"],
          en: ["Business model analysis", "Management P&L structure", "Data source audit", "Improvement roadmap"],
        },
      },
      {
        phase: "02",
        name: { de: "Build", en: "Build" },
        duration: { de: "6\u201310 Wochen", en: "6\u201310 weeks" },
        description: {
          de: "Aufbau des zentralen Datensystems. Verbindung aller Quellsysteme, Implementierung der Management-P&L mit vollst\u00e4ndigem Drill-Down, Prozess-Intelligence und Dashboards.",
          en: "Building the central data system. Connecting all source systems, implementing the management P&L with full drill-down, process intelligence, and dashboards.",
        },
        deliverables: {
          de: ["Zentrales Datensystem", "Management-P&L mit Drill-Down", "Prozess-Dashboards", "Forecasting-Grundlage"],
          en: ["Central data system", "Management P&L with drill-down", "Process dashboards", "Forecasting foundation"],
        },
      },
      {
        phase: "03",
        name: { de: "Steer", en: "Steer" },
        duration: { de: "Monatlich, fortlaufend", en: "Monthly, ongoing" },
        description: {
          de: "Monatliche Datenaktualisierung, Abweichungsanalyse, Prozess-Performance-Review und priorisierter Verbesserungsplan. Das monatliche Steering-Meeting wird zum Kern Ihrer Unternehmenssteuerung.",
          en: "Monthly data refresh, variance analysis, process performance review, and prioritized improvement plan. The monthly steering meeting becomes the core of your business management.",
        },
        deliverables: {
          de: ["Monatlicher Steering-Report", "Abweichungsanalyse", "Prozess-Performance", "Priorisierte Verbesserungen"],
          en: ["Monthly steering report", "Variance analysis", "Process performance", "Prioritized improvements"],
        },
      },
    ],
  },
  results: {
    label: { de: "Ergebnisse", en: "Results" },
    h2_line1: { de: "Deterministische Systeme.", en: "Deterministic systems." },
    h2_line2: { de: "Verifizierbare Ergebnisse.", en: "Verifiable results." },
    items: [
      {
        metric: "100%",
        label: { de: "Nachvollziehbarkeit", en: "Traceability" },
        description: {
          de: "Jede Kennzahl bis zur Einzelbuchung nachvollziehbar. Keine Black Box, keine Sch\u00e4tzungen. Drill-Down \u00fcber vier Ebenen.",
          en: "Every metric traceable to the individual transaction. No black box, no estimates. Drill-down across four levels.",
        },
      },
      {
        metric: "8\u201315",
        label: { de: "Systeme verbunden", en: "Systems connected" },
        description: {
          de: "DATEV, CRM, HR, Fakturierung, Projektmanagement, Banking \u2014 alle Quellsysteme in einem zentralen Datensystem verkn\u00fcpft.",
          en: "DATEV, CRM, HR, invoicing, project management, banking \u2014 all source systems linked in one central data layer.",
        },
      },
      {
        metric: "30",
        label: { de: "Tage bis zur ersten Management-P&L", en: "Days to first management P&L" },
        description: {
          de: "Nach der Diagnose-Phase sehen Sie Ihr Unternehmen zum ersten Mal durch eine strukturierte Management-Brille.",
          en: "After the diagnostic phase, you see your business through a structured management lens for the first time.",
        },
      },
      {
        metric: "\u221E",
        label: { de: "Compound-Effekt", en: "Compound effect" },
        description: {
          de: "Kein Report, der in der Schublade landet. Ein permanentes System, das jeden Monat pr\u00e4ziser wird und mehr Wert liefert.",
          en: "No report that ends up in a drawer. A permanent system that becomes more precise every month and delivers more value.",
        },
      },
    ],
  },
  differentiators: {
    label: { de: "Abgrenzung", en: "Differentiation" },
    h2_line1: { de: "Weder Berater,", en: "Neither consultant," },
    h2_line2: { de: "noch BI-Tool,", en: "nor BI tool," },
    h2_line3: { de: "noch ERP.", en: "nor ERP." },
    typical_label: { de: "Typisch", en: "Typical" },
    valtor_label: { de: "Valtor", en: "Valtor" },
    items: [
      {
        category: { de: "Controller / Berater", en: "Controller / Consultant" },
        limitation: {
          de: "Liefern Reports und PDFs. Gehen nach dem Projekt. Keine dauerhafte F\u00e4higkeit bleibt zur\u00fcck.",
          en: "Deliver reports and PDFs. Leave after the project. No lasting capability remains.",
        },
        valtor: {
          de: "Baut ein permanentes System, das monatlich pr\u00e4ziser wird. Kein Einmal-Projekt, sondern laufende Unternehmenssteuerung.",
          en: "Builds a permanent system that becomes more precise monthly. Not a one-time project, but ongoing business steering.",
        },
      },
      {
        category: { de: "BI-Tools / Dashboards", en: "BI Tools / Dashboards" },
        limitation: {
          de: "Visualisieren, was Sie eingeben. Stellen keine Management-Struktur her. Sagen nicht, was zu tun ist.",
          en: "Visualize what you feed them. Don\u2019t create management structure. Don\u2019t tell you what to do.",
        },
        valtor: {
          de: "Strukturiert Ihre Daten zuerst nach Gesch\u00e4ftslogik, dann visualisiert. Jeder Drill-Down f\u00fchrt zur Quelle.",
          en: "Structures your data by business logic first, then visualizes. Every drill-down leads to the source.",
        },
      },
      {
        category: { de: "ERP-Systeme", en: "ERP Systems" },
        limitation: {
          de: "Gro\u00dfprojekte mit langer Laufzeit, hohen Kosten und Organisationswiderstand. F\u00fcr den Mittelstand oft \u00fcberdimensioniert.",
          en: "Large projects with long timelines, high costs, and organizational resistance. Often oversized for mid-market companies.",
        },
        valtor: {
          de: "Sitzt auf Ihren bestehenden Systemen. Verbindet, was da ist. Liefert Management-Sicht ohne Systemwechsel.",
          en: "Sits on top of your existing systems. Connects what\u2019s there. Delivers management visibility without system migration.",
        },
      },
    ],
  },
  audience: {
    label: { de: "F\u00fcr wen", en: "For whom" },
    h2_line1: { de: "F\u00fcr Unternehmen,", en: "For companies" },
    h2_line2: { de: "die ihre Komplexit\u00e4t", en: "that have outgrown" },
    h2_line3: { de: "\u00fcberwachsen haben.", en: "their complexity." },
    body1: {
      de: "Mittelst\u00e4ndische Unternehmen im DACH-Raum mit \u20ac5M\u2013\u20ac100M Umsatz, 30\u2013500 Mitarbeitern und DATEV als Buchhaltungssystem.",
      en: "Mid-market companies in the DACH region with \u20ac5M\u2013\u20ac100M revenue, 30\u2013500 employees, and DATEV as their accounting system.",
    },
    body2: {
      de: "Unternehmen mit mehreren Produktlinien, Gesch\u00e4ftsbereichen oder Standorten, deren Reporting-Komplexit\u00e4t schneller gewachsen ist als ihre Systeme.",
      en: "Companies with multiple product lines, business units, or locations whose reporting complexity has outgrown their systems.",
    },
    signals_label: { de: "Erkennen Sie sich wieder?", en: "Sound familiar?" },
    signals: [
      {
        de: "Wir exportieren monatlich aus DATEV nach Excel und bauen manuell Reports.",
        en: "We export from DATEV to Excel every month and build reports manually.",
      },
      {
        de: "Unser Controlling liefert Zahlen, aber wir k\u00f6nnen nicht nachvollziehen, was dahinter steckt.",
        en: "Our controlling delivers numbers, but we can\u2019t trace what\u2019s behind them.",
      },
      {
        de: "Wir kennen unsere Profitabilit\u00e4t nach Produktlinie oder Gesch\u00e4ftsbereich nicht.",
        en: "We don\u2019t know our profitability by product line or business unit.",
      },
      {
        de: "Wir haben in 10 Systemen Daten, aber niemand verbindet sie.",
        en: "We have data in 10 systems, but nobody connects them.",
      },
      {
        de: "Unsere Management-Meetings basieren auf Bauchgef\u00fchl, nicht auf strukturierten Daten.",
        en: "Our management meetings are based on gut feeling, not structured data.",
      },
      {
        de: "Wir hatten ein BI-Projekt \u2014 Dashboards stehen, aber sie sagen uns nicht, was wir tun sollen.",
        en: "We had a BI project \u2014 dashboards are up, but they don\u2019t tell us what to do.",
      },
    ],
  },
  contact: {
    label: { de: "N\u00e4chster Schritt", en: "Next step" },
    h2_line1: { de: "Lassen Sie uns", en: "Let\u2019s" },
    h2_line2: { de: "sprechen.", en: "talk." },
    body: {
      de: "In 30 Minuten zeigen wir Ihnen, welche Management-Sicht f\u00fcr Ihr Unternehmen m\u00f6glich ist \u2014 und was der erste Schritt w\u00e4re. Unverbindlich.",
      en: "In 30 minutes, we\u2019ll show you what management visibility is possible for your company \u2014 and what the first step would be. No commitment.",
    },
    cta: { de: "Gespr\u00e4ch vereinbaren", en: "Book a conversation" },
  },
  footer: {
    tagline: {
      de: "Management Operating System f\u00fcr den Mittelstand.",
      en: "Management Operating System for mid-market companies.",
    },
  },
} as const;

export function t(
  obj: { de: string; en: string } | string,
  locale: Locale
): string {
  if (typeof obj === "string") return obj;
  return obj[locale];
}
