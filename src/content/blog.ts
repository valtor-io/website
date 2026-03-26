export interface StatCard {
  number: string;
  label: { de: string; en: string };
  source?: string;
}

export interface CalloutBox {
  type: "tip" | "stat" | "warning";
  text: { de: string; en: string };
}

export interface ComparisonRow {
  dimension: { de: string; en: string };
  old: { de: string; en: string };
  new: { de: string; en: string };
}

export interface BlogSection {
  heading: { de: string; en: string };
  body: { de: string; en: string };
  callout?: CalloutBox;
  stats?: StatCard[];
  comparison?: {
    oldLabel: { de: string; en: string };
    newLabel: { de: string; en: string };
    rows: ComparisonRow[];
  };
  numberedList?: { de: string; en: string }[];
}

export interface BlogPost {
  slug: string;
  publishedAt: string;
  readingTime: { de: string; en: string };
  category: { de: string; en: string };
  title: { de: string; en: string };
  description: { de: string; en: string };
  keywords: { de: string[]; en: string[] };
  relatedSlugs?: string[];
  sections: BlogSection[];
}

export const posts: BlogPost[] = [
  {
    slug: "bwa-vs-management-pnl",
    publishedAt: "2026-03-26",
    readingTime: { de: "8 Min", en: "8 min" },
    category: { de: "Managementwahrheit", en: "Management Truth" },
    title: {
      de: "Warum Ihre BWA Sie in die Irre führt — und was Sie stattdessen brauchen",
      en: "Your Bookkeeper Gives You Tax Truth. Who Gives You Management Truth?",
    },
    description: {
      de: "Die BWA zeigt Ihnen, was das Finanzamt wissen muss. Aber sie zeigt Ihnen nicht, welche Produkte profitabel sind, wo Cash verloren geht oder was als nächstes verbessert werden sollte. Der Unterschied zwischen Buchhaltungswahrheit und Managementwahrheit.",
      en: "Your BWA shows what the tax office needs. But it doesn't show which products are profitable, where cash leaks, or what to improve next. The difference between bookkeeping truth and management truth.",
    },
    keywords: {
      de: ["BWA Unternehmenssteuerung", "Management P&L Mittelstand", "Controlling vs Buchhaltung", "Profitcenter Auswertung", "DATEV Controlling Grenzen"],
      en: ["management P&L vs bookkeeping", "profit center analysis", "financial visibility mid-market", "EBITDA improvement service business"],
    },
    relatedSlugs: ["versteckte-margen-lecks", "daten-vor-ki"],
    sections: [
      {
        heading: {
          de: "Die BWA: Wahrheit für das Finanzamt, nicht für Sie",
          en: "The BWA: Truth for the Tax Office, Not for You",
        },
        body: {
          de: "Jedes mittelständische Unternehmen in Deutschland kennt die BWA — die Betriebswirtschaftliche Auswertung, die monatlich vom Steuerberater kommt. Sie zeigt Umsatz, Kosten, Ergebnis. Auf den ersten Blick sieht das nach Unternehmenssteuerung aus.\n\nAber die BWA wurde für das Finanzamt gebaut, nicht für Geschäftsführer. Sie folgt der Logik der Buchhaltung: Kontenrahmen, Steuerkategorien, Abschreibungsregeln. Was sie nicht zeigt: Welches Produkt ist tatsächlich profitabel? Welcher Kunde liefert welche Marge? Wo verschwindet Cash zwischen Lieferung und Zahlung?\n\nDie BWA ist ein rückwärtsgerichteter Bericht über steuerliche Realität. Für Entscheidungen, die Ihr Unternehmen nach vorne bringen, reicht das nicht.",
          en: "Every mid-market company in Germany knows the BWA — the standardized financial report that arrives monthly from the tax advisor. It shows revenue, costs, profit. At first glance, it looks like business intelligence.\n\nBut the BWA was built for the tax office, not for CEOs. It follows accounting logic: chart of accounts, tax categories, depreciation rules. What it doesn't show: which product is actually profitable? Which client delivers which margin? Where does cash disappear between delivery and payment?\n\nThe BWA is a backward-looking report about tax reality. For decisions that move your business forward, it's not enough.",
        },
      },
      {
        heading: {
          de: "Was fehlt: Die Management-P&L",
          en: "What's Missing: The Management P&L",
        },
        body: {
          de: "Eine Management-P&L ist fundamental anders als eine BWA. Sie ist nach Ihrem Geschäftsmodell strukturiert, nicht nach Steuerlogik.\n\nStatt einer einzigen Gesamtübersicht sehen Sie Profitabilität nach Profit Center — zum Beispiel nach Produktlinie, Kundensegment oder Standort. Jede Zahl lässt sich bis zur Einzelbuchung nachvollziehen. Und sie verbindet Finanzdaten mit operativen Daten: Auslastung, Projektmargen, Durchlaufzeiten.\n\nEin konkretes Beispiel: Eine 25-Personen-Agentur sieht in der BWA €3,2M Umsatz und ein ordentliches Ergebnis. Die Management-P&L nach Kundensegment zeigt: Die drei größten Kunden (60% vom Umsatz) liefern nur 35% der Marge. Vier kleinere Kunden mit zusammen 15% vom Umsatz liefern 40% der Marge. Die strategische Konsequenz? Völlig anders als das, was die BWA suggeriert.",
          en: "A management P&L is fundamentally different from standard bookkeeping reports. It's structured around your business model, not tax logic.\n\nInstead of a single overview, you see profitability by profit center — for example by product line, customer segment, or location. Every number traces back to the source transaction. And it connects financial data with operational data: utilization, project margins, cycle times.\n\nA concrete example: a 25-person agency sees €3.2M revenue and a decent bottom line in their bookkeeping. The management P&L by customer segment reveals: the three largest clients (60% of revenue) deliver only 35% of margin. Four smaller clients with 15% of revenue deliver 40% of margin. The strategic implication? Completely different from what the bookkeeping suggested.",
        },
        callout: {
          type: "stat",
          text: {
            de: "In unserer Erfahrung zeigt die Management-P&L bei 80% der Mittelständler ein fundamental anderes Bild als die BWA — besonders bei der Profitabilität nach Kundensegment.",
            en: "In our experience, the management P&L reveals a fundamentally different picture than bookkeeping reports for 80% of mid-market companies — especially regarding profitability by customer segment.",
          },
        },
      },
      {
        heading: {
          de: "DATEV gibt Buchhaltungswahrheit. Wer gibt Managementwahrheit?",
          en: "DATEV Gives Bookkeeping Truth. Who Gives Management Truth?",
        },
        body: {
          de: "Hier liegt das strukturelle Problem im deutschen Mittelstand: Die Buchhaltungsinfrastruktur (DATEV, Steuerberater, BWA) ist exzellent. Deutschland hat vermutlich die beste buchhalterische Wahrheit der Welt. Aber die Managementinfrastruktur fehlt.\n\nDie Lücke zwischen dem, was DATEV liefert, und dem, was Geschäftsführer für Entscheidungen brauchen, wird mit Tabellenkalkulationen, Bauchgefühl und fragmentierten Dashboards gefüllt. Das ist keine Lösung — das ist organisierte Vermutung.\n\nWas gebraucht wird, ist eine deterministische Management-Wahrheitsschicht: ein System, das alle Datenquellen (CRM, Buchhaltung, HR, Projektmanagement) vereinheitlicht und daraus eine Management-P&L mit vollständiger Nachvollziehbarkeit baut. Kein AI-Raten, keine Schätzungen. Jede Zahl bis zur Quelle nachvollziehbar.",
          en: "Here's the structural problem in the German mid-market: the bookkeeping infrastructure (DATEV, tax advisors, BWA) is excellent. Germany probably has the best bookkeeping truth in the world. But the management infrastructure is missing.\n\nThe gap between what DATEV delivers and what business leaders need for decisions is filled with spreadsheets, gut feeling, and fragmented dashboards. That's not a solution — that's organized guessing.\n\nWhat's needed is a deterministic management truth layer: a system that unifies all data sources (CRM, accounting, HR, project management) and builds a management P&L with full traceability. No AI guessing, no estimates. Every number traceable to its source.",
        },
        comparison: {
          oldLabel: { de: "BWA / Buchhaltung", en: "BWA / Bookkeeping" },
          newLabel: { de: "Management-P&L", en: "Management P&L" },
          rows: [
            {
              dimension: { de: "Strukturiert nach", en: "Structured by" },
              old: { de: "Steuerlogik (SKR03/04)", en: "Tax logic (chart of accounts)" },
              new: { de: "Geschäftsmodell", en: "Business model" },
            },
            {
              dimension: { de: "Granularität", en: "Granularity" },
              old: { de: "Gesamtunternehmen", en: "Whole company" },
              new: { de: "Profit Center / Segment", en: "Profit center / segment" },
            },
            {
              dimension: { de: "Nachvollziehbarkeit", en: "Traceability" },
              old: { de: "Bis zur Buchung", en: "To the journal entry" },
              new: { de: "Bis zur Transaktion", en: "To the source transaction" },
            },
            {
              dimension: { de: "Datenquellen", en: "Data sources" },
              old: { de: "Nur Finanzbuchhaltung", en: "Financial accounting only" },
              new: { de: "Finanzen + CRM + HR + Ops", en: "Finance + CRM + HR + Ops" },
            },
            {
              dimension: { de: "Zeitperspektive", en: "Time perspective" },
              old: { de: "Rückblickend", en: "Backward-looking" },
              new: { de: "Rückblickend + Prognose", en: "Backward-looking + forecast" },
            },
            {
              dimension: { de: "Entscheidungsrelevanz", en: "Decision relevance" },
              old: { de: "Steuererklärung", en: "Tax filing" },
              new: { de: "Operative Steuerung", en: "Operational steering" },
            },
          ],
        },
      },
      {
        heading: {
          de: "Die fünf Fragen, die Ihre BWA nicht beantwortet",
          en: "Five Questions Your BWA Can't Answer",
        },
        body: {
          de: "Testen Sie es selbst. Können Sie diese fünf Fragen mit Ihrer aktuellen BWA beantworten?",
          en: "Test it yourself. Can you answer these five questions with your current financial reports?",
        },
        numberedList: [
          {
            de: "Welches Ihrer Produkte oder Services hat die höchste Marge — nicht den höchsten Umsatz, sondern die höchste Marge nach allen zurechenbaren Kosten?",
            en: "Which of your products or services has the highest margin — not highest revenue, but highest margin after all attributable costs?",
          },
          {
            de: "Wie viele Tage vergehen durchschnittlich zwischen Leistungserbringung und Zahlungseingang — und wie hat sich das in den letzten 12 Monaten verändert?",
            en: "How many days pass on average between service delivery and payment receipt — and how has that changed over the last 12 months?",
          },
          {
            de: "Welcher Ihrer Kunden verursacht die höchsten versteckten Kosten durch Nacharbeit, Abstimmungsaufwand oder Zahlungsverzögerungen?",
            en: "Which of your clients causes the highest hidden costs through rework, coordination overhead, or payment delays?",
          },
          {
            de: "Was würde mit Ihrem EBITDA passieren, wenn Sie die unprofitabelsten 20% Ihrer Kundenbeziehungen beenden würden?",
            en: "What would happen to your EBITDA if you ended the least profitable 20% of your client relationships?",
          },
          {
            de: "In welchem Prozessschritt zwischen Auftrag und Zahlung geht die meiste Zeit verloren?",
            en: "In which process step between order and payment is the most time lost?",
          },
        ],
        callout: {
          type: "warning",
          text: {
            de: "Wenn Sie keine dieser Fragen mit einer Zahl beantworten können, die Sie bis zur Einzelbuchung nachvollziehen können, fehlt Ihnen die Managementwahrheit.",
            en: "If you can't answer any of these with a number traceable to the source transaction, you're missing management truth.",
          },
        },
      },
      {
        heading: {
          de: "Der Weg von der BWA zur Managementwahrheit",
          en: "From Bookkeeping Reports to Management Truth",
        },
        body: {
          de: "Der Aufbau einer Management-Wahrheitsschicht folgt einem klaren Weg:\n\nZuerst das Geschäftsmodell verstehen: Wie verdient das Unternehmen Geld? Was sind die natürlichen Profit Center? Welche Kostenstrukturen gehören zu welchen Wertschöpfungsströmen?\n\nDann die Daten vereinheitlichen: CRM, Buchhaltung, Zeiterfassung, Projektmanagement, HR — alles in eine einzige, konsistente Datenschicht. Nicht durch ein weiteres Dashboard, sondern durch eine strukturierte Datenarchitektur, in der jeder Datenpunkt seinen Ursprung kennt.\n\nDann die Management-P&L bauen: Umsatz und Kosten den richtigen Profit Centern zuordnen. Deckungsbeiträge berechnen. Cash-Zyklen messen. Prozesszeiten erfassen.\n\nDas Ergebnis: Zum ersten Mal sehen Sie Ihr Unternehmen durch eine Management-Brille statt durch eine Steuer-Brille. Und jede Zahl lässt sich bis zur Quelle nachvollziehen — deterministisch, nicht geschätzt.\n\nDas ist der Unterschied zwischen Unternehmen, die auf Vermutungen steuern, und Unternehmen, die auf Evidenz steuern.",
          en: "Building a management truth layer follows a clear path:\n\nFirst, understand the business model: how does the company make money? What are the natural profit centers? Which cost structures belong to which value streams?\n\nThen unify the data: CRM, accounting, time tracking, project management, HR — everything into a single, consistent data layer. Not through another dashboard, but through a structured data architecture where every data point knows its origin.\n\nThen build the management P&L: assign revenue and costs to the right profit centers. Calculate contribution margins. Measure cash cycles. Capture process times.\n\nThe result: for the first time, you see your business through a management lens instead of a tax lens. And every number traces back to its source — deterministic, not estimated.\n\nThat's the difference between companies that steer on guesses and companies that steer on evidence.",
        },
      },
    ],
  },
  {
    slug: "versteckte-margen-lecks",
    publishedAt: "2026-03-27",
    readingTime: { de: "10 Min", en: "10 min" },
    category: { de: "EBITDA-Optimierung", en: "EBITDA Optimization" },
    title: {
      de: "7 versteckte Margen-Lecks, die Ihren Mittelstand jährlich 6-stellig kosten",
      en: "7 Hidden Margin Leaks Costing Mid-Market Companies Six Figures Annually",
    },
    description: {
      de: "Die meisten Geschäftsführer kennen ihre Gesamtmarge. Aber fast niemand kennt die wahren Cost-to-Serve-Unterschiede zwischen Kunden, die versteckten Working-Capital-Kosten oder wo Prozess-Reibung EBITDA frisst. Eine systematische Analyse der häufigsten Margen-Lecks im Mittelstand.",
      en: "Most CEOs know their overall margin. But almost nobody knows the true cost-to-serve differences between clients, the hidden working capital costs, or where process friction eats EBITDA. A systematic analysis of the most common margin leaks in mid-market companies.",
    },
    keywords: {
      de: ["Marge verbessern Mittelstand", "EBITDA Optimierung", "Cost-to-Serve Analyse", "Working Capital Optimierung", "versteckte Kosten Unternehmen", "Deckungsbeitrag nach Kunden"],
      en: ["improve margins mid-market", "EBITDA optimization", "cost-to-serve analysis", "working capital optimization", "hidden costs business", "contribution margin by client"],
    },
    relatedSlugs: ["bwa-vs-management-pnl", "daten-vor-ki"],
    sections: [
      {
        heading: {
          de: "Die Marge, die Sie kennen, ist nicht die Marge, die Sie haben",
          en: "The Margin You Know Is Not the Margin You Have",
        },
        body: {
          de: "Fragen Sie einen Geschäftsführer nach seiner Marge, bekommen Sie eine Zahl. Diese Zahl stammt aus der BWA oder der Gesamtergebnisrechnung. Sie ist korrekt — auf Unternehmensebene.\n\nAber sie verbirgt eine entscheidende Wahrheit: Die Marge ist nicht gleichmäßig verteilt. Einige Kunden, Produkte oder Regionen liefern überproportional viel. Andere zerstören still Wert — und niemand sieht es, weil die Durchschnittszahl gut aussieht.\n\nIn unserer Arbeit mit mittelständischen Unternehmen im DACH-Raum sehen wir ein wiederkehrendes Muster: Zwischen der Gesamtmarge und der tatsächlichen, vollständig zugerechneten Marge nach Segment liegt oft ein Unterschied von 8 bis 15 Prozentpunkten. Das sind keine Rundungsfehler. Das ist verlorenes EBITDA.",
          en: "Ask a CEO about their margin, you'll get a number. That number comes from the bookkeeping or the overall P&L. It's correct — at the company level.\n\nBut it hides a critical truth: margin is not evenly distributed. Some clients, products, or regions deliver disproportionately. Others quietly destroy value — and nobody sees it because the average looks fine.\n\nIn our work with mid-market companies across DACH, we see a recurring pattern: between the overall margin and the actual, fully-attributed margin by segment, there's often a difference of 8 to 15 percentage points. These aren't rounding errors. That's lost EBITDA.",
        },
        stats: [
          {
            number: "5,7×",
            label: { de: "EBITDA-Multiplikator im Mittelstand — jeder Euro Marge zählt 5,7-fach", en: "EBITDA multiple in mid-market — every margin euro counts 5.7×" },
            source: "Exit Coach EBITDA Multiples 2025",
          },
          {
            number: "€26,5 Mrd.",
            label: { de: "Gebundenes Working Capital im deutschen Mittelstand", en: "Working capital trapped in German mid-market" },
            source: "Grant Thornton Studie",
          },
          {
            number: "20%",
            label: { de: "Der Kunden liefern oft 250%+ des Gesamtgewinns", en: "Of clients often deliver 250%+ of total profit" },
            source: "Kaplan/Narayanan Whale Curve",
          },
        ],
      },
      {
        heading: {
          de: "Leck #1: Cost-to-Serve-Blindheit",
          en: "Leak #1: Cost-to-Serve Blindness",
        },
        body: {
          de: "Nicht jeder Kunde kostet gleich viel in der Betreuung. Ein Kunde mit €500K Umsatz, der selten anruft, klare Briefings liefert und pünktlich zahlt, ist fundamental anders als ein €500K-Kunde, der wöchentliche Abstimmungen braucht, Briefings ändert und 90 Tage Zahlungsziel ausreizt.\n\nAber in der klassischen Ergebnisrechnung sehen beide gleich aus: €500K Umsatz.\n\nDie Cost-to-Serve-Analyse rechnet jedem Kunden die tatsächlichen Kosten zu: direkte Projektkosten, aber auch anteilige Account-Management-Zeit, Support-Aufwand, Nacharbeitskosten und Opportunitätskosten durch gebundene Kapazität. Erst dann wird sichtbar, welche Kunden wirklich profitabel sind.\n\nIn einer typischen Agentur mit 30 Mitarbeitern finden wir regelmäßig: 2-3 vermeintliche Top-Kunden, die nach vollständiger Kostenverrechnung weniger Deckungsbeitrag liefern als mittelgroße Kunden, die niemand auf dem Radar hat.",
          en: "Not every client costs the same to serve. A client with €500K revenue who rarely calls, delivers clear briefs, and pays on time is fundamentally different from a €500K client who needs weekly alignment meetings, changes briefs, and stretches payment terms to 90 days.\n\nBut in standard accounting, both look the same: €500K revenue.\n\nCost-to-serve analysis attributes actual costs to each client: direct project costs, but also proportional account management time, support effort, rework costs, and opportunity costs from tied-up capacity. Only then does it become visible which clients are truly profitable.\n\nIn a typical 30-person agency, we regularly find: 2-3 supposed top clients who, after full cost attribution, deliver less contribution margin than mid-sized clients nobody had on their radar.",
        },
        callout: {
          type: "tip",
          text: {
            de: "Schnelltest: Können Sie für Ihre Top-10-Kunden den Deckungsbeitrag nach allen zurechenbaren Kosten beziffern — nicht nur den Umsatz? Wenn nicht, haben Sie ein Cost-to-Serve-Blindheitsproblem.",
            en: "Quick test: Can you state the contribution margin after all attributable costs for your top 10 clients — not just revenue? If not, you have a cost-to-serve blindness problem.",
          },
        },
      },
      {
        heading: {
          de: "Leck #2: Working-Capital-Lücken zwischen Lieferung und Zahlung",
          en: "Leak #2: Working Capital Gaps Between Delivery and Payment",
        },
        body: {
          de: "Working Capital ist der stille Margenfresser. Die meisten Geschäftsführer kennen ihre offenen Forderungen als Gesamtzahl. Was sie nicht kennen: den tatsächlichen Cash Conversion Cycle nach Kundensegment.\n\nBeispiel: Ein SaaS-Unternehmen mit €8M ARR hat einen durchschnittlichen DSO (Days Sales Outstanding) von 45 Tagen. Klingt akzeptabel. Die Analyse nach Segment zeigt: Enterprise-Kunden zahlen im Schnitt nach 72 Tagen, SMB-Kunden nach 28 Tagen. Das Enterprise-Segment bindet dadurch €380K mehr Cash als bei SMB-Konditionen.\n\nDiese €380K tauchen nirgends als Kosten auf. Kein Controller weist sie aus. Aber sie sind real: Es ist Kapital, das nicht für Wachstum, Investitionen oder Schuldentilgung verfügbar ist.\n\nDas Problem multipliziert sich, wenn man die gesamte Order-to-Cash-Kette betrachtet: Verzögerungen bei der Rechnungsstellung, unklare Zahlungskonditionen, fehlende Mahnprozesse. Jeder verlorene Tag kostet.",
          en: "Working capital is the silent margin killer. Most CEOs know their outstanding receivables as a total number. What they don't know: the actual cash conversion cycle by customer segment.\n\nExample: a SaaS company with €8M ARR has an average DSO (Days Sales Outstanding) of 45 days. Sounds acceptable. The analysis by segment shows: enterprise clients pay on average after 72 days, SMB clients after 28 days. The enterprise segment thereby ties up €380K more cash than under SMB terms.\n\nThis €380K doesn't appear as a cost anywhere. No controller reports it. But it's real: it's capital not available for growth, investment, or debt reduction.\n\nThe problem compounds when you look at the entire order-to-cash chain: delays in invoicing, unclear payment terms, missing dunning processes. Every lost day costs money.",
        },
      },
      {
        heading: {
          de: "Leck #3: Prozess-Reibung, die niemand misst",
          en: "Leak #3: Process Friction Nobody Measures",
        },
        body: {
          de: "In jedem Unternehmen gibt es Prozessschritte, die länger dauern als sie müssten. Aber ohne Event-basiertes Prozess-Mining weiß niemand, wo genau die Reibung liegt.\n\nEin typisches Beispiel aus einer Beratungsfirma: Der Prozess von Projektabschluss bis Endrechnung dauert im Schnitt 11 Tage. Davon entfallen 2 Tage auf die eigentliche Rechnungserstellung und 9 Tage auf interne Freigabeschleifen, fehlende Stundennachweise und manuelle Datenübertragung zwischen Systemen.\n\nDas sind 9 Tage verschenkte Cash-Velocity — bei jedem einzelnen Projekt. Bei 200 Projekten pro Jahr und einer durchschnittlichen Rechnungssumme von €15K bedeutet das: €3M Umsatz, der 9 Tage später liquidiert wird als nötig.\n\nDie Lösung beginnt nicht mit Automatisierung. Sie beginnt mit Messung. Erst wenn jeder Statuswechsel in jedem Prozess als Event erfasst wird — mit Zeitstempel, Verantwortlichem und Quellesystem — wird sichtbar, wo die Reibung liegt.",
          en: "Every company has process steps that take longer than they should. But without event-based process mining, nobody knows exactly where the friction is.\n\nA typical example from a consulting firm: the process from project completion to final invoice takes 11 days on average. Of that, 2 days go to actual invoice creation and 9 days to internal approval loops, missing time sheets, and manual data transfer between systems.\n\nThat's 9 days of wasted cash velocity — on every single project. With 200 projects per year and an average invoice of €15K, that means: €3M of revenue that gets liquidated 9 days later than necessary.\n\nThe solution doesn't start with automation. It starts with measurement. Only when every status change in every process is captured as an event — with timestamp, responsible person, and source system — does the friction become visible.",
        },
        callout: {
          type: "stat",
          text: {
            de: "In 90% der von uns analysierten Unternehmen liegt die tatsächliche Prozesszeit bei mehr als dem Dreifachen der theoretischen Mindestzeit. Die Differenz ist unsichtbare Marge.",
            en: "In 90% of the companies we've analyzed, actual process time is more than three times the theoretical minimum. The difference is invisible margin.",
          },
        },
      },
      {
        heading: {
          de: "Leck #4–7: Preiserosion, Kapazitätsverschwendung, Overhead-Fehlallokation & Scope Creep",
          en: "Leaks #4–7: Price Erosion, Capacity Waste, Overhead Misallocation & Scope Creep",
        },
        body: {
          de: "Die restlichen vier Margen-Lecks sind genauso häufig:\n\nPreiserosion ohne Datengrundlage: Rabatte werden nach Bauchgefühl vergeben, nicht nach Deckungsbeitragsanalyse. Kunden mit hohem Serviceaufwand bekommen die gleichen Konditionen wie pflegeleichte Kunden.\n\nKapazitätsverschwendung durch Fehlplanung: Ohne Echtzeit-Auslastungsdaten werden Mitarbeiter falsch zugeteilt. Senior-Kräfte arbeiten an Low-Value-Aufgaben, während Standardkräfte bei komplexen Projekten Mehraufwand verursachen.\n\nOverhead-Fehlallokation: Gemeinkosten werden gleichmäßig umgelegt statt verursachungsgerecht zugeordnet. Das verzerrt die Profitabilität jedes Segments.\n\nScope Creep ohne Kostentransparenz: Projekte wachsen über den ursprünglichen Umfang hinaus, aber die Zusatzkosten werden nicht systematisch erfasst. Am Ende hat ein Projekt, das profitabel abgeschlossen wurde, tatsächlich Marge vernichtet — man sieht es nur nicht.",
          en: "The remaining four margin leaks are equally common:\n\nPrice erosion without data foundation: discounts are given based on gut feeling, not contribution margin analysis. Clients with high service requirements get the same terms as low-maintenance clients.\n\nCapacity waste through misallocation: without real-time utilization data, people are assigned to wrong tasks. Senior staff works on low-value tasks while junior staff causes overruns on complex projects.\n\nOverhead misallocation: overhead is distributed evenly instead of attributed by cause. This distorts the profitability of every segment.\n\nScope creep without cost transparency: projects grow beyond original scope, but the additional costs aren't systematically captured. In the end, a project that was closed as profitable actually destroyed margin — you just can't see it.",
        },
      },
      {
        heading: {
          de: "Die Lösung: Systematische Margen-Transparenz aufbauen",
          en: "The Solution: Building Systematic Margin Transparency",
        },
        body: {
          de: "All diese Lecks haben eine gemeinsame Ursache: fehlende Datentransparenz auf der richtigen Granularitätsebene. Die Gesamtmarge kennt jeder. Was fehlt, ist die Marge nach Segment, nach Kunde, nach Prozessschritt.\n\nDer Weg dorthin ist keine Raketenwissenschaft. Er folgt einem klaren Muster:\n\nSchritt 1: Geschäftsmodell-Mapping — Welche Profit Center gibt es natürlich? Welche Wertschöpfungsströme? Welche Kostenstrukturen sind direkt zurechenbar, welche müssen alloziert werden?\n\nSchritt 2: Daten vereinheitlichen — Alle Quellsysteme (CRM, ERP, Zeiterfassung, Buchhaltung) in eine konsistente Datenarchitektur bringen. Jeder Datenpunkt kennt seinen Ursprung.\n\nSchritt 3: Management-P&L nach Segmenten bauen — Deckungsbeitragsrechnung auf Profit-Center-Ebene. Cash-Conversion-Cycle nach Kundensegment. Prozesszeiten als Events.\n\nSchritt 4: Monatliche Steuerung — Evidenzbasierte Empfehlungen, was als nächstes verbessert werden soll, priorisiert nach EBITDA- und Cash-Impact.\n\nDas Ergebnis: Keine Überraschungen mehr. Keine organisierten Vermutungen. Deterministische Managementwahrheit — jeden Monat.",
          en: "All these leaks share a common cause: missing data transparency at the right granularity level. Everyone knows the overall margin. What's missing is margin by segment, by client, by process step.\n\nThe path there isn't rocket science. It follows a clear pattern:\n\nStep 1: Business model mapping — What are the natural profit centers? What value streams? Which cost structures are directly attributable, which need allocation?\n\nStep 2: Unify data — Bring all source systems (CRM, ERP, time tracking, accounting) into a consistent data architecture. Every data point knows its origin.\n\nStep 3: Build management P&L by segments — Contribution margin calculation at profit center level. Cash conversion cycle by customer segment. Process times as events.\n\nStep 4: Monthly steering — Evidence-based recommendations on what to improve next, prioritized by EBITDA and cash impact.\n\nThe result: no more surprises. No more organized guessing. Deterministic management truth — every month.",
        },
      },
    ],
  },
  {
    slug: "daten-vor-ki",
    publishedAt: "2026-03-28",
    readingTime: { de: "9 Min", en: "9 min" },
    category: { de: "Datenstrategie", en: "Data Strategy" },
    title: {
      de: "Warum Sie Ihre Daten reparieren müssen, bevor Sie KI einsetzen",
      en: "Fix Your Data Before You Deploy AI: Why Structure Beats Intelligence",
    },
    description: {
      de: "87% der KI-Projekte im Mittelstand scheitern — nicht an der Technologie, sondern an der Datengrundlage. Warum Unternehmen zuerst ihre Datenarchitektur in Ordnung bringen müssen, bevor KI einen echten Hebel hat. Und warum deterministische Systeme oft mehr liefern als probabilistische.",
      en: "87% of AI projects in mid-market companies fail — not because of technology, but because of data foundations. Why companies need to fix their data architecture first before AI can deliver real leverage. And why deterministic systems often deliver more than probabilistic ones.",
    },
    keywords: {
      de: ["KI Mittelstand Scheitern", "Datenqualität Voraussetzung KI", "Datenarchitektur Unternehmen", "AI Readiness Mittelstand", "deterministische Systeme", "Daten vor Künstliche Intelligenz"],
      en: ["AI project failure data quality", "data foundation before AI", "AI readiness mid-market", "deterministic vs probabilistic systems", "data architecture business", "why AI projects fail"],
    },
    relatedSlugs: ["bwa-vs-management-pnl", "versteckte-margen-lecks"],
    sections: [
      {
        heading: {
          de: "Die KI-Illusion: Technologie als Abkürzung",
          en: "The AI Illusion: Technology as Shortcut",
        },
        body: {
          de: "Jede Woche erreicht ein neues KI-Tool den Mittelstand. Die Versprechen klingen verlockend: automatische Analyse, intelligente Prognosen, KI-gestützte Entscheidungen. Berater verkaufen KI-Strategien. Software-Anbieter versprechen KI-Dashboards. Alle sind sich einig: KI ist die Zukunft.\n\nNiemand spricht darüber, warum die meisten dieser Projekte scheitern.\n\nNicht an der Technologie — die ist inzwischen erstaunlich gut. Sondern an dem, was darunter liegt: an der Datengrundlage. Wenn Ihre CRM-Daten unvollständig sind, Ihre Buchhaltungskategorien nicht zum Geschäftsmodell passen und Ihre Projektdaten in drei verschiedenen Systemen ohne gemeinsame IDs liegen — dann kann keine KI der Welt daraus zuverlässige Ergebnisse produzieren.\n\nDas ist kein technisches Problem. Das ist ein strukturelles Problem. Und es lässt sich nicht mit KI lösen — es muss vor KI gelöst werden.",
          en: "Every week a new AI tool reaches mid-market companies. The promises sound enticing: automatic analysis, intelligent forecasting, AI-driven decisions. Consultants sell AI strategies. Software vendors promise AI dashboards. Everyone agrees: AI is the future.\n\nNobody talks about why most of these projects fail.\n\nNot because of technology — that's actually quite good now. But because of what lies beneath: the data foundation. If your CRM data is incomplete, your accounting categories don't match your business model, and your project data lives in three different systems without shared IDs — no AI in the world can produce reliable results from that.\n\nThis isn't a technology problem. It's a structural problem. And it can't be solved with AI — it must be solved before AI.",
        },
        stats: [
          {
            number: "60%",
            label: { de: "Der KI-Projekte werden bis 2026 aufgegeben — wegen fehlender Datengrundlage", en: "Of AI projects will be abandoned by 2026 — due to missing data foundation" },
            source: "Gartner 2025",
          },
          {
            number: "42%",
            label: { de: "Der Unternehmen haben KI-Initiativen bereits abgebrochen", en: "Of companies have already abandoned AI initiatives" },
            source: "S&P Global 2025",
          },
          {
            number: "6%",
            label: { de: "Der Unternehmen erzielen messbaren EBIT-Impact durch KI", en: "Of organizations achieve measurable EBIT impact from AI" },
            source: "McKinsey State of AI 2025",
          },
        ],
      },
      {
        heading: {
          de: "Was 'schlechte Daten' im Mittelstand tatsächlich bedeutet",
          en: "What 'Bad Data' Actually Means in Mid-Market Companies",
        },
        body: {
          de: "Wenn Berater über Datenqualität sprechen, klingt das abstrakt. Im Mittelstand sieht das Problem konkret so aus:\n\nSilos ohne Verbindung: CRM, Buchhaltung, HR und Projektmanagement existieren als isolierte Systeme. Ein Kunde heißt im CRM 'Müller GmbH', in der Buchhaltung 'Müller GmbH & Co. KG' und im Projektmanagement 'Mueller'. Ohne eine einheitliche ID gibt es keine systemübergreifende Wahrheit.\n\nFehlende Granularität: Die Buchhaltung erfasst Umsatz nach Kontenrahmen, nicht nach Profit Center. Projektzeiten werden pauschal gebucht, nicht nach Aktivitätstyp. Personalkosten werden als Gesamtblock ausgewiesen, nicht nach Wertschöpfungsstrom zugeordnet.\n\nHistorische Inkonsistenz: Kontenpläne ändern sich. Kategorien werden umbenannt. Fusionen erzeugen Datenbrüche. Was vor 2 Jahren ein Kostencenter war, ist heute aufgeteilt. Keine KI kann darüber hinwegsehen, wenn die Grundstruktur nicht bereinigt ist.\n\nDas Ergebnis: Wenn Sie eine KI auf diese Datenlage ansetzen, bekommen Sie keine Erkenntnisse — Sie bekommen plausibel klingende Halluzinationen.",
          en: "When consultants talk about data quality, it sounds abstract. In mid-market companies, the problem looks like this:\n\nSilos without connection: CRM, accounting, HR, and project management exist as isolated systems. A client is called \"Müller GmbH\" in the CRM, \"Müller GmbH & Co. KG\" in accounting, and \"Mueller\" in project management. Without a unified ID, there's no cross-system truth.\n\nMissing granularity: accounting records revenue by chart of accounts, not by profit center. Project hours are booked as lump sums, not by activity type. Personnel costs are reported as a total block, not attributed to value streams.\n\nHistorical inconsistency: chart of accounts changes. Categories get renamed. Mergers create data breaks. What was one cost center 2 years ago is now split in two. No AI can see past this if the underlying structure isn't cleaned up.\n\nThe result: if you point AI at this data landscape, you don't get insights — you get plausible-sounding hallucinations.",
        },
      },
      {
        heading: {
          de: "Deterministische Wahrheit vs. Probabilistische Schätzung",
          en: "Deterministic Truth vs. Probabilistic Estimation",
        },
        body: {
          de: "Hier liegt die zentrale Unterscheidung, die in der aktuellen KI-Debatte untergeht:\n\nDeterministische Systeme berechnen Ergebnisse aus definierten Regeln und vollständigen Daten. 2 + 2 = 4. Immer. Deckungsbeitrag = Umsatz minus zurechenbare Kosten. Jede Zahl nachvollziehbar.\n\nProbabilistische Systeme schätzen Ergebnisse auf Basis von Mustern. Sie sind leistungsstark, wenn die Datenbasis solide ist. Aber sie sind gefährlich, wenn die Datenbasis lückenhaft ist — weil sie trotzdem eine Antwort liefern. Eine, die plausibel klingt, aber falsch sein kann.\n\nFür operative Unternehmenssteuerung im Mittelstand brauchen Sie zuerst deterministische Wahrheit. Sie müssen wissen, welche Zahlen korrekt sind, bevor Sie einem System erlauben, auf Basis dieser Zahlen Muster zu erkennen.\n\nDas bedeutet nicht, dass KI keinen Platz hat. KI hat einen enormen Platz — aber auf einer sauberen, strukturierten Datengrundlage. Die Reihenfolge ist entscheidend: Erst Struktur, dann Intelligenz.",
          en: "Here's the central distinction that gets lost in the current AI debate:\n\nDeterministic systems compute results from defined rules and complete data. 2 + 2 = 4. Always. Contribution margin = revenue minus attributable costs. Every number traceable.\n\nProbabilistic systems estimate results based on patterns. They're powerful when the data foundation is solid. But they're dangerous when the data foundation is incomplete — because they still produce an answer. One that sounds plausible but may be wrong.\n\nFor operational business steering in mid-market companies, you need deterministic truth first. You need to know which numbers are correct before you allow a system to recognize patterns based on those numbers.\n\nThis doesn't mean AI has no place. AI has an enormous place — but on a clean, structured data foundation. The sequence matters: structure first, then intelligence.",
        },
        comparison: {
          oldLabel: { de: "KI auf schlechten Daten", en: "AI on Bad Data" },
          newLabel: { de: "KI auf sauberer Datenschicht", en: "AI on Clean Data Layer" },
          rows: [
            {
              dimension: { de: "Input", en: "Input" },
              old: { de: "Fragmentiert, inkonsistent, unvollständig", en: "Fragmented, inconsistent, incomplete" },
              new: { de: "Vereinheitlicht, strukturiert, nachvollziehbar", en: "Unified, structured, traceable" },
            },
            {
              dimension: { de: "Output", en: "Output" },
              old: { de: "Plausible Halluzinationen", en: "Plausible hallucinations" },
              new: { de: "Verlässliche Muster und Prognosen", en: "Reliable patterns and forecasts" },
            },
            {
              dimension: { de: "Vertrauen", en: "Trust" },
              old: { de: "Kann nicht verifiziert werden", en: "Cannot be verified" },
              new: { de: "Jede Zahl bis zur Quelle nachvollziehbar", en: "Every number traceable to source" },
            },
            {
              dimension: { de: "ROI", en: "ROI" },
              old: { de: "Negativ (Kosten ohne Ergebnis)", en: "Negative (cost without result)" },
              new: { de: "Messbar und steigernd", en: "Measurable and compounding" },
            },
            {
              dimension: { de: "Risiko", en: "Risk" },
              old: { de: "Fehlentscheidungen auf Basis falscher Muster", en: "Wrong decisions based on false patterns" },
              new: { de: "Entscheidungen auf Basis validierter Grundlage", en: "Decisions based on validated foundation" },
            },
          ],
        },
      },
      {
        heading: {
          de: "Der Daten-Reifegrad-Test: Wo steht Ihr Unternehmen?",
          en: "The Data Maturity Test: Where Does Your Company Stand?",
        },
        body: {
          de: "Bevor Sie in KI investieren, beantworten Sie diese fünf Fragen ehrlich:",
          en: "Before you invest in AI, answer these five questions honestly:",
        },
        numberedList: [
          {
            de: "Haben Sie eine einheitliche Kunden-ID, die in allen Systemen (CRM, Buchhaltung, Projektmanagement) funktioniert?",
            en: "Do you have a unified customer ID that works across all systems (CRM, accounting, project management)?",
          },
          {
            de: "Können Sie den Umsatz der letzten 24 Monate nach Profit Center aufschlüsseln — nicht nach Kontenrahmen?",
            en: "Can you break down revenue from the last 24 months by profit center — not by chart of accounts?",
          },
          {
            de: "Wissen Sie, wie viele Tage zwischen Projektabschluss und Zahlungseingang vergehen — für jedes Kundensegment?",
            en: "Do you know how many days pass between project completion and payment receipt — for each customer segment?",
          },
          {
            de: "Können Sie die Personalkosten nach Wertschöpfungsstrom zuordnen, nicht nur nach Abteilung?",
            en: "Can you attribute personnel costs by value stream, not just by department?",
          },
          {
            de: "Gibt es ein einziges System, in dem alle operativen und finanziellen Daten zusammenfließen?",
            en: "Is there a single system where all operational and financial data converges?",
          },
        ],
        callout: {
          type: "warning",
          text: {
            de: "Wenn Sie weniger als 3 dieser Fragen mit Ja beantworten können, wird jedes KI-Projekt in Ihrem Unternehmen auf einem instabilen Fundament stehen. Reparieren Sie die Datengrundlage zuerst.",
            en: "If you can answer fewer than 3 of these questions with yes, every AI project in your company will stand on an unstable foundation. Fix the data foundation first.",
          },
        },
      },
      {
        heading: {
          de: "Der richtige Weg: Erst Datenarchitektur, dann Intelligenz",
          en: "The Right Path: Data Architecture First, Then Intelligence",
        },
        body: {
          de: "Die gute Nachricht: Den Daten-Grundstein zu legen ist weder mysteriös noch jahrelange Arbeit. Für ein typisches Mittelstandsunternehmen mit 5-8 Kernsystemen sieht der Weg so aus:\n\nWoche 1-2: Audit aller Datenquellen. Was existiert wo? Welche Qualität? Welche Lücken?\n\nWoche 3-4: Vereinheitlichung in einer zentralen Datenschicht. Einheitliche IDs, konsistente Kategorien, nachvollziehbare Zuordnungen.\n\nWoche 5-6: Management-P&L nach Geschäftsmodell bauen. Deterministische Berechnung aller Kern-KPIs.\n\nWoche 7-8: Erste Erkenntnisse liefern. Evidenzbasierte Empfehlungen, was als nächstes verbessert werden sollte.\n\nDanach haben Sie zwei Dinge: Erstens, sofortige Management-Wahrheit — Erkenntnisse, die ohne jede KI bereits Wert liefern. Zweitens, eine saubere Datenschicht, auf der KI-Anwendungen tatsächlich funktionieren.\n\nDas ist keine Anti-KI-Position. Das ist die Pro-Ergebnis-Position. Erst wenn die Daten stimmen, kann KI liefern, was sie verspricht.",
          en: "The good news: laying the data foundation is neither mysterious nor years of work. For a typical mid-market company with 5-8 core systems, the path looks like this:\n\nWeek 1-2: Audit all data sources. What exists where? What quality? What gaps?\n\nWeek 3-4: Unification into a central data layer. Unified IDs, consistent categories, traceable attributions.\n\nWeek 5-6: Build management P&L by business model. Deterministic calculation of all core KPIs.\n\nWeek 7-8: Deliver first insights. Evidence-based recommendations on what to improve next.\n\nAfter that, you have two things: First, immediate management truth — insights that deliver value without any AI. Second, a clean data layer on which AI applications actually work.\n\nThis isn't an anti-AI position. It's the pro-results position. Only when the data is right can AI deliver what it promises.",
        },
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getPost(slug);
  if (!post?.relatedSlugs) return [];
  return post.relatedSlugs
    .map((s) => getPost(s))
    .filter((p): p is BlogPost => p !== undefined);
}
