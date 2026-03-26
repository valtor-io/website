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
    title: isDE ? "Blog — Valtor.io" : "Blog — Valtor.io",
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
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[800px] mx-auto px-6 md:px-8 py-32">
        <Link
          href={`/${locale}`}
          className="text-foreground-subtle text-[13px] hover:text-foreground transition-colors"
        >
          &larr; {l === "de" ? "Zurück" : "Back"}
        </Link>

        <h1
          className="mt-8 text-4xl md:text-5xl tracking-[-0.03em] leading-[1.1]"
          style={{ fontFamily: "var(--serif)" }}
        >
          Blog
        </h1>

        <p className="mt-4 text-foreground-muted text-[15px] max-w-[50ch]">
          {l === "de"
            ? "Einblicke in datengetriebene Unternehmenssteuerung für den Mittelstand."
            : "Insights on data-driven business steering for mid-market companies."}
        </p>

        <div className="mt-16 space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/${locale}/blog/${post.slug}`}>
                <time className="text-[11px] text-foreground-subtle font-mono tracking-wider uppercase">
                  {post.publishedAt}
                </time>
                <h2 className="mt-2 text-xl md:text-2xl tracking-[-0.02em] leading-snug group-hover:text-accent transition-colors">
                  {post.title[l]}
                </h2>
                <p className="mt-3 text-[14px] text-foreground-muted leading-relaxed max-w-[60ch]">
                  {post.description[l]}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
