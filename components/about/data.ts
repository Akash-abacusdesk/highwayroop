export const ABOUT_LINKS = [
  { href: '/about', label: 'Overview' },
  { href: '/about/our-journey', label: 'Our Journey' },
  { href: '/about/vision-mission', label: 'Vision & Mission' },
  { href: '/about/leadership', label: 'Leadership' },
  { href: '/about/global-presence', label: 'Global Presence' },
]

export const CEO_LINKEDIN = 'https://www.linkedin.com/in/dharmesh-arora/'

// linkedin is left off where no profile could be matched to this person with confidence.
export const LEADERS: { name: string; role: string; linkedin?: string; image?: string }[] = [
  { name: 'Ramanathan Iyer', role: 'Business Unit Head – Steering & Suspension', linkedin: 'https://www.linkedin.com/in/ramanathan-iyer-a5546616/', image: '/assets/leadership/ramanathan.webp' },
  { name: 'Sunil Ailavadi', role: 'Business Unit Head – Drivetrain', linkedin: 'https://www.linkedin.com/in/sunil-ailavadi-34b23311/', image: '/assets/leadership/sunil-ailawadi.webp' },
  { name: 'Anirban Sanyal', role: 'Chief Financial Officer', linkedin: 'https://www.linkedin.com/in/anirbansanyal1975', image: '/assets/leadership/anirban-cfo.webp' },
  { name: 'Sai Iyer', role: 'Chief Marketing Officer', linkedin: 'https://www.linkedin.com/in/sai-iyer-1615b65/', image: '/assets/leadership/sai-iyer-cmo.webp' },
  { name: 'Vinod Kr Singh', role: 'Chief Human Resources Officer', linkedin: 'https://www.linkedin.com/in/vinod-singh-1a58b922/', image: '/assets/leadership/vinod-chro.webp' },
  { name: 'Ajay Mrig', role: 'Chief Procurement Officer', linkedin: 'https://www.linkedin.com/in/ajay-m-74445425/', image: '/assets/leadership/ajay-cpo.webp' },
  { name: 'Prajod', role: 'Vice President – Technology', linkedin: 'https://www.linkedin.com/in/prajod-ayyappath-794427b/', image: '/assets/leadership/prajod-vp-technology.webp' },
  { name: 'Piyush', role: 'Chief Compliance Officer', linkedin: 'https://www.linkedin.com/in/piyush-asija-b8884817', image: '/assets/leadership/piyush-cco.webp' },
]

export const MILESTONES = [
  { year: '01', label: 'THE FOUNDATION', image: 'advanced-forging', title: 'Five decades of engineering heritage', text: 'Highway Industries and Roop Automotives build deep capabilities in precision automotive manufacturing, serving global OEM and Tier-1 customers.', tags: 'Forging · Machining · Drivetrain · Steering & Suspension' },
  { year: '02', label: 'BRINGING STRENGTHS TOGETHER', image: 'home-about', title: 'Building a broader automotive platform', text: 'Complementary capabilities across drivetrain and steering & suspension come together to create a broader engineering and manufacturing platform.', tags: 'Highway Industries + Roop Automotives' },
  { year: '03', label: 'HIGHWAY ROOP', image: 'journey-common-platform', title: 'A common platform takes shape', text: "With Carlyle supporting the group's next phase, the businesses begin their transition towards a unified Highway Roop identity, bringing together engineering, manufacturing and customer strengths across the group.", tags: 'One group. Complementary capabilities. A common direction.' },
  { year: '04', label: 'EXPANDING THE PLATFORM', image: 'journey-new-capabilities', title: 'Adding new capabilities', text: 'The platform expands its capabilities and footprint, strengthening its position across critical automotive systems and precision manufacturing.' },
  { year: '05', label: 'TODAY', image: 'journey-lightweighting', title: 'Lightweighting joins the journey', text: 'Chamundi Die-Cast adds aluminium die casting, tooling, precision machining, finishing and assembly, expanding the platform into lightweighting and strengthening its South India footprint.', tags: 'Forging + Machining + Aluminium Die Casting' },
]

