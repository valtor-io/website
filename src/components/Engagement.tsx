"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function Engagement() {
  const { locale } = useLocale();
  const e = translations.engagement;
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <span className="text-foreground-subtle text-[11px] tracking-[0.15em] uppercase font-mono">
            {t(e.label, locale)}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="mt-5 text-3xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] max-w-[24ch]"
            style={{ fontFamily: "var(--serif)" }}
          >
            {t(e.h2_line1, locale)}
            <br />
            <span className="text-foreground-muted">
              {t(e.h2_line2, locale)}
            </span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="mt-16 grid md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {e.steps.map((step, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="relative h-full bg-background border border-border overflow-hidden"
                style={{ borderRadius: "8px" }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.04)" }}
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

                <div className="p-6 md:p-8">
                  <div className="flex items-baseline justify-between">
                    <span
                      className="text-3xl md:text-4xl tracking-tight text-foreground"
                      style={{ fontFamily: "var(--serif)" }}
                    >
                      {t(step.name, locale)}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-accent text-[11px] font-mono tracking-wide">
                      {typeof step.price === "string" ? step.price : t(step.price, locale)}
                    </span>
                    <span className="text-foreground-subtle text-[11px]">/</span>
                    <span className="text-foreground-subtle text-[11px] font-mono tracking-wide">
                      {t(step.duration, locale)}
                    </span>
                  </div>

                  <p className="mt-5 text-foreground-muted text-[13px] leading-relaxed">
                    {t(step.description, locale)}
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
