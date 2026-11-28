import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';
import PrivacyOwnGeminiPage from './PrivacyOwnGeminiPage';
import HelpPage from './HelpPage';
import NichePage from './NichePage';
import { NICHES } from './data/siteContent';

function LegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#/privacy') {
      navigate('/privacidade', { replace: true });
    } else if (hash === '#/help') {
      navigate('/ajuda', { replace: true });
    } else if (hash === '#/privacyOwnGemini') {
      navigate('/privacyOwnGemini', { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <LegacyHashRedirect />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacidade" element={<PrivacyPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/termos" element={<TermsPage />} />
        <Route path="/ajuda" element={<HelpPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/privacyOwnGemini" element={<PrivacyOwnGeminiPage />} />
        {NICHES.map((niche) => (
          <Route
            key={niche.slug}
            path={niche.route}
            element={<NichePage niche={niche} />}
          />
        ))}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
