"use client";

import { useI18n, localized } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import categories from "@/data/categories.json";

interface FilterSidebarProps {
  selectedCategory: string | null;
  onCategoryChange: (slug: string | null) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

const PRICE_RANGES: { label: { de: string; en: string; es: string }; min: number; max: number }[] = [
  { label: { de: "Alle Preise", en: "All Prices", es: "Todos los Precios" }, min: 0, max: Infinity },
  { label: { de: "Unter EUR 10", en: "Under EUR 10", es: "Menos de EUR 10" }, min: 0, max: 10 },
  { label: { de: "EUR 10 - EUR 25", en: "EUR 10 - EUR 25", es: "EUR 10 - EUR 25" }, min: 10, max: 25 },
  { label: { de: "EUR 25 - EUR 50", en: "EUR 25 - EUR 50", es: "EUR 25 - EUR 50" }, min: 25, max: 50 },
  { label: { de: "Uber EUR 50", en: "Over EUR 50", es: "Mas de EUR 50" }, min: 50, max: Infinity },
];

export function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}: FilterSidebarProps) {
  const { locale, t } = useI18n();

  return (
    <aside className="w-full space-y-6 lg:w-60">
      {/* Category filter */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-neutral-800">
          {t("products.filter_category")}
        </h3>
        <div className="flex flex-col gap-1">
          <Button
            variant={selectedCategory === null ? "secondary" : "ghost"}
            size="sm"
            className={`justify-start ${selectedCategory === null ? "bg-primary-50 text-primary-800 hover:bg-primary-100" : ""}`}
            onClick={() => onCategoryChange(null)}
          >
            {t("products.filter_all")}
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.slug ? "secondary" : "ghost"}
              size="sm"
              className={`justify-start ${selectedCategory === cat.slug ? "bg-primary-50 text-primary-800 hover:bg-primary-100" : ""}`}
              onClick={() => onCategoryChange(cat.slug)}
            >
              {localized(cat.name, locale)}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price filter */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-neutral-800">
          {t("products.filter_price")}
        </h3>
        <div className="flex flex-col gap-1">
          {PRICE_RANGES.map((range, idx) => {
            const isActive =
              priceRange[0] === range.min && priceRange[1] === range.max;
            return (
              <Button
                key={idx}
                variant={isActive ? "secondary" : "ghost"}
                size="sm"
                className={`justify-start ${isActive ? "bg-primary-50 text-primary-800 hover:bg-primary-100" : ""}`}
                onClick={() => onPriceRangeChange([range.min, range.max])}
              >
                {localized(range.label, locale)}
              </Button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
