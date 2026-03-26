"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { posts } from "@/content/blog";
import type { Locale } from "@/i18n/translations";

export function Footer() {
  const { locale } = useLocale();

  // Show latest 3 posts
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <motion.footer
      className="border-t border-border py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Blog section */}
        <div className="mb-10 pb-10 border-b border-border">
          <h3 className="text-[11px] font-mono tracking-wider uppercase text-foreground-subtle mb-5">
            {locale === "de" ? "Aktuelle Artikel" : "Latest Articles"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group"
              >
                {post.category && (
                  <span className="text-[10px] font-mono tracking-wider uppercase text-accent">
                    {post.category[locale as Locale]}
                  </span>
                )}
                <h4 className="mt-1 text-[14px] leading-snug tracking-[-0.01em] group-hover:text-accent transition-colors">
                  {post.title[locale as Locale]}
                </h4>
                <p className="mt-1 text-[12px] text-foreground-subtle leading-relaxed line-clamp-2">
                  {post.description[locale as Locale]}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <motion.div whileHover={{ x: 2 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <Link href={`/${locale}`}>
              <span className="text-foreground font-medium tracking-tight text-[15px]">
                Valtor<span className="text-accent">.io</span>
              </span>
            </Link>
            <p className="mt-1 text-foreground-subtle text-[12px]">
              {t(translations.footer.tagline, locale)}
            </p>
          </motion.div>

          <div className="flex items-center gap-8 text-[12px] text-foreground-subtle">
            <Link
              href={`/${locale}/blog`}
              className="relative group hover:text-foreground transition-colors"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
            <a
              href="mailto:kontakt@valtor.io"
              className="relative group hover:text-foreground transition-colors"
            >
              kontakt@valtor.io
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </a>
            <span>DACH</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
