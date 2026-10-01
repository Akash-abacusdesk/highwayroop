import { ArrowRight, Download } from 'lucide-react'

export default function StoriesSection() {
  return (
    <section className="section corporate-stories" id="innovation" aria-label="Innovation and quality">
      <div className="shell">
        <div className="stories-intro reveal">
          <h2>
            Enterprise priorities<br />
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
              <a href="#businesses">
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
              <a href="#businesses">
                Explore quality systems <b><ArrowRight size={18} aria-hidden="true" /></b>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export function SustainabilitySection() {
  return (
    <section className="section corporate-stories" aria-label="Sustainability">
      <div className="shell">
        <div className="story-grid story-single">
          <article className="story-card story-sustainability reveal" id="sustainability">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async"
              srcSet="/assets/sustainable-plant-800.webp 800w, /assets/sustainable-plant.webp 1672w" sizes="(max-width:1050px) 100vw, 1320px" src="/assets/sustainable-plant.webp"
              alt="Sustainable automotive plant with solar panels and water management"
            />
            <div className="story-copy">
              <span>ENVIRONMENT · PEOPLE · GOVERNANCE</span>
              <h2>Responsible Operations</h2>
              <p>
                Energy, water, waste, workplace safety and community initiatives form part of the group&rsquo;s approach
                to responsible operating performance.
              </p>
              <a href="#contact">
                Request sustainability information <b><ArrowRight size={18} aria-hidden="true" /></b>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

const newsLinks = [
  { label: 'Corporate updates', title: 'Business and technology developments', image: '/assets/innovation-rd.webp', href: '#contact', Icon: ArrowRight },
  { label: 'Press releases', title: 'Official company communications', image: '/assets/manufacturing-excellence.webp', href: '#contact', Icon: ArrowRight },
  {
    label: 'Download',
    title: 'Company presentation',
    image: '/assets/tooling-engineering.webp',
    href: '/HRPTL-Corporate-Presentation.pdf',
    Icon: Download,
    external: true,
  },
]

export function NewsSection() {
  return (
    <section className="section corporate-stories news-section" id="media" aria-label="News and insights">
      <div className="shell">
        <div className="section-head reveal">
          <div>
            <h2>
              News &amp; insights.<br />
              <em>Updates and resources.</em>
            </h2>
            <p>Company announcements, business developments and essential corporate resources.</p>
          </div>
        </div>
        <div className="news-hub reveal">
          <a className="news-feature" href="/about/our-journey">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/assets/hero-mobility-v2.webp" alt="" />
            <div className="news-feature-copy">
              <span>FEATURED</span>
              <h3>Building a scaled, India-based auto-components platform</h3>
              <p>Carlyle acquired a controlling stake in February 2025 and May 2026.</p>
              <b>Read the story <ArrowRight size={18} aria-hidden="true" /></b>
            </div>
          </a>
          <div className="news-list">
            {newsLinks.map(({ label, title, image, href, Icon, external }) => (
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
                  <small>{label}</small>
                  <b>{title}</b>
                </span>
                <i><Icon size={18} aria-hidden="true" /></i>
              </a>
            ))}
          </div>
        </div>
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
              srcSet="/assets/careers-team-800.webp 800w, /assets/careers-team.webp 1672w" sizes="(max-width:1050px) 100vw, 1320px" src="/assets/careers-team.webp"
              alt="Highway Roop engineering and manufacturing professionals"
            />
            <div className="story-copy">
              <span>LEARNING · OPPORTUNITY · IMPACT</span>
              <h2>Careers</h2>
              <p>
                Build deep engineering experience, solve real manufacturing problems and grow with an integrated global
                mobility business.
              </p>
              <a href="mailto:info@highwayroop.com?subject=Careers%20at%20Highway%20Roop">
                Explore opportunities <b><ArrowRight size={18} aria-hidden="true" /></b>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
