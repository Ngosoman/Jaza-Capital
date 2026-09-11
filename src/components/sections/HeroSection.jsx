import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroVariants, metrics } from '../../data/jifiContent'

function HeroSection() {
  const [variantId, setVariantId] = useState(heroVariants[0].id)

  const activeVariant = useMemo(
    () => heroVariants.find((variant) => variant.id === variantId) ?? heroVariants[0],
    [variantId],
  )

  return (
    <section className="hero-wrap reveal" data-reveal>
      <div className="hero-header-row">
        <p className="eyebrow">Kenya | Development Delivery Capability 2026</p>
        <div className="variant-switch" role="tablist" aria-label="Hero narrative variations">
          {heroVariants.map((variant) => (
            <button
              key={variant.id}
              type="button"
              className={`variant-chip ${variant.id === activeVariant.id ? 'active' : ''}`}
              onClick={() => setVariantId(variant.id)}
            >
              {variant.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-grid">
        <div>
          <h1>{activeVariant.title}</h1>
          <p className="hero-copy">{activeVariant.copy}</p>
          <div className="hero-tags">
            {activeVariant.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="primary-btn" to="/partner">
              Book a Design Session
            </Link>
            <Link className="secondary-btn" to="/capabilities">
              Explore the 6 Pillars
            </Link>
          </div>
        </div>

        <aside className="hero-media" aria-label="Jaza field engagement">
          <img src={activeVariant.image} alt="Jaza field team working with entrepreneurs" loading="lazy" />
        </aside>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <h2>{metric.value}</h2>
            <p>{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
