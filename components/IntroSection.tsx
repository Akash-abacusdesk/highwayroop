import { ArrowRight } from 'lucide-react'
import type { IntroContent } from '@/types/content'

const defaultContent: IntroContent = {
  headingLine1: 'Integrated scale.',
  headingLine2: 'Accountable execution.',
  para1: 'Highway Roop was formed by Highway Industries, Roop Automotives and Chamundi, with capabilities spanning forging, machining, aluminium die casting and captive tooling.',
  para2: 'More than five decades of combined engineering experience support safety-critical steering, transmission, suspension and powertrain programmes across ICE and EV applications.',
  ctaText: 'Explore the operating platform',
  ctaHref: '#businesses',
}

export default function IntroSection({ content = defaultContent }: { content?: IntroContent }) {
  return (
    <section className="section intro" id="about">
      <div className="shell intro-grid">
        <div className="section-kicker reveal">
          <span>01</span>
          <p>Who we are</p>
        </div>
        <div className="intro-copy reveal">
          <h2>
            {content.headingLine1}<br />
            <em>{content.headingLine2}</em>
          </h2>
          <div className="two-col-copy">
            <p>{content.para1}</p>
            <p>{content.para2}</p>
          </div>
          <a className="text-link accent" href={content.ctaHref}>
            {content.ctaText} <span><ArrowRight size={18} aria-hidden="true" /></span>
          </a>
        </div>
        <figure className="intro-visual reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async" src="/assets/manufacturing-excellence.webp" alt="Highway Roop precision manufacturing operations" />
        </figure>
      </div>
    </section>
  )
}
