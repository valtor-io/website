"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { HoverLift } from "./HoverLift";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function Problem() {
  const { locale } = useLocale();
  const p = translations.problem;

  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <span className="text-foreground-subtle text-[11px] tracking-[0.15em] uppercase font-mono">
            {t(p.label, locale)}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="mt-5 text-3xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] max-w-[20ch]"
            style={{ fontFamily: "var(--serif)" }}
          >
            {t(p.h2_line1, locale)}
            <br />
            <span className="text-foreground-muted">
              {t(p.h2_line2, locale)}
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-foreground-muted text-[14px] md:text-[15px] leading-relaxed max-w-[65ch]">
            {t(p.intro, locale)}
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-12" staggerDelay={0.1}>
          {p.items.map((point) => (
            <StaggerItem key={point.number}>
              <HoverLift>
                <div className="group">
                  <motion.span
                    className="text-accent text-[11px] font-mono tracking-wider inline-block"
                    style={{ perspective: 400 }}
                    initial={{ opacity: 0, rotateX: -60 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {point.number}
                  </motion.span>
                  <h3 className="mt-3 text-lg tracking-tight font-medium">
                    {t(point.title, locale)}
                  </h3>
                  <p className="mt-3 text-foreground-muted text-[14px] leading-relaxed max-w-[50ch]">
                    {t(point.description, locale)}
                  </p>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
