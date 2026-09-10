import { useState } from 'react'
import { brand } from '../../data/jifiContent'

const navGroups = [
  {
    title: 'Jaza',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Enterprise Finance', href: '#finance' },
      { label: 'Reach & Evidence', href: '#reach' },
    ],
  },
  {
    title: 'JIFI',
    links: [
      { label: 'Why JIFI', href: '#top' },
      { label: 'Capabilities', href: '#pillars' },
      { label: 'Delivery Method', href: '#method' },
      { label: 'Participant Pathway', href: '#journey' },
      { label: 'Partner with Us', href: '#commissioning' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Email', href: `mailto:${brand.contactEmail}` },
      { label: 'Call', href: `tel:${brand.contactPhone}` },
      { label: 'Nairobi HQ', href: '#contact' },
    ],
  },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

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
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          Menu
        </button>

        <a className="ghost-btn desktop-only" href="#top" onClick={closeMenu}>
          Home
        </a>
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
                <a key={link.label} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        ))}

        <a className="ghost-btn mobile-only" href="#top" onClick={closeMenu}>
          Home
        </a>
      </nav>
    </header>
  )
}

export default Header
