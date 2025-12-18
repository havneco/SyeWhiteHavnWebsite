
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { constructSystemPrompt } from './sageProtocol';

const getAiClient = () => {
    // Attempt to get key from Vite env
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim();

    if (!apiKey) {
        console.warn("Gemini API Key missing for Sage. Please set VITE_GEMINI_API_KEY in .env");
        return null;
    }

    // Initialize the official Generative AI Client
    return new GoogleGenerativeAI(apiKey);
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
export const sendMessageToSage = async (
    history: { role: 'user' | 'model'; content: string }[],
    newMessage: string,
    userProfile?: { displayName?: string; role?: string; interests?: string[]; relation?: string },
    user?: any
) => {

    // 1. Red Alert Check on the NEW message (Immediate Reflex)
    // Only attempt to write red alerts if we have a user (assuming only logged in users can write)
    // If strict admin-only is needed, check user.email
    if (user) {
        await checkRedAlert(newMessage);
    }

    // 2. Fetch Memories (The "Daily Snapshot" simulation)
    // specific optimization: We fetch these once per session in a real app, 
    // but here we fetch fresh to ensure "Hotfixes" work immediately as requested.
    let memoryContextString: string[] = [];
    if (db && user) {
        try {
            const memSnap = await getDocs(collection(db, 'sage_memories'));
            memoryContextString = memSnap.docs.map(d => d.data().content);
        } catch (e) {
            console.debug("Sage Memories inaccessible (likely permission/guest):", e);
        }
    }

    // 2.5. Inject User Context if available
    if (userProfile) {
        const parts = [];
        if (userProfile.displayName) parts.push(`The user's name is ${userProfile.displayName}.`);
        if (userProfile.role) parts.push(`Their role/title is "${userProfile.role}".`);
        if (userProfile.interests?.length) parts.push(`They are interested in: ${userProfile.interests.join(', ')}.`);
        if (userProfile.relation) parts.push(`Their relation to Sye is: ${userProfile.relation}.`);

        if (parts.length > 0) {
            memoryContextString.push(`[CURRENT USER CONTEXT] ${parts.join(' ')}`);
        }
    }

    // 3. Construct System Prompt
    const systemInstruction = constructSystemPrompt(memoryContextString);

    // 4. Call AI
    const client = getAiClient();
    if (!client) {
        return "I am currently offline (Missing API Key). Please configure my brain settings.";
    }

    const generateWithModel = async (modelName: string) => {
        const model = client.getGenerativeModel({
            model: modelName,
            systemInstruction: systemInstruction
        });

        // Map history to the format expected by the new SDK
        const chatHistory = history.map(h => ({
            role: h.role === 'model' ? 'model' : 'user',
            parts: [{ text: h.content }]
        }));

        const result = await model.generateContent({
            contents: [
                ...chatHistory,
                { role: 'user', parts: [{ text: newMessage }] }
            ]
        });

        return result.response.text();
    };

    try {
        try {
            // Attempt 1: Gemini 2.0 Flash Exp (Smartest/Newest)
            console.log("Sage: Attempting logic with gemini-2.0-flash-exp...");
            return await generateWithModel('gemini-2.0-flash-exp');

        } catch (primaryError: any) {
            console.warn("Sage: Primary model failed, attempting fallback...", primaryError.message);

            try {
                // Attempt 2: Gemini 1.5 Flash (Stable)
                console.log("Sage: Fallback to gemini-1.5-flash...");
                return await generateWithModel('gemini-1.5-flash');

            } catch (fallbackError: any) {
                console.error("Sage Brain Critical Failure:", {
                    primary: primaryError.message,
                    fallback: fallbackError.message
                });
                throw primaryError; // Throw original error to be caught by outer handler
            }
        }

    } catch (error: any) {
        console.error("Sage Brain Malfunction Details:", {
            message: error.message,
            status: error.status,
            statusText: error.statusText,
            fullError: error
        });
        return `I apologize, I'm having trouble retrieving that information right now. (System Error: ${error.message || 'Unknown'})`;
    }
};
