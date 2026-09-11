import { brand } from '../../data/jifiContent'

function Footer() {
  return (
    <footer className="site-footer reveal" data-reveal>
      <p>
        {brand.name} by Jaza Capital | {brand.location}
      </p>
      <p>{brand.contactEmail}</p>
      <p>+254 740 934 171</p>
    </footer>
  )
}

export default Footer
