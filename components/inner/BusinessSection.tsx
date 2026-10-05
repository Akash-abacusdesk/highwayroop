import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'
import Split from '@/components/inner/Split'
import ProductFilter, { type Product } from '@/components/inner/ProductFilter'
import type { Business } from '@/components/about/data'

// One business page body: intro, manufacturing path and product portfolio.
// ponytail: Steering & Suspension and Lightweighting reuse the Driveline steps and products until their own content is supplied.

const STEPS = [
  { tag: 'ENGINEERING', title: 'Design and simulate', text: '3D modelling, forging and casting simulation, gear analysis, CAD/CAM and FEA.' },
  { tag: 'TOOLING', title: 'Prepare production', text: 'In-house die design and manufacturing, die sinking, VMC, CNC lathe, EDM and wire-cut.' },
  { tag: 'FORMING', title: 'Create the component', text: 'Hot, warm and cold forging, billet preparation, temperature-controlled presses and reduce rolling.' },
  { tag: 'MACHINING', title: 'Achieve precision', text: 'CNC turning, turn-mill, VMC, honing, grinding, broaching, spline rolling and gear hobbing.' },
  { tag: 'TREATMENT', title: 'Develop performance', text: 'GCN+O, mesh belt furnaces, normalising, induction hardening, sealed quench and surface coating.' },
  { tag: 'VALIDATION', title: 'Verify requirements', text: 'CMM, gear, form, roughness, material, torque and endurance testing.' },
]

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

export default function BusinessSection({ biz }: { biz: Business }) {
  return (
    <>
      <section className="ab-section ab-biz-intro">
        <div className="shell">
          <div className="ab-redline" />
          <span className="ab-label">{biz.name.toUpperCase()}</span>
          <p className="ab-lead"><strong>{biz.intro}</strong> {biz.desc}</p>
        </div>
      </section>

      <section id="technology" className="ab-section ab-biz ab-soft">
        <div className="shell">
          <SectionHead title="Technology & Manufacturing" />
          <CardGrid cards={STEPS} />

          {biz.slug === 'driveline' && (
            <>
              <div className="ab-gap">
                <Split
                  title={<>Forming and machining<br />at industrial scale.</>}
                  image="manufacturing-excellence" alt="Precision machining facility"
                >
                  Hot and warm presses range from 600T to 2500T; cold forging presses range from 100T to 1000T. The presentation also lists 800+ CNC turning and turn-mill machines, 90+ VMCs, 40+ broaching machines, 25+ honing machines and 20 CNC grinding machines.
                </Split>
              </div>
              <div className="ab-gap">
                <Split
                  reverse
                  title={<>Quality is part<br />of the process.</>}
                  image="quality-lab" alt="Quality validation laboratory"
                  bullets={['Zeiss CMM and gear testers', 'Form, roundness and roughness inspection', 'In-house calibration', 'Impact, torque and endurance testing']}
                >
                  Metrology and metallurgy infrastructure supports dimensional, material and functional validation against drawing requirements.
                </Split>
              </div>
            </>
          )}
        </div>
      </section>

      <section id="products-solutions" className="ab-section ab-biz">
        <div className="shell">
          <SectionHead title="Products & Solutions" />
          <ProductFilter groups={GROUPS} products={PRODUCTS} />
          <p className="ab-note">Representative product imagery comes from the HRPTL presentation. Final technical names should be confirmed against the approved catalogue.</p>
        </div>
      </section>
    </>
  )
}
