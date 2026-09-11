import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function SiteLayout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      window.requestAnimationFrame(() => {
        const node = document.getElementById(id)

        if (node) {
          node.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return (
    <main className="site-shell">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default SiteLayout
