import PageLead from '../components/layout/PageLead'
import PillarsSection from '../components/sections/PillarsSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function CapabilitiesPage() {
  useScrollReveal()

  return (
    <>
      <PageLead
        eyebrow="Capabilities"
        title="Six pillars define the development delivery offer."
        summary="These pillars connect inclusion to productivity, resilience, and measurable livelihood improvement."
      />
      <PillarsSection />
    </>
  )
}

export default CapabilitiesPage
