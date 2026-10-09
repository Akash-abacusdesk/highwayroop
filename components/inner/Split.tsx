import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Text beside an image; `reverse` puts the image on the left.
export default function Split({ title, children, image, alt, cta, reverse, bullets, level: Heading = 'h2' }: {
  title: React.ReactNode; children: React.ReactNode; image: string; alt: string
  cta?: { href: string; label: string }; reverse?: boolean; bullets?: string[]; level?: 'h2' | 'h3'
}) {
  return (
    <div className={`ab-split${reverse ? ' reverse' : ''}`}>
      <div>
        <Heading className="ab-heading">{title}</Heading>
        <p>{children}</p>
        {bullets && <ul>{bullets.map(b => <li key={b}>{b}</li>)}</ul>}
        {cta && <Link className="button primary" href={cta.href}>{cta.label} <span><ArrowRight size={18} aria-hidden="true" /></span></Link>}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img loading="lazy" decoding="async" src={`/assets/${image}.webp`} alt={alt} />
    </div>
  )
}
