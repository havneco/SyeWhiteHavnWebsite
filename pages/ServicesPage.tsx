import React from 'react';
import { SERVICES, TECH_STACK } from '../constants';
import { Link } from 'react-router-dom';
import StatsChart from '../components/StatsChart';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Expertise & Capabilities</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                My work exists at the convergence of three distinct worlds: Real Estate, Technology, and Finance.
            </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
                {SERVICES.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                        <div key={idx} className="bg-brand-dark p-8 rounded-xl border border-gray-800 shadow-xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                                <Icon size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                            <p className="text-gray-400 mb-8 flex-grow">{service.description}</p>
                            
                            <div className="space-y-3">
                                <h4 className="text-sm font-bold text-brand-secondary uppercase tracking-wider">Key Capabilities</h4>
                                <ul className="space-y-2">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start text-sm text-gray-300">
                                            <span className="mr-2 text-brand-primary">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>

      <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-white mb-6">Technical Stack</h2>
                      <p className="text-gray-400 mb-8">
                          I don't just advise on technology; I build with it. My hands-on experience spans the entire development lifecycle, from rapid no-code prototyping to complex AI model integration.
                      </p>
                      <div className="flex flex-wrap gap-3">
                          {TECH_STACK.map((tech) => (
                              <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-700 text-gray-300 rounded font-mono text-sm hover:border-brand-primary hover:text-white transition-colors cursor-default">
                                  {tech}
                              </span>
                          ))}
                      </div>
                  </div>
                  <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                      <StatsChart />
                  </div>
              </div>
          </div>
      </section>

      <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold text-white mb-8">Who I Can Help</h2>
             <div className="grid md:grid-cols-3 gap-6 text-left">
                 <div className="p-6 bg-brand-dark rounded-lg border border-gray-800">
                     <h3 className="text-brand-secondary font-bold text-lg mb-2">Real Estate Investors</h3>
                     <p className="text-gray-400 text-sm">Commercial property investors and international luxury seekers looking for data-driven market analysis.</p>
                 </div>
                 <div className="p-6 bg-brand-dark rounded-lg border border-gray-800">
                     <h3 className="text-brand-primary font-bold text-lg mb-2">Tech Startups</h3>
                     <p className="text-gray-400 text-sm">Founders needing rapid prototyping, AI integration strategies, or technical co-founder expertise.</p>
                 </div>
                 <div className="p-6 bg-brand-dark rounded-lg border border-gray-800">
                     <h3 className="text-brand-accent font-bold text-lg mb-2">Financial Seekers</h3>
                     <p className="text-gray-400 text-sm">Individuals and families seeking transparent financial literacy education and wealth management tools.</p>
                 </div>
             </div>
             <div className="mt-12">
                 <Link to="/contact" className="px-8 py-3 bg-brand-secondary text-brand-dark font-bold rounded hover:bg-amber-400 transition-colors">
                     Schedule a Consultation
                 </Link>
             </div>
          </div>
      </section>
    </div>
  );
};

export default ServicesPage;