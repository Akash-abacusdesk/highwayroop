'use client'

import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import WebGLGlobeLoader from './globe/WebGLGlobeLoader'
import type { Country } from './globe/geo'

// ISO 3166-1 numeric codes of the countries outlined for each region.
const EUROPE = ['008','020','040','056','070','100','191','196','203','208','233','246','250','276','300','348','352','372','380','428','438','440','442','807','470','498','492','499','528','578','616','620','642','688','703','705','724','752','756','804','826','112']
const APAC = ['156','158','392','410','408','496','704','764','116','418','104','458','702','360','096','608','626','598','036','554','242','090','548','050','144','524','064','462','004']

// Warehouse locations from the Highway Roop warehouse map (14 warehouses, grouped by continent).
const wh = (id: string, n: number, city: string, latitude: number, longitude: number) =>
  ({ id: `${id}-${n}`, name: `Warehouse ${n}`, city, latitude, longitude })

const regions: Country[] = [
  { id: 'in', name: 'India', isoNumerics: ['356'], latitude: 22, longitude: 79, zoom: 2.7, stores: [
    wh('in', 1, 'Gurugram', 28.46, 77.03), wh('in', 2, 'Gujarat', 23.02, 72.57),
    wh('in', 3, 'Uttarakhand', 30.32, 78.03), wh('in', 4, 'Ludhiana', 30.9, 75.86),
    wh('in', 5, 'Pune', 18.52, 73.86) ] },
  { id: 'na', name: 'North America', isoNumerics: ['840', '124', '484'], latitude: 42, longitude: -100, zoom: 1.6, stores: [
    wh('na', 1, 'Woodstock, Toronto', 43.13, -80.75), wh('na', 2, 'Edison, New Jersey', 40.52, -74.41),
    wh('na', 3, 'Detroit, MI', 42.33, -83.05), wh('na', 4, 'Chesterfield, MI', 42.68, -82.83),
    wh('na', 5, 'Riverview, Pennsylvania', 40.6, -76.9), wh('na', 6, 'Coahuila, Mexico', 25.42, -101.0) ] },
  { id: 'eu', name: 'Europe', isoNumerics: EUROPE, latitude: 52, longitude: 14, zoom: 3, stores: [
    wh('eu', 1, 'Opole, Poland', 50.67, 17.93), wh('eu', 2, 'Bratislava, Slovakia', 48.15, 17.11) ] },
  { id: 'apac', name: 'Asia Pacific', isoNumerics: APAC, latitude: 5, longitude: 115, zoom: 1.5, stores: [
    wh('apac', 1, 'Bangkok, Thailand', 13.76, 100.5) ] },
]

// True while the element is on screen (starting `margin` early when `once`).
function useInView(ref: React.RefObject<Element | null>, once = false) {
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        setSeen(e.isIntersecting)
        if (once && e.isIntersecting) io.disconnect()
      },
      { rootMargin: once ? '400px 0px' : '0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [ref, once])
  return seen
}

export default function GlobalSection() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [storeId, setStoreId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const globeRef = useRef<HTMLDivElement>(null)
  const near = useInView(globeRef, true)
  const inView = useInView(globeRef)

  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <section className="section global" id="global">
      <div className="shell global-grid">
        <div className="global-copy reveal">
          <div className="section-kicker">
            <span>04</span>
            <p>Global presence</p>
          </div>
          <h2>
            Global reach.<br />
            <em>Responsive customer support.</em>
          </h2>
          <p>
            Fifteen manufacturing plants in India connect with fourteen warehouses across seven countries,
            supporting coordinated delivery across automotive markets.
          </p>

          <ol className="region-list">
            {regions.map((r, i) => {
              const open = r.id === openId
              return (
                <li key={r.id} className={open ? 'open' : undefined}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`region-${r.id}`}
                      onClick={() => {
                        setOpenId(open ? null : r.id)
                        setStoreId(null)
                      }}
                      onPointerEnter={() => setHoveredId(r.id)}
                      onPointerLeave={() => setHoveredId(null)}
                      onFocus={() => setHoveredId(r.id)}
                      onBlur={() => setHoveredId(null)}
                    >
                      <span className="region-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="region-name">{r.name}</span>
                      <span className="region-toggle" aria-hidden />
                    </button>
                  </h3>
                  <div className="region-body" id={`region-${r.id}`}>
                    <ul>
                      {r.stores.map(f => (
                        <li key={f.id}>
                          <button
                            type="button"
                            tabIndex={open ? 0 : -1}
                            className={f.id === storeId ? 'active' : undefined}
                            aria-pressed={f.id === storeId}
                            onClick={() => setStoreId(f.id === storeId ? null : f.id)}
                          >
                            <span>{f.name}</span>
                            <span>{f.city}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ol>

          <div className="global-stats">
            <div>
              <strong>15</strong>
              <span>Manufacturing plants</span>
            </div>
            <div>
              <strong>14</strong>
              <span>Warehouses</span>
            </div>
            <div>
              <strong>7</strong>
              <span>Countries served</span>
            </div>
          </div>
          <a className="text-link accent" href="#contact">
            Connect with our global team <span><ArrowRight size={18} aria-hidden="true" /></span>
          </a>
        </div>

        {/* Decorative: every region is also in the list. */}
        <div ref={globeRef} aria-hidden className="globe-stage">
          <div className="globe-disc" />
          {near && (
            <WebGLGlobeLoader
              countries={regions}
              activeCountryId={openId}
              activeStoreId={storeId}
              hoveredId={hoveredId}
              inView={inView}
              reducedMotion={reducedMotion}
            />
          )}
        </div>
      </div>
    </section>
  )
}
