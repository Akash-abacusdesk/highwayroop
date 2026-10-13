import { ArrowRight } from 'lucide-react'
export default function LeadershipSection() {
  return (
    <section className="section leadership" id="leadership">
      <div className="shell">
        <div className="section-head reveal">
          <div className="section-kicker">
            <span>02</span>
            <p>Leadership</p>
          </div>
          <div>
            <h2>Leadership built around execution</h2>
            <p>
              Highway Roop is led by a multidisciplinary team spanning automotive operations, technology, finance,
              people, procurement, strategy, compliance and communications, bringing together the expertise required to
              build and scale an integrated automotive platform.
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
                &ldquo;When a customer selects a component from Highway Roop, they&rsquo;re not just buying a part; they&rsquo;re buying
                certainty. Certainty that it will fit right the first time, perform flawlessly, and deliver unshakeable
                consistency, shift after shift, mile after mile.&rdquo;
              </blockquote>
              <a href="/about/leadership">
                Meet our leadership <span><ArrowRight size={18} aria-hidden="true" /></span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
