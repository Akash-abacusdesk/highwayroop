'use client'

import { useState, useEffect } from 'react'
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

export default function DynamicHomepage({ initial }: { initial: HomepageContent }) {
  const [content, setContent] = useState(initial)

  useEffect(() => {
    fetch(`${location.pathname.startsWith('/highwayroop') ? '/highwayroop' : ''}/api/content/homepage`)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data) setContent(data) })
      .catch(() => {})
  }, [])

  return (
    <>
      <HeroCarousel slides={content.hero.slides} />
      <ProofStats />
      <IntroSection content={content.intro} />
      <GroupSection />
      <GlobalSection />
      <LeadershipSection />
      {/* Customers: no section built yet */}
      <SustainabilitySection />
      <NewsSection />
      <CorporateSection /> {/* Investors */}
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
