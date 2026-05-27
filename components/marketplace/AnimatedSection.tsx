"use client";

import { type ReactNode } from "react";
import { useInView } from "@/lib/hooks/useInView";

interface AnimatedSectionProps {
  children: ReactNode;
  /** Additional CSS classes applied to the wrapper div. */
  className?: string;
  /** HTML tag to render. Defaults to "div". */
  as?: "div" | "section";
  /** Delay before the transition starts (in ms). Useful for stagger effects. */
  delay?: number;
}

/**
 * Wraps children in a scroll-reveal animation.
 *
 * Elements start as `opacity-0 translate-y-6` and transition to
 * `opacity-100 translate-y-0` over 500ms ease-out when they scroll
 * into view.
 *
 * Respects `prefers-reduced-motion` via the useInView hook — content
 * is shown immediately when reduced motion is preferred.
 */
export function AnimatedSection({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}: AnimatedSectionProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
