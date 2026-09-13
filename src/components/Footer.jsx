import { Facebook } from 'lucide-react'
import { site, telUrl, mailUrl } from '../data/site'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand-col">
          <p className="footer__brand">{site.name}</p>
          <p className="footer__tagline">CNC Wood Carving &amp; Custom Woodwork in {site.city}</p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            style={{ display: 'inline-flex', marginTop: '1.25rem' }}
          >
            <Facebook size={19} />
          </a>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={telUrl}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={mailUrl}>{site.email}</a>
            </li>
            <li>{site.address.line1}, {site.address.city}</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {site.name}. All rights reserved.</span>
        <span>Mon–Thu &amp; Sat–Sun 8:30 AM–9:00 PM · Fri 2:00 PM–9:00 PM</span>
      </div>
    </footer>
  )
}
