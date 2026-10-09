import type { Metadata, Viewport } from "next";
import { MetaPixel } from "@/components/meta-pixel";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "EJA Ensino Médio e Fundamental | Educa Mais",
  description: "Conclua seus estudos com orientação e praticidade. Conheça o EJA Ensino Médio e Fundamental da Educa Mais, a oferta de conclusão em 7 dias e as condições de pagamento.",
  keywords: ["EJA", "EJA Ensino Médio", "EJA Ensino Fundamental", "EJA online", "concluir estudos", "terminar Ensino Médio", "terminar Ensino Fundamental"],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Seu próximo capítulo começa aqui | EJA Educa Mais",
    description: "Retome seus estudos com praticidade e orientação. Conheça a oferta do EJA Educa Mais.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    images: [{ url: "/images/hero-estudos.webp", width: 1672, height: 941, alt: "Livros e caderno aberto em uma mesa de estudos" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a1735" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}<MetaPixel /></body></html>;
}
