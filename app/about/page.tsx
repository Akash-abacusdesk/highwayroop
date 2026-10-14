import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import Stats from '@/components/about/Stats'

export const metadata: Metadata = { title: 'Overview | Highway Roop' }

// `image` is omitted until the photo is supplied; a plain dark tile is shown meanwhile.
const MOSAIC: { image?: string; alt: string; caption: string }[] = [
  { image: 'about/forging-stamping', alt: 'Forging and stamping', caption: 'Forging & stamping' },
  { image: 'about/aluminium-die-casting', alt: 'Aluminium die casting', caption: 'Aluminium die casting' },
  { image: 'about/ultra-precision-machining', alt: 'Grinding a helical gear on an ultra-precision machine', caption: 'Ultra precision machining' },
  { image: 'about/cae-simulation', alt: 'Bevel gear forging simulation from CAD model to stress analysis', caption: 'Computer-aided engineering & simulation' },
  { image: 'about/assembly', alt: 'Assembly', caption: 'Assembly' },
  { image: 'about/surface-cleaning', alt: 'Surface cleaning', caption: 'Surface cleaning' },
]

export default function Overview() {
  return (
    <>
      <PageHero
        title={<>Integrated scale<br />Accountable execution</>}
        copy="A leading Indian precision auto-components group with end-to-end capabilities and a global support network."
        image="about/about-banner"
      />
      <SubNav />

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Precision engineering. Delivered at global scale</>}>
            Highway Roop Precision Technologies Ltd. is formed by Highway Industries, Roop Automotives and Chamundi, a recent
            acquisition in lightweighting, with annual revenue of approximately USD 315 Mn.
          </SectionHead>
          <div className="ab-story">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" srcSet="/assets/about/integrated-capabilities-800.webp 800w, /assets/about/integrated-capabilities.webp 1672w" sizes="(max-width:1050px) 100vw, 60vw" src="/assets/about/integrated-capabilities.webp" alt="Integrated precision manufacturing capabilities" />
            <div className="ab-story-panel">
              <span className="ab-label">INTEGRATED CAPABILITIES</span>
              <h2>From metal forming to validated production</h2>
              <p>
                End-to-end capabilities in hot, warm and cold forging, HPDC, GDC, stampings, precision machining, heat
                treatment, coating and testing.
              </p>
            </div>
          </div>
          <Stats
            items={[
              ['5', 'DECADES OF COMBINED ENGINEERING LEGACY'],
              ['16', 'MANUFACTURING PLANTS'],
              ['14', 'WAREHOUSES'],
              ['50+', 'OEM AND TIER-1 RELATIONSHIPS'],
            ]}
          />
        </div>
      </section>

      <section className="ab-section">
        <div className="shell">
          <SectionHead title="Capabilities connected by one platform" />
          <div className="ab-mosaic">
            {MOSAIC.map(m => (
              <figure key={m.caption}>
                {m.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img loading="lazy" decoding="async" src={`/assets/${m.image}.webp`} alt={m.alt} />
                ) : <div className="ab-mosaic-ph" />}
                <figcaption>{m.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
