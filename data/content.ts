export const WHATSAPP_NUMBER = "553183696708";

export function whatsappUrl(message = "Olá! Quero saber mais sobre o EJA da Educa Mais.") {
  const query = `?text=${encodeURIComponent(message)}`;
  return `https://wa.me/${WHATSAPP_NUMBER}${query}`;
}

export const benefits = [
  { icon: "monitor", title: "Processo online", text: "Converse com a equipe e organize sua jornada de onde estiver." },
  { icon: "clock", title: "Cabe na sua rotina", text: "Estude com mais autonomia, sem deixar seus outros compromissos de lado." },
  { icon: "heart", title: "Orientação de verdade", text: "Receba explicações claras para entender cada etapa antes de começar." },
  { icon: "check", title: "Um passo de cada vez", text: "Material, videoaulas e avaliações organizados para facilitar seu avanço." },
] as const;

export const documents = [
  "RG",
  "CPF",
  "Certidão de nascimento ou casamento",
  "Certificado de conclusão do Ensino Fundamental, caso possua",
  "Histórico escolar do Ensino Fundamental, caso possua",
  "Comprovante de escolaridade da última instituição",
] as const;

export const faqs = [
  { question: "O EJA é para Ensino Fundamental ou Ensino Médio?", answer: "Você pode buscar orientação para as duas modalidades. No formulário, selecione a que deseja concluir para receber informações mais adequadas." },
  { question: "Em quanto tempo posso concluir?", answer: "A oferta destaca a possibilidade de conclusão em 7 dias. O prazo depende da análise da sua situação escolar, documentação e condições da matrícula. Converse com a equipe para confirmar o que se aplica ao seu caso." },
  { question: "Qual é o valor?", answer: "A oferta apresentada é de 10 parcelas de R$ 49 ou R$ 497 à vista no Pix ou boleto. Confirme as condições vigentes com a equipe antes de se matricular." },
  { question: "Posso pagar no Pix ou boleto?", answer: "Sim. A opção à vista informada é de R$ 497 no Pix ou boleto. A equipe explica as formas de pagamento disponíveis durante o atendimento." },
  { question: "Como funciona o processo?", answer: "Você entra em contato, escolhe a modalidade, recebe orientações sobre documentos e matrícula e segue pelas disciplinas com material, videoaulas e avaliação online." },
  { question: "Quais documentos são necessários?", answer: "RG, CPF, certidão de nascimento ou casamento e comprovante de escolaridade da última instituição. Certificado e histórico do Ensino Fundamental também ajudam, caso você os possua. Envie os documentos digitalizados ou escaneados." },
  { question: "O atendimento é pelo WhatsApp?", answer: "Sim. Preencha o formulário para abrir uma conversa com a equipe no WhatsApp. Seus dados chegam à equipe quando você envia a mensagem." },
] as const;
