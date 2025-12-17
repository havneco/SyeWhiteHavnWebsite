import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import { collection, query, orderBy, onSnapshot, updateDoc, doc, Timestamp, addDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Check, X, Clock, Mail, ExternalLink, Shield } from 'lucide-react';

interface AccessRequest {
    id: string;
    name: string;
    email: string;
    reason: string;
    status: 'pending' | 'approved' | 'rejected' | 'archived';
    timestamp: Timestamp;
    appName?: string;
}

const AdminDashboard: React.FC = () => {
    const { isAdmin, login, loginWithGoogle, isFirebaseReady } = useAdmin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [requests, setRequests] = useState<AccessRequest[]>([]);
    const [activeTab, setActiveTab] = useState<'pending' | 'history' | 'brain' | 'stories' | 'analytics'>('pending');

    const [newMemory, setNewMemory] = useState('');
    const [memories, setMemories] = useState<any[]>([]);
    const [stories, setStories] = useState<any[]>([]);

    // Listen for requests and memories
    useEffect(() => {
        if (!isAdmin || !db) return;

        // Listen to Access Requests
        const qRequests = query(collection(db, 'access_requests'), orderBy('timestamp', 'desc'));
        const unsubRequests = onSnapshot(qRequests, (snapshot) => {
            const reqs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as AccessRequest[];
            setRequests(reqs);
        });

        // Listen to Sage Memories
        const qMemories = query(collection(db, 'sage_memories'), orderBy('timestamp', 'desc'));
        const unsubMemories = onSnapshot(qMemories, (snapshot) => {
            const mems = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMemories(mems);
        });

        // Listen to User Stories
        const qStories = query(collection(db, 'sye_stories'), orderBy('timestamp', 'desc'));
        const unsubStories = onSnapshot(qStories, (snapshot) => {
            const s = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setStories(s);
        });

        return () => {
            unsubRequests();
            unsubMemories();
            unsubStories();
        };
    }, [isAdmin]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(email, password);
    };

    const updateStatus = async (id: string, newStatus: AccessRequest['status']) => {
        if (!db) return;
        await updateDoc(doc(db, 'access_requests', id), {
            status: newStatus
        });

        if (newStatus === 'approved') {
            console.log(`Approved access for request ${id}`);
        }
    };

    const addMemory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMemory.trim() || !db) return;

        try {
            await addDoc(collection(db, 'sage_memories'), {
                content: newMemory,
                type: 'fact', // 'fact', 'correction', 'preference'
                timestamp: serverTimestamp()
            });
            setNewMemory('');
        } catch (error) {
            console.error("Failed to add memory", error);
        }
    };

    const deleteMemory = async (id: string) => {
        if (!db) return;
        if (confirm('Forget this memory?')) {
            await deleteDoc(doc(db, 'sage_memories', id));
        }
    }

    if (!isAdmin) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-luxury-gold">
                            <Shield size={32} />
                        </div>
                        <h1 className="text-2xl font-bold text-white">SyeOS Login</h1>
                        <p className="text-zinc-500 mt-2">Restricted Access</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-luxury-gold outline-none transition-colors"
                                placeholder="admin@syewhite.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-luxury-gold outline-none transition-colors"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-luxury-gold text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                        >
                            Authenticate
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-zinc-800" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-zinc-900 px-2 text-zinc-500">Or continue with</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => loginWithGoogle()}
                            className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Google
                        </button>

                        {!isFirebaseReady && (
                            <p className="text-xs text-red-400 text-center mt-4">Warning: Firebase is not configured. Config required for real auth.</p>
                        )}
                    </form>
                </div>
            </div>
        );
    }

    const pendingRequests = requests.filter(r => r.status === 'pending');
    const historyRequests = requests.filter(r => r.status !== 'pending');
    let displayedRequests = activeTab === 'pending' ? pendingRequests : historyRequests;

    return (
        <div className="min-h-screen bg-black text-white pb-20">
            {/* Header */}
            <div className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-10 px-4 py-4 safe-top">
                <div className="flex justify-between items-center max-w-lg mx-auto">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        SyeOS Admin
                    </h1>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setActiveTab('pending')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${activeTab === 'pending' ? 'bg-luxury-gold text-black' : 'bg-zinc-800 text-zinc-400'}`}
                        >
                            Queue ({pendingRequests.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('history')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${activeTab === 'history' ? 'bg-luxury-gold text-black' : 'bg-zinc-800 text-zinc-400'}`}
                        >
                            History
                        </button>
                        <button
                            onClick={() => setActiveTab('brain')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${activeTab === 'brain' ? 'bg-luxury-jade text-white' : 'bg-zinc-800 text-zinc-400'}`}
                        >
                            Brain
                        </button>
                        <button
                            onClick={() => setActiveTab('stories')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${activeTab === 'stories' ? 'bg-purple-500 text-white' : 'bg-zinc-800 text-zinc-400'}`}
                        >
                            Stories ({stories.filter(s => s.status === 'pending').length})
                        </button>
                        <button
                            onClick={() => setActiveTab('analytics')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${activeTab === 'analytics' ? 'bg-blue-500 text-white' : 'bg-zinc-800 text-zinc-400'}`}
                        >
                            📊
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-lg mx-auto p-4 space-y-4">
                {activeTab === 'brain' ? (
                    <div className="space-y-6">
                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <span className="text-2xl">🧠</span> Train Sage
                            </h3>
                            <p className="text-sm text-zinc-400 mb-4">Add facts, preferences, or corrections here. Sage will use these to answer future queries.</p>

                            <form onSubmit={addMemory} className="flex gap-2">
                                <input
                                    type="text"
                                    value={newMemory}
                                    onChange={(e) => setNewMemory(e.target.value)}
                                    placeholder="e.g. 'I prefer concise answers.'"
                                    className="flex-grow bg-black border border-zinc-700 rounded-lg p-3 text-white text-sm focus:border-luxury-jade outline-none"
                                />
                                <button type="submit" className="bg-zinc-800 hover:bg-luxury-jade hover:text-white px-4 rounded-lg font-bold transition-colors">
                                    Add
                                </button>
                            </form>
                        </div>

                        <div className="space-y-3">
                            {memories.length === 0 ? (
                                <p className="text-center text-zinc-500 py-8">Sage's mind is empty. Teach her something.</p>
                            ) : (
                                memories.map(mem => (
                                    <div key={mem.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex justify-between items-start group">
                                        <p className="text-zinc-200 text-sm">{mem.content}</p>
                                        <button
                                            onClick={() => deleteMemory(mem.id)}
                                            className="text-zinc-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                ) : activeTab === 'stories' ? (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg flex items-center gap-2"><span className="text-2xl">📖</span> User Intel</h3>
                        {stories.filter(s => s.status === 'pending').length === 0 ? (
                            <p className="text-center text-zinc-500 py-8">No pending stories.</p>
                        ) : (
                            stories.filter(s => s.status === 'pending').map(story => (
                                <div key={story.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="font-bold text-sm">{story.author || 'Anon'}</p>
                                            <p className="text-xs text-purple-400">{story.relation}</p>
                                        </div>
                                        <span className="text-[10px] text-zinc-500">{story.timestamp?.toDate?.()?.toLocaleDateString?.() || ''}</span>
                                    </div>
                                    <p className="text-sm text-zinc-300 italic mb-3">"{story.content}"</p>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={async () => {
                                                await addDoc(collection(db, 'sage_memories'), { content: `User Intel (${story.relation}): ${story.content}`, type: 'user_intel', timestamp: serverTimestamp() });
                                                await updateDoc(doc(db, 'sye_stories', story.id), { status: 'approved' });
                                            }}
                                            className="flex-1 py-2 rounded-lg bg-luxury-jade text-white text-xs font-bold"
                                        >✓ Approve & Train</button>
                                        <button
                                            onClick={async () => await updateDoc(doc(db, 'sye_stories', story.id), { status: 'rejected' })}
                                            className="flex-1 py-2 rounded-lg bg-zinc-800 text-zinc-400 text-xs font-bold"
                                        >✗ Reject</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                ) : activeTab === 'analytics' ? (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg flex items-center gap-2"><span className="text-2xl">📊</span> Analytics</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-center">
                                <p className="text-3xl font-bold text-luxury-gold">{requests.length}</p>
                                <p className="text-xs text-zinc-500 uppercase">Access Requests</p>
                            </div>
                            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-center">
                                <p className="text-3xl font-bold text-luxury-jade">{memories.length}</p>
                                <p className="text-xs text-zinc-500 uppercase">Sage Memories</p>
                            </div>
                            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-center">
                                <p className="text-3xl font-bold text-purple-500">{stories.length}</p>
                                <p className="text-xs text-zinc-500 uppercase">User Stories</p>
                            </div>
                            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-center">
                                <p className="text-3xl font-bold text-blue-500">{pendingRequests.length}</p>
                                <p className="text-xs text-zinc-500 uppercase">Pending Queue</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    displayedRequests.length === 0 ? (
                        <div className="text-center py-20 text-zinc-500">
                            <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check size={24} />
                            </div>
                            <p>All caught up. No requests found.</p>
                        </div>
                    ) : (
                        displayedRequests.map((req) => (
                            <div key={req.id} className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 shadow-lg">
                                {/* ... (Same Request Card UI as before) ... */}
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-bold text-lg">{req.name}</h3>
                                        <div className="flex items-center gap-2 text-zinc-400 text-sm">
                                            <Mail size={12} />
                                            <a href={`mailto:${req.email}`} className="hover:text-luxury-gold">{req.email}</a>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                                        <Clock size={10} />
                                        {req.timestamp?.toDate().toLocaleDateString()}
                                    </span>
                                </div>

                                <div className="bg-black/50 rounded-lg p-3 mb-4 border border-zinc-800/50">
                                    <p className="text-sm text-zinc-300 italic">"{req.reason}"</p>
                                    {req.appName && (
                                        <div className="mt-2 text-xs text-luxury-gold font-bold uppercase tracking-wider">
                                            Requested: {req.appName}
                                        </div>
                                    )}
                                </div>

                                {activeTab === 'pending' ? (
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => updateStatus(req.id, 'rejected')}
                                            className="flex items-center justify-center gap-2 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-sm transition-colors"
                                        >
                                            <X size={16} /> Ignore
                                        </button>
                                        <button
                                            onClick={() => updateStatus(req.id, 'approved')}
                                            className="flex items-center justify-center gap-2 py-2 rounded-lg bg-luxury-gold hover:bg-yellow-400 text-black font-bold text-sm transition-colors"
                                        >
                                            <Check size={16} /> Approve
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex justify-between items-center text-sm border-t border-zinc-800 pt-3 mt-3">
                                        <span className={`font-bold ${req.status === 'approved' ? 'text-green-500' : 'text-red-500'}`}>
                                            {req.status === 'approved' ? 'Approved' : 'Rejected'}
                                        </span>
                                        <button
                                            onClick={() => updateStatus(req.id, 'pending')}
                                            className="text-zinc-500 text-xs hover:text-white"
                                        >
                                            Reset to Pending
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    )
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
