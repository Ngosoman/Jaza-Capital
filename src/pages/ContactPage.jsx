import PageLead from '../components/layout/PageLead'
import ContactFormSection from '../components/sections/ContactFormSection'
import ContactSection from '../components/sections/ContactSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ContactPage() {
  useScrollReveal()

  return (
    <>
      <PageLead
        eyebrow="Contact"
        title="Start the conversation with your programme brief."
        summary="Fill the form and capture contact details during your presentation to showcase a complete user flow."
      />
      <ContactFormSection />
      <ContactSection />
    </>
  )
}

export default ContactPage
