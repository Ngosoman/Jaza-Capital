const outcomes = [
  {
    title: 'Enterprise Performance',
    text: 'Productivity, value addition, sales, margins, assets and business continuity.',
  },
  {
    title: 'Financial Wellbeing',
    text: 'Savings buffers, debt stress reduction and suitable investment progression.',
  },
  {
    title: "Women's Economic Participation",
    text: 'Benefit, voice, agency and control of income and productive assets.',
  },
  {
    title: 'Youth Opportunity and Jobs',
    text: 'Viable roles, enterprise service jobs and decent work pathways.',
  },
  {
    title: 'Market Participation',
    text: 'Buyer and supplier relationships, standards uptake and repeat transactions.',
  },
  {
    title: 'Climate Resilience',
    text: 'Lower risk exposure and productive use of resilient or green assets.',
  },
]

function OutcomesSection() {
  return (
    <section id="outcomes" className="section-wrap outcomes-panel reveal" data-reveal>
      <div className="section-intro">
        <p className="eyebrow">Commissionable Outcomes</p>
        <h3>Programmes are designed backward from the change partners need to verify.</h3>
      </div>

      <div className="outcomes-grid">
        {outcomes.map((outcome) => (
          <article key={outcome.title}>
            <h4>{outcome.title}</h4>
            <p>{outcome.text}</p>
          </article>
        ))}
      </div>

      <p className="outcome-summary">
        Ultimate development result: improved livelihoods and stronger, more resilient communities.
      </p>
    </section>
  )
}

export default OutcomesSection
