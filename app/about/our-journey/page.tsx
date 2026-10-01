import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import { MILESTONES } from '@/components/about/data'

export const metadata: Metadata = { title: 'Our Journey | Highway Roop' }

export default function OurJourney() {
  return (
    <>
      <PageHero
        title={<>More than five decades.<br />Built to move forward.</>}
        copy="Established engineering businesses brought together to build a scaled, India-based auto-components platform."
        image="hero-global-engineering-v3"
      />
      <SubNav />

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>A legacy of precision.<br />A platform for growth.</>} />
          <div className="ab-timeline">
            {MILESTONES.map(m => (
              <article className="ab-milestone" key={m.year}>
                <span className="ab-year">{m.year}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src={`/assets/${m.image}.webp`} alt={m.title} />
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
