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
          <a href="#innovation">
            Explore lightweighting capability <b>→</b>
          </a>
        </div>
      </article>
    </section>
  )
}
