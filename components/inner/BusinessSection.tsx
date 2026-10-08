import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionHead from '@/components/about/SectionHead'
import CardGrid, { type Card } from '@/components/inner/CardGrid'
import Split from '@/components/inner/Split'
import ProductFilter from '@/components/inner/ProductFilter'
import { BUSINESS_PAGES, type Block } from '@/components/inner/businessPages'
import type { Business } from '@/components/about/data'

// One business page body, driven by BUSINESS_PAGES (copy) and the Redux products store (product grid).
const cols = (cards: Card[]) => (cards.length === 4 ? 2 : 3)

function BlockSection({ block, soft }: { block: Block; soft: boolean }) {
  return (
    <section className={`ab-section ab-biz${soft ? ' ab-soft' : ''}`}>
      <div className="shell">
        {block.kind === 'cards' && (
          <>
            <SectionHead title={block.title}>{block.text}</SectionHead>
            <CardGrid cards={block.cards} cols={cols(block.cards)} />
          </>
        )}
        {block.kind === 'split' && (
          <Split title={block.title} image={block.image} alt={block.alt} bullets={block.bullets}>{block.text}</Split>
        )}
        {block.kind === 'process' && (
          <>
            <SectionHead title={block.title}>{block.text}</SectionHead>
            <ol className="ab-chain">
              {block.steps.map((s, i) => <li key={s}><b>{String(i + 1).padStart(2, '0')}</b>{s}</li>)}
            </ol>
          </>
        )}
      </div>
    </section>
  )
}

export default function BusinessSection({ biz }: { biz: Business }) {
  const page = BUSINESS_PAGES[biz.slug]
  return (
    <>
      <section className="ab-section ab-biz-intro">
        <div className="shell">
          <span className="ab-label">{biz.name.toUpperCase()}</span>
          {page.overview ? (
            <SectionHead title={page.overview.title}>{page.overview.text}</SectionHead>
          ) : (
            <>
              <div className="ab-redline" />
              <p className="ab-lead"><strong>{biz.intro}</strong> {biz.desc}</p>
            </>
          )}
        </div>
      </section>

      <section id="technology" className="ab-section ab-biz ab-soft">
        <div className="shell">
          <SectionHead title="Technology & Capabilities" />
          <CardGrid cards={page.capabilities} cols={cols(page.capabilities)} />
          {page.splits?.map((sp, i) => (
            <div className="ab-gap" key={sp.title}>
              <Split reverse={i % 2 === 1} title={sp.title} image={sp.image} alt={sp.alt} bullets={sp.bullets}>{sp.text}</Split>
            </div>
          ))}
        </div>
      </section>

      <section id="products-solutions" className="ab-section ab-biz">
        <div className="shell">
          <SectionHead title="Products & Solutions">{page.products?.text}</SectionHead>
          {page.products && <div className="ab-gap-sm"><CardGrid cards={page.products.categories} /></div>}
          <ProductFilter business={biz.slug} />
          <p className="ab-note">Representative product imagery comes from the HRPTL presentation. Final technical names should be confirmed against the approved catalogue.</p>
        </div>
      </section>

      {page.blocks.map((b, i) => <BlockSection key={b.title} block={b} soft={i % 2 === 0} />)}

      <section id="locations" className="ab-section ab-biz ab-soft">
        <div className="shell">
          <SectionHead title="Locations">{page.locations.text}</SectionHead>
          <p className="ab-states"><b>INDIA</b> {page.locations.states.join(' | ')}</p>
          <Link className="text-link accent" href="/about/global-presence">
            Explore our locations <span><ArrowRight size={18} aria-hidden="true" /></span>
          </Link>
        </div>
      </section>

      {page.closing && (
        <section className="ab-section ab-biz">
          <div className="shell">
            <SectionHead title={page.closing.title}>{page.closing.text}</SectionHead>
            <Link className="button primary" href="/contact/business-enquiries">
              Discuss your programme <span><ArrowRight size={18} aria-hidden="true" /></span>
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
