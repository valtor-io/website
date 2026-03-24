"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function Method() {
  const { locale } = useLocale();
  const m = translations.method;

  return (
    <section id="method" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <span className="text-foreground-subtle text-[11px] tracking-[0.15em] uppercase font-mono">
            {t(m.label, locale)}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="mt-5 text-3xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] max-w-[22ch]"
            style={{ fontFamily: "var(--serif)" }}
          >
            {t(m.h2_line1, locale)}
            <br />
            <span className="text-foreground-muted">
              {t(m.h2_line2, locale)}
            </span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="mt-16 grid md:grid-cols-3 gap-px bg-border"
          staggerDelay={0.2}
        >
          {m.phases.map((phase) => (
            <StaggerItem key={phase.phase} className="bg-background">
              <motion.div
                className="h-full"
                whileHover={{
                  boxShadow: "inset 0 2px 0 0 var(--accent)",
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-8 md:p-10 h-full flex flex-col">
                  <div className="flex items-baseline gap-3">
                    <motion.span
                      className="text-accent text-[11px] font-mono tracking-wider inline-block"
                      initial={{ clipPath: "inset(0 100% 0 0)" }}
                      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                      Phase {phase.phase}
                    </motion.span>
                    <span className="text-foreground-subtle text-[11px] font-mono">
                      {t(phase.duration, locale)}
                    </span>
                  </div>

                  <h3
                    className="mt-4 text-2xl tracking-tight"
                    style={{ fontFamily: "var(--serif)" }}
                  >
                    {t(phase.name, locale)}
                  </h3>

                  <p className="mt-4 text-foreground-muted text-[14px] leading-relaxed flex-1">
                    {t(phase.description, locale)}
                  </p>

                  <div className="mt-8 pt-6 border-t border-border">
                    <span className="text-[10px] text-foreground-subtle tracking-[0.15em] uppercase font-mono">
                      {t(m.deliverables_label, locale)}
                    </span>
                    <ul className="mt-3 space-y-2">
                      {phase.deliverables[locale].map((d, idx) => (
                        <li
                          key={d}
                          className="text-[13px] text-foreground-muted flex items-start gap-2"
                        >
                          <motion.span
                            className="mt-1.5 block w-1 h-1 rounded-full bg-accent flex-shrink-0"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 15,
                              delay: idx * 0.06,
                            }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
