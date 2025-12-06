import React from 'react';
import { SERVICES, TECH_STACK, STATS_METRICS } from '../constants';
import StatsChart from './StatsChart';

const Expertise: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-luxury-black transition-colors">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Expertise & Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Combining deep local real estate roots with cutting-edge AI development and financial innovation.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="glass-panel p-8 rounded-2xl hover:border-luxury-jade dark:hover:border-luxury-gold transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-jade/5 to-transparent dark:from-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-luxury-jade dark:text-luxury-gold group-hover:scale-110 transition-transform relative z-10">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 min-h-[60px] relative z-10">{service.description}</p>
                <div className="mt-auto relative z-10">
                    <h4 className="text-xs font-bold text-luxury-jade dark:text-luxury-gold uppercase tracking-widest mb-4">Key Capabilities</h4>
                    <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-luxury-jade dark:bg-luxury-gold rounded-full mr-3 mt-1.5 shrink-0 shadow-[0_0_5px_currentColor]"></div>
                        {feature}
                        </li>
                    ))}
                    </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack & Stats */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-xl mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Technical Arsenal</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
                I don't just strategize; I build. My hands-on experience ranges from no-code prototyping to full-stack implementation, allowing me to speak the language of developers and investors alike.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                {TECH_STACK.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-mono rounded-lg transition-colors cursor-default hover:border-luxury-jade dark:hover:border-luxury-gold">
                    {tech}
                    </span>
                ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                {STATS_METRICS.map((stat, idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-200 dark:border-white/5 text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
                </div>
            </div>
            
            <div className="w-full">
                <StatsChart />
            </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;