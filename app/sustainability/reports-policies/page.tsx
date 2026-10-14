import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'

export const metadata: Metadata = { title: 'Reports & Policies | Highway Roop' }

export default function ReportsPolicies() {
  return (
    <>
      <PageHero
        title={<>Documents in<br />one place</>}
        copy="An organised index for approved reports and policies."
        image="hero-reports-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Coming soon</>} />
        </div>
      </section>
    </>
  )
}
