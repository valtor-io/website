"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer } from "./ScrollReveal";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function FAQ() {
  const { locale } = useLocale();
  const faq = translations.faq;
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <span className="text-foreground-subtle text-[11px] tracking-[0.15em] uppercase font-mono">
            {t(faq.label, locale)}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="mt-5 text-3xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "var(--serif)" }}
          >
            {t(faq.h2, locale)}
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-12 divide-y divide-border" staggerDelay={0.06}>
          {faq.items.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full py-6 flex items-start justify-between gap-4 text-left group"
                aria-expanded={open === i}
              >
                <span className="text-[15px] leading-snug text-foreground font-medium group-hover:text-accent transition-colors">
                  {t(item.q, locale)}
                </span>
                <motion.span
                  className="text-foreground-subtle text-[18px] leading-none mt-0.5 shrink-0"
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[14px] leading-relaxed text-foreground-muted max-w-[65ch]">
                      {t(item.a, locale)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>

      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.items.map((item) => ({
              "@type": "Question",
              name: t(item.q, locale),
              acceptedAnswer: {
                "@type": "Answer",
                text: t(item.a, locale),
              },
            })),
          }),
        }}
      />
    </section>
  );
}
