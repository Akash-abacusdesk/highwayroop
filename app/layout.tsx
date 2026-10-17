import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/store/StoreProvider'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-josefin',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://highwayroop.com'),
  title: 'Highway Roop | Integrated Precision Manufacturing',
  description:
    'Highway Roop Precision Technologies Limited integrates engineering, forging, machining, aluminium die casting, tooling and validation for global automotive programmes.',
  openGraph: { images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Highway Roop Precision Technologies Limited',
  url: 'https://highwayroop.com',
  logo: 'https://highwayroop.com/icon.png',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={josefin.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/hero-home-powertrain.webp"
          imageSrcSet="/assets/hero-home-powertrain-800.webp 800w, /assets/hero-home-powertrain.webp 2128w"
          imageSizes="100vw"
          type="image/webp"
          fetchPriority="high"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
