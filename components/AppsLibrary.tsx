import React, { useState } from 'react';
import { ExternalLink, Search, Code, Terminal, Database, Activity, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { APP_LIBRARY, CONTACT_INFO } from '../constants';
import { AppTool } from '../types';
import RequestAccessModal from './RequestAccessModal';

const AppsLibrary: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedApp, setSelectedApp] = useState<AppTool | null>(null);
  const itemsPerPage = 12;

  const categories = ['All', 'Deployed', 'Real Estate', 'Fintech', 'AI Utility', 'Hospitality', 'HealthTech', 'Other'];

  const filteredApps = APP_LIBRARY.filter(app => {
    // Custom logic for 'Deployed' filter (shows Live and Beta apps)
    if (filter === 'Deployed') {
      const isDeployedStatus = app.status === 'Live' || app.status === 'Beta';
      const matchesSearch = app.name.toLowerCase().includes(search.toLowerCase()) ||
        app.description.toLowerCase().includes(search.toLowerCase());
      return isDeployedStatus && matchesSearch;
    }

    const matchesCategory = filter === 'All' || app.category === filter;
    const matchesSearch = app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredApps.length / itemsPerPage);
  const paginatedApps = filteredApps.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Smooth scroll to top of apps section
    const element = document.getElementById('apps');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to page 1 on search
  };

  const getStatusColor = (status: AppTool['status']) => {
    switch (status) {
      case 'Live': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Beta': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Internal': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'Proprietary': return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Real Estate': return <Database size={16} />;
      case 'Fintech': return <Activity size={16} />;
      case 'AI Utility': return <Terminal size={16} />;
      default: return <Code size={16} />;
    }
  };

  return (
    <section id="apps" className="py-24 bg-white dark:bg-luxury-black transition-colors relative">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-luxury-jade/10 dark:bg-luxury-gold/10 text-luxury-jade dark:text-luxury-gold text-xs font-bold uppercase tracking-widest mb-4">Innovation Library</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tools & Applications</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              A curated collection of the tools, prototypes, and production apps I've built to solve real-world problems.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-luxury-jade dark:group-focus-within:text-luxury-gold transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search tools..."
                value={search}
                onChange={handleSearchChange}
                className="w-full md:w-64 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full pl-12 pr-6 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-luxury-jade dark:focus:border-luxury-gold transition-all"
              />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap border ${filter === cat
                ? 'bg-luxury-jade dark:bg-luxury-gold text-white dark:text-black border-transparent shadow-lg'
                : 'bg-transparent border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-luxury-jade dark:hover:border-luxury-gold hover:text-luxury-jade dark:hover:text-luxury-gold'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedApps.map((app) => {
            // Logic to determine button type
            const hasLink = app.url && app.url !== '#' && app.url !== '';

            return (
              <div key={app.id} className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:-translate-y-1 hover:border-luxury-jade dark:hover:border-luxury-gold transition-all duration-300 group relative overflow-hidden">
                {/* Decorative Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-jade/5 to-transparent dark:from-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl text-luxury-jade dark:text-luxury-gold">
                    {getCategoryIcon(app.category)}
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(app.status)}`}>
                    {app.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-luxury-jade dark:group-hover:text-luxury-gold transition-colors relative z-10">{app.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed relative z-10 line-clamp-4">
                  {app.description}
                </p>

                {hasLink ? (
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-sm font-bold text-gray-900 dark:text-white hover:text-luxury-jade dark:hover:text-luxury-gold transition-colors relative z-10 px-3 py-2 -ml-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                  >
                    Launch Tool <ExternalLink size={14} className="ml-2" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedApp(app)}
                    className="mt-auto inline-flex items-center text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-luxury-jade dark:hover:text-luxury-gold transition-colors relative z-10 px-3 py-2 -ml-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-left"
                  >
                    Request Access <Lock size={14} className="ml-2" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {filteredApps.length === 0 && (
          <div className="text-center py-20 bg-gray-50 dark:bg-white/5 rounded-2xl border border-dashed border-gray-300 dark:border-white/10">
            <p className="text-gray-500 dark:text-gray-400">No tools found matching your search.</p>
            <button onClick={() => { setFilter('All'); setSearch('') }} className="text-luxury-jade dark:text-luxury-gold font-bold mt-2">Clear Filters</button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 rounded-full transition-all ${currentPage === 1
                ? 'text-gray-300 dark:text-gray-700 cursor-not-allowed'
                : 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-luxury-jade dark:hover:bg-luxury-gold hover:text-white dark:hover:text-black'
                }`}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                Page {currentPage} of {totalPages}
              </span>
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full transition-all ${currentPage === totalPages
                ? 'text-gray-300 dark:text-gray-700 cursor-not-allowed'
                : 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-luxury-jade dark:hover:bg-luxury-gold hover:text-white dark:hover:text-black'
                }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        <RequestAccessModal
          isOpen={!!selectedApp}
          appName={selectedApp?.name || ''}
          onClose={() => setSelectedApp(null)}
        />

      </div>
    </section >
  );
};

export default AppsLibrary;