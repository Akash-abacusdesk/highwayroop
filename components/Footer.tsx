import Link from 'next/link'
import { ABOUT_LINKS, BUSINESSES, SUSTAINABILITY_LINKS } from '@/components/about/data'

type Col = { title: string; links: [string, string][] }

// Items without a dedicated page point at the closest existing one (capabilities at a business's technology
// section, unbuilt investor pages at the homepage corporate section).
const tech = '/driveline#technology'
const investor: [string, string][] = [
  ['/#corporate', 'Investor Information'], ['/#corporate', 'Financial Information'], ['/#corporate', 'DRHP / Offer Documents'],
  ['/sustainability/governance', 'Corporate Governance'], ['/sustainability/reports-policies', 'Policies'],
  ['/sustainability/reports-policies', 'Disclosures'], ['/sustainability/reports-policies', 'Annual Reports'],
  ['/contact/general-investor-contact', 'Investor Grievance'], ['/contact/general-investor-contact', 'RTA'],
]
const COLUMNS: Col[] = [
  { title: 'About', links: ABOUT_LINKS.map(l => [l.href, l.label]) },
  { title: 'Businesses', links: BUSINESSES.map(b => [`/${b.slug}`, b.name]) },
  {
    title: 'Capabilities',
    links: ['Engineering & Tooling', 'Forging & Stamping', 'Machining', 'Die Casting', 'Heat Treatment', 'Quality & Testing'].map(l => [l === 'Die Casting' ? '/lightweighting#technology' : tech, l]),
  },
  { title: 'Sustainability', links: SUSTAINABILITY_LINKS.map(l => [l.href, l.label.replace('ESG ', '').replace('Reports & Policies', 'Policies & Reports')]) },
  { title: 'Investors', links: investor },
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
