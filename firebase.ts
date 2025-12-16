import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// ------------------------------------------------------------------
// PASTE YOUR FIREBASE CONFIGURATION HERE
// Get this from: Firebase Console -> Project Settings -> General -> Your apps
// ------------------------------------------------------------------
// Fallback to hardcoded values if Env vars are missing (for easier deployment)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCa5M6Yv4oAOEzErn9uvtc3a4v7qlpmmgQ",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "syewhite-portfolio.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "syewhite-portfolio",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "syewhite-portfolio.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "651438739894",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:651438739894:web:7e93375c5cda93f6c3b117"
};

// ------------------------------------------------------------------

// Safety check: Don't initialize if keys are missing
const isConfigured = !!firebaseConfig.apiKey;
if (!isConfigured) console.error("Firebase Config Missing!");

const app = isConfigured ? initializeApp(firebaseConfig) : null;

// Export services (or null if not configured)
export const auth = app ? getAuth(app) : null;
export const googleProvider = new GoogleAuthProvider();
export const db = app ? getFirestore(app) : null;
export const storage = app ? getStorage(app) : null;