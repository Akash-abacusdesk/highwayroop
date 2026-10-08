'use client'

import { useState } from 'react'
import { useAppSelector } from '@/store/store'
import { selectGroups, selectProducts } from '@/store/productsSlice'

// Product grid with group tabs; the portfolio comes from the Redux products slice.
export default function ProductFilter({ business }: { business: string }) {
  const groups = useAppSelector(s => selectGroups(s, business))
  const products = useAppSelector(s => selectProducts(s, business))
  const [group, setGroup] = useState('all')
  const tabs = { all: 'All products', ...groups }
  return (
    <>
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
