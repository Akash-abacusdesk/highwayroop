import type { Metadata } from 'next'
import PageHero from '@/components/about/PageHero'
import SubNav from '@/components/about/SubNav'
import SectionHead from '@/components/about/SectionHead'
import Stats from '@/components/about/Stats'
import CardGrid from '@/components/inner/CardGrid'
import Split from '@/components/inner/Split'

export const metadata: Metadata = { title: 'CSR | Highway Roop' }

// Content from the CSR Annual Report, Financial Year 2025–26 ("Empowering Communities, Driving Sustainable Impact").

// One panel per thematic area; photos are from the report (public/assets/csr).
const AREAS = [
  { tag: 'EDUCATION', title: 'Educating today, empowering tomorrow', image: 'csr/education', alt: 'Children playing at a renovated Anganwadi centre',
    text: 'Education is a catalyst for social transformation. Through early learning, digital education, scholarships and educational infrastructure, we are creating opportunities for children and youth to thrive.',
    bullets: ['1000+ students impacted', '460 learners trained daily at the Ankuram Digital Lab', '4 Anganwadi centres supported across Mewat and Manesar'] },
  { tag: 'HEALTH: WOMEN EMPOWERMENT', title: 'Healing lives, restoring dignity', image: 'csr/health', alt: 'Women holding menstrual hygiene kits distributed under Project Pankh',
    text: 'We support women and vulnerable communities through interventions focused on menstrual hygiene, mental health rehabilitation and inclusive care.',
    bullets: ['2,500+ lives impacted through health initiatives', '3,000+ women and girls sensitised on health and wellbeing', '2,000+ menstrual hygiene kits distributed'] },
  { tag: 'SKILL DEVELOPMENT', title: 'Building skills, creating livelihoods', image: 'csr/skills', alt: 'Participants of the TWEET Foundation skilling programme',
    text: 'Skill development programmes focused on employability, entrepreneurship and women-led livelihoods help youth and women build job-ready skills and move towards self-reliance.',
    bullets: ['65 transgender persons trained', '40 placed in internships and full-time jobs', '₹15,000 average monthly revenue from women-led livelihood activities'] },
  { tag: 'ENVIRONMENT', title: 'Turning waste into value', image: 'csr/environment', alt: 'Community members and Highway Roop officials at the inaugurated waste segregation unit',
    text: 'Through Project Unnati and plantation drives, we help strengthen waste collection systems, improve environmental awareness and foster cleaner, healthier communities.',
    bullets: ['6.5 tonnes of dry waste diverted from landfills and open burning', '17 tonnes of legacy waste cleared', '80% of households practising source segregation'] },
  { tag: 'COMMUNITY DEVELOPMENT', title: 'Strengthening communities, transforming lives', image: 'csr/community', alt: 'Elders joined by community members and dignitaries at a commemorative gathering',
    text: 'Healthcare support, rehabilitation, elder care and social inclusion enable vulnerable groups to lead healthier, more dignified and empowered lives.',
    bullets: ['383 elders admitted and cared for', '42 elders reconciled with their families', '600+ lives impacted through community initiatives'] },
]

const PROGRAMMES = [
  { tag: 'SRF FOUNDATION', title: 'Roop Anganwadi Support Programme', text: 'Early childhood care and education for children aged 0–6 at 4 Anganwadi centres across Mewat and Manesar.',
    notes: ['90% daily attendance', '100% immunisation coverage', 'Rojkameo centre recognised as a Model Anganwadi'] },
  { tag: 'UTSAV FOUNDATION', title: 'Ankuram Digital Lab', text: 'Digital learning and NSQF-aligned vocational training in Gurugram, from basic computing to AI and robotics.',
    notes: ['100+ students enrolled', '40+ certified by Shri Vishwakarma Skill University'] },
  { tag: 'UDAYAN CARE', title: 'Aftercare & higher education', text: 'Scholarships, counselling and career guidance for young adults moving from institutional care to independent living.',
    notes: ['5 youth supported', '100% enrolled in professional degrees'] },
  { tag: 'CARITAS INDIA', title: 'Manasi Project', text: 'Recovery and reintegration of women with psychosocial disabilities across centres in Tamil Nadu, Andhra Pradesh and Haryana.',
    notes: ['200+ women supported', '8+ mental health institution linkages'] },
  { tag: 'RANN FOUNDATION', title: 'Project Pankh', text: 'Menstrual health, dignity and well-being for women and adolescent girls in Sohna and Nuh.',
    notes: ['3,000+ women and girls reached', '2,000+ hygiene kits distributed'] },
  { tag: 'TWEET FOUNDATION', title: 'Transgender health, skilling and inclusion', text: 'Inclusive healthcare, employability training, identity documentation and safe shelter for transgender persons.',
    notes: ['150+ reached through health camps', '67 transgender ID cards issued', '75% of placements full-time'] },
  { tag: 'SAHAAS', title: 'Unnati solid waste management', text: 'Door-to-door collection, source segregation and a resource recovery centre in Rozka Meo, Haryana.',
    notes: ['698 households covered', '17 tonnes of legacy waste cleared', 'Recognised with a CSR Award'] },
  { tag: 'LITTLE DROPS FOUNDATION', title: 'Shelter homes for elders', text: 'Shelter, medical care, nutrition and community for abandoned and destitute elders across Tamil Nadu.',
    notes: ['383 elders admitted', '42 elders reconciled with families'] },
  { tag: 'LUDHIANA, PUNJAB', title: 'Highway Industries initiatives', text: 'BML Munjal University scholarships, Noble Foundation education, Krishnashray Foundation skilling, Social Action Group and an indoor shooting range at Punjab Public School, Nabha.' },
]

