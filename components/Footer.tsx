import Link from 'next/link'
import { ABOUT_LINKS, BUSINESSES, SUSTAINABILITY_LINKS } from '@/components/about/data'

type Col = { title: string; links: [string, string][] }

// Capabilities without a dedicated page point at the closest business technology section.
const tech = '/drivetrain#technology'
const COLUMNS: Col[] = [
  { title: 'About', links: ABOUT_LINKS.map(l => [l.href, l.label]) },
  { title: 'Businesses', links: BUSINESSES.map(b => [`/${b.slug}`, b.name]) },
  {
    title: 'Capabilities',
    links: ['Engineering & Tooling', 'Forging & Stamping', 'Machining', 'Die Casting', 'Heat Treatment', 'Quality & Testing'].map(l => [l === 'Die Casting' ? '/lightweighting#technology' : tech, l]),
  },
  { title: 'Sustainability', links: SUSTAINABILITY_LINKS.map(l => [l.href, l.label.replace('ESG ', '').replace('Reports & Policies', 'Policies & Reports')]) },
  { title: 'Investors', links: [['/investors/financial-reports', 'Financial Reports']] },
  { title: 'News & Insights', links: [['/news-insights#news', 'News'], ['/news-insights', 'Insights'], ['/news-insights#media', 'Media'], ['/HRPTL-Corporate-Presentation.pdf', 'Resources']] },
  { title: 'Careers', links: [['/careers', 'Careers']] },
  { title: 'Contact', links: [['/contact/corporate-office', 'Contact']] },
]

export default function Footer() {
  return (
    <footer>
      <div className="shell footer-top">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async" src="/assets/highway-roop-logo.webp" alt="Highway Roop" width={420} height={39} />
          <p className="footer-tagline">Precision In Motion</p>
          <p>
            135-R, Sector 36, Narsinghpur,<br />
            Gurugram, Haryana 122004, India
          </p>
        </div>
        <nav className="footer-cols" aria-label="Footer">
          {COLUMNS.map(c => (
            <div key={c.title}>
              <strong>{c.title}</strong>
              {c.links.map(([href, label]) => <Link key={label} href={href}>{label}</Link>)}
            </div>
          ))}
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Highway Roop Precision Technologies Limited, developed by <a href="https://www.abacusdesk.com/" target="_blank" rel="noopener noreferrer">AbacusDesk</a></span>
      </div>
    </footer>
  )
}
