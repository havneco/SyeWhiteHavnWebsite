import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, LogIn, LogOut } from 'lucide-react';
import { sendMessageToSage } from '../utils/sageBrain';
import { auth, db, googleProvider } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, setDoc, doc, limit, getDoc } from 'firebase/firestore';

interface Message {
    role: 'user' | 'model';
    content: string;
}

interface UserProfile {
    displayName?: string;
    role?: string;
    interests?: string[];
    relation?: string;
}

const SageChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', content: "Hello. I am Sage, Sye White's digital twin. How can I help you navigate his work or ecosystem?" }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages, isOpen]);

    // Listen for Auth State
    useEffect(() => {
        if (!auth) return;
        const unsubscribe = onAuthStateChanged(auth, (u) => {
            setUser(u);
        });
        return () => unsubscribe();
    }, []);

    // Load Chat History if User is Logged In
    useEffect(() => {
        if (!user || !db) return;

        // Note: For simplicity, we are using a single "general" chat thread for now.
        // In the future, we can support multiple threads.
        const q = query(
            collection(db, 'users', user.uid, 'chats', 'general', 'messages'),
            orderBy('timestamp', 'asc'),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            if (!snapshot.empty) {
                const loadedMsgs = snapshot.docs.map(d => ({
                    role: d.data().role,
                    content: d.data().content
                })) as Message[];

                // If history exists, replace default welcome, or prepend it? 
                // Let's replace ONLY if we have history equal or more than 1 (which we check).
                // Actually, let's keep it simple: if history loaded, use it.
                if (loadedMsgs.length > 0) {
                    setMessages(loadedMsgs);
                }
            }
        });
        return () => unsubscribe();
    }, [user]);

    // Fetch User Profile for Personalization
    useEffect(() => {
        if (!user || !db) { setUserProfile(null); return; }
        const fetchProfile = async () => {
            try {
                const profileDoc = await getDoc(doc(db, 'users', user.uid, 'settings', 'profile'));
                if (profileDoc.exists()) {
                    setUserProfile(profileDoc.data() as UserProfile);
                }
            } catch (e) { console.warn("Could not fetch profile", e); }
        };
        fetchProfile();
    }, [user]);

    const handleLogin = async () => {
        if (!auth) return;
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const handleLogout = async () => {
        if (!auth) return;
        await signOut(auth);
        // Reset to default greeting on logout
        setMessages([{ role: 'model', content: "Hello. I am Sage, Sye White's digital twin. How can I help you navigate his work or ecosystem?" }]);
    };

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || loading) return;

        const userMsg = input.trim();
        setInput('');

        // Optimistic Update (only if not logged in, or while waiting for snapshot?)
        // If logged in, the snapshot will update the UI. But for speed, let's optimistic update locally anyway.
        const newHistory = [...messages, { role: 'user', content: userMsg } as Message];
        setMessages(newHistory);
        setLoading(true);

        // Save User Message to Firestore
        if (user && db) {
            try {
                await addDoc(collection(db, 'users', user.uid, 'chats', 'general', 'messages'), {
                    role: 'user',
                    content: userMsg,
                    timestamp: serverTimestamp()
                });
                // Create/Update the chat meta doc
                await setDoc(doc(db, 'users', user.uid, 'chats', 'general'), {
                    updatedAt: serverTimestamp(),
                    lastMessage: userMsg
                }, { merge: true });
            } catch (e) {
                console.error("Failed to save message", e);
            }
        }

        try {
            // Send to Sage Brain
            const response = await sendMessageToSage(newHistory, userMsg, userProfile || undefined);

            // Save Model Response to Firestore
            if (user && db) {
                await addDoc(collection(db, 'users', user.uid, 'chats', 'general', 'messages'), {
                    role: 'model',
                    content: response,
                    timestamp: serverTimestamp()
                });
            } else {
                setMessages(prev => [...prev, { role: 'model', content: response || "..." }]);
            }

        } catch (error) {
            setMessages(prev => [...prev, { role: 'model', content: "Connection interrupted. Please try again." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'bg-zinc-800 rotate-90' : 'bg-luxury-jade hover:scale-110 animate-bounce-subtle'
                    }`}
            >
                {isOpen ? <X className="text-white" /> : <MessageSquare className="text-white" />}
            </button>

            {/* Chat Window */}
            <div
                className={`fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'
                    }`}
            >
                {/* Header */}
                <div className="bg-luxury-jade/10 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-luxury-jade flex items-center justify-center">
                            <Sparkles size={20} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">Sage AI</h3>
                            <p className="text-xs text-luxury-jade uppercase tracking-wider font-bold">Digital Twin • Online</p>
                        </div>
                    </div>
                    {/* Login/Logout */}
                    <div>
                        {user ? (
                            <button onClick={handleLogout} className="text-xs text-zinc-500 hover:text-red-500 flex flex-col items-center">
                                <LogOut size={16} />
                                <span>Exit</span>
                            </button>
                        ) : (
                            <button onClick={handleLogin} className="text-xs text-luxury-jade font-bold hover:text-luxury-gold flex flex-col items-center animate-pulse">
                                <LogIn size={16} />
                                <span>Save Chat</span>
                            </button>
                        )}

                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/50">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-luxury-jade text-white rounded-tr-none'
                                    : 'bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-zinc-700 rounded-tl-none'
                                    }`}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-start">
                            <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none border border-zinc-700 flex gap-1">
                                <span className="w-2 h-2 bg-luxury-jade/50 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-luxury-jade/50 rounded-full animate-bounce delay-100"></span>
                                <span className="w-2 h-2 bg-luxury-jade/50 rounded-full animate-bounce delay-200"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSend} className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={user ? "Ask Sage..." : "Ask Sage (History not saved)..."}
                            className="w-full bg-gray-100 dark:bg-zinc-950 border border-transparent focus:border-luxury-jade rounded-xl pl-4 pr-12 py-3 text-sm outline-none transition-all dark:text-white"
                        />
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            className="absolute right-2 top-2 p-1.5 bg-luxury-jade rounded-lg text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                    <div className="text-center mt-2 flex justify-between items-center text-[10px] text-gray-400">
                        <span>Sage v1.2</span>
                        {!user && <span className="text-luxury-gold cursor-pointer" onClick={handleLogin}>Log in to save history</span>}
                    </div>
                </form>
            </div>
        </>
    );
};

export default SageChat;
