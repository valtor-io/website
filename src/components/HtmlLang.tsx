"use client";

import { useEffect } from "react";
import { useLocale } from "@/i18n/LanguageContext";

export function HtmlLang() {
  const { locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
