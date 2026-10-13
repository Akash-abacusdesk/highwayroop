import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'

export const metadata: Metadata = { title: 'Governance | Highway Roop' }

const cert = (id: string) => ({ slot: 'CERTIFICATE', action: 'View certificate', image: `/assets/certificates/${id}.webp`, file: `/assets/certificates/${id}.pdf` })
const CERTS = [
  { tag: 'AUTOMOTIVE QUALITY', title: 'IATF 16949:2016', text: 'Automotive quality management system, certified by BSI.', ...cert('iatf-16949') },
  { tag: 'QUALITY', title: 'ISO 9001:2015', text: 'Quality management system, certified by BSI.', ...cert('iso-9001') },
  { tag: 'ENVIRONMENT', title: 'ISO 14001:2015', text: 'Environmental management system, certified by Intertek.', ...cert('iso-14001') },
  { tag: 'HEALTH & SAFETY', title: 'ISO 45001:2018', text: 'Occupational health and safety management system, certified by Intertek.', ...cert('iso-45001') },
  { tag: 'ENERGY', title: 'ISO 50001:2018', text: 'Energy management system, certified by Intertek.', ...cert('iso-50001') },
  { tag: 'INFORMATION SECURITY', title: 'ISO/IEC 27001:2022', text: 'Information security management system, certified by DNV.', ...cert('iso-27001') },
]

const GOVERNANCE = [
  { tag: 'ETHICS', title: 'Zero tolerance for bribery and corruption', text: 'Anti-bribery, anti-corruption and whistleblower mechanisms apply across employees, contractors, consultants, business partners and other stakeholders.' },
  { tag: 'OVERSIGHT', title: 'CEO-led sustainability governance', text: 'The CEO is the highest authority for Business Responsibility policy oversight and is designated Chief Sustainability Officer, supported by corporate and plant representatives.' },
  { tag: 'STAKEHOLDERS', title: 'Grievance mechanisms in place', text: 'FY 2025-26 recorded 6 employee and worker complaints and 40 customer/product observations; all were closed at year end.' },
  { tag: 'REVIEW', title: 'Board and quarterly compliance review', text: 'Policy performance is reviewed annually by the Board, while statutory compliance is reviewed quarterly.' },
]

export default function Governance() {
  return (
    <>
      <PageHero
        title={<>Systems for<br />consistent execution</>}
        copy="Ethics, accountability, policies and management systems reported for FY 2025-26."
        image="hero-governance-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Management systems and certifications</>}>
            The BRSR maps the Company’s responsible-business framework to ISO 14001, ISO 45001, ISO 27001 and IATF 16949. Policies are available publicly where approved, with the remaining policies available through the intranet.
          </SectionHead>
          <CardGrid cards={GOVERNANCE} cols={2} gap />
          <div className="ab-gap">
            <CardGrid cards={CERTS} cols={2} gap />
          </div>
          <p className="ab-note">Source: HRPTL Business Responsibility & Sustainability Report, FY 2025-26.</p>
        </div>
      </section>
    </>
  )
}
