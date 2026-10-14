import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import PageHero from '@/components/about/PageHero'
import SectionHead from '@/components/about/SectionHead'
import PressGrid from '@/components/about/PressGrid'

export const metadata: Metadata = { title: 'News & Insights | Highway Roop' }

export default function NewsInsights() {
  return (
    <SiteShell>
      <PageHero
        title={<>News from<br />Highway Roop</>}
        copy="Official company communication and coverage of the Chamundi Die Cast acquisition."
        image="hero-news"
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
                complementing its existing strengths in forging and machining across steering & suspension and drivetrain
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
          <PressGrid />
        </div>
      </section>
    </SiteShell>
  )
}
