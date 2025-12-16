
import React, { useState } from 'react';
import { X, Send, Rocket, Sparkles, CheckCircle } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface PitchModalProps {
    onClose: () => void;
}

const PitchModal: React.FC<PitchModalProps> = ({ onClose }) => {
    const [idea, setIdea] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const wordCount = idea.trim().split(/\s+/).filter(w => w.length > 0).length;
    const isOverLimit = wordCount > 42;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!idea.trim() || !email.trim() || isOverLimit || loading) return;

        setLoading(true);
        try {
            await addDoc(collection(db, 'pitches'), {
                idea: idea.trim(),
                email: email.trim(),
                wordCount,
                status: 'new',
                timestamp: serverTimestamp()
            });
            setSuccess(true);
            setTimeout(() => {
                onClose();
                // Reset form in case reopen
                setSuccess(false);
                setIdea('');
            }, 3000);

        } catch (error) {
            console.error("Pitch failed", error);
            alert("Failed to submit pitch. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors z-20"
                >
                    <X size={24} />
                </button>

                {success ? (
                    <div className="p-12 text-center">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                            <CheckCircle size={40} className="text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Pitch Received!</h2>
                        <p className="text-zinc-400">Good luck in the monthly PWA lottery.</p>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="p-8 pb-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="flex items-center gap-3 mb-2 relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-luxury-gold flex items-center justify-center">
                                    <Rocket size={20} className="text-black" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Pitch 42</h2>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                                Got a problem or a tool idea? Describe it in <strong>42 words or less.</strong>
                                <br />
                                <span className="text-luxury-gold">1 Winner/Month gets a Free PWA Prototype.</span>
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-8 pt-2 space-y-5">

                            {/* Idea Input */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-xs">
                                    <label className="text-zinc-400 uppercase font-bold tracking-wider">Your Idea</label>
                                    <span className={`${isOverLimit ? 'text-red-500 font-bold' : 'text-zinc-500'}`}>
                                        {wordCount} / 42 words
                                    </span>
                                </div>
                                <textarea
                                    value={idea}
                                    onChange={(e) => setIdea(e.target.value)}
                                    className={`w-full h-32 bg-black border rounded-xl p-4 text-white placeholder-zinc-700 outline-none transition-all resize-none ${isOverLimit
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'border-zinc-800 focus:border-luxury-gold'
                                        }`}
                                    placeholder="I need a dashboard that tracks..."
                                />
                                {isOverLimit && <p className="text-xs text-red-500">Please condense your pitch.</p>}
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Contact Email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@email.com"
                                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-white focus:border-luxury-gold outline-none"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading || isOverLimit || wordCount === 0 || !email}
                                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
                            >
                                {loading ? 'Submitting...' : (
                                    <>
                                        <span>Launch Pitch</span>
                                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-[10px] text-zinc-600">
                                By submitting, you agree to being contacted for a bid if selected.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default PitchModal;
