
import React, { useState, useEffect } from 'react';
import { User, LogIn, LogOut, MessageSquare, Rocket, Settings } from 'lucide-react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

const UserProfileWidget: React.FC = () => {
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!auth) return;
        const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        if (!auth) return;
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
        <div className="fixed bottom-6 left-6 z-50">
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
                        <LogIn size={20} className="text-zinc-600 dark:text-zinc-400 group-hover:text-luxury-jade dark:group-hover:text-luxury-gold" />
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
                            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-left"
                                onClick={() => alert("Chat History coming soon!")}
                            >
                                <MessageSquare size={16} /> History with Sage
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-left"
                                onClick={() => alert("Personalization coming soon!")}
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
    );
};

export default UserProfileWidget;
