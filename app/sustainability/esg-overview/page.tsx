import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'

export const metadata: Metadata = { title: 'ESG Overview | Highway Roop' }

const AREAS = [
  { title: 'Environment', text: 'Energy, water, emissions, waste and the carbon-reduction roadmap.', href: '/sustainability/environment' },
  { title: 'People', text: 'Workforce, training, inclusion and occupational safety performance.', href: '/sustainability/people' },
  { title: 'CSR', text: 'Framework for verified community initiatives.', href: '/sustainability/csr' },
  { title: 'Governance', text: 'Ethics, oversight, grievance redressal and certifications.', href: '/sustainability/governance' },
  { title: 'Reports & Policies', text: 'FY 2025-26 Sustainability Report and BRSR source documents.', href: '/sustainability/reports-policies' },
]

export default function EsgOverview() {
  return (
    <>
      <PageHero
        title={<>Responsible progress,<br />organised.</>}
        copy="A clear view of FY 2025-26 environment, people, CSR, governance and reporting disclosures."
        image="hero-esg-v3"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Explore the ESG areas.</>}>
            The FY 2025-26 BRSR and Sustainability Report bring the operating picture together: 3,005 employees and workers, 72,102 GJ of energy consumed, 10,222 tCO₂e of Scope 1 and 2 emissions, and a 100% waste-recovery figure as reported.
          </SectionHead>
          <CardGrid cards={AREAS} />
        </div>
      </section>
    </>
  )
}
