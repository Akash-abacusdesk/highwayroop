import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import Stats from '@/components/about/Stats'

export const metadata: Metadata = { title: 'Overview | Highway Roop' }

const MOSAIC = [
  { image: 'advanced-forging', alt: 'Forging', caption: 'Forging & stamping' },
  { image: 'lightweighting-ev', alt: 'Aluminium die casting', caption: 'Aluminium die casting' },
  { image: 'tooling-engineering', alt: 'Precision tooling', caption: 'Advanced product engineering' },
]

export default function Overview() {
  return (
    <>
      <PageHero
        title={<>Integrated scale.<br />Accountable execution.</>}
        copy="A leading Indian precision auto-components group with end-to-end capabilities and a global support network."
        image="hero-precision"
      />
      <SubNav />

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Precision engineering. Delivered at global scale.</>}>
            Highway Roop Precision Technologies Ltd. is formed by Highway Industries, Roop Automotives and Chamundi, a recent
            acquisition in lightweighting, with annual revenue of approximately USD 315 Mn.
          </SectionHead>
          <div className="ab-story">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/assets/manufacturing-excellence.webp" alt="Precision manufacturing" />
            <div className="ab-story-panel">
              <span className="ab-label">INTEGRATED CAPABILITIES</span>
              <h2>From metal forming to validated production.</h2>
              <p>
                End-to-end capabilities in hot, warm and cold forging, HPDC, GDC, stampings, precision machining, heat
                treatment, coating and testing.
              </p>
            </div>
          </div>
          <Stats
            items={[
              ['50+', 'YEARS OF LEGACY'],
              ['15', 'MANUFACTURING PLANTS'],
              ['14', 'INTERNATIONAL WAREHOUSES'],
              ['7', 'COUNTRIES'],
            ]}
          />
        </div>
      </section>

      <section className="ab-section">
        <div className="shell">
          <SectionHead title="Capabilities connected by one platform." />
          <div className="ab-mosaic">
            {MOSAIC.map(m => (
              <figure key={m.image}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src={`/assets/${m.image}.webp`} alt={m.alt} />
                <figcaption>{m.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
