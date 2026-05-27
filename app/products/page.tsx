import { Suspense } from "react";
import { ProductsPageClient } from "./ProductsPageClient";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
          <div className="h-8 w-48 animate-pulse rounded bg-neutral-100" />
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square animate-pulse rounded-lg bg-neutral-100"
              />
            ))}
          </div>
        </div>
      }
    >
      <ProductsPageClient />
    </Suspense>
  );
}
