import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'

export const metadata: Metadata = { title: 'Financial Reports | Highway Roop' }

// Placeholder until financial reports content is supplied.
export default function FinancialReports() {
  return (
    <SiteShell>
      <section className="empty-page" />
    </SiteShell>
  )
}
