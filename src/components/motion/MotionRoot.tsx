"use client";

import { useLayoutEffect } from "react";
import { paintScrollMotion, showReveal } from "@/lib/animations";

export function MotionRoot() {
  useLayoutEffect(() => {
    const scrolled = { current: false };
    let frame = 0;
    let ticking = false;
    const pending = new Set<HTMLElement>();
    let observer: IntersectionObserver | undefined;
    let safety = 0;

    const paint = () => {
      ticking = false;
      paintScrollMotion(scrolled);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      frame = window.requestAnimationFrame(paint);
    };

    const reveal = (el: HTMLElement, instant = false) => {
      pending.delete(el);
      showReveal(el, instant);
    };

    const revealAll = (instant: boolean) => {
      pending.forEach((el) => reveal(el, instant));
      observer?.disconnect();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    paint();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce || !("IntersectionObserver" in window) || document.visibilityState === "hidden") {
      nodes.forEach((el) => reveal(el, true));
    } else {
      const viewport = window.innerHeight;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            reveal(entry.target as HTMLElement);
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );

      nodes.forEach((el) => {
        if (el.getBoundingClientRect().top < viewport * 0.92) {
          reveal(el, true);
          return;
        }
        pending.add(el);
        observer?.observe(el);
      });

      const onPrint = () => revealAll(true);
      const onVisibility = () => {
        if (document.visibilityState === "hidden") revealAll(true);
      };
      window.addEventListener("beforeprint", onPrint);
      document.addEventListener("visibilitychange", onVisibility);

      safety = window.setInterval(() => {
        if (!pending.size) {
          window.clearInterval(safety);
          return;
        }
        const limit = window.innerHeight;
        pending.forEach((el) => {
          if (el.getBoundingClientRect().top < limit) reveal(el);
        });
      }, 1500);

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        window.removeEventListener("beforeprint", onPrint);
        document.removeEventListener("visibilitychange", onVisibility);
        window.cancelAnimationFrame(frame);
        observer?.disconnect();
        window.clearInterval(safety);
      };
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
