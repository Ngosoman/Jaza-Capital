import { journeySteps } from '../../data/jifiContent'

function JourneySection() {
  return (
    <section id="journey" className="section-wrap reveal" data-reveal>
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
  )
}

export default JourneySection
