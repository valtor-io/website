# SEO Technical Audit — valtor.io

**Last updated**: 2026-03-26
**Domain**: www.valtor.io
**Stack**: Next.js 16 (App Router) + Tailwind 4 + Framer Motion, deployed on Vercel
**Pages**: 10 (2 homepage locales + 2 blog index + 6 blog posts)

---

## Current State

| Check | Status | Notes |
|-------|--------|-------|
| robots.txt | ✅ | Allows all, blocks /api/ and /_next/, references sitemap |
| sitemap.xml | ✅ | 10 URLs, auto-generated from blog.ts |
| Title tags | ✅ | Unique per page, bilingual |
| Meta descriptions | ✅ | Unique per page, under 160 chars |
| Canonical URLs | ✅ | Every page has canonical |
| Open Graph | ✅ | Title, description, type, locale |
| Twitter cards | ✅ | summary_large_image |
| hreflang | ✅ | de-DE ↔ en-US on all pages |
| HTML lang | ✅ | Set by middleware routing |
| Viewport meta | ✅ | Next.js default |
| Favicon | ✅ | Branded SVG + Apple touch icon |
| Web app manifest | ✅ | manifest.webmanifest |
| llms.txt | ✅ | Services + blog summaries |
| OG image | ✅ | Edge-rendered branded (1200×630) |
| GA4 analytics | ✅ | G-ZL0PMRW091 |
| GSC verified | ✅ | Sitemap submitted |

## Structured Data Coverage

| Schema | Page | Status |
|--------|------|--------|
| Organization | Homepage | ✅ |
| Service ×3 | Homepage | ✅ |
| WebSite | Homepage | ✅ |
| FAQPage | Homepage | ✅ |
| BreadcrumbList | Homepage + all blog | ✅ |
| VideoObject | Homepage | ✅ |
| Article | Each blog post | ✅ |

## Content Coverage

| Page | DE | EN | Title unique | Meta unique | JSON-LD |
|------|----|----|-------------|------------|---------|
| Homepage | ✅ | ✅ | ✅ | ✅ | ✅ |
| Blog index | ✅ | ✅ | ✅ | ✅ | ✅ |
| BWA vs P&L | ✅ | ✅ | ✅ | ✅ | ✅ |
| Margin leaks | ✅ | ✅ | ✅ | ✅ | ✅ |
| Data before AI | ✅ | ✅ | ✅ | ✅ | ✅ |

## Internal Linking

| From | To | Method |
|------|----|--------|
| Nav bar | Blog index | Direct link |
| Footer | Latest 3 blog posts | Blog cards |
| Footer | Blog index | Text link |
| Blog index | Each post | Post cards |
| Blog posts | Related posts | Related grid |
| Blog posts | Homepage | Breadcrumb |
| Blog posts | Blog index | Breadcrumb + back link |
| Blog posts | Alternate language | Language switch |

## Rendering

| Item | Status | Notes |
|------|--------|-------|
| SSR | ✅ | All components static import (no dynamic()) |
| SSG | ✅ | All pages pre-rendered at build time |
| JS-free crawlability | ✅ | Full HTML in initial response |

## Remaining Issues

### Blocked on Human Input
1. **Impressum page** — Legally required in DACH. Needs company registration details.
2. **Datenschutz page** — Legally required with GA4. Needs privacy policy text.

### Medium Priority
3. **Hero video alt text** — `<video>` element has no aria-label. VideoObject schema compensates partially.
4. **Canvas element accessibility** — Hero canvas lacks aria-label for screen readers.

### Low Priority
5. **No dedicated service pages** — single landing page limits long-tail keyword capture.
6. **No CrUX data yet** — site too new for Chrome User Experience Report.

---

## Automation

| Tool | Schedule | What it checks |
|------|----------|---------------|
| Lighthouse CI | Every push/PR | Performance, Accessibility, SEO, Best Practices scores |
| Weekly SEO Audit | Mondays 8:17 UTC | Sitemap, robots, pages, titles, meta, JSON-LD, canonicals, hreflang, CWV |
| CWV check script | On-demand | PageSpeed Insights API for all pages |
| Audit script | On-demand | Live site checks (curl-based) |

Run locally:
```bash
./scripts/seo/audit.sh https://www.valtor.io
./scripts/seo/cwv-check.sh
```
