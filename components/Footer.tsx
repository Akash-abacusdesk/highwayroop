import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="shell footer-top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" decoding="async" src="/assets/highway-roop-logo.webp" alt="Highway Roop" width={420} height={39} />
        <div>
          <p>
            135-R, Sector 36, Narsinghpur,<br />
            Gurugram, Haryana 122004, India
          </p>
        </div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/#businesses">Businesses</Link>
          <Link href="/#capabilities">Capabilities</Link>
          <Link href="/about/global-presence">Global Presence</Link>
          <Link href="/#corporate">Corporate Information</Link>
          <Link href="/#innovation">Innovation &amp; Quality</Link>
          <Link href="/#sustainability">Sustainability</Link>
          <Link href="/#careers">Careers</Link>
          <Link href="/news-insights">Media</Link>
          <Link href="/about/leadership">CEO Message</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Highway Roop Precision Technologies Limited</span>
        <span>Precision engineered. Globally connected.</span>
      </div>
    </footer>
  )
}
