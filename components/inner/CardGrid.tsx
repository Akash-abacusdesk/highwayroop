import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export type Card = { tag?: string; title: string; text: string; notes?: string[]; href?: string; slot?: string; action?: string; image?: string; file?: string }

// Bordered grid of cards used for career paths, manufacturing steps, ESG areas, certifications and awards.
// A card with `href` becomes a link; `slot` adds the dashed placeholder for artwork not yet supplied, or shows `image`
// when given. `action` is a disabled button until `file` is set, then it opens the file.
export default function CardGrid({ cards, cols = 3, gap }: { cards: Card[]; cols?: 2 | 3; gap?: boolean }) {
  return (
    <div className={`ab-cards cols-${cols}${gap ? ' gapped' : ''}`}>
      {cards.map(c => {
        const body = (
          <>
            {c.slot && (
              <div className={`ab-slot${c.image ? ' has-image' : ''}`}>
                {c.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img loading="lazy" decoding="async" src={c.image} alt={`${c.title} certificate`} />
                ) : (
                  <>
                    <span>{c.slot}</span>
                    <small>Approved image / PDF preview</small>
                  </>
                )}
              </div>
            )}
            <div className="ab-card-body">
              {c.tag && <b>{c.tag}</b>}
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              {c.notes && <ul className="ab-card-notes">{c.notes.map(n => <li key={n}>{n}</li>)}</ul>}
              {c.href && <span className="ab-more">Explore <ArrowRight size={16} aria-hidden="true" /></span>}
              {c.action && (c.file
                ? <a className="ab-doc-btn" href={c.file} target="_blank" rel="noopener noreferrer">{c.action}</a>
                : <button className="ab-doc-btn" type="button" disabled>{c.action}</button>)}
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
