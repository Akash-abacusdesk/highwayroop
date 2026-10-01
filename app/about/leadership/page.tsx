import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import { LEADERS } from '@/components/about/data'

export const metadata: Metadata = { title: 'Leadership | Highway Roop' }

const initials = (name: string) => name.split(' ').map(w => w[0]).join('').slice(0, 2)

export default function Leadership() {
  return (
    <>
      <PageHero
        title={<>Leadership grounded in<br />operational discipline.</>}
        copy="Business-unit leadership and corporate functions aligned behind one integrated platform."
        image="hero-precision"
      />
      <SubNav />

      <section className="ab-section">
        <div className="shell">
          <div className="ab-ceo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/assets/dharmesh-arora-ceo.webp" alt="Dharmesh Arora" />
            <div className="ab-ceo-copy">
              <span className="ab-label">CHIEF EXECUTIVE OFFICER</span>
              <h2>Dharmesh Arora</h2>
              <p>CEO, Highway Roop Precision Technologies Ltd.</p>
              <span className="ab-linkedin" aria-hidden="true">in</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-section ab-soft">
        <div className="shell">
          <SectionHead title="Business leadership.">
            Leadership across business units, finance, people, procurement, marketing, technology, compliance, strategy,
            communications and manufacturing excellence.
          </SectionHead>
          <div className="ab-leaders">
            {LEADERS.map(l => (
              <article className="ab-leader" key={l.name}>
                <div className="ab-leader-photo"><span aria-hidden="true">{initials(l.name)}</span></div>
                <div className="ab-leader-copy">
                  <h3>{l.name}</h3>
                  <p className="ab-role">{l.role}</p>
                  <p className="ab-bio">{l.bio}</p>
                  <span className="ab-linkedin" aria-hidden="true">in</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
