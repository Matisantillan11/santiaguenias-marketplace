"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import translations from "@/data/translations.json";

export type Locale = "de" | "en" | "es";

type TranslationValue = string | { de: string; en: string; es: string };

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");

  const t = useCallback(
    (path: string): string => {
      const value = getNestedValue(
        translations as unknown as Record<string, unknown>,
        path
      ) as TranslationValue | undefined;
      if (!value) return path;
      if (typeof value === "string") return value;
      return value[locale] || value.de || path;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

/** Helper to get a localized field from a product/category object */
export function localized(
  field: { de: string; en: string; es: string } | undefined,
  locale: Locale
): string {
  if (!field) return "";
  return field[locale] || field.de || "";
}
