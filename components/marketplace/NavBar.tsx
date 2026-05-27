"use client";

import Link from "next/link";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { Suspense } from "react";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import { SearchBar } from "./SearchBar";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Logo from "@/app/public/empanaditas.png";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";

/** Lightweight placeholder shown while SearchBar hydrates (uses useSearchParams). */
function SearchBarFallback() {
  return (
    <div className="relative w-full max-w-[480px]">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
      <input
        type="text"
        disabled
        className="h-11 w-full rounded-full border border-neutral-200 bg-neutral-50 pl-10 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400"
      />
    </div>
  );
}

export function NavBar() {
  const { totalItems } = useCart();
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-4 px-4 md:gap-6 md:px-8">
        {/* Mobile menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger
            className="inline-flex items-center justify-center size-8 rounded-lg text-neutral-700 hover:bg-neutral-50 md:hidden"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-6">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-700 hover:text-primary-400 transition-colors"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-700 hover:text-primary-400 transition-colors"
              >
                {t("nav.products")}
              </Link>
              <div className="pt-4 border-t border-neutral-200">
                <LanguageSwitcher />
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src={Logo.src} alt="Santiaguenias Logo" width={50} height={50} />
        </Link>

        {/* Search - hidden on mobile */}
        <div className="hidden flex-1 justify-center md:flex">
          <Suspense fallback={<SearchBarFallback />}>
            <SearchBar />
          </Suspense>
        </div>

        {/* Nav links - hidden on mobile */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 hover:text-primary-400 transition-colors"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-neutral-600 hover:text-primary-400 transition-colors"
          >
            {t("nav.products")}
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <Link href="/cart" className="relative inline-flex items-center justify-center size-8 rounded-lg text-neutral-700 hover:bg-neutral-50">
            <ShoppingCart className="size-5" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary-400 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile search */}
      <div className="border-t border-neutral-100 px-4 py-2 md:hidden">
        <Suspense fallback={<SearchBarFallback />}>
          <SearchBar />
        </Suspense>
      </div>
    </header>
  );
}
