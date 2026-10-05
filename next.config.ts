import type { NextConfig } from 'next'
// Vercel expects the default .next dir; keep custom 'out' + standalone for self-hosting.
const base: NextConfig = process.env.VERCEL ? {} : { distDir: 'out', output: 'standalone' }
// inlineCss removes the render-blocking stylesheet request
const nextConfig: NextConfig = { ...base, experimental: { inlineCss: true },
  async redirects() {
    const slugs = ['driveline', 'steering-suspension', 'lightweighting']
    return [
      { source: '/technology', destination: '/driveline#technology', permanent: true },
      { source: '/products-solutions', destination: '/driveline#products-solutions', permanent: true },
      { source: '/businesses', destination: '/#businesses', permanent: true },
      ...slugs.flatMap(s => ['technology', 'products-solutions'].map(page => ({ source: `/${s}/${page}`, destination: `/${s}#${page}`, permanent: true }))),
    ]
  },
}
export default nextConfig
