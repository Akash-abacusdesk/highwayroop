'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ABOUT_LINKS } from './data'

export default function SubNav() {
  const path = usePathname()
  return (
    <nav className="ab-sub" aria-label="About">
      <div className="shell">
        {ABOUT_LINKS.map(l => (
          <Link key={l.href} href={l.href} className={path === l.href ? 'active' : undefined} aria-current={path === l.href ? 'page' : undefined}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
