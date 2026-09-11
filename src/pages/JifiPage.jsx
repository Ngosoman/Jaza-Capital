import PageLead from '../components/layout/PageLead'
import PillarsSection from '../components/sections/PillarsSection'
import MethodSection from '../components/sections/MethodSection'
import JourneySection from '../components/sections/JourneySection'
import OutcomesSection from '../components/sections/OutcomesSection'
import EvidenceCycleSection from '../components/sections/EvidenceCycleSection'
import CommissioningSection from '../components/sections/CommissioningSection'
import ClosingCtaSection from '../components/sections/ClosingCtaSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function JifiPage() {
  useScrollReveal()

  return (
    <>
      <PageLead
        eyebrow="Why JIFI"
        title="From development mandate to verified enterprise outcomes."
        summary="JIFI integrates inclusive finance, enterprise capability, market systems, safeguards, and evidence into one repeatable implementation model."
      />
      <PillarsSection />
      <MethodSection />
      <JourneySection />
      <OutcomesSection />
      <EvidenceCycleSection />
      <CommissioningSection />
      <ClosingCtaSection />
    </>
  )
}

export default JifiPage
