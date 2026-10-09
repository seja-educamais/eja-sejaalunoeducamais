"use client";

type MetaEvent = "Lead" | "Contact";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[]; loaded?: boolean; version?: string };
    _fbq?: Window["fbq"];
  }
}

export function trackMetaEvent(event: MetaEvent) {
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage.getItem("educa-marketing-consent") !== "accepted") return;
  } catch {
    return;
  }
  window.fbq?.("track", event);
}

