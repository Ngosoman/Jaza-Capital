import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
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

const mobileGroups = [
  {
    title: 'Jaza',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Enterprise Finance', to: '/enterprise-finance' },
      { label: 'Reach & Evidence', to: '/reach-evidence' },
    ],
  },
  {
    title: 'JIFI',
    links: [
      { label: 'Why JIFI', to: '/jifi' },
      { label: 'Capabilities', to: '/capabilities' },
      { label: 'Delivery Method', to: '/delivery-method' },
      { label: 'Participant Pathway', to: '/participant-pathway' },
      { label: 'Outcomes', to: '/outcomes' },
      { label: 'Evidence Assurance', to: '/evidence-assurance' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Contact Page', to: '/contact' },
      { label: 'Form', to: '/contact#contact-form', hashOnly: true },
      { label: 'Email', to: '/contact#contact-email', hashOnly: true },
      { label: 'Call', to: '/contact#contact-phone', hashOnly: true },
    ],
  },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  const isHashRouteActive = (to) => {
    const [path] = to.split('#')
    return location.pathname === path
  }

  return (
    <header id="top" className="top-nav reveal" data-reveal>
      <div className="top-nav-row">
        <div className="brand">
          <img className="brand-logo" src={brand.logoUrl} alt="Jaza Capital logo" loading="lazy" />
          <div>
            <p className="brand-name">{brand.name}</p>
            <p className="brand-sub">{brand.fullName}</p>
          </div>
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

        <div className="top-nav-actions desktop-only">
          <Link className="ghost-btn" to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link className="primary-btn nav-cta" to="/partner" onClick={closeMenu}>
            Partner with Us
          </Link>
        </div>
      </div>

      <nav
        id="site-navigation"
        className={`site-nav ${isMenuOpen ? 'open' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="desktop-nav desktop-only">
          <div className="desktop-nav-primary">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) => `nav-pill ${isActive ? 'active-link' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="mobile-nav mobile-only">
          {mobileGroups.map((group) => (
            <section key={group.title} className="nav-group">
              <p className="nav-title">{group.title}</p>
              <div className="nav-links">
                {group.links.map((link) => (
                  link.hashOnly ? (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={closeMenu}
                      className={isHashRouteActive(link.to) ? 'active-link' : ''}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      onClick={closeMenu}
                      className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                      {link.label}
                    </NavLink>
                  )
                ))}
              </div>
            </section>
          ))}

          <Link className="primary-btn nav-cta" to="/partner" onClick={closeMenu}>
            Partner with Us
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
