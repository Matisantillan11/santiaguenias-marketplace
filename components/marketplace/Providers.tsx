"use client";

import { type ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n";
import { CartProvider } from "@/lib/cart";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <CartProvider>{children}</CartProvider>
    </I18nProvider>
  );
}
