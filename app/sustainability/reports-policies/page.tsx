import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'

export const metadata: Metadata = { title: 'Reports & Policies | Highway Roop' }

const DOCS = ['IATF 16949', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'TISAX', 'Sustainability report', 'ESG policies']

export default function ReportsPolicies() {
  return (
    <>
      <PageHero
        title={<>Documents in<br />one place.</>}
        copy="An organised index for approved reports, policies and certificates."
        image="hero-reports-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Reports and certificates.</>}>
            Each row is prepared with View and Download actions. The controls become active when approved PDF files are added.
          </SectionHead>
          <div className="ab-docs">
            {DOCS.map(d => (
              <div key={d}>
                <strong>{d}</strong>
                <p><button type="button" disabled>View</button><button type="button" disabled>Download</button></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
