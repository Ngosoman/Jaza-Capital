import PageLead from '../components/layout/PageLead'
import AboutSection from '../components/sections/AboutSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AboutPage() {
  useScrollReveal()

  return (
    <>
      <PageLead
        eyebrow="About"
        title="One institution, two mandates, one delivery discipline."
        summary="Jaza provides the operating rails; JIFI converts those rails into accountable development implementation."
      />
      <AboutSection />
    </>
  )
}

export default AboutPage
