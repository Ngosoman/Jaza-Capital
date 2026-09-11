import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import EnterpriseFinancePage from './pages/EnterpriseFinancePage'
import ReachEvidencePage from './pages/ReachEvidencePage'
import JifiPage from './pages/JifiPage'
import CapabilitiesPage from './pages/CapabilitiesPage'
import DeliveryMethodPage from './pages/DeliveryMethodPage'
import ParticipantPathwayPage from './pages/ParticipantPathwayPage'
import OutcomesPage from './pages/OutcomesPage'
import EvidencePage from './pages/EvidencePage'
import PartnerPage from './pages/PartnerPage'
import ContactPage from './pages/ContactPage'
import './styles/landing.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/enterprise-finance" element={<EnterpriseFinancePage />} />
          <Route path="/reach-evidence" element={<ReachEvidencePage />} />
          <Route path="/jifi" element={<JifiPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/delivery-method" element={<DeliveryMethodPage />} />
          <Route path="/participant-pathway" element={<ParticipantPathwayPage />} />
          <Route path="/outcomes" element={<OutcomesPage />} />
          <Route path="/evidence-assurance" element={<EvidencePage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
