import { brand } from '../../data/jifiContent'

function Footer() {
  return (
    <footer id="contact" className="site-footer reveal" data-reveal>
      <p>
        {brand.name} by Jaza Capital | {brand.location}
      </p>
      <a href={`mailto:${brand.contactEmail}`}>{brand.contactEmail}</a>
      <a href={`tel:${brand.contactPhone}`}>+254 740 934 171</a>
    </footer>
  )
}

export default Footer
