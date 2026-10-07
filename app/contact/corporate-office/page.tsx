import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import LeadForm from '@/components/inner/LeadForm'
import { EMAIL, PHONE } from '@/components/about/data'

export const metadata: Metadata = { title: 'Corporate Office | Highway Roop' }

const LOCATIONS = [
  { tag: 'CORPORATE OFFICE', name: 'Gurugram', lines: ['135-R, Sector 36, Narsinghpur,', 'Gurugram, Haryana 122004, India'], q: '135-R, Sector 36, Narsinghpur, Gurugram, Haryana 122004', map: 'Gurugram corporate office map' },
]

export default function CorporateOffice() {
  return (
    <>
      <PageHero
        title={<>Connect with<br />Highway Roop.</>}
        copy="Corporate office address and primary contact information."
        image="hero-contact-v2"
      />
      <SubNav />

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Corporate office. Gurugram, India.</>}>Contact information reproduced from the presentation.</SectionHead>
          <div className="ab-office">
            <div>
              <h3>Highway Roop Precision Technologies Limited</h3>
              <p>135-R, Sector 36, Narsinghpur,<br />Gurugram, Haryana 122004, India</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p><a href={PHONE.href}>{PHONE.label}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              <Link className="button primary" href="/contact/business-enquiries">Business enquiry <span><ArrowRight size={18} aria-hidden="true" /></span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-section ab-soft">
        <div className="shell">
          <SectionHead title={<>Verified locations. Open directions.</>}>
            Only addresses published in the supplied presentation or official Highway Roop sources are shown.
          </SectionHead>
          <div className="ab-locations">
            {LOCATIONS.map((l, i) => {
              const q = encodeURIComponent(l.q)
              return (
                <article key={l.tag} className={`ab-location${i % 2 ? ' reverse' : ''}`}>
                  <div>
                    <b>{l.tag}</b>
                    <h3>{l.name}</h3>
                    <p>{l.lines[0]}<br />{l.lines[1]}</p>
                    <a className="text-link accent" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${q}`}>Open in Google Maps <span><ArrowRight size={18} aria-hidden="true" /></span></a>
                  </div>
                  <iframe title={l.map} loading="lazy" src={`https://www.google.com/maps?q=${q}&output=embed`} />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Write to the corporate office.</>}>
            Use this form for office visits, vendor communication and company information requests.
          </SectionHead>
          <LeadForm submit="Send request" fields={[
            { label: 'Full name', required: true },
            { label: 'Company' },
            { label: 'Email', type: 'email', required: true },
            { label: 'Phone', type: 'tel' },
            { label: 'Location', options: ['Gurugram corporate office', 'Other location enquiry'] },
            { label: 'Purpose', options: ['Office visit', 'Company information', 'Vendor communication', 'Other'] },
            { label: 'Message', textarea: true, required: true },
          ]} />
        </div>
      </section>
    </>
  )
}
