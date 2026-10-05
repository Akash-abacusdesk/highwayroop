'use client'

import { useState } from 'react'

export type Field = { label: string; type?: string; required?: boolean; wide?: boolean; options?: string[]; textarea?: boolean }

// Front-end only: there is no approved endpoint yet, so submit just acknowledges the request.
// ponytail: wire `onSubmit` to the enquiry/recruitment API once one exists.
export default function LeadForm({ fields, submit }: { fields: Field[]; submit: string }) {
  const [status, setStatus] = useState('')
  return (
    <form className="ab-form" onSubmit={e => { e.preventDefault(); setStatus('Form layout is ready for backend integration.') }}>
      {fields.map(f => (
        <label key={f.label} className={f.wide || f.textarea ? 'wide' : undefined}>
          {f.label}
          {f.options ? (
            <select>{f.options.map(o => <option key={o}>{o}</option>)}</select>
          ) : f.textarea ? (
            <textarea required={f.required} />
          ) : (
            <input type={f.type ?? 'text'} required={f.required} />
          )}
        </label>
      ))}
      <button className="button primary" type="submit">{submit} <span>→</span></button>
      <p className="ab-form-status" role="status">{status}</p>
    </form>
  )
}
