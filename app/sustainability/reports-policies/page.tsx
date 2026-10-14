import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'

export const metadata: Metadata = { title: 'Reports & Policies | Highway Roop' }

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
        </div>
      </section>
    </>
  )
}
