import type { SVGProps } from "react";

type Name = "arrow" | "arrow-up" | "check" | "clock" | "heart" | "menu" | "monitor" | "play" | "shield" | "spark" | "whatsapp" | "book" | "file" | "headset";

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: Name }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "whatsapp") return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M12.04 2a9.93 9.93 0 0 0-8.55 15.02L2 22l5.12-1.34A9.96 9.96 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.04.8.81-2.96-.2-.31A8.14 8.14 0 1 1 12.04 20.1Zm4.47-6.09c-.24-.12-1.45-.72-1.67-.8-.23-.08-.39-.12-.55.12-.16.24-.63.8-.77.97-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 1.99s.86 2.3.98 2.46c.12.16 1.69 2.58 4.1 3.62.58.25 1.03.4 1.38.5.58.18 1.11.15 1.53.09.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/></svg>;
  const paths: Record<Exclude<Name, "whatsapp">, React.ReactNode> = {
    arrow: <><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></>,
    "arrow-up": <><path d="M7 17 17 7"/><path d="M8 7h9v9"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    heart: <path d="M20.8 9.1c0 4.5-8.8 10-8.8 10s-8.8-5.5-8.8-10a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    monitor: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>,
    play: <><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/></>,
    shield: <><path d="m12 2 8 4v6c0 5-3.2 8-8 10-4.8-2-8-5-8-10V6l8-4Z"/><path d="m9 12 2 2 4-4"/></>,
    spark: <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2ZM19 17l.7 1.3L21 19l-1.3.7L19 21l-.7-1.3L17 19l1.3-.7L19 17Z"/></>,
    book: <><path d="M12 6c-2.6-1.6-5.7-1.7-9-1v13c3.3-.7 6.4-.6 9 1 2.6-1.6 5.7-1.7 9-1V5c-3.3-.7-6.4-.6-9 1Z"/><path d="M12 6v13"/></>,
    file: <><path d="M6 2h8l4 4v16H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M14 2v5h5M8 12h8M8 16h8"/></>,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="13" width="4" height="7" rx="2"/><rect x="18" y="13" width="4" height="7" rx="2"/><path d="M20 20c0 2-3 3-6 3h-2"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}>{paths[name]}</svg>;
}
