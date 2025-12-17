import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import {
  doc,
  setDoc,
  onSnapshot
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadString
} from 'firebase/storage';
import { auth, db, storage, googleProvider } from '../firebase';
import { generateAsset, SITE_PROMPTS } from '../utils/aiGenerator';

interface AdminContextType {
  isAdmin: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  logout: () => void;
  images: Record<string, string>;
  uploadImage: (key: string, file: Blob) => Promise<void>;
  setImageUrl: (key: string, url: string) => Promise<void>;
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  loading: boolean;
  isFirebaseReady: boolean;
  generateAllAssets: () => Promise<void>;
  generationStatus: string;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [generationStatus, setGenerationStatus] = useState('');

  // Check if Firebase is actually configured
  const isFirebaseReady = !!auth && !!db && !!storage;

  // 1. Listen for Authentication State
  useEffect(() => {
    if (!auth) {
      setLoading(false);
      // Load from local storage if firebase isn't ready, just for demo
      const localImages = localStorage.getItem('sye_site_images');
      if (localImages) setImages(JSON.parse(localImages));
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        const allowedEmails = ['syewhite@gmail.com', 'sye@luxhavn.com']; // Added your business email too just in case
        if (user.email && allowedEmails.includes(user.email)) {
          setIsAdmin(true);
        } else {
          // Standard User (Not Admin)
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // 2. Listen for Real-time Image Updates from Firestore
  useEffect(() => {
    if (!db) return;

    const unsub = onSnapshot(doc(db, 'content', 'images'), (docSnap) => {
      if (docSnap.exists()) {
        setImages(docSnap.data() as Record<string, string>);
      }
      setLoading(false);
    }, (error) => {
      console.log("Firestore permission denied or not yet created.");
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const login = async (email: string, pass: string) => {
    if (!auth) {
      // Allow "Guest Admin" if firebase isn't set up, for testing local generation
      setIsAdmin(true);
      setIsLoginOpen(false);
      return true;
    }
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      setIsLoginOpen(false);
      return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  };

  const loginWithGoogle = async () => {
    if (!auth) return false;
    try {
      await signInWithPopup(auth, googleProvider);
      setIsLoginOpen(false);
      return true;
    } catch (error) {
      console.error("Google Login failed", error);
      return false;
    }
  };

  const logout = async () => {
    if (auth) {
      await signOut(auth);
    } else {
      setIsAdmin(false);
    }
  };

  const uploadImage = async (key: string, file: Blob) => {
    // If firebase is ready, upload there
    if (isAdmin && storage && db) {
      try {
        const storageRef = ref(storage, `images/${key}_${Date.now()}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        await setDoc(doc(db, 'content', 'images'), { [key]: downloadURL }, { merge: true });
      } catch (error) {
        console.error("Upload failed", error);
        throw error;
      }
    } else {
      // Fallback: Convert to Base64 and store in LocalStorage (for testing without Firebase)
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result as string;
        const newImages = { ...images, [key]: base64data };
        setImages(newImages);
        localStorage.setItem('sye_site_images', JSON.stringify(newImages));
      };
    }
  };

  const setImageUrl = async (key: string, url: string) => {
    if (isAdmin && db && isFirebaseReady) {
      try {
        await setDoc(doc(db, 'content', 'images'), { [key]: url }, { merge: true });
      } catch (error) {
        console.error("Failed to save URL", error);
      }
    } else {
      const newImages = { ...images, [key]: url };
      setImages(newImages);
      localStorage.setItem('sye_site_images', JSON.stringify(newImages));
    }
  };

  const generateAllAssets = async () => {
    setGenerationStatus('Starting AI Generator...');

    const prompts = Object.entries(SITE_PROMPTS);
    const newImages = { ...images };

    for (const [key, prompt] of prompts) {
      setGenerationStatus(`Generating ${key}...`);
      try {
        const base64Image = await generateAsset(prompt);

        // Save to state/storage immediately
        newImages[key] = base64Image;
        setImages({ ...newImages }); // Update UI immediately

        // If Firebase is connected, upload it
        if (storage && db && isAdmin) {
          const storageRef = ref(storage, `images/${key}_ai_${Date.now()}`);
          await uploadString(storageRef, base64Image, 'data_url');
          const downloadURL = await getDownloadURL(storageRef);
          await setDoc(doc(db, 'content', 'images'), { [key]: downloadURL }, { merge: true });
        } else {
          localStorage.setItem('sye_site_images', JSON.stringify(newImages));
        }
      } catch (err) {
        console.error(`Failed to generate ${key}`, err);
      }
    }
    setGenerationStatus('Complete! Refreshing view...');
    setTimeout(() => setGenerationStatus(''), 2000);
  };

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <AdminContext.Provider value={{
      isAdmin,
      login,
      loginWithGoogle,
      logout,
      images,
      uploadImage,
      setImageUrl,
      isLoginOpen,
      openLogin,
      closeLogin,
      loading,
      isFirebaseReady,
      generateAllAssets,
      generationStatus
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};