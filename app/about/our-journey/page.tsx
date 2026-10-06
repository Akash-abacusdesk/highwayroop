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
        title={<>Built over decades.<br />Shaped for what’s next.</>}
        copy="For more than five decades, our story has unfolded through changing technologies, evolving markets and a growing breadth of expertise. Each chapter has shaped the next, bringing us to Highway Roop today and the opportunities that lie ahead."
        image="hero-global-engineering-v3"
      />
      <SubNav />

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>A legacy of precision. A platform for growth.</>} />
          <div className="ab-timeline">
            {MILESTONES.map(m => (
              <article className="ab-milestone" key={m.year}>
                <span className="ab-year">{m.year}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src={`/assets/${m.image}.webp`} alt={m.title} />
                <div>
                  <span className="ab-label ab-milestone-label">{m.label}</span>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                  {m.tags && <p className="ab-milestone-tags">{m.tags}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-section ab-soft ab-closing">
        <div className="shell">
          <SectionHead title={<>Built on experience. <em>Driven by precision.</em></>}>
            Highway Roop brings together the knowledge, technology and execution to create precision solutions for a changing world of mobility.
          </SectionHead>
          <span className="ab-label ab-signoff">PRECISION IN MOTION.</span>
        </div>
      </section>
    </>
  )
}
