import { ArrowRight } from 'lucide-react'
import { Counter } from './about/Stats'
const CAPABILITY_DETAIL = [
  ['Product development', 'Product engineering, precision tooling and process expertise support development from concept through industrialisation.', 'cap-product-development'],
  ['Manufacturing control', 'Integrated forging, machining, casting, heat treatment, coating, assembly and testing support consistent production.', 'cap-manufacturing-control'],
  ['Quality by design', 'Metrology, metallurgy, functional testing and in-house calibration capabilities reinforce quality across the production cycle.', 'cap-quality'],
]

// Full-width stats strip shown directly under the homepage hero.
export function ProofStats() {
  return (
    <section className="corporate-proof home-proof" aria-label="Corporate operating highlights">
      <article>
        <Counter as="strong" value="5" />
        <span>Decades of combined<br />engineering legacy</span>
      </article>
      <article>
        <Counter as="strong" value="15" />
        <span>Manufacturing<br />plants</span>
      </article>
      <article>
        <Counter as="strong" value="14" />
        <span>Warehouses</span>
      </article>
      <article>
        <Counter as="strong" value="50+" />
        <span>OEM and Tier-1<br />relationships</span>
      </article>
    </section>
  )
}

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
            <a className="text-link accent corporate-cta" href="/about">
              Explore corporate information <span><ArrowRight size={18} aria-hidden="true" /></span>
            </a>
          </div>
        </div>

        <h2 className="corporate-proof-title reveal">From capability to customer value.</h2>
        <div className="corporate-caps">
          {CAPABILITY_DETAIL.map(([label, text, image], i) => (
            <article className="reveal" key={label}>
              <div className="corporate-cap-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src={`/assets/${image}.webp`} alt="" />
              </div>
              <div className="corporate-cap-body">
                <span>0{i + 1}</span>
                <h3>{label}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
