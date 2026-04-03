import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/content/blog";
import type { Locale } from "@/i18n/translations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";
  return {
    title: isDE
      ? "Blog: Einblicke in datengetriebene Unternehmenssteuerung | Valtor.io"
      : "Blog: Insights on Data-Driven Business Steering | Valtor.io",
    description: isDE
      ? "Einblicke in Business Optimization, Management-P&L, operative Intelligenz und datengetriebene Unternehmenssteuerung für den Mittelstand."
      : "Insights on business optimization, management P&L, operational intelligence, and data-driven steering for mid-market companies.",
    alternates: {
      canonical: `https://www.valtor.io/${locale}/blog`,
      languages: {
        "de-DE": "https://www.valtor.io/de/blog",
        "en-US": "https://www.valtor.io/en/blog",
      },
    },
    openGraph: {
      title: isDE
        ? "Blog: Einblicke in datengetriebene Unternehmenssteuerung"
        : "Blog: Insights on Data-Driven Business Steering",
      description: isDE
        ? "Einblicke in Business Optimization, Management-P&L, operative Intelligenz und datengetriebene Unternehmenssteuerung für den Mittelstand."
        : "Insights on business optimization, management P&L, operational intelligence, and data-driven steering for mid-market companies.",
      url: `https://www.valtor.io/${locale}/blog`,
    },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;

  // Sort posts by date descending
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

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
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-[800px] mx-auto px-6 md:px-8 py-32">
        <nav className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-foreground-subtle">
          <Link href={`/${locale}`} className="hover:text-foreground transition-colors">
            Valtor.io
          </Link>
          <span>/</span>
          <span className="text-foreground-muted">Blog</span>
        </nav>

        <h1
          className="mt-8 text-4xl md:text-5xl tracking-[-0.03em] leading-[1.1]"
          style={{ fontFamily: "var(--serif)" }}
        >
          {l === "de"
            ? "Managementwahrheit"
            : "Management Truth"}
        </h1>

        <p className="mt-4 text-foreground-muted text-[15px] max-w-[56ch]">
          {l === "de"
            ? "Operative Einblicke für Geschäftsführer, CFOs und COOs im Mittelstand. Warum Ihre BWA nicht reicht. Wo Cash steckenbleibt. Was Steuerung von Reporting unterscheidet."
            : "Operational insights for CEOs, CFOs, and COOs in mid-market companies. Why your BWA isn\u2019t enough. Where cash gets stuck. What separates steering from reporting."}
        </p>

        <div className="mt-16 space-y-1">
          {sortedPosts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-border"
            >
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="block py-8 hover:pl-2 transition-all duration-200"
              >
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
                <h2 className="mt-3 text-xl md:text-2xl tracking-[-0.02em] leading-snug group-hover:text-accent transition-colors">
                  {post.title[l]}
                </h2>
                <p className="mt-3 text-[14px] text-foreground-muted leading-relaxed max-w-[60ch]">
                  {post.description[l]}
                </p>
              </Link>
            </article>
          ))}
        </div>

        {/* Back to homepage with internal link */}
        <div className="mt-12">
          <Link
            href={`/${locale}`}
            className="text-foreground-subtle text-[13px] hover:text-foreground transition-colors"
          >
            &larr; {l === "de" ? "Zurück zur Startseite" : "Back to homepage"}
          </Link>
        </div>
      </div>
    </div>
  );
}
