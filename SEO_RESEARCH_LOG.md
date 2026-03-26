# SEO Research Log — valtor.io

## 2026-03-26 — Research Cycle 2: Blog Content + Competitive Analysis

### Research Findings

| Finding | Source | Confidence | Relevance | Decision |
|---------|--------|-----------|-----------|----------|
| 60% of AI projects will be abandoned by 2026 due to data quality | Gartner 2025 | High (primary) | Core to "data before AI" post | Adopted — used in blog post |
| 42% of companies abandoned most AI initiatives | S&P Global 2025 | High (primary) | Supports data-first narrative | Adopted |
| Only 6% of orgs achieve measurable EBIT impact from AI | McKinsey State of AI 2025 | High (primary) | Powerful stat for AI skepticism angle | Adopted |
| €26.5B working capital trapped in German Mittelstand | Grant Thornton | High (primary) | Supports margin leaks thesis | Adopted |
| 20% of clients deliver 250%+ of profit (whale curve) | Kaplan/Narayanan | High (academic) | Core to cost-to-serve argument | Adopted |
| 5.7× EBITDA multiple in German mid-market | Exit Coach 2025 | Medium (practitioner) | Makes margin recovery tangible | Adopted |
| EU AI Act effective August 2026 for high-risk systems | EU official | High (primary) | Future blog topic | Queued |
| 97% of Mittelstand process mining users expanding usage | Celonis study | Medium (vendor) | Process mining validation | Noted |
| Celonis targets enterprise; €3-50M segment underserved | Competitive analysis | Medium | Validates Valtor positioning gap | Noted |

### Competitive Landscape (DACH)

| Competitor | What they sell | Gap Valtor exploits |
|-----------|---------------|-------------------|
| Horvath | CFO dashboards, performance mgmt | No deterministic P&L reconstruction |
| Roland Berger | Strategy engagements | Expensive, slow, no data layer |
| Celonis | Process mining software (SAP) | Enterprise only, €3-50M underserved |
| PwC / Deloitte | AI readiness assessments | Hand back a slide deck, don't fix data |
| Ventum / appliedAI | AI adoption consulting | Sell AI, don't fix foundations |

**Valtor's unique position**: Nobody combines P&L reconstruction + data unification + process mining as a single productized service for the mid-market.

### Content Gap Opportunities

| Topic | Target keyword (DE) | Search intent | Priority |
|-------|-------------------|---------------|----------|
| EU AI Act data requirements | "EU AI Act Mittelstand Vorbereitung" | Informational → commercial | High |
| Whale curve client profitability | "Kundenrentabilität analysieren" | Informational | High |
| Working capital optimization | "Working Capital Optimierung KMU" | Informational → commercial | Medium |
| Process mining for mid-market | "Process Mining Mittelstand" | Informational → commercial | Medium |
| DATEV limitations for management | "DATEV Controlling Grenzen" | Problem-aware | High |

---

## 2026-03-26 — Research Cycle 1: Technical SEO Foundation

### Techniques Adopted

| Technique | Source | Confidence | Decision |
|-----------|--------|-----------|----------|
| JSON-LD `@graph` with Organization + Service | Google Search Central | High | Adopted |
| Next.js native `metadata` export with `metadataBase` | Next.js docs | High | Adopted |
| `robots.ts` / `sitemap.ts` file conventions | Next.js docs | High | Adopted |
| Edge-rendered OG images via `opengraph-image.tsx` | Next.js docs | High | Adopted |
| `llms.txt` for AI crawler discoverability | Emerging standard | Medium | Adopted |
| hreflang via `alternates.languages` | Google Search Central | High | Adopted |
| FAQPage schema for AI Overview eligibility | Practitioner evidence | Medium | Adopted |
| Static SSR over dynamic() imports | Google crawl best practices | High | Adopted |
| VideoObject schema for hero video | Schema.org / Google | High | Adopted |
| BreadcrumbList schema | Google Search Central | High | Adopted |

### Techniques Rejected

| Technique | Source | Reason |
|-----------|--------|--------|
| `next-seo` package | GitHub | Unnecessary — native metadata API sufficient |
| ProfessionalService schema | Schema.org | Outdated; Service schema more flexible |
| Programmatic SEO pages | Practitioner blogs | Not enough content variety, thin content risk |
| Pricing/Offer schema | Schema.org | Range-based pricing incompatible with fixed-price schema |

### Sources
- Google Search Central: https://developers.google.com/search/docs
- Gartner AI-Ready Data: https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk
- McKinsey State of AI 2025: https://www.mckinsey.com/capabilities/tech-and-ai/our-insights
- Grant Thornton Working Capital: https://www.haufe.de/finance/steuern-finanzen/working-capital-milliardenpotenzial-im-mittelstand_190_209628.html
- Exit Coach EBITDA Multiples: https://exit-coach.de/ebitda-multiples/
- Horvath CFO Study 2026: https://www.horvath-partners.com/en/media-center/studies/cfo-study-2026
- Celonis Mittelstand Process Mining: https://www.celonis.com/de/news/press/studie-97-der-mittelstandischen-process-mining-nutzer
