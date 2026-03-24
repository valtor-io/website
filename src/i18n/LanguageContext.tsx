"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Locale } from "./translations";

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({ locale: "de", setLocale: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  return useContext(LanguageContext);
}
