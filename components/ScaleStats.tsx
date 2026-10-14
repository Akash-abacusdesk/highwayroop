'use client'

import { Counter } from './about/Stats'
import type { Stat } from '@/types/content'

const defaultStats: Stat[] = [
  { count: 50, suffix: '+', label: 'Years of\nengineering legacy' },
  { count: 16, suffix: '', label: 'Manufacturing\nplants' },
  { count: 14, suffix: '',  label: 'International\nwarehouses' },
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
  return (
    <section className="scale" aria-label="Highway Roop at a glance">
      <div className="shell stats-grid">
        {stats.map((stat, i) => (
          <article key={i}>
            <Counter as="strong" value={`${stat.count}${stat.suffix}`} />
            <StatLabel label={stat.label} />
          </article>
        ))}
      </div>
    </section>
  )
}
