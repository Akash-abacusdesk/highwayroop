import { ArrowRight } from 'lucide-react'
import { BUSINESSES } from '@/components/about/data'

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
            <h2>Businesses built around precision</h2>
            <p>
              We serve critical vehicle systems through specialist manufacturing capabilities, application expertise
              and a shared commitment to quality.
            </p>
          </div>
        </div>

        <div className="biz-grid">
          {BUSINESSES.map(b => (
            <article key={b.name} className="biz-card reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                decoding="async"
                src={b.image}
                srcSet={`${b.image.replace(".webp", "-800.webp")} 800w, ${b.image} 2128w`}
                sizes="(max-width:700px) 180vw, (max-width:1050px) 90vw, 60vw"
                alt={b.name}
                width={2128}
                height={739}
              />
              <div className="biz-body">
                <h3>{b.name.toUpperCase()}</h3>
                <p className="biz-intro">{b.intro}</p>
                <p>{b.desc}</p>
                <a className="biz-cta" href={`/${b.slug}`}>
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
