import ProductPortfolio from '@/components/inner/ProductPortfolio'
import { BUSINESS_PAGES, type Block, type Split } from '@/components/inner/businessPages'
import type { Card } from '@/components/inner/CardGrid'
import type { Business } from '@/components/about/data'
import './business.css'

// One business page body, driven by BUSINESS_PAGES (copy) and the Redux products store (everything under Products & Solutions).
// Layout follows the "Internal Pages/Product pages" redesign; bz- classes live in business.css.

function Head({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="bz-head">
      <div>
        {eyebrow && <p className="bz-eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  )
}

function Caps({ cards, numbered = true }: { cards: Card[]; numbered?: boolean }) {
  return (
    <div className={`bz-caps n${cards.length}`}>
      {cards.map((c, i) => (
        <article key={c.title}>
          {numbered ? <span>{String(i + 1).padStart(2, '0')}{c.tag && ` · ${c.tag}`}</span> : c.tag && <span>{c.tag}</span>}
          <h3>{c.title}</h3>
          <p>{c.text}</p>
          {c.notes && <ul>{c.notes.map(n => <li key={n}>{n}</li>)}</ul>}
        </article>
      ))}
    </div>
  )
}

function Proof({ split, light, flip }: { split: Split; light?: boolean; flip?: boolean }) {
  return (
    <div className={`bz-proof${light ? ' light' : ''}${flip ? ' flip' : ''}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img loading="lazy" decoding="async" src={`/assets/${split.image}.webp`} alt={split.alt} />
      <div className="bz-proof-copy">
        <h2>{split.title}</h2>
        <p>{split.text}</p>
        {split.bullets && (
          <ol className="bz-list">{split.bullets.map((b, i) => <li key={b}><span>{String(i + 1).padStart(2, '0')}</span>{b}</li>)}</ol>
        )}
      </div>
    </div>
  )
}

function BlockSection({ block, soft, flip }: { block: Block; soft: boolean; flip: boolean }) {
  return (
    <section className={`bz-section${soft ? ' soft' : ''}`}>
      <div className="shell">
        {block.kind === 'cards' && (
          <>
            <Head title={block.title}>{block.text}</Head>
            <Caps cards={block.cards} />
          </>
        )}
        {block.kind === 'split' && <Proof split={block} light={soft} flip={flip} />}
        {block.kind === 'process' && (
          <>
            <Head title={block.title}>{block.text}</Head>
            <ol className="bz-track">
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
  const label = biz.name.toUpperCase()
  return (
    <div className="bz">
      <section className="bz-intro">
        <div className="shell">
          <div>
            <p className="bz-eyebrow">{label}</p>
            <div className="bz-rule" />
          </div>
          <div>
            <h2>{page.overview?.title ?? biz.intro}</h2>
            <p>{page.overview?.text ?? biz.desc}</p>
          </div>
        </div>
      </section>

      <section id="technology" className="bz-section soft">
        <div className="shell">
          <Head eyebrow="CONNECTED CAPABILITIES" title="Technology & Capabilities" />
          <Caps cards={page.capabilities} numbered={false} />
        </div>
      </section>

      {page.splits?.map((sp, i) => (
        <section key={sp.title} className="bz-section">
          <div className="shell"><Proof split={sp} light={i % 2 === 1} flip={i % 2 === 1} /></div>
        </section>
      ))}

      <section id="products-solutions" className="bz-section bz-products">
        <div className="shell">
          <ProductPortfolio business={biz.slug} />
          <p className="bz-note">Representative product imagery comes from the HRPTL presentation. Final technical names should be confirmed against the approved catalogue.</p>
        </div>
      </section>

      {page.blocks.map((b, i) => <BlockSection key={b.title} block={b} soft={i % 2 === 0} flip={i % 2 === 1} />)}
    </div>
  )
}

