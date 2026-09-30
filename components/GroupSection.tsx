import { ArrowRight } from 'lucide-react'
const businesses = [
  {
    name: 'Driveline',
    image: '/assets/advanced-forging.png',
    desc: 'Precision-forged and machined components engineered for demanding engine, transmission and driveline applications.',
    tags: [['#capabilities', 'Technology & Manufacturing'], ['#businesses', 'Products & Solutions'], ['#global', 'Services & Locations']],
  },
  {
    name: 'Steering & Suspension',
    image: '/assets/hero-precision.png',
    desc: 'Safety-critical components and assemblies designed for control, durability and consistent vehicle performance.',
    tags: [['#capabilities', 'Technology & Manufacturing'], ['#businesses', 'Products & Solutions'], ['#global', 'Services & Locations']],
  },
  {
    name: 'Lightweighting',
    image: '/assets/lightweighting-ev.png',
    desc: 'Aluminium die casting, tooling and precision manufacturing for efficient ICE and next-generation EV architectures.',
    tags: [['#capabilities', 'Technology & Manufacturing'], ['#businesses', 'Products & Solutions'], ['#global', 'Services & Locations']],
  },
]

export default function GroupSection() {
  return (
    <section className="section group" id="businesses">
      <div className="shell">
        <div className="section-head reveal">
          <div className="section-kicker">
            <span>02</span>
            <p>Our businesses</p>
          </div>
          <div>
            <h2>
              Three businesses.<br />
              <em>One engineering platform.</em>
            </h2>
            <p>
              Explore each business through its technology and manufacturing strengths, products and solutions,
              services and operating locations.
            </p>
          </div>
        </div>

        <div className="biz-grid">
          {businesses.map((b, i) => (
            <article key={b.name} className="biz-card reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.image} alt={b.name} />
              <div className="biz-body">
                <span className="biz-label">
                  {String(i + 1).padStart(2, '0')} / {b.name.toUpperCase()}
                </span>
                <h3>{b.name}</h3>
                <p>{b.desc}</p>
                <div className="biz-tags">
                  {b.tags.map(([href, label]) => (
                    <a key={label} href={href}>{label}</a>
                  ))}
                </div>
                <a className="header-cta biz-cta" href="#capabilities">
                  Explore {b.name} <span aria-hidden="true"><ArrowRight size={18} aria-hidden="true" /></span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
