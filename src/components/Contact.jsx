import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import { site, whatsappUrl, telUrl, mailUrl } from '../data/site'
import { useReveal } from '../hooks'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="section section--tint">
      <div className="container contact__grid">
        <div className="contact reveal" ref={ref}>
          <p className="eyebrow-label">Get in touch</p>
          <h2>Have a Design in Mind?</h2>
          <p style={{ marginTop: '1.25rem', color: 'var(--text-muted)', maxWidth: '48ch', fontSize: '1.05rem' }}>
            Tell us about your door, panel, jali or custom carving project and we'll help you plan it
            out — sizes, wood type and pattern.
          </p>
          <div className="contact__actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn--brass">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a href={telUrl} className="btn btn--outline-light">
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card__row">
            <Phone size={19} />
            <div>
              <strong>Phone / WhatsApp</strong>
              <a href={telUrl}>{site.phoneDisplay}</a>
            </div>
          </div>
          <div className="contact-card__row">
            <Mail size={19} />
            <div>
              <strong>Email</strong>
              <a href={mailUrl}>{site.email}</a>
            </div>
          </div>
          <div className="contact-card__row">
            <MapPin size={19} />
            <div>
              <strong>Workshop</strong>
              <span>{site.address.full}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
