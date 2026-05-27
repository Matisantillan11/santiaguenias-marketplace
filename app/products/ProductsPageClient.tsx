"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Filter } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ProductGrid } from "@/components/marketplace/ProductGrid";
import { FilterSidebar } from "@/components/marketplace/FilterSidebar";
import { AnimatedSection } from "@/components/marketplace/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import products from "@/data/products.json";
import categories from "@/data/categories.json";

const ITEMS_PER_PAGE = 8;

export function ProductsPageClient() {
  const { locale, t } = useI18n();
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get("category");
  const searchQuery = searchParams.get("q") ?? "";

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter — match against the product name in the active locale
      if (searchQuery) {
        const productName =
          (product.name as Record<string, string>)[locale] ?? product.name.de ?? "";
        if (!productName.toLowerCase().includes(searchQuery.toLowerCase())) {
          return false;
        }
      }
      // Category filter
      if (selectedCategory) {
        const cat = categories.find((c) => c.slug === selectedCategory);
        if (cat && product.category !== cat.id) return false;
      }
      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1])
        return false;
      return true;
    });
  }, [selectedCategory, priceRange, searchQuery, locale]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (slug: string | null) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
      {/* Header */}
      <AnimatedSection>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-800">
              {t("products.title")}
            </h1>
            <p className="mt-1 text-sm text-neutral-500">
              {filteredProducts.length} {t("products.results")}
            </p>
          </div>

          {/* Mobile filter trigger */}
          <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
            <SheetTrigger
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 h-8 text-sm font-medium text-neutral-700 hover:bg-neutral-50 lg:hidden"
            >
              <Filter className="size-4" />
              {t("products.filter_category")}
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-6">
              <SheetTitle className="sr-only">Filters</SheetTitle>
              <div className="mt-6">
                <FilterSidebar
                  selectedCategory={selectedCategory}
                  onCategoryChange={(slug) => {
                    handleCategoryChange(slug);
                    setFilterOpen(false);
                  }}
                  priceRange={priceRange}
                  onPriceRangeChange={(range) => {
                    handlePriceChange(range);
                    setFilterOpen(false);
                  }}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </AnimatedSection>

      <div className="flex gap-6">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceRangeChange={handlePriceChange}
          />
        </div>

        {/* Product grid */}
        <div className="flex-1">
          {paginatedProducts.length > 0 ? (
            <ProductGrid products={paginatedProducts} />
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-lg font-medium text-neutral-600">
                {t("products.no_results")}
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                {t("products.no_results_hint")}
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                    className={
                      page === currentPage
                        ? "bg-primary-400 text-white hover:bg-primary-500"
                        : ""
                    }
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
