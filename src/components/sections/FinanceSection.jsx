const financeFlow = [
  {
    step: 'Find',
    text: 'Work inside real markets where enterprise activity can be observed directly.',
  },
  {
    step: 'Assess',
    text: 'Verify trading behavior, cash cycles, purpose and affordability at enterprise level.',
  },
  {
    step: 'Decide',
    text: 'Keep origination, verification and approval boundaries clear to protect suitability.',
  },
  {
    step: 'Follow',
    text: 'Maintain visibility and follow-up so early stress signals can be acted on quickly.',
  },
]

function FinanceSection() {
  return (
    <section id="finance" className="section-wrap finance-panel reveal" data-reveal>
      <div className="section-intro">
        <p className="eyebrow">Enterprise Finance</p>
        <h3>Field-led credit method built for enterprise reality, not spreadsheet assumptions.</h3>
      </div>

      <div className="flow-grid">
        {financeFlow.map((item, index) => (
          <article key={item.step}>
            <p className="flow-step">{String(index + 1).padStart(2, '0')}</p>
            <h4>{item.step}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FinanceSection