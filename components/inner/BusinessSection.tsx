import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'
import Split from '@/components/inner/Split'
import ProductFilter from '@/components/inner/ProductFilter'
import type { Business } from '@/components/about/data'

// One business page body: intro, manufacturing path and product portfolio (products: store/productsSlice.ts).
// ponytail: Steering & Suspension and Lightweighting reuse the Drivetrain manufacturing steps until their own content is supplied.

const STEPS = [
  { tag: 'ENGINEERING', title: 'Design and simulate', text: '3D modelling, forging and casting simulation, gear analysis, CAD/CAM and FEA.' },
  { tag: 'TOOLING', title: 'Prepare production', text: 'In-house die design and manufacturing, die sinking, VMC, CNC lathe, EDM and wire-cut.' },
  { tag: 'FORMING', title: 'Create the component', text: 'Hot, warm and cold forging, billet preparation, temperature-controlled presses and reduce rolling.' },
  { tag: 'MACHINING', title: 'Achieve precision', text: 'CNC turning, turn-mill, VMC, honing, grinding, broaching, spline rolling and gear hobbing.' },
  { tag: 'TREATMENT', title: 'Develop performance', text: 'GCN+O, mesh belt furnaces, normalising, induction hardening, sealed quench and surface coating.' },
  { tag: 'VALIDATION', title: 'Verify requirements', text: 'CMM, gear, form, roughness, material, torque and endurance testing.' },
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

          {biz.slug === 'drivetrain' && (
            <>
              <div className="ab-gap">
                <Split
                  title={<>Forming and machining at industrial scale.</>}
                  image="driveline-forming-machining" alt="Engineer inspecting a machined component beside a CNC machine"
                >
                  Hot and warm presses range from 600T to 2500T; cold forging presses range from 100T to 1000T. The presentation also lists 800+ CNC turning and turn-mill machines, 90+ VMCs, 40+ broaching machines, 25+ honing machines and 20 CNC grinding machines.
                </Split>
              </div>
              <div className="ab-gap">
                <Split
                  reverse
                  title={<>Quality is part of the process.</>}
                  image="driveline-quality" alt="Engineer running a Zeiss CMM inspection on a machined housing"
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
          <ProductFilter business={biz.slug} />
          <p className="ab-note">Representative product imagery comes from the HRPTL presentation. Final technical names should be confirmed against the approved catalogue.</p>
        </div>
      </section>
    </>
  )
}