export const PRESS: { source: string; title: string; text: string; image?: string; publication?: string; url?: string }[] = [
  { source: 'LIVE MINT', title: 'Carlyle-backed Highway Roop acquires Chamundi Die Cast to diversify auto components platform', text: 'The acquisition marks a strategic milestone in Highway Roop’s journey.', image: '/assets/press-mint.webp', publication: 'Live Mint', url: 'https://www.livemint.com/companies/news/highway-roop-chamundi-die-cast-acquisition-carlyle-group-11790666681405.html' },
  { source: 'THE ECONOMIC TIMES', title: 'Carlyle-backed Highway Roop acquires Chamundi Die Cast to expand precision manufacturing capabilities', text: 'The acquisition adds aluminium die-casting and precision-machining capabilities.', publication: 'The Economic Times', url: '/assets/press/economic-times.pdf' },
  { source: 'VCCIRCLE', title: 'Carlyle Expands India Auto-Parts Platform With Chamundi Die Cast’s Takeover', text: 'Chamundi Die Cast joins the Highway Roop platform.', publication: 'VCCircle', url: '/assets/press/vccircle.pdf' },
  { source: 'MONEYCONTROL', title: 'Carlyle-backed Highway Roop completes acquisition of Chamundi Die Cast', text: 'A scaled, diversified precision manufacturing platform.', publication: 'Moneycontrol', url: '/assets/press/moneycontrol.pdf' },
  { source: 'THE HINDU BUSINESSLINE', title: 'Carlyle-Backed Highway Roop acquires Chamundi', text: 'Coverage of the completed acquisition.', publication: 'The Hindu BusinessLine', url: '/assets/press/hindu-businessline.pdf' },
  { source: 'AUTOCAR PROFESSIONAL', title: 'Highway Roop Acquires Chamundi, Adds Aluminium Die-Casting Capabilities', text: 'Chamundi brings a growing EV portfolio and South India manufacturing base.', publication: 'Autocar Professional', url: '/assets/press/autocar-professional.pdf' },
  { source: 'MACHINE MAKER', title: 'Highway Roop Acquires Chamundi Die Cast', text: 'Coverage of the completed acquisition.', publication: 'Machine Maker', url: '/assets/press/machine-maker.pdf' },
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
  { href: '/contact/manufacturing-locations', label: 'Manufacturing Locations' },
  { href: '/contact/business-enquiries', label: 'Business Enquiries' },
  { href: '/contact/general-investor-contact', label: 'General / Investor Contact' },
  { href: '/contact/media-contact', label: 'Media Contact' },
]

export const PHONE = { label: '+91 83969 99592', href: 'tel:+918396999592' }
export const EMAIL = 'info@highwayroop.com'

export type Business = { slug: string; name: string; image: string; heroTitle: string; heroCopy: string; intro: string; desc: string }
// Nav/card-level facts for each business; full page content lives in components/inner/businessPages.ts.
export const BUSINESSES: Business[] = [
  { slug: 'drivetrain', name: 'Drivetrain', image: '/assets/banner-driveline.webp', heroTitle: 'Built for the systems\nthat move power', heroCopy: 'Precision-forged, machined and assembled solutions support power transmission across established and evolving vehicle architectures.', intro: 'Precision engineered for the systems that move power', desc: 'Forging, precision machining and assembly capabilities support demanding engine, transmission and drivetrain applications across automotive and mobility platforms.' },
  { slug: 'steering-suspension', name: 'Steering & Suspension', image: '/assets/banner-steering.webp', heroTitle: 'Engineered for control,\nsafety and durability', heroCopy: 'Steering & Suspension delivers precision components and assemblies for safety-critical vehicle systems, combining manufacturing depth with application-focused engineering and testing capabilities.', intro: 'Engineered for control, safety and durability', desc: 'Safety-critical components and assemblies combine manufacturing depth, dimensional accuracy and durability for demanding vehicle applications.' },
  { slug: 'lightweighting', name: 'Lightweighting', image: '/assets/banner-lightweighting.webp', heroTitle: 'Making complex mobility\nstructures lighter', heroCopy: 'Lightweighting combines aluminium die casting, tooling, precision machining, surface finishing and assembly to deliver complex components and solutions for ICE and EV architectures.', intro: 'Making mobility lighter through precision', desc: 'Aluminium die-cast and precision-machined solutions enable complex components and assemblies for evolving ICE and EV vehicle architectures.' },
]

export const SUBNAVS = [
  { prefix: '/about', label: 'About', links: ABOUT_LINKS },
  { prefix: '/sustainability', label: 'Sustainability', links: SUSTAINABILITY_LINKS },
  { prefix: '/contact', label: 'Contact', links: CONTACT_LINKS },
]

