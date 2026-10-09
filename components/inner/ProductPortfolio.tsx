'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useAppSelector } from '@/store/store'
import { selectGroups, selectIntro, selectProducts } from '@/store/productsSlice'

// Products & Solutions body for one business: intro, category cards and the filterable product grid.
// Everything here is read from the Redux products slice (store/productsSlice.ts). Styled by business.css.
// Clicking a product opens a native <dialog> viewer: prev/next (buttons or arrow keys) through the filtered list,
// close via the cross, Esc or a click on the backdrop.
export default function ProductPortfolio({ business }: { business: string }) {
  const intro = useAppSelector(s => selectIntro(s, business))
  const groups = useAppSelector(s => selectGroups(s, business))
  const products = useAppSelector(s => selectProducts(s, business))
  const [group, setGroup] = useState('all')
  const [open, setOpen] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const tabs = { all: 'All products', ...groups }
  const shown = products.filter(p => group === 'all' || p.group === group)
  const current = open === null ? null : shown[open]
  const step = (d: number) => setOpen(i => (i === null ? i : (i + d + shown.length) % shown.length))

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    if (open !== null && !el.open) el.showModal()
    if (open === null && el.open) el.close()
  }, [open])

  return (
    <>
      <div className="bz-head">
        <div>
          <p className="bz-eyebrow">PORTFOLIO</p>
          <h2>Products &amp; Solutions</h2>
        </div>
        {intro && <p>{intro.text}</p>}
      </div>
      {intro && <hr className="bz-hr" />}
      {intro && (
        <div className="bz-cats">
          {intro.categories.map(c => <article key={c.title}><h3>{c.title}</h3><p>{c.text}</p></article>)}
        </div>
      )}
      <div className="bz-filters" role="group" aria-label="Filter products">
        {Object.entries(tabs).map(([k, label]) => (
          <button key={k} type="button" className={group === k ? 'active' : undefined} aria-pressed={group === k} onClick={() => setGroup(k)}>{label}</button>
        ))}
      </div>
      <div className="bz-grid">
        {shown.map((p, i) => (
          <figure key={p.image}>
            <button type="button" onClick={() => setOpen(i)} aria-label={`View ${p.name}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src={`/assets/${p.image}.webp`} alt={p.name} />
            </button>
            <figcaption>{p.name}</figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="bz-viewer"
        aria-label={current?.name}
        onClose={() => setOpen(null)}
        onClick={e => { if (e.target === e.currentTarget) setOpen(null) }}
        onKeyDown={e => { if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) }}
      >
        {current && (
          <div className="bz-viewer-body">
            <button type="button" className="bz-viewer-close" onClick={() => setOpen(null)} aria-label="Close"><X size={22} /></button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/assets/${current.image}.webp`} alt={current.name} />
            <div className="bz-viewer-bar">
              <button type="button" onClick={() => step(-1)} aria-label="Previous product"><ChevronLeft size={22} /></button>
              <p><strong>{current.name}</strong><span>{open! + 1} / {shown.length}</span></p>
              <button type="button" onClick={() => step(1)} aria-label="Next product"><ChevronRight size={22} /></button>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
