import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'

export const metadata: Metadata = { title: 'Reports & Policies | Highway Roop' }

const DOCS = [
  { name: 'Sustainability Report FY 2025-26', href: '/Sustainability%20Report%20FY%202025-26.pdf', type: 'PDF' },
  { name: 'BRSR FY 2025-26', href: '/BRSR%20FY%202025-26.docx', type: 'DOCX' },
  { name: 'IATF 16949', href: '', type: 'Certificate' },
  { name: 'ISO 14001', href: '', type: 'Certificate' },
  { name: 'ISO 45001', href: '', type: 'Certificate' },
  { name: 'ISO 27001 / TISAX', href: '', type: 'Certificate' },
]

export default function ReportsPolicies() {
  return (
    <>
      <PageHero
        title={<>Documents in<br />one place</>}
        copy="An organised index for approved reports, policies and certificates."
        image="hero-reports-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Reports and certificates</>}>
            Download the source disclosures used across the sustainability pages. Certificate links will be activated when approved scans are published.
          </SectionHead>
          <div className="ab-docs">
            {DOCS.map(d => (
              <div key={d.name}>
                <strong>{d.name}</strong>
                <p>{d.href ? <><a href={d.href} target="_blank" rel="noreferrer">View</a><a href={d.href} download>Download</a></> : <><button type="button" disabled>View</button><button type="button" disabled>Download</button></>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
