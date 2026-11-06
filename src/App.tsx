import { useEffect } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { OurWorkPage } from './pages/OurWorkPage';
import { YourLawyersPage } from './pages/YourLawyersPage';

function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      const timer = window.setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <RouteScrollManager />
        <IntroAnimation />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/your-lawyers" element={<YourLawyersPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}

