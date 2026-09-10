import './App.css'

const pillars = [
  {
    id: '01',
    title: 'Inclusive Enterprise & Livelihoods',
    text: 'Raise productivity, income continuity, job quality and household resilience through practical enterprise support.',
  },
  {
    id: '02',
    title: 'Inclusive Finance & Catalytic Capital',
    text: 'Match savings and finance to real cash flow so debt remains suitable and productive.',
  },
  {
    id: '03',
    title: 'Market Systems & Value Chains',
    text: 'Connect enterprises to buyers, suppliers, standards and service ecosystems that outlast the programme.',
  },
  {
    id: '04',
    title: 'Women, Youth & Underserved Inclusion',
    text: 'Design for agency, protection and equitable participation, not just raw participation numbers.',
  },
  {
    id: '05',
    title: 'Climate Resilience & Green Enterprise',
    text: 'Reduce climate risk exposure while enabling viable green and resilient investments.',
  },
  {
    id: '06',
    title: 'Evidence, Learning & Delivery Assurance',
    text: 'Track outcomes, safeguards and value for money with a clear audit trail and adaptation loop.',
  },
]

const deliverSteps = [
  'Diagnose',
  'Engage',
  'Link finance',
  'Integrate',
  'Verify',
  'Evidence',
  'Review',
  'Scale',
]

const journeySteps = [
  'Identify',
  'Segment',
  'Diagnose',
  'Prepare',
  'Finance',
  'Connect',
  'Measure',
  'Progress',
]

function App() {
  return (
    <main className="site-shell">
      <header className="top-nav">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            J
          </span>
          <div>
            <p className="brand-name">JIFI</p>
            <p className="brand-sub">Jaza Inclusive Finance Initiative</p>
          </div>
        </div>
        <a className="ghost-btn" href="https://jazacapital.co.ke/" target="_blank" rel="noreferrer">
          Jaza Capital
        </a>
      </header>

      <section className="hero-wrap">
        <p className="eyebrow">Kenya | Development Delivery Capability 2026</p>
        <h1>Inclusive enterprise growth, engineered for measurable livelihoods impact.</h1>
        <p className="hero-copy">
          JIFI transforms a partner mandate into field-level delivery by combining catalytic finance,
          enterprise capability, market systems and evidence-led assurance in one coordinated platform.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#commissioning">
            Book a Design Session
          </a>
          <a className="secondary-btn" href="#pillars">
            Explore the 6 Pillars
          </a>
        </div>

        <div className="metrics-grid">
          <article>
            <h2>17</h2>
            <p>reported branch delivery points</p>
          </article>
          <article>
            <h2>10</h2>
            <p>counties with direct presence</p>
          </article>
          <article>
            <h2>104</h2>
            <p>staff in field, credit and operations</p>
          </article>
          <article>
            <h2>41,264</h2>
            <p>recorded disbursements across operating history</p>
          </article>
        </div>
      </section>

      <section id="pillars" className="section-wrap">
        <div className="section-intro">
          <p className="eyebrow">Core Offer</p>
          <h3>Six pillars connect finance to resilient, inclusive livelihoods.</h3>
        </div>
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="pillar-card">
              <p className="pillar-id">{pillar.id}</p>
              <h4>{pillar.title}</h4>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap method-panel">
        <div className="section-intro">
          <p className="eyebrow">How JIFI Delivers</p>
          <h3>The DELIVERS framework makes execution repeatable and auditable.</h3>
        </div>
        <ol className="deliver-flow">
          {deliverSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-wrap">
        <div className="section-intro">
          <p className="eyebrow">Participant Pathway</p>
          <h3>An 8-step enterprise journey links inclusion to real economic progress.</h3>
        </div>
        <div className="journey-strip">
          {journeySteps.map((step, index) => (
            <article key={step}>
              <p>{index + 1}</p>
              <h4>{step}</h4>
            </article>
          ))}
        </div>
      </section>

      <section id="commissioning" className="section-wrap commission-panel">
        <div className="section-intro">
          <p className="eyebrow">Commissioning Routes</p>
          <h3>Partners can engage at the right depth for their mandate.</h3>
        </div>
        <div className="commission-grid">
          <article>
            <h4>End-to-End Programme</h4>
            <p>
              Full-cycle inclusive enterprise programme design, participant support, finance linkage,
              safeguards and outcomes verification.
            </p>
          </article>
          <article>
            <h4>Delivery Layer Around Capital</h4>
            <p>
              Last-mile targeting, enterprise support and evidence architecture built around existing
              bank, DFI or partner capital facilities.
            </p>
          </article>
          <article>
            <h4>Diagnostic & Programme Design</h4>
            <p>
              Theory of change, intervention mix, implementation roadmap, risk framework and
              decision-grade measurement design before launch.
            </p>
          </article>
        </div>
      </section>

      <section className="closing-banner">
        <p className="eyebrow">Mandate-to-Delivery Session</p>
        <h3>Define the outcome. Build the pathway. Launch with confidence.</h3>
        <p>
          Start with four strategic questions: desired change, target group barriers, capital and
          service mix, and evidence thresholds for adapt, scale or transition decisions.
        </p>
        <a className="primary-btn" href="mailto:info@jazacapital.co.ke">
          Partner with JIFI
        </a>
      </section>

      <footer className="site-footer">
        <p>JIFI by Jaza Capital | Nairobi, Kenya</p>
        <a href="tel:+254740934171">+254 740 934 171</a>
      </footer>
    </main>
  )
}

export default App
