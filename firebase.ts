import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// ------------------------------------------------------------------
// PASTE YOUR FIREBASE CONFIGURATION HERE
// Get this from: Firebase Console -> Project Settings -> General -> Your apps
// ------------------------------------------------------------------
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// ------------------------------------------------------------------

// Safety check: Don't initialize if keys are missing
const isConfigured = !!firebaseConfig.apiKey;
const app = isConfigured ? initializeApp(firebaseConfig) : null;

// Export services (or null if not configured)
export const auth = app ? getAuth(app) : null;
export const googleProvider = new GoogleAuthProvider();
export const db = app ? getFirestore(app) : null;
export const storage = app ? getStorage(app) : null;