const PLAN = [
  { tag: 'EDUCATION', title: 'Remedial learning and scholarships', text: 'Structured remedial learning, foundational and digital skills, and the Highway Scholars scholarship programme.',
    notes: ['1000+ students benefiting from remedial education'] },
  { tag: 'SKILL DEVELOPMENT', title: 'CNC and auto-sector skills', text: 'Centres of Excellence for CNC in ITIs in Nuh and Pune, and an auto-sector skill programme for women in Chennai.',
    notes: ['350 youth trained in CNC skills', '300 women empowered in the auto industry'] },
  { tag: 'ENVIRONMENT & SUSTAINABILITY', title: 'Climate resilience', text: 'Crop residue management and climate-resilient communities in Ludhiana, Punjab.',
    notes: ['2,500+ tonnes CO₂ reduced through CRM', '10,000+ community members empowered'] },
  { tag: 'HEALTHCARE & COMMUNITY', title: 'Health, hygiene and inclusion', text: 'Menstrual hygiene management, community rehabilitation for persons with disabilities and need-based interventions.' },
]

const GOVERNANCE = ['Need Assessment', 'Project Selection', 'CSR Committee Recommendation', 'Board Approval', 'Partner Due Diligence', 'Implementation', 'Monitoring', 'Impact Assessment', 'Reporting']

export default function Csr() {
  return (
    <>
      <PageHero
        title={<>Empowering communities,<br />driving sustainable impact</>}
        copy="Our CSR programmes across education, health, skills, environment and community development, from the CSR Annual Report for FY 2025–26."
        image="csr/csr-hero"
      />
      <SubNav />

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Building value beyond business</>}>
            FY 2025–26 was our first year as one Highway Roop following the merger of Roop Automotives and Highway Industries.
            Our initiatives reached beneficiaries across Chennai, Gurugram, Sohna, Nuh, Manesar, Dharuhera, Ludhiana and Pune,
            aligned with national development priorities and the UN Sustainable Development Goals.
          </SectionHead>
          <Stats
            items={[
              ['1000+', 'STUDENTS IMPACTED'],
              ['2500+', 'LIVES IMPACTED THROUGH HEALTH INITIATIVES'],
              ['65', 'TRANSGENDER PERSONS TRAINED FOR EMPLOYMENT'],
              ['383', 'ELDERS ADMITTED AND CARED FOR'],
            ]}
          />
        </div>
      </section>

      <section className="ab-section ab-soft ab-areas">
        <div className="shell">
          <SectionHead title={<>Five thematic areas</>}>
            Our CSR vision: to create lasting social value by enabling individuals and communities to thrive through education,
            healthcare, livelihoods and sustainable development.
          </SectionHead>
          {AREAS.map((a, i) => (
            <div className="ab-gap" key={a.title}>
              <span className="ab-label ab-area-tag">{a.tag}</span>
              <Split reverse={i % 2 === 1} title={a.title} image={a.image} alt={a.alt} bullets={a.bullets}>{a.text}</Split>
            </div>
          ))}
        </div>
      </section>

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Programmes and partners</>}>
            We work with credible implementation partners to deliver programmes on the ground and measure their outcomes.
          </SectionHead>
          <CardGrid cards={PROGRAMMES} />
        </div>
      </section>

      <section className="ab-section ab-soft">
        <div className="shell">
          <Split title="A year of volunteering and purpose" image="csr/volunteering" alt="Employees planting saplings on World Environment Day">
            Employees visited Anganwadi centres in Mewat and Manesar and Rehoboth centres in Tamil Nadu, and took part in
            Environment Day plantation drives, International Yoga Day, blood donation drives and a year-round volunteering calendar.
          </Split>
          <div className="ab-gap">
            <Split
              reverse
              title="Awards and recognition"
              image="csr/awards"
              alt="Highway Roop team receiving a CSR award"
              bullets={[
                'Best CSR Project of the Year 2025, Higher Education (Corporate): Indian CSR Awards 2025',
                'Best CSR Project in Education: Indian CSR Awards 2025 by Brand Honchos',
                'Best CSR Initiative for Disability Inclusion & Empowerment: India CSR & Sustainability Conclave 2025',
              ]}
            >
              These awards reflect the collective impact of our efforts and inspire us to keep driving meaningful, sustainable change.
            </Split>
          </div>
        </div>
      </section>

      <section className="ab-section">
        <div className="shell">
          <SectionHead title={<>Our plan for FY 2026–27</>}>
            Deepening impact across our focus areas, expanding volunteer engagement and strengthening partnerships across
            Punjab, Haryana, Maharashtra and Tamil Nadu.
          </SectionHead>
          <CardGrid cards={PLAN} cols={2} />
        </div>
      </section>

      <section className="ab-section ab-soft">
        <div className="shell">
          <SectionHead title={<>Responsible process. Measurable impact</>}>
            A structured and transparent process guides every CSR initiative, from need assessment to reporting to the CSR Committee and Board.
          </SectionHead>
          <ol className="ab-chain">
            {GOVERNANCE.map((s, i) => <li key={s}><b>{String(i + 1).padStart(2, '0')}</b>{s}</li>)}
          </ol>
          <p className="ab-note">For CSR collaboration and programme information: <a href="mailto:csr@highwayroop.com">csr@highwayroop.com</a></p>
        </div>
      </section>
    </>
  )
}
