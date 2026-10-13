import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'

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
    </>
  )
}
