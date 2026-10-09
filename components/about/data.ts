export const ABOUT_LINKS = [
  { href: '/about', label: 'Overview' },
  { href: '/about/our-journey', label: 'Our Journey' },
  { href: '/about/leadership', label: 'Leadership' },
  { href: '/about/global-presence', label: 'Global Presence' },
]

export const CEO_LINKEDIN = 'https://www.linkedin.com/in/dharmesh-arora/'

// linkedin is left off where no profile could be matched to this person with confidence.
export const LEADERS: { name: string; role: string; bio: string; linkedin?: string; image?: string }[] = [
  { name: 'Ramanathan Iyer', role: 'BU Head (Steering)', bio: 'Business Unit leadership for Steering.', linkedin: 'https://www.linkedin.com/in/ramanathan-iyer-a5546616/', image: '/assets/leadership/ramanathan.webp' },
  { name: 'Sunil Ailavadi', role: 'BU Head (Powertrain)', bio: 'Business Unit leadership for Powertrain.', linkedin: 'https://www.linkedin.com/in/sunil-ailavadi-34b23311/', image: '/assets/leadership/sunil-ailawadi.webp' },
  { name: 'Anirban Sanyal', role: 'CFO', bio: 'Finance leadership.', linkedin: 'https://www.linkedin.com/in/anirbansanyal1975', image: '/assets/leadership/anirban-cfo.webp' },
  { name: 'Sai Iyer', role: 'CMO', bio: 'Corporate functional leadership.', linkedin: 'https://www.linkedin.com/in/sai-iyer-1615b65/', image: '/assets/leadership/sai-iyer-cmo.webp' },
  { name: 'Vinod Kr Singh', role: 'CHRO', bio: 'Human Resources leadership.', linkedin: 'https://www.linkedin.com/in/vinod-singh-1a58b922/', image: '/assets/leadership/vinod-chro.webp' },
  { name: 'Ajay Mrig', role: 'CPO', bio: 'Corporate functional leadership.', linkedin: 'https://www.linkedin.com/in/ajay-m-74445425/', image: '/assets/leadership/ajay-cpo.webp' },
  { name: 'Piyush', role: 'Chief Compliance Officer', bio: 'Compliance leadership.', linkedin: 'https://www.linkedin.com/in/piyush-asija-b8884817', image: '/assets/leadership/piyush-cco.webp' },
  { name: 'Prajod', role: 'VP Technology', bio: 'Technology leadership.', linkedin: 'https://www.linkedin.com/in/prajod-ayyappath-794427b/', image: '/assets/leadership/prajod-vp-technology.webp' },
]

export const MILESTONES = [
  { year: '01', label: 'THE FOUNDATION', image: 'advanced-forging', title: 'Five decades of engineering heritage', text: 'Highway Industries and Roop Automotives build deep capabilities in precision automotive manufacturing, serving global OEM and Tier-1 customers.', tags: 'Forging · Machining · Powertrain · Steering · Suspension' },
  { year: '02', label: 'BRINGING STRENGTHS TOGETHER', image: 'home-about', title: 'Building a broader automotive platform', text: 'Complementary capabilities across drivetrain, powertrain, steering and suspension come together to create a broader engineering and manufacturing platform.', tags: 'Highway Industries + Roop Automotives' },
  { year: '03', label: 'HIGHWAY ROOP', image: 'journey-common-platform', title: 'A common platform takes shape', text: "With Carlyle supporting the group's next phase, the businesses begin their transition towards a unified Highway Roop identity, bringing together engineering, manufacturing and customer strengths across the group.", tags: 'One group. Complementary capabilities. A common direction.' },
  { year: '04', label: 'EXPANDING THE PLATFORM', image: 'journey-new-capabilities', title: 'Adding new capabilities', text: 'The platform expands its capabilities and footprint, strengthening its position across critical automotive systems and precision manufacturing.' },
  { year: '05', label: 'TODAY', image: 'journey-lightweighting', title: 'Lightweighting joins the journey', text: 'Chamundi Die-Cast adds aluminium die casting, tooling, precision machining, finishing and assembly, expanding the platform into lightweighting and strengthening its South India footprint.', tags: 'Forging + Machining + Aluminium Die Casting' },
]

