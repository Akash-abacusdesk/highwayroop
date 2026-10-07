'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { BUSINESSES } from './about/data'
import { Fragment, useState, useEffect, useRef, useCallback } from 'react'

type Col = { title: string; links: [string, string][]; href?: string; blurb?: string }
type Menu = { label: string; href: string; intro: string; cols: Col[] }

// Dropdowns for every top-level item except Investors and Careers, which stay plain links.
const INVESTORS: [string, string] = ['/investors/financial-reports', 'Investors']

const MENUS: Menu[] = [
  {
    label: 'About', href: '/about',
    intro: 'Scale, legacy and the leadership steering Highway Roop worldwide.',
    cols: [
      { title: 'ABOUT HIGHWAY ROOP', links: [['/about', 'Overview'], ['/about/our-journey', 'Our Journey'], ['/about/group-structure', 'Group Structure']] },
      { title: 'PEOPLE & REACH', links: [['/about/leadership', 'Leadership'], ['/about/global-presence', 'Global Presence']] },
    ],
  },
  {
    label: 'Businesses', href: '/#businesses',
    intro: 'Three specialist businesses delivering engineered mobility systems.',
    cols: BUSINESSES.map(b => ({
      title: b.name.toUpperCase(),
      href: `/${b.slug}`,
      blurb: b.intro,
      links: [[`/${b.slug}#technology`, 'Technology & Manufacturing'], [`/${b.slug}#products-solutions`, 'Products & Solutions']] as [string, string][],
    })),
  },
  {
    label: 'Sustainability', href: '/sustainability/esg-overview',
    intro: 'Responsible growth across environment, people and governance.',
    cols: [
      { title: 'ESG', links: [['/sustainability/esg-overview', 'ESG Overview'], ['/sustainability/environment', 'Environment'], ['/sustainability/people', 'People']] },
      { title: 'RESPONSIBILITY', links: [['/sustainability/csr', 'CSR'], ['/sustainability/governance', 'Governance'], ['/sustainability/reports-policies', 'Reports & Policies']] },
    ],
  },
  {
    label: 'News & Insights', href: '/news-insights',
    intro: 'Company news, media coverage, insights and events.',
    cols: [
      { title: 'NEWSROOM', links: [['/news-insights#news', 'News'], ['/news-insights#media', 'Media']] },
      { title: 'PERSPECTIVES', links: [['/news-insights', 'Insights'], ['/news-insights', 'Events']] },
    ],
  },
  {
    label: 'Contact', href: '/contact/corporate-office',
    intro: 'Reach our offices, plants and business teams.',
    cols: [
      { title: 'OFFICES & PLANTS', links: [['/contact/corporate-office', 'Corporate Office'], ['/about/global-presence', 'Manufacturing Locations']] },
      { title: 'GET IN TOUCH', links: [['/contact/business-enquiries', 'Business Enquiries'], ['/contact/general-investor-contact', 'General / Investor Contact']] },
    ],
  },
]

