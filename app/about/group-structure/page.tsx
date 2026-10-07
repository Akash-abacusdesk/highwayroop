import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import { CAPABILITIES, UNITS } from '@/components/about/data'

export const metadata: Metadata = { title: 'Group Structure | Highway Roop' }

export default function GroupStructure() {
  return (
    <>
      <PageHero
        title={<>Specialist businesses.<br />Connected at scale.</>}
        copy="Highway Industries, Roop Automotives and Chamundi brought together through one precision-manufacturing platform."
        image="home-about"
      />
      <SubNav />

      <section className="ab-section ab-soft">
        <div className="shell">
          <SectionHead title={<>Three businesses. One precision platform.</>} />
          <div className="ab-platform">
            <div>
              <span className="ab-label">PARENT PLATFORM</span>
              <h2>Highway Roop Precision Technologies Ltd.</h2>
            </div>
            <p>
              Leading Indian precision auto-components group with comprehensive product capabilities across engine,
              transmission, driveline and steering systems.
            </p>
          </div>
          <div className="ab-units">
            {UNITS.map(u => (
              <article className="ab-unit" key={u.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src={`/assets/${u.image}.webp`} alt={u.title} />
                <div className="ab-unit-copy">
                  <span className="ab-share">{u.share}</span>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-section">
        <div className="shell">
          <SectionHead title="End-to-end manufacturing capabilities." />
          <div className="ab-caps">
            {CAPABILITIES.map(c => (
              <article className="ab-cap" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
