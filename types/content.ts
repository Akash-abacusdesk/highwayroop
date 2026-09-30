export interface HeroSlide {
  eyebrow: string
  headingLine1: string
  headingLine2: string
  lede: string
  primaryCtaText: string
  primaryCtaHref: string
  secondaryCtaText: string
  secondaryCtaHref: string
}

export interface Stat {
  count: number
  suffix: string
  label: string
}

export interface IntroContent {
  headingLine1: string
  headingLine2: string
  para1: string
  para2: string
  ctaText: string
  ctaHref: string
}

export interface ContactContent {
  eyebrow: string
  headingLine1: string
  headingLine2: string
  buttonText: string
  phone: string
  email: string
}

export interface HomepageContent {
  hero: { slides: HeroSlide[] }
  stats: Stat[]
  intro: IntroContent
  contact: ContactContent
}
