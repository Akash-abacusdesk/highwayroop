'use client'

import { ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'

type Col = { title: string; links: [string, string][] }
type Menu = { label: string; href: string; intro: string; cols: Col[] }

// Dropdowns for About, Businesses, Sustainability, Investors; News & Careers stay plain links.
// Sub-pages don't exist yet, so links point at the nearest on-page section.
const MENUS: Menu[] = [
  {
    label: 'About', href: '#about',
    intro: 'Scale, legacy and the leadership steering Highway Roop worldwide.',
    cols: [
      { title: 'ABOUT HIGHWAY ROOP', links: [['#about', 'Overview'], ['#about', 'Our Journey'], ['#about', 'Group Structure']] },
      { title: 'PEOPLE & REACH', links: [['#leadership', 'Leadership'], ['#global', 'Global Presence']] },
    ],
  },
  {
    label: 'Businesses', href: '#businesses',
    intro: 'Three specialist businesses delivering engineered mobility systems.',
    cols: ['Driveline', 'Steering & Suspension', 'Lightweighting'].map(t => ({
      title: t.toUpperCase(),
      links: [['#capabilities', 'Technology & Manufacturing'], ['#businesses', 'Products & Solutions']] as [string, string][],
    })),
  },
  {
    label: 'Sustainability', href: '#sustainability',
    intro: 'Responsible growth across environment, people and governance.',
    cols: [
      { title: 'ESG', links: [['#sustainability', 'ESG Overview'], ['#sustainability', 'Environment'], ['#sustainability', 'People']] },
      { title: 'RESPONSIBILITY', links: [['#sustainability', 'CSR'], ['#sustainability', 'Governance'], ['#sustainability', 'Reports & Policies']] },
    ],
  },
  {
    label: 'Investors', href: '#corporate',
    intro: 'Financials, governance and disclosures for our shareholders.',
    cols: [
      { title: 'OVERVIEW', links: [['#corporate', 'Investor Overview'], ['#corporate', 'Financial Information'], ['#corporate', 'DRHP / Offer Documents'], ['#corporate', 'Annual Reports']] },
      { title: 'GOVERNANCE', links: [['#corporate', 'Corporate Governance'], ['#corporate', 'Board & Committees'], ['#corporate', 'Policies'], ['#corporate', 'Disclosures']] },
      { title: 'SHAREHOLDERS', links: [['#corporate', 'Shareholding'], ['#corporate', 'Credit Ratings'], ['#corporate', 'Investor Meetings']] },
      { title: 'SUPPORT', links: [['#corporate', 'Registrar & Transfer Agent'], ['#corporate', 'Investor Grievance']] },
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
    ...MENUS.map(m => [m.href, m.label] as [string, string]),
    ['#media', 'News & Insights'],
    ['#careers', 'Careers'],
    ['#contact', 'Contact'],
  ]

  return (
    <header className="site-header" id="top">
      <div className="utility-bar">
        <div className="shell utility-inner">
          <nav aria-label="Corporate links">
            <a href="#leadership">Leadership</a>
            <a href="#corporate">Corporate information</a>
            <a href="#media">Newsroom</a>
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
        <a className="brand" href="#top" aria-label="Highway Roop home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/highway-roop-logo.png" alt="Highway Roop" />
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          {MENUS.map((m, i) => (
            <div
              key={m.label}
              className="mega-nav-item"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={e => {
                if (!megaMenuRef.current?.contains(e.relatedTarget as Node)) closeMega()
              }}
            >
              <button
                ref={i === active ? (megaTriggerRef as React.RefObject<HTMLButtonElement>) : undefined}
                className="mega-trigger"
                type="button"
                aria-expanded={active === i}
                aria-controls="mega-menu"
                onClick={() => setActive(active === i ? null : i)}
              >
                {m.label}
              </button>
            </div>
          ))}
          <a href="#media">News &amp; Insights</a>
          <a href="#careers">Careers</a>
        </nav>
        <a className="header-cta" href="#contact">
          Contact <span aria-hidden="true"><ArrowRight size={18} aria-hidden="true" /></span>
        </a>
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
            <a href={menu.href} onClick={closeMega}>
              Explore {menu.label} <b><ArrowRight size={18} aria-hidden="true" /></b>
            </a>
          </div>
          {menu.cols.map(c => (
            <div className="mega-column" key={c.title}>
              <p>{c.title}</p>
              {c.links.map(([href, label]) => (
                <a key={label} href={href} onClick={closeMega}>
                  <b>{label}</b>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-nav" aria-hidden={!mobileOpen}>
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
          <a key={href} href={href} onClick={() => setMobileOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}
