import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export type Card = { tag?: string; title: string; text: string; href?: string; slot?: string; action?: string }

// Bordered grid of cards used for career paths, manufacturing steps, ESG areas, certifications and awards.
// A card with `href` becomes a link; `slot` adds the dashed placeholder for artwork not yet supplied.
export default function CardGrid({ cards, cols = 3, gap }: { cards: Card[]; cols?: 2 | 3; gap?: boolean }) {
  return (
    <div className={`ab-cards cols-${cols}${gap ? ' gapped' : ''}`}>
      {cards.map(c => {
        const body = (
          <>
            {c.slot && (
              <div className="ab-slot">
                <span>{c.slot}</span>
                <small>Approved image / PDF preview</small>
              </div>
            )}
            <div className="ab-card-body">
              {c.tag && <b>{c.tag}</b>}
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              {c.href && <span className="ab-more">Explore <ArrowRight size={16} aria-hidden="true" /></span>}
              {c.action && <button className="ab-doc-btn" type="button" disabled>{c.action}</button>}
            </div>
          </>
        )
        return c.href ? (
          <Link key={c.title} href={c.href} className={`ab-card${c.slot ? ' has-slot' : ''}`}>{body}</Link>
        ) : (
          <article key={c.title} className={`ab-card${c.slot ? ' has-slot' : ''}`}>{body}</article>
        )
      })}
    </div>
  )
}
