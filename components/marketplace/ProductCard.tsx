"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useI18n, localized } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: { de: string; en: string; es: string };
  description: { de: string; en: string; es: string };
  price: number;
  category: string;
  images: string[];
  stock: number;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { locale, t } = useI18n();
  const { addItem } = useCart();

  const stockStatus =
    product.stock === 0
      ? "out"
      : product.stock <= 5
        ? "low"
        : "in";

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(248,179,78,0.35)] hover:-translate-y-0.5">
      <Link href={`/products/${product.id}`} className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[0]}
          alt={localized(product.name, locale)}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
        {stockStatus === "low" && (
          <Badge className="absolute left-2 top-2 bg-warning-50 text-yellow-700 border-0">
            {t("products.low_stock")}
          </Badge>
        )}
        {stockStatus === "out" && (
          <Badge className="absolute left-2 top-2 bg-error-50 text-red-600 border-0">
            {t("products.out_of_stock")}
          </Badge>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-semibold leading-snug text-neutral-800 line-clamp-2 hover:text-primary-500 transition-colors">
            {localized(product.name, locale)}
          </h3>
        </Link>
        <p className="text-xs text-neutral-500 line-clamp-2">
          {localized(product.description, locale)}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-mono text-base font-semibold text-neutral-900">
            EUR {product.price.toFixed(2)}
          </span>
          <Button
            size="icon-sm"
            className="bg-primary-400 text-white hover:bg-primary-500 active:bg-primary-600"
            onClick={(e) => {
              e.preventDefault();
              if (product.stock > 0) {
                addItem({
                  productId: product.id,
                  name: localized(product.name, locale),
                  price: product.price,
                  image: product.images[0],
                });
              }
            }}
            disabled={product.stock === 0}
          >
            <ShoppingCart className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
