import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'

export const metadata: Metadata = { title: 'Governance | Highway Roop' }

const slot = { slot: 'CERTIFICATE', action: 'View certificate' }
const CERTS = [
  { tag: 'QUALITY', title: 'IATF 16949', text: 'Automotive quality management.', ...slot },
  { tag: 'ENVIRONMENT', title: 'ISO 14001', text: 'Environmental management.', ...slot },
  { tag: 'HEALTH & SAFETY', title: 'ISO 45001', text: 'Occupational health and safety.', ...slot },
  { tag: 'INFORMATION SECURITY', title: 'ISO 27001 / TISAX', text: 'Information security standards.', ...slot },
]

export default function Governance() {
  return (
    <>
      <PageHero
        title={<>Systems for<br />consistent execution.</>}
        copy="Certifications listed in the HRPTL corporate presentation."
        image="hero-governance-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Management systems<br />and certifications.</>}>
            A visual library of the management-system certifications listed in the corporate presentation. Approved certificate scans or PDF previews can be placed directly in each slot.
          </SectionHead>
          <CardGrid cards={CERTS} cols={2} gap />
          <p className="ab-note">Detailed board, ethics and compliance disclosures require approved source material.</p>
        </div>
      </section>
    </>
  )
}
