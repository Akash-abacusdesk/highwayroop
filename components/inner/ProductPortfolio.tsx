'use client'

import { useState } from 'react'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'
import { useAppSelector } from '@/store/store'
import { selectGroups, selectIntro, selectProducts } from '@/store/productsSlice'

// Products & Solutions body for one business: intro, category cards and the filterable product grid.
// Everything here is read from the Redux products slice (store/productsSlice.ts).
export default function ProductPortfolio({ business }: { business: string }) {
  const intro = useAppSelector(s => selectIntro(s, business))
  const groups = useAppSelector(s => selectGroups(s, business))
  const products = useAppSelector(s => selectProducts(s, business))
  const [group, setGroup] = useState('all')
  const tabs = { all: 'All products', ...groups }
  return (
    <>
      <SectionHead title="Products & Solutions">{intro?.text}</SectionHead>
      {intro && <div className="ab-gap-sm"><CardGrid cards={intro.categories} /></div>}
      <div className="ab-filters" role="group" aria-label="Filter products">
        {Object.entries(tabs).map(([k, label]) => (
          <button key={k} type="button" className={group === k ? 'active' : undefined} aria-pressed={group === k} onClick={() => setGroup(k)}>{label}</button>
        ))}
      </div>
      <div className="ab-products">
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
