import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'

export const metadata: Metadata = { title: 'Reports & Policies | Highway Roop' }

const CSR = [
  { title: 'HRIL CSR Projects FY 2026–27', sub: 'HRIL · Financial Year 2026–27', cover: <>CSR<br />Projects</>, tag: 'HRIL', pdf: '/reports/hril-csr-projects-fy2026-27.pdf' },
  { title: 'HRPTL CSR Projects FY 2026–27', sub: 'HRPTL · Financial Year 2026–27', cover: <>CSR<br />Projects</>, tag: 'HRPTL', pdf: '/reports/hrptl-csr-projects-fy2026-27.pdf' },
  { title: 'CSR Policy', sub: 'Corporate social responsibility policy', cover: <>CSR<br />Policy</>, tag: 'POLICY', pdf: '/reports/csr-policy.pdf' },
]

export default function ReportsPolicies() {
  return (
    <>
      <PageHero
        title={<>Documents in<br />one place</>}
        copy="An organised index for approved reports and policies."
        image="hero-reports-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Sustainability report<br />FY 2025–26</>} />
          <div className="ab-reports">
            <article className="ab-report">
              <div className="ab-report-cover" aria-hidden="true"><span>HIGHWAY ROOP</span><strong>Sustainability<br />Report</strong><b>2025–26</b></div>
              <div>
                <h3>Sustainability Report <span style={{ whiteSpace: "nowrap" }}>2025–26</span></h3>
                <p>Financial Year 2025–26</p>
              </div>
              <a className="ab-report-cta" role="link" aria-disabled="true">Coming soon</a>
            </article>
          </div>
          <SectionHead title={<>CSR reports<br />&amp; policy</>} />
          <div className="ab-reports">
            {CSR.map(r => (
              <article className="ab-report" key={r.pdf}>
                <div className="ab-report-cover" aria-hidden="true"><span>HIGHWAY ROOP</span><strong>{r.cover}</strong><b>{r.tag}</b></div>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.sub}</p>
                </div>
                <span style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a className="ab-report-cta" href={r.pdf} target="_blank" rel="noopener noreferrer">View PDF</a>
                  <a className="ab-report-cta" href={r.pdf} download>Download</a>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
