"use client";

import { useEffect } from "react";

export function Motion() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.add("reveal-ready");
        }
      }
    }, { rootMargin: "0px 0px -12% 0px" });

    for (const element of elements) observer.observe(element);

    return () => {
      observer.disconnect();
      for (const element of elements) element.classList.remove("reveal-ready", "is-visible");
    };
  }, []);
  return null;
}