export default function Header() {
  const [active, setActive] = useState<number | null>(null)
  const megaOpen = active !== null
  const menu = MENUS[active ?? 0]
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchStatus, setSearchStatus] = useState('')
  const megaMenuRef = useRef<HTMLDivElement>(null)
  const megaTriggerRef = useRef<HTMLElement>(null)

  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const closeMega = useCallback(() => {
    clearTimeout(closeTimer.current)
    setActive(null)
  }, [])
  const openMega = (i: number) => {
    clearTimeout(closeTimer.current)
    setActive(i)
  }
  // Short grace period so the pointer can cross the gap between the nav and the panel.
  const closeSoon = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setActive(null), 150)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMega()
        megaTriggerRef.current?.focus()
      }
    }
    const handleClick = (e: MouseEvent) => {
      if (
        !megaMenuRef.current?.contains(e.target as Node) &&
        !(e.target as Element).closest('.mega-nav-item')
      ) {
        closeMega()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleClick)
    }
  }, [closeMega])

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen)
  }, [mobileOpen])

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const query = searchQuery.trim().toLowerCase()
      if (!query) {
        setSearchStatus('Enter a topic to search.')
        return
      }
      const sections = [...document.querySelectorAll('main > section')]
      const headingMatch = sections.find(section =>
        [...section.querySelectorAll('h1,h2,h3')].some(h =>
          h.textContent?.toLowerCase().includes(query)
        )
      )
      const match = headingMatch || sections.find(s => s.textContent?.toLowerCase().includes(query))
      if (!match) {
        setSearchStatus(`No section found for "${searchQuery.trim()}".`)
        return
      }
      const heading = match.querySelector('h1,h2,h3')
      const sectionName =
        heading
          ? heading.textContent?.trim().replace(/\s+/g, ' ').replace(/[.!?]+$/, '')
          : 'matching section'
      setSearchStatus(`Showing ${sectionName}.`)
      setMobileOpen(false)
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      match.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
      match.classList.remove('search-match')
      requestAnimationFrame(() => match.classList.add('search-match'))
      setTimeout(() => match.classList.remove('search-match'), 1800)
    },
    [searchQuery]
  )

  const mobileLinks: [string, string][] = [
    ...MENUS.filter(m => m.label !== 'Contact').flatMap(m =>
      m.label === 'News & Insights' ? [INVESTORS, [m.href, m.label] as [string, string]] : [[m.href, m.label] as [string, string]]
    ),
    ['/careers', 'Careers'],
    ['/contact/corporate-office', 'Contact'],
  ]

  return (
    <header className="site-header" id="top">
      <div className="utility-bar">
        <div className="shell utility-inner">
          <nav aria-label="Corporate links">
            <Link href="/about/leadership">Leadership</Link>
            <Link href="/#corporate">Corporate information</Link>
            <Link href="/news-insights">Newsroom</Link>
          </nav>
          <form className="site-search" role="search" onSubmit={handleSearch}>
            <label className="sr-only" htmlFor="site-search-input">
              Search this website
            </label>
            <input
              id="site-search-input"
              type="search"
              placeholder="Search the site"
              autoComplete="off"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button type="submit" aria-label="Search">
              Search
            </button>
            <span className="search-status" role="status" aria-live="polite">
              {searchStatus}
            </span>
          </form>
        </div>
      </div>

      <div className="header-inner shell">
        <Link className="brand" href="/" aria-label="Highway Roop home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img decoding="async" src="/assets/highway-roop-logo.webp" alt="Highway Roop" width={420} height={39} />
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {MENUS.map((m, i) => (
            <Fragment key={m.label}>
            {m.label === 'News & Insights' && (
              <Link href={INVESTORS[0]}>{INVESTORS[1]}</Link>
            )}
            {m.label === 'Contact' && (
              <Link href="/careers">Careers</Link>
            )}
            <div
              className="mega-nav-item"
              onMouseEnter={() => openMega(i)}
              onMouseLeave={closeSoon}
            >
              <Link
                ref={i === active ? (megaTriggerRef as React.RefObject<HTMLAnchorElement>) : undefined}
                className="mega-trigger"
                href={m.href}
                aria-expanded={active === i}
                aria-controls="mega-menu"
                onFocus={() => openMega(i)}
                onClick={closeMega}
              >
                {m.label}
              </Link>
            </div>
            </Fragment>
          ))}
        </nav>
        <button
          className="menu-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        ref={megaMenuRef}
        className={`mega-menu${megaOpen ? ' is-open' : ''}`}
        id="mega-menu"
        aria-hidden={!megaOpen}
        inert={!megaOpen}
        onMouseEnter={() => clearTimeout(closeTimer.current)}
        onMouseLeave={closeSoon}
      >
        <div
          className="shell mega-grid"
          style={{ gridTemplateColumns: `1.1fr repeat(${menu.cols.length},1fr)` }}
        >
          <div className="mega-intro">
            <span>HIGHWAY ROOP</span>
            <h2>{menu.label}</h2>
            <p>{menu.intro}</p>
            <Link href={menu.href} onClick={closeMega}>
              Explore {menu.label} <b><ArrowRight size={18} aria-hidden="true" /></b>
            </Link>
          </div>
          {menu.cols.map(c => (
            <div className="mega-column" key={c.title}>
              {c.href ? (
                <Link className="mega-biz" href={c.href} onClick={closeMega}>
                  <strong>{c.title}</strong>
                  <em>{c.blurb}</em>
                  <span>View business <ArrowRight size={14} aria-hidden="true" /></span>
                </Link>
              ) : (
                <p>{c.title}</p>
              )}
              {c.links.map(([href, label]) => (
                <Link key={label} href={href} onClick={closeMega}>
                  <b>{label}</b>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-nav" aria-hidden={!mobileOpen} inert={!mobileOpen}>
        <form className="site-search mobile-search" role="search" onSubmit={handleSearch}>
          <label className="sr-only" htmlFor="mobile-search-input">
            Search this website
          </label>
          <input
            id="mobile-search-input"
            type="search"
            placeholder="Search the site"
            autoComplete="off"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            Search
          </button>
          <span className="search-status" role="status" aria-live="polite">
            {searchStatus}
          </span>
        </form>
        {mobileLinks.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setMobileOpen(false)}>
            {label}
          </Link>
        ))}
      </div>
    </header>
  )
}
