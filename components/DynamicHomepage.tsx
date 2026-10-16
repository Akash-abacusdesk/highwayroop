'use client'

import type { HomepageContent } from '@/types/content'
import HeroCarousel from './HeroCarousel'
// import ScaleStats from './ScaleStats'
import IntroSection from './IntroSection'
import GroupSection from './GroupSection'
// import CapabilitiesSection from './CapabilitiesSection'
// import TechnologyShowcase from './TechnologyShowcase'
import GlobalSection from './GlobalSection'
import LeadershipSection from './LeadershipSection'
import CorporateSection, { ProofStats } from './CorporateSection'
import { SustainabilitySection, NewsSection, CareersSection } from './StoriesSection'
// import StoriesSection from './StoriesSection' // Engineering & Quality: hidden per new homepage order
import ContactSection from './ContactSection'
import CustomerLogos from './CustomerLogos'

export default function DynamicHomepage({ initial }: { initial: HomepageContent }) {
  const content = initial

  return (
    <>
      <HeroCarousel slides={content.hero.slides} />
      <ProofStats />
      <IntroSection content={content.intro} />
      <GlobalSection />
      <GroupSection />
      <LeadershipSection />
      {/* Customers: no section built yet */}
      <SustainabilitySection />
      <NewsSection />
      <CorporateSection /> {/* Investors */}
      <CustomerLogos />
      <CareersSection />
      <ContactSection content={content.contact} />

      {/* Hidden per new homepage order (kept for later):
      <ScaleStats stats={content.stats} />
      <CapabilitiesSection />
      <TechnologyShowcase />
      <StoriesSection />
      */}
    </>
  )
}
