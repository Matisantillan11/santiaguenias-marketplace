"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Star, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { HeroBanner } from "@/components/marketplace/HeroBanner";
import { CategoryCard } from "@/components/marketplace/CategoryCard";
import { ProductGrid } from "@/components/marketplace/ProductGrid";
import { AnimatedSection } from "@/components/marketplace/AnimatedSection";
import { Button } from "@/components/ui/button";
import categories from "@/data/categories.json";
import products from "@/data/products.json";

const featuredProducts = products.filter((p) => p.featured);

const TRUST_ICONS = [ShieldCheck, Truck, Star, Users] as const;

export default function HomePage() {
  const { t } = useI18n();

  const trustItems = [
    {
      icon: TRUST_ICONS[0],
      title: t("home.trust_authentic_title"),
      desc: t("home.trust_authentic_desc"),
    },
    {
      icon: TRUST_ICONS[1],
      title: t("home.trust_shipping_title"),
      desc: t("home.trust_shipping_desc"),
    },
    {
      icon: TRUST_ICONS[2],
      title: t("home.trust_quality_title"),
      desc: t("home.trust_quality_desc"),
    },
    {
      icon: TRUST_ICONS[3],
      title: t("home.trust_community_title"),
      desc: t("home.trust_community_desc"),
    },
  ];

  return (
    <div>
      {/* Hero */}
      <AnimatedSection>
        <HeroBanner />
      </AnimatedSection>

      {/* Featured Categories */}
      <AnimatedSection as="section" className="mx-auto max-w-[1280px] px-4 py-12 md:px-8 md:py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-neutral-800 md:text-2xl">
            {t("home.featured_categories")}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {categories.map((category, idx) => (
            <AnimatedSection key={category.id} delay={idx * 75}>
              <CategoryCard category={category} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Featured Products */}
      <AnimatedSection as="section" className="bg-neutral-50">
        <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-8 md:py-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-800 md:text-2xl">
              {t("home.featured_products")}
            </h2>
            <Link href="/products">
              <Button variant="ghost" className="gap-1 text-primary-500 hover:text-primary-600">
                {t("home.view_all")}
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </AnimatedSection>

      {/* Trust/Value Props */}
      <AnimatedSection as="section" className="mx-auto max-w-[1280px] px-4 py-12 md:px-8 md:py-16">
        <h2 className="mb-10 text-center text-xl font-semibold text-neutral-800 md:text-2xl">
          {t("home.trust_title")}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="flex flex-col items-center gap-3 rounded-lg border border-neutral-200 bg-white p-6 text-center shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary-50 text-primary-400">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-800">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-500">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  );
}
