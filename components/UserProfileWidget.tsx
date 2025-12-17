
import React, { useState, useEffect } from 'react';
import { User, LogIn, LogOut, MessageSquare, Rocket, Settings, Lock } from 'lucide-react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

import PersonalizationModal from './PersonalizationModal';
import HistoryModal from './HistoryModal';

const GoogleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const UserProfileWidget: React.FC = () => {
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<'none' | 'history' | 'profile'>('none');

    useEffect(() => {
        if (!auth) {
            console.error("Firebase Auth not initialized in UserProfileWidget");
            return;
        }
        const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        if (!auth) {
            console.error("Cannot login: Auth not initialized");
            return;
        }
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (e) {
            console.error("Login failed", e);
        }
    };

    const handleLogout = async () => {
        if (!auth) return;
        await signOut(auth);
        setIsOpen(false);
    };

    return (
        <>
            <div className="fixed bottom-6 left-6 z-[100]">
                <div className="relative">
                    {/* Trigger Button */}
                    <button
                        onClick={() => user ? setIsOpen(!isOpen) : handleLogin()}
                        className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center justify-center overflow-hidden hover:scale-105 transition-transform group"
                    >
                        {user ? (
                            user.photoURL ? (
                                <img src={user.photoURL} alt={user.displayName || "User"} className="w-full h-full object-cover" />
                            ) : (
                                <div className="bg-luxury-gold text-black font-bold w-full h-full flex items-center justify-center">
                                    {user.displayName?.charAt(0) || "U"}
                                </div>
                            )
                        ) : (
                            <div className="p-2 hover:scale-110 transition-transform">
                                <GoogleIcon />
                            </div>
                        )}
                    </button>

                    {/* Popover Menu */}
                    {isOpen && user && (
                        <div className="absolute bottom-16 left-0 w-64 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-2 overflow-hidden animate-fade-in-up">
                            {/* Header */}
                            <div className="p-3 border-b border-zinc-100 dark:border-zinc-800 mb-2">
                                <p className="font-bold text-sm text-gray-900 dark:text-white truncate">{user.displayName}</p>
                                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                            </div>

                            {/* Menu Items */}
                            <div className="space-y-1">
                                {user.email && ['syewhite@gmail.com', 'sye@luxhavn.com'].includes(user.email) && (
                                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-luxury-gold font-bold hover:bg-luxury-gold/10 rounded-lg transition-colors text-left"
                                        onClick={() => window.location.hash = '#/admin'}
                                    >
                                        <Lock size={16} /> SyeOS Command
                                    </button>
                                )}
                                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-left"
                                    onClick={() => { setIsOpen(false); setActiveModal('history'); }}
                                >
                                    <MessageSquare size={16} /> History with Sage
                                </button>
                                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-left"
                                    onClick={() => { setIsOpen(false); setActiveModal('profile'); }}
                                >
                                    <Settings size={16} /> Personalization
                                </button>
                            </div>

                            <div className="h-px bg-zinc-100 dark:bg-zinc-800 my-2" />

                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors text-left"
                            >
                                <LogOut size={16} /> Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Modals */}
            <HistoryModal isOpen={activeModal === 'history'} onClose={() => setActiveModal('none')} />
            <PersonalizationModal isOpen={activeModal === 'profile'} onClose={() => setActiveModal('none')} />
        </>
    );
};

export default UserProfileWidget;
