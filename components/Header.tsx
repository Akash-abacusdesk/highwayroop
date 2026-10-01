'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Fragment, useState, useEffect, useRef, useCallback } from 'react'

type Col = { title: string; links: [string, string][] }
type Menu = { label: string; href: string; intro: string; cols: Col[] }

// Dropdowns for About, Businesses, Sustainability, Investors; News & Careers stay plain links.
// About and News have their own pages; the rest still point at homepage sections.
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
    cols: ['Driveline', 'Steering & Suspension', 'Lightweighting'].map(t => ({
      title: t.toUpperCase(),
      links: [['/#businesses', 'Technology & Manufacturing'], ['/#businesses', 'Products & Solutions']] as [string, string][],
    })),
  },
  {
    label: 'Sustainability', href: '/#sustainability',
    intro: 'Responsible growth across environment, people and governance.',
    cols: [
      { title: 'ESG', links: [['/#sustainability', 'ESG Overview'], ['/#sustainability', 'Environment'], ['/#sustainability', 'People']] },
      { title: 'RESPONSIBILITY', links: [['/#sustainability', 'CSR'], ['/#sustainability', 'Governance'], ['/#sustainability', 'Reports & Policies']] },
    ],
  },
  {
    label: 'Investors', href: '/#corporate',
    intro: 'Financials, governance and disclosures for our shareholders.',
    cols: [
      { title: 'OVERVIEW', links: [['/#corporate', 'Investor Overview'], ['/#corporate', 'Financial Information'], ['/#corporate', 'DRHP / Offer Documents'], ['/#corporate', 'Annual Reports']] },
      { title: 'GOVERNANCE', links: [['/#corporate', 'Corporate Governance'], ['/#corporate', 'Board & Committees'], ['/#corporate', 'Policies'], ['/#corporate', 'Disclosures']] },
      { title: 'SHAREHOLDERS', links: [['/#corporate', 'Shareholding'], ['/#corporate', 'Credit Ratings'], ['/#corporate', 'Investor Meetings']] },
      { title: 'SUPPORT', links: [['/#corporate', 'Registrar & Transfer Agent'], ['/#corporate', 'Investor Grievance']] },
    ],
  },
  {
    label: 'Contact', href: '/#contact',
    intro: 'Reach our offices, plants and business teams.',
    cols: [
      { title: 'OFFICES & PLANTS', links: [['/#contact', 'Corporate Office'], ['/#global', 'Manufacturing Locations']] },
      { title: 'GET IN TOUCH', links: [['/#contact', 'Business Enquiries'], ['/#contact', 'General / Investor Contact']] },
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

  const closeMega = useCallback(() => setActive(null), [])

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
    ...MENUS.filter(m => m.label !== 'Contact').map(m => [m.href, m.label] as [string, string]),
    ['/news-insights', 'News & Insights'],
    ['/#careers', 'Careers'],
    ['/#contact', 'Contact'],
  ]

  return (
    <header className="site-header" id="top">
      <div className="utility-bar">
        <div className="shell utility-inner">
          <nav aria-label="Corporate links">
            <Link href="/about/leadership">Leadership</Link>
            <a href="/#corporate">Corporate information</a>
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
        <a className="brand" href="/" aria-label="Highway Roop home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img decoding="async" src="/assets/highway-roop-logo.webp" alt="Highway Roop" width={420} height={39} />
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          {MENUS.map((m, i) => (
            <Fragment key={m.label}>
            {m.label === 'Contact' && (
              <>
                <Link href="/news-insights">News &amp; Insights</Link>
                <a href="#careers">Careers</a>
              </>
            )}
            <div
              className="mega-nav-item"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={e => {
                if (!megaMenuRef.current?.contains(e.relatedTarget as Node)) closeMega()
              }}
            >
              <Link
                ref={i === active ? (megaTriggerRef as React.RefObject<HTMLAnchorElement>) : undefined}
                className="mega-trigger"
                href={m.href}
                aria-expanded={active === i}
                aria-controls="mega-menu"
                onFocus={() => setActive(i)}
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
        </button>
      </div>

      <div
        ref={megaMenuRef}
        className={`mega-menu${megaOpen ? ' is-open' : ''}`}
        id="mega-menu"
        aria-hidden={!megaOpen}
        inert={!megaOpen}
        onMouseLeave={closeMega}
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
              <p>{c.title}</p>
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
