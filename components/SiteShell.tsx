import { getHomepageContent } from '@/lib/content'
import Header from './Header'
import Footer from './Footer'
import ContactSection from './ContactSection'
import ScrollReveal from './about/ScrollReveal'

// Chrome shared by every inner page: header, main landmark, contact band and footer.
// The homepage renders its own (editable) contact band inside its content, so it passes contact={false}.
export default function SiteShell({ children, contact = true }: { children: React.ReactNode; contact?: boolean }) {
  return (
    <div className="ab">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      {contact && <ContactSection content={getHomepageContent().contact} />}
      <Footer />
      <ScrollReveal />
    </div>
  )
}
