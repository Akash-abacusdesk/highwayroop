import type { NextConfig } from 'next'
// Vercel expects the default .next dir; keep custom 'out' + standalone for self-hosting.
const base: NextConfig = process.env.VERCEL ? {} : { distDir: 'out', output: 'standalone' }
// inlineCss removes the render-blocking stylesheet request
const nextConfig: NextConfig = { ...base, experimental: { inlineCss: true },
  async redirects() {
    const slugs = ['drivetrain', 'steering-suspension', 'lightweighting']
    return [
      { source: '/technology', destination: '/drivetrain#technology', permanent: true },
      { source: '/products-solutions', destination: '/drivetrain#products-solutions', permanent: true },
      { source: '/businesses', destination: '/#businesses', permanent: true },
      // Driveline was renamed Drivetrain.
      { source: '/driveline', destination: '/drivetrain', permanent: true },
      ...['technology', 'products-solutions'].map(page => ({ source: `/driveline/${page}`, destination: `/drivetrain#${page}`, permanent: true })),
      { source: '/about/group-structure', destination: '/about', permanent: true },
      ...slugs.flatMap(s => ['technology', 'products-solutions'].map(page => ({ source: `/${s}/${page}`, destination: `/${s}#${page}`, permanent: true }))),
    ]
  },
}
export default nextConfig
