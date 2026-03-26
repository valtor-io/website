"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";
import type { Locale } from "@/i18n/translations";

export function Providers({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider locale={locale}>{children}</LanguageProvider>
    </MotionConfig>
  );
}
