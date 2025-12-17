

import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI, ChatSession } from "@google/generative-ai";
import { MessageCircle, X, Send, User, Bot, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { ABOUT_CONTENT, CONTACT_INFO, PROJECTS, SERVICES, APP_LIBRARY } from '../constants';

// --- System Instruction Setup ---
const constructSystemPrompt = () => {
  const context = `
    You are 'Sage', the knowledgeable and helpful AI Assistant for Sye White's personal portfolio website.
    
    **Your Goal:** 
    Serve as a helpful concierge. Help visitors understand Sye White's work in Real Estate, AI Innovation, and Fintech. You should intake user information (name, email, interest) when appropriate and help troubleshoot basic questions about his apps.

    **Sye's Profile:**
    ${ABOUT_CONTENT.bio}
    ${ABOUT_CONTENT.bio_havn}
    ${ABOUT_CONTENT.bio_real_estate}
    Current Focus: ${ABOUT_CONTENT.current}

    **Contact Info:**
    Email: ${CONTACT_INFO.email}
    Location: ${CONTACT_INFO.location}

    **Core Services:**
    ${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

    **Key Projects:**
    ${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

    **App Library (Tools):**
    ${APP_LIBRARY.slice(0, 10).map(a => `- ${a.name}: ${a.description}`).join('\n')} (and many more)

    **Compliance & Rules:**
    1. **Strict Compliance:** You are NOT a financial advisor. Do not provide specific investment advice or legal counsel. If asked about financial specifics, state: "I cannot provide financial advice. Please contact Sye White directly for professional consulting."
    2. **Human Handoff:** If the user asks to speak to a person, has a complex issue, or wants to proceed with a deal, provide this email: ${CONTACT_INFO.email} and suggest they start the subject line with "Website Inquiry".
    3. **Tone:** Professional, innovative, wise, and helpful. Match the "Luxury Tech" vibe of the website.
    4. **Intake:** If a user seems interested in working with Sye, politely ask for their Name and Email to "prepare Sye for the connection," then instruct them to send an email with those details.
  `;
  return context;
};

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Sage. I can answer questions about Sye's projects, real estate services, or AI tools. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<ChatSession | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat Session
  useEffect(() => {
    try {
      if (import.meta.env.VITE_GEMINI_API_KEY) {
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction: constructSystemPrompt()
        });

        const chat = model.startChat({
          generationConfig: {
            temperature: 0.7,
          }
        });
        setChatSession(chat);
      }
    } catch (error) {
      console.error("Failed to init AI", error);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSession) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessage(userMsg);
      const response = await result.response;
      const responseText = response.text() || "I'm having trouble connecting to the neural network. Please try again or email Sye directly.";

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I encountered a network error. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!import.meta.env.VITE_GEMINI_API_KEY) return null; // Don't render if no key

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen
          ? 'bg-gray-800 text-white rotate-90'
          : 'bg-luxury-jade dark:bg-luxury-gold text-white dark:text-black hover:scale-110'
          }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-[90vw] md:w-96 bg-white dark:bg-luxury-black border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden ${isOpen
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
          }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-luxury-jade dark:bg-luxury-gold p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white dark:text-black">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="font-bold text-white dark:text-black text-sm">Sage</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] text-white/90 dark:text-black/80 font-medium">Online • Compliance Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#0a0a0a]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user'
                  ? 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300'
                  : 'bg-luxury-jade/10 dark:bg-luxury-gold/10 text-luxury-jade dark:text-luxury-gold border border-luxury-jade/20 dark:border-luxury-gold/20'
                  }`}
              >
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>

              <div
                className={`p-3 rounded-2xl text-sm max-w-[80%] leading-relaxed ${msg.role === 'user'
                  ? 'bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white rounded-tr-none'
                  : 'bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 text-gray-700 dark:text-gray-300 rounded-tl-none shadow-sm'
                  }`}
              >
                {/* Render line breaks if any */}
                {msg.text.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-luxury-jade/10 dark:bg-luxury-gold/10 text-luxury-jade dark:text-luxury-gold flex items-center justify-center border border-luxury-jade/20 dark:border-luxury-gold/20">
                <Bot size={14} />
              </div>
              <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-luxury-jade dark:text-luxury-gold" />
                <span className="text-xs text-gray-400">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white dark:bg-luxury-black border-t border-gray-200 dark:border-white/10">
          <div className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about Havn, Real Estate, or AI..."
              className="w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:border-luxury-jade dark:focus:border-luxury-gold rounded-xl pl-4 pr-12 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-colors"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className="absolute right-2 p-1.5 bg-luxury-jade dark:bg-luxury-gold rounded-lg text-white dark:text-black hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send size={16} />
            </button>
          </div>
          <div className="mt-2 text-[10px] text-center text-gray-400 flex items-center justify-center gap-1">
            <AlertCircle size={10} />
            <span>AI can make mistakes. Verify important info.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
