import type { NextConfig } from 'next'
// Vercel expects the default .next dir; keep custom 'out' + standalone for self-hosting.
const nextConfig: NextConfig = process.env.VERCEL ? {} : { distDir: 'out', output: 'standalone' }
export default nextConfig
