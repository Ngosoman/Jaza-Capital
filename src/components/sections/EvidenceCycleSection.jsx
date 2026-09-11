const cycle = [
  'Baseline: enterprise, household, market and risk starting point',
  'Live delivery: participation, support quality and finance use tracking',
  'Outcome review: performance, financial health, inclusion and resilience',
  'Decision: stop, adapt, scale, transfer or transition',
]

function EvidenceCycleSection() {
  return (
    <section id="evidence" className="section-wrap evidence-panel reveal" data-reveal>
      <div className="section-intro">
        <p className="eyebrow">Evidence, Learning and Assurance</p>
        <h3>Evidence is used as an operating tool, not a reporting afterthought.</h3>
      </div>

      <div className="cycle-grid">
        {cycle.map((item, index) => (
          <article key={item}>
            <p className="flow-step">{String(index + 1).padStart(2, '0')}</p>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EvidenceCycleSection
