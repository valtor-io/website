export type Locale = "de" | "en";

export const translations = {
  nav: {
    problem: { de: "Das Problem", en: "The Problem" },
    solution: { de: "Ansatz", en: "Approach" },
    method: { de: "Methodik", en: "Method" },
    results: { de: "Ergebnisse", en: "Outcomes" },
    contact: { de: "Kontakt", en: "Contact" },
  },
  hero: {
    cta_primary: { de: "Diagnose-Gespräch buchen", en: "Book a diagnostic call" },
    cta_secondary: { de: "So funktioniert es", en: "How it works" },
    headline: {
      de: "Die meisten Unternehmen optimieren blind.\nValtor.io zeigt zuerst, was tatsächlich kaputt ist.",
      en: "Most businesses optimize blind.\nValtor.io shows what\u2019s actually broken first.",
    },
    subheadline: {
      de: "Wir sind eine AI-first Business Optimization Agency. Bevor wir etwas bauen, schaffen wir deterministische Wahrheit: strukturierte P&L, vereinheitlichte Daten, Prozess-Intelligence. Damit Sie wissen, was sich lohnt zu verbessern, bevor Sie investieren.",
      en: "We\u2019re an AI-first business optimization agency. Before building anything, we create deterministic truth: structured P&Ls, unified data, process intelligence. So you know what\u2019s worth fixing before you invest.",
    },
    kpi_revenue: { de: "EBITDA-Verbesserung", en: "EBITDA Improvement" },
    kpi_margin: { de: "Marge aufgedeckt", en: "Margin Recovered" },
    kpi_cash: { de: "Cash freigesetzt", en: "Cash Unlocked" },
    kpi_forecast: { de: "Tage bis zur Klarheit", en: "Days to Clarity" },
    mission_label: { de: "Was wir liefern", en: "What we deliver" },
    mission_steps: [
      {
        de: "Deterministische Finanz-Wahrheit: P&L nach Profit Center, Produktlinie und Segment",
        en: "Deterministic financial truth: P&L by profit center, product line, and segment",
      },
      {
        de: "EBITDA- und Cashflow-Verbesserung durch strukturelle Optimierung",
        en: "EBITDA and cash flow improvement through structural optimization",
      },
      {
        de: "Vereinheitlichte Daten über alle Systeme. Eine Quelle der Wahrheit",
        en: "Unified data across all systems. One source of truth",
      },
      {
        de: "Monatliche Steuerungsintelligenz: was verbessern, warum, in welcher Reihenfolge",
        en: "Monthly steering intelligence: what to improve, why, and in what order",
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
    label: { de: "Das Problem", en: "The Problem" },
    h2_line1: { de: "Sie kennen Ihre Zahlen.", en: "You know your numbers." },
    h2_line2: { de: "Aber sehen Sie Ihr Geschäft?", en: "But can you see your business?" },
    intro: {
      de: "Mittelständische Unternehmen laufen auf fragmentierter Wahrheit. Umsatz lebt im CRM. Kosten verteilen sich über ERP, HR und Projektsysteme. Finance hat eine P&L, Operations eine Prozesskarte, die Geschäftsführung ein Bauchgefühl.",
      en: "Mid-market companies run on fragmented truth. Revenue lives in the CRM. Costs scatter across ERP, HR, and project systems. Finance owns a P&L, operations owns a process map, leadership owns a gut feeling.",
    },
    items: [
      {
        number: "01",
        title: {
          de: "Keine echte Profitabilitätssicht",
          en: "No real profitability view",
        },
        description: {
          de: "Sie haben Umsatzberichte, aber keine echte P&L. Welche Produkte sind tatsächlich profitabel? Welche Kunden liefern welche Margen? Jede strategische Entscheidung basiert auf Vermutungen.",
          en: "You have revenue reports but no real P&L. Which products are actually profitable? Which customers carry which margins? Every strategic conversation is guess-based.",
        },
      },
      {
        number: "02",
        title: {
          de: "Daten in 10+ Systemen, nichts verbunden",
          en: "Data in 10+ systems, nothing connected",
        },
        description: {
          de: "CRM, HR, Buchhaltung, Projektmanagement: alle getrennt. Keine einheitliche Sicht. Cashflow-Nachverfolgung erfordert Tabellenkalkulations-Roulette.",
          en: "CRM, HR, accounting, project management: all separate. No unified view. Cash flow tracing requires spreadsheet roulette.",
        },
      },
      {
        number: "03",
        title: {
          de: "Meetings basieren auf Meinungen, nicht Evidenz",
          en: "Meetings run on opinions, not evidence",
        },
        description: {
          de: "Sie haben Dashboards, aber die sagen Ihnen nicht, was zu tun ist. Entscheidungen setzen sich durch, weil jemand laut ist, nicht weil Daten dahinterstehen.",
          en: "You have dashboards, but they don\u2019t tell you what to do. Decisions stick because someone is loud, not because the data backs them.",
        },
      },
      {
        number: "04",
        title: {
          de: "Cash verschwindet zwischen Lieferung und Zahlung",
          en: "Cash disappears between delivery and payment",
        },
        description: {
          de: "Sie sehen gebuchten Umsatz und eingehende Zahlungen, aber der Weg dazwischen ist unsichtbar. Days Sales Outstanding steigen. Working Capital bleibt ein Rätsel.",
          en: "You see revenue booked and cash received, but the journey between is opaque. DSO keeps creeping up. Working capital remains a mystery.",
        },
      },
    ],
  },
  why_fail: {
    label: { de: "Warum es nicht funktioniert", en: "Why it fails" },
    h2_line1: { de: "Sie haben es schon versucht.", en: "You\u2019ve tried this before." },
    h2_line2: { de: "Es hat nicht gereicht.", en: "It wasn\u2019t enough." },
    items: [
      {
        category: { de: "AI-Agenturen", en: "AI agencies" },
        problem: {
          de: "Fokussieren auf WIE gebaut wird, nicht WAS gebaut werden sollte. Automatisieren Prozesse, die vielleicht gar nicht existieren sollten.",
          en: "Focus on HOW to build, not WHAT should be built. Automate processes that maybe shouldn\u2019t exist at all.",
        },
      },
      {
        category: { de: "Management-Berater", en: "Management consultants" },
        problem: {
          de: "Liefern Reports und PowerPoints. Gehen nach dem Projekt. Keine permanente Fähigkeit bleibt zurück.",
          en: "Deliver reports and PowerPoints. Leave after the project. No permanent capability remains.",
        },
      },
      {
        category: { de: "BI- und Dashboard-Tools", en: "BI and dashboard tools" },
        problem: {
          de: "Visualisieren fragmentierte Daten, ohne sie zu vereinheitlichen. Schöne Charts, die rückwärts schauen und keine Handlung auslösen.",
          en: "Visualize fragmented data without unifying it. Pretty charts that look backward and drive no action.",
        },
      },
      {
        category: { de: "System-Integratoren", en: "Systems integrators" },
        problem: {
          de: "Implementieren generische ERPs und CRMs. Großprojekte mit langen Laufzeiten, hohen Kosten und Organisationswiderstand.",
          en: "Implement generic ERPs and CRMs. Large projects with long timelines, high costs, and organizational resistance.",
        },
      },
    ],
  },
  solution: {
    label: { de: "Unser Ansatz", en: "Our approach" },
    h2_line1: { de: "Was vor Wie.", en: "What before how." },
    h2_line2: { de: "Wahrheit vor", en: "Truth before" },
    h2_line3: { de: "Automatisierung.", en: "automation." },
    body: {
      de: "Valtor.io baut zuerst die deterministische Wahrheitsschicht Ihres Unternehmens. Wir vereinheitlichen Ihre Finanzen, Daten und Prozesse in einem System, in dem jede Zahl bis zur Quellbuchung nachvollziehbar ist. Erst wenn Sie sehen können, was tatsächlich kaputt ist, empfehlen wir, was gebaut werden sollte.",
      en: "Valtor.io builds your company\u2019s deterministic truth layer first. We unify your finances, data, and processes into one system where every number traces to its source transaction. Only when you can see what\u2019s actually broken do we recommend what should be built.",
    },
    capabilities: [
      {
        label: { de: "Strukturierte P&L", en: "Structured P&L" },
        title: {
          de: "Deterministische Finanz-Wahrheit",
          en: "Deterministic financial truth",
        },
        description: {
          de: "Management-P&L nach Profit Center, Produktlinie und Segment. Jede Kennzahl mit Drill-Down bis zur Einzelbuchung. Keine Black Box.",
          en: "Management P&L by profit center, product line, and segment. Every metric with drill-down to individual transactions. No black box.",
        },
      },
      {
        label: { de: "EBITDA-Verbesserung", en: "EBITDA Improvement" },
        title: {
          de: "Strukturelle Verbesserung, nicht Buchhaltungstricks",
          en: "Structural improvement, not accounting tricks",
        },
        description: {
          de: "Unnötige Kosten identifizieren, Margen nach Profit Center optimieren, Ressourcenallokation überprüfen, Headcount gegen Geschäftsvolumen abgleichen. Typisch 5–15% EBITDA-Verbesserung im ersten Jahr.",
          en: "Identify unnecessary costs, optimize margins by profit center, review resource allocation, match headcount to business volume. Typical 5\u201315% EBITDA improvement in year one.",
        },
      },
      {
        label: { de: "Order-to-Cash", en: "Order-to-Cash" },
        title: {
          de: "Vom Auftrag zur Zahlung: schneller, sichtbarer, kontrollierbarer",
          en: "From order to payment: faster, visible, controllable",
        },
        description: {
          de: "Den gesamten O2C-Prozess neu strukturieren: Fakturierungstiming optimieren, Zahlungsbedingungen standardisieren, AR-Disziplin verbessern, AP-Strategie anpassen. Cash-Zyklen verkürzen und Working Capital freisetzen.",
          en: "Redesign the full O2C process: optimize invoicing timing, standardize payment terms, improve AR collection discipline, align AP strategy. Shorten cash cycles and unlock trapped working capital.",
        },
      },
      {
        label: { de: "Daten-Vereinheitlichung", en: "Data Unification" },
        title: {
          de: "Alle Systeme verbunden, eine Quelle der Wahrheit",
          en: "All systems connected, one source of truth",
        },
        description: {
          de: "CRM, Buchhaltung, HR, Fakturierung, Projektmanagement, verknüpft über ein einheitliches ID-Schema. Cross-System-Traceability vom Lead bis zur Zahlung.",
          en: "CRM, accounting, HR, invoicing, project management, linked through a unified ID schema. Cross-system traceability from lead to payment.",
        },
      },
      {
        label: { de: "Prozess-Intelligence", en: "Process Intelligence" },
        title: {
          de: "Sehen, wo Cash steckenbleibt und Zyklen sich dehnen",
          en: "See where cash gets stuck and cycles stretch",
        },
        description: {
          de: "Event-basiertes Process Mining: Lead-to-Deal, Deal-to-Cash, Hire-to-Productivity. Zykluszeiten messen, Bottlenecks finden, Verbesserungen priorisieren.",
          en: "Event-based process mining: lead-to-deal, deal-to-cash, hire-to-productivity. Measure cycle times, find bottlenecks, prioritize improvements.",
        },
      },
      {
        label: { de: "Monatliches Steering", en: "Monthly Steering" },
        title: {
          de: "Jeden Monat wissen, was zu tun ist. Und warum",
          en: "Know what to do every month. And why",
        },
        description: {
          de: "Strukturierter monatlicher Report mit Varianzanalyse, Prozess-Performance, dynamischem Forecasting und priorisiertem Verbesserungsplan. Das Steering-Meeting wird zum Kern Ihrer Unternehmenssteuerung.",
          en: "Structured monthly report with variance analysis, process performance, dynamic forecasting, and prioritized improvement plan. The steering meeting becomes the core of how you run the business.",
        },
      },
    ],
  },
  method: {
    label: { de: "Methodik", en: "Methodology" },
    h2_line1: { de: "Diagnose. Strukturieren.", en: "Diagnose. Structure." },
    h2_line2: { de: "Verbessern. Steuern.", en: "Improve. Steer." },
    deliverables_label: { de: "Ergebnisse", en: "Deliverables" },
    phases: [
      {
        phase: "01",
        name: { de: "Diagnose & Strukturierung", en: "Diagnose & Structure" },
        duration: { de: "4–6 Wochen", en: "4\u20136 weeks" },
        description: {
          de: "Tiefes Verständnis Ihres Geschäftsmodells, Wertschöpfungskette und Gewinnstruktur. Wir rekonstruieren Ihre Management-P&L, auditieren alle Systeme und identifizieren, wo EBITDA und Cash verloren gehen.",
          en: "Deep understanding of your business model, value chain, and profit structure. We reconstruct your management P&L, audit all systems, and identify where EBITDA and cash are leaking.",
        },
        deliverables: {
          de: ["Geschäftsmodell-Analyse", "Management-P&L-Struktur", "Daten- und System-Audit", "EBITDA-Verbesserungs-Roadmap"],
          en: ["Business model analysis", "Management P&L structure", "Data and system audit", "EBITDA improvement roadmap"],
        },
      },
      {
        phase: "02",
        name: { de: "EBITDA, Daten & Prozesse", en: "EBITDA, Data & Processes" },
        duration: { de: "8–12 Wochen", en: "8\u201312 weeks" },
        description: {
          de: "Strukturelle EBITDA- und Cashflow-Verbesserung. Vereinheitlichung aller Quellsysteme. Event-basiertes Process Mining. Aufbau der Dashboards mit vollständigem Drill-Down bis zur Quellbuchung.",
          en: "Structural EBITDA and cash flow improvement. Unification of all source systems. Event-based process mining. Build dashboards with full drill-down to source transactions.",
        },
        deliverables: {
          de: ["Kostenreduktions-Maßnahmen", "Order-to-Cash-Optimierung", "Vereinheitlichtes Datensystem", "Prozess-Dashboards & Bottleneck-Analyse"],
          en: ["Cost reduction initiatives", "Order-to-cash optimization", "Unified data system", "Process dashboards & bottleneck analysis"],
        },
      },
      {
        phase: "03",
        name: { de: "Intelligence & Steering", en: "Intelligence & Steering" },
        duration: { de: "Monatlich, fortlaufend", en: "Monthly, ongoing" },
        description: {
          de: "Dynamisches Forecasting, AI-gestützte Varianzanalyse, monatliche Steering-Reports mit priorisierten Verbesserungen. Das monatliche Steering-Meeting wird zum Kern Ihrer Unternehmenssteuerung.",
          en: "Dynamic forecasting, AI-assisted variance analysis, monthly steering reports with prioritized improvements. The monthly steering meeting becomes how leadership actually runs the business.",
        },
        deliverables: {
          de: ["Monatlicher Steering-Report", "Varianzanalyse & Forecasting", "Priorisierte Verbesserungen", "Evidenzbasierte Entscheidungsgrundlage"],
          en: ["Monthly steering report", "Variance analysis & forecasting", "Prioritized improvements", "Evidence-based decision framework"],
        },
      },
    ],
  },
  results: {
    label: { de: "Ergebnisse", en: "Outcomes" },
    h2_line1: { de: "Messbare Ergebnisse.", en: "Measurable outcomes." },
    h2_line2: { de: "Innerhalb von 90 Tagen.", en: "Within 90 days." },
    items: [
      {
        metric: "5–15%",
        label: { de: "EBITDA-Verbesserung", en: "EBITDA improvement" },
        description: {
          de: "Durch strukturelle Optimierung: unnötige Kosten eliminiert, Margen nach Profit Center optimiert, Cash-Zyklen verkürzt.",
          en: "Through structural optimization: unnecessary costs eliminated, margins optimized by profit center, cash cycles shortened.",
        },
      },
      {
        metric: "30",
        label: { de: "Tage bis zur ersten Management-P&L", en: "Days to first management P&L" },
        description: {
          de: "Nach der Diagnose sehen Sie Ihr Unternehmen zum ersten Mal durch eine strukturierte Management-Brille mit Drill-Down bis zur Einzelbuchung.",
          en: "After diagnosis, you see your business through a structured management lens for the first time, with drill-down to every transaction.",
        },
      },
      {
        metric: "100%",
        label: { de: "Nachvollziehbarkeit", en: "Traceability" },
        description: {
          de: "Jede Kennzahl bis zur Einzelbuchung nachvollziehbar. Keine Black Box, keine Schätzungen. Deterministische Systeme, nicht probabilistische AI-Outputs.",
          en: "Every metric traceable to the source transaction. No black box, no estimates. Deterministic systems, not probabilistic AI outputs.",
        },
      },
      {
        metric: "\u221E",
        label: { de: "Permanentes System", en: "Permanent system" },
        description: {
          de: "Kein Berater-Report, der in der Schublade landet. Ein permanentes System, das Ihnen gehört, sich monatlich verbessert und mit Ihrem Unternehmen wächst.",
          en: "No consultant report gathering dust. A permanent system you own, that improves monthly and grows with your business.",
        },
      },
    ],
  },
  differentiators: {
    label: { de: "Abgrenzung", en: "Differentiation" },
    h2_line1: { de: "Was vor Wie.", en: "What before how." },
    h2_line2: { de: "Wahrheit vor", en: "Truth before" },
    h2_line3: { de: "Automatisierung.", en: "automation." },
    typical_label: { de: "Typisch", en: "Typical" },
    valtor_label: { de: "Valtor", en: "Valtor" },
    unique_angle: {
      de: "Ihr Prozess- und Technikteam versteht keine GuV. Ihr Finance versteht keine Prozesse. Wir sind Buchhalter im Herzen und Operateure in der Praxis. Das ist der Unterschied.",
      en: "Your process and tech people don't understand P&L. Your finance team doesn't understand processes. We are accountants at heart and operators in practice. That's the difference.",
    },
    items: [
      {
        category: { de: "AI-Agenturen", en: "AI Agencies" },
        limitation: {
          de: "Fokussieren auf WIE gebaut wird. Automatisieren Prozesse, ohne zu hinterfragen, ob sie existieren sollten. Starten mit Tools.",
          en: "Focus on HOW to build. Automate processes without questioning whether they should exist. Start with tools.",
        },
        valtor: {
          de: "Beginnt mit WAS gebaut werden sollte. Schafft zuerst strukturierte Geschäftswahrheit. Empfiehlt Automatisierung nur dort, wo sie geschäftlichen Impact hat.",
          en: "Starts with WHAT should be built. Creates structured business truth first. Recommends automation only where it has business impact.",
        },
      },
      {
        category: { de: "Management-Berater", en: "Management Consultants" },
        limitation: {
          de: "Liefern Reports und Empfehlungen. Gehen nach dem Projekt. Die Erkenntnis verflüchtigt sich, wenn sie gehen.",
          en: "Deliver reports and recommendations. Leave after the project. The insight evaporates when they go.",
        },
        valtor: {
          de: "Baut permanente Systeme. Die Infrastruktur gehört Ihnen. Das System wird jeden Monat präziser und wertvoller.",
          en: "Builds permanent systems. You own the infrastructure. The system becomes more precise and valuable every month.",
        },
      },
      {
        category: { de: "BI- und Dashboard-Tools", en: "BI & Dashboard Vendors" },
        limitation: {
          de: "Visualisieren, was eingegeben wird. Schaffen keine Management-Struktur. Sagen nicht, was zu tun ist. Schönheit ohne Substanz.",
          en: "Visualize what you feed them. Don\u2019t create management structure. Don\u2019t tell you what to do. Beauty without substance.",
        },
        valtor: {
          de: "Vereinheitlicht und strukturiert Daten zuerst. Jeder Drill-Down führt zur Quellbuchung. Die Visualisierung ist das Ergebnis, nicht das Produkt.",
          en: "Unifies and structures data first. Every drill-down leads to the source transaction. The visualization is the output, not the product.",
        },
      },
    ],
  },
  audience: {
    label: { de: "Für wen", en: "Who it\u2019s for" },
    h2_line1: { de: "Für Unternehmen, die", en: "For companies that" },
    h2_line2: { de: "ihre Komplexität", en: "have outgrown their" },
    h2_line3: { de: "überwachsen haben.", en: "own complexity." },
    body1: {
      de: "Agenturen, Service-Unternehmen, SaaS-Firmen und gründergeführte Unternehmen im DACH-Raum mit €3M–€50M Umsatz. Operativ komplex genug, um den Schmerz zu spüren, aber ohne schwere ERP-Implementierung.",
      en: "Agencies, service businesses, SaaS companies, and founder-led businesses in the DACH region with \u20AC3M\u2013\u20AC50M revenue. Operationally complex enough to feel the pain, but without heavy ERP implementation.",
    },
    body2: {
      de: "Unternehmen mit mehreren Produktlinien, Geschäftsbereichen oder Standorten, deren Reporting-Komplexität schneller gewachsen ist als ihre Fähigkeit, evidenzbasierte Entscheidungen zu treffen.",
      en: "Companies with multiple product lines, business units, or locations whose reporting complexity has outgrown their ability to make evidence-based decisions.",
    },
    signals_label: { de: "Erkennen Sie sich wieder?", en: "Sound familiar?" },
    signals: [
      {
        de: "Wir haben Umsatz-Reports, aber wissen nicht, welches Produkt tatsächlich profitabel ist.",
        en: "We have revenue reports but don\u2019t know which product is actually profitable.",
      },
      {
        de: "Unser Controlling liefert Zahlen, aber wir können nicht nachvollziehen, was dahintersteckt.",
        en: "Our controlling delivers numbers but we can\u2019t trace what\u2019s behind them.",
      },
      {
        de: "Wir haben in 10+ Systemen Daten, aber niemand verbindet sie.",
        en: "We have data in 10+ systems but nobody connects them.",
      },
      {
        de: "Unsere Management-Meetings basieren auf Meinungen, nicht auf Evidenz.",
        en: "Our management meetings are based on opinions, not evidence.",
      },
      {
        de: "Wir wissen nicht, wo Cash zwischen Lieferung und Zahlung verloren geht.",
        en: "We don\u2019t know where cash leaks between delivery and payment.",
      },
      {
        de: "Wir hatten ein BI-Projekt. Dashboards stehen, aber sie sagen uns nicht, was wir tun sollen.",
        en: "We had a BI project. Dashboards are up but they don\u2019t tell us what to do.",
      },
    ],
  },
  engagement: {
    label: { de: "Zusammenarbeit", en: "Engagement" },
    h2_line1: { de: "Ein klarer Weg.", en: "A clear path." },
    h2_line2: { de: "Kein Großprojekt-Risiko.", en: "No big-project risk." },
    steps: [
      {
        name: { de: "Diagnose", en: "Diagnostic" },
        price: "€5–15K",
        duration: { de: "4–6 Wochen", en: "4\u20136 weeks" },
        description: {
          de: "Geschäftsmodell-Audit, P&L-Rekonstruktion, System-Audit, EBITDA-Roadmap. Sie erhalten sofort Klarheit, selbst wenn Sie nicht weitergehen.",
          en: "Business model audit, P&L reconstruction, system audit, EBITDA roadmap. You get immediate clarity, even if you don\u2019t proceed.",
        },
      },
      {
        name: { de: "Build", en: "Build" },
        price: "€20–50K",
        duration: { de: "8–12 Wochen", en: "8\u201312 weeks" },
        description: {
          de: "EBITDA-Verbesserung, Datenschicht, Process Intelligence, Dashboards. Modularer Scope, basierend auf Diagnose-Ergebnissen.",
          en: "EBITDA improvement, data layer, process intelligence, dashboards. Modular scope based on diagnostic findings.",
        },
      },
      {
        name: { de: "Steer", en: "Steer" },
        price: { de: "€3–8K/Monat", en: "€3\u20138K/month" },
        duration: { de: "Fortlaufend", en: "Ongoing" },
        description: {
          de: "Monatliche Datenaktualisierung, Steering-Reports, Forecasting, priorisierte Verbesserungen. Das Betriebssystem Ihres monatlichen Leadership-Meetings.",
          en: "Monthly data refresh, steering reports, forecasting, prioritized improvements. The operating system for your monthly leadership meeting.",
        },
      },
    ],
  },
  proof: {
    label: { de: "Proof of Value", en: "Proof of value" },
    h2_line1: { de: "30 / 60 / 90 Tage.", en: "30 / 60 / 90 days." },
    h2_line2: { de: "Messbare Klarheit.", en: "Measurable clarity." },
    milestones: [
      {
        days: "30",
        title: { de: "Diagnose abgeschlossen", en: "Diagnostic complete" },
        items: {
          de: ["Geschäftsmodell validiert", "P&L rekonstruiert (12 Monate historisch)", "EBITDA-Chancen identifiziert (typisch 5–15%)", "Erste vereinheitlichte Profitabilitätssicht"],
          en: ["Business model validated", "P&L reconstructed (12 months historical)", "EBITDA opportunities identified (typical 5\u201315%)", "First unified profitability view"],
        },
      },
      {
        days: "60",
        title: { de: "Datenschicht operativ", en: "Data layer operational" },
        items: {
          de: ["Alle Quellsysteme verbunden", "Order-to-Cash-Prozess kartiert und optimiert", "Prozess-Bottlenecks und Cash-Verzögerungen sichtbar", "Erste Dashboards mit Drill-Down"],
          en: ["All source systems connected", "Order-to-cash process mapped and optimized", "Process bottlenecks and cash delays surfaced", "First dashboards with drill-down"],
        },
      },
      {
        days: "90",
        title: { de: "Management-Intelligence live", en: "Management intelligence live" },
        items: {
          de: ["Komplette Dashboard-Suite operativ", "Event-Log-basierte Prozessanalyse", "Erster Steering-Report mit Empfehlungen", "Messbare EBITDA- und Cashflow-Verbesserung"],
          en: ["Full dashboard suite operational", "Event-log-based process analysis", "First steering report with recommendations", "Measurable EBITDA and cash flow improvement"],
        },
      },
    ],
  },
  contact: {
    label: { de: "Nächster Schritt", en: "Next step" },
    h2_line1: { de: "Lassen Sie uns Ihr", en: "Let\u2019s diagnose" },
    h2_line2: { de: "Unternehmen diagnostizieren.", en: "your business." },
    body: {
      de: "In 30 Minuten zeigen wir Ihnen, welche versteckten EBITDA- und Cashflow-Chancen in Ihrem Unternehmen liegen. Und was der erste Schritt wäre. Keine Verpflichtung. Kein Verkaufsgespräch. Nur Substanz.",
      en: "In 30 minutes, we\u2019ll show you what hidden EBITDA and cash flow opportunities exist in your business. And what the first step would be. No commitment. No sales pitch. Just substance.",
    },
    cta: { de: "Diagnose-Gespräch buchen", en: "Book a diagnostic call" },
  },
  faq: {
    label: { de: "Häufige Fragen", en: "FAQ" },
    h2: { de: "Häufig gestellte Fragen", en: "Frequently asked questions" },
    items: [
      {
        q: {
          de: "Was genau liefert Valtor.io?",
          en: "What exactly does Valtor.io deliver?",
        },
        a: {
          de: "Wir liefern ein permanentes operatives Intelligenzsystem: eine strukturierte Management-P&L nach Profit Center, eine vereinheitlichte Datenschicht über alle Ihre Systeme, Prozess-Intelligence mit Event-basierter Analyse und ein monatliches Steering-System, das Ihnen sagt, was als nächstes verbessert werden sollte und warum.",
          en: "We deliver a permanent operational intelligence system: a structured management P&L by profit center, a unified data layer across all your systems, process intelligence with event-based analysis, and a monthly steering system that tells you what to improve next and why.",
        },
      },
      {
        q: {
          de: "Für welche Unternehmen ist Valtor.io geeignet?",
          en: "What kind of companies is Valtor.io for?",
        },
        a: {
          de: "Mittelständische Unternehmen im DACH-Raum mit €3M–€50M Umsatz: Agenturen, Service-Unternehmen, SaaS-Firmen und gründergeführte Unternehmen, die operativ komplex genug sind, um den Schmerz fragmentierter Daten und fehlender Management-Transparenz zu spüren.",
          en: "Mid-market companies in the DACH region with €3M–€50M revenue: agencies, service businesses, SaaS companies, and founder-led businesses that are operationally complex enough to feel the pain of fragmented data and missing management transparency.",
        },
      },
      {
        q: {
          de: "Wie unterscheidet sich Valtor.io von einer Unternehmensberatung?",
          en: "How is Valtor.io different from a management consultancy?",
        },
        a: {
          de: "Berater liefern Reports und gehen. Wir bauen permanente Systeme, die Ihnen gehören. Jede Zahl ist bis zur Einzelbuchung nachvollziehbar. Keine Schätzungen, keine Black Box. Das System wird jeden Monat präziser und wächst mit Ihrem Unternehmen.",
          en: "Consultants deliver reports and leave. We build permanent systems that you own. Every number is traceable to the source transaction. No estimates, no black box. The system becomes more precise every month and grows with your business.",
        },
      },
      {
        q: {
          de: "Was kostet eine Zusammenarbeit mit Valtor.io?",
          en: "What does working with Valtor.io cost?",
        },
        a: {
          de: "Die Diagnose kostet €5–15K (4–6 Wochen), der Build €20–50K (8–12 Wochen), und das fortlaufende Steering €3–8K pro Monat. Jede Phase liefert eigenständigen Wert. Sie können nach der Diagnose entscheiden, ob Sie weitergehen.",
          en: "The diagnostic costs €5–15K (4–6 weeks), the build €20–50K (8–12 weeks), and ongoing steering €3–8K per month. Each phase delivers standalone value. You can decide after the diagnostic whether to continue.",
        },
      },
      {
        q: {
          de: "Wie schnell sehe ich erste Ergebnisse?",
          en: "How quickly will I see results?",
        },
        a: {
          de: "Nach 30 Tagen haben Sie eine vollständige Management-P&L mit identifizierten EBITDA-Chancen (typisch 5–15%). Nach 60 Tagen ist die Datenschicht operativ mit ersten Dashboards. Nach 90 Tagen läuft das komplette Steering-System mit messbarer EBITDA- und Cashflow-Verbesserung.",
          en: "After 30 days, you have a complete management P&L with identified EBITDA opportunities (typical 5–15%). After 60 days, the data layer is operational with first dashboards. After 90 days, the full steering system is running with measurable EBITDA and cash flow improvement.",
        },
      },
      {
        q: {
          de: "Nutzt Valtor.io künstliche Intelligenz?",
          en: "Does Valtor.io use artificial intelligence?",
        },
        a: {
          de: "Ja, aber anders als die meisten. Wir nutzen AI für Orchestrierung, Datenverarbeitung und Analyse, nicht für die Ergebnisse selbst. Alle finanziellen Outputs sind deterministisch: regelbasiert, nachvollziehbar, reproduzierbar. Keine probabilistischen AI-Schätzungen in Ihren Managementzahlen.",
          en: "Yes, but differently from most. We use AI for orchestration, data processing, and analysis, not for the outputs themselves. All financial outputs are deterministic: rule-based, traceable, reproducible. No probabilistic AI estimates in your management numbers.",
        },
      },
    ],
  },
  footer: {
    tagline: {
      de: "AI-first Business Optimization für den Mittelstand.",
      en: "AI-first business optimization for mid-market companies.",
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
