export default function StoriesSection() {
  return (
    <section className="section corporate-stories" id="innovation" aria-label="Innovation, quality, sustainability, careers and media">
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
            <img src="/assets/innovation-rd.png" alt="Highway Roop engineers collaborating in an R&D centre" />
            <div className="story-copy">
              <span>R&amp;D · ENGINEERING · ICE + EV</span>
              <h2>Engineering &amp; Innovation</h2>
              <p>
                Product development, simulation, prototyping and process design are connected to solve complex
                manufacturing requirements before production begins.
              </p>
              <a href="#capabilities">
                Review engineering capabilities <b>→</b>
              </a>
            </div>
          </article>

          <article className="story-card story-quality reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/quality-lab.png" alt="Precision component testing in a metrology laboratory" />
            <div className="story-copy">
              <span>METROLOGY · TESTING · VALIDATION</span>
              <h2>Quality</h2>
              <p>
                Structured quality systems, modern laboratories and end-to-end traceability protect every critical
                dimension and process.
              </p>
              <a href="#capabilities">
                Explore quality systems <b>→</b>
              </a>
            </div>
          </article>

          <article className="story-card story-sustainability reveal" id="sustainability">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/sustainable-plant.png"
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
                Request sustainability information <b>→</b>
              </a>
            </div>
          </article>

          <article className="story-card story-careers reveal" id="careers">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/careers-team.png"
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
                Explore opportunities <b>→</b>
              </a>
            </div>
          </article>
        </div>

        <div className="media-hub reveal" id="media">
          <div>
            <span>NEWS &amp; RESOURCES</span>
            <h2>Corporate information and updates</h2>
            <p>Company announcements, business developments and essential corporate resources.</p>
          </div>
          <div className="media-links">
            <a href="#contact">
              <span>Corporate updates</span>
              <b>Business and technology developments</b>
              <i>→</i>
            </a>
            <a href="#contact">
              <span>Press releases</span>
              <b>Official company communications</b>
              <i>→</i>
            </a>
            <a
              href="https://highwayroop.com/assets/images/HRPTL%20Corporate%20Presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download</span>
              <b>Company presentation</b>
              <i>→</i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
