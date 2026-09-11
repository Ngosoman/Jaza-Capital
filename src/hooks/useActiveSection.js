import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'top',
  'about',
  'finance',
  'reach',
  'pillars',
  'method',
  'journey',
  'outcomes',
  'evidence',
  'commissioning',
  'contact',
]

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const onScroll = () => {
      let current = 'top'
      const offset = 180

      for (const id of SECTION_IDS) {
        const node = document.getElementById(id)

        if (!node) {
          continue
        }

        if (window.scrollY + offset >= node.offsetTop) {
          current = id
        }
      }

      setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return activeSection
}
