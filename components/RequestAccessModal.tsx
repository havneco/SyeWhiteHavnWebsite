import React, { useState } from 'react';
import { X, Send, Lock } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

interface RequestAccessModalProps {
    appName: string;
    isOpen: boolean;
    onClose: () => void;
}

const RequestAccessModal: React.FC<RequestAccessModalProps> = ({ appName, isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            if (!db) throw new Error("Firebase not initialized");

            await addDoc(collection(db, 'access_requests'), {
                name,
                email,
                reason,
                appName,
                status: 'pending',
                timestamp: serverTimestamp()
            });

            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setName('');
                setEmail('');
                setReason('');
            }, 2000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in fade-in zoom-in duration-200">

                <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white">
                    <X size={20} />
                </button>

                <div className="mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-xl flex items-center justify-center text-luxury-gold">
                        <Lock size={20} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white">Request Access</h2>
                        <p className="text-sm text-zinc-400">to {appName}</p>
                    </div>
                </div>

                {status === 'success' ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                            <Send size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Request Sent</h3>
                        <p className="text-zinc-400">Sye will review your request shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Your Name</label>
                            <input
                                required
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-luxury-gold outline-none"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Email Address</label>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-luxury-gold outline-none"
                                placeholder="john@company.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Why do you need access?</label>
                            <textarea
                                required
                                value={reason}
                                onChange={e => setReason(e.target.value)}
                                className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-luxury-gold outline-none h-24 resize-none"
                                placeholder="I'm interested in testing the logistics features..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full bg-luxury-gold text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === 'sending' ? 'Sending...' : 'Submit Request'}
                        </button>
                        {status === 'error' && (
                            <p className="text-xs text-red-400 text-center">Failed to send. Please try again.</p>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default RequestAccessModal;
