import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import PageHero from '@/components/about/PageHero'
import SectionHead from '@/components/about/SectionHead'
import Split from '@/components/inner/Split'
import ProductFilter, { type Product } from '@/components/inner/ProductFilter'

export const metadata: Metadata = { title: 'Products & Solutions | Highway Roop' }

const GROUPS = {
  shafts: 'Shafts & pinions',
  differential: 'Differential components',
  joints: 'Yokes & joints',
  housings: 'Housings & flanges',
}

const p = (group: string, n: number, name: string): Product => ({ group, image: `driveline-product-${String(n).padStart(2, '0')}`, name })
const PRODUCTS: Product[] = [
  p('shafts', 3, 'Forged driveline shaft'), p('shafts', 4, 'Splined transmission shaft'),
  p('shafts', 6, 'Precision shaft component'), p('shafts', 14, 'Machined pinion shaft'),
  p('differential', 10, 'Differential assembly'), p('differential', 8, 'Differential gear'),
  p('differential', 9, 'Differential side gear'), p('differential', 11, 'Differential housing'),
  p('joints', 13, 'Precision yokes'), p('joints', 31, 'Machined yoke family'),
  p('joints', 32, 'Forged yoke'), p('joints', 33, 'Tubular driveline component'),
  p('housings', 27, 'Machined housing'), p('housings', 35, 'Differential carrier'),
  p('housings', 36, 'Splined flange'), p('housings', 37, 'Machined flange plate'),
]

export default function Products() {
  return (
    <SiteShell>
      <PageHero
        title={<>The driveline<br />product portfolio.</>}
        copy="Representative components from the supplied corporate presentation, organised into clear product families."
        image="hero-products-v2"
      />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Find a product<br />by component family.</>}>
            Use the filters below to view the driveline portfolio. Manufacturing details live on the Technology &amp; Manufacturing page.
          </SectionHead>
          <ProductFilter groups={GROUPS} products={PRODUCTS} />
          <p className="ab-note">Representative product imagery comes from the HRPTL presentation. Final technical names should be confirmed against the approved catalogue.</p>
        </div>
      </section>
      <section className="ab-section ab-soft">
        <div className="shell">
          <Split
            title={<>Want to see<br />how they are made?</>}
            image="advanced-forging" alt="Forging process"
            cta={{ href: '/technology', label: 'Technology & Manufacturing' }}
          >
            Explore the forming, machining, treatment and validation processes behind the product portfolio.
          </Split>
        </div>
      </section>
    </SiteShell>
  )
}
