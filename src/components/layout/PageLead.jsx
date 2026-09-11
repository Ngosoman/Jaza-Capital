function PageLead({ eyebrow, title, summary }) {
  return (
    <section className="page-lead reveal" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="hero-copy">{summary}</p>
    </section>
  )
}

export default PageLead
