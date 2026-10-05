export const ABOUT_LINKS = [
  { href: '/about', label: 'Overview' },
  { href: '/about/our-journey', label: 'Our Journey' },
  { href: '/about/group-structure', label: 'Group Structure' },
  { href: '/about/leadership', label: 'Leadership' },
  { href: '/about/global-presence', label: 'Global Presence' },
]

export const CEO_LINKEDIN = 'https://www.linkedin.com/in/dharmesh-arora/'

// linkedin is left off where no profile could be matched to this person with confidence.
export const LEADERS: { name: string; role: string; bio: string; linkedin?: string; image?: string }[] = [
  { name: 'Ramanathan Iyer', role: 'BU Head (Steering)', bio: 'Business Unit leadership for Steering.', linkedin: 'https://www.linkedin.com/in/ramanathan-iyer-a5546616/', image: '/assets/leadership/ramanathan.webp' },
  { name: 'Sunil Ailavadi', role: 'BU Head (Powertrain)', bio: 'Business Unit leadership for Powertrain.', linkedin: 'https://www.linkedin.com/in/sunil-ailavadi-34b23311/', image: '/assets/leadership/sunil-ailawadi.webp' },
  { name: 'BU Head', role: 'Lightweighting', bio: 'Business Unit leadership for Lightweighting.' },
  { name: 'Anirban Sanyal', role: 'CFO', bio: 'Finance leadership.', linkedin: 'https://www.linkedin.com/in/anirbansanyal1975', image: '/assets/leadership/anirban-cfo.webp' },
  { name: 'Vinod Kr Singh', role: 'CHRO', bio: 'Human Resources leadership.', linkedin: 'https://www.linkedin.com/in/vinod-singh-1a58b922/', image: '/assets/leadership/vinod-chro.webp' },
  { name: 'Ajay Mrig', role: 'CPO', bio: 'Corporate functional leadership.', linkedin: 'https://www.linkedin.com/in/ajay-m-74445425/', image: '/assets/leadership/ajay-cpo.webp' },
  { name: 'Sai Iyer', role: 'CMO', bio: 'Corporate functional leadership.', linkedin: 'https://www.linkedin.com/in/sai-iyer-1615b65/' },
  { name: 'Prajod', role: 'VP Technology', bio: 'Technology leadership.', linkedin: 'https://www.linkedin.com/in/prajod-ayyappath-794427b/', image: '/assets/leadership/prajod-vp-technology.webp' },
  { name: 'Piyush Asija', role: 'CS & Chief Compliance Officer', bio: 'Company secretarial and compliance leadership.', linkedin: 'https://www.linkedin.com/in/piyush-asija-b8884817/' },
  { name: 'Bipin Bahuguna', role: 'AVP - Strategy', bio: 'Strategy leadership.', linkedin: 'https://www.linkedin.com/in/bipin-bahuguna-xlri' },
  { name: 'Shilpi Shukla', role: 'Group Head - Communications & Branding', bio: 'Communications and branding leadership.', linkedin: 'https://www.linkedin.com/in/shilpi-shukla-4aa6a516/' },
  { name: 'Rammohan', role: 'Manufacturing Excellence', bio: 'Manufacturing excellence leadership.' },
]

export const MILESTONES = [
  { year: '50+ YEARS', image: 'advanced-forging', title: 'Engineering legacy', text: 'More than 50 years of legacy in precision auto-components.' },
  { year: 'FEB 2025', image: 'manufacturing-excellence', title: 'Building the platform', text: 'Carlyle acquired a controlling stake to build a scaled, India-based auto-components platform.' },
  { year: 'MAY 2026', image: 'tooling-engineering', title: 'Continued investment', text: 'Carlyle acquired a controlling stake in February 2025 and May 2026.' },
  { year: 'TODAY', image: 'hero-global-engineering-v3', title: 'Integrated global scale', text: '15 manufacturing plants and 14 international warehouses across 7 countries.' },
]

export const UNITS = [
  { share: '52% OF SALES', image: 'advanced-forging', title: 'Driveline', text: 'Powertrain and driveline components.' },
  { share: '27% OF SALES', image: 'hero-precision', title: 'Steering & Suspension', text: 'Steering components and assemblies.' },
  { share: '21% OF SALES', image: 'lightweighting-ev', title: 'Lightweighting', text: 'Aluminium die casting components.' },
]

export const CAPABILITIES = [
  { title: 'Metal forming', text: 'Hot, warm and cold forging, stamping, High Pressure Aluminium Die Casting and Gravity Die Casting.' },
  { title: 'Precision manufacturing', text: 'Precision machining, heat treatment, coating, surface treatment and assembly.' },
  { title: 'Validation', text: 'Advanced and automated in-house testing capabilities.' },
]

export const PRESS: { source: string; title: string; text: string; image?: string; publication?: string }[] = [
  { source: 'MINT', title: 'Carlyle-backed Highway Roop acquires Chamundi Die Cast', text: 'The acquisition marks a strategic milestone in Highway Roop’s journey.', image: '/assets/press-mint.webp' },
  { source: 'THE ECONOMIC TIMES MANUFACTURING', title: 'Highway Roop expands precision manufacturing capabilities', text: 'The acquisition adds aluminium die-casting and precision-machining capabilities.', publication: 'ET Manufacturing' },
  { source: 'AUTOCAR PROFESSIONAL', title: 'Highway Roop adds aluminium die-casting capabilities', text: 'Chamundi brings a growing EV portfolio and South India manufacturing base.', publication: 'Autocar Professional' },
  { source: 'VCCIRCLE', title: 'Carlyle expands India auto-parts platform', text: 'Chamundi Die Cast joins the Highway Roop platform.', publication: 'VCCircle' },
  { source: 'MONEYCONTROL', title: 'Highway Roop completes acquisition', text: 'A scaled, diversified precision manufacturing platform.', publication: 'Moneycontrol' },
  { source: 'MACHINE MAKER', title: 'Highway Roop acquires Chamundi Die Cast', text: 'Coverage of the completed acquisition.', publication: 'Machine Maker' },
]
