"use client";

import { createContext, useContext, ReactNode } from "react";
import type { Locale } from "./translations";

const LanguageContext = createContext<{
  locale: Locale;
}>({ locale: "de" });

export function LanguageProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <LanguageContext.Provider value={{ locale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  return useContext(LanguageContext);
}
