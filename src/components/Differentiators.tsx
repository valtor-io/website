"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function Differentiators() {
  const { locale } = useLocale();
  const d = translations.differentiators;

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <span className="text-foreground-subtle text-[11px] tracking-[0.15em] uppercase font-mono">
            {t(d.label, locale)}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="mt-5 text-3xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] max-w-[24ch]"
            style={{ fontFamily: "var(--serif)" }}
          >
            {t(d.h2_line1, locale)}
            <br />
            {t(d.h2_line2, locale)}
            <br />
            <span className="text-foreground-muted">{t(d.h2_line3, locale)}</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-16 space-y-0" staggerDelay={0.12}>
          {d.items.map((comp, i) => (
            <StaggerItem key={i}>
              <div
                className={`grid md:grid-cols-[200px_1fr_1fr] gap-6 md:gap-12 py-10 ${
                  i < d.items.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div>
                  <span className="text-[13px] font-medium tracking-tight">
                    {t(comp.category, locale)}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-foreground-subtle tracking-[0.15em] uppercase font-mono block mb-2">
                    {t(d.typical_label, locale)}
                  </span>
                  <p className="text-foreground-muted text-[14px] leading-relaxed">
                    {t(comp.limitation, locale)}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] text-accent tracking-[0.15em] uppercase font-mono block mb-2">
                    {t(d.valtor_label, locale)}
                  </span>
                  <motion.p
                    className="text-foreground text-[14px] leading-relaxed"
                    initial={{ opacity: 0.4 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  >
                    {t(comp.valtor, locale)}
                  </motion.p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
