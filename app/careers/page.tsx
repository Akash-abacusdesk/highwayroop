import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import PageHero from '@/components/about/PageHero'
import SectionHead from '@/components/about/SectionHead'
import CardGrid from '@/components/inner/CardGrid'
import LeadForm from '@/components/inner/LeadForm'

export const metadata: Metadata = { title: 'Careers | Highway Roop' }

const PATHS = [
  { tag: 'TECHNICAL', title: 'Engineering', text: 'Product engineering, simulation, tooling and process development.' },
  { tag: 'OPERATIONS', title: 'Manufacturing', text: 'Forging, casting, machining, assembly and automation.' },
  { tag: 'QUALITY', title: 'Testing & validation', text: 'Metrology, metallurgy, testing and quality systems.' },
  { tag: 'BUSINESS', title: 'Corporate functions', text: 'Finance, HR, strategy, compliance and technology.' },
]
const VALUES = ['Learn from live programmes', 'Work across disciplines', 'Grow through technical depth']
const STEPS = [
  ['01', 'Select a function', 'Tell us where you want to contribute.'],
  ['02', 'Share your profile', 'Add your resume or LinkedIn link.'],
  ['03', 'Talent team review', 'Your profile can be matched to relevant openings.'],
]

export default function Careers() {
  return (
    <SiteShell>
      <PageHero
        title={<>Build your career in<br />precision engineering</>}
        copy="Explore career paths across engineering, manufacturing, quality, supply chain and corporate functions."
        image="hero-careers-v3"
      />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Build the future of mobility</>}>
            Choose a career path that connects your skills with real engineering and manufacturing outcomes.
          </SectionHead>
          <CardGrid cards={PATHS} cols={2} />
        </div>
      </section>

      <section className="ab-section ab-dark ab-red">
        <div className="shell ab-split">
          <div>
            <h2 className="ab-heading">Your career. <em>Built through doing</em></h2>
            <p>Work on live automotive programmes, solve cross-functional challenges and build technical depth across a multi-location manufacturing network.</p>
          </div>
          <div className="ab-values">
            {VALUES.map((v, i) => <div key={v}><strong>0{i + 1}</strong><span>{v}</span></div>)}
          </div>
        </div>
      </section>

      <section className="ab-section ab-soft">
        <div className="shell">
          <SectionHead title={<>How to apply</>}>A simple three-step route from interest to talent-team review.</SectionHead>
          <div className="ab-steps">
            {STEPS.map(([n, t, p]) => <div key={n}><b>{n}</b><h3>{t}</h3><p>{p}</p></div>)}
          </div>
        </div>
      </section>

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Register your interest</>}>
            This is a front-end form design. It requires connection to an approved recruitment system before use.
          </SectionHead>
          <LeadForm submit="Register interest" fields={[
            { label: 'Full name', required: true },
            { label: 'Email', type: 'email', required: true },
            { label: 'Phone', type: 'tel' },
            { label: 'Area of interest', options: ['Engineering', 'Manufacturing', 'Quality', 'Corporate functions'] },
            { label: 'LinkedIn or resume link', type: 'url', wide: true },
            { label: 'Message', textarea: true },
          ]} />
        </div>
      </section>
    </SiteShell>
  )
}
