import type { ContactContent } from '@/types/content'

const defaultContent: ContactContent = {
  eyebrow: 'CONNECT WITH HIGHWAY ROOP',
  headingLine1: 'Bring us your',
  headingLine2: 'next programme.',
  buttonText: 'Contact our corporate team',
  phone: '+91 83969 99592',
  email: 'info@highwayroop.com',
}

export default function ContactSection({ content = defaultContent }: { content?: ContactContent }) {
  return (
    <section className="contact" id="contact">
      <div className="shell contact-grid reveal">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>
            {content.headingLine1}<br />
            <em>{content.headingLine2}</em>
          </h2>
        </div>
        <div className="contact-actions">
          <a className="button white" href={`mailto:${content.email}`}>
            {content.buttonText} <span>→</span>
          </a>
          <a href={`tel:${content.phone.replace(/\s/g, '')}`}>{content.phone}</a>
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </div>
      </div>
    </section>
  )
}
