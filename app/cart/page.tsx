"use client";

import Link from "next/link";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { CartItem } from "@/components/marketplace/CartItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const { t } = useI18n();
  const { items, subtotal, totalItems } = useCart();

  const shipping = subtotal >= 50 ? 0 : 5.90;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center px-4 py-24 text-center md:px-8">
        <div className="flex size-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
          <ShoppingBag className="size-8" />
        </div>
        <h1 className="mt-6 text-xl font-semibold text-neutral-800">
          {t("cart.empty")}
        </h1>
        <Link href="/products" className="mt-6">
          <Button className="bg-primary-400 text-white hover:bg-primary-500 gap-2 rounded-md">
            <ArrowLeft className="size-4" />
            {t("cart.empty_cta")}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
      <h1 className="mb-2 text-2xl font-semibold text-neutral-800">
        {t("cart.title")}
      </h1>
      <p className="mb-6 text-sm text-neutral-500">
        {totalItems} {t("cart.items")}
      </p>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Cart items */}
        <div className="flex flex-1 flex-col gap-3">
          {items.map((item) => (
            <CartItem key={item.productId} item={item} />
          ))}
          <Link href="/products" className="mt-4 inline-flex">
            <Button variant="ghost" className="gap-2 text-primary-500 hover:text-primary-600">
              <ArrowLeft className="size-4" />
              {t("cart.empty_cta")}
            </Button>
          </Link>
        </div>

        {/* Order summary */}
        <div className="w-full lg:w-[35%]">
          <div className="sticky top-20 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="mb-4 text-lg font-semibold text-neutral-800">
              {t("cart.subtotal")}
            </h2>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">{t("cart.subtotal")}</span>
                <span className="font-mono font-medium text-neutral-800">
                  EUR {subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">{t("cart.shipping")}</span>
                <span className="font-mono font-medium text-neutral-800">
                  {shipping === 0 ? t("cart.free_shipping") : `EUR ${shipping.toFixed(2)}`}
                </span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="font-semibold text-neutral-800">
                  {t("cart.total")}
                </span>
                <span className="font-mono text-xl font-bold text-neutral-900">
                  EUR {total.toFixed(2)}
                </span>
              </div>

              {subtotal < 50 && (
                <p className="text-xs text-neutral-500">
                  {(() => {
                    const remaining = (50 - subtotal).toFixed(2);
                    return `Noch EUR ${remaining} bis zum kostenlosen Versand`;
                  })()}
                </p>
              )}
            </div>

            <Button
              size="lg"
              className="mt-6 w-full bg-primary-400 text-white hover:bg-primary-500 active:bg-primary-600 h-12 text-base rounded-md"
            >
              {t("cart.checkout")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
