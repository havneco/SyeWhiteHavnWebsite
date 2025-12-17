import React, { useState, useEffect } from 'react';
import { X, Save, User, Briefcase, Hash } from 'lucide-react';
import { db, auth } from '../firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

interface PersonalizationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PersonalizationModal: React.FC<PersonalizationModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [interests, setInterests] = useState<string[]>([]);
    const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

    const availableInterests = ['AI & Tech', 'Real Estate', 'Wealth Building', 'Sovereignty', 'Health/Biohacking'];

    useEffect(() => {
        if (!isOpen || !auth?.currentUser) return;

        // Load existing profile
        const loadProfile = async () => {
            const userRef = doc(db, 'users', auth.currentUser!.uid, 'settings', 'profile');
            const snap = await getDoc(userRef);
            if (snap.exists()) {
                const data = snap.data();
                setName(data.displayName || '');
                setRole(data.role || '');
                setInterests(data.interests || []);
            } else {
                // Pre-fill from Google Auth if available
                setName(auth.currentUser!.displayName || '');
            }
        };
        loadProfile();
    }, [isOpen]);

    const toggleInterest = (interest: string) => {
        if (interests.includes(interest)) {
            setInterests(prev => prev.filter(i => i !== interest));
        } else {
            setInterests(prev => [...prev, interest]);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!auth?.currentUser) return;

        setStatus('saving');
        try {
            const userRef = doc(db, 'users', auth.currentUser.uid, 'settings', 'profile');
            await setDoc(userRef, {
                displayName: name,
                role,
                interests,
                updatedAt: serverTimestamp()
            }, { merge: true });

            setStatus('saved');
            setTimeout(() => {
                setStatus('idle');
                onClose();
            }, 1000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in fade-in zoom-in duration-200">

                <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-black dark:hover:text-white">
                    <X size={20} />
                </button>

                <div className="mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-xl flex items-center justify-center text-luxury-gold">
                        <User size={20} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Personalization</h2>
                        <p className="text-sm text-zinc-500">Teach Sage about you.</p>
                    </div>
                </div>

                <form onSubmit={handleSave} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Display Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full bg-gray-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg pl-10 pr-3 py-3 text-gray-900 dark:text-white focus:border-luxury-gold outline-none"
                                placeholder="How should Sage call you?"
                            />
                            <User size={16} className="absolute left-3 top-3.5 text-zinc-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Role / Title</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={role}
                                onChange={e => setRole(e.target.value)}
                                className="w-full bg-gray-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg pl-10 pr-3 py-3 text-gray-900 dark:text-white focus:border-luxury-gold outline-none"
                                placeholder="e.g. Investor, Developer, Founder"
                            />
                            <Briefcase size={16} className="absolute left-3 top-3.5 text-zinc-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Interests</label>
                        <div className="flex flex-wrap gap-2">
                            {availableInterests.map(interest => (
                                <button
                                    key={interest}
                                    type="button"
                                    onClick={() => toggleInterest(interest)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${interests.includes(interest)
                                            ? 'bg-luxury-gold text-black border-luxury-gold'
                                            : 'bg-transparent text-zinc-500 border-zinc-300 dark:border-zinc-700 hover:border-luxury-gold'
                                        }`}
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={status === 'saving'}
                            className="w-full bg-luxury-jade text-white font-bold py-3 rounded-lg hover:bg-luxury-jadeDim transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {status === 'saving' ? 'Saving...' : (status === 'saved' ? 'Saved!' : 'Save Profile')}
                            {status !== 'saving' && status !== 'saved' && <Save size={16} />}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalizationModal;
