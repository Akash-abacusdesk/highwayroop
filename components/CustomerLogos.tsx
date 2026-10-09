// "Trusted relationships" customer strip under the homepage stats band (design: highway-roop-logo-slider-development).
// Customers with supplied artwork show their logo (public/assets/customers/<slug>.webp); the rest show a wordmark
// card until a logo is supplied. Add a logo by dropping the file in and setting `logo` on that entry.
const CUSTOMERS: { name: string; logo?: string }[] = [
  { name: 'HL Mando', logo: 'hl-mando' },
  { name: 'JTEKT', logo: 'jtekt' },
  { name: 'Nexteer', logo: 'nexteer' },
  { name: 'Rane', logo: 'rane' },
  { name: 'Namyang' },
  { name: 'SML', logo: 'sml' },
  { name: 'Taeyang', logo: 'taeyang' },
  { name: 'ZF', logo: 'zf' },
  { name: 'GSS', logo: 'gss' },
  { name: 'NSK', logo: 'nsk' },
  { name: 'Taelim', logo: 'taelim' },
  { name: 'Musashi', logo: 'musashi' },
  { name: 'SOMIC', logo: 'somic' },
  { name: 'Ather', logo: 'ather' },
  { name: 'BorgWarner', logo: 'borgwarner' },
  { name: 'Endurance', logo: 'endurance' },
  { name: 'Mahle', logo: 'mahle' },
  { name: 'Mitsubishi', logo: 'mitsubishi' },
  { name: 'PSA', logo: 'psa' },
  { name: 'Stellantis', logo: 'stellantis' },
  { name: 'Tenneco', logo: 'tenneco' },
  { name: 'Toyota', logo: 'toyota' },
  { name: 'Ford', logo: 'ford' },
  { name: 'AAM' },
  { name: 'Angstrom Automotive', logo: 'angstrom' },
  { name: 'BMW', logo: 'bmw' },
  { name: 'Captain', logo: 'captain' },
  { name: 'CGL' },
  { name: 'Comer' },
  { name: 'Dana', logo: 'dana' },
  { name: 'Dynamic' },
  { name: 'Escorts', logo: 'escorts' },
  { name: 'GKN', logo: 'gkn' },
  { name: 'Godrej', logo: 'godrej' },
  { name: 'Hanon', logo: 'hanon' },
  { name: 'Hero', logo: 'hero' },
  { name: 'ITL', logo: 'itl' },
  { name: 'Knorr', logo: 'knorr' },
  { name: 'LG', logo: 'lg' },
  { name: 'Linamar', logo: 'linamar' },
  { name: 'Magna', logo: 'magna' },
  { name: 'Maruti', logo: 'maruti' },
  { name: 'Rico' },
  { name: 'Samsung', logo: 'samsung' },
  { name: 'Sandhar', logo: 'sandhar' },
  { name: 'Starion' },
  { name: 'TAFE', logo: 'tafe' },
  { name: 'TACO' },
  { name: 'Techform' },
  { name: 'Usui' },
  { name: 'Thyssenkrupp Presta', logo: 'thyssenkrupp' },
  { name: 'JBM', logo: 'jbm' },
  { name: 'Makino', logo: 'makino' },
  { name: 'Rockman', logo: 'rockman' },
  { name: 'Bajaj', logo: 'bajaj' },
  { name: 'Marelli', logo: 'marelli' },
  { name: 'Aisin', logo: 'aisin' },
  { name: 'TMI' },
]

// Two rows (first half / second half of the list) scrolling in opposite directions.
const HALF = Math.ceil(CUSTOMERS.length / 2)
const ROWS = [CUSTOMERS.slice(0, HALF), CUSTOMERS.slice(HALF)]

function Group({ items, hidden }: { items: typeof CUSTOMERS; hidden?: boolean }) {
  return (
    <ul className="cust-group" aria-hidden={hidden || undefined}>
      {items.map(c => (
        <li key={c.name} className="cust-card">
          {c.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`/assets/customers/${c.logo}.webp`} alt={hidden ? '' : c.name} loading="lazy" decoding="async" width={600} height={350} />
          ) : (
            <span>{c.name}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function CustomerLogos() {
  return (
    <section className="cust-section" aria-labelledby="cust-title">
      <div className="shell cust-head">
        <p className="cust-eyebrow">TRUSTED RELATIONSHIPS</p>
        <h2 id="cust-title">Chosen by leading automotive partners</h2>
      </div>
      <div className="cust-marquee" tabIndex={0} aria-label="Customer logos">
        {ROWS.map((row, i) => (
          <div key={i} className={`cust-track${i ? ' reverse' : ''}`} style={{ '--cust-duration': `${row.length * 3.4}s` } as React.CSSProperties}>
            <Group items={row} />
            <Group items={row} hidden />
          </div>
        ))}
      </div>
    </section>
  )
}
