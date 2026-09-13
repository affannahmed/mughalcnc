import { Check, Star } from 'lucide-react'
import { whyChooseUs } from '../data/services'
import { site } from '../data/site'
import { useReveal } from '../hooks'

export default function WhyChooseUs() {
  const headRef = useReveal()

  return (
    <section id="why-us" className="section section--dark">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <p className="eyebrow-label">Why choose us</p>
          <h2>Built on precision, not promises</h2>
        </div>

        <div className="why-grid">
          <ul className="why-list">
            {whyChooseUs.map((item) => (
              <li key={item}>
                <Check size={19} /> {item}
              </li>
            ))}
          </ul>

          <div className="rating-card">
            <div className="rating-card__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="rating-card__value">{site.rating.value} ★</p>
            <p className="rating-card__note">
              Google rating based on {site.rating.count} reviews on our Google Business Profile,{' '}
              {site.gbpName}.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
