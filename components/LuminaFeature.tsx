import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { LUMINA_FEATURE } from '../constants';

const LuminaFeature: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-luxury-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Glass Card */}
          <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-jade/10 dark:bg-luxury-gold/10 rounded-full blur-3xl -z-10"></div>

            <div className="flex flex-col md:flex-row gap-8 items-start">

              {/* Icon */}
              <div className="w-20 h-20 bg-luxury-jade/10 dark:bg-luxury-gold/10 rounded-2xl flex items-center justify-center text-luxury-jade dark:text-luxury-gold flex-shrink-0">
                <Eye size={40} />
              </div>

              {/* Content */}
              <div className="flex-grow">

                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {LUMINA_FEATURE.header}
                </h2>

                {/* Story - preserving line breaks */}
                <div className="space-y-4 mb-8">
                  {LUMINA_FEATURE.story.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={LUMINA_FEATURE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-luxury-jade dark:bg-luxury-gold text-white dark:text-black font-bold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(5,150,105,0.4)] dark:hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
                >
                  {LUMINA_FEATURE.cta}
                  <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LuminaFeature;
