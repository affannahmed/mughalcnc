import { MessageCircle, ArrowRight } from 'lucide-react'
import { site, whatsappUrl } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__content">
        <div className="hero__grid">
          <div>
            <p className="hero__trust">Custom CNC Woodwork &nbsp;•&nbsp; {site.city}</p>
            <h1>Precision Carving. Timeless Woodwork.</h1>
            <p className="hero__sub">
              CNC wood carving, custom doors, decorative panels, jali designs and detailed 2D/3D
              woodwork, made to order in {site.city}.
            </p>
            <div className="hero__actions">
              <a href="#gallery" className="btn btn--outline-dark">
                View Our Work <ArrowRight size={17} />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn--brass">
                <MessageCircle size={17} /> Get a Quote on WhatsApp
              </a>
            </div>
          </div>

          <div className="hero__panel">
            <p className="hero__panel-label">Call or WhatsApp</p>
            <p className="hero__panel-phone">{site.phoneDisplay}</p>
            <p className="hero__panel-note">{site.address.full}</p>
          </div>
        </div>
      </div>
    </section>
  )
}