import { Link } from 'react-router-dom'

const rhythmCards = [
  {
    id: 'field-proximity',
    eyebrow: 'Field Presence',
    title: 'Proximity infrastructure that lowers blind spots.',
    copy: 'County-level teams keep enterprise verification, follow-up and support connected to everyday business reality.',
    image: '/media/market-enterprise.webp',
    cta: { label: 'See Reach & Evidence', to: '/reach-evidence' },
  },
  {
    id: 'delivery-discipline',
    eyebrow: 'Delivery Discipline',
    title: 'Programme execution with clear operational boundaries.',
    copy: 'JIFI separates diagnosis, support and assurance checkpoints so implementation remains transparent and auditable.',
    image: '/media/jifi-community.webp',
    cta: { label: 'Explore Delivery Method', to: '/delivery-method' },
  },
  {
    id: 'portfolio-confidence',
    eyebrow: 'Portfolio Confidence',
    title: 'Evidence continuity from first engagement to outcomes.',
    copy: 'Partners receive ongoing visibility across service quality, enterprise progression and inclusion safeguards.',
    image: '/media/market-enterprise.webp',
    cta: { label: 'View Evidence Approach', to: '/evidence-assurance' },
  },
]

function HomeRhythmSection() {
  return (
    <section className="section-wrap rhythm-panel reveal" data-reveal>
      <div className="section-intro">
        <p className="eyebrow">Operating Rhythm</p>
        <h3>From market entry to assurance, every stage has visible execution logic.</h3>
      </div>

      <div className="rhythm-grid">
        {rhythmCards.map((card, index) => (
          <article key={card.id} className={`rhythm-card ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="rhythm-media" aria-hidden="true">
              <img src={card.image} alt="" loading="lazy" />
            </div>
            <div className="rhythm-copy">
              <p>{card.eyebrow}</p>
              <h4>{card.title}</h4>
              <p>{card.copy}</p>
              <Link to={card.cta.to} className="secondary-btn">
                {card.cta.label}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HomeRhythmSection
