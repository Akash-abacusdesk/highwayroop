'use client'

import { useState, useEffect } from 'react'
import type { HomepageContent } from '@/types/content'
import HeroCarousel from './HeroCarousel'
import ScaleStats from './ScaleStats'
import IntroSection from './IntroSection'
import GroupSection from './GroupSection'
import CapabilitiesSection from './CapabilitiesSection'
import TechnologyShowcase from './TechnologyShowcase'
import GlobalSection from './GlobalSection'
import LeadershipSection from './LeadershipSection'
import CorporateSection from './CorporateSection'
import StoriesSection from './StoriesSection'
import ContactSection from './ContactSection'

export default function DynamicHomepage({ initial }: { initial: HomepageContent }) {
  const [content, setContent] = useState(initial)

  useEffect(() => {
    fetch('/highwayroop/api/content/homepage')
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data) setContent(data) })
      .catch(() => {})
  }, [])

  return (
    <>
      <HeroCarousel slides={content.hero.slides} />
      <ScaleStats stats={content.stats} />
      <IntroSection content={content.intro} />
      <GroupSection />
      <CapabilitiesSection />
      <TechnologyShowcase />
      <GlobalSection />
      <LeadershipSection />
      <CorporateSection />
      <StoriesSection />
      <ContactSection content={content.contact} />
    </>
  )
}
