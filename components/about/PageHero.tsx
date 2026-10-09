import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import './about.css'

type Cta = { href: string; label: string }

// `ctas`: the first renders as the primary button, the second as a text link. `caption`: optional label pinned bottom-right (e.g. who is pictured).
export default function PageHero({ title, copy, image, ctas, caption }: { title: React.ReactNode; copy: string; image: string; ctas?: Cta[]; caption?: React.ReactNode }) {
  return (
    <section className="ab-hero">
      <div className="ab-hero-media" style={{ backgroundImage: `url('/assets/${image}.webp')` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/assets/${image}.webp`}
          alt=""
          aria-hidden="true"
          className="ab-hero-media-img"
        />
      </div>
      <div className="shell">
        <div className="ab-hero-copy">
          <div className="ab-redline" />
          <h1>{title}</h1>
          <p>{copy}</p>
          {ctas && (
            <div className="ab-hero-ctas">
              {ctas.map((c, i) => (
                <Link key={c.href} className={i === 0 ? 'button primary' : 'text-link'} href={c.href}>
                  {c.label} <span><ArrowRight size={18} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          )}
        </div>
        {caption && <div className="ab-hero-caption">{caption}</div>}
      </div>
    </section>
  )
}
