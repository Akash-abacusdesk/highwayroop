'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SUBNAVS } from './data'

// One sub-nav for every section; the section (About, Sustainability, Contact) is picked from the URL.
export default function SubNav() {
  const path = usePathname()
  const section = SUBNAVS.find(s => path.startsWith(s.prefix))
  if (!section) return null
  return (
    <nav className="ab-sub" aria-label={section.label}>
      <div className="shell">
        {section.links.map(l => (
          <Link key={l.href} href={l.href} className={path === l.href ? 'active' : undefined} aria-current={path === l.href ? 'page' : undefined}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
