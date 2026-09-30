export default function SolutionsSection() {
  return (
    <section className="section solutions">
      <div className="shell">
        <div className="section-head reveal">
          <div className="section-kicker">
            <span>05</span>
            <p>Products &amp; solutions</p>
          </div>
          <div>
            <h2>
              Engineering for<br />
              <em>critical automotive applications.</em>
            </h2>
            <p>
              Components and assemblies developed around the operating requirements of vehicle control, torque transfer,
              durability and efficiency.
            </p>
          </div>
        </div>

        <div className="solution-grid solution-grid-compact">
          <article className="solution-card reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="solution-image" src="/assets/hero-precision.png" alt="Precision steering assemblies" />
            <div>
              <h3>Steering Systems</h3>
              <p>Safety-critical steering components and assemblies engineered for dependable control.</p>
              <span className="application-note">CONTROL · SAFETY · DURABILITY</span>
            </div>
          </article>
          <article className="solution-card reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="solution-image"
              src="/assets/advanced-forging.png"
              alt="Forged transmission and driveline component"
            />
            <div>
              <h3>Transmission &amp; Driveline</h3>
              <p>Forged and machined components designed for reliable torque transfer and long service life.</p>
              <span className="application-note">TORQUE · STRENGTH · LIFE</span>
            </div>
          </article>
          <article className="solution-card reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="solution-image"
              src="/assets/lightweighting-ev.png"
              alt="Powertrain and lightweight mobility components"
            />
            <div>
              <h3>Powertrain &amp; Future Mobility</h3>
              <p>Precision powertrain parts and lightweight aluminium solutions for ICE and EV platforms.</p>
              <span className="application-note">PRECISION · LIGHTWEIGHT · EV</span>
            </div>
          </article>
        </div>

        <div className="section-action reveal">
          <p>Discuss component requirements, production volumes and programme timing with our engineering team.</p>
          <a className="button primary" href="#contact">
            Discuss an application <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
