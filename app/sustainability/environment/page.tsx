import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'
import Stats from '@/components/about/Stats'

export const metadata: Metadata = { title: 'Environment | Highway Roop' }

const METRICS = [
  { tag: 'ENERGY', title: '72,102 GJ total energy', text: 'FY 2025-26 total energy consumption, including 12,125 GJ from renewable sources.' },
  { tag: 'EMISSIONS', title: '10,222 tCO₂e Scope 1 + 2', text: 'Reported greenhouse-gas emissions for FY 2025-26: 1,424 tCO₂e Scope 1 and 8,799 tCO₂e Scope 2.' },
  { tag: 'WATER', title: '61,410 kL consumed', text: '61,986 kL withdrawn, with wastewater treatment and reuse systems across facilities.' },
  { tag: 'WASTE', title: '4,480.46 MT recovered', text: 'All reported generated waste was recorded as recycled or recovered; 0.00033 MT was incinerated.' },
]

export default function Environment() {
  return (
    <>
      <PageHero
        title={<>Environmental<br />performance</>}
        copy="FY 2025-26 environmental performance disclosures."
        image="hero-environment-v3"
      />
      <SubNav />
      <section className="ab-section ab-soft">
        <div className="shell">
          <SectionHead title={<>FY 2025-26 environmental performance</>}>
            BRSR disclosures cover the Company’s operations, excluding corporate-office data where noted in the report. The figures below are reported values, not estimates.
          </SectionHead>
          <Stats items={[["2.6 MW", "ROOFTOP SOLAR CAPACITY"], ["7 MW DC", "RENEWABLE POWER PPA"], ["0.6 MW", "WIND ENERGY USED"], ["100%", "WASTE RECOVERED"]]} />
          <div className="ab-gap">
            <CardGrid cards={METRICS} cols={2} gap />
          </div>
        </div>
      </section>
      <section className="ab-section ab-soft">
        <div className="shell">
          <SectionHead title={<>How we reduce impact</>}>
            HRPTL reports source segregation, authorised recycling, ETP/STP treatment, water reuse, safer chemical handling and energy-efficiency upgrades across its establishments.
          </SectionHead>
          <CardGrid cards={[
            { tag: 'ENERGY', title: 'Renewable power and efficiency', text: 'Rooftop solar, a renewable-energy PPA, wind energy, IE4 motor replacements and lithium-ion UPS batteries support lower energy intensity.' },
            { tag: 'WATER', title: 'Treat, reuse, conserve', text: 'Wastewater is treated through ETPs and STPs, then reused for gardening, domestic purposes and other operational requirements.' },
            { tag: 'WASTE', title: 'Segregate and recover', text: 'Hazardous and non-hazardous waste is segregated at source and sent to authorised recyclers and vendors.' },
            { tag: 'COMPLIANCE', title: 'Environmental controls', text: 'The BRSR reports no environmental-law non-compliance and no operations in ecologically sensitive areas requiring disclosure.' },
          ]} cols={2} gap />
        </div>
      </section>
    </>
  )
}
