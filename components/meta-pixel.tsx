"use client";

import { useEffect, useRef, useState } from "react";

const CONSENT_KEY = "educa-marketing-consent";
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();

type Consent = "accepted" | "rejected" | null;
type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[]; loaded?: boolean; version?: string; push?: (...args: unknown[]) => void };
type MetaWindow = Window & { fbq?: Fbq; _fbq?: Fbq };

function ensurePixel(id: string) {
  const w = window as MetaWindow;
  if (!w.fbq) {
    const fbq = ((...args: unknown[]) => {
      if (fbq.callMethod) fbq.callMethod(...args);
      else (fbq.queue ??= []).push(args);
    }) as NonNullable<MetaWindow["fbq"]>;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    w.fbq = fbq;
    w._fbq = fbq;
  }
  if (!document.querySelector('script[src="https://connect.facebook.net/en_US/fbevents.js"]')) {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
  w.fbq("set", "autoConfig", false, id);
  w.fbq("init", id);
}

export function MetaPixel() {
  const [consent, setConsent] = useState<Consent>(null);
  const pageViewSent = useRef(false);

  useEffect(() => {
    if (!PIXEL_ID) return;
    try {
      const saved = window.localStorage.getItem(CONSENT_KEY);
      if (saved === "accepted" || saved === "rejected") setConsent(saved);
    } catch {
      setConsent(null);
    }
  }, []);

  useEffect(() => {
    if (consent !== "accepted" || !PIXEL_ID) return;
    ensurePixel(PIXEL_ID);
    window.fbq?.("consent", "grant");
    if (!pageViewSent.current) {
      window.fbq?.("track", "PageView");
      pageViewSent.current = true;
    }

    const sentTimes = new Set<number>();
    const sentDepths = new Set<number>();
    let formStarted = false;
    const timers = [15, 30, 60].map((seconds) => window.setTimeout(() => {
      if (sentTimes.has(seconds)) return;
      sentTimes.add(seconds);
      window.fbq?.("trackCustom", "TimeOnPage", { seconds });
    }, seconds * 1000));

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const percent = Math.min(100, Math.round((window.scrollY / total) * 100));
      for (const depth of [25, 50, 75, 90]) {
        if (percent >= depth && !sentDepths.has(depth)) {
          sentDepths.add(depth);
          window.fbq?.("trackCustom", "ScrollDepth", { percent: depth });
        }
      }
    };
    const onFormStart = (event: Event) => {
      if (formStarted || !(event.target instanceof Element) || !event.target.closest("#inscricao form")) return;
      formStarted = true;
      window.fbq?.("trackCustom", "FormStart");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("input", onFormStart);
    return () => {
      timers.forEach(window.clearTimeout);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("input", onFormStart);
    };
  }, [consent]);

  function chooseConsent(next: Exclude<Consent, null>) {
    try { window.localStorage.setItem(CONSENT_KEY, next); } catch { /* The choice still applies for this page view. */ }
    if (next === "rejected") {
      window.fbq?.("consent", "revoke");
      setConsent("rejected");
      return;
    }
    setConsent("accepted");
  }

  if (!PIXEL_ID) return null;
  if (consent === null) return <aside className="consent-banner" aria-label="Preferências de cookies">
    <div className="consent-copy"><strong>Privacidade e mensuração</strong><p>Usamos cookies de marketing da Meta para medir visitas, navegação e interações com o formulário. Eles só são ativados se você aceitar. Não enviamos os dados preenchidos no formulário à Meta.</p></div>
    <div className="consent-actions"><button type="button" className="consent-button consent-reject" onClick={() => chooseConsent("rejected")}>Recusar</button><button type="button" className="consent-button consent-accept" onClick={() => chooseConsent("accepted")}>Aceitar</button></div>
  </aside>;
  return <button type="button" className="consent-settings" onClick={() => setConsent(null)}>Preferências de privacidade</button>;
}
