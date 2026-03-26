# SEO Experiments — valtor.io

## Active Experiments

### EXP-001: FAQ schema for AI Overviews
- **Hypothesis**: FAQPage schema increases chance of Google AI Overviews
- **Deployed**: 2026-03-26
- **Measure**: GSC "Search Appearance" filter for AI Overview / rich results
- **Status**: Running — FAQ with 6 bilingual Q&As deployed

### EXP-002: URL-based multilingual routing
- **Hypothesis**: `/de` and `/en` prefixes let Google index both languages separately
- **Deployed**: 2026-03-26
- **Measure**: GSC indexed pages count (should double from ~2 to ~10)
- **Status**: Running — middleware + hreflang deployed

### EXP-003: Blog content for keyword expansion
- **Hypothesis**: 3+ articles targeting mid-market DACH queries will generate organic impressions within 90 days
- **Deployed**: 2026-03-26
- **Measure**: GSC impressions for "BWA Controlling", "Marge verbessern Mittelstand", "KI Datenqualität"
- **Status**: Running — 3 posts published

### EXP-004: llms.txt for AI search citation
- **Hypothesis**: Structured llms.txt improves citation rate in ChatGPT, Perplexity, etc.
- **Deployed**: 2026-03-26
- **Measure**: Monthly manual check for AI engine citations
- **Status**: Running

### EXP-005: Static SSR for crawl completeness
- **Hypothesis**: Replacing dynamic() imports with static renders full HTML for crawlers
- **Deployed**: 2026-03-26
- **Measure**: GSC crawl stats, "Pages" indexed count
- **Status**: Running

### EXP-006: Internal linking density
- **Hypothesis**: Footer blog cards + breadcrumbs + related posts improve crawl depth and link equity
- **Deployed**: 2026-03-26
- **Measure**: GSC internal links report
- **Status**: Running

## Queued Experiments

### EXP-007: Service pages vs single landing page
- **Hypothesis**: Dedicated /diagnostic, /build, /steer pages capture long-tail service queries
- **Expected impact**: High — each page targets different keyword cluster
- **Blocked on**: Content decisions (do we create separate pages?)

### EXP-008: German-first keyword velocity
- **Hypothesis**: DE posts rank faster for DACH queries than EN equivalents
- **Measure**: Compare GSC impressions DE vs EN for same slugs

### EXP-009: Impressum + Datenschutz trust signal
- **Hypothesis**: Legally required pages improve E-E-A-T trust signals for German site
- **Blocked on**: Legal details from Valtor

## Completed
- All experiments above were deployed in Phase 1-4. Results pending GSC data (takes 1-7 days to populate).

## Rejected

### REJ-001: Programmatic SEO pages
- **Reason**: Not enough content variety. Risk of thin content penalties.

### REJ-002: Pricing schema markup
- **Reason**: Pricing is range-based (€5-15K, €20-50K). Offer schema requires fixed prices — would be misleading.

### REJ-003: External link building campaign
- **Reason**: Not appropriate for early-stage site. Focus on content quality first.

## Measurement Schedule
- **Weekly (automated)**: Build audit via GitHub Actions (sitemap, robots, pages, schema coverage)
- **Monthly (manual)**: AI search citation check, keyword position review
- **Quarterly**: Full experiment review, content gap analysis refresh
