import { ArrowRight } from 'lucide-react'
export default function CorporateSection() {
  return (
    <section className="section corporate-overview" id="corporate">
      <div className="shell">
        <div className="section-head reveal">
          <div className="section-kicker">
            <p>Corporate overview</p>
          </div>
          <div>
            <h2>
              A focused platform<br />
              <em>for long-term value creation.</em>
            </h2>
            <p>
              Established engineering expertise, complementary manufacturing capabilities and global customer proximity
              position Highway Roop to serve the changing requirements of mobility.
            </p>
          </div>
        </div>

        <div className="corporate-proof reveal" aria-label="Corporate operating highlights">
          <article>
            <strong>50+</strong>
            <span>Years of combined<br />engineering legacy</span>
          </article>
          <article>
            <strong>12+</strong>
            <span>Manufacturing<br />facilities</span>
          </article>
          <article>
            <strong>14</strong>
            <span>International<br />warehouses</span>
          </article>
          <article>
            <strong>50+</strong>
            <span>OEM and Tier-1<br />relationships</span>
          </article>
        </div>

        <div className="corporate-layout">
          <article className="corporate-thesis reveal">
            <span>THE ENTERPRISE</span>
            <h3>
              Specialist depth.<br />
              Connected at scale.
            </h3>
            <p>
              Highway Roop brings established automotive manufacturing businesses together through one corporate
              platform&mdash;connecting product engineering, tooling, forging, aluminium die casting, precision
              machining, validation and global delivery.
            </p>
            <div className="corporate-tags">
              <span>Automotive components</span>
              <span>ICE + EV readiness</span>
              <span>Global delivery</span>
            </div>
          </article>
          <div className="corporate-pillars">
            <article className="reveal">
              <span>Integrated execution</span>
              <h3>From engineering to production</h3>
              <p>
                Connected development and manufacturing processes reduce handovers and support control through validated
                production.
              </p>
            </article>
            <article className="reveal">
              <span>Portfolio relevance</span>
              <h3>Critical mobility applications</h3>
              <p>
                Steering, transmission, suspension and powertrain expertise serves both established and emerging vehicle
                architectures.
              </p>
            </article>
            <article className="reveal">
              <span>Customer proximity</span>
              <h3>Global support network</h3>
              <p>
                Manufacturing operations and international warehousing help programmes move with speed, consistency and
                regional responsiveness.
              </p>
            </article>
          </div>
        </div>

        <div className="corporate-resources reveal">
          <div className="resource-intro">
            <span>CORPORATE RESOURCES</span>
            <h3>
              Company information,<br />
              clearly organised.
            </h3>
            <p>
              Access the current corporate presentation, review official company communications or connect directly with
              the corporate team.
            </p>
          </div>
          <div className="resource-links">
            <a
              href="https://highwayroop.com/assets/images/HRPTL%20Corporate%20Presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <small>Company overview</small>
                <b>Corporate presentation</b>
              </span>
              <i><ArrowRight size={18} aria-hidden="true" /></i>
            </a>
            <a href="#media">
              <span>
                <small>Latest information</small>
                <b>News and updates</b>
              </span>
              <i><ArrowRight size={18} aria-hidden="true" /></i>
            </a>
            <a href="mailto:info@highwayroop.com?subject=Corporate%20Information">
              <span>
                <small>Direct access</small>
                <b>Corporate enquiries</b>
              </span>
              <i><ArrowRight size={18} aria-hidden="true" /></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
