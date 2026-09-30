export default function Footer() {
  return (
    <footer>
      <div className="shell footer-top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/highway-roop-logo.png" alt="Highway Roop" />
        <div>
          <p>
            135-R, Sector 36, Narsinghpur,<br />
            Gurugram, Haryana 122004, India
          </p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#businesses">Businesses</a>
          <a href="#businesses">Capabilities</a>
          <a href="#global">Global Presence</a>
          <a href="#corporate">Corporate Information</a>
          <a href="#businesses">Innovation &amp; Quality</a>
          <a href="#sustainability">Sustainability</a>
          <a href="#careers">Careers</a>
          <a href="#media">Media</a>
          <a href="#leadership">CEO Message</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Highway Roop Precision Technologies Limited</span>
        <span>Precision engineered. Globally connected.</span>
      </div>
    </footer>
  )
}
