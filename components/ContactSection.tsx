import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { ContactContent } from '@/types/content'

const defaultContent: ContactContent = {
  eyebrow: 'CONNECT WITH HIGHWAY ROOP',
  headingLine1: 'Let’s build the next',
  headingLine2: 'programme together.',
  body: 'Tell us what you are looking to build, improve or scale, and connect with the Highway Roop team.',
  buttonText: 'Contact our corporate team',
  phone: '+91 83969 99592',
  email: 'info@highwayroop.com',
}

// Supplier enquiries share the business-enquiry form until a dedicated route exists.
const ROUTES: [string, string][] = [
  ['/contact/business-enquiries', 'Business enquiries'],
  ['/contact/business-enquiries', 'Supplier enquiries'],
  ['/contact/general-investor-contact', 'Media enquiries'],
  ['/careers', 'Careers'],
  ['/contact/general-investor-contact', 'Investor enquiries'],
]

export default function ContactSection({ content = defaultContent }: { content?: ContactContent }) {
  return (
    <section className="contact" id="contact">
      <div className="shell contact-grid reveal">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>
            {content.headingLine1}{' '}
            <em>{content.headingLine2}</em>
          </h2>
          {content.body && <p className="contact-body">{content.body}</p>}
          <nav className="contact-routes" aria-label="Contact routes">
            {ROUTES.map(([href, label]) => <Link key={label} href={href}>{label}</Link>)}
          </nav>
        </div>
        <div className="contact-actions">
          <Link className="button white" href="/contact/corporate-office#corporate-form">
            {content.buttonText} <span><ArrowRight size={18} aria-hidden="true" /></span>
          </Link>
          <a href={`tel:${content.phone.replace(/\s/g, '')}`}>{content.phone}</a>
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </div>
      </div>
    </section>
  )
}
