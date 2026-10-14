// Site-wide search: a small static index of pages (title + keywords) matched with typo tolerance.
type Page = { href: string; title: string; words: string }

const PAGES: Page[] = [
  { href: '/', title: 'Home', words: 'homepage highway roop precision technologies capabilities customers' },
  { href: '/about', title: 'About Overview', words: 'company overview revenue platform forging die casting machining assembly surface treatment simulation capabilities' },
  { href: '/about/our-journey', title: 'Our Journey', words: 'history milestones foundation heritage carlyle chamundi lightweighting decades' },
  { href: '/about/vision-mission', title: 'Vision & Mission', words: 'values 3t 3p torque safety reliability transparency trust teamwork passion performance partnership' },
  { href: '/about/leadership', title: 'Leadership', words: 'board directors ceo chief executive management team executives cfo cmo chro people' },
  { href: '/about/global-presence', title: 'Global Presence', words: 'warehouses countries map globe international reach plants network' },
  { href: '/drivetrain', title: 'Drivetrain', words: 'powertrain driveline transmission gears shafts forging machining axle torque' },
  { href: '/steering-suspension', title: 'Steering & Suspension', words: 'steering suspension control safety knuckle yoke column assemblies' },
  { href: '/lightweighting', title: 'Lightweighting', words: 'aluminium aluminum die casting tooling ev electric vehicle housings chamundi' },
  { href: '/sustainability/esg-overview', title: 'ESG Overview', words: 'esg sustainability brsr responsible environment social governance' },
  { href: '/sustainability/environment', title: 'Environment', words: 'energy emissions carbon water waste solar renewable wind climate recycling' },
  { href: '/sustainability/people', title: 'People & Workplace Safety', words: 'workforce employees workers safety training diversity inclusion health iso 45001' },
  { href: '/sustainability/csr', title: 'CSR', words: 'corporate social responsibility community education health programmes' },
  { href: '/sustainability/governance', title: 'Governance & Certificates', words: 'certificates certification iso iatf tisax 9001 14001 27001 50001 compliance policies ethics code' },
  { href: '/sustainability/reports-policies', title: 'Reports & Policies', words: 'sustainability report brsr policy policies annual' },
  { href: '/investors/financial-reports', title: 'Financial Reports', words: 'investors investor financial results annual report fy' },
  { href: '/news-insights', title: 'News & Insights', words: 'news press media coverage articles chamundi acquisition carlyle announcement' },
  { href: '/careers', title: 'Careers', words: 'jobs hiring work vacancies apply join recruitment opportunities' },
  { href: '/contact/corporate-office', title: 'Corporate Office', words: 'contact address gurugram haryana phone email office reach' },
  { href: '/contact/manufacturing-locations', title: 'Manufacturing Locations', words: 'plants factories sohna manesar chennai sites map globe' },
  { href: '/contact/business-enquiries', title: 'Business Enquiries', words: 'enquiry enquiries sales rfq quote customers supplier' },
  { href: '/contact/general-investor-contact', title: 'General / Investor Contact', words: 'general investor relations contact information corporate presentation' },
  { href: '/contact/media-contact', title: 'Media Contact', words: 'press media journalist interview communications branding' },
]

const norm = (s: string) => s.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9 ]+/g, ' ')

function dist(a: string, b: string): number {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)])
  for (let j = 1; j <= b.length; j++) d[0][j] = j
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
  return d[a.length][b.length]
}

// 3 = in title, 2 = in keywords, 1 = close misspelling (e.g. "sterring"), 0 = no match.
function tokenScore(t: string, title: string, words: string[]): number {
  if (title.includes(t)) return 3
  if (words.some(w => w.includes(t))) return 2
  const max = t.length >= 6 ? 2 : t.length >= 4 ? 1 : 0
  const near = (w: string) => max > 0 && Math.abs(w.length - t.length) <= max && dist(t, w) <= max
  return title.split(' ').some(near) || words.some(near) ? 1 : 0
}

export function searchSite(query: string): { href: string; title: string }[] {
  const tokens = norm(query).split(' ').filter(Boolean)
  if (!tokens.length) return []
  return PAGES.map(p => {
    const title = norm(p.title), words = norm(p.words).split(' ')
    const scores = tokens.map(t => tokenScore(t, title, words))
    return { p, score: scores.every(Boolean) ? scores.reduce((a, b) => a + b, 0) : 0 }
  })
    .filter(r => r.score)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(r => ({ href: r.p.href, title: r.p.title }))
}
