'use client'

import { useEffect, useRef, useState } from 'react'
import WebGLGlobeLoader from './globe/WebGLGlobeLoader'
import type { Country } from './globe/geo'

// ISO 3166-1 numeric codes of the countries outlined for each region.
const EUROPE = ['008','020','040','056','070','100','191','196','203','208','233','246','250','276','300','348','352','372','380','428','438','440','442','807','470','498','492','499','528','578','616','620','642','688','703','705','724','752','756','804','826','112']
const LATAM = ['484','320','084','340','222','558','188','591','192','214','332','388','630','780','032','068','076','152','170','218','328','600','604','740','858','862']
const APAC = ['156','158','392','410','408','496','704','764','116','418','104','458','702','360','096','608','626','598','036','554','242','090','548','050','144','524','064','462','004']

// PLACEHOLDER facilities (real cities, generic names) until actual details are provided.
const site = (id: string, n: number, city: string, latitude: number, longitude: number) =>
  ({ id: `${id}-${n}`, name: `Facility ${n}`, city, latitude, longitude })

const regions: Country[] = [
  { id: 'in', name: 'India', isoNumerics: ['356'], latitude: 22, longitude: 79, zoom: 2.7, stores: [
    site('in', 1, 'New Delhi', 28.61, 77.21), site('in', 2, 'Pune', 18.52, 73.86),
    site('in', 3, 'Chennai', 13.08, 80.27), site('in', 4, 'Ahmedabad', 23.02, 72.57) ] },
  { id: 'na', name: 'North America', isoNumerics: ['840', '124'], latitude: 48, longitude: -100, zoom: 1.6, stores: [
    site('na', 1, 'Chicago', 41.88, -87.63), site('na', 2, 'Houston', 29.76, -95.37),
    site('na', 3, 'Toronto', 43.65, -79.38) ] },
  { id: 'eu', name: 'Europe', isoNumerics: EUROPE, latitude: 52, longitude: 14, zoom: 3, stores: [
    site('eu', 1, 'Frankfurt', 50.11, 8.68), site('eu', 2, 'Rotterdam', 51.92, 4.48),
    site('eu', 3, 'Warsaw', 52.23, 21.01) ] },
  { id: 'latam', name: 'Latin America', isoNumerics: LATAM, latitude: -10, longitude: -65, zoom: 1.6, stores: [
    site('latam', 1, 'Mexico City', 19.43, -99.13), site('latam', 2, 'Bogotá', 4.71, -74.07),
    site('latam', 3, 'São Paulo', -23.55, -46.63) ] },
  { id: 'apac', name: 'Asia Pacific', isoNumerics: APAC, latitude: 5, longitude: 115, zoom: 1.5, stores: [
    site('apac', 1, 'Tokyo', 35.68, 139.69), site('apac', 2, 'Singapore', 1.35, 103.82),
    site('apac', 3, 'Sydney', -33.87, 151.21) ] },
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
            Twelve manufacturing facilities in India connect with fourteen international warehouses across seven
            countries, supporting coordinated delivery across automotive markets.
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
              <strong>12+</strong>
              <span>Manufacturing facilities</span>
            </div>
            <div>
              <strong>14</strong>
              <span>International warehouses</span>
            </div>
            <div>
              <strong>7</strong>
              <span>Countries served</span>
            </div>
          </div>
          <a className="text-link accent" href="#contact">
            Connect with our global team <span>→</span>
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
