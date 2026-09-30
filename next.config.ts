import type { NextConfig } from 'next'
// Vercel expects the default .next dir; keep custom 'out' + standalone for self-hosting.
const base: NextConfig = process.env.VERCEL ? {} : { distDir: 'out', output: 'standalone' }
// inlineCss removes the render-blocking stylesheet request
const nextConfig: NextConfig = { ...base, experimental: { inlineCss: true } }
export default nextConfig
