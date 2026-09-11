import { Link } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function HomePage() {
  useScrollReveal()

  return (
    <>
      <HeroSection />
      <section className="section-wrap quick-links reveal" data-reveal>
        <div className="section-intro">
          <p className="eyebrow">Explore</p>
          <h3>Choose a track and navigate page by page.</h3>
        </div>
        <div className="quick-links-grid">
          <Link to="/about">About Jaza + JIFI</Link>
          <Link to="/enterprise-finance">Enterprise Finance</Link>
          <Link to="/reach-evidence">Reach & Evidence</Link>
          <Link to="/jifi">JIFI Overview</Link>
          <Link to="/partner">Partner with Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
