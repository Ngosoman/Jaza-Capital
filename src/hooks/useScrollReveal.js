import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')

    if (!nodes.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])
}
