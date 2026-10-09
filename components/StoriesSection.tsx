import { ArrowRight } from 'lucide-react'

export default function StoriesSection() {
  return (
    <section className="section corporate-stories" id="innovation" aria-label="Innovation and quality">
      <div className="shell">
        <div className="stories-intro reveal">
          <h2>
            Enterprise priorities{' '}
            <em>that strengthen performance.</em>
          </h2>
          <p>
            Technology, quality, responsible operations and people development reinforce programme delivery and
            long-term organisational capability.
          </p>
        </div>

        <div className="story-grid">
          <article className="story-card story-innovation reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/assets/innovation-rd.webp" alt="Highway Roop engineers collaborating in an R&D centre" />
            <div className="story-copy">
              <span>R&amp;D · ENGINEERING · ICE + EV</span>
              <h2>Engineering &amp; Innovation</h2>
              <p>
                Product development, simulation, prototyping and process design are connected to solve complex
                manufacturing requirements before production begins.
              </p>
              <a href="/drivetrain#technology">
                Review engineering capabilities <b><ArrowRight size={18} aria-hidden="true" /></b>
              </a>
            </div>
          </article>

          <article className="story-card story-quality reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/assets/quality-lab.webp" alt="Precision component testing in a metrology laboratory" />
            <div className="story-copy">
              <span>METROLOGY · TESTING · VALIDATION</span>
              <h2>Quality</h2>
              <p>
                Structured quality systems, modern laboratories and end-to-end traceability protect every critical
                dimension and process.
              </p>
              <a href="/drivetrain#technology">
                Explore quality systems <b><ArrowRight size={18} aria-hidden="true" /></b>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

const ESG_SLIDES = [
  [3, 'Aerial view of a Highway Roop plant with rooftop solar panels and green surroundings'],
  [4, 'Aerial view of a Highway Roop plant with landscaped boundary greenery'],
  [5, 'Aerial view of a Highway Roop manufacturing plant surrounded by trees'],
  [6, 'Glass-fronted Highway Roop office and plant entrance with landscaped beds'],
] as const

export function SustainabilitySection() {
  return (
    <section className="section corporate-stories" aria-label="Sustainability">
      <div className="shell">
        <div className="story-grid story-single">
          <article className="story-card story-sustainability reveal" id="sustainability">
            {/* Crossfading photos (CSS animation in globals.css, .story-sustainability .esg-slide) */}
            {ESG_SLIDES.map(([n, alt]) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={n} className="esg-slide" loading="lazy" decoding="async"
                srcSet={`/assets/homepage/sustainability-${n}-800.webp 800w, /assets/homepage/sustainability-${n}.webp 1920w`} sizes="(max-width:1050px) 100vw, 1320px" src={`/assets/homepage/sustainability-${n}.webp`}
                alt={alt}
              />
            ))}
            <div className="story-copy">
              <span>ENVIRONMENT · PEOPLE · GOVERNANCE</span>
              <h2>Responsible operations, across every site</h2>
              <p>
                Our approach to responsible operations spans energy, water, waste, workplace safety, governance and
                community initiatives, with sustainability integrated into how we operate across our manufacturing
                footprint.
              </p>
              <a href="/sustainability/esg-overview">
                Explore sustainability <b><ArrowRight size={18} aria-hidden="true" /></b>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

const newsLinks = [
  {
    label: 'Engineering insights',
    title: 'Ideas from the world of precision manufacturing',
    text: 'Technology, manufacturing, quality and mobility perspectives.',
    image: '/assets/homepage/engineering-insights.webp',
    href: '/news-insights',
  },
  {
    label: 'Corporate resources',
    title: 'Information for stakeholders',
    text: 'Corporate presentations, official communications and other approved resources.',
    image: '/assets/homepage/corporate-resources.webp',
    href: '/HRPTL-Corporate-Presentation.pdf',
    external: true,
  },
]

export function NewsSection() {
  return (
    <section className="section corporate-stories news-section" id="media" aria-label="News and insights">
      <div className="shell">
        <div className="section-head reveal">
          <div>
            <h2>What is happening across Highway Roop</h2>
            <p>Company news, engineering developments, industry perspectives and corporate resources from across the group.</p>
          </div>
        </div>
        <div className="news-hub reveal">
          <a className="news-feature" href="/news-insights#news">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/assets/homepage/engineering-insights.webp" alt="" />
            <div className="news-feature-copy">
              <span>ENGINEERING INSIGHTS</span>
              <h3>Ideas from the world of precision manufacturing</h3>
              <p>Technology, manufacturing, quality and mobility perspectives.</p>
              <b>Explore engineering insights <ArrowRight size={18} aria-hidden="true" /></b>
            </div>
          </a>
          <div className="news-list">
            <a className="news-item" href="/news-insights#news">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src="/assets/homepage/announcements.webp" alt="" />
              <span className="news-item-copy">
                <small>COMPANY NEWS</small>
                <b>Announcements and milestones</b>
                <em>Corporate developments, acquisitions, partnerships and important company updates.</em>
              </span>
              <i><ArrowRight size={18} aria-hidden="true" /></i>
            </a>
            {newsLinks.map(({ label, title, text, image, href, external }) => (
              label === 'Engineering insights' ? null :
              <a
                key={label}
                className="news-item"
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  decoding="async"
                  src={image}
                  srcSet={`${image.replace(".webp", "-800.webp")} 800w, ${image} 1672w`}
                  sizes="(max-width:1050px) 100vw, 45vw"
                  alt=""
                />
                <span className="news-item-copy">
                  <small>{label.toUpperCase()}</small>
                  <b>{title}</b>
                  <em>{text}</em>
                </span>
                <i><ArrowRight size={18} aria-hidden="true" /></i>
              </a>
            ))}
          </div>
        </div>
        <a className="text-link accent news-cta" href="/news-insights">
          Visit News &amp; Insights <span><ArrowRight size={18} aria-hidden="true" /></span>
        </a>
      </div>
    </section>
  )
}

export function CareersSection() {
  return (
    <section className="section corporate-stories" aria-label="Careers">
      <div className="shell">
        <div className="story-grid story-single">
          <article className="story-card story-careers reveal" id="careers">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async"
              srcSet="/assets/hero-careers-v3-800.webp 800w, /assets/hero-careers-v3.webp 1672w" sizes="(max-width:1050px) 100vw, 1320px" src="/assets/hero-careers-v3.webp"
              alt="Highway Roop engineering and manufacturing professionals"
            />
            <div className="story-copy">
              <span>LEARNING · OPPORTUNITY · IMPACT</span>
              <h2>Build your career where engineering meets impact</h2>
              <p>
                Work with teams solving real manufacturing challenges across engineering, operations, technology and
                corporate functions, while helping build a global automotive platform from India.
              </p>
              <a href="/careers">
                Explore careers <b><ArrowRight size={18} aria-hidden="true" /></b>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
