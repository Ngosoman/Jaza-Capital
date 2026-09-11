import { Link } from 'react-router-dom'

const capabilities = [
  'Enterprise development',
  'Technical assistance',
  'Programme delivery',
  'Evidence and MEL',
  'Programme capital administration',
  'Market linkages',
]

function HomeJifiBridgeSection() {
  return (
    <section className="section-wrap bridge-panel reveal" data-reveal>
      <div className="section-intro">
        <p className="eyebrow">Why JIFI</p>
        <h3>Because not every enterprise constraint should become a loan.</h3>
      </div>

      <p className="bridge-copy">
        JIFI adds the development layer around capital so inclusion pathways can combine support,
        market access and safeguards with evidence that decisions can trust.
      </p>

      <div className="bridge-tags" aria-label="JIFI capabilities">
        {capabilities.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="bridge-actions">
        <Link to="/jifi" className="secondary-btn">
          Explore JIFI Model
        </Link>
        <Link to="/capabilities" className="primary-btn">
          View Capabilities
        </Link>
      </div>
    </section>
  )
}

export default HomeJifiBridgeSection
