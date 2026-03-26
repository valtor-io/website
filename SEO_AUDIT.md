# SEO Technical Audit — valtor.io

**Date**: 2026-03-26
**Domain**: www.valtor.io
**Stack**: Next.js 16 (App Router) + Tailwind 4 + Framer Motion, deployed on Vercel
**Type**: Single-page landing site, bilingual DE/EN (client-side toggle)

---

## Critical Issues Found & Fixed

### 1. No robots.txt (FIXED)
- **Impact**: Crawlers had no guidance; sitemap was undiscoverable.
- **Fix**: Created `src/app/robots.ts` — allows all crawlers, blocks `/api/` and `/_next/`, references sitemap.

### 2. No sitemap.xml (FIXED)
- **Impact**: Search engines couldn't discover pages programmatically.
- **Fix**: Created `src/app/sitemap.ts` — single URL entry with weekly change frequency.

### 3. No canonical URL (FIXED)
- **Impact**: Potential duplicate content issues (www vs non-www, with/without trailing slash).
- **Fix**: Added `metadataBase` + `alternates.canonical` in layout metadata.

### 4. No structured data (FIXED)
- **Impact**: No rich results eligibility; poor semantic understanding by search engines.
- **Fix**: Added JSON-LD `@graph` with Organization, 3 Service entries, and WebSite schema.

### 5. No Twitter/X card tags (FIXED)
- **Impact**: Social shares showed no preview card.
- **Fix**: Added `twitter.card`, `twitter.title`, `twitter.description` to metadata.

### 6. No OG image (FIXED)
- **Impact**: Social shares showed no visual preview.
- **Fix**: Created `src/app/opengraph-image.tsx` — edge-rendered branded image (1200x630).

### 7. No llms.txt (FIXED)
- **Impact**: AI crawlers had no structured overview of the business.
- **Fix**: Created `public/llms.txt` with services, methodology, and contact info.

### 8. Missing hreflang tags (FIXED)
- **Impact**: Search engines couldn't serve correct language version to users.
- **Fix**: Added `alternates.languages` for de-DE and en-US in metadata.

---

## Current State (Post-Fix)

| Check | Status |
|-------|--------|
| robots.txt | PASS |
| sitemap.xml | PASS |
| Title tag | PASS — unique, descriptive |
| Meta description | PASS — under 160 chars |
| Canonical URL | PASS |
| Open Graph tags | PASS |
| Twitter card | PASS |
| JSON-LD structured data | PASS — Organization + 3 Services + WebSite |
| hreflang | PASS — de-DE, en-US |
| Viewport meta | PASS (Next.js default) |
| HTML lang attribute | PASS — lang="de" |
| llms.txt | PASS |
| OG image | PASS — edge-rendered |

---

## Remaining Issues (Non-Blocking)

### Medium Priority
1. **No favicon customization** — Still using default Next.js favicon. Should replace with branded Valtor.io icon.
2. **No web app manifest** — Missing `manifest.json` for PWA/mobile add-to-homescreen.
3. **Client-side i18n not URL-based** — Both DE and EN content served at same URL. Search engines cannot independently index language versions. Would need `/en/` route prefix for true multilingual SEO.
4. **Dynamic imports may hide content from crawlers** — Below-fold sections use `dynamic()`. Googlebot handles JS well, but static rendering would be safer.
5. **No alt text on hero video** — `<video>` element should have descriptive accessible text nearby.
6. **Boilerplate SVGs in public/** — `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` are unused. Clean up to avoid confusion.

### Low Priority
7. **No blog/content pages** — Single-page site limits keyword targeting surface area. Blog or resource pages would expand organic reach.
8. **No Google Search Console verification** — Should add site verification meta tag or DNS record.
9. **No analytics** — No way to measure SEO impact without GA4 or equivalent.

---

## Verification

Run the audit script:
```bash
./scripts/seo/audit.sh https://www.valtor.io
```

Results are saved to `artifacts/seo/metrics.json` with history in `artifacts/seo/history/`.
