import { Navigation } from 'lucide-react'
import { site } from '../data/site'

export default function Location() {
  return (
    <section className="section--dark" style={{ paddingTop: 0 }}>
      <div className="container" style={{ paddingBottom: 'clamp(4rem, 9vw, 7.5rem)' }}>
        <div className="location__grid">
          <iframe
            className="location__map"
            title={`${site.name} location map`}
            src={site.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="location__info">
            <h3>{site.gbpName}</h3>
            <p style={{ color: 'var(--text-light-muted)' }}>{site.address.full}</p>

            <div>
              {site.hours.map((h) => (
                <div className="location__hours-row" key={h.days}>
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>

            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.95rem' }}>{site.phoneDisplay}</p>

            <a href={site.mapsDirectionsUrl} target="_blank" rel="noreferrer" className="btn btn--brass" style={{ alignSelf: 'flex-start' }}>
              <Navigation size={17} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
