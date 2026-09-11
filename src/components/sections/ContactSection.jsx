import { useState } from 'react'
import { brand } from '../../data/jifiContent'

function ContactSection() {
  const [copiedKey, setCopiedKey] = useState('')

  const copyText = async (text, key) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      }
      setCopiedKey(key)
      window.setTimeout(() => setCopiedKey(''), 1800)
    } catch {
      setCopiedKey('')
    }
  }

  return (
    <section id="contact" className="section-wrap contact-panel reveal" data-reveal>
      <div className="section-intro">
        <p className="eyebrow">Contact</p>
        <h3>Everything you need is here on-site, ready for your presentation flow.</h3>
      </div>

      <div className="contact-grid" id="contact-actions">
        <article id="contact-email">
          <p className="contact-label">Email</p>
          <h4>{brand.contactEmail}</h4>
          <button type="button" className="copy-btn" onClick={() => copyText(brand.contactEmail, 'email')}>
            {copiedKey === 'email' ? 'Copied' : 'Copy Email'}
          </button>
        </article>

        <article id="contact-phone">
          <p className="contact-label">Phone</p>
          <h4>+254 740 934 171</h4>
          <button type="button" className="copy-btn" onClick={() => copyText('+254 740 934 171', 'phone')}>
            {copiedKey === 'phone' ? 'Copied' : 'Copy Phone'}
          </button>
        </article>

        <article id="contact-location">
          <p className="contact-label">Location</p>
          <h4>{brand.location}</h4>
          <p className="contact-note">1st Floor, Life Ministry Building, Kilimani, Nairobi</p>
        </article>
      </div>
    </section>
  )
}

export default ContactSection
