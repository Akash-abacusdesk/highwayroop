'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'
import type { HeroSlide } from '@/types/content'

const defaultSlides: HeroSlide[] = [
  {
    eyebrow: 'HIGHWAY ROOP PRECISION TECHNOLOGIES LIMITED',
    headingLine1: 'Integrated precision.',
    headingLine2: 'Delivered at global scale.',
    lede: 'Fifteen manufacturing plants and fourteen warehouses connect specialist engineering and production capabilities with 50+ OEM and Tier-1 relationships.',
    primaryCtaText: 'Explore the group',
    primaryCtaHref: '#businesses',
    secondaryCtaText: 'View global footprint',
    secondaryCtaHref: '#global',
  },
  {
    eyebrow: 'ENGINEERING TO INDUSTRIALISATION',
    headingLine1: 'From first drawing.',
    headingLine2: 'To validated production.',
    lede: 'Engineering, tooling, forging, die casting, precision machining, assembly and validation operate as one connected delivery path.',
    primaryCtaText: 'Explore the process',
    primaryCtaHref: '#businesses',
    secondaryCtaText: 'Discuss a programme',
    secondaryCtaHref: '#contact',
  },
  {
    eyebrow: 'FUTURE-READY MOBILITY',
    headingLine1: 'Lightweight solutions.',
    headingLine2: 'Engineered for what comes next.',
    lede: 'Complex aluminium housings, structural components and precision assemblies support vehicle efficiency across ICE and EV architectures.',
    primaryCtaText: 'Explore future mobility',
    primaryCtaHref: '#businesses',
    secondaryCtaText: 'Start a technical discussion',
    secondaryCtaHref: '#contact',
  },
]

const slideClasses = ['hero-slide-one', 'hero-slide-two', 'hero-slide-three']

export default function HeroCarousel({ slides = defaultSlides }: { slides?: HeroSlide[] }) {
  const [current, setCurrent] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const reducedRef = useRef(false)

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const resetProgress = useCallback(() => {
    const el = heroRef.current
    if (!el) return
    el.classList.remove('progressing')
    void el.offsetWidth
    el.classList.add('progressing')
  }, [])

  const startRotation = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    heroRef.current?.classList.remove('is-paused')
    resetProgress()
    if (!reducedRef.current) {
      timerRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % slides.length)
        resetProgress()
      }, 6500)
    }
  }, [resetProgress, slides.length])

  const stopRotation = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    heroRef.current?.classList.add('is-paused')
  }, [])

  useEffect(() => {
    // Slides 2 and 3 fetch their images only once the page has finished loading.
    const ready = () => heroRef.current?.classList.add('is-ready')
    if (document.readyState === 'complete') ready()
    else window.addEventListener('load', ready, { once: true })
    return () => window.removeEventListener('load', ready)
  }, [])

  useEffect(() => {
    startRotation()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startRotation])

  const go = useCallback(
    (index: number) => {
      const next = ((index % slides.length) + slides.length) % slides.length
      setCurrent(next)
      startRotation()
    },
    [startRotation, slides.length]
  )

  return (
    <section
      ref={heroRef}
      className="hero hero-carousel"
      aria-label="Highway Roop highlights"
      onMouseEnter={stopRotation}
      onMouseLeave={startRotation}
      onFocus={stopRotation}
      onBlur={startRotation}
    >
      <div className="hero-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, i) => (
          <article
            key={i}
            className={`hero-slide ${slideClasses[i] ?? 'hero-slide-one'}${current === i ? ' active' : ''}`}
            aria-hidden={current !== i}
            inert={current !== i}
          >
            <div className="hero-wash" />
            <div className="shell hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">{slide.eyebrow}</p>
                {i === 0 ? (
                  <h1 id="hero-title">
                    {slide.headingLine1}<br />
                    <span>{slide.headingLine2}</span>
                  </h1>
                ) : (
                  <h2>
                    {slide.headingLine1}<br />
                    <span>{slide.headingLine2}</span>
                  </h2>
                )}
                <p className="hero-lede">{slide.lede}</p>
                <div className="hero-actions">
                  <a className="button primary" href={slide.primaryCtaHref}>
                    {slide.primaryCtaText} <span><ArrowRight size={18} aria-hidden="true" /></span>
                  </a>
                  <a className="text-link" href={slide.secondaryCtaHref}>
                    {slide.secondaryCtaText} <span><ArrowRight size={18} aria-hidden="true" /></span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="hero-controls shell" aria-label="Banner controls">
        <div className="hero-dots" role="tablist" aria-label="Select banner">
          {slides.map((_, i) => (
            <button
              key={i}
              className={i === current ? 'active' : ''}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Show banner ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="hero-arrows">
          <button className="hero-prev" type="button" aria-label="Previous banner" onClick={() => go(current - 1)}><ArrowLeft size={20} aria-hidden="true" /></button>
          <button className="hero-next" type="button" aria-label="Next banner" onClick={() => go(current + 1)}><ArrowRight size={20} aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  )
}
