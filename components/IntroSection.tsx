import { ArrowRight } from 'lucide-react'
import type { IntroContent } from '@/types/content'
import IntroCarousel from '@/components/IntroCarousel'

const defaultContent: IntroContent = {
  "headingLine1": "One group",
  "headingLine2": "Complementary capabilities",
  "para1": "Highway Roop brings together established automotive businesses spanning drivetrain, steering and suspension, and lightweighting, supported by manufacturing, technology, quality and operational capabilities.",
  "para2": "",
  "ctaText": "Explore the Highway Roop Group",
  "ctaHref": "/about"
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
            {content.headingLine1}{' '}
            <em>{content.headingLine2}</em>
          </h2>
          <div className={content.para2 ? 'two-col-copy' : 'one-col-copy'}>
            <p>{content.para1}</p>
            {content.para2 && <p>{content.para2}</p>}
          </div>
          <a className="text-link accent" href={content.ctaHref}>
            {content.ctaText} <span><ArrowRight size={18} aria-hidden="true" /></span>
          </a>
        </div>
        <IntroCarousel />
      </div>
    </section>
  )
}
