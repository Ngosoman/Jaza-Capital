import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { brand } from '../../data/jifiContent'

const navGroups = [
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
      { label: 'Evidence', to: '/evidence-assurance' },
      { label: 'Partner with Us', to: '/partner' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Contact', to: '/contact' },
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
        <Link className="primary-btn nav-cta desktop-only" to="/partner" onClick={closeMenu}>
          Partner with Us
        </Link>
      </div>

      <nav
        id="site-navigation"
        className={`site-nav ${isMenuOpen ? 'open' : ''}`}
        aria-label="Primary navigation"
      >
        {navGroups.map((group) => (
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
        <Link className="primary-btn nav-cta mobile-only" to="/partner" onClick={closeMenu}>
          Partner with Us
        </Link>
      </nav>
    </header>
  )
}

export default Header
