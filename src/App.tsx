import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppStore } from './store/appStore';
import { initGemini } from './lib/gemini';
import Layout from './components/Layout';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import LearningHub from './pages/LearningHub';
import CaseStudies from './pages/CaseStudies';
import Opportunities from './pages/Opportunities';
import Skills from './pages/Skills';
import Settings from './pages/Settings';

// Always init Gemini (key is built-in)
initGemini();

export default function App() {
  const user = useAppStore((s) => s.user);

  if (!user) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <div className="noise-overlay">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn" element={<LearningHub />} />
            <Route path="/cases" element={<CaseStudies />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
