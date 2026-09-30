import { getHomepageContent } from '@/lib/content'
import Header from '@/components/Header'
import DynamicHomepage from '@/components/DynamicHomepage'
import Footer from '@/components/Footer'



export default function Home() {
  const content = getHomepageContent()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <DynamicHomepage initial={content} />
      </main>
      <Footer />
    </>
  )
}
