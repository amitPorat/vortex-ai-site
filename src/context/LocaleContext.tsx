"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { Locale } from "@/lib/content";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  dir: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const dir = locale === "he" ? "rtl" : "ltr";

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "he" : "en"));
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale, dir }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
