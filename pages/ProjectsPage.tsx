import React from 'react';
import { PROJECTS, CASE_STUDIES } from '../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-brand-dark py-20 border-b border-gray-800">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Ventures & Projects</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
                A portfolio of execution. From fintech platforms to healthcare data analysis, I build solutions that solve real-world problems.
            </p>
        </div>
      </section>

      {/* Active Ventures Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-10 border-l-4 border-brand-primary pl-4">Current Ventures</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {PROJECTS.map((project, idx) => (
                    <div key={idx} className="group flex flex-col md:flex-row bg-brand-dark rounded-xl overflow-hidden border border-gray-800 hover:border-brand-primary transition-all">
                        <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                             <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                             <div className="absolute top-4 left-4">
                                 <span className="bg-brand-dark/90 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm">
                                     {project.category}
                                 </span>
                             </div>
                        </div>
                        <div className="p-6 md:w-3/5 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                            </div>
                            <div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map(t => (
                                        <span key={t} className="text-xs text-brand-secondary bg-brand-secondary/10 px-2 py-1 rounded border border-brand-secondary/20">{t}</span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a href={project.link} className="inline-flex items-center text-sm font-bold text-white hover:text-brand-primary">
                                        View Project <ArrowUpRight size={16} className="ml-1" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-10 border-l-4 border-brand-secondary pl-4">Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {CASE_STUDIES.map((study, idx) => (
                    <div key={idx} className="bg-gray-900 p-8 rounded-xl border border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <ExternalLink size={64} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 relative z-10">{study.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 relative z-10 min-h-[80px]">{study.description}</p>
                        
                        <div className="bg-brand-dark/50 p-4 rounded-lg border border-gray-800 mb-6 relative z-10">
                            <span className="text-xs text-brand-secondary uppercase font-bold block mb-1">Impact</span>
                            <p className="text-white text-sm">{study.impact}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {study.tags.map(tag => (
                                <span key={tag} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">#{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </section>
    </div>
  );
};

export default ProjectsPage;