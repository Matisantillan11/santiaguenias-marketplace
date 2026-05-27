"use client";

import { useRef, useState, useEffect, type RefObject } from "react";

interface UseInViewOptions {
  /** Margin around the root (CSS margin syntax). Defaults to "0px". */
  rootMargin?: string;
  /** Visibility threshold (0–1). Defaults to 0.1. */
  threshold?: number;
  /** If true, unobserve after the element becomes visible (fire once). Defaults to true. */
  once?: boolean;
}

/**
 * Observes an element's visibility within the viewport using IntersectionObserver.
 * Returns a [ref, isInView] tuple.
 *
 * Respects `prefers-reduced-motion` — when enabled, `isInView` is always `true`
 * so that content is shown immediately without animation.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
): [RefObject<T | null>, boolean] {
  const { rootMargin = "0px", threshold = 0.1, once = true } = options;

  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion: skip animation, show immediately
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, once]);

  return [ref, isInView];
}
