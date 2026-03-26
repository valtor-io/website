# SEO Research Log — valtor.io

## 2026-03-26 — Initial Research Cycle

### Techniques Adopted

| Technique | Source | Confidence | Decision |
|-----------|--------|-----------|----------|
| JSON-LD `@graph` with Organization + Service | Google Search Central (primary) | High | Adopted |
| Next.js native `metadata` export with `metadataBase` | Next.js docs (primary) | High | Adopted |
| `robots.ts` / `sitemap.ts` file conventions | Next.js docs (primary) | High | Adopted |
| Edge-rendered OG images via `opengraph-image.tsx` | Next.js docs (primary) | High | Adopted |
| `llms.txt` for AI crawler discoverability | Practitioner evidence (emerging standard) | Medium | Adopted — low effort, no risk |
| hreflang via `alternates.languages` | Google Search Central | High | Adopted |
| FAQ schema for AI Overview eligibility | Practitioner data (60% more likely to be featured) | Medium | Queued for Phase 3 |

### Techniques Rejected

| Technique | Source | Reason |
|-----------|--------|--------|
| `next-seo` package | GitHub | Unnecessary — Next.js native metadata API covers everything needed |
| Separate `/de/` and `/en/` routes now | SEO best practice | Too much rearchitecture for current single-page site. Queued for Phase 3 if multi-page expansion happens |
| ProfessionalService schema | schema.org | Outdated; Service schema is more flexible |

### Key Findings

1. **AI Overviews now appear in 50%+ of searches**. Content structure (H2/H3 hierarchy, bullet points, answer-first) matters more than ever. Valtor.io's current section-based layout is decent but all content is client-rendered.

2. **DACH is not one market**. Germany, Austria, Switzerland have different search behaviors. For now, generic `de` hreflang is correct since Valtor targets all three without country-specific content.

3. **B2B consulting SEO is shifting from keyword optimization to intent + journey stage**. Single-page sites are inherently limited. Blog/resource content would significantly expand keyword surface area.

4. **Google recommends JSON-LD over Microdata/RDFa**. Implemented as `@graph` for clean multi-entity markup.

5. **`llms.txt` is an emerging convention** (similar to `robots.txt` for AI). Low-risk adoption that explicitly provides AI crawlers with structured business context.

### Sources
- Google Search Central: https://developers.google.com/search/docs
- Next.js Metadata: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Next.js JSON-LD: https://nextjs.org/docs/app/guides/json-ld
- Schema.org Service: https://schema.org/Service
- DACH SEO: https://www.advancedwebranking.com/blog/seo-strategy-dach-markets
