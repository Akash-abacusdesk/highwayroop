import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'

export const metadata: Metadata = { title: 'CSR | Highway Roop' }

const PILLARS = [
  { tag: 'EDUCATION', title: 'School Support Programme', text: 'Infrastructure, teacher development, workbooks, computer and science laboratories for government schools.' },
  { tag: 'COMMUNITY', title: 'Health & well-being', text: 'Support for community health, essential infrastructure and humanitarian response.' },
  { tag: 'EMPOWERMENT', title: 'Women & girls', text: 'Functional literacy, awareness, skills and programmes supporting women and girls education.' },
  { tag: 'ENVIRONMENT', title: 'Community climate action', text: 'Awareness on pollution, water conservation, cleanliness, plantation and single-use plastics.' },
]

export default function Csr() {
  return (
    <>
      <PageHero
        title={<>Community work,<br />documented clearly.</>}
        copy="A place for approved CSR initiatives and measurable outcomes."
        image="hero-csr-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>CSR programmes<br />and outcomes.</>}>
            Roop VK Jain Foundation, established in 2018, structures community action across education, well-being, women empowerment and environmental stewardship.
          </SectionHead>
          <CardGrid cards={PILLARS} cols={2} />
          <p className="ab-note">For CSR collaboration and verified programme information: <a href="mailto:csr@highwayroop.com">csr@highwayroop.com</a></p>
        </div>
      </section>
    </>
  )
}
