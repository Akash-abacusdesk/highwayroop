'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'
import type { HeroSlide } from '@/types/content'

const heroImages = ['hero-driveline', 'hero-precision', 'lightweighting-ev']

const defaultSlides: HeroSlide[] = [
  {"eyebrow": "", "headingLine1": "Built for the systems that move power.", "headingLine2": "", "lede": "Precision-forged, machined and assembled solutions support power transmission across established and evolving vehicle architectures.", "primaryCtaText": "Explore our capabilities", "primaryCtaHref": "/driveline", "secondaryCtaText": "Explore our businesses", "secondaryCtaHref": "#businesses"},
  {"eyebrow": "", "headingLine1": "Engineered for control on every road.", "headingLine2": "", "lede": "Safety-critical components and assemblies combine dimensional accuracy, durability and manufacturing consistency for demanding vehicle applications.", "primaryCtaText": "Explore our capabilities", "primaryCtaHref": "/steering-suspension", "secondaryCtaText": "Explore our businesses", "secondaryCtaHref": "#businesses"},
  {"eyebrow": "", "headingLine1": "Making complex mobility structures lighter.", "headingLine2": "", "lede": "Aluminium die casting, tooling and precision machining enable complex components and assemblies for evolving ICE and EV vehicle architectures.", "primaryCtaText": "Explore lightweighting", "primaryCtaHref": "/lightweighting", "secondaryCtaText": "Explore our businesses", "secondaryCtaHref": "#businesses"},
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-bg"
              src={`/assets/${heroImages[i] ?? heroImages[0]}.webp`}
              srcSet={`/assets/${heroImages[i] ?? heroImages[0]}-800.webp 800w, /assets/${heroImages[i] ?? heroImages[0]}.webp 1672w`}
              sizes="100vw"
              alt=""
              width={1672}
              height={941}
              decoding="async"
              {...(i === 0 ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
            />
            <div className="hero-wash" />
            <div className="shell hero-grid">
              <div className="hero-copy">
                {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
                {i === 0 ? (
                  <h1 id="hero-title">
                    {slide.headingLine1}
                    {slide.headingLine2 && <><br /><span>{slide.headingLine2}</span></>}
                  </h1>
                ) : (
                  <h2>
                    {slide.headingLine1}
                    {slide.headingLine2 && <><br /><span>{slide.headingLine2}</span></>}
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
