'use client'

import { useState } from 'react'

export type Report = { year: string; pdf?: string }

// Annual report rows with a financial-year filter. Newest year first; a row without `pdf` shows a disabled CTA.
export default function ReportList({ reports }: { reports: Report[] }) {
  const [year, setYear] = useState('all')
  const shown = reports.filter(r => year === 'all' || r.year === year)
  return (
    <>
      <div className="ab-report-toolbar">
        <label htmlFor="report-year">Filter by financial year</label>
        <div className="ab-report-select">
          <select id="report-year" value={year} onChange={e => setYear(e.target.value)}>
            <option value="all">All financial years</option>
            {reports.map(r => <option key={r.year} value={r.year}>FY {r.year}</option>)}
          </select>
        </div>
        <p aria-live="polite">{year === 'all' ? `${shown.length} reports available` : `${shown.length} report for FY ${year}`}</p>
      </div>
      <div className="ab-reports" aria-label="Annual reports">
        {shown.map(r => (
          <article key={r.year} className="ab-report">
            <div className="ab-report-cover" aria-hidden="true"><span>HIGHWAY ROOP</span><strong>Annual<br />Report</strong><b>{r.year}</b></div>
            <div>
              <h3>Annual Report {r.year}</h3>
              <p>Financial Year {r.year}</p>
            </div>
            {r.pdf
              ? <a className="ab-report-cta" href={r.pdf} target="_blank" rel="noopener noreferrer">View / Download PDF</a>
              : <a className="ab-report-cta" role="link" aria-disabled="true" title="PDF pending publication">View / Download PDF</a>}
          </article>
        ))}
      </div>
    </>
  )
}
