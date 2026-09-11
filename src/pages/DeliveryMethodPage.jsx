import PageLead from '../components/layout/PageLead'
import MethodSection from '../components/sections/MethodSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function DeliveryMethodPage() {
  useScrollReveal()

  return (
    <>
      <PageLead
        eyebrow="Delivery Method"
        title="The DELIVERS framework controls implementation quality."
        summary="Each stage has clear ownership, evidence requirements, and participant-protection boundaries."
      />
      <MethodSection />
    </>
  )
}

export default DeliveryMethodPage
