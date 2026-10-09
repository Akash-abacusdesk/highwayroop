import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import GlobalSection from '@/components/GlobalSection'

export const metadata: Metadata = { title: 'Global Presence | Highway Roop' }

// The interactive globe from the homepage replaces the design's static CSS globe and warehouse table.
export default function GlobalPresence() {
  return (
    <>
      <PageHero
        title={<>Global reach<br />Responsive support</>}
        copy="Manufacturing in India connected to an international warehouse and customer network."
        image="about/global-presence"
      />
      <SubNav />
      <GlobalSection />
    </>
  )
}
