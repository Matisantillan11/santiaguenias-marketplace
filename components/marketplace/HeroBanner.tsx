"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroImage from '@/app/public/hero.jpg'

export function HeroBanner() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      <Image
        src={HeroImage.src}
        alt="Empanadas"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-20 lg:py-24">
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            {t("home.hero_title")}
          </h1>
          <p className="text-lg leading-relaxed text-white/85 max-w-lg">
            {t("home.hero_subtitle")}
          </p>
          <Link href="/products">
            <Button
              size="lg"
              className="bg-primary-400 text-white hover:bg-primary-500 active:bg-primary-600 gap-2 px-6 text-base h-12 rounded-md"
            >
              {t("home.hero_cta")}
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
