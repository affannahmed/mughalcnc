import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { useScrolled } from '../hooks'
import { site, telUrl } from '../data/site'
import { LOGO } from '../data/images'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Our Work' },
  { href: '#process', label: 'Process' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)
  const [logoFailed, setLogoFailed] = useState(false)

  const handleLinkClick = () => setOpen(false)

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
            {!logoFailed && (
              <img
                src={LOGO}
                alt={`${site.name} logo`}
                className="navbar__logo"
                onError={() => setLogoFailed(true)}
              />
            )}
            <span className="navbar__brand-text">
              {site.shortName}
              <span className="navbar__brand-sub">Wood Carving</span>
            </span>
          </a>

          <nav>
            <ul className="navbar__links">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__cta">
            <a className="navbar__phone" href={telUrl}>
              <Phone size={15} /> {site.phoneDisplay}
            </a>
            <a className="btn btn--brass" href="#contact">
              Get a Quote
            </a>
            <button
              className="navbar__toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Rendered as a sibling of <header>, not inside it — a filter/
          backdrop-filter on an ancestor creates a containing block for
          position:fixed descendants, which was trapping this panel
          inside the header's small box instead of covering the screen. */}
      <div className={`navbar__mobile ${open ? 'is-open' : ''}`}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn--brass" href="#contact" onClick={handleLinkClick}>
          Get a Quote
        </a>
      </div>
    </>
  )
}