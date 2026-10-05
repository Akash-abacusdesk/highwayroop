'use client'

import { useState } from 'react'

export type Product = { group: string; image: string; name: string }

export default function ProductFilter({ groups, products }: { groups: Record<string, string>; products: Product[] }) {
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
