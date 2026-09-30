'use client'

import { ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'

type StepKey = '01' | '02' | '03' | '04' | '05' | '06'

const processContent: Record<StepKey, [string, string, string, string]> = {
  '01': [
    'Product Engineering',
    'Design engineering, simulation and value engineering shape robust products before industrialisation begins.',
    '/assets/innovation-rd.png',
    'Engineers developing a precision automotive component',
  ],
  '02': [
    'Tooling & Prototyping',
    'Integrated tooling and prototype capability accelerate validation, repeatability and production readiness.',
    '/assets/tooling-engineering.png',
    'Automotive tool and die engineering',
  ],
  '03': [
    'Forging & Die Casting',
    'Advanced forging and aluminium die casting create high-integrity, lightweight forms for critical applications.',
    '/assets/advanced-forging.png',
    'Advanced forging of an automotive component',
  ],
  '04': [
    'Precision Machining',
    'High-accuracy machining delivers demanding geometries, tolerances and repeatability at production scale.',
    '/assets/manufacturing-excellence.png',
    'Automated precision machining facility',
  ],
  '05': [
    'Assembly & Finishing',
    'Controlled heat treatment, surface finishing and assembly complete the production journey.',
    '/assets/hero-precision.png',
    'Finished precision drivetrain and steering components',
  ],
  '06': [
    'Testing & Validation',
    'Metrology, testing, traceability and validation protect quality through every manufacturing stage.',
    '/assets/quality-lab.png',
    'Component inspection in a quality laboratory',
  ],
}

const steps: { key: StepKey; label: React.ReactNode }[] = [
  { key: '01', label: <>Product<br />Engineering</> },
  { key: '02', label: <>Tooling &amp;<br />Prototyping</> },
  { key: '03', label: <>Forging &amp;<br />Die Casting</> },
  { key: '04', label: <>Precision<br />Machining</> },
  { key: '05', label: <>Assembly &amp;<br />Finishing</> },
  { key: '06', label: <>Testing &amp;<br />Validation</> },
]

export default function CapabilitiesSection() {
  const [current, setCurrent] = useState(0)
  const [changing, setChanging] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const reducedRef = useRef(false)
  const currentRef = useRef(0)

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const selectStep = useCallback((index: number, animate = true) => {
    const next = ((index % steps.length) + steps.length) % steps.length
    currentRef.current = next
    setCurrent(next)
    if (animate) {
      setChanging(true)
      setTimeout(() => setChanging(false), 180)
    }
  }, [])

  const startRotation = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    sectionRef.current?.classList.remove('is-paused')
    if (!reducedRef.current) {
      timerRef.current = setInterval(() => {
        selectStep(currentRef.current + 1)
      }, 5200)
    }
  }, [selectStep])

  const stopRotation = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    sectionRef.current?.classList.add('is-paused')
  }, [])

  useEffect(() => {
    startRotation()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startRotation])

  const [title, copy, image, alt] = processContent[steps[current].key]

  return (
    <section ref={sectionRef} className="section capabilities" id="capabilities">
      <div className="shell">
        <div className="section-head reveal">
          <div className="section-kicker">
            <span>03</span>
            <p>Integrated capabilities</p>
          </div>
          <div>
            <h2>
              From first drawing<br />
              <em>to validated production.</em>
            </h2>
            <p>
              Six connected capability stages reduce handovers and support control from engineering and tooling through
              testing and validation.
            </p>
          </div>
        </div>

        <div
          className="process reveal"
          role="tablist"
          aria-label="Integrated manufacturing process"
          onMouseEnter={stopRotation}
          onMouseLeave={() => { selectStep(currentRef.current, false); startRotation() }}
          onFocus={stopRotation}
          onBlur={e => {
            if (!sectionRef.current?.contains(e.relatedTarget as Node)) {
              selectStep(currentRef.current, false)
              startRotation()
            }
          }}
        >
          {steps.map((step, i) => (
            <button
              key={step.key}
              className={`process-step${i === current ? ' active' : ''}`}
              role="tab"
              aria-selected={i === current}
              data-step={step.key}
              data-image={processContent[step.key][2]}
              data-alt={processContent[step.key][3]}
              onClick={() => { selectStep(i); startRotation() }}
            >
              <b>{step.label}</b>
            </button>
          ))}
        </div>

        <div className={`capability-feature reveal${changing ? ' changing' : ''}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img id="process-image" src={image} alt={alt} />
          <div className="feature-panel" aria-live="polite">
            <span>MANUFACTURING EXCELLENCE</span>
            <h3 id="process-title">{title}</h3>
            <p id="process-copy">{copy}</p>
            <a className="button secondary" href="#contact">
              Discuss a manufacturing requirement <span><ArrowRight size={18} aria-hidden="true" /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
