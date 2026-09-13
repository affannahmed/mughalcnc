import { useReveal } from '../hooks'
import { site } from '../data/site'

export default function Testimonial() {
  const ref = useReveal()

  return (
    <section className="section">
      <div className="container">
        <div className="testimonial reveal" ref={ref}>
          <blockquote>
            "The finishing was clean, accurate, and exactly according to my requirements."
          </blockquote>
          <cite>Google review — {site.gbpName}</cite>
        </div>
      </div>
    </section>
  )
}
