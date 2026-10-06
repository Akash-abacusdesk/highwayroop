import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'

export const metadata: Metadata = { title: 'Environment | Highway Roop' }

// Reduction targets by financial year; the last entry is the net-zero endpoint.
const ROADMAP: [string, string][] = [
  ['10%', 'FY 2026-27'], ['20%', 'FY 2027-28'], ['25%', 'FY 2028-29'], ['50%', 'FY 2030-31'],
  ['55%', 'FY 2031-32'], ['60%', 'FY 2032-33'], ['70%', 'FY 2033-34'], ['75%', 'FY 2034-35'],
  ['80%', 'FY 2035-36'], ['85%', 'FY 2036-37'], ['90%', 'FY 2037-38'], ['95%', 'FY 2038-39'],
  ['100%', 'FY 2039-40'],
]
const PHASES: Record<number, string> = { 0: 'PHASE 01 · BUILD MOMENTUM', 3: 'PHASE 02 · SCALE REDUCTION', 7: 'PHASE 03 · CLOSE THE GAP' }

const AWARDS = [
  { tag: '2024', title: 'ACMA ESG Gold', text: 'Recognition listed in the presentation.', slot: 'AWARD IMAGE' },
  { tag: '2025', title: 'GreenCo Bronze', text: 'Recognition listed in the presentation.', slot: 'AWARD IMAGE' },
]

export default function Environment() {
  return (
    <>
      <PageHero
        title={<>A roadmap for<br />carbon reduction.</>}
        copy="Milestones set out in the HRPTL corporate presentation."
        image="hero-environment-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Carbon-neutrality<br />roadmap.</>}>
            A staged reduction pathway from FY 2026-27 to net zero in FY 2039-40. Read each milestone chronologically; the dark endpoint marks the 100% target.
          </SectionHead>
          <div className="ab-roadmap">
            {ROADMAP.map(([pct, fy], i) => (
              <div key={fy} className={PHASES[i] ? 'phase' : undefined}>
                {PHASES[i] && <small>{PHASES[i]}</small>}
                <strong>{pct}</strong>
                <span>{fy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ab-section ab-soft">
        <div className="shell">
          <SectionHead title={<>Environmental<br />recognition.</>} />
          <CardGrid cards={AWARDS} cols={2} gap />
        </div>
      </section>
    </>
  )
}
