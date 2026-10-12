'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { SUBNAVS } from './data'

// One sub-nav for every section; the section (About, Sustainability, Contact) is picked from the URL.
export default function SubNav() {
  const path = usePathname()
  const bar = useRef<HTMLDivElement>(null)
  // On phones the tabs scroll sideways; bring the current one into view.
  useEffect(() => {
    const el = bar.current, a = el?.querySelector<HTMLElement>('.active')
    if (el && a) el.scrollLeft += a.getBoundingClientRect().left - el.getBoundingClientRect().left - (el.clientWidth - a.offsetWidth) / 2
  }, [path])
  const section = SUBNAVS.find(s => s.links.some(l => l.href === path) || path.startsWith(s.prefix + '/'))
  if (!section) return null
  return (
    <nav className="ab-sub" aria-label={section.label}>
      <div className="shell" ref={bar}>
        {section.links.map(l => (
          <Link key={l.href} href={l.href} className={path === l.href ? 'active' : undefined} aria-current={path === l.href ? 'page' : undefined}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
