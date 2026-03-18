import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import PrivacyPage from './PrivacyPage'
import HelpPage from './HelpPage'

/**
 * Usando HashRouter para suportar rotas no GitHub Pages de forma simplificada
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </Router>
  )
}

export default App
