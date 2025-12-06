

import React from 'react';
import { ABOUT_CONTENT, MILESTONES, BRAND_VALUES, SITE_IMAGES } from '../constants';
import { Link } from 'react-router-dom';
import EditableImage from '../components/EditableImage';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-800/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My Story</h1>
            <p className="text-xl text-brand-primary max-w-3xl">
                AI Pioneer & Ecosystem Architect from Montana.
            </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Bio Column */}
            <div className="lg:col-span-2 space-y-8 text-gray-300 leading-relaxed text-lg">
                <p className="font-semibold text-white text-xl border-l-4 border-brand-secondary pl-6 italic">
                    {ABOUT_CONTENT.hook}
                </p>
                <p>{ABOUT_CONTENT.bio}</p>
                <p>{ABOUT_CONTENT.bio_havn}</p>
                <p>{ABOUT_CONTENT.bio_real_estate}</p>
                <p>{ABOUT_CONTENT.current}</p>

                <div className="pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">A Vision for the Future</h3>
                    <p>
                        Whether you're looking for innovative real estate solutions, technical partnership on AI applications, or insight into where fintech meets real estate — I bring hands-on execution, technical expertise, and genuine transparency to every project.
                    </p>
                </div>
            </div>

            {/* Sidebar / Info */}
            <div className="lg:col-span-1 space-y-8">
                {/* Personal / Dog Photo */}
                <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-gray-800">
                    <EditableImage 
                        imageKey="about_personal"
                        defaultSrc={SITE_IMAGES.about_personal}
                        alt="Sye White and Companion"
                        className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-12 pointer-events-none">
                        <p className="text-white font-bold">Grounded in Reality</p>
                        <p className="text-xs text-gray-300">Explaining complex AI concepts is easier with a good hiking companion.</p>
                    </div>
                </div>

                <div className="bg-brand-dark p-6 rounded-xl border border-gray-800">
                    <h3 className="text-white font-bold mb-4">Personal Details</h3>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li>
                            <span className="block text-gray-500 uppercase text-xs">Name</span>
                            <span className="text-white font-medium">Sye White</span>
                        </li>
                        <li>
                            <span className="block text-gray-500 uppercase text-xs">Heritage</span>
                            <span className="text-white font-medium">Native American Assiniboine Sioux (Ft Belknap)</span>
                        </li>
                        <li>
                            <span className="block text-gray-500 uppercase text-xs">Roots</span>
                            <span className="text-white font-medium">5th Gen Montana Homesteader (Ryegate)</span>
                        </li>
                        <li>
                            <span className="block text-gray-500 uppercase text-xs">Location</span>
                            <span className="text-white font-medium">Helena, Montana</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life Gallery */}
      <section className="py-20 bg-brand-dark border-y border-gray-800">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Life & Heritage</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {/* Hospitality */}
                <div className="group relative rounded-xl overflow-hidden aspect-square border border-gray-800">
                     <EditableImage 
                        imageKey="hospitality_shot"
                        defaultSrc={SITE_IMAGES.hospitality_shot}
                        alt="Service Excellence"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold border-b-2 border-brand-primary pb-1">Service Excellence</span>
                    </div>
                </div>
                {/* Adventure */}
                <div className="group relative rounded-xl overflow-hidden aspect-square border border-gray-800">
                     <EditableImage 
                        imageKey="adventure_shot"
                        defaultSrc={SITE_IMAGES.adventure_shot}
                        alt="Adventure & Travel"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold border-b-2 border-brand-secondary pb-1">Adventure & Travel</span>
                    </div>
                </div>
                {/* Dog Training */}
                <div className="group relative rounded-xl overflow-hidden aspect-square border border-gray-800">
                     <EditableImage 
                        imageKey="dog_training_shot"
                        defaultSrc={SITE_IMAGES.dog_training_shot}
                        alt="Patience & Growth"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold border-b-2 border-brand-primary pb-1">Patience & Growth</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Brand Values & Philosophy</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {BRAND_VALUES.map((value, idx) => {
                    const Icon = value.icon!;
                    return (
                        <div key={idx} className="bg-brand-dark p-6 rounded-xl border border-gray-800 hover:border-brand-primary transition-colors">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-brand-secondary mb-4">
                                <Icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                            <p className="text-gray-400 text-sm">{value.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Milestones</h2>
            <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                 {MILESTONES.map((milestone, idx) => (
                   <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-brand-dark text-brand-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
                     </div>
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-gray-900 border border-gray-800 shadow-lg hover:border-brand-secondary transition-all">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-white">{milestone.title}</span>
                          <time className="font-mono text-xs text-brand-secondary bg-brand-secondary/10 px-2 py-1 rounded">{milestone.year}</time>
                        </div>
                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                     </div>
                   </div>
                 ))}
            </div>
        </div>
      </section>
      
      <section className="py-20 bg-brand-primary text-white text-center">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-teal-100">
                  From commercial real estate to AI development, I bring a multi-dimensional perspective to every challenge.
              </p>
              <Link to="/contact" className="bg-white text-brand-primary px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors">
                  Get in Touch
              </Link>
          </div>
      </section>
    </div>
  );
};

export default AboutPage;