export const PRESS: { source: string; title: string; text: string; image?: string; publication?: string }[] = [
  { source: 'MINT', title: 'Carlyle-backed Highway Roop acquires Chamundi Die Cast', text: 'The acquisition marks a strategic milestone in Highway Roop’s journey.', image: '/assets/press-mint.webp' },
  { source: 'THE ECONOMIC TIMES MANUFACTURING', title: 'Highway Roop expands precision manufacturing capabilities', text: 'The acquisition adds aluminium die-casting and precision-machining capabilities.', publication: 'ET Manufacturing' },
  { source: 'AUTOCAR PROFESSIONAL', title: 'Highway Roop adds aluminium die-casting capabilities', text: 'Chamundi brings a growing EV portfolio and South India manufacturing base.', publication: 'Autocar Professional' },
  { source: 'VCCIRCLE', title: 'Carlyle expands India auto-parts platform', text: 'Chamundi Die Cast joins the Highway Roop platform.', publication: 'VCCircle' },
  { source: 'MONEYCONTROL', title: 'Highway Roop completes acquisition', text: 'A scaled, diversified precision manufacturing platform.', publication: 'Moneycontrol' },
  { source: 'MACHINE MAKER', title: 'Highway Roop acquires Chamundi Die Cast', text: 'Coverage of the completed acquisition.', publication: 'Machine Maker' },
]

// Company mission, vision and 3T3P values (supplied by Highway Roop).
export const MISSION = 'We partner with the mobility industry to deliver superior torque performance and uncompromising safety through precision-engineered solutions, harnessing technology, operational excellence and enduring relationships.'
export const VISION = 'We envision a world where mobility is synonymous with absolute reliability, powered by our torque and safety solutions.'
export const CORE_VALUES = [
  { tag: 'T', title: 'Transparency', text: 'Openness and honesty for shared success.' },
  { tag: 'T', title: 'Trust', text: 'Empower ownership without micromanagement.' },
  { tag: 'T', title: 'Teamwork', text: 'Combine diversity to achieve more.' },
  { tag: 'P', title: 'Passion', text: 'Relentless dedication to achieving our goals.' },
  { tag: 'P', title: 'Performance', text: 'Focused on results and high-quality outcomes.' },
  { tag: 'P', title: 'Partnership', text: 'Sustainable, long-term growth.' },
]

export const SUSTAINABILITY_LINKS = [
  { href: '/sustainability/esg-overview', label: 'ESG Overview' },
  { href: '/sustainability/environment', label: 'Environment' },
  { href: '/sustainability/people', label: 'People' },
  { href: '/sustainability/csr', label: 'CSR' },
  { href: '/sustainability/governance', label: 'Governance' },
  { href: '/sustainability/reports-policies', label: 'Reports & Policies' },
]

export const CONTACT_LINKS = [
  { href: '/contact/corporate-office', label: 'Corporate Office' },
  { href: '/contact/business-enquiries', label: 'Business Enquiries' },
  { href: '/contact/general-investor-contact', label: 'General / Investor Contact' },
]

export const PHONE = { label: '+91 83969 99592', href: 'tel:+918396999592' }
export const EMAIL = 'info@highwayroop.com'

export type Business = { slug: string; name: string; image: string; heroTitle: string; heroCopy: string; intro: string; desc: string }
// Nav/card-level facts for each business; full page content lives in components/inner/businessPages.ts.
export const BUSINESSES: Business[] = [
  { slug: 'drivetrain', name: 'Drivetrain', image: '/assets/banner-driveline.webp', heroTitle: 'Built for the systems that move power', heroCopy: 'Precision-forged, machined and assembled solutions support power transmission across established and evolving vehicle architectures.', intro: 'Precision engineered for the systems that move power', desc: 'Forging, precision machining and assembly capabilities support demanding engine, transmission and drivetrain applications across automotive and mobility platforms.' },
  { slug: 'steering-suspension', name: 'Steering & Suspension', image: '/assets/banner-steering.webp', heroTitle: 'Engineered for control, safety and durability', heroCopy: 'Steering & Suspension delivers precision components and assemblies for safety-critical vehicle systems, combining manufacturing depth with application-focused engineering and testing capabilities.', intro: 'Engineered for control, safety and durability', desc: 'Safety-critical components and assemblies combine manufacturing depth, dimensional accuracy and durability for demanding vehicle applications.' },
  { slug: 'lightweighting', name: 'Lightweighting', image: '/assets/banner-lightweighting.webp', heroTitle: 'Making complex mobility structures lighter', heroCopy: 'Lightweighting combines aluminium die casting, tooling, precision machining, surface finishing and assembly to deliver complex components and solutions for ICE and EV architectures.', intro: 'Making mobility lighter through precision', desc: 'Aluminium die-cast and precision-machined solutions enable complex components and assemblies for evolving ICE and EV vehicle architectures.' },
]

export const SUBNAVS = [
  { prefix: '/about', label: 'About', links: ABOUT_LINKS },
  { prefix: '/sustainability', label: 'Sustainability', links: SUSTAINABILITY_LINKS },
  { prefix: '/contact', label: 'Contact', links: CONTACT_LINKS },
]
