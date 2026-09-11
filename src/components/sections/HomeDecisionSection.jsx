import { Link } from 'react-router-dom'

function HomeDecisionSection() {
  return (
    <section className="section-wrap decision-panel reveal" data-reveal>
      <div className="section-intro">
        <p className="eyebrow">Start in the Right Place</p>
        <h3>Business finance or development partnership?</h3>
      </div>

      <div className="decision-grid">
        <article>
          <p className="decision-type">For Businesses</p>
          <h4>I run a business</h4>
          <p>
            Explore enterprise finance built where businesses operate, with suitability and
            follow-up at the center.
          </p>
          <Link to="/enterprise-finance" className="secondary-btn">
            Explore Enterprise Finance
          </Link>
        </article>

        <article>
          <p className="decision-type">For Partners</p>
          <h4>I represent a partner</h4>
          <p>
            Commission JIFI for diagnostics, delivery-layer implementation or end-to-end programme
            management.
          </p>
          <Link to="/partner" className="primary-btn">
            Partner with JIFI
          </Link>
        </article>
      </div>
    </section>
  )
}

export default HomeDecisionSection