// Board of Directors, from the HRPTL Annual Report FY 2025-26 (Corporate Information), in report order.
export const BOARD: { name: string; role: string; image: string; bio: string[] }[] = [
  { name: 'Mohit Oswal', role: 'Chairperson and Non-Executive Director', image: '/assets/leadership/board/mohit-oswal.webp', bio: [
    'Mr. Mohit Oswal has more than 35 years of extensive experience in leading the manufacturing of automotive components, with deep expertise in financial management, strategic planning, and operational excellence within the automotive industry. He holds a bachelor’s degree in commerce from University of Jammu, and a master’s degree in business administration (Finance) from University of Jammu.',
  ] },
  { name: 'Dharmesh Arora', role: 'Chief Executive Officer and Whole Time Director', image: '/assets/leadership/board/dharmesh-arora.webp', bio: [
    'Mr. Dharmesh Subhash Chandra Arora is a seasoned global business leader with over 40 years of experience in the automotive and manufacturing sectors, with extensive expertise in business leadership, operations, product engineering, supply chain management, and corporate governance.',
    'He served as Board CEO – Asia Pacific, Schaeffler AG, Singapore (2020–2025), leading a business with annual revenues exceeding €2 billion and serving on the boards of several Schaeffler entities across Asia, including a listed company in India. Prior to this, he was Managing Director & CEO of Schaeffler India Limited (2012–2019), where he led the company’s growth and strengthened its position as a key supplier to leading automotive OEMs.',
    'Earlier, he held various leadership roles with General Motors across India, Thailand, the USA, and Mexico (1993–2012) in Product Engineering, Manufacturing, Supply Chain, and Purchasing. He began his career with Maruti Suzuki in 1986, focusing on product engineering, vehicle validation, and homologation.',
    'He holds a Global Executive MBA (TRIUM) from NYU Stern, LSE, and HEC Paris, a Certified Corporate Directorship from IOD India, and a Diploma in Mechanical Engineering.',
  ] },
  { name: 'Amol Munjal', role: 'Non-Executive Director', image: '/assets/leadership/board/amol-munjal.webp', bio: [
    'Mr. Amol Munjal is an accomplished business leader with over 20 years of experience in corporate leadership, strategic management, governance, and manufacturing operations. He holds a bachelor’s degree in commerce from University of Delhi, and a Diploma in Business administration from Cardiff Business School, Wales (United Kingdom).',
  ] },
  { name: 'Mohammed Yasin Khan', role: 'Non-Executive Director', image: '/assets/leadership/board/mohammed-yasin-khan.webp', bio: [
    'Mr. Mohammed Yasin Khan has sound knowledge and experience in both business operations and finance, along with a strong technical understanding of the industry. He is a strong advocate of good corporate governance and sustainable manufacturing practices. He has successfully led and managed the business of Chamundi Die Cast Private Limited for over three decades.',
  ] },
  { name: 'Amit Jain', role: 'Non-Executive Director', image: '/assets/leadership/board/amit-jain.webp', bio: [
    'Mr. Amit Jain holds a Bachelor of Technology (B.Tech.) degree in Mechanical Engineering from the Indian Institute of Technology Kharagpur and a Master of Business Administration (MBA) from the Indian School of Business.',
    'Prior to joining the Company, he spent over a decade with Blackstone in India, where he most recently served as Senior Managing Director in its Private Equity Group. Before Blackstone, he worked with McKinsey & Company and began his professional career with Hindustan Unilever Limited in manufacturing and supply chain roles. Mr. Jain brings over 20 years of diverse experience spanning private equity, investment management, strategy, corporate leadership, manufacturing, and business transformation.',
  ] },
  { name: 'Abhiroop Jayanthi', role: 'Non-Executive Director', image: '/assets/leadership/board/abhiroop-jayanthi.webp', bio: [
    'Mr. Abhiroop Jayanthi is a Managing Director and member of the Asia Private Equity team at Carlyle, the leading global investment firm. In his role he advises on investments in India with a focus on healthcare and life sciences, advanced manufacturing, and industrial sectors. With 15 years of experience in private equity, Mr. Jayanthi has been involved in multiple investments across a diverse range of industries. Prior to joining Carlyle, he was a Managing Director at Bain Capital, where he led investments across healthcare, life sciences, technology, and industrials sectors.',
    'Mr. Jayanthi holds an MBA from the Wharton Business School, where he was a Palmer Scholar. He earned his undergraduate degree in Industrial Engineering from the Indian Institute of Technology (IIT) Delhi, where he was awarded the Director’s Gold Medal for Outstanding All-Round Achievement and Leadership. He also holds a Postgraduate Diploma in Finance and Financial Law from the University of London.',
  ] },
  { name: 'Ankit Jajodia', role: 'Non-Executive Director', image: '/assets/leadership/board/ankit-jajodia.webp', bio: [
    'Mr. Ankit Jajodia is an experienced investment professional with a strong foundation in private equity and investment banking. He holds a bachelor’s degree in accounting and finance from St. Xavier’s College Kolkata, and a master’s degree in business administration from Indian Institute of Management Calcutta. He is also a member of The Institute of Chartered Accountants of India. His career includes roles such as Investment Professional at The Carlyle Group, Vice President at Bain Capital, Associate at TPG Global, Analyst and Associate at Goldman Sachs, and Analyst at Bank of America Merrill Lynch.',
  ] },
  { name: 'Mark Paul Blaufuss', role: 'Non-Executive Director', image: '/assets/leadership/board/mark-blaufuss.webp', bio: [
    'Mr. Mark Paul Blaufuss holds a bachelor’s degree of Science in Accounting from Michigan State University. He is a highly accomplished finance executive with extensive experience in the industrial and transportation sectors, specializing in value creation, operational improvement, and strategic growth. Prior to joining our Company, he served as CFO at Metaldyne Performance Group. He currently serves as a Board Member at WORLDPAC, Blue Bird Corporation, Anchor Glass, and Old-World Industries, and chairs their Audit Committees.',
  ] },
  { name: 'Kishore Mukund Saletore', role: 'Non-Executive Independent Director', image: '/assets/leadership/board/kishore-saletore.webp', bio: [
    'Mr. Kishore Saletore is a seasoned Finance Leader with over 30 years of diverse experience across globally renowned corporations, including the Tata Group, ITC Ltd., Hughes Corporation, and Bharat Forge.',
    'He is a member of The Institute of Chartered Accountants of India and has also undertaken Post Graduate Diploma in Management (PGDM), Indian Institute of Management (IIM), Bangalore. His core competencies lie in the areas of Strategic Financial Planning & Analysis, International Joint Ventures & M&A, Corporate Governance & Risk Management, Cost Optimization & EBITDA Expansion, Capital Raising & Fund Structuring, Real Estate & Infrastructure Financing, Business Transformation & Restructuring and Stakeholder Communication & Board Reporting.',
  ] },
  { name: 'Anandi Iyer', role: 'Non-Executive Independent Director', image: '/assets/leadership/board/anandi-iyer.webp', bio: [
    'Ms. Anandi Iyer holds a master’s degree in business administration from Strathclyde Graduate Business School, UK with a specialization in Strategy and Business Communication, along with a master’s degree in German Language. She has also completed her PhD in Innovation Ecosystems from the University of Leipzig. She brings over 28 years of leadership experience in international technology cooperation, innovation ecosystems, and transnational R&D partnerships. She has been associated with Fraunhofer-Gesellschaft for over 18 years and currently serves as Director & Head of the India Office. She has also held key leadership roles as CEO of Investment Innovation and Research Alliance, Director at the International Technology Cooperation Network, Deputy Head at the German Agency for Technical Cooperation (GTZ), and Executive Officer at the Confederation of Indian Industry.',
  ] },
  { name: 'Subodh Kumar Jaiswal', role: 'Non-Executive Independent Director', image: '/assets/leadership/board/subodh-jaiswal.webp', bio: [
    'Mr. Subodh Kumar Jaiswal holds a bachelor’s degree in Arts (B.A.) with Honours in English Literature from DAV College, Chandigarh, and a master’s degree in business administration (MBA) in Marketing from University Business School, Chandigarh. With a distinguished career spanning over 38 years, he has held several key positions in the Government of India and the Government of Maharashtra. Prior to joining our Company, his notable leadership roles include serving as Commissioner of Police, Mumbai; Director General of Police, Maharashtra State; Director General, Central Industrial Security Force (CISF); and Director, Central Bureau of Investigation (CBI). During his tenure as Director of CBI, he also served as the Head of the National Central Bureau – INTERPOL India. He has been serving on the Board of the Company as an Independent Director since June 16, 2025.',
  ] },
  { name: 'Anil Sikka', role: 'Non-Executive Independent Director', image: '/assets/leadership/board/anil-sikka.webp', bio: [
    'Mr. Anil Sikka is a seasoned business leader and industry expert with over 30 years of extensive experience in the automotive, manufacturing and digital transformation sectors. He holds a bachelor’s degree in mechanical engineering from Bangalore University.',
    'Mr. Sikka served as the Managing Director of Aptiv (formerly Delphi Corporation) from 1996 to 2004, where he played a significant role in driving operational and business excellence in the automotive sector.',
    'In 2004, he joined McKinsey & Company as a Practice Expert focusing on lean manufacturing transformation across the automotive, high-technology and pharmaceutical sectors. During his tenure at McKinsey, he led the Manufacturing Practice in Asia and, as a Partner, spearheaded several large-scale lean manufacturing and digital transformation initiatives for leading organizations.',
    'Mr. Sikka possesses deep expertise in lean manufacturing, operational excellence, Industry 4.0 technologies, digital transformation and manufacturing strategy. He is currently engaged as a Senior Advisor at McKinsey & Company and a Digital Transformation Consultant, advising discrete manufacturing companies across the high-tech, automotive and heavy engineering sectors on leveraging Industry 4.0 technologies to transform operations, enhance productivity and significantly improve profitability and business performance.',
  ] },
]
