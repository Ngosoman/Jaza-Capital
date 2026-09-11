const counties = [
  'Nairobi',
  'Kajiado',
  'Kiambu',
  'Narok',
  'Kericho',
  'Kisumu / Ahero',
  'Kakamega / Mumias',
  'Bungoma / Kimilili',
  'Busia',
  'Trans Nzoia / Kitale',
]

function ReachSection() {
  return (
    <section id="reach" className="section-wrap reach-panel reveal" data-reveal>
      <div className="section-intro">
        <p className="eyebrow">Reach & Evidence</p>
        <h3>Scale matters. Who the system reaches matters more.</h3>
      </div>

      <div className="feature-grid feature-grid-two">
        <article>
          <h4>Where Jaza Works</h4>
          <p>
            Last-mile presence across key counties enables transparent participant verification,
            ongoing support and stronger evidence continuity.
          </p>
          <div className="county-list" aria-label="Operating counties">
            {counties.map((county) => (
              <span key={county}>{county}</span>
            ))}
          </div>
        </article>

        <article>
          <h4>What Evidence Tracks</h4>
          <p>
            Enterprise outcomes, financial wellbeing, inclusion quality, safeguards and resilience
            are reviewed continuously to support adapt, scale or transition decisions.
          </p>
          <ul className="evidence-list">
            <li>Participation and service quality visibility</li>
            <li>Financial health and enterprise progression</li>
            <li>Safeguarding, complaints and control checks</li>
            <li>Value for money and decision audit trail</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default ReachSection