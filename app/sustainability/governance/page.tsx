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

const plant = (id: string) => ({ slot: 'CERTIFICATE', action: 'View certificate', image: `/assets/certificates/plants/${id}.webp`, file: `/assets/certificates/plants/${id}.pdf` })
const PLANT_CERTS = [
  { group: 'IATF 16949:2016', note: 'Automotive quality management, certified by BSI.', cards: [
    { tag: 'SOHNA', title: 'Sohna plant', text: 'Valid until 27 May 2027.', ...plant('iatf-sohna') },
    { tag: 'IMT MANESAR', title: 'IMT Manesar · Plant 1', text: 'Plot 439. Valid until 5 Jun 2027.', ...plant('iatf-imt1') },
    { tag: 'CHENNAI', title: 'Chennai plant', text: 'Valid until 5 Jan 2028.', ...plant('iatf-chennai') },
    { tag: 'IMT MANESAR', title: 'IMT Manesar · Plant 2', text: 'Valid until 16 Jun 2029.', ...plant('iatf-imt2') },
  ] },
  { group: 'ISO 14001:2015', note: 'Environmental management system, certified by BSI.', cards: [
    { tag: 'SOHNA', title: 'Sohna · Plots 19, 209 & 210', text: 'Valid until 13 Jul 2027.', ...plant('ems-sohna') },
    { tag: 'IMT MANESAR', title: 'IMT Manesar · Plant 1', text: 'Valid until 31 Mar 2028.', ...plant('ems-imt1') },
    { tag: 'IMT MANESAR', title: 'IMT Manesar · Plant 2', text: 'Valid until 2 Feb 2028.', ...plant('ems-imt2') },
    { tag: 'CHENNAI', title: 'Chennai plant', text: 'Valid until 6 Apr 2028.', ...plant('ems-chennai') },
  ] },
  { group: 'ISO/IEC 27001:2022', note: 'Information security, site certificates issued by TÜV SÜD. Valid until 6 Nov 2028.', cards: [
    { tag: 'SOHNA', title: 'Sohna · Plot 19', text: 'Site certificate.', ...plant('isms-sohna-19') },
    { tag: 'SOHNA', title: 'Sohna · Plots 22 & 28', text: 'Site certificate.', ...plant('isms-sohna-22') },
    { tag: 'SOHNA', title: 'Sohna · Plots 209-210', text: 'Site certificate.', ...plant('isms-sohna-209') },
    { tag: 'IMT MANESAR', title: 'IMT Manesar · Plot 436', text: 'Site certificate.', ...plant('isms-imt-436') },
    { tag: 'IMT MANESAR', title: 'IMT Manesar · Plots 439-440', text: 'Site certificate.', ...plant('isms-imt-439') },
  ] },
  { group: 'TISAX® assessment', note: 'Information security for the automotive industry, issued by ENX Association. Valid until 20 Jan 2029.', cards: [
    { tag: 'SOHNA', title: 'Sohna plant', text: '19 Roz Ka Meo Industrial Area, Nuh.', ...plant('tisax-sohna') },
    { tag: 'IMT MANESAR', title: 'IMT Manesar · Plant 1', text: 'Plot 439, Sector 8.', ...plant('tisax-imt1') },
    { tag: 'IMT MANESAR', title: 'IMT Manesar · Plant 2', text: 'Plot 212, Sector 4.', ...plant('tisax-imt2') },
  ] },
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
      <section className="ab-section ab-soft">
        <div className="shell">
          <SectionHead title={<>Plant-wise certificates</>}>
            Certificates held at individual plants, with a preview and the full PDF for each.
          </SectionHead>
          {PLANT_CERTS.map(g => (
            <div className="ab-gap" key={g.group}>
              <h3 className="ab-cert-group">{g.group}<small>{g.note}</small></h3>
              <CardGrid cards={g.cards} cols={2} gap />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
