"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer } from "./ScrollReveal";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const quoteVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Audience() {
  const { locale } = useLocale();
  const a = translations.audience;

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <div>
            <ScrollReveal>
              <span className="text-foreground-subtle text-[11px] tracking-[0.15em] uppercase font-mono">
                {t(a.label, locale)}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="mt-5 text-3xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em]"
                style={{ fontFamily: "var(--serif)" }}
              >
                {t(a.h2_line1, locale)}
                <br />
                {t(a.h2_line2, locale)}
                <br />
                <span className="text-foreground-muted">{t(a.h2_line3, locale)}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 space-y-4 text-[14px] text-foreground-muted leading-relaxed max-w-[44ch]">
                <p>{t(a.body1, locale)}</p>
                <p>{t(a.body2, locale)}</p>
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal>
              <span className="text-[10px] text-foreground-subtle tracking-[0.15em] uppercase font-mono">
                {t(a.signals_label, locale)}
              </span>
            </ScrollReveal>

            <StaggerContainer className="mt-6 space-y-0" staggerDelay={0.06}>
              {a.signals.map((signal, i) => (
                <motion.div
                  key={i}
                  variants={quoteVariants}
                >
                  <div
                    className={`py-5 ${
                      i < a.signals.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <p className="text-[14px] leading-relaxed text-foreground">
                      <motion.span
                        className="inline"
                        initial={{ color: "var(--accent)" }}
                        whileInView={{ color: "var(--foreground)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                      >
                        &ldquo;
                      </motion.span>
                      {t(signal, locale)}
                      <motion.span
                        className="inline"
                        initial={{ color: "var(--accent)" }}
                        whileInView={{ color: "var(--foreground)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                      >
                        &rdquo;
                      </motion.span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
