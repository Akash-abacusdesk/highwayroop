import { ArrowRight } from 'lucide-react'
const businesses = [
  {
    name: 'Driveline',
    image: '/assets/advanced-forging.webp',
    desc: 'Precision-forged and machined components engineered for demanding engine, transmission and driveline applications.',
    tags: [['#capabilities', 'Technology & Manufacturing'], ['/about/group-structure', 'Products & Solutions'], ['/about/global-presence', 'Services & Locations']],
  },
  {
    name: 'Steering & Suspension',
    image: '/assets/hero-precision.webp',
    desc: 'Safety-critical components and assemblies designed for control, durability and consistent vehicle performance.',
    tags: [['#capabilities', 'Technology & Manufacturing'], ['/about/group-structure', 'Products & Solutions'], ['/about/global-presence', 'Services & Locations']],
  },
  {
    name: 'Lightweighting',
    image: '/assets/lightweighting-ev.webp',
    desc: 'Aluminium die casting, tooling and precision manufacturing for efficient ICE and next-generation EV architectures.',
    tags: [['#capabilities', 'Technology & Manufacturing'], ['/about/group-structure', 'Products & Solutions'], ['/about/global-presence', 'Services & Locations']],
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
          {businesses.map(b => (
            <article key={b.name} className="biz-card reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                decoding="async"
                src={b.image}
                srcSet={`${b.image.replace(".webp", "-800.webp")} 800w, ${b.image} 1672w`}
                sizes="(max-width:700px) 100vw, (max-width:1050px) 50vw, 33vw"
                alt={b.name}
                width={1672}
                height={941}
              />
              <div className="biz-body">
                <h3>{b.name}</h3>
                <p>{b.desc}</p>
                <div className="biz-tags">
                  {b.tags.map(([href, label]) => (
                    <a key={label} href={href}>{label}</a>
                  ))}
                </div>
                <a className="biz-cta" href="/about/group-structure">
                  Explore<span className="biz-cta-name"> {b.name}</span> <span aria-hidden="true"><ArrowRight size={18} aria-hidden="true" /></span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
