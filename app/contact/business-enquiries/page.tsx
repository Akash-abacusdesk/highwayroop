import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import LeadForm from '@/components/inner/LeadForm'

export const metadata: Metadata = { title: 'Business Enquiries | Highway Roop' }

export default function BusinessEnquiries() {
  return (
    <>
      <PageHero
        title={<>Discuss your<br />next programme.</>}
        copy="A clear route for product, capability and commercial enquiries."
        image="hero-business-enquiry-v2"
      />
      <SubNav />
      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Share your requirement.</>}>
            This front-end form requires connection to an approved enquiry endpoint before use.
          </SectionHead>
          <LeadForm submit="Submit enquiry" fields={[
            { label: 'Full name', required: true },
            { label: 'Company', required: true },
            { label: 'Business email', type: 'email', required: true },
            { label: 'Phone', type: 'tel' },
            { label: 'Country / region' },
            { label: 'Enquiry type', options: ['Product enquiry', 'Manufacturing capability', 'New programme', 'Commercial enquiry'] },
            { label: 'Requirement details', textarea: true, required: true },
          ]} />
        </div>
      </section>
    </>
  )
}
