'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminSidebar() {
  const pathname = usePathname()
  const [pagesOpen, setPagesOpen] = useState(true)

  const handleLogout = async () => {
    try {
      await fetch('/highwayroop/api/auth/logout', { credentials: 'include' })
    } catch {}
    window.location.href = '/highwayroop/login'
  }

  const isActive = (href: string) => pathname === href
  const isPagesActive = pathname.startsWith('/admin/pages')

  return (
    <aside className="admin-sidebar">
      {/* Brand */}
      <div className="admin-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/highway-roop-logo.png" alt="Highway Roop" />
        <span className="admin-brand-tag">Admin</span>
      </div>

      {/* Navigation */}
      <nav className="admin-nav" aria-label="Admin navigation">
        <span className="admin-nav-section-label">Main</span>

        <Link
          href="/admin"
          className={`admin-nav-link${isActive('/admin') ? ' nav-active' : ''}`}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Dashboard
        </Link>

        <span className="admin-nav-section-label" style={{ marginTop: 8 }}>Content</span>

        {/* Pages — collapsible */}
        <div className="admin-pages-group">
          <button
            className={`admin-pages-toggle${isPagesActive ? ' group-active' : ''}`}
            onClick={() => setPagesOpen(v => !v)}
            aria-expanded={pagesOpen}
          >
            <span className="admin-pages-toggle-inner">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Pages
            </span>
            <span className={`admin-pages-caret${pagesOpen ? ' open' : ''}`}>▶</span>
          </button>

          {pagesOpen && (
            <div className="admin-pages-children">
              <Link
                href="/admin/pages"
                className={`admin-pages-child${isActive('/admin/pages') ? ' nav-active' : ''}`}
              >
                All pages
              </Link>
              <Link
                href="/admin/pages/homepage"
                className={`admin-pages-child${isActive('/admin/pages/homepage') ? ' nav-active' : ''}`}
              >
                Homepage
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Footer */}
      <div className="admin-sidebar-footer">
        <Link href="/" className="admin-back-link" target="_blank">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View website
        </Link>
        <button onClick={handleLogout} className="admin-logout-btn">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign out
        </button>
      </div>
    </aside>
  )
}
