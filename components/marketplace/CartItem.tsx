"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart, type CartItem as CartItemType } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { t } = useI18n();

  return (
    <div className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-4">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-md">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <h3 className="text-sm font-semibold text-neutral-800 line-clamp-1">
          {item.name}
        </h3>
        <span className="font-mono text-sm font-semibold text-neutral-900">
          EUR {item.price.toFixed(2)}
        </span>
        <div className="mt-auto flex items-center gap-2">
          <div className="flex items-center rounded-md border border-neutral-200">
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
            >
              <Minus className="size-3" />
            </Button>
            <span className="min-w-[2rem] text-center text-sm font-medium text-neutral-700">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
            >
              <Plus className="size-3" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={() => removeItem(item.productId)}
            className="ml-auto text-neutral-400 hover:text-error-500"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
      <div className="hidden sm:flex items-center">
        <span className="font-mono text-sm font-bold text-neutral-900">
          EUR {(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
