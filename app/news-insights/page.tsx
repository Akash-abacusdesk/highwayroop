import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import PageHero from '@/components/about/PageHero'
import SectionHead from '@/components/about/SectionHead'
import { PRESS } from '@/components/about/data'

export const metadata: Metadata = { title: 'News & Insights | Highway Roop' }

export default function NewsInsights() {
  return (
    <SiteShell>
      <PageHero
        title={<>News from<br />Highway Roop</>}
        copy="Official company communication and coverage of the Chamundi Die Cast acquisition."
        image="lightweighting-ev"
      />

      <section className="ab-section" id="news">
        <div className="shell">
          <article className="ab-news-feature">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/assets/press-mint.webp" alt="Mint coverage - Highway Roop buys Chamundi Die Cast" />
            <div className="ab-news-copy">
              <span className="ab-label">29 SEPTEMBER 2026 · ACQUISITION</span>
              <h2>Highway Roop completes acquisition of Chamundi Die Cast</h2>
              <p>
                The acquisition adds aluminium die-casting and precision-machining capabilities to Highway Roop’s platform,
                complementing its existing strengths in forging and machining across steering, transmission and powertrain
                applications.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="ab-section ab-soft" id="media">
        <div className="shell">
          <SectionHead title="Press coverage">
            Coverage of the Chamundi Die Cast acquisition across business and auto-industry publications.
          </SectionHead>
          <div className="ab-news-grid">
            {PRESS.map(p => (
              <article className="ab-news-card" key={p.title}>
                <div className="ab-thumb">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img loading="lazy" decoding="async" src={p.image} alt={`${p.source} press clipping`} />
                  ) : (
                    <div className="ab-publication">{p.publication}</div>
                  )}
                </div>
                <div className="ab-news-body">
                  <small>{p.source}</small>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
