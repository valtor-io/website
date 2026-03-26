# SEO Roadmap — valtor.io

## Phase 1: Foundation (DONE)
- [x] robots.txt
- [x] sitemap.xml (auto-generates from blog.ts)
- [x] Canonical URL + metadataBase
- [x] Twitter card tags
- [x] OG image (edge-rendered)
- [x] JSON-LD structured data (Organization + 3 Services + WebSite)
- [x] hreflang alternates (de-DE, en-US)
- [x] llms.txt for AI crawlers
- [x] Audit script + metrics tracking

## Phase 2: Quick Wins (DONE)
- [x] Custom branded SVG favicon
- [x] Apple touch icon
- [x] Web app manifest
- [x] Google Search Console verification
- [x] GA4 analytics (G-ZL0PMRW091)
- [x] Remove unused boilerplate SVGs
- [x] Submit sitemap to GSC

## Phase 3: Content Expansion (MOSTLY DONE)
- [x] URL-based multilingual routing (`/de`, `/en`) with middleware
- [x] FAQ section with FAQPage schema (6 bilingual Q&As)
- [x] Blog system with rich content renderer
- [x] Blog post 1: BWA vs Management P&L
- [x] Blog post 2: 7 Hidden Margin Leaks
- [x] Blog post 3: Fix Data Before AI
- [x] Internal linking (footer blog cards, breadcrumbs, related posts)
- [ ] Impressum page (BLOCKED — needs legal details)
- [ ] Datenschutz page (BLOCKED — needs legal details)

## Phase 4: Performance & Advanced (DONE)
- [x] Convert dynamic() imports to static SSR (12 components)
- [x] Video structured data (VideoObject schema for hero mp4)
- [x] Breadcrumb schema on homepage
- [x] Updated llms.txt with blog summaries
- [x] Lighthouse CI in GitHub Actions pipeline
- [x] Weekly SEO audit cron job (GitHub Actions)

## Phase 5: Ongoing
- [x] Weekly automated SEO audit (GitHub Actions, Mondays 8:17 UTC)
- [x] Metrics history tracking (artifacts/seo/history/)
- [ ] Core Web Vitals monitoring via CrUX/GSC (needs production data)
- [ ] More blog posts (EU AI Act, whale curve, working capital)
- [ ] Dedicated service pages (vs single landing page)
- [ ] Content gap analysis
- [ ] Image alt text audit
- [ ] Competitor keyword monitoring

## Structured Data Coverage
| Schema Type | Page | Status |
|-------------|------|--------|
| Organization | Homepage | ✅ |
| Service ×3 | Homepage | ✅ |
| WebSite | Homepage | ✅ |
| FAQPage | Homepage | ✅ |
| BreadcrumbList | Homepage + Blog | ✅ |
| VideoObject | Homepage | ✅ |
| Article | Blog posts | ✅ |

## Sitemap URLs: 10
- /de, /en (homepage)
- /de/blog, /en/blog (blog index)
- 3 blog posts × 2 locales = 6 post pages
