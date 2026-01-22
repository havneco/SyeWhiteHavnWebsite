
import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Copy, Check, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, CONTACT_CONTENT } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    interest: 'Real Estate Services',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = () => {
    const { firstName, lastName, interest, message } = formData;

    // Fallback if name is empty
    const nameStr = (firstName || lastName) ? `${firstName} ${lastName}`.trim() : "Visitor";

    const subject = `Website Inquiry: ${interest} - ${nameStr}`;
    const body = `Name: ${nameStr}\nInterest: ${interest}\n\nMessage:\n${message || "(No message provided)"}`;

    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Show feedback message
    setShowFeedback(true);

    // Try to open in a new tab/window - this often bypasses iframe/sandbox restrictions better than window.location
    try {
      window.open(mailtoUrl, '_blank');
    } catch (e) {
      console.error("Mailto failed", e);
      // Fallback: copy to clipboard if pop-up blocked
      copyEmail();
    }

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        interest: 'Real Estate Services',
        message: ''
      });
      setShowFeedback(false);
    }, 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-luxury-black transition-colors border-t border-gray-200 dark:border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              {CONTACT_CONTENT.header}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-lg">
              {CONTACT_CONTENT.copy}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
              {CONTACT_CONTENT.subCopy}
            </p>
            <p className="text-luxury-jade dark:text-luxury-gold mb-10 leading-relaxed text-lg italic border-l-4 border-luxury-jade dark:border-luxury-gold pl-4">
              {CONTACT_CONTENT.abundance}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group cursor-pointer" onClick={copyEmail}>
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-luxury-jade dark:text-luxury-gold border border-gray-200 dark:border-white/10 shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-lg">Email Me</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-500 dark:text-gray-400 group-hover:text-luxury-jade dark:group-hover:text-luxury-gold transition-colors">{CONTACT_INFO.email}</p>
                    <span className="text-xs bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded text-gray-500">
                      {copied ? 'Copied!' : 'Click to Copy'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-luxury-jade dark:text-luxury-gold border border-gray-200 dark:border-white/10 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-lg">Base of Operations</h4>
                  <p className="text-gray-500 dark:text-gray-400">{CONTACT_CONTENT.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-luxury-jade dark:text-luxury-gold border border-gray-200 dark:border-white/10 shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-lg">Consultation</h4>
                  <p className="text-gray-500 dark:text-gray-400">Available for commercial inquiries & tech consulting.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href={CONTACT_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:text-luxury-jade dark:hover:text-luxury-gold hover:bg-white dark:hover:bg-white/10 transition-all border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-lg">
                <Linkedin size={28} />
              </a>
              <a href={CONTACT_INFO.social.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:text-luxury-jade dark:hover:text-luxury-gold hover:bg-white dark:hover:bg-white/10 transition-all border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-lg">
                <Github size={28} />
              </a>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-3xl shadow-2xl">
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-luxury-jade dark:group-focus-within:text-luxury-gold transition-colors">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-luxury-jade dark:focus:border-luxury-gold transition-colors placeholder-gray-400"
                    placeholder="Jane"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-luxury-jade dark:group-focus-within:text-luxury-gold transition-colors">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-luxury-jade dark:focus:border-luxury-gold transition-colors placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-luxury-jade dark:group-focus-within:text-luxury-gold transition-colors">I'm interested in...</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-luxury-jade dark:focus:border-luxury-gold transition-colors appearance-none cursor-pointer"
                >
                  <option className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">Real Estate Services</option>
                  <option className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">Tech Development / AI</option>
                  <option className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">Financial Services</option>
                  <option className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">Press / Media Inquiry</option>
                  <option className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">Investor Partnership</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-luxury-jade dark:group-focus-within:text-luxury-gold transition-colors">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-luxury-jade dark:focus:border-luxury-gold transition-colors placeholder-gray-400 resize-none"
                  placeholder="How can I help you build the future?"
                ></textarea>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleSendMessage}
                    className="flex-grow bg-luxury-jade dark:bg-luxury-gold hover:opacity-90 text-white dark:text-black font-bold py-5 rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.3)] dark:shadow-[0_4px_20px_rgba(212,175,55,0.3)] tracking-wide uppercase text-sm flex items-center justify-center gap-2"
                  >
                    Initialize Contact <ArrowRight size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={`px-6 rounded-xl border transition-all flex items-center justify-center ${copied
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 dark:border-white/20 hover:border-luxury-jade dark:hover:border-luxury-gold hover:text-luxury-jade dark:hover:text-luxury-gold'
                      }`}
                    title="Copy Email Address"
                  >
                    {copied ? <Check size={24} /> : <Copy size={24} />}
                  </button>
                </div>

                {/* Feedback Text */}
                {showFeedback && (
                  <div className="text-center space-y-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 animate-pulse">
                      Opening mail app...
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Nothing happened? Use the copy button.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
