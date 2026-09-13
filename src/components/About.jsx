import { useReveal } from '../hooks'
import { aboutImage } from '../data/images'
import { site } from '../data/site'
import SafeImage from './SafeImage'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section">
      <div className="container about__grid">
        <div className="about__frame reveal" ref={ref}>
          <SafeImage src={aboutImage} alt={`Workshop craftsmanship at ${site.name}`} />
        </div>

        <div>
          <p className="eyebrow-label">About the workshop</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', marginBottom: '1.5rem' }}>
            A local CNC &amp; woodwork studio built on precision and finish
          </h2>
          <div className="about__copy">
            <p>
              {site.name} is a CNC wood carving and custom woodwork workshop based in {site.city},
              serving customers across {site.city} and Islamabad. We work on custom doors, decorative
              panels, jali designs and detailed carving, cut with CNC accuracy and finished by hand.
            </p>
            <p>
              Every piece is made to the customer's own measurements and design — whether that's a
              single carved panel or a full set of doors for a home. We handle the design, the CNC
              cutting and the finishing under one roof, so the work stays consistent from the first
              sketch to the final piece.
            </p>
          </div>

          <dl className="about__panel">
            <div className="about__panel-item">
              <dt>CNC</dt>
              <dd>Precision cutting</dd>
            </div>
            <div className="about__panel-item">
              <dt>2D / 3D</dt>
              <dd>Design &amp; carving</dd>
            </div>
            <div className="about__panel-item">
              <dt>Custom</dt>
              <dd>Made to your sizes</dd>
            </div>
            <div className="about__panel-item">
              <dt>Local</dt>
              <dd>{site.city} workshop</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
