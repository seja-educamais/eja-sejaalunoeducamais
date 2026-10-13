"use client";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[]; loaded?: boolean; version?: string };
    _fbq?: Window["fbq"];
  }
}

export function trackMetaLead(eventId: string, fullName: string) {
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage.getItem("educa-marketing-consent") !== "accepted") return;
  } catch {
    return;
  }
  if (!window.fbq) return;

  // O nome só fica disponível depois da validação do formulário. O Pixel da Meta
  // normaliza e aplica hash aos dados de correspondência avançada antes do envio.
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts[0];
  const lastName = parts.length > 1 ? parts[parts.length - 1] : undefined;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
  if (pixelId && firstName) {
    window.fbq("init", pixelId, { fn: firstName, ...(lastName ? { ln: lastName } : {}) });
  }
  window.fbq("track", "Lead", {}, { eventID: eventId });
}

