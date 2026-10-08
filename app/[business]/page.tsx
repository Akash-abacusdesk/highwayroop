import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteShell from '@/components/SiteShell'
import PageHero from '@/components/about/PageHero'
import BusinessSection from '@/components/inner/BusinessSection'
import { BUSINESSES } from '@/components/about/data'

type Props = { params: Promise<{ business: string }> }

// One page per business unit: /drivetrain, /steering-suspension, /lightweighting.

export const dynamicParams = false
export const generateStaticParams = () => BUSINESSES.map(b => ({ business: b.slug }))

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { business } = await params
  return { title: `${BUSINESSES.find(b => b.slug === business)?.name} | Highway Roop` }
}

export default async function BusinessPage({ params }: Props) {
  const { business } = await params
  const biz = BUSINESSES.find(b => b.slug === business)
  if (!biz) notFound()
  return (
    <SiteShell>
      <PageHero
        title={biz.heroTitle}
        copy={biz.heroCopy}
        image={biz.image.slice('/assets/'.length, -'.webp'.length)}
        ctas={[{ href: '#technology', label: 'Explore our capabilities' }, { href: '/contact/business-enquiries', label: 'Start a conversation' }]}
      />
      <BusinessSection biz={biz} />
    </SiteShell>
  )
}
