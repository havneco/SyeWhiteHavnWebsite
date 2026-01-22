import React from 'react';
import { HAVN_ECOSYSTEM } from '../constants';
import { Heart, Wallet, Globe, Gem } from 'lucide-react';

const pillarIcons = [Heart, Wallet, Globe, Gem];
const pillarColors = [
  'text-red-500',
  'text-green-500',
  'text-blue-500',
  'text-purple-500'
];

const HavnEcosystem: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#080808]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Havn Ecosystem
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Four pillars. One flywheel. A causal chain from health to wealth to impact to luxury.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {HAVN_ECOSYSTEM.map((pillar, idx) => {
            const Icon = pillarIcons[idx];
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl hover:border-luxury-jade dark:hover:border-luxury-gold transition-all duration-300 group flex flex-col"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-4 ${pillarColors[idx]} group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>

                {/* Name & Tagline */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {pillar.name}
                </h3>
                <p className="text-sm text-luxury-jade dark:text-luxury-gold font-medium mb-4">
                  {pillar.tagline}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
                  {pillar.description}
                </p>

                {/* Status Badge */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    pillar.status === 'Active Development'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400'
                  }`}>
                    {pillar.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HavnEcosystem;
