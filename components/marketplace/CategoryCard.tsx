"use client";

import Link from "next/link";
import {
  UtensilsCrossed,
  Wine,
  Leaf,
  Candy,
  Paintbrush,
  Gift,
  type LucideIcon,
} from "lucide-react";
import { useI18n, localized } from "@/lib/i18n";

const ICON_MAP: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Wine,
  Leaf,
  Candy,
  Paintbrush,
  Gift,
};

interface CategoryCardProps {
  category: {
    id: string;
    name: { de: string; en: string; es: string };
    icon: string;
    slug: string;
  };
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { locale } = useI18n();
  const Icon = ICON_MAP[category.icon] || Gift;

  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group flex flex-col items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(248,179,78,0.35)] hover:-translate-y-0.5"
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-primary-50 text-primary-400 transition-colors duration-200 group-hover:bg-primary-100">
        <Icon className="size-6" />
      </div>
      <span className="text-sm font-medium text-neutral-700 text-center">
        {localized(category.name, locale)}
      </span>
    </Link>
  );
}
