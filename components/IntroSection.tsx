import { ArrowRight } from 'lucide-react'
import type { IntroContent } from '@/types/content'

const defaultContent: IntroContent = {
  "headingLine1": "One group.",
  "headingLine2": "Complementary capabilities.",
  "para1": "Highway Roop brings together established automotive businesses spanning driveline, steering and suspension, and lightweighting, supported by manufacturing, technology, quality and operational capabilities.",
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
        <figure className="intro-visual reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async" srcSet="/assets/home-intro-800.webp 800w, /assets/home-intro.webp 1672w" sizes="(max-width:1050px) 100vw, 50vw" src="/assets/home-intro.webp" alt="Operators working on a Highway Roop assembly line" />
        </figure>
      </div>
    </section>
  )
}
