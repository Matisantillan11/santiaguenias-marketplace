"use client";

import { useI18n, type Locale } from "@/lib/i18n";
import { ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const LANGUAGES: { code: Locale; label: string; name: string }[] = [
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const activeLanguage = LANGUAGES.find((lang) => lang.code === locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 transition-colors outline-none">
        {activeLanguage?.label ?? "DE"}
        <ChevronDown className="size-4 text-neutral-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="min-w-[160px]">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center justify-between gap-3 px-3 py-2 cursor-pointer"
            onClick={() => setLocale(lang.code)}
          >
            <span className="flex items-center gap-2">
              <span
                className={
                  locale === lang.code
                    ? "font-semibold text-primary-400"
                    : "text-neutral-700"
                }
              >
                {lang.label}
              </span>
              <span
                className={
                  locale === lang.code
                    ? "text-primary-400"
                    : "text-neutral-500"
                }
              >
                {lang.name}
              </span>
            </span>
            {locale === lang.code && (
              <Check className="size-4 text-primary-400" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
