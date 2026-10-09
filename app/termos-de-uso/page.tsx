import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Termos de Uso | Educa Mais EJA",
  description: "Condições de uso da landing page de EJA da Educa Mais e informações sobre o contato pelo formulário e WhatsApp.",
  alternates: { canonical: "/termos-de-uso" },
  openGraph: {
    title: "Termos de Uso | Educa Mais EJA",
    description: "Condições de uso da landing page de EJA da Educa Mais.",
    url: "/termos-de-uso",
    type: "website",
    locale: "pt_BR",
  },
};

export default function TermsPage() {
  return <LegalPage title="Termos de Uso" summary="Condições para consultar esta página e iniciar contato sobre o EJA da Educa Mais.">
    <section>
      <h2>1. Objetivo da página</h2>
      <p>Esta landing page apresenta informações sobre as modalidades de EJA Ensino Fundamental e Médio divulgadas pela Educa Mais e oferece um formulário para iniciar atendimento pelo WhatsApp. O conteúdo é informativo e pode ser atualizado.</p>
    </section>
    <section>
      <h2>2. Informações sobre matrícula e oferta</h2>
      <p>O preenchimento do formulário e a abertura do WhatsApp <strong>não concluem matrícula, contratação ou pagamento</strong>. A equipe deve confirmar a modalidade adequada, os requisitos, a documentação, a disponibilidade, os valores e as condições aplicáveis antes de qualquer contratação.</p>
      <p>O prazo de conclusão divulgado na página depende da análise da situação escolar, dos documentos e das condições de matrícula. Ele não constitui garantia individual de conclusão ou emissão de certificado em prazo fixo. Informações definitivas sobre o curso e seus documentos são prestadas na etapa de atendimento e contratação.</p>
    </section>
    <section>
      <h2>3. Uso do formulário</h2>
      <p>Informe dados verdadeiros e pertinentes ao pedido de orientação. O formulário prepara uma mensagem com nome, idade e modalidade escolhida no seu navegador. Cabe a você revisar e enviar a mensagem no WhatsApp para que a equipe receba o contato. Não envie dados de terceiros sem autorização.</p>
    </section>
    <section>
      <h2>4. Serviços de terceiros</h2>
      <p>O contato é aberto no WhatsApp, serviço operado por terceiros e sujeito aos termos e à política de privacidade próprios. O funcionamento da plataforma, sua disponibilidade e a entrega da mensagem dependem desse serviço. A página também usa o Pixel da Meta para mensuração somente após a aceitação dos cookies de marketing.</p>
    </section>
    <section>
      <h2>5. Conteúdo e uso adequado</h2>
      <p>Textos, imagens, marca e demais elementos desta página destinam-se à consulta sobre a oferta da Educa Mais. Não use o site para enviar informações falsas, tentar comprometer seu funcionamento ou reproduzir materiais protegidos sem autorização.</p>
    </section>
    <section>
      <h2>6. Privacidade</h2>
      <p>O tratamento de dados nesta página é explicado na <Link href="/politica-de-privacidade">Política de Privacidade</Link>. A escolha de cookies de marketing é separada do uso da página e pode ser alterada nas Preferências de privacidade.</p>
    </section>
    <section>
      <h2>7. Alterações e contato</h2>
      <p>Estes termos podem ser atualizados quando a página, a oferta ou as práticas de atendimento mudarem. A data acima identifica a versão publicada. Para dúvidas, escreva para <a href="mailto:contato@educamais.com.br">contato@educamais.com.br</a>.</p>
    </section>
  </LegalPage>;
}
