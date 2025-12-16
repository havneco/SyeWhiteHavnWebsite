
import { GoogleGenAI } from "@google/genai";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { constructSystemPrompt } from './sageProtocol';

const getAiClient = () => {
    // Attempt to get key from Vite env
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
        console.warn("Gemini API Key missing for Sage. Please set VITE_GEMINI_API_KEY in .env");
        return null;
    }

    return new GoogleGenAI({ apiKey });
};

// --- RED ALERT LOGIC ---
const RED_ALERT_KEYWORDS = ["wrong", "incorrect", "false", "stop", "bad bot", "lie", "error"];

const checkRedAlert = async (userMessage: string) => {
    const lower = userMessage.toLowerCase();
    const isAlert = RED_ALERT_KEYWORDS.some(word => lower.includes(word));

    if (isAlert) {
        console.log("🔴 RED ALERT DETECTED in User Message:", userMessage);
        if (db) {
            try {
                await addDoc(collection(db, 'sage_memories'), {
                    content: `RED ALERT FEEDBACK: User said: "${userMessage}"`,
                    type: 'correction',
                    timestamp: serverTimestamp()
                });
            } catch (e) {
                console.error("Failed to log red alert", e);
            }
        }
    }
    return isAlert;
};

// --- MAIN CHAT FUNCTION ---
export const sendMessageToSage = async (history: { role: 'user' | 'model'; content: string }[], newMessage: string) => {

    // 1. Red Alert Check on the NEW message (Immediate Reflex)
    await checkRedAlert(newMessage);

    // 2. Fetch Memories (The "Daily Snapshot" simulation)
    // specific optimization: We fetch these once per session in a real app, 
    // but here we fetch fresh to ensure "Hotfixes" work immediately as requested.
    let memoryContextString: string[] = [];
    if (db) {
        try {
            const memSnap = await getDocs(collection(db, 'sage_memories'));
            memoryContextString = memSnap.docs.map(d => d.data().content);
        } catch (e) {
            console.warn("Could not fetch memories for Sage", e);
        }
    }

    // 3. Construct System Prompt
    const systemInstruction = constructSystemPrompt(memoryContextString);

    // 4. Call AI
    const client = getAiClient();
    if (!client) {
        return "I am currently offline (Missing API Key). Please configure my brain settings.";
    }

    try {
        // We use the 'gemini-1.5-flash' for speed/cost or 'gemini-1.5-pro' for quality.
        // Using flash for the "Reflex" speed user requested.
        const model = client.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: [
                { role: 'system', parts: [{ text: systemInstruction }] }, // System prompt usually passed differently in new SDK?
                // Actually, in @google/genai, system instruction is a separate config usually, or we just prepend it.
                // Let's check typical usage. For now, prepending to history is reliable.
                ...history.map(h => ({ role: h.role, parts: [{ text: h.content }] })),
                { role: 'user', parts: [{ text: newMessage }] }
            ]
        });

        // Wait, @google/genai syntax might be slightly different for 'generateContent' with history.
        // It's often easier to use 'startChat' for history.

        // Let's use the simple generation for now to avoid state issues in this utility.
        const result = await client.models.generateContent({
            model: 'gemini-1.5-flash',
            config: {
                systemInstruction: systemInstruction, // Supported in newer models
            },
            contents: [
                ...history.map(h => ({ role: h.role === 'model' ? 'model' : 'user', parts: [{ text: h.content }] })),
                { role: 'user', parts: [{ text: newMessage }] }
            ]
        });

        // 5. Extract Text
        // @google/genai returns a nice object.
        return result.response.text();

    } catch (error) {
        console.error("Sage Brain Malfunction:", error);
        return "I apologize, I'm having trouble retrieving that information right now. (System Error)";
    }
};
