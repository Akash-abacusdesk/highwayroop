'use client'

import { useState } from 'react'

// Two-way switch on the Leadership page: Board Members / Executive Management Team. Both panels are server-rendered.
export default function LeadershipTabs({ board, business }: { board: React.ReactNode; business: React.ReactNode }) {
  const [tab, setTab] = useState<'board' | 'business'>('board')
  const tabs = [['board', 'Board Members'], ['business', 'Executive Management Team']] as const
  return (
    <>
      <div className="ab-tabs" role="tablist" aria-label="Leadership">
        {tabs.map(([id, label]) => (
          <button key={id} type="button" role="tab" id={`tab-${id}`} aria-controls={`panel-${id}`} aria-selected={tab === id} onClick={() => setTab(id)}>
            {label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id="panel-board" aria-labelledby="tab-board" hidden={tab !== 'board'}>{board}</div>
      <div role="tabpanel" id="panel-business" aria-labelledby="tab-business" hidden={tab !== 'business'}>{business}</div>
    </>
  )
}
