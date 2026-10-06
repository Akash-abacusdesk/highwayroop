import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import LeadForm from '@/components/inner/LeadForm'
import { EMAIL, PHONE } from '@/components/about/data'

export const metadata: Metadata = { title: 'General / Investor Contact | Highway Roop' }

export default function GeneralInvestorContact() {
  return (
    <>
      <PageHero
        title={<>Corporate information,<br />directly requested.</>}
        copy="General company communication and investor-facing information requests."
        image="hero-investor-v2"
      />
      <SubNav />

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Reach the corporate team.</>}>
            The presentation supplies the main company contact. A dedicated investor-relations address can be added after approval.
          </SectionHead>
          <div className="ab-office">
            <div>
              <h3>General contact</h3>
              <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a><br /><a href={PHONE.href}>{PHONE.label}</a></p>
            </div>
            <div>
              <h3>Investor information</h3>
              <p>Request the corporate presentation or send an investor-facing question through the main company contact.</p>
              <a className="button primary" href={`mailto:${EMAIL}?subject=Investor%20Information`}>Email corporate team <span><ArrowRight size={18} aria-hidden="true" /></span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-section ab-soft">
        <div className="shell">
          <SectionHead title={<>Send your enquiry.</>}>
            Select a request type so the message can be routed to the appropriate corporate team.
          </SectionHead>
          <LeadForm submit="Send enquiry" fields={[
            { label: 'Full name', required: true },
            { label: 'Organisation' },
            { label: 'Email', type: 'email', required: true },
            { label: 'Phone', type: 'tel' },
            { label: 'Enquiry type', wide: true, options: ['General company enquiry', 'Investor information', 'Corporate presentation request', 'Media enquiry'] },
            { label: 'Message', textarea: true, required: true },
          ]} />
        </div>
      </section>
    </>
  )
}
