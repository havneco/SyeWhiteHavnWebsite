import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// ------------------------------------------------------------------
// PASTE YOUR FIREBASE CONFIGURATION HERE
// Get this from: Firebase Console -> Project Settings -> General -> Your apps
// ------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "Paste_Your_API_Key_Here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "00000000000",
  appId: "1:00000000000:web:000000000000000000"
};
// ------------------------------------------------------------------

// Safety check: Don't initialize if keys aren't set
const isConfigured = firebaseConfig.apiKey !== "Paste_Your_API_Key_Here";

// Initialize Firebase only if configured
const app = isConfigured ? initializeApp(firebaseConfig) : null;

// Export services (or null if not configured)
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const storage = app ? getStorage(app) : null;