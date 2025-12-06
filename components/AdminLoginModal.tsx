import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { X, Lock, Unlock, Mail, Key, Sparkles, Loader2 } from 'lucide-react';

const AdminLoginModal: React.FC = () => {
  const { isLoginOpen, closeLogin, login, isAdmin, logout, isFirebaseReady, generateAllAssets, generationStatus } = useAdmin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isLoginOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    const success = await login(email, password);
    
    setIsSubmitting(false);
    if (success) {
      setEmail('');
      setPassword('');
      setError('');
    } else {
      setError('Login failed.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="glass-panel w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative border border-white/10">
        <button 
          onClick={closeLogin}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-10">
          <div className="flex justify-center mb-8">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isAdmin ? 'bg-green-500/10 text-green-500' : 'bg-luxury-gold/10 text-luxury-gold'}`}>
              {isAdmin ? <Unlock size={32} /> : <Lock size={32} />}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white text-center mb-2">
            {isAdmin ? 'Admin Console' : 'Admin Access'}
          </h2>
          
          {isAdmin ? (
            <div className="space-y-6">
               <div className="bg-white/5 p-4 rounded-lg text-sm text-gray-300 border border-white/5">
                  <p className="mb-2 font-bold text-white">Status: Connected</p>
                  <p>{isFirebaseReady ? "Changes saved to Firebase Cloud." : "Changes saved to Local Browser (Demo Mode)."}</p>
               </div>

               {/* AI Generation Control */}
               <div className="border-t border-white/10 pt-6">
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-luxury-gold" /> 
                    AI Asset Generator
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">
                    Use Gemini 2.5 Flash Image ("Nano Banana") to generate professional photos.
                  </p>
                  
                  {generationStatus ? (
                    <div className="bg-luxury-gold/10 border border-luxury-gold/30 p-4 rounded-lg flex items-center gap-3 text-luxury-gold animate-pulse">
                        <Loader2 className="animate-spin" size={20} />
                        <span className="font-bold text-sm">{generationStatus}</span>
                    </div>
                  ) : (
                    <button 
                      onClick={generateAllAssets}
                      className="w-full bg-gradient-to-r from-luxury-gold to-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles size={18} /> Auto-Generate All Assets
                    </button>
                  )}
               </div>

               <button 
                onClick={() => { logout(); closeLogin(); }}
                className="w-full bg-white/10 text-gray-300 py-3 rounded-lg font-bold hover:bg-white/20 hover:text-white transition-all"
               >
                 Logout
               </button>
            </div>
          ) : (
            <>
              <p className="text-gray-400 text-center mb-8 text-sm">
                {!isFirebaseReady ? 'Firebase not configured. Logging in enables Guest Admin Mode (Local Storage).' : 'Log in to manage site content.'}
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <Mail className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-luxury-gold transition-colors" size={18} />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@syewhite.com"
                    className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder-gray-600"
                  />
                </div>
                <div className="relative group">
                  <Key className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-luxury-gold transition-colors" size={18} />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder-gray-600"
                  />
                </div>
                
                {error && <p className="text-red-400 text-sm mt-2 ml-1">{error}</p>}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-luxury-gold hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition-colors shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Verifying...' : 'Enter Admin Mode'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLoginModal;