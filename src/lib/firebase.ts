import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC_vYmvVeD5b9L4iP5qjzMXmDHaRGdOr9k",
  authDomain: "pakremit.firebaseapp.com",
  projectId: "pakremit",
  storageBucket: "pakremit.firebasestorage.app",
  messagingSenderId: "198847352188",
  appId: "1:198847352188:web:656c84a91788947557e8f9",
  measurementId: "G-3VET0TMEVH"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Analytics is only supported in browser
export const analytics = typeof window !== 'undefined' ? isSupported().then(yes => yes ? getAnalytics(app) : null) : null;

export default app;
