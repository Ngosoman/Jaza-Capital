import PageLead from '../components/layout/PageLead'
import ReachSection from '../components/sections/ReachSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ReachEvidencePage() {
  useScrollReveal()

  return (
    <>
      <PageLead
        eyebrow="Reach & Evidence"
        title="Scale only matters when inclusion and traceability are visible."
        summary="Jaza field presence plus evidence discipline gives partners confidence in who benefits and why."
      />
      <ReachSection />
    </>
  )
}

export default ReachEvidencePage
