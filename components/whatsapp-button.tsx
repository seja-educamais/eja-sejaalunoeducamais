import { whatsappUrl } from "@/data/content";
import { Icon } from "./icon";

export function WhatsAppButton() {
  return <a className="whatsapp-float" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Educa Mais no WhatsApp">
    <Icon name="whatsapp" className="h-5 w-5" />
    <span>Falar no WhatsApp</span>
  </a>;
}
