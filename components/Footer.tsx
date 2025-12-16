
import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { Lock, AlertCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const { openLogin, isAdmin, isFirebaseReady } = useAdmin();

  return (
    <footer className="bg-white dark:bg-luxury-black border-t border-gray-200 dark:border-white/5 py-12 transition-colors">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sye<span className="text-luxury-jade dark:text-luxury-gold">White</span></h2>
        <p className="text-gray-500 mb-6 font-light">Innovating at the intersection of Health, Wealth, and Technology.</p>
        <p className="text-gray-400 text-xs mb-8 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Sye White. All rights reserved. <br />
          Helena, Montana.
        </p>


      </div>
    </footer>
  );
};

export default Footer;
