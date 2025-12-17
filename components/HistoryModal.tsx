import React, { useState, useEffect } from 'react';
import { X, Trash2, MessageSquare, Download } from 'lucide-react';
import { db, auth } from '../firebase';
import { collection, query, orderBy, limit, getDocs, deleteDoc, doc, writeBatch } from 'firebase/firestore';

interface HistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Message {
    id: string;
    role: 'user' | 'model';
    content: string;
    timestamp: any;
}

const HistoryModal: React.FC<HistoryModalProps> = ({ isOpen, onClose }) => {
    const [history, setHistory] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isOpen || !auth?.currentUser) return;

        const loadHistory = async () => {
            setLoading(true);
            try {
                const q = query(
                    collection(db, 'users', auth.currentUser!.uid, 'chats', 'general', 'messages'),
                    orderBy('timestamp', 'asc'), // Load chronological
                    limit(100)
                );
                const snapshot = await getDocs(q);
                const msgs = snapshot.docs.map(d => ({
                    id: d.id,
                    ...d.data()
                })) as Message[];
                setHistory(msgs);
            } catch (error) {
                console.error("Failed to load history", error);
            } finally {
                setLoading(false);
            }
        };
        loadHistory();
    }, [isOpen]);

    const handleClearHistory = async () => {
        if (!auth?.currentUser || !confirm("Are you sure? This will delete all your memory with Sage.")) return;

        try {
            // Firestore doesn't support recursive delete easily from client SDK without Cloud Functions,
            // but we can batch delete the loaded messages (up to 500).
            const batch = writeBatch(db);
            history.forEach(msg => {
                const ref = doc(db, 'users', auth.currentUser!.uid, 'chats', 'general', 'messages', msg.id);
                batch.delete(ref);
            });
            await batch.commit();
            setHistory([]);
        } catch (error) {
            console.error("Failed to clear history", error);
        }
    };

    const handleDownload = () => {
        const text = history.map(m => `[${m.role.toUpperCase()}]: ${m.content}`).join('\n\n');
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sage_history_${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200 flex flex-col max-h-[80vh]">

                <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-black dark:hover:text-white">
                    <X size={20} />
                </button>

                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-luxury-jade/10 rounded-xl flex items-center justify-center text-luxury-jade">
                            <MessageSquare size={20} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Memory Log</h2>
                            <p className="text-sm text-zinc-500">Your conversation history with Sage.</p>
                        </div>
                    </div>
                    <div className="flex gap-2 pr-8">
                        <button onClick={handleDownload} className="p-2 text-zinc-500 hover:text-luxury-jade transition-colors" title="Download Text">
                            <Download size={18} />
                        </button>
                        <button onClick={handleClearHistory} className="p-2 text-zinc-500 hover:text-red-500 transition-colors" title="Clear History">
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 p-2 border border-zinc-100 dark:border-zinc-800 rounded-lg bg-gray-50 dark:bg-black/50">
                    {loading ? (
                        <div className="flex items-center justify-center h-full text-zinc-400">Loading memory...</div>
                    ) : history.length === 0 ? (
                        <div className="flex items-center justify-center h-full text-zinc-400">No history found. Start chatting with Sage!</div>
                    ) : (
                        history.map((msg) => (
                            <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-lg text-sm ${msg.role === 'user'
                                        ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white'
                                        : 'bg-transparent text-zinc-600 dark:text-zinc-400 italic'
                                    }`}>
                                    <span className="text-[10px] font-bold uppercase opacity-50 block mb-1">{msg.role}</span>
                                    {msg.content}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default HistoryModal;
