
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Heart, Zap, Globe, Crown } from 'lucide-react';
import EditableImage from './EditableImage';
import { SITE_IMAGES } from '../constants';

const PILLARS = [
  {
    id: 'health',
    title: 'HealthHavn',
    subtitle: 'The Foundation',
    description: 'Vitality drives destiny. Aggregating biometrics to link physical health with decision-making energy.',
    icon: Heart,
    color: 'text-rose-400',
    bgGradient: 'from-rose-500/10 to-transparent',
    borderColor: 'border-rose-500/30'
  },
  {
    id: 'wealth',
    title: 'WealthHavn',
    subtitle: 'The Engine',
    description: 'Sovereign financial architecture. A unified dashboard connecting capital allocation to life goals.',
    icon: Zap,
    color: 'text-luxury-gold',
    bgGradient: 'from-luxury-gold/10 to-transparent',
    borderColor: 'border-luxury-gold/30'
  },
  {
    id: 'impact',
    title: 'ImpactHavn',
    subtitle: 'The Legacy',
    description: 'Wealth with purpose. scalable philanthropy and community building for multi-generational impact.',
    icon: Globe,
    color: 'text-blue-400',
    bgGradient: 'from-blue-500/10 to-transparent',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 'luxury',
    title: 'LuxHavn',
    subtitle: 'The Reward',
    description: 'Tokenized access to the good life. Fractional ownership of world-class resorts and experiences.',
    icon: Crown,
    color: 'text-luxury-jade',
    bgGradient: 'from-luxury-jade/10 to-transparent',
    borderColor: 'border-luxury-jade/30'
  }
];

const HavnCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 5000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, [isPaused]);

  const rotateTo = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true); // Pause if user manually interacts
    // Resume auto-play after 10 seconds of no interaction
    setTimeout(() => setIsPaused(false), 10000);
  };

  const next = () => rotateTo((activeIndex + 1) % 4);
  const prev = () => rotateTo((activeIndex - 1 + 4) % 4);

  return (
    <div className="w-full py-20 overflow-hidden relative min-h-[600px] flex flex-col items-center justify-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-jade/5 dark:bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="text-center mb-12 relative z-10 px-4">
        <span className="inline-block py-1 px-3 rounded-full bg-luxury-jade/10 dark:bg-luxury-gold/10 text-luxury-jade dark:text-luxury-gold text-xs font-bold uppercase tracking-widest mb-4 border border-luxury-jade/20 dark:border-luxury-gold/20 backdrop-blur-md">
            The Magnum Opus
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          The <span className="text-luxury-jade dark:text-luxury-gold">Havn</span> Ecosystem
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Supported by four interconnected pillars, creating a causal chain from health to wealth, impact, and luxury.
        </p>
      </div>

      {/* 3D Scene Container */}
      <div className="relative w-full max-w-lg h-[400px] perspective-1000 mx-auto group" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        
        {/* The Carousel Spinner */}
        <div 
            className="relative w-full h-full transition-transform duration-1000 ease-out preserve-3d"
            style={{ 
                transform: `translateZ(-300px) rotateY(${activeIndex * -90}deg)` 
            }}
        >
            {PILLARS.map((pillar, index) => {
                const Icon = pillar.icon;
                // Calculate rotation for each face
                // 0 deg, 90 deg, 180 deg, 270 deg
                const rotation = index * 90;
                
                return (
                    <div 
                        key={pillar.id}
                        className={`absolute inset-0 rounded-3xl p-1 bg-gradient-to-br ${pillar.bgGradient} backdrop-blur-xl border ${pillar.borderColor} cursor-pointer hover:brightness-110 transition-all shadow-2xl`}
                        style={{
                            transform: `rotateY(${rotation}deg) translateZ(350px)`, // Push out from center
                            backfaceVisibility: 'visible' // Allow seeing through to back faces for glass effect
                        }}
                        onClick={() => rotateTo(index)}
                    >
                        <div className="w-full h-full bg-white/80 dark:bg-luxury-black/80 rounded-2xl p-8 flex flex-col items-center text-center justify-between border border-white/20 dark:border-white/5 relative overflow-hidden">
                            {/* Inner Shine */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                            
                            <div className={`w-20 h-20 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center ${pillar.color} mb-6 shadow-inner`}>
                                <Icon size={40} />
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{pillar.title}</h3>
                                <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${pillar.color}`}>{pillar.subtitle}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>

                            <div className="mt-6 w-full pt-6 border-t border-gray-200 dark:border-white/10 flex justify-between items-center text-xs text-gray-400 font-mono uppercase">
                                <span>Pillar 0{index + 1}</span>
                                <span>{activeIndex % 4 === index ? 'Active' : 'Standby'}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mt-16 relative z-10">
        <button 
            onClick={prev}
            className="p-4 rounded-full bg-white/10 dark:bg-black/20 hover:bg-luxury-jade dark:hover:bg-luxury-gold hover:text-white dark:hover:text-black transition-all border border-gray-200 dark:border-white/10 backdrop-blur-md"
        >
            <ChevronLeft size={24} />
        </button>
        
        {/* Indicators */}
        <div className="flex gap-2 items-center px-4">
            {PILLARS.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => rotateTo(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        (activeIndex % 4) === idx 
                        ? 'w-8 bg-luxury-jade dark:bg-luxury-gold' 
                        : 'w-2 bg-gray-300 dark:bg-gray-700'
                    }`}
                />
            ))}
        </div>

        <button 
            onClick={next}
            className="p-4 rounded-full bg-white/10 dark:bg-black/20 hover:bg-luxury-jade dark:hover:bg-luxury-gold hover:text-white dark:hover:text-black transition-all border border-gray-200 dark:border-white/10 backdrop-blur-md"
        >
            <ChevronRight size={24} />
        </button>
      </div>

      {/* CSS Styles for 3D Transform */}
      <style>{`
        .perspective-1000 {
            perspective: 1000px;
        }
        .preserve-3d {
            transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default HavnCarousel;
