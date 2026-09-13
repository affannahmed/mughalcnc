import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/site'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-float__icon">
        <MessageCircle size={20} />
      </span>
      <span className="whatsapp-float__text">Chat on WhatsApp</span>
    </a>
  )
}
