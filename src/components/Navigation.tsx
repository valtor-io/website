"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="relative group text-foreground-muted text-[13px] tracking-wide uppercase hover:text-foreground transition-colors duration-200 py-1">
      {label}
      <span className="absolute bottom-0 left-0 w-full h-px bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </a>
  );
}

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const hasAnimated = useRef(false);

  useEffect(() => {
    hasAnimated.current = true;
  }, []);

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85]);
  const blurValue = useTransform(scrollY, [0, 80], [0, 20]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  const backgroundColor = useMotionTemplate`rgba(250,250,249,${bgOpacity})`;
  const backdropFilter = useMotionTemplate`blur(${blurValue}px)`;

  const navLinks = [
    { href: "#problem", label: t(translations.nav.problem, locale) },
    { href: "#solution", label: t(translations.nav.solution, locale) },
    { href: "#method", label: t(translations.nav.method, locale) },
    { href: "#results", label: t(translations.nav.results, locale) },
    { href: `/${locale}/blog`, label: "Blog" },
  ];

  return (
    <>
      <motion.nav
        initial={hasAnimated.current ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor, backdropFilter, WebkitBackdropFilter: backdropFilter }}
      >
        {/* Animated bottom border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-border"
          style={{ opacity: borderOpacity }}
        />

        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            <a
              href="#"
              className="text-foreground font-semibold tracking-tight text-[20px]"
            >
              Valtor
              <span className="text-accent">.io</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}

              <button
                onClick={() => {
                  const newLocale = locale === "de" ? "en" : "de";
                  router.push(pathname.replace(/^\/(de|en)/, `/${newLocale}`));
                }}
                className="text-[11px] font-mono tracking-wider text-foreground-subtle hover:text-foreground transition-colors duration-200 border border-border px-2.5 py-1 cursor-pointer hover:border-foreground-subtle"
                style={{ borderRadius: "3px" }}
              >
                {locale === "de" ? "EN" : "DE"}
              </button>

              <motion.a
                href="#contact"
                className="bg-foreground text-background text-[13px] tracking-wide px-5 py-2.5"
                style={{ borderRadius: "4px" }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 4px 16px rgba(194,149,106,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {t(translations.nav.contact, locale)}
              </motion.a>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => {
                  const newLocale = locale === "de" ? "en" : "de";
                  router.push(pathname.replace(/^\/(de|en)/, `/${newLocale}`));
                }}
                className="text-[11px] font-mono tracking-wider text-foreground-subtle hover:text-foreground transition-colors duration-200 border border-border px-2.5 py-1 cursor-pointer"
                style={{ borderRadius: "3px" }}
              >
                {locale === "de" ? "EN" : "DE"}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-foreground p-2"
                aria-label="Menu"
              >
                <div className="w-5 flex flex-col gap-1.5">
                  <span className={`block h-px bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
                  <span className={`block h-px bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground text-xl tracking-tight"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-foreground text-background text-sm tracking-wide px-8 py-3 mt-4"
                style={{ borderRadius: "4px" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                {t(translations.nav.contact, locale)}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
