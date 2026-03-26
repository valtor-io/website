"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { CountUp } from "./CountUp";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function Results() {
  const { locale } = useLocale();
  const r = translations.results;

  return (
    <section id="results" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <span className="text-foreground-subtle text-[11px] tracking-[0.15em] uppercase font-mono">
            {t(r.label, locale)}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="mt-5 text-3xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] max-w-[24ch]"
            style={{ fontFamily: "var(--serif)" }}
          >
            {t(r.h2_line1, locale)}
            <br />
            <span className="text-foreground-muted">
              {t(r.h2_line2, locale)}
            </span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-xl overflow-hidden"
          staggerDelay={0.12}
        >
          {r.items.map((result, i) => {
            const isCountable = /^\d+$/.test(result.metric);

            return (
              <StaggerItem key={i} className="bg-background">
                <motion.div
                  className="relative h-full"
                  whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.04)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Top accent line */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px] bg-accent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                  />

                  <div className="p-8 h-full">
                    <span
                      className="text-3xl md:text-4xl tracking-tight text-foreground"
                      style={{ fontFamily: "var(--serif)" }}
                    >
                      {isCountable ? (
                        <CountUp target={parseInt(result.metric)} suffix={"suffix" in result ? (result.suffix as string) : "%"} />
                      ) : (
                        result.metric
                      )}
                    </span>
                    <h3 className="mt-2 text-[13px] font-medium tracking-tight text-foreground">
                      {t(result.label, locale)}
                    </h3>
                    <p className="mt-3 text-foreground-muted text-[13px] leading-relaxed">
                      {t(result.description, locale)}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
