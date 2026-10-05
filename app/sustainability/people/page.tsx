import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'

export const metadata: Metadata = { title: 'People | Highway Roop' }

const RECOGNITION = [
  { tag: 'WORKPLACE EQUALITY', title: 'India Workplace Equality Index 2023', text: 'Bronze recognition.' },
  { tag: 'DIVERSITY & INCLUSION', title: 'ASSOCHAM 2023', text: 'Best Employer for Diversity & Inclusion Policies, second runner-up.' },
  { tag: 'SAFETY', title: 'Exemplary Safety Practices', text: 'CII National EHS Circle Competition 2022 recognition.' },
  { tag: 'MANAGEMENT SYSTEM', title: 'ISO 45001', text: 'Occupational health and safety certification listed in the presentation.' },
]

export default function People() {
  return (
    <>
      <PageHero
        title={<>People and<br />workplace safety.</>}
        copy="Recognition for equality, inclusion and safety practices."
        image="hero-people-careers-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Workplace<br />recognition.</>}>
            The presentation records these recognitions; no unsupported people metrics are added.
          </SectionHead>
          <CardGrid cards={RECOGNITION} cols={2} />
        </div>
      </section>
    </>
  )
}
