# SEO Experiments — valtor.io

## Queued

### EXP-001: FAQ Section with FAQ Schema
- **Hypothesis**: Adding a FAQ section with `FAQPage` schema will increase AI Overview citations and featured snippet eligibility for question-based queries.
- **Expected impact**: High — FAQ schema pages are 60% more likely to appear in AI Overviews.
- **Effort**: Low — add FAQ component + schema markup.
- **Risk**: Low.
- **Verification**: Monitor Search Console for rich result impressions.

### EXP-002: URL-Based Language Routing
- **Hypothesis**: Moving from client-side i18n toggle to `/en/` route prefix will allow Google to separately index DE and EN content, expanding keyword coverage.
- **Expected impact**: Medium-High — doubles indexable content.
- **Effort**: Medium — requires rearchitecting i18n approach, updating all components.
- **Risk**: Low — standard pattern, but breaking change to URL structure.
- **Verification**: Monitor indexed pages count in Search Console.

### EXP-003: Blog / Resource Section
- **Hypothesis**: Adding 3-5 high-quality articles targeting mid-funnel queries ("Management P&L aufbauen", "EBITDA verbessern Mittelstand", "Datenintegration Airtable") will expand organic keyword footprint.
- **Expected impact**: High — significantly expands search surface area from 1 to 5+ pages.
- **Effort**: High — requires content creation, new page templates, updated sitemap.
- **Risk**: Low if content is genuinely useful; avoid thin SEO filler.
- **Verification**: Track keyword rankings and organic traffic per article.

### EXP-004: Impressum + Datenschutz Pages
- **Hypothesis**: Adding legally required pages improves trust signals and prevents potential ranking penalties for DACH sites.
- **Expected impact**: Low-Medium for SEO, but legally required.
- **Effort**: Low.
- **Risk**: None.

## Completed
(none yet)

## Rejected
(none yet)
