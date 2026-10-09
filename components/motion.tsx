"use client";

import { useEffect } from "react";

export function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let context: { revert: () => void } | undefined;
    let cancelled = false;

    async function animate() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        gsap.from("[data-hero]", {
          y: 14,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.07,
          clearProps: "all",
        });
        document.querySelectorAll("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 26,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
            clearProps: "all",
          });
        });
      });
    }
    void animate();
    return () => { cancelled = true; context?.revert(); };
  }, []);
  return null;
}
