export interface BlogPost {
  slug: string;
  publishedAt: string;
  title: { de: string; en: string };
  description: { de: string; en: string };
  keywords: { de: string[]; en: string[] };
  sections: {
    heading: { de: string; en: string };
    body: { de: string; en: string };
  }[];
}

export const posts: BlogPost[] = [
  {
    slug: "bwa-vs-management-pnl",
    publishedAt: "2026-03-26",
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
      },
      {
        heading: {
          de: "Die fünf Fragen, die Ihre BWA nicht beantwortet",
          en: "Five Questions Your BWA Can't Answer",
        },
        body: {
          de: "Testen Sie es selbst. Können Sie diese fünf Fragen mit Ihrer aktuellen BWA beantworten?\n\n1. Welches Ihrer Produkte oder Services hat die höchste Marge — nicht den höchsten Umsatz, sondern die höchste Marge nach allen zurechenbaren Kosten?\n\n2. Wie viele Tage vergehen durchschnittlich zwischen Leistungserbringung und Zahlungseingang — und wie hat sich das in den letzten 12 Monaten verändert?\n\n3. Welcher Ihrer Kunden verursacht die höchsten versteckten Kosten durch Nacharbeit, Abstimmungsaufwand oder Zahlungsverzögerungen?\n\n4. Was würde mit Ihrem EBITDA passieren, wenn Sie die unprofitabelsten 20% Ihrer Kundenbeziehungen beenden würden?\n\n5. In welchem Prozessschritt zwischen Auftrag und Zahlung geht die meiste Zeit verloren?\n\nWenn Sie keine dieser Fragen mit einer Zahl beantworten können, die Sie bis zur Einzelbuchung nachvollziehen können, fehlt Ihnen die Managementwahrheit.",
          en: "Test it yourself. Can you answer these five questions with your current financial reports?\n\n1. Which of your products or services has the highest margin — not highest revenue, but highest margin after all attributable costs?\n\n2. How many days pass on average between service delivery and payment receipt — and how has that changed over the last 12 months?\n\n3. Which of your clients causes the highest hidden costs through rework, coordination overhead, or payment delays?\n\n4. What would happen to your EBITDA if you ended the least profitable 20% of your client relationships?\n\n5. In which process step between order and payment is the most time lost?\n\nIf you can't answer any of these with a number traceable to the source transaction, you're missing management truth.",
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
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
