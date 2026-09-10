import { deliverSteps } from '../../data/jifiContent'

function MethodSection() {
  return (
    <section className="section-wrap method-panel reveal" data-reveal>
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
  )
}

export default MethodSection
