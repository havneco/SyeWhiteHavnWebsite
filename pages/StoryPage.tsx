import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const StoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-luxury-black pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-luxury-jade dark:hover:text-luxury-gold transition-colors mb-16 group text-sm"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back
          </Link>

          {/* Essay Content */}
          <article className="prose-custom">

            <p className="text-gray-500 dark:text-gray-500 mb-12 text-sm">
              You clicked through, so here it is.
            </p>

            {/* Section 1 */}
            <div className="space-y-6 mb-16">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a 5th generation Montana homesteader. Assiniboine Sioux through Fort Belknap. That sounds stable, rooted. It wasn't.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My childhood was unconventional. Trailer parks, constant moves, adults making choices that didn't prioritize me. I won't list it all here—some of it I'm still piecing together—but the short version is: I learned early that no one was coming to save me.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I was in foster care from 14 to 17. Ate lunch alone in the music room teaching myself piano. Barely graduated high school—teachers let me pass out of sympathy, except physics where I had an A. Something about how systems work made sense when nothing else did.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I went to college, got a 0.7 GPA, dropped out. Worked in a factory to pay off the debt. Then I went back to Montana and started over.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-6 mb-16">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Here's the pattern that's defined my life:
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I studied wine, worked alongside Michelin-starred chefs, learned from master sommeliers until I could hold my own. Earned Wine Spectator awards three years running. Helped open restaurants. Became the guy people trusted with their wine programs.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Got my real estate license, found mentors, closed $5M in deals in 2025 working part-time. Learned to read deals, structure transactions, see what others miss.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Spent 8-14 hours a day inside development environments until I could build anything I could imagine. 100+ applications in 18 months.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                The pattern is always the same: no credentials, no connections, no safety net. So I figure it out.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-6 mb-16">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I build sovereignty—systems that give people clarity, control, and protection over what matters most.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Why sovereignty? Because I know what it feels like to have none.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My father was a complicated man—people said he was an angel when he was sober and a devil when he wasn't. He was murdered in 2019. I felt relief and regret in equal measure.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My mom did her best with what she had. She taught me to be kind to everyone because you don't know what they're going through. I'm still unlearning the belief that survival is all I deserve.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I tell you this not for sympathy. I tell you because it explains everything I build.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                The kid who learned to read rooms to survive is the same person who now builds systems to help others thrive. The pattern recognition that kept me alive is the same thing that lets me see what a family office actually needs, what an operator is missing, what a problem actually requires.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-6 mb-16">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm 32. I operate as a solo founder amplified by AI.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My magnum opus is Havn—an ecosystem built on the belief that health drives wealth drives impact drives the ability to actually enjoy your life. Four pillars, one flywheel.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm also building Aegis—sovereign AI infrastructure for family offices who want real control over their data and decisions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                And I'm building whatever else needs building. Lumina started because my mom is going blind and I had four hours to do something about it.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I don't know exactly where this goes. But I know the pattern: figure it out, then help others do the same.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-6 mb-16">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                What I actually want is simple: to help people enjoy a life well lived. To build systems that give others the clarity, control, and protection I never had. To prove that late bloomers aren't behind—they're just on a different timeline.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To be trusted by people who have something worth protecting. To give in abundance, in fair exchange, with everyone who gives me a chance.
              </p>
            </div>

            {/* Closing */}
            <div className="pt-8 border-t border-gray-100 dark:border-white/5">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                If you read this far, you probably see something familiar.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 text-luxury-jade dark:text-luxury-gold font-medium hover:gap-3 transition-all group"
              >
                Let's talk
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </article>

        </div>
      </div>
    </div>
  );
};

export default StoryPage;
