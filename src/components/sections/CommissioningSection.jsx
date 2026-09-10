import { commissioningOptions } from '../../data/jifiContent'

function CommissioningSection() {
  return (
    <section id="commissioning" className="section-wrap commission-panel reveal" data-reveal>
      <div className="section-intro">
        <p className="eyebrow">Commissioning Routes</p>
        <h3>Partners can engage at the right depth for their mandate.</h3>
      </div>
      <div className="commission-grid">
        {commissioningOptions.map((option) => (
          <article key={option.title}>
            <h4>{option.title}</h4>
            <p>{option.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CommissioningSection
