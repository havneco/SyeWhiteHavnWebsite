

import React from 'react';
import { ABOUT_CONTENT, MILESTONES, BRAND_VALUES, SITE_IMAGES } from '../constants';
import EditableImage from './EditableImage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#080808] relative">
      <div className="container mx-auto px-4">

        {/* Main Bio Section */}
        <div className="max-w-4xl mx-auto mb-24">

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left">
            The <span className="text-luxury-jade dark:text-luxury-gold">Journey</span> So Far
          </h2>

          <p className="text-xl text-gray-800 dark:text-gray-200 italic mb-12 leading-relaxed font-light border-l-4 border-luxury-jade dark:border-luxury-gold pl-6">
            "{ABOUT_CONTENT.hook}"
          </p>

          {/* Innovator Image - Centered between text */}
          <div className="mb-12 relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl bg-gray-100 dark:bg-white/5 rotate-1 hover:rotate-0 transition-transform duration-500 max-w-2xl mx-auto">
            <EditableImage
              imageKey="about_personal"
              defaultSrc={SITE_IMAGES.about_personal}
              alt="Sye White AI Innovator"
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full glass-panel p-6 pt-12">
              <p className="text-gray-900 dark:text-white font-bold">The AI Innovator</p>
              <p className="text-xs text-gray-600 dark:text-gray-300">Researching the biggest impacting emerging factor of our lifetime.</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            <p>{ABOUT_CONTENT.bio}</p>
            <p>{ABOUT_CONTENT.bio_havn}</p>
            <p>{ABOUT_CONTENT.bio_real_estate}</p>
            <p>{ABOUT_CONTENT.current}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
            {["Assiniboine Sioux", "5th Gen Montanan", "Hospitality Veteran", "Tech Entrepreneur"].map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Life Gallery */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Life & Heritage</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: "hospitality_shot", title: "Service Excellence", color: "border-luxury-jade dark:border-luxury-gold" },
              { key: "adventure_shot", title: "Adventure & Travel", color: "border-blue-500" },
              { key: "dog_training_shot", title: "Patience & Growth", color: "border-luxury-jade dark:border-luxury-gold" }
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-square border border-gray-200 dark:border-white/10 shadow-lg">
                <EditableImage
                  imageKey={item.key}
                  defaultSrc={(SITE_IMAGES as any)[item.key]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  containerClassName="w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-white/80 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className={`text-gray-900 dark:text-white font-bold text-xl border-b-2 pb-1 ${item.color.split(' ')[0]} dark:${item.color.split(' ')[1] || item.color.split(' ')[0]}`}>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Values */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Core Philosophy</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_VALUES.map((value, idx) => {
              const Icon = value.icon!;
              return (
                <div key={idx} className="glass-panel p-8 rounded-2xl hover:border-luxury-jade dark:hover:border-luxury-gold transition-colors duration-300 group">
                  <div className="w-14 h-14 bg-luxury-jade/10 dark:bg-luxury-gold/10 rounded-xl flex items-center justify-center text-luxury-jade dark:text-luxury-gold mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="glass-panel rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-jade/5 dark:bg-luxury-gold/5 rounded-full blur-3xl -z-10"></div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Milestones</h3>
          <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
            {MILESTONES.map((milestone, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] text-luxury-jade dark:text-luxury-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform">
                  <div className="w-3 h-3 bg-current rounded-full shadow-[0_0_10px_currentColor]"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel shadow-lg hover:border-luxury-jade dark:hover:border-luxury-gold transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-900 dark:text-white">{milestone.title}</span>
                    <time className="font-mono text-xs text-luxury-jade dark:text-luxury-gold bg-luxury-jade/10 dark:bg-luxury-gold/10 px-2 py-1 rounded">{milestone.year}</time>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
