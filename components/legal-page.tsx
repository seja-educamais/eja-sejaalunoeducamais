import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  summary: string;
  children: ReactNode;
};

export function LegalPage({ title, summary, children }: LegalPageProps) {
  return <>
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <header className="site-header">
      <div className="container flex h-[76px] items-center justify-between gap-5">
        <Link href="/" className="brand" aria-label="Educa Mais EJA, voltar à página inicial">
          <Image src="/brand/educa-plus-logo.png" alt="Educa+" width={843} height={301} className="brand-logo" priority />
          <span className="brand-eja">EJA</span>
        </Link>
        <Link href="/" className="header-cta">Voltar à página inicial</Link>
      </div>
    </header>
    <main id="conteudo" tabIndex={-1} className="legal-main">
      <div className="container legal-container">
        <p className="eyebrow text-[#b62080]">EDUCA MAIS EJA</p>
        <h1 className="legal-title">{title}</h1>
        <p className="legal-summary">{summary}</p>
        <p className="legal-updated">Última atualização: 9 de outubro de 2026</p>
        <div className="legal-content">{children}</div>
      </div>
    </main>
    <footer className="legal-footer">
      <div className="container legal-footer-inner">
        <p>© 2026 Educa Mais EJA</p>
        <nav aria-label="Documentos legais" className="legal-footer-links">
          <Link href="/">Página inicial</Link>
          <Link href="/termos-de-uso">Termos de uso</Link>
          <Link href="/politica-de-privacidade">Política de privacidade</Link>
        </nav>
      </div>
    </footer>
  </>;
}
