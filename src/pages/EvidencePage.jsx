import PageLead from '../components/layout/PageLead'
import EvidenceCycleSection from '../components/sections/EvidenceCycleSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function EvidencePage() {
  useScrollReveal()

  return (
    <>
      <PageLead
        eyebrow="Evidence & Assurance"
        title="Use evidence as an operating tool from day one."
        summary="Baseline, live delivery, outcome review and decision checkpoints keep programmes accountable and adaptive."
      />
      <EvidenceCycleSection />
    </>
  )
}

export default EvidencePage
