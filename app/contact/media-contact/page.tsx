import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'

const MEDIA_EMAIL = 'shilpi.shukla@highwayroop.com'

export const metadata: Metadata = { title: 'Media Contact | Highway Roop' }

export default function MediaContact() {
  return (
    <>
      <PageHero
        title={<>Media enquiries,<br />directly answered</>}
        copy="Press releases, interviews and media coverage requests."
        image="hero-news"
      />
      <SubNav />

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Contact the media team</>}>
            For press releases, interviews and media coverage requests, reach our media contact directly.
          </SectionHead>
          <div className="ab-office">
            <div>
              <h3>Media contact</h3>
              <p><strong>Shilpi Shukla</strong><br />Group Head – Communications &amp; Branding<br /><a href={`mailto:${MEDIA_EMAIL}?subject=Media%20Enquiry`}>{MEDIA_EMAIL}</a></p>
            </div>
            <div>
              <h3>Media enquiries</h3>
              <p>Request press material, company information or an interview, or send any other media-related question.</p>
              <a className="button primary" href={`mailto:${MEDIA_EMAIL}?subject=Media%20Enquiry`}>Email media team <span><ArrowRight size={18} aria-hidden="true" /></span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
