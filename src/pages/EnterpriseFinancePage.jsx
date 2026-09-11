import PageLead from '../components/layout/PageLead'
import FinanceSection from '../components/sections/FinanceSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function EnterpriseFinancePage() {
  useScrollReveal()

  return (
    <>
      <PageLead
        eyebrow="Enterprise Finance"
        title="Finance starts where the enterprise actually operates."
        summary="The field-led credit method protects suitability and helps convert finance into productive growth."
      />
      <FinanceSection />
    </>
  )
}

export default EnterpriseFinancePage
