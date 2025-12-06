
import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS, SITE_IMAGES, CASE_STUDIES } from '../constants';
import EditableImage from './EditableImage';
import HavnCarousel from './HavnCarousel';

const Projects: React.FC = () => {
  // Filter out the "Havn" project from the grid since it is now featured in the Carousel
  const gridProjects = PROJECTS.filter(p => !p.title.includes('Havn'));

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#080808] border-t border-gray-200 dark:border-white/5 transition-colors">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Ventures & Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">Where execution meets innovation. A portfolio of active fintech, proptech, and healthcare solutions.</p>
          </div>
          <a href="https://github.com/syewhite" target="_blank" rel="noreferrer" className="flex items-center text-luxury-jade dark:text-luxury-gold hover:opacity-80 transition-colors font-bold uppercase tracking-wider text-sm">
            View Github <ExternalLink size={16} className="ml-2" />
          </a>
        </div>

        {/* FEATURED: HAVN 3D CAROUSEL */}
        <div className="mb-32">
            <HavnCarousel />
        </div>

        <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Active Ventures</h3>
            <div className="h-px flex-grow bg-gray-200 dark:bg-white/10"></div>
        </div>

        {/* Remaining Ventures Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {gridProjects.map((project, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row bg-white dark:bg-[#0f0f0f] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-luxury-jade dark:hover:border-luxury-gold transition-all duration-300 shadow-xl">
              {/* Image Area */}
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-all z-10 pointer-events-none"></div>
                <EditableImage 
                  imageKey={`project_${idx + 1}`} // Offset index because project_0 is Havn
                  defaultSrc={(SITE_IMAGES as any)[`project_${idx + 1}`] || project.image || `https://picsum.photos/800/600?random=${idx}`}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  containerClassName="w-full h-full"
                />
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <span className="px-3 py-1 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 text-xs font-bold rounded-full uppercase tracking-wider shadow-lg backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-luxury-jade dark:group-hover:text-luxury-gold transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded border border-gray-200 dark:border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Case Studies</h3>
            <div className="h-px flex-grow bg-gray-200 dark:bg-white/10"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, idx) => (
                <div key={idx} className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform">
                    <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 transition-opacity">
                        <ExternalLink size={100} className="text-gray-900 dark:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">{study.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 relative z-10 min-h-[80px]">{study.description}</p>
                    
                    <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5 mb-6 relative z-10">
                        <span className="text-xs text-luxury-jade dark:text-luxury-gold uppercase font-bold block mb-1">Impact</span>
                        <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">{study.impact}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 relative z-10">
                        {study.tags.map(tag => (
                            <span key={tag} className="text-xs text-gray-500 dark:text-gray-500 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-full">#{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
