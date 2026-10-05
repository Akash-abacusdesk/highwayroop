import { ArrowRight } from 'lucide-react'
const CAPABILITY_DETAIL = [
  ['PRODUCT DEVELOPMENT', 'Product engineering, precision tooling and process expertise support development from concept through industrialisation.'],
  ['MANUFACTURING CONTROL', 'Integrated forging, machining, casting, heat treatment, coating, assembly and testing support consistent production.'],
  ['QUALITY BY DESIGN', 'Metrology, metallurgy, functional testing and in-house calibration capabilities reinforce quality across the production cycle.'],
]

export default function CorporateSection() {
  return (
    <section className="section corporate-overview" id="corporate">
      <div className="shell">
        <div className="section-head reveal">
          <div className="section-kicker">
            <p>Corporate overview</p>
          </div>
          <div>
            <h2>Different strengths. A common direction.</h2>
            <p>
              Highway Roop brings established automotive businesses together through a common operating framework,
              combining specialist manufacturing capabilities with engineering, tooling, quality and customer proximity.
            </p>
            <a className="text-link accent corporate-cta" href="/about/group-structure">
              Explore corporate information <span><ArrowRight size={18} aria-hidden="true" /></span>
            </a>
          </div>
        </div>

        <h2 className="corporate-proof-title reveal">From capability to customer value.</h2>
        <div className="corporate-proof reveal" aria-label="Corporate operating highlights">
          <article>
            <strong>50+</strong>
            <span>Years of combined<br />engineering legacy</span>
          </article>
          <article>
            <strong>15</strong>
            <span>Manufacturing<br />plants</span>
          </article>
          <article>
            <strong>14</strong>
            <span>Warehouses</span>
          </article>
          <article>
            <strong>50+</strong>
            <span>OEM and Tier-1<br />relationships</span>
          </article>
        </div>

        <div className="corporate-pillars corporate-pillars-row">
          {CAPABILITY_DETAIL.map(([label, text]) => (
            <article className="reveal" key={label}>
              <span>{label}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
