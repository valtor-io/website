"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const clipReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: { clipPath: "inset(0 0 0% 0)" },
};

export function Contact() {
  const { locale } = useLocale();
  const c = translations.contact;

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <span className="text-foreground-subtle text-[11px] tracking-[0.15em] uppercase font-mono">
              {t(c.label, locale)}
            </span>
          </ScrollReveal>

          {/* Clip-path wipe headline — bookend with hero */}
          <div className="mt-5">
            <motion.h2
              className="text-3xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--serif)" }}
            >
              <motion.span
                className="block"
                variants={clipReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {t(c.h2_line1, locale)}
              </motion.span>
              <motion.span
                className="block italic"
                variants={clipReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {t(c.h2_line2, locale)}
              </motion.span>
            </motion.h2>
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-foreground-muted text-[15px] leading-relaxed max-w-[48ch] mx-auto">
              {t(c.body, locale)}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <motion.a
                href="mailto:kontakt@valtor.io"
                className="inline-flex items-center justify-center bg-foreground text-background text-[13px] tracking-wide px-8 py-4"
                style={{ borderRadius: "4px" }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 20px rgba(26,26,26,0.12)",
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(194,149,106,0)",
                    "0 0 0 6px rgba(194,149,106,0.06)",
                    "0 0 0 0px rgba(194,149,106,0)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  },
                }}
              >
                {t(c.cta, locale)}
              </motion.a>
              <motion.p
                className="mt-4 text-foreground-subtle text-[12px] font-mono"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                kontakt@valtor.io
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
