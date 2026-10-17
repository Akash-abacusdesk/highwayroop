import type { MetadataRoute } from 'next'
import { BUSINESSES } from '@/components/about/data'

const SITE = 'https://highwayroop.com'
const PATHS = [
  '',
  ...BUSINESSES.map(b => `/${b.slug}`),
  '/about', '/about/vision-mission', '/about/our-journey', '/about/leadership', '/about/global-presence',
  '/sustainability/esg-overview', '/sustainability/environment', '/sustainability/people', '/sustainability/governance',
  '/sustainability/csr', '/sustainability/reports-policies',
  '/investors/financial-reports',
  '/news-insights', '/careers',
  '/contact/business-enquiries', '/contact/corporate-office', '/contact/manufacturing-locations',
  '/contact/general-investor-contact', '/contact/media-contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map(p => ({ url: SITE + p, priority: p ? 0.7 : 1 }))
}
