'use client'

import { useState } from 'react'
import { useAppSelector } from '@/store/store'
import { selectGroups, selectIntro, selectProducts } from '@/store/productsSlice'

// Products & Solutions body for one business: intro, category cards and the filterable product grid.
// Everything here is read from the Redux products slice (store/productsSlice.ts). Styled by business.css.
export default function ProductPortfolio({ business }: { business: string }) {
  const intro = useAppSelector(s => selectIntro(s, business))
  const groups = useAppSelector(s => selectGroups(s, business))
  const products = useAppSelector(s => selectProducts(s, business))
  const [group, setGroup] = useState('all')
  const tabs = { all: 'All products', ...groups }
  return (
    <>
      <div className="bz-head">
        <div>
          <p className="bz-eyebrow">PORTFOLIO</p>
          <h2>Products &amp; Solutions</h2>
        </div>
        {intro && <p>{intro.text}</p>}
      </div>
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
        {products.filter(p => group === 'all' || p.group === group).map(p => (
          <figure key={p.image}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src={`/assets/${p.image}.webp`} alt={p.name} />
            <figcaption>{p.name}</figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}
