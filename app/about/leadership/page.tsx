import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import { CEO_LINKEDIN, LEADERS } from '@/components/about/data'

export const metadata: Metadata = { title: 'Leadership | Highway Roop' }

const initials = (name: string) => name.split(' ').map(w => w[0]).join('').slice(0, 2)

export default function Leadership() {
  return (
    <>
      <PageHero
        title={<>Leadership grounded in<br />operational discipline</>}
        copy="Business-unit leadership and corporate functions aligned behind one integrated platform."
        image="hero-leadership"
        caption={<>
          <span className="ab-label">CHIEF EXECUTIVE OFFICER</span>
          <strong>Dharmesh Arora</strong>
          <a className="ab-linkedin" href={CEO_LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="Dharmesh Arora on LinkedIn">in</a>
        </>}
      />
      <SubNav />

      <section className="ab-section">
        <div className="shell">
          <SectionHead title="Business leadership">
            Leadership across business units, finance, people, procurement, marketing, technology, compliance, strategy,
            communications and manufacturing excellence.
          </SectionHead>
          <div className="ab-leaders">
            {LEADERS.map(l => (
              <article className="ab-leader" key={l.name}>
                <div className={`ab-leader-photo ${l.image ? 'has-image' : ''}`}>
                  {l.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img loading="lazy" decoding="async" src={l.image} alt={l.name} />
                  ) : (
                    <span aria-hidden="true">{initials(l.name)}</span>
                  )}
                </div>
                <div className="ab-leader-copy">
                  <h3>{l.name}</h3>
                  <p className="ab-role">{l.role}</p>
                  <p className="ab-bio">{l.bio}</p>
                  {l.linkedin && (
                    <a className="ab-linkedin" href={l.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${l.name} on LinkedIn`}>in</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
