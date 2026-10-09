import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import PageHero from '@/components/about/PageHero'
import SectionHead from '@/components/about/SectionHead'

export const metadata: Metadata = {
  title: 'Financial Reports | Highway Roop',
  description: 'View and download the Highway Roop financial report for FY 2024–25.',
}

// Set `pdf` to e.g. '/reports/financial-report-2024-25.pdf' (file in public/reports) once the report is approved.
const REPORT: { year: string; pdf?: string } = { year: '2024–25' }

export default function FinancialReports() {
  return (
    <SiteShell>
      <PageHero
        title="Financial Reports"
        copy="Access Highway Roop’s financial information for the latest financial year."
        image="hero-investor-v2"
      />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Financial report<br />FY {REPORT.year}</>} />
          <div className="ab-reports">
            <article className="ab-report">
              <div className="ab-report-cover" aria-hidden="true"><span>HIGHWAY ROOP</span><strong>Financial<br />Report</strong><b>{REPORT.year}</b></div>
              <div>
                <h3>Financial Report {REPORT.year}</h3>
                <p>Financial Year {REPORT.year}</p>
              </div>
              {REPORT.pdf
                ? <a className="ab-report-cta" href={REPORT.pdf} target="_blank" rel="noopener noreferrer">View / Download PDF</a>
                : <a className="ab-report-cta" role="link" aria-disabled="true" title="PDF pending publication">View / Download PDF</a>}
            </article>
          </div>
          <p className="ab-reports-note">The PDF link is ready to be activated when the approved report file is supplied.</p>
        </div>
      </section>
    </SiteShell>
  )
}
