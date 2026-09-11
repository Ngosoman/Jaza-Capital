import { useState } from 'react'

const initialState = {
  fullName: '',
  organization: '',
  email: '',
  phone: '',
  programmeType: 'Controlled pilot',
  message: '',
}

function ContactFormSection() {
  const [formData, setFormData] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData(initialState)
  }

  return (
    <section id="contact-form" className="section-wrap form-panel reveal" data-reveal>
      <div className="section-intro">
        <p className="eyebrow">Contact Us</p>
        <h3>Share your programme need and our team will follow up.</h3>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </label>

        <label>
          Organization
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
            placeholder="Organization name"
          />
        </label>

        <label>
          Work Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="name@organization.com"
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+254 xxx xxx xxx"
          />
        </label>

        <label>
          Commissioning Route
          <select name="programmeType" value={formData.programmeType} onChange={handleChange}>
            <option>Controlled pilot</option>
            <option>End-to-end programme</option>
            <option>Delivery layer around capital</option>
            <option>Diagnostic and programme design</option>
          </select>
        </label>

        <label className="full-width">
          Project Brief
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us the change you want to produce, target group, capital requirements, and evidence expectations."
          />
        </label>

        <button type="submit" className="primary-btn">
          Submit Request
        </button>
      </form>

      {submitted ? (
        <p className="form-success">Thanks. Your request has been captured for follow-up.</p>
      ) : null}
    </section>
  )
}

export default ContactFormSection
