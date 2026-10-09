import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de Privacidade | Educa Mais EJA",
  description: "Entenda como a landing page de EJA da Educa Mais trata dados do formulário, WhatsApp e cookies de marketing.",
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: {
    title: "Política de Privacidade | Educa Mais EJA",
    description: "Como a landing page de EJA trata dados do formulário, WhatsApp e cookies de marketing.",
    url: "/politica-de-privacidade",
    type: "website",
    locale: "pt_BR",
  },
};

export default function PrivacyPage() {
  return <LegalPage title="Política de Privacidade" summary="Como tratamos os dados ao visitar esta página e iniciar uma conversa sobre o EJA da Educa Mais.">
    <section>
      <h2>1. A quem esta política se aplica</h2>
      <p>Esta política se aplica à landing page <strong>eja.sejaalunoeducamais.com.br</strong>, mantida pela Educa Mais para apresentar o EJA Ensino Fundamental e Médio e facilitar o contato com a equipe. Outros sites, plataformas de ensino e etapas de matrícula podem ter avisos próprios.</p>
    </section>
    <section>
      <h2>2. Dados informados por você</h2>
      <p>O formulário desta página pede <strong>nome, idade e modalidade de interesse</strong>. Esses dados são usados no seu navegador para preparar uma mensagem ao WhatsApp oficial da Educa Mais. O formulário desta página não grava esses campos em um banco de dados próprio e não os envia à Meta como parâmetros dos eventos.</p>
      <p>Ao clicar em “Conversar sobre meu EJA”, o navegador abre o WhatsApp com a mensagem preenchida. A equipe recebe os dados quando você envia essa mensagem. A abertura do link também pode compartilhar a URL da conversa com o WhatsApp, conforme as práticas da plataforma.</p>
    </section>
    <section>
      <h2>3. Para que usamos os dados</h2>
      <ul>
        <li>Responder ao seu pedido de informação e orientar sobre modalidade, documentos, condições e matrícula.</li>
        <li>Dar continuidade ao atendimento que você iniciar pelo WhatsApp.</li>
        <li>Manter a segurança e o funcionamento do site, inclusive por meio de registros técnicos de acesso mantidos pela infraestrutura.</li>
        <li>Com sua escolha de aceitar cookies de marketing, medir visitas e interações para avaliar campanhas da Educa Mais.</li>
      </ul>
    </section>
    <section>
      <h2>4. Cookies e eventos da Meta</h2>
      <p>Guardamos no navegador sua escolha sobre cookies de marketing. O Pixel da Meta só é carregado depois que você seleciona “Aceitar”. Nesse caso, ele pode registrar visualização da página, tempo de permanência, profundidade de rolagem, início de preenchimento e envio válido do formulário. Os eventos não incluem o nome, a idade, a modalidade escolhida ou o texto da mensagem.</p>
      <p>A Meta pode tratar identificadores e dados técnicos de navegação, como cookies, endereço IP e informações do dispositivo, conforme suas próprias práticas. Você pode recusar os cookies de marketing e reabrir as <strong>Preferências de privacidade</strong> para mudar sua escolha a qualquer momento. A recusa não impede o uso do formulário.</p>
    </section>
    <section>
      <h2>5. Compartilhamento e armazenamento</h2>
      <p>O site usa serviços de hospedagem e infraestrutura necessários à sua operação. Se você abrir a conversa ou enviar a mensagem, o WhatsApp processará os dados envolvidos nesse contato. Quando houver consentimento para marketing, a Meta receberá os eventos e dados técnicos descritos acima. Não vendemos os dados informados no formulário.</p>
      <p>Esta página não mantém um histórico próprio dos campos preenchidos. Mensagens efetivamente enviadas no WhatsApp e registros técnicos da infraestrutura seguem os prazos aplicáveis ao atendimento, à segurança, às obrigações legais e às políticas dos respectivos serviços. Para solicitar informações sobre um atendimento ou a exclusão de dados sob nossa responsabilidade, use o contato abaixo.</p>
    </section>
    <section>
      <h2>6. Seus direitos</h2>
      <p>Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode solicitar informações sobre o tratamento dos seus dados, confirmação e acesso, correção de dados incorretos, anonimização, bloqueio ou eliminação quando cabíveis, informação sobre compartilhamentos e revogação do consentimento. Podemos solicitar dados adicionais para confirmar sua identidade antes de atender a um pedido.</p>
    </section>
    <section>
      <h2>7. Segurança e alterações</h2>
      <p>Adotamos medidas razoáveis para proteger os dados tratados no atendimento e na operação do site, embora nenhum serviço conectado à internet seja totalmente isento de riscos. Esta política pode ser atualizada para refletir mudanças no site ou nas práticas de tratamento; a data acima indicará a versão em vigor.</p>
    </section>
    <section>
      <h2>8. Contato</h2>
      <p>Para dúvidas sobre esta política ou para exercer seus direitos, escreva para <a href="mailto:contato@educamais.com.br">contato@educamais.com.br</a>. Telefone de atendimento: <a href="tel:+553183696708">+55 31 8369-6708</a>.</p>
    </section>
  </LegalPage>;
}
