import { useMemo, useState } from 'react'
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
            <a className="primary-btn" href="#commissioning">
              Book a Design Session
            </a>
            <a className="secondary-btn" href="#pillars">
              Explore the 6 Pillars
            </a>
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
