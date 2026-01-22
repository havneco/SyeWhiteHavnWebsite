import React from 'react';
import { AUDIENCE_SEGMENTS } from '../constants';

const Expertise: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-luxury-black transition-colors">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How I Can Help
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            I build things that make lives easier, more productive, more profitable — and give people their time back.
          </p>
        </div>

        {/* Audience Segments */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {AUDIENCE_SEGMENTS.map((segment, idx) => {
            const Icon = segment.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl hover:border-luxury-jade dark:hover:border-luxury-gold transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full shadow-lg relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-jade/5 to-transparent dark:from-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-luxury-jade dark:text-luxury-gold group-hover:scale-110 transition-transform relative z-10">
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">
                  {segment.title}
                </h3>

                {/* The Problem */}
                <div className="mb-6 relative z-10">
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-2">
                    The Problem
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {segment.problem}
                  </p>
                </div>

                {/* What I Build */}
                <div className="mb-6 relative z-10">
                  <p className="text-xs font-bold text-luxury-jade dark:text-luxury-gold uppercase tracking-widest mb-2">
                    What I Build
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {segment.solution}
                  </p>
                </div>

                {/* Current Build or Recent Work */}
                {(segment.currentBuild || segment.recentWork) && (
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-white/10 relative z-10">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {segment.currentBuild || segment.recentWork}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Expertise;
