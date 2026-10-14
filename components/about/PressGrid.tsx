'use client'

import { useRef, useState } from 'react'
import { PRESS } from './data'

// Press coverage cards. Items with a clipping image open it in a modal (native <dialog>); the rest link out to the article.
export default function PressGrid() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState<(typeof PRESS)[number] | null>(null)
  const show = (p: (typeof PRESS)[number]) => { setOpen(p); dialog.current?.showModal() }

  return (
    <>
      <div className="ab-news-grid">
        {PRESS.map(p => (
          <article className="ab-news-card" key={p.title}>
            <div className="ab-thumb"><div className="ab-publication">{p.publication}</div></div>
            <div className="ab-news-body">
              <small>{p.source}</small>
              <h3>
                {p.image
                  ? <button type="button" onClick={() => show(p)} aria-haspopup="dialog">{p.title}</button>
                  : p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a> : p.title}
              </h3>
              <p>{p.text}</p>
            </div>
          </article>
        ))}
      </div>

      <dialog ref={dialog} className="ab-profile ab-clip" aria-label={open?.title} onClose={() => setOpen(null)} onClick={e => e.target === e.currentTarget && dialog.current?.close()}>
        {open?.image && (
          <div className="ab-clip-body">
            <button type="button" className="ab-profile-close" aria-label="Close" onClick={() => dialog.current?.close()}>×</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={open.image} alt={`${open.source} press clipping`} />
            {open.url && <a className="ab-report-cta" href={open.url} target="_blank" rel="noopener noreferrer">Read the article</a>}
          </div>
        )}
      </dialog>
    </>
  )
}
