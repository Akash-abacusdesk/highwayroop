import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'
import Stats from '@/components/about/Stats'

export const metadata: Metadata = { title: 'Environment | Highway Roop' }

// The reduction roadmap is from the FY 2025-26 Sustainability Report.
const PHASES = [
  { n: '01', title: 'Build momentum', years: 'FY 2026-29', steps: [['10%', 'FY 2026-27'], ['20%', 'FY 2027-28'], ['25%', 'FY 2028-29']] },
  { n: '02', title: 'Scale reduction', years: 'FY 2030-34', steps: [['50%', 'FY 2030-31'], ['55%', 'FY 2031-32'], ['60%', 'FY 2032-33'], ['70%', 'FY 2033-34']] },
  { n: '03', title: 'Close the gap', years: 'FY 2034-40', steps: [['75%', 'FY 2034-35'], ['80%', 'FY 2035-36'], ['85%', 'FY 2036-37'], ['90%', 'FY 2037-38'], ['95%', 'FY 2038-39'], ['100%', 'FY 2039-40']] },
]

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
        title={<>A roadmap for<br />carbon reduction</>}
        copy="FY 2025-26 environmental performance and the long-term carbon-reduction pathway."
        image="hero-environment-v3"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Carbon-neutrality roadmap</>}>
            A staged reduction pathway from FY 2026-27 to net zero in FY 2039-40. The dark endpoint marks the 100% target.
          </SectionHead>
          <div className="ab-roadmap">
            {PHASES.map(p => (
              <article className="rm-phase" key={p.n}>
                <header className="rm-intro"><span>Phase {p.n}</span><h3>{p.title}</h3><p>{p.years}</p></header>
                <ol className={`rm-track rm-${p.steps.length}`} style={{ '--n': p.steps.length } as React.CSSProperties} aria-label={`Phase ${p.n} milestones`}>
                  {p.steps.map(([pct, fy]) => (
                    <li key={fy} className={pct === '100%' ? 'net-zero' : undefined}>
                      {pct === '100%' && <small>Net zero</small>}
                      <strong>{pct}</strong><i aria-hidden="true" /><span>{fy}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>
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
