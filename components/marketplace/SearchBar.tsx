"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useI18n } from "@/lib/i18n";

export function SearchBar() {
  const { t } = useI18n();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentQuery = searchParams.get("q") ?? "";
  const [inputValue, setInputValue] = useState(currentQuery);

  // Keep input in sync when URL changes externally (e.g. back/forward navigation)
  useEffect(() => {
    setInputValue(searchParams.get("q") ?? "");
  }, [searchParams]);

  const navigateToSearch = useCallback(
    (query: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (query.trim()) {
        params.set("q", query.trim());
      } else {
        params.delete("q");
      }
      // Preserve other params like category
      const queryString = params.toString();
      router.push(`/products${queryString ? `?${queryString}` : ""}`);
    },
    [router, searchParams]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateToSearch(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    navigateToSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-[480px]">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
      <input
        type="text"
        placeholder={t("nav.search_placeholder")}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="h-11 w-full rounded-full border border-neutral-200 bg-neutral-50 pl-10 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors duration-200 focus:border-primary-400 focus:outline-none focus:ring-[3px] focus:ring-primary-400/20"
      />
      {inputValue && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
          aria-label={t("products.clear_search")}
        >
          <X className="size-4" />
        </button>
      )}
    </form>
  );
}
