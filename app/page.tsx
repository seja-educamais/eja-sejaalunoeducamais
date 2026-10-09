import Image from "next/image";
import { Icon } from "@/components/icon";
import { LeadForm } from "@/components/lead-form";
import { Motion } from "@/components/motion";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { benefits, documents, faqs, whatsappUrl } from "@/data/content";

const whatsapp = whatsappUrl();

function Brand() {
  return <a href="#inicio" className="brand" aria-label="Educa Mais, voltar ao início">
    <Image src="/brand/educa-plus-logo.png" alt="Educa+" width={843} height={301} className="brand-logo" priority />
    <span className="brand-eja">EJA</span>
  </a>;
}

function SectionHeading({ label, title, text }: { label: string; title: string; text?: string }) {
  return <div data-reveal className="max-w-[690px]">
    <p className="eyebrow text-[#c3298b]">{label}</p>
    <h2 className="section-title mt-3 text-[#0d1b3b]">{title}</h2>
    {text && <p className="section-copy mt-5 text-[#596882]">{text}</p>}
  </div>;
}

export default function Page() {
  return <>
    <Motion />
    <header className="site-header">
      <div className="container flex h-[76px] items-center justify-between gap-5">
        <Brand />
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#d4def3] lg:flex" aria-label="Navegação principal">
          <a href="#beneficios" className="nav-link">Benefícios</a>
          <a href="#documentos" className="nav-link">Documentos</a>
          <a href="#duvidas" className="nav-link">Dúvidas</a>
        </nav>
        <a href="#inscricao" className="header-cta">Começar agora <Icon name="arrow-up" className="h-4 w-4" /></a>
      </div>
    </header>

    <main>
      <section id="inicio" className="hero">
        <Image src="/images/hero-estudos.webp" alt="" fill priority sizes="100vw" className="hero-background" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p data-hero className="hero-kicker">EJA ENSINO FUNDAMENTAL E MÉDIO</p>
            <h1 data-hero className="hero-title">Você pode concluir seu EJA <em>em 7 dias.</em></h1>
            <p data-hero className="hero-subtitle">Retome seus planos com estudo online e orientação em cada etapa.</p>
            <div data-hero className="hero-offer">
              <div><span>Parcele em</span><strong>10x de R$ 49</strong></div>
              <div><span>Ou à vista no Pix ou boleto</span><strong>R$ 497</strong></div>
            </div>
            <a data-hero className="button button-primary hero-copy-cta" href="#inscricao">Quero começar agora <Icon name="arrow" className="h-5 w-5" /></a>
            <p data-hero className="hero-disclaimer">*Prazo sujeito à análise da situação escolar, documentação e condições de matrícula. Confirme com a equipe.</p>
          </div>
          <div data-hero className="hero-form-wrap"><LeadForm /></div>
        </div>
      </section>

      <section id="beneficios" className="section-pad bg-[#f7f9fd]">
        <div className="container">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionHeading label="FEITO PARA A VIDA REAL" title="Voltar a estudar pode ser mais leve do que você pensa." text="Se a rotina é corrida, você precisa de um caminho claro. Aqui, cada etapa foi pensada para ajudar você a seguir em frente." />
            <a href="#inscricao" className="inline-flex shrink-0 items-center gap-2 font-bold text-[#b32083] hover:text-[#891660]">Comece hoje <Icon name="arrow" className="h-5 w-5" /></a>
          </div>
          <div className="mt-11 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item, index) => <article data-reveal key={item.title} className="benefit-card">
              <span className={`benefit-icon ${index === 1 ? "benefit-icon-pink" : ""}`}><Icon name={item.icon} className="h-6 w-6" /></span>
              <h3 className="mt-7 text-xl font-bold tracking-[-.035em] text-[#0d1b3b]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#61708a]">{item.text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="documentos" className="section-pad bg-[#f7f9fd]">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div><SectionHeading label="TUDO MAIS CLARO" title="Os documentos para começar, sem adivinhação." text="Separe os itens abaixo para receber orientação sobre a matrícula. A equipe ajuda você a entender o que se aplica à sua situação." /><div data-reveal className="mt-8 flex items-start gap-3 rounded-2xl bg-[#e9effb] p-5 text-sm leading-6 text-[#263e70]"><Icon name="file" className="mt-0.5 h-6 w-6 shrink-0" /><p>Os documentos devem ser enviados <strong>digitalizados ou escaneados</strong>, de forma legível.</p></div></div>
          <div data-reveal className="document-card"><h3 className="text-xl font-bold tracking-[-.035em] text-[#0d1b3b]">Checklist de documentos</h3><ul className="mt-6 grid gap-0">{documents.map((item) => <li key={item} className="document-item"><span><Icon name="check" className="h-4 w-4" /></span>{item}</li>)}</ul></div>
        </div>
      </section>

      <section id="investimento" className="section-pad bg-white">
        <div className="container grid gap-9 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
          <SectionHeading label="SEU PRÓXIMO PASSO" title="Um investimento no que vem pela frente." text="Conheça a oferta e tire suas dúvidas antes de tomar sua decisão. A equipe pode explicar as condições para sua modalidade." />
          <div data-reveal className="price-card"><div className="flex items-center justify-between gap-4"><p className="eyebrow text-[#b62080]">EJA EDUCA MAIS</p><Icon name="spark" className="h-6 w-6 text-[#be288c]" /></div><p className="mt-7 text-sm text-[#66738b]">Parcele em</p><p className="mt-1 text-[3.7rem] font-bold leading-none tracking-[-.065em] text-[#0d1b3b]">10x de R$ 49</p><div className="my-7 h-px bg-[#e4e9f1]"/><p className="text-lg font-semibold text-[#0d1b3b]">ou R$ 497 à vista <span className="font-normal text-[#60708b]">no Pix ou boleto</span></p><a href="#inscricao" className="button button-primary mt-7 w-full justify-center">Tenho interesse <Icon name="arrow" className="h-5 w-5" /></a><p className="mt-4 text-center text-xs leading-5 text-[#718097]">Consulte elegibilidade, prazo e condições com a equipe.</p></div>
        </div>
      </section>

      <section id="duvidas" className="section-pad bg-[#f7f9fd]">
        <div className="container grid gap-9 lg:grid-cols-[.76fr_1.24fr] lg:gap-20">
          <div><SectionHeading label="DÚVIDAS FREQUENTES" title="Respostas para você seguir com confiança." text="Se ainda restar alguma pergunta, nossa equipe pode conversar com você pelo WhatsApp." /><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="button button-outline mt-8">Tirar dúvidas no WhatsApp <Icon name="arrow-up" className="h-5 w-5" /></a></div>
          <div data-reveal className="faq-list">{faqs.map((item) => <details key={item.question} className="faq-item"><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta bg-[#0c1a3d] py-20 text-center text-white sm:py-24"><div className="container"><p data-reveal className="eyebrow text-[#ff91cd]">SEU RECOMEÇO PODE SER AGORA</p><h2 data-reveal className="mx-auto mt-4 max-w-[850px] text-4xl font-bold leading-[1.12] tracking-[-.055em] sm:text-5xl">O próximo capítulo da sua vida espera por você.</h2><p data-reveal className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-[#cad5ec]">Comece com uma conversa. Entenda suas opções e descubra o caminho para concluir seus estudos.</p><div data-reveal className="mt-8 flex flex-wrap justify-center gap-3"><a href="#inscricao" className="button button-primary">Quero começar <Icon name="arrow" className="h-5 w-5" /></a><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="button button-light-outline"><Icon name="whatsapp" className="h-5 w-5" /> Falar no WhatsApp</a></div></div></section>
    </main>

    <footer className="bg-[#09132b] py-9 text-[#9caac7]"><div className="container flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><Brand /><p className="text-sm">Educa Mais EJA. Um passo de cada vez, rumo ao seu futuro.</p><a href="#inicio" className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-[#ff91cd]">Voltar ao início <Icon name="arrow-up" className="h-4 w-4" /></a></div></footer>
    <WhatsAppButton />
  </>;
}
