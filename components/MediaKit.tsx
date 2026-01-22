import React, { useState } from 'react';
import { Download, Copy, Check, Share2, Camera, MapPin, Award, MessageSquare } from 'lucide-react';
import StatsChart from './StatsChart';
import EditableImage from './EditableImage';
import { SITE_IMAGES, MEDIA_KIT_BIOS } from '../constants';

const MediaKit: React.FC = () => {
  const [copiedShort, setCopiedShort] = useState(false);
  const [copiedLong, setCopiedLong] = useState(false);

  const copyShortBio = () => {
    navigator.clipboard.writeText(MEDIA_KIT_BIOS.shortBio);
    setCopiedShort(true);
    setTimeout(() => setCopiedShort(false), 2000);
  };

  const copyLongBio = () => {
    navigator.clipboard.writeText(MEDIA_KIT_BIOS.longBio);
    setCopiedLong(true);
    setTimeout(() => setCopiedLong(false), 2000);
  };

  return (
    <section id="media-kit" className="py-24 bg-gray-50 dark:bg-black/20 transition-colors border-t border-gray-200 dark:border-white/5 relative">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-luxury-jade/10 dark:bg-luxury-gold/10 text-luxury-jade dark:text-luxury-gold text-xs font-bold uppercase tracking-widest mb-4 border border-luxury-jade/20 dark:border-luxury-gold/20">Official Resources</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Media Kit</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Bios, headshots, brand assets, and key metrics for press, podcasts, and speaking engagements.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">

          {/* Short Bio Section */}
          <div className="glass-panel rounded-3xl shadow-2xl overflow-hidden mb-10 p-8 md:p-14 border border-gray-200 dark:border-white/10 bg-white dark:bg-luxury-black/50">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Short Bio</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-4">For podcasts, intros, etc.</p>
                <div className="text-gray-600 dark:text-gray-300 mb-8 bg-gray-50 dark:bg-black/40 p-8 rounded-2xl border border-gray-200 dark:border-white/10 leading-relaxed text-base shadow-inner whitespace-pre-line">
                  {MEDIA_KIT_BIOS.shortBio}
                </div>
                <button
                  onClick={copyShortBio}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                    copiedShort
                      ? 'bg-green-500 text-white'
                      : 'bg-luxury-jade dark:bg-luxury-gold text-white dark:text-black hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  {copiedShort ? <Check size={18} /> : <Copy size={18} />}
                  {copiedShort ? 'Copied!' : 'Copy Short Bio'}
                </button>
              </div>

              {/* Headshots Column */}
              <div className="w-full md:w-80 flex-shrink-0">
                <h3 className="text-gray-900 dark:text-white font-bold mb-6">Approved Headshots</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/10 relative group overflow-hidden cursor-pointer hover:border-luxury-jade dark:hover:border-luxury-gold transition-colors shadow-md">
                    <EditableImage
                      imageKey="headshot_print"
                      defaultSrc={SITE_IMAGES.headshot_print}
                      alt="Print Headshot"
                      className="w-full h-full object-cover transition-opacity"
                      containerClassName="w-full h-full"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center pointer-events-none z-10 backdrop-blur-sm">
                      <Download size={24} className="text-white mb-2" />
                      <span className="text-xs text-white font-bold uppercase">Download Hi-Res</span>
                    </div>
                  </div>
                  <div className="aspect-square bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/10 relative group overflow-hidden cursor-pointer hover:border-luxury-jade dark:hover:border-luxury-gold transition-colors shadow-md">
                    <EditableImage
                      imageKey="headshot_action"
                      defaultSrc={SITE_IMAGES.headshot_action}
                      alt="Action Shot"
                      className="w-full h-full object-cover transition-opacity"
                      containerClassName="w-full h-full"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center pointer-events-none z-10 backdrop-blur-sm">
                      <Download size={24} className="text-white mb-2" />
                      <span className="text-xs text-white font-bold uppercase">Download Hi-Res</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3 text-center">Click to download full resolution</p>
              </div>
            </div>
          </div>

          {/* Long Bio Section */}
          <div className="glass-panel rounded-3xl shadow-xl overflow-hidden mb-20 p-8 md:p-10 border border-gray-200 dark:border-white/10 bg-white dark:bg-luxury-black/50">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Long Bio</h3>
            <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-6">For deeper features</p>
            <div className="text-gray-600 dark:text-gray-300 mb-6 bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-gray-200 dark:border-white/10 leading-relaxed text-sm shadow-inner whitespace-pre-line max-h-64 overflow-y-auto">
              {MEDIA_KIT_BIOS.longBio}
            </div>
            <button
              onClick={copyLongBio}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all ${
                copiedLong
                  ? 'bg-green-500 text-white'
                  : 'border border-gray-300 dark:border-white/20 hover:border-luxury-jade dark:hover:border-luxury-gold text-gray-700 dark:text-gray-300'
              }`}
            >
              {copiedLong ? <Check size={16} /> : <Copy size={16} />}
              {copiedLong ? 'Copied!' : 'Copy Long Bio'}
            </button>
          </div>

          {/* Talking Points */}
          <div className="glass-panel rounded-3xl shadow-xl overflow-hidden mb-20 p-8 md:p-10 border border-gray-200 dark:border-white/10 bg-white dark:bg-luxury-black/50">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-luxury-jade dark:text-luxury-gold" size={24} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Talking Points for Interviews</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {MEDIA_KIT_BIOS.talkingPoints.map((point, idx) => (
                <div key={idx} className="p-5 bg-gray-50 dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/10">
                  <h4 className="text-gray-900 dark:text-white font-bold mb-2">{point.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fast Facts Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <div className="glass-panel p-6 rounded-2xl hover:border-luxury-jade dark:hover:border-luxury-gold transition-colors group bg-white dark:bg-luxury-black/30">
              <MapPin className="text-luxury-jade dark:text-luxury-gold mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="text-gray-900 dark:text-white font-bold mb-1">Location</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Helena, MT (MST)</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl hover:border-luxury-jade dark:hover:border-luxury-gold transition-colors group bg-white dark:bg-luxury-black/30">
              <Award className="text-luxury-jade dark:text-luxury-gold mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="text-gray-900 dark:text-white font-bold mb-1">Title</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Builder & Founder</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl hover:border-luxury-jade dark:hover:border-luxury-gold transition-colors group bg-white dark:bg-luxury-black/30">
              <Share2 className="text-luxury-jade dark:text-luxury-gold mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="text-gray-900 dark:text-white font-bold mb-1">Social</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Active on YouTube & GitHub</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl hover:border-luxury-jade dark:hover:border-luxury-gold transition-colors group bg-white dark:bg-luxury-black/30">
              <Camera className="text-luxury-jade dark:text-luxury-gold mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="text-gray-900 dark:text-white font-bold mb-1">Interviews</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Available for Podcasts</p>
            </div>
          </div>

          {/* Stats & Metrics */}
          <div className="glass-panel p-10 rounded-3xl shadow-xl bg-white dark:bg-luxury-black/50 border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">Audience & Reach Metrics</h3>
            <div className="h-64 md:h-80 w-full">
              <StatsChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaKit;
