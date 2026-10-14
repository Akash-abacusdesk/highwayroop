import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import GlobalSection from '@/components/GlobalSection'

export const metadata: Metadata = { title: 'Manufacturing Locations | Highway Roop' }

export default function ManufacturingLocations() {
  return (
    <>
      <PageHero
        title={<>Manufacturing locations<br />Across India</>}
        copy="Our plants and international warehouse network, on the globe."
        image="about/global-presence"
      />
      <SubNav />
      <GlobalSection />
    </>
  )
}
