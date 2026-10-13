import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'

export const metadata: Metadata = {
  title: 'Vision & Mission | Highway Roop',
  description: 'The mission, vision and 3T 3P values that guide Highway Roop Precision Technologies.',
}

const PILLARS = ['Torque', 'Safety', 'Reliability']

const VALUES = [
  { tag: 'T / 01', title: 'Transparency', text: 'Openness and honesty for shared success' },
  { tag: 'T / 02', title: 'Trust', text: 'Empower ownership without micromanagement' },
  { tag: 'T / 03', title: 'Teamwork', text: 'Combine diversity to achieve more' },
  { tag: 'P / 01', title: 'Passion', text: 'Relentless dedication to achieving our goals' },
  { tag: 'P / 02', title: 'Performance', text: 'Focused on results and high-quality outcomes' },
  { tag: 'P / 03', title: 'Partnership', text: 'Sustainable, long-term growth' },
]

export default function VisionMission() {
  return (
    <>
      <PageHero
        title={<>Vision &amp; Mission</>}
        copy="Driven by precision. United by purpose. Built for absolute reliability."
        image="about/about-banner"
      />
      <SubNav />

      <section className="ab-section">
        <div className="shell ab-split vm-mission">
          <div>
            <span className="ab-label">MISSION STATEMENT</span>
            <h2 className="ab-heading">Engineering confidence into every movement</h2>
            <p>
              We partner with the mobility industry to deliver superior torque performance and uncompromising safety through
              precision-engineered solutions, harnessing technology, operational excellence and enduring relationships.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async" srcSet="/assets/about/mission-assembly-800.webp 800w, /assets/about/mission-assembly.webp 1672w" sizes="(max-width:1050px) 100vw, 640px" src="/assets/about/mission-assembly.webp" alt="Operators working at a component assembly line" />
        </div>
      </section>

      <section className="ab-section ab-dark" id="vision">
        <div className="shell ab-split">
          <div>
            <span className="ab-label">VISION STATEMENT</span>
            <h2 className="ab-heading">Absolute reliability. <em>For every journey</em></h2>
            <p>We envision a world where mobility is synonymous with absolute reliability, powered by our torque and safety solutions.</p>
          </div>
          <div className="ab-values">
            {PILLARS.map((p, i) => <div key={p}><strong>0{i + 1}</strong><span>{p}</span></div>)}
          </div>
        </div>
      </section>

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>The principles that move us</>}>
            Our 3T 3P values: three Ts and three Ps that shape how we work with each other, our customers and our partners.
          </SectionHead>
          <CardGrid cards={VALUES} />
        </div>
      </section>
    </>
  )
}
