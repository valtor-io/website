"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function WhyFail() {
  const { locale } = useLocale();
  const w = translations.why_fail;

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <span className="text-foreground-subtle text-[11px] tracking-[0.15em] uppercase font-mono">
            {t(w.label, locale)}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="mt-5 text-3xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] max-w-[24ch]"
            style={{ fontFamily: "var(--serif)" }}
          >
            {t(w.h2_line1, locale)}
            <br />
            <span className="text-foreground-muted">
              {t(w.h2_line2, locale)}
            </span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="mt-16 grid md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden"
          staggerDelay={0.12}
        >
          {w.items.map((item, i) => (
            <StaggerItem key={i} className="bg-background">
              <motion.div
                className="relative h-full"
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.03)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="p-8 h-full">
                  <span className="text-accent text-[11px] font-mono tracking-[0.1em] uppercase">
                    {t(item.category, locale)}
                  </span>
                  <p className="mt-4 text-foreground-muted text-[14px] leading-relaxed">
                    {t(item.problem, locale)}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
