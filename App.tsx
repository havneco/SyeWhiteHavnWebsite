
import React, { useLayoutEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import MediaKitPage from './pages/MediaKitPage';
import Footer from './components/Footer';
import { AdminProvider } from './context/AdminContext';
import { ThemeProvider } from './context/ThemeContext';
import AdminLoginModal from './components/AdminLoginModal';
import Chatbot from './components/Chatbot';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AdminProvider>
        <Router>
          <div className="min-h-screen transition-colors duration-500 bg-luxury-white dark:bg-luxury-black text-gray-900 dark:text-gray-100 font-sans selection:bg-luxury-jade dark:selection:bg-luxury-gold selection:text-white flex flex-col">
            <ScrollToTop />
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/media-kit" element={<MediaKitPage />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <AdminLoginModal />
            <Chatbot />
          </div>
        </Router>
      </AdminProvider>
    </ThemeProvider>
  );
};

export default App;
