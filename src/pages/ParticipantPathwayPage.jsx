import PageLead from '../components/layout/PageLead'
import JourneySection from '../components/sections/JourneySection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ParticipantPathwayPage() {
  useScrollReveal()

  return (
    <>
      <PageLead
        eyebrow="Participant Pathway"
        title="Progression is defined by the enterprise’s next viable step."
        summary="JIFI sequences diagnosis, support, finance, and market linkage into an 8-step journey that can be measured and adapted."
      />
      <JourneySection />
    </>
  )
}

export default ParticipantPathwayPage
