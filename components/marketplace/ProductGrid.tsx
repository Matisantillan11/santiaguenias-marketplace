"use client";

import { ProductCard } from "./ProductCard";
import { AnimatedSection } from "./AnimatedSection";

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

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
      {products.map((product, idx) => (
        <AnimatedSection key={product.id} delay={idx * 75}>
          <ProductCard product={product} />
        </AnimatedSection>
      ))}
    </div>
  );
}
