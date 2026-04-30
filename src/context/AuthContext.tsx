'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  User, 
  signOut as firebaseSignOut 
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface OSGUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: 'admin' | 'client';
}

interface AuthContextType {
  user: User | null;
  osgUser: OSGUser | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [osgUser, setOsgUser] = useState<OSGUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      
      if (user) {
        try {
          // Force admin role for specific development account
          if (user.email === 'admin@oleserenigroup.com') {
            setOsgUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || 'Admin Principal',
              role: 'admin',
            });
            setLoading(false);
            return;
          }

          // Fetch custom user data (role) from Firestore
          const userDoc = await getDoc(doc(db, 'users', user.uid));

          if (userDoc.exists()) {
            const data = userDoc.data();
            setOsgUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              role: data.role as 'admin' | 'client',
            });
          } else {
            // Default role if not found (fallback to client)
            setOsgUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              role: 'client',
            });
          }
        } catch (error) {
          console.error('Firestore Error: Could not fetch user role. Ensure your "(default)" database is created in Firebase.', error);
          // Fallback to minimal user object to prevent hang
          setOsgUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            role: 'client',
          });
        }
      } else {
        setOsgUser(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, osgUser, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
