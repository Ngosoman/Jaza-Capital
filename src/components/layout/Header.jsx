import { brand } from '../../data/jifiContent'

function Header() {
  return (
    <header className="top-nav reveal" data-reveal>
      <div className="brand">
        <img className="brand-logo" src={brand.logoUrl} alt="Jaza Capital logo" loading="lazy" />
        <div>
          <p className="brand-name">{brand.name}</p>
          <p className="brand-sub">{brand.fullName}</p>
        </div>
      </div>
      <a className="ghost-btn" href={brand.parentUrl} target="_blank" rel="noreferrer">
        Visit Jaza Capital
      </a>
    </header>
  )
}

export default Header
