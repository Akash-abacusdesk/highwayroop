import { ArrowRight } from 'lucide-react'
export default function LeadershipSection() {
  return (
    <section className="section leadership" id="leadership">
      <div className="shell">
        <div className="section-head reveal">
          <div className="section-kicker">
            <span>06</span>
            <p>Leadership</p>
          </div>
          <div>
            <h2>
              Leadership grounded<br />
              <em>in operational discipline.</em>
            </h2>
            <p>
              Dharmesh Arora, Chief Executive Officer, on consistency, performance and long-term customer relationships.
            </p>
          </div>
        </div>
        <div className="leadership-layout">
          <article className="leader-feature reveal">
            <div className="leader-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src="/assets/dharmesh-arora-ceo.webp" alt="Dharmesh Arora, CEO" />
            </div>
            <div className="leader-detail">
              <span>MESSAGE FROM THE CEO</span>
              <h3>Dharmesh Arora</h3>
              <blockquote>
                &ldquo;When an automaker chooses a component from Highway Roop, they are buying certainty&mdash;certainty
                that it will fit, perform and deliver consistency, shift after shift.&rdquo;
              </blockquote>
              <p>
                Our businesses operate around a common commitment to precision, operational excellence and enduring
                customer relationships.
              </p>
              <a
                href="https://www.linkedin.com/in/dharmesh-arora/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leadership profile <span><ArrowRight size={18} aria-hidden="true" /></span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
