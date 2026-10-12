'use client'

import { useEffect, useRef } from 'react'

// Counts up once when scrolled into view; reduced-motion users keep the final number.
export function Counter({ value, as: Tag = 'b' }: { value: string; as?: 'b' | 'strong' }) {
  const ref = useRef<HTMLElement>(null)
  // Animate only the number ("2.6" in "2.6 MW", "2,701"), keeping its decimals and thousands separators.
  const [, prefix = '', num = '0', suffix = ''] = value.match(/^(\D*)([\d,]*\.?\d+)(.*)$/) ?? []
  const end = Number(num.replace(/,/g, ''))
  const decimals = num.split('.')[1]?.length ?? 0
  const fmt = (n: number) => prefix + n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: num.includes(',') }) + suffix

  useEffect(() => {
    const el = ref.current!
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    el.textContent = fmt(0)
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const step = (now: number) => {
        const q = Math.min((now - start) / 1100, 1)
        el.textContent = fmt(end * (1 - (1 - q) ** 3))
        if (q < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

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
