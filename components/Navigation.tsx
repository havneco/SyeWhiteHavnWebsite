import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { useTheme } from '../context/ThemeContext';
import PitchModal from './PitchModal';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pitchOpen, setPitchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    setIsOpen(false);

    // Intercept Pitch 42
    if (href === '#pitch-42') {
      e.preventDefault();
      setPitchOpen(true);
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();

      // Defer scrolling to next tick to avoid blocking UI updates (INP fix)
      setTimeout(() => {
        const targetId = href.substring(1);
        if (location.pathname !== '/') {
          navigate('/', { state: { scrollTo: targetId } });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - navHeight,
              behavior: 'smooth'
            });
          }
        }
      }, 0);
    }
  };

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth'
          });
          navigate('/', { replace: true, state: {} });
        }
      }, 100);
    }
  }, [location, navigate]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-luxury-white/80 dark:bg-luxury-black/80 backdrop-blur-xl border-gray-200 dark:border-white/10 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <NavLink to="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
              <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sye<span className="text-luxury-jade dark:text-luxury-gold transition-colors">White</span>
              </span>
            </NavLink>

            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => {
                const isHash = item.href.startsWith('#');
                return isHash ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-luxury-jade dark:hover:text-luxury-gold transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    className={({ isActive }) =>
                      `text-sm font-medium uppercase tracking-widest transition-colors ${isActive ? 'text-luxury-jade dark:text-luxury-gold' : 'text-gray-600 dark:text-gray-300 hover:text-luxury-jade dark:hover:text-luxury-gold'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-luxury-jade dark:text-luxury-gold transition-all"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 text-luxury-jade dark:text-luxury-gold"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 dark:text-white"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute w-full left-0 top-full bg-luxury-white/95 dark:bg-luxury-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isHash = item.href.startsWith('#');
                return isHash ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="block px-3 py-4 text-base font-medium border-b border-gray-100 dark:border-white/5 text-gray-800 dark:text-gray-200 hover:text-luxury-jade dark:hover:text-luxury-gold"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-4 text-base font-medium border-b border-gray-100 dark:border-white/5 ${isActive ? 'text-luxury-jade dark:text-luxury-gold' : 'text-gray-800 dark:text-gray-200 hover:text-luxury-jade dark:hover:text-luxury-gold'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {pitchOpen && <PitchModal onClose={() => setPitchOpen(false)} />}
    </>
  );
};

export default Navigation;