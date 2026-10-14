import type { Metadata } from 'next'
import '@/components/about/about.css'
import SubNav from '@/components/about/SubNav'

export const metadata: Metadata = {
  title: 'Vision & Mission | Highway Roop',
  description: 'The mission, vision and 3T 3P values that guide Highway Roop Precision Technologies.',
}

const PILLARS = ['Torque', 'Safety', 'Reliability']

const VALUES = [
  ['Transparency', 'Openness and honesty for shared success'],
  ['Trust', 'Empower ownership without micromanagement'],
  ['Teamwork', 'Combine diversity to achieve more'],
  ['Passion', 'Relentless dedication to achieving our goals'],
  ['Performance', 'Focused on results and high-quality outcomes'],
  ['Partnership', 'Sustainable, long-term growth'],
]

export default function VisionMission() {
  return (
    <>
      <header className="vm-head">
        <div className="shell">
          <div className="ab-redline" />
          <h1>Vision &amp; Mission</h1>
          <p>Driven by precision. United by purpose. Built for absolute reliability.</p>
        </div>
      </header>
      <SubNav />

      <main className="vm">
        <section className="shell vm-row">
          <h2><b>01</b>Mission</h2>
          <div>
            <p className="vm-statement">Engineering confidence into every movement.</p>
            <p className="vm-body">
              We partner with the mobility industry to deliver superior torque performance and uncompromising safety through
              precision-engineered solutions, harnessing technology, operational excellence and enduring relationships.
            </p>
          </div>
        </section>

        <section className="shell vm-row" id="vision">
          <h2><b>02</b>Vision</h2>
          <div>
            <p className="vm-statement">Absolute reliability, for every journey.</p>
            <p className="vm-body">We envision a world where mobility is synonymous with absolute reliability, powered by our torque and safety solutions.</p>
            <ul className="vm-pillars">{PILLARS.map(p => <li key={p}>{p}</li>)}</ul>
          </div>
        </section>

        <section className="shell vm-row">
          <h2><b>03</b>Values</h2>
          <div>
            <p className="vm-statement">The 3T 3P principles that move us.</p>
            <p className="vm-body">Three Ts and three Ps that shape how we work with each other, our customers and our partners.</p>
            <dl className="vm-values">
              {VALUES.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}
            </dl>
          </div>
        </section>
      </main>
    </>
  )
}
