import { services } from '../data/services'
import { useReveal } from '../hooks'
import SafeImage from './SafeImage'

export default function Services() {
  const headRef = useReveal()

  return (
    <section id="services" className="section section--dark">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <p className="eyebrow-label">What we build</p>
          <h2>Services</h2>
          <p>From a single engraved panel to a full set of doors, every job is cut and finished in-house.</p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <div className="service-row" key={service.id}>
              <span className="service-row__number">{service.number}</span>
              <div>
                <h3 className="service-row__title">{service.title}</h3>
                <p className="service-row__desc">{service.description}</p>
              </div>
              <div className="service-row__thumb">
                <SafeImage src={service.image} alt={service.title} wrapperClassName="service-row__thumb" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
