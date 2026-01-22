import React from 'react';
import { PHILOSOPHY_VALUES } from '../constants';

const Philosophy: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-luxury-black">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What I Believe
          </h2>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PHILOSOPHY_VALUES.map((value, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl hover:border-luxury-jade dark:hover:border-luxury-gold transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-luxury-jade dark:group-hover:text-luxury-gold transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
