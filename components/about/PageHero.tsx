import './about.css'

export default function PageHero({ title, copy, image }: { title: React.ReactNode; copy: string; image: string }) {
  return (
    <section className="ab-hero">
      <div className="ab-hero-media" style={{ backgroundImage: `url('/assets/${image}.webp')` }} />
      <div className="shell">
        <div className="ab-hero-copy">
          <div className="ab-redline" />
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
      </div>
    </section>
  )
}
