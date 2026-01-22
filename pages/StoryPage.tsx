import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { STORY_PAGE_CONTENT } from '../constants';

const StoryPage: React.FC = () => {
  const scrollToContact = () => {
    // Navigate to home with contact anchor
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-luxury-black pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-luxury-jade dark:hover:text-luxury-gold transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          {/* Header */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {STORY_PAGE_CONTENT.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {STORY_PAGE_CONTENT.subhead}
            </p>
          </header>

          {/* Story Sections */}
          <div className="space-y-16">
            {STORY_PAGE_CONTENT.sections.map((section, idx) => (
              <section key={idx}>
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-sm font-mono text-luxury-jade dark:text-luxury-gold bg-luxury-jade/10 dark:bg-luxury-gold/10 px-3 py-1 rounded">
                    Part {section.part}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>

                {/* Section Content */}
                <div className="space-y-6">
                  {section.content.map((paragraph, pIdx) => {
                    // Handle markdown-style bold (**text**)
                    if (paragraph.startsWith('**')) {
                      const parts = paragraph.split('**');
                      return (
                        <p key={pIdx} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                          <strong className="text-gray-900 dark:text-white">{parts[1]}</strong>
                          {parts[2]}
                        </p>
                      );
                    }
                    return (
                      <p key={pIdx} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Closing */}
          <div className="mt-20 pt-12 border-t border-gray-200 dark:border-white/10">
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-8 italic">
              {STORY_PAGE_CONTENT.closingLine}
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-jade dark:bg-luxury-gold text-white dark:text-black font-bold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(5,150,105,0.4)] dark:hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
            >
              Contact
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StoryPage;
