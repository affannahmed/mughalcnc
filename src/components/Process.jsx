import { process } from '../data/services'
import { useReveal } from '../hooks'

export default function Process() {
  const headRef = useReveal()

  return (
    <section id="process" className="section section--tint">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <p className="eyebrow-label">How it works</p>
          <h2>From idea to installation</h2>
          <p>A straightforward process so you know what to expect at every stage.</p>
        </div>

        <div className="process-line">
          {process.map((step) => (
            <div className="process-step" key={step.number}>
              <span className="process-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
