import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import PageHero from '@/components/about/PageHero'
import SectionHead from '@/components/about/SectionHead'
import ReportList, { type Report } from '@/components/inner/ReportList'

export const metadata: Metadata = {
  title: 'Annual Reports | Highway Roop',
  description: 'View and download Highway Roop annual reports by financial year.',
}

// Newest first. Add `pdf: '/reports/annual-report-2024-25.pdf'` (file in public/reports) once a report is approved.
const REPORTS: Report[] = [{ year: '2024–25' }, { year: '2023–24' }, { year: '2022–23' }]

export default function FinancialReports() {
  return (
    <SiteShell>
      <PageHero
        title="Annual Reports"
        copy="Access Highway Roop’s annual reports and financial information, organised by year."
        image="hero-investor-v2"
      />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Reports by<br />financial year</>}>
            Browse our latest annual reports. Reports are listed with the most recent financial year first.
          </SectionHead>
          <ReportList reports={REPORTS} />
          <p className="ab-reports-note">PDF links are ready to be activated when approved report files are supplied.</p>
        </div>
      </section>
    </SiteShell>
  )
}
