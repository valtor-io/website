import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, getAllSlugs, getRelatedPosts } from "@/content/blog";
import type { Locale } from "@/i18n/translations";
import type { BlogSection, CalloutBox, StatCard, ComparisonRow } from "@/content/blog";

export function generateStaticParams() {
  return getAllSlugs().flatMap((slug) => [
    { locale: "de", slug },
    { locale: "en", slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const l = locale as Locale;

  return {
    title: post.title[l],
    description: post.description[l],
    keywords: post.keywords[l],
    alternates: {
      canonical: `https://www.valtor.io/${locale}/blog/${slug}`,
      languages: {
        "de-DE": `https://www.valtor.io/de/blog/${slug}`,
        "en-US": `https://www.valtor.io/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title[l],
      description: post.description[l],
      url: `https://www.valtor.io/${locale}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      locale: l === "de" ? "de_DE" : "en_US",
      alternateLocale: l === "de" ? "en_US" : "de_DE",
    },
  };
}

/* ── Callout box component ── */
function Callout({ box, locale }: { box: CalloutBox; locale: Locale }) {
  const styles = {
    tip: "border-l-[3px] border-[#1a56f0] bg-[#f0f4ff]",
    stat: "border-l-[3px] border-accent bg-accent-light",
    warning: "border-l-[3px] border-[#c8973a] bg-[#fdf8f0]",
  };
  const icons = { tip: "\u2192", stat: "\u2191", warning: "\u26A0" };

  return (
    <aside className={`mt-6 p-5 ${styles[box.type]}`} style={{ borderRadius: "4px" }}>
      <p className="text-[14px] leading-relaxed text-foreground-muted">
        <span className="font-mono text-[12px] mr-2">{icons[box.type]}</span>
        {box.text[locale]}
      </p>
    </aside>
  );
}

/* ── Stat cards component ── */
function StatCards({ stats, locale }: { stats: StatCard[]; locale: Locale }) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-[#1a1a1a] text-white p-5"
          style={{ borderRadius: "6px" }}
        >
          <div
            className="text-2xl md:text-3xl tracking-tight"
            style={{ fontFamily: "var(--serif)" }}
          >
            {stat.number}
          </div>
          <div className="mt-2 text-[12px] text-[#999] leading-snug">
            {stat.label[locale]}
          </div>
          {stat.source && (
            <div className="mt-1 text-[10px] font-mono text-[#666]">
              {stat.source}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Comparison table component ── */
function ComparisonTable({
  oldLabel,
  newLabel,
  rows,
  locale,
}: {
  oldLabel: { de: string; en: string };
  newLabel: { de: string; en: string };
  rows: ComparisonRow[];
  locale: Locale;
}) {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full text-[13px] border-collapse">
        <thead>
          <tr className="border-b-2 border-foreground">
            <th className="text-left py-3 pr-4 font-mono text-[11px] tracking-wider uppercase text-foreground-subtle">
              &nbsp;
            </th>
            <th className="text-left py-3 pr-4 font-mono text-[11px] tracking-wider uppercase text-[#d63c3c]">
              {oldLabel[locale]}
            </th>
            <th className="text-left py-3 font-mono text-[11px] tracking-wider uppercase text-[#1a8a5a]">
              {newLabel[locale]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border">
              <td className="py-3 pr-4 font-medium text-foreground">
                {row.dimension[locale]}
              </td>
              <td className="py-3 pr-4 text-foreground-muted">
                {row.old[locale]}
              </td>
              <td className="py-3 text-foreground">
                {row.new[locale]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Numbered list component ── */
function NumberedList({ items, locale }: { items: { de: string; en: string }[]; locale: Locale }) {
  return (
    <ol className="mt-6 space-y-4 list-none counter-reset-custom">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span
            className="flex-shrink-0 w-8 h-8 bg-[#1a1a1a] text-white text-[13px] font-mono flex items-center justify-center"
            style={{ borderRadius: "50%" }}
          >
            {i + 1}
          </span>
          <p className="text-[15px] text-foreground-muted leading-[1.75] pt-1">
            {item[locale]}
          </p>
        </li>
      ))}
    </ol>
  );
}

/* ── Section renderer ── */
function Section({ section, locale }: { section: BlogSection; locale: Locale }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl tracking-[-0.02em] leading-snug mb-5">
        {section.heading[locale]}
      </h2>
      <div className="text-[15px] text-foreground-muted leading-[1.75] space-y-4">
        {section.body[locale].split("\n\n").map((para, j) => (
          <p key={j}>{para}</p>
        ))}
      </div>
      {section.stats && <StatCards stats={section.stats} locale={locale} />}
      {section.comparison && (
        <ComparisonTable
          oldLabel={section.comparison.oldLabel}
          newLabel={section.comparison.newLabel}
          rows={section.comparison.rows}
          locale={locale}
        />
      )}
      {section.numberedList && <NumberedList items={section.numberedList} locale={locale} />}
      {section.callout && <Callout box={section.callout} locale={locale} />}
    </section>
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const l = locale as Locale;
  const related = getRelatedPosts(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[l],
    description: post.description[l],
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Valtor.io",
      url: "https://www.valtor.io",
    },
    publisher: {
      "@type": "Organization",
      name: "Valtor.io",
      url: "https://www.valtor.io",
    },
    mainEntityOfPage: `https://www.valtor.io/${locale}/blog/${slug}`,
    inLanguage: l === "de" ? "de-DE" : "en-US",
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Valtor.io",
        item: `https://www.valtor.io/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `https://www.valtor.io/${locale}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title[l],
        item: `https://www.valtor.io/${locale}/blog/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-[720px] mx-auto px-6 md:px-8 py-32">
        {/* Breadcrumb navigation */}
        <nav className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-foreground-subtle">
          <Link href={`/${locale}`} className="hover:text-foreground transition-colors">
            Valtor.io
          </Link>
          <span>/</span>
          <Link href={`/${locale}/blog`} className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-foreground-muted truncate max-w-[200px]">
            {post.title[l]}
          </span>
        </nav>

        <header className="mt-8">
          <div className="flex items-center gap-4 text-[11px] font-mono tracking-wider uppercase text-foreground-subtle">
            <time>{post.publishedAt}</time>
            {post.readingTime && (
              <>
                <span className="w-1 h-1 rounded-full bg-foreground-subtle" />
                <span>{post.readingTime[l]}</span>
              </>
            )}
            {post.category && (
              <>
                <span className="w-1 h-1 rounded-full bg-foreground-subtle" />
                <span className="text-accent">{post.category[l]}</span>
              </>
            )}
          </div>
          <h1
            className="mt-4 text-3xl md:text-[2.75rem] leading-[1.12] tracking-[-0.03em]"
            style={{ fontFamily: "var(--serif)" }}
          >
            {post.title[l]}
          </h1>
          <p className="mt-6 text-[16px] text-foreground-muted leading-relaxed border-l-2 border-accent pl-5">
            {post.description[l]}
          </p>
        </header>

        {/* Table of contents */}
        {post.sections.length > 3 && (
          <nav className="mt-12 p-6 bg-surface border border-border" style={{ borderRadius: "6px" }}>
            <h2 className="text-[11px] font-mono tracking-wider uppercase text-foreground-subtle mb-4">
              {l === "de" ? "Inhalt" : "Contents"}
            </h2>
            <ol className="space-y-2">
              {post.sections.map((section, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i}`}
                    className="text-[14px] text-foreground-muted hover:text-foreground transition-colors flex items-baseline gap-3"
                  >
                    <span className="text-[11px] font-mono text-foreground-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading[l]}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="mt-16 space-y-14">
          {post.sections.map((section, i) => (
            <div key={i} id={`section-${i}`} className="scroll-mt-24">
              <Section section={section} locale={l} />
            </div>
          ))}
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="text-[11px] font-mono tracking-wider uppercase text-foreground-subtle mb-6">
              {l === "de" ? "Weiterführende Artikel" : "Related Articles"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/${locale}/blog/${rp.slug}`}
                  className="group p-5 border border-border hover:border-foreground-subtle transition-colors"
                  style={{ borderRadius: "6px" }}
                >
                  {rp.category && (
                    <span className="text-[10px] font-mono tracking-wider uppercase text-accent">
                      {rp.category[l]}
                    </span>
                  )}
                  <h3 className="mt-2 text-[15px] tracking-[-0.01em] leading-snug group-hover:text-accent transition-colors">
                    {rp.title[l]}
                  </h3>
                  <p className="mt-2 text-[12px] text-foreground-subtle leading-relaxed line-clamp-2">
                    {rp.description[l]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <footer className="mt-16 pt-12 border-t border-border">
          <div className="bg-surface p-8" style={{ borderRadius: "6px" }}>
            <p
              className="text-xl tracking-[-0.02em]"
              style={{ fontFamily: "var(--serif)" }}
            >
              {l === "de"
                ? "Wollen Sie Ihre Managementwahrheit sehen?"
                : "Want to see your management truth?"}
            </p>
            <p className="mt-3 text-[14px] text-foreground-muted">
              {l === "de"
                ? "In 30 Minuten zeigen wir Ihnen, welche versteckten EBITDA- und Cashflow-Chancen in Ihrem Unternehmen liegen."
                : "In 30 minutes, we'll show you what hidden EBITDA and cash flow opportunities exist in your business."}
            </p>
            <a
              href="mailto:kontakt@valtor.io"
              className="inline-block mt-5 bg-foreground text-background text-[13px] tracking-wide px-6 py-3"
              style={{ borderRadius: "4px" }}
            >
              {l === "de" ? "Diagnose-Gespräch buchen" : "Book a diagnostic call"}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link
              href={`/${locale}/blog`}
              className="text-foreground-subtle text-[13px] hover:text-foreground transition-colors"
            >
              &larr; {l === "de" ? "Alle Artikel" : "All articles"}
            </Link>
            <Link
              href={`/${locale === "de" ? "en" : "de"}/blog/${slug}`}
              className="text-foreground-subtle text-[11px] font-mono tracking-wider hover:text-foreground transition-colors"
            >
              {l === "de" ? "Read in English" : "Auf Deutsch lesen"}
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
