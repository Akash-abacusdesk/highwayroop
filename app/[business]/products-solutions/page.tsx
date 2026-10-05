import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductsPage } from '@/components/inner/BusinessPages'
import { BUSINESSES } from '@/components/about/data'

type Props = { params: Promise<{ business: string }> }

export const dynamicParams = false
export const generateStaticParams = () => BUSINESSES.map(b => ({ business: b.slug }))

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { business } = await params
  const biz = BUSINESSES.find(b => b.slug === business)
  return { title: `${biz?.name} Products & Solutions | Highway Roop` }
}

export default async function Page({ params }: Props) {
  const { business } = await params
  const biz = BUSINESSES.find(b => b.slug === business)
  if (!biz) notFound()
  return <ProductsPage biz={biz} />
}
