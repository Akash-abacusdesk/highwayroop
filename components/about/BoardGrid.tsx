'use client'

import { useRef, useState } from 'react'
import { BOARD } from './data'

// Board of Directors cards; clicking one opens the full profile in a modal (native <dialog>).
export default function BoardGrid() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState<(typeof BOARD)[number] | null>(null)
  const show = (b: (typeof BOARD)[number]) => { setOpen(b); dialog.current?.showModal() }

  return (
    <>
      <div className="ab-leaders">
        {BOARD.map(b => (
          <button type="button" className="ab-leader ab-board-card" key={b.name} onClick={() => show(b)} aria-haspopup="dialog">
            <span className="ab-leader-photo has-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src={b.image} alt="" />
            </span>
            <span className="ab-leader-copy">
              <span className="ab-board-name">{b.name}</span>
              <span className="ab-role">{b.role}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Click on the backdrop (the dialog element itself) closes it. */}
      <dialog ref={dialog} className="ab-profile" aria-labelledby="ab-profile-name" onClose={() => setOpen(null)} onClick={e => e.target === e.currentTarget && dialog.current?.close()}>
        {open && (
          <div className="ab-profile-body">
            <button type="button" className="ab-profile-close" aria-label="Close profile" onClick={() => dialog.current?.close()}>×</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={open.image} alt={open.name} />
            <div>
              <h3 id="ab-profile-name">{open.name}<small>{open.role}</small></h3>
              {open.bio.map(p => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
