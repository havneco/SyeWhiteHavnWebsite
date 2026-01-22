
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SHORT_STORY_CONTENT, CREDENTIALS, SITE_IMAGES } from '../constants';
import EditableImage from './EditableImage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#080808] relative">
      <div className="container mx-auto px-4">

        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            {SHORT_STORY_CONTENT.header}
          </h2>

          {/* Intro */}
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-10 leading-relaxed">
            {SHORT_STORY_CONTENT.intro}
          </p>

          {/* Achievement paragraphs */}
          <div className="space-y-4 mb-10">
            {SHORT_STORY_CONTENT.achievements.map((achievement, idx) => (
              <p key={idx} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {achievement.detail}
              </p>
            ))}
          </div>

          {/* Pattern statement */}
          <p className="text-xl text-luxury-jade dark:text-luxury-gold font-medium mb-12 border-l-4 border-luxury-jade dark:border-luxury-gold pl-6">
            {SHORT_STORY_CONTENT.pattern}
          </p>

          {/* Image - centered */}
          <div className="mb-12 relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl bg-gray-100 dark:bg-white/5 max-w-2xl mx-auto">
            <EditableImage
              imageKey="about_personal"
              defaultSrc={SITE_IMAGES.about_personal}
              alt="Sye White"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Magnum Opus */}
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {SHORT_STORY_CONTENT.magnumOpus}
          </p>

          {/* Teaser */}
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            {SHORT_STORY_CONTENT.teaser}
          </p>

          {/* CTA to full story */}
          <Link
            to="/story"
            className="inline-flex items-center gap-2 text-luxury-jade dark:text-luxury-gold font-bold text-lg hover:gap-4 transition-all group"
          >
            {SHORT_STORY_CONTENT.ctaText}
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Credentials badges */}
          <div className="mt-16 pt-10 border-t border-gray-200 dark:border-white/10">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {CREDENTIALS.map(credential => (
                <span
                  key={credential}
                  className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm backdrop-blur-sm"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
