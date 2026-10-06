'use client'

import { useEffect, useRef } from 'react'

// Counts up once when scrolled into view; reduced-motion users keep the final number.
export function Counter({ value, as: Tag = 'b' }: { value: string; as?: 'b' | 'strong' }) {
  const ref = useRef<HTMLElement>(null)
  const end = Number(value.replace(/\D/g, ''))
  const suffix = value.replace(/\d/g, '')

  useEffect(() => {
    const el = ref.current!
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    el.textContent = '0' + suffix
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const step = (now: number) => {
        const q = Math.min((now - start) / 1100, 1)
        el.textContent = Math.round(end * (1 - (1 - q) ** 3)) + suffix
        if (q < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [end, suffix])

  return <Tag ref={ref}>{value}</Tag>
}

export default function Stats({ items }: { items: [string, string][] }) {
  return (
    <div className="ab-stats">
      {items.map(([v, l]) => (
        <article className="ab-stat" key={l}>
          <Counter value={v} />
          <span>{l}</span>
        </article>
      ))}
    </div>
  )
}
