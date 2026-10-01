import { getHomepageContent } from '@/lib/content'
import SiteShell from '@/components/SiteShell'
import DynamicHomepage from '@/components/DynamicHomepage'

export default function Home() {
  return (
    <SiteShell contact={false}>
      <DynamicHomepage initial={getHomepageContent()} />
    </SiteShell>
  )
}
