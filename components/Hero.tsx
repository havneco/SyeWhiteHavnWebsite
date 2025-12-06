
import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_CONTENT, SITE_IMAGES } from '../constants';
import EditableImage from './EditableImage';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
         {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-luxury-black dark:via-[#0a0a0a] dark:to-black z-0"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-jade/10 dark:bg-luxury-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-luxury-jade/5 dark:bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* User Image Background - INTERACTIVE */}
        {/* Width set to 75% to ensure 90%+ of the visible image area is interactive */}
        <div className="absolute right-0 top-0 w-full md:w-[75%] h-full z-0 group cursor-pointer">
            <div className="w-full h-full opacity-30 dark:opacity-40 group-hover:opacity-100 transition-all duration-1000 mask-image-gradient">
                <EditableImage 
                    imageKey="hero_main"
                    defaultSrc={SITE_IMAGES.hero}
                    alt="Sye White - Ecosystem Architect"
                    className="w-full h-full object-cover object-top transform transition-transform duration-1000 group-hover:scale-105"
                    containerClassName="w-full h-full"
                />
                {/* Subtle Gradient Overlay that fades out on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-white via-transparent to-transparent dark:from-luxury-black z-10 group-hover:opacity-0 transition-opacity duration-1000"></div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-20 relative pointer-events-none">
        <div className="max-w-4xl relative pointer-events-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-jade/10 dark:bg-luxury-gold/10 border border-luxury-jade/20 dark:border-luxury-gold/20 text-luxury-jade dark:text-luxury-gold text-xs font-mono mb-8 backdrop-blur-md">
            <Terminal size={12} />
            <span className="tracking-widest uppercase">AI Pioneer & Ecosystem Architect</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-jade dark:bg-gradient-gold">Future</span> of <br />
            Sovereign Living.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed border-l-2 border-luxury-jade dark:border-luxury-gold pl-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm pr-4 rounded-r-lg">
            {HERO_CONTENT.subhead}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <Link 
              to="/media-kit" 
              className="group px-8 py-4 bg-luxury-jade dark:bg-luxury-gold text-white dark:text-black font-bold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(5,150,105,0.4)] dark:hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
            >
              {HERO_CONTENT.ctaPrimary} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a 
              href="#projects" 
              onClick={scrollToProjects}
              className="px-8 py-4 border border-gray-300 dark:border-white/20 hover:border-luxury-jade dark:hover:border-luxury-gold text-gray-700 dark:text-white font-bold rounded-lg transition-all backdrop-blur-sm flex items-center justify-center bg-white/30 dark:bg-black/30"
            >
              {HERO_CONTENT.ctaSecondary}
            </a>
          </div>

          <div className="border-t border-gray-200 dark:border-white/10 pt-6">
            <p className="text-xs font-bold text-luxury-jade dark:text-luxury-gold uppercase tracking-[0.2em] opacity-90">
                {HERO_CONTENT.intersection}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
