import { ArrowRight } from 'lucide-react'
export default function TechnologyShowcase() {
  return (
    <section className="technology-showcase" aria-label="Future mobility">
      <article className="technology-story light-story reveal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/lightweighting-ev.png"
          alt="Lightweight aluminium components for next-generation electric vehicles"
        />
        <div className="technology-overlay">
          <span>LIGHTWEIGHTING &amp; FUTURE MOBILITY</span>
          <h2>
            Advancing lightweight<br />
            mobility solutions.
          </h2>
          <p>
            Advanced aluminium die casting, design optimisation and precision manufacturing help reduce component mass
            while maintaining dimensional control and production repeatability.
          </p>
          <a href="#businesses">
            Explore lightweighting capability <b><ArrowRight size={18} aria-hidden="true" /></b>
          </a>
        </div>
      </article>
    </section>
  )
}
