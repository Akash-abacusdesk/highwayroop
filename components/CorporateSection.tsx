import { Counter } from './about/Stats'
const CAPABILITY_DETAIL = [
  ['Product development', 'Product engineering, precision tooling and process expertise support development from concept through industrialisation.', 'about/product-engineering'],
  ['Manufacturing control', 'Integrated forging, machining, casting, heat treatment, coating, assembly and testing support consistent production.', 'cap-manufacturing-control'],
  ['Quality by design', 'Metrology, metallurgy, functional testing and in-house calibration capabilities reinforce quality across the production cycle.', 'cap-quality'],
]

// Full-width stats strip shown directly under the homepage hero.
export function ProofStats() {
  return (
    <section className="scale home-scale" aria-label="Highway Roop at a glance">
      <div className="shell stats-grid">
        <article>
          <Counter as="strong" value="5" />
          <span>Decades of combined<br />engineering legacy</span>
        </article>
        <article>
          <Counter as="strong" value="14" />
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
      </div>
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
            <h2>From capability to customer value</h2>
          </div>
        </div>

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
