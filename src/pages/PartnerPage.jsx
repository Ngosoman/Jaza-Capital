import PageLead from '../components/layout/PageLead'
import CommissioningSection from '../components/sections/CommissioningSection'
import ClosingCtaSection from '../components/sections/ClosingCtaSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function PartnerPage() {
  useScrollReveal()

  return (
    <>
      <PageLead
        eyebrow="Partner With JIFI"
        title="Choose the commissioning depth your mandate requires."
        summary="From diagnostic design to complete end-to-end programme delivery, JIFI structures implementation around clear scope and decision points."
      />
      <CommissioningSection />
      <ClosingCtaSection />
    </>
  )
}

export default PartnerPage
