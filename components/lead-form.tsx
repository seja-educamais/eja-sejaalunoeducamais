"use client";

import { useState, type FormEvent } from "react";
import { whatsappUrl } from "@/data/content";
import { Icon } from "./icon";
import { trackMetaEvent } from "@/lib/meta-tracking";

type Values = { name: string; course: string; age: string };

export function LeadForm() {
  const [values, setValues] = useState<Values>({ name: "", course: "", age: "" });
  const [submitted, setSubmitted] = useState(false);
  const [conversationUrl, setConversationUrl] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const age = Number(values.age);
    if (!Number.isInteger(age) || age < 1 || age > 120) return;

    const message = `Olá! Tenho interesse no EJA da Educa Mais. Meu nome é ${values.name.trim()}, tenho ${age} anos e quero informações sobre ${values.course}.`;
    trackMetaEvent("Lead");
    trackMetaEvent("Contact");
    const url = whatsappUrl(message);
    setConversationUrl(url);
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return <div className="form-card" id="inscricao">
    <div className="form-card-heading">
      <span className="form-card-icon"><Icon name="spark" className="h-5 w-5" /></span>
      <div>
        <p className="eyebrow text-[#bc1d83]">COMECE POR AQUI</p>
        <h2 className="form-card-title">Comece seu EJA</h2>
      </div>
    </div>
    <p className="form-card-copy">Preencha os dados para conversar com a equipe.</p>
    <form onSubmit={submit} className="lead-fields">
      <div>
        <label htmlFor="name" className="field-label">Seu nome</label>
        <input id="name" name="name" autoComplete="name" className="field" placeholder="Como podemos chamar você?" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} required minLength={2} maxLength={80} />
      </div>
      <div className="form-field-pair">
        <div>
          <label htmlFor="course" className="field-label">Modalidade</label>
          <select id="course" name="course" className="field" value={values.course} onChange={(e) => setValues({ ...values, course: e.target.value })} required>
            <option value="">Selecione</option>
            <option value="EJA Ensino Médio">Ensino Médio</option>
            <option value="EJA Ensino Fundamental">Ensino Fundamental</option>
          </select>
        </div>
        <div>
          <label htmlFor="age" className="field-label">Idade</label>
          <input id="age" name="age" inputMode="numeric" type="number" min="1" max="120" className="field" placeholder="Ex.: 28" value={values.age} onChange={(e) => setValues({ ...values, age: e.target.value })} required />
        </div>
      </div>
      <button type="submit" className="button button-primary w-full justify-center">Conversar sobre meu EJA <Icon name="arrow" className="h-5 w-5" /></button>
    </form>
    {submitted && <div role="status" className="mt-4 rounded-xl bg-[#eaf8f1] p-3 text-sm leading-5 text-[#11573b]">Tudo pronto! Envie a mensagem no WhatsApp para que a equipe receba seus dados. <a href={conversationUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">Abrir conversa novamente</a>.</div>}
    <p className="form-privacy">Você escolhe enviar seus dados pelo WhatsApp.</p>
  </div>;
}
