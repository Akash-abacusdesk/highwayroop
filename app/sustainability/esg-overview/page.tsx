import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'

export const metadata: Metadata = { title: 'ESG Overview | Highway Roop' }

const AREAS = [
  { title: 'Environment', text: 'Carbon-neutrality roadmap and environmental recognition.', href: '/sustainability/environment' },
  { title: 'People', text: 'Workplace equality, diversity and safety recognition.', href: '/sustainability/people' },
  { title: 'CSR', text: 'Framework for verified community initiatives.', href: '/sustainability/csr' },
  { title: 'Governance', text: 'Management systems and certifications.', href: '/sustainability/governance' },
  { title: 'Reports & Policies', text: 'Organised list of documents and certificates.', href: '/sustainability/reports-policies' },
]

export default function EsgOverview() {
  return (
    <>
      <PageHero
        title={<>Responsible progress,<br />organised.</>}
        copy="A clear view of environment, people, CSR, governance, and corporate documents."
        image="hero-esg-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Explore the ESG areas.</>}>
            The presentation highlights environmental milestones and recognition in workplace equality, safety and sustainability.
          </SectionHead>
          <CardGrid cards={AREAS} />
        </div>
      </section>
    </>
  )
}
