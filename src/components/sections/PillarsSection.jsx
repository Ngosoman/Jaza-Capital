import { pillars } from '../../data/jifiContent'

function PillarsSection() {
  return (
    <section id="pillars" className="section-wrap reveal" data-reveal>
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
  )
}

export default PillarsSection
