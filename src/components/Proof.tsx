"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function Proof() {
  const { locale } = useLocale();
  const p = translations.proof;

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <span className="text-foreground-subtle text-[11px] tracking-[0.15em] uppercase font-mono">
            {t(p.label, locale)}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="mt-5 text-3xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] max-w-[24ch]"
            style={{ fontFamily: "var(--serif)" }}
          >
            {t(p.h2_line1, locale)}
            <br />
            <span className="italic">{t(p.h2_line2, locale)}</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="mt-16 grid md:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {p.milestones.map((milestone, i) => (
            <StaggerItem key={i}>
              <div className="relative">
                {/* Day number */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span
                    className="text-5xl md:text-6xl tracking-tight text-foreground"
                    style={{ fontFamily: "var(--serif)" }}
                  >
                    {milestone.days}
                  </span>
                  <span className="text-foreground-subtle text-[11px] font-mono tracking-wide uppercase">
                    {locale === "de" ? "Tage" : "days"}
                  </span>
                </div>

                {/* Accent line */}
                <motion.div
                  className="w-full h-[1px] bg-accent mb-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                />

                <h3 className="text-lg tracking-tight font-medium">
                  {t(milestone.title, locale)}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {(locale === "de" ? milestone.items.de : milestone.items.en).map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="text-accent text-[9px] mt-1.5 shrink-0">●</span>
                      <span className="text-foreground-muted text-[13px] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
