
import React, { useLayoutEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import { AdminProvider } from './context/AdminContext';
import { ThemeProvider } from './context/ThemeContext';
import AdminLoginModal from './components/AdminLoginModal';
import SageChat from './components/SageChat';
import UserProfileWidget from './components/UserProfileWidget';
import { Analytics } from '@vercel/analytics/react';

import ScrollToTop from './components/ScrollToTop';
import AdminDashboard from './pages/AdminDashboard';

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
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <AdminLoginModal />
            <SageChat />
            <UserProfileWidget />
            <Analytics />
          </div>
        </Router>
      </AdminProvider>
    </ThemeProvider>
  );
};

export default App;
