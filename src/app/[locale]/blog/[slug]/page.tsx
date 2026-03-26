import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, getAllSlugs } from "@/content/blog";
import type { Locale } from "@/i18n/translations";

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
      type: "article",
      publishedTime: post.publishedAt,
      locale: l === "de" ? "de_DE" : "en_US",
      alternateLocale: l === "de" ? "en_US" : "de_DE",
    },
  };
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

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-[720px] mx-auto px-6 md:px-8 py-32">
        <Link
          href={`/${locale}/blog`}
          className="text-foreground-subtle text-[13px] hover:text-foreground transition-colors"
        >
          &larr; Blog
        </Link>

        <header className="mt-8">
          <time className="text-[11px] text-foreground-subtle font-mono tracking-wider uppercase">
            {post.publishedAt}
          </time>
          <h1
            className="mt-3 text-3xl md:text-[2.75rem] leading-[1.12] tracking-[-0.03em]"
            style={{ fontFamily: "var(--serif)" }}
          >
            {post.title[l]}
          </h1>
          <p className="mt-6 text-[16px] text-foreground-muted leading-relaxed border-l-2 border-accent pl-5">
            {post.description[l]}
          </p>
        </header>

        <div className="mt-16 space-y-12">
          {post.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl md:text-2xl tracking-[-0.02em] leading-snug mb-5">
                {section.heading[l]}
              </h2>
              <div className="text-[15px] text-foreground-muted leading-[1.75] space-y-4">
                {section.body[l].split("\n\n").map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-20 pt-12 border-t border-border">
          <div className="bg-surface p-8 rounded-sm">
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
