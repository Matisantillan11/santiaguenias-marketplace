"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Truck, ShieldCheck, Minus, Plus } from "lucide-react";
import { useI18n, localized } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductGrid } from "@/components/marketplace/ProductGrid";

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

interface Category {
  id: string;
  name: { de: string; en: string; es: string };
  icon: string;
  slug: string;
}

interface ProductDetailClientProps {
  product: Product;
  category: Category | null;
  relatedProducts: Product[];
}

export function ProductDetailClient({
  product,
  category,
  relatedProducts,
}: ProductDetailClientProps) {
  const { locale, t } = useI18n();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const stockStatus =
    product.stock === 0 ? "out" : product.stock <= 5 ? "low" : "in";

  const handleAddToCart = () => {
    if (product.stock === 0) return;
    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        name: localized(product.name, locale),
        price: product.price,
        image: product.images[0],
      });
    }
  };

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-6 md:px-8 md:py-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
        <Link
          href="/products"
          className="flex items-center gap-1 hover:text-primary-400 transition-colors"
        >
          <ArrowLeft className="size-4" />
          {t("products.title")}
        </Link>
        {category && (
          <>
            <span>/</span>
            <Link
              href={`/products?category=${category.slug}`}
              className="hover:text-primary-400 transition-colors"
            >
              {localized(category.name, locale)}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-neutral-700 truncate">
          {localized(product.name, locale)}
        </span>
      </div>

      {/* Product detail grid */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Image gallery */}
        <div className="w-full lg:w-[55%]">
          <div className="sticky top-20">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
              <Image
                src={product.images[selectedImage]}
                alt={localized(product.name, locale)}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative size-16 overflow-hidden rounded-md border-2 transition-colors ${
                      selectedImage === idx
                        ? "border-primary-400"
                        : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${localized(product.name, locale)} ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product info */}
        <div className="w-full lg:w-[45%]">
          <div className="flex flex-col gap-4">
            {category && (
              <Badge className="w-fit bg-primary-50 text-primary-800 border-0">
                {localized(category.name, locale)}
              </Badge>
            )}

            <h1 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              {localized(product.name, locale)}
            </h1>

            <span className="font-mono text-2xl font-bold text-neutral-900">
              EUR {product.price.toFixed(2)}
            </span>

            {/* Stock status */}
            <div className="flex items-center gap-2">
              {stockStatus === "in" && (
                <Badge className="bg-success-50 text-green-700 border-0">
                  {t("products.in_stock")} ({product.stock})
                </Badge>
              )}
              {stockStatus === "low" && (
                <Badge className="bg-warning-50 text-yellow-700 border-0">
                  {t("products.low_stock")} ({product.stock})
                </Badge>
              )}
              {stockStatus === "out" && (
                <Badge className="bg-error-50 text-red-600 border-0">
                  {t("products.out_of_stock")}
                </Badge>
              )}
            </div>

            <Separator />

            <p className="text-sm leading-relaxed text-neutral-600">
              {localized(product.description, locale)}
            </p>

            <Separator />

            {/* Quantity selector */}
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-md border border-neutral-200">
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="size-4" />
                </Button>
                <span className="min-w-[3rem] text-center text-sm font-medium">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  disabled={quantity >= product.stock}
                >
                  <Plus className="size-4" />
                </Button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              size="lg"
              className="w-full bg-primary-400 text-white hover:bg-primary-500 active:bg-primary-600 gap-2 h-12 text-base rounded-md"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="size-5" />
              {t("products.add_to_cart")}
            </Button>

            {/* Shipping/trust info */}
            <div className="mt-2 flex flex-col gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <Truck className="size-5 shrink-0 text-primary-400" />
                <span>3-5 Werktage Lieferzeit in Osterreich</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <ShieldCheck className="size-5 shrink-0 text-primary-400" />
                <span>Qualitatsgarantie auf alle Produkte</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="mt-12 pt-8 border-t border-neutral-200">
          <h2 className="mb-6 text-xl font-semibold text-neutral-800">
            {t("products.related")}
          </h2>
          <ProductGrid products={relatedProducts} />
        </section>
      )}
    </div>
  );
}
