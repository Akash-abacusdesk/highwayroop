'use client'

import { useEffect, useRef } from 'react'
import type { Stat } from '@/types/content'

const defaultStats: Stat[] = [
  { count: 50, suffix: '+', label: 'Years of\nengineering legacy' },
  { count: 15, suffix: '', label: 'Manufacturing\nplants' },
  { count: 14, suffix: '',  label: 'Warehouses' },
  { count: 7,  suffix: '',  label: 'Countries in our\nglobal network' },
  { count: 50, suffix: '+', label: 'OEM & Tier-1\nrelationships' },
]

function StatLabel({ label }: { label: string }) {
  const parts = label.split('\n')
  return (
    <span>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <br />}
        </span>
      ))}
    </span>
  )
}

export default function ScaleStats({ stats = defaultStats }: { stats?: Stat[] }) {
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = +(el.dataset.count ?? 0)
          const suffix = el.dataset.suffix ?? ''
          if (reduced) {
            el.textContent = target + suffix
            return
          }
          const start = performance.now()
          const duration = 1200
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )

    refs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="scale" aria-label="Highway Roop at a glance">
      <div className="shell stats-grid">
        {stats.map((stat, i) => (
          <article key={i}>
            <strong
              ref={el => { refs.current[i] = el }}
              data-count={stat.count}
              data-suffix={stat.suffix}
            >
              0
            </strong>
            <StatLabel label={stat.label} />
          </article>
        ))}
      </div>
    </section>
  )
}
