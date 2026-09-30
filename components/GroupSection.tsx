'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const entities = [
  {
    holding: true,
    entityType: 'GROUP / HOLDING COMPANY',
    title: 'Highway Roop Precision Technologies Limited (HRPTL)',
    image: '/assets/hero-global-engineering-v3.png',
    alt: 'Highway Roop Precision Technologies integrated global engineering platform',
    desc: 'Formerly Roop Automotives Limited; the primary entity name for all external, investor-facing and regulatory communication.',
    link: '#corporate',
    linkText: 'View corporate overview',
    imageClass: 'entity-holding',
  },
  {
    holding: false,
    entityType: '',
    title: 'Highway Roop Industries',
    image: '/assets/manufacturing-excellence.png',
    alt: 'Precision manufacturing at Highway Roop Industries',
    desc: 'Formerly Highway Industries Limited; group operating subsidiary.',
    link: '#capabilities',
    linkText: 'View manufacturing capabilities',
    imageClass: '',
  },
  {
    holding: false,
    entityType: '',
    title: 'Roop Auto Forge Private Limited',
    image: '/assets/advanced-forging.png',
    alt: 'Advanced automotive forging at Roop Auto Forge Private Limited',
    desc: 'Group operating subsidiary specialising in forging.',
    link: '#capabilities',
    linkText: 'View manufacturing capabilities',
    imageClass: '',
  },
  {
    holding: false,
    entityType: '',
    title: 'Chamundi Diecast Private Limited',
    image: '/assets/lightweighting-ev.png',
    alt: 'Aluminium die-cast mobility components from Chamundi Diecast Private Limited',
    desc: 'Part of the group since 2 September 2026; aluminium die-casting and lightweighting capability.',
    link: '#capabilities',
    linkText: 'View manufacturing capabilities',
    imageClass: '',
  },
  {
    holding: false,
    entityType: '',
    title: 'Toolsource India Private Limited',
    image: '/assets/tooling-engineering.png',
    alt: 'Tool and die engineering at Toolsource India Private Limited',
    desc: 'Captive tooling unit; subsidiary of Chamundi Diecast Private Limited.',
    link: '#capabilities',
    linkText: 'View engineering capabilities',
    imageClass: '',
  },
  {
    holding: false,
    entityType: 'STRATEGIC PARTNER',
    title: 'The Carlyle Group',
    image: '/assets/hero-future-mobility-v3.png',
    alt: "Strategic partnership supporting Highway Roop's future growth",
    desc: "Global investment expertise supporting Highway Roop's long-term growth and transformation journey.",
    link: '#corporate',
    linkText: 'View strategic perspective',
    imageClass: '',
  },
]

export default function GroupSection() {
  const [entityIndex, setEntityIndex] = useState(0)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const reducedRef = useRef(false)
  const currentRef = useRef(0)

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const applyTransform = useCallback((index: number) => {
    if (!trackRef.current || !viewportRef.current) return

    const cards = trackRef.current.querySelectorAll<HTMLElement>('.business-card')
    if (!cards.length) return

    const cardWidth = cards[0].getBoundingClientRect().width
    const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 0
    const step = cardWidth + gap
    const maxOffset = Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth)
    const maxIndex = step > 0 ? Math.ceil(maxOffset / step) : 0

    const clamped = index > maxIndex ? 0 : index < 0 ? maxIndex : index
    currentRef.current = clamped
    setEntityIndex(clamped)
    trackRef.current.style.transform = `translateX(-${Math.min(clamped * step, maxOffset)}px)`
  }, [])

  const startRotation = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (!reducedRef.current) {
      timerRef.current = setInterval(() => {
        applyTransform(currentRef.current + 1)
      }, 4300)
    }
  }, [applyTransform])

  const stopRotation = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    startRotation()
    const handleResize = () => applyTransform(currentRef.current)
    window.addEventListener('resize', handleResize)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [startRotation, applyTransform])

  const navigate = useCallback(
    (dir: number) => {
      applyTransform(currentRef.current + dir)
      startRotation()
    },
    [applyTransform, startRotation]
  )

  return (
    <section className="section group" id="businesses">
      <div className="shell">
        <div className="section-head reveal">
          <div className="section-kicker">
            <span>02</span>
            <p>Our group</p>
          </div>
          <div>
            <h2>
              Six companies.<br />
              <em>One shared ambition.</em>
            </h2>
            <p>
              Five Highway Roop entities and The Carlyle Group bring specialist operating depth together with a
              long-term strategic perspective.
            </p>
          </div>
        </div>

        <div
          className="entity-carousel reveal"
          aria-label="Highway Roop companies and strategic partner"
          onMouseEnter={stopRotation}
          onMouseLeave={startRotation}
          onFocus={stopRotation}
          onBlur={e => {
            const carousel = e.currentTarget
            if (!carousel.contains(e.relatedTarget as Node)) startRotation()
          }}
        >
          <div className="entity-carousel-viewport" ref={viewportRef}>
            <div className="business-grid" ref={trackRef}>
              {entities.map((entity, i) => (
                <article
                  key={i}
                  className={`business-card reveal${entity.holding ? ' entity-holding' : ''}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="business-image" src={entity.image} alt={entity.alt} />
                  <div className="business-content">
                    {entity.entityType && (
                      <span className="entity-type">{entity.entityType}</span>
                    )}
                    <h3>{entity.title}</h3>
                    <p>{entity.desc}</p>
                    <a href={entity.link} aria-label={`Explore ${entity.title}`}>
                      {entity.linkText} <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="entity-carousel-controls">
            <p>
              <span className="entity-current">{String(Math.min(entityIndex + 1, entities.length)).padStart(2, '0')}</span>
              {' / 06 '}
              <b>Explore all companies</b>
            </p>
            <div>
              <button
                className="entity-prev"
                type="button"
                aria-label="Previous companies"
                onClick={() => navigate(-1)}
              >
                ←
              </button>
              <button
                className="entity-next"
                type="button"
                aria-label="Next companies"
                onClick={() => navigate(1)}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
