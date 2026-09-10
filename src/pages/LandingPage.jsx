import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import PillarsSection from '../components/sections/PillarsSection'
import MethodSection from '../components/sections/MethodSection'
import JourneySection from '../components/sections/JourneySection'
import CommissioningSection from '../components/sections/CommissioningSection'
import ClosingCtaSection from '../components/sections/ClosingCtaSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function LandingPage() {
  useScrollReveal()

  return (
    <main className="site-shell">
      <Header />
      <HeroSection />
      <PillarsSection />
      <MethodSection />
      <JourneySection />
      <CommissioningSection />
      <ClosingCtaSection />
      <Footer />
    </main>
  )
}

export default LandingPage
