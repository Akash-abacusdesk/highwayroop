import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import PageHero from '@/components/about/PageHero'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'
import Split from '@/components/inner/Split'

export const metadata: Metadata = { title: 'Technology & Manufacturing | Highway Roop' }

const STEPS = [
  { tag: 'ENGINEERING', title: 'Design and simulate', text: '3D modelling, forging and casting simulation, gear analysis, CAD/CAM and FEA.' },
  { tag: 'TOOLING', title: 'Prepare production', text: 'In-house die design and manufacturing, die sinking, VMC, CNC lathe, EDM and wire-cut.' },
  { tag: 'FORMING', title: 'Create the component', text: 'Hot, warm and cold forging, billet preparation, temperature-controlled presses and reduce rolling.' },
  { tag: 'MACHINING', title: 'Achieve precision', text: 'CNC turning, turn-mill, VMC, honing, grinding, broaching, spline rolling and gear hobbing.' },
  { tag: 'TREATMENT', title: 'Develop performance', text: 'GCN+O, mesh belt furnaces, normalising, induction hardening, sealed quench and surface coating.' },
  { tag: 'VALIDATION', title: 'Verify requirements', text: 'CMM, gear, form, roughness, material, torque and endurance testing.' },
]

export default function Technology() {
  return (
    <SiteShell>
      <PageHero
        title={<>How driveline components<br />are made.</>}
        copy="A connected path from engineering to production and validation."
        image="hero-technology-v2"
      />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Manufacturing,<br />step by step.</>}>
            Six connected stages make the production journey easy to understand. Product types are listed separately on the Products &amp; Solutions page.
          </SectionHead>
          <CardGrid cards={STEPS} />
        </div>
      </section>
      <section className="ab-section ab-soft">
        <div className="shell">
          <Split
            title={<>Forming and machining<br />at industrial scale.</>}
            image="manufacturing-excellence" alt="Precision machining facility"
            cta={{ href: '/products-solutions', label: 'See the products' }}
          >
            Hot and warm presses range from 600T to 2500T; cold forging presses range from 100T to 1000T. The presentation also lists 800+ CNC turning and turn-mill machines, 90+ VMCs, 40+ broaching machines, 25+ honing machines and 20 CNC grinding machines.
          </Split>
        </div>
      </section>
      <section className="ab-section">
        <div className="shell">
          <Split
            reverse
            title={<>Quality is part<br />of the process.</>}
            image="quality-lab" alt="Quality validation laboratory"
            bullets={['Zeiss CMM and gear testers', 'Form, roundness and roughness inspection', 'In-house calibration', 'Impact, torque and endurance testing']}
          >
            Metrology and metallurgy infrastructure supports dimensional, material and functional validation against drawing requirements.
          </Split>
        </div>
      </section>
    </SiteShell>
  )
}
