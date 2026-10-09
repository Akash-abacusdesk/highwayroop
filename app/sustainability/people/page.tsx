import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'
import Stats from '@/components/about/Stats'

export const metadata: Metadata = { title: 'People | Highway Roop' }

const RECOGNITION = [
  { tag: 'WORKPLACE EQUALITY', title: 'India Workplace Equality Index 2023', text: 'Bronze recognition.' },
  { tag: 'DIVERSITY & INCLUSION', title: 'ASSOCHAM 2023', text: 'Best Employer for Diversity & Inclusion Policies, second runner-up.' },
  { tag: 'SAFETY', title: 'Exemplary Safety Practices', text: 'CII National EHS Circle Competition 2022 recognition.' },
  { tag: 'MANAGEMENT SYSTEM', title: 'ISO 45001', text: 'Occupational health and safety certification listed in the presentation.' },
]

const PEOPLE_DATA = [
  { tag: 'WORKFORCE', title: '3,005 employees and workers', text: '304 employees and 2,701 workers were reported as at 31 March 2026.' },
  { tag: 'INCLUSION', title: '470 women across the workforce', text: '24 female employees and 446 female workers were reported for FY 2025-26.' },
  { tag: 'TRAINING', title: '100% coverage reported', text: 'Training and career-development reviews covered 304 employees and 2,701 workers.' },
  { tag: 'SAFETY', title: 'Zero fatalities', text: 'The BRSR reports no fatalities or high-consequence work-related injuries in FY 2025-26.' },
]

export default function People() {
  return (
    <>
      <PageHero
        title={<>People and<br />workplace safety</>}
        copy="Workforce, inclusion and occupational-health disclosures from the FY 2025-26 BRSR."
        image="hero-people-careers-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>People and workplace safety</>}>
            HRPTL’s occupational health and safety system is aligned with ISO 45001 and covers hazard identification, risk assessment, incident reporting, emergency preparedness, PPE management and safety training across plant operations.
          </SectionHead>
          <Stats items={[["304", "EMPLOYEES"], ["2,701", "WORKERS"], ["141", "EMPLOYEE PROGRAMMES"], ["107", "WORKER PROGRAMMES"]]} />
          <div className="ab-gap">
            <CardGrid cards={PEOPLE_DATA} cols={2} gap />
          </div>
        </div>
      </section>
      <section className="ab-section ab-soft">
        <div className="shell">
          <SectionHead title={<>A safer, more inclusive workplace</>}>
            Employees and workers can report unsafe acts, near misses and conditions through supervisors, safety observations, training sessions and safety committees. The Company reports accessible premises, equal-opportunity provisions, first-aid and emergency medical support, and grievance channels managed by Human Resources.
          </SectionHead>
          <CardGrid cards={RECOGNITION} cols={2} />
        </div>
      </section>
    </>
  )
}
