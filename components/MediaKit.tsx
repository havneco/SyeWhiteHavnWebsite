import React from 'react';
import { Download, Copy, Share2, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const MediaKit: React.FC = () => {
  return (
    <section id="media-kit" className="py-24 bg-luxury-jade/5 dark:bg-luxury-gold/5 border-t border-gray-200 dark:border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-panel p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          
          {/* Decorative Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-luxury-jade/20 dark:bg-luxury-gold/20 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-luxury-jade/10 dark:bg-luxury-gold/10 text-luxury-jade dark:text-luxury-gold text-xs font-bold uppercase tracking-widest mb-4">Press Resources</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Official Media Kit</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-8 text-lg">
                Access official bio, high-resolution headshots, logos, and brand assets for press and speaking engagements.
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <Link to="/media-kit" className="flex items-center justify-center gap-2 bg-luxury-jade dark:bg-luxury-gold text-white dark:text-black px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                   <Download size={20} /> View Full Kit
                 </Link>
              </div>
            </div>

            <div className="w-full md:w-auto bg-white/50 dark:bg-black/50 p-8 rounded-2xl border border-gray-200 dark:border-white/10 backdrop-blur-md">
               <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-6">Quick Stats for Press</h3>
               <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                 <li className="flex justify-between w-64 border-b border-gray-200 dark:border-white/5 pb-2">
                   <span>Location</span>
                   <span className="text-luxury-jade dark:text-luxury-gold font-bold">Helena, MT</span>
                 </li>
                 <li className="flex justify-between w-64 border-b border-gray-200 dark:border-white/5 pb-2">
                   <span>Apps Built</span>
                   <span className="text-luxury-jade dark:text-luxury-gold font-bold">100+</span>
                 </li>
                 <li className="flex justify-between w-64 border-b border-gray-200 dark:border-white/5 pb-2">
                   <span>Real Estate</span>
                   <span className="text-luxury-jade dark:text-luxury-gold font-bold">Licensed Commercial</span>
                 </li>
                 <li className="flex justify-between w-64">
                   <span>Heritage</span>
                   <span className="text-luxury-jade dark:text-luxury-gold font-bold">Assiniboine Sioux</span>
                 </li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MediaKit;