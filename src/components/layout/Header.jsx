import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand } from '../../data/jifiContent'

const primaryLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Enterprise Finance', to: '/enterprise-finance' },
  { label: 'Reach & Evidence', to: '/reach-evidence' },
  { label: 'Why JIFI', to: '/jifi' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Outcomes', to: '/outcomes' },
  { label: 'Contact', to: '/contact' },
]

const quickLinks = [
  { label: 'Delivery Method', to: '/delivery-method' },
  { label: 'Participant Pathway', to: '/participant-pathway' },
  { label: 'Evidence Assurance', to: '/evidence-assurance' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header id="top" className="top-nav reveal" data-reveal>
      <div className="top-nav-row">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Jaza Capital home">
          <img className="brand-logo" src={brand.logoUrl} alt="Jaza Capital logo" loading="lazy" />
          <div>
            <p className="brand-name">{brand.name}</p>
            <p className="brand-sub">Capital for proven outcomes</p>
          </div>
        </Link>

        <nav className="desktop-nav desktop-only" aria-label="Primary navigation">
          <div className="desktop-nav-primary">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="top-nav-actions desktop-only">
          <Link className="ghost-btn" to="/delivery-method" onClick={closeMenu}>
            How It Works
          </Link>
          <Link className="primary-btn nav-cta" to="/partner" onClick={closeMenu}>
            Partner with Us
          </Link>
        </div>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav id="site-navigation" className={`site-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <div className="mobile-nav mobile-only">
          <div className="mobile-nav-primary">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) => `mobile-link ${isActive ? 'active-link' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="mobile-nav-secondary">
            {quickLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) => `mobile-chip ${isActive ? 'active-link' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="mobile-nav-actions">
            <Link className="ghost-btn" to="/contact" onClick={closeMenu}>
              Contact
            </Link>
            <Link className="primary-btn nav-cta" to="/partner" onClick={closeMenu}>
              Partner with Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
