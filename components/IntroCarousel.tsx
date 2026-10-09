'use client'

import { useEffect, useState } from 'react'

// Crossfading image carousel for the homepage "Who we are" intro: autoplays every 3.5s, dots jump to a slide.
const SLIDES = [
  { src: 'home-intro-1', alt: 'Operators assembling machined components on a Highway Roop production line' },
  { src: 'home-intro-2', alt: 'Operator pressing components on an assembly fixture' },
  { src: 'home-intro-3', alt: 'Engineer inspecting a shaft on a Zeiss coordinate measuring machine' },
]

export default function IntroCarousel() {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setI(n => (n + 1) % SLIDES.length), 3500)
    return () => clearTimeout(t)
  }, [i])
  return (
    <figure className="intro-visual intro-carousel reveal" aria-roledescription="carousel">
      {SLIDES.map((s, n) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={s.src}
          className={n === i ? 'active' : undefined}
          aria-hidden={n !== i}
          loading={n === 0 ? undefined : 'lazy'}
          decoding="async"
          srcSet={`/assets/${s.src}-800.webp 800w, /assets/${s.src}.webp 1672w`}
          sizes="(max-width:1050px) 100vw, 50vw"
          src={`/assets/${s.src}.webp`}
          alt={s.alt}
        />
      ))}
      <div className="intro-dots">
        {SLIDES.map((s, n) => (
          <button key={s.src} type="button" className={n === i ? 'active' : undefined} aria-label={`Show image ${n + 1}`} aria-current={n === i} onClick={() => setI(n)} />
        ))}
      </div>
    </figure>
  )
}
