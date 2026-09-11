import PageLead from '../components/layout/PageLead'
import OutcomesSection from '../components/sections/OutcomesSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function OutcomesPage() {
  useScrollReveal()

  return (
    <>
      <PageLead
        eyebrow="Outcomes"
        title="Commission outcomes that can be verified, not just reported."
        summary="JIFI programmes are designed backward from the livelihood and market changes partners need to see."
      />
      <OutcomesSection />
    </>
  )
}

export default OutcomesPage
