"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function Solution() {
  const { locale } = useLocale();
  const s = translations.solution;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 1],
    [0.6, 1, 1, 0.6]
  );

  return (
    <section id="solution" ref={sectionRef} className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <motion.div
            className="md:sticky md:top-32"
            style={{ opacity: headlineOpacity }}
          >
            <ScrollReveal>
              <span className="text-foreground-subtle text-[11px] tracking-[0.15em] uppercase font-mono">
                {t(s.label, locale)}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="mt-5 text-3xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em]"
                style={{ fontFamily: "var(--serif)" }}
              >
                {t(s.h2_line1, locale)}
                <br />
                {t(s.h2_line2, locale)}
                <br />
                <span className="italic">{t(s.h2_line3, locale)}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-foreground-muted text-[14px] leading-relaxed max-w-[42ch]">
                {t(s.body, locale)}
              </p>
            </ScrollReveal>
          </motion.div>

          <StaggerContainer className="space-y-0" staggerDelay={0.12}>
            {s.capabilities.map((cap, i) => (
              <StaggerItem key={i}>
                <div
                  className={`relative py-8 pl-4 ${
                    i < s.capabilities.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  {/* Accent line wipe */}
                  <motion.div
                    className="absolute left-0 top-8 bottom-8 w-[2px] bg-accent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "top" }}
                  />

                  <motion.span
                    className="text-accent text-[11px] font-mono tracking-[0.1em] uppercase inline-block"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {t(cap.label, locale)}
                  </motion.span>
                  <h3 className="mt-3 text-lg tracking-tight font-medium">
                    {t(cap.title, locale)}
                  </h3>
                  <p className="mt-3 text-foreground-muted text-[14px] leading-relaxed max-w-[50ch]">
                    {t(cap.description, locale)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
