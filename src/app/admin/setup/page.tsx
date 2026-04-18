'use client';

import { useState } from 'react';
import { db, auth } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '@/context/AuthContext';
import { ShieldAlert, CheckCircle, Loader2 } from 'lucide-react';

export default function AdminSetupPage() {
  const { user } = useAuth();
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');

  const promoteToAdmin = async () => {
    if (!user) return;
    setStatus('pending');
    try {
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        displayName: user.displayName || 'System Admin',
        role: 'admin',
        createdAt: new Date().toISOString()
      }, { merge: true });
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-osg-navy flex items-center justify-center p-10">
      <div className="max-w-2xl w-full bg-white p-20 text-center shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-t-8 border-osg-gold">
        <ShieldAlert className="mx-auto text-osg-navy mb-12 animate-pulse" size={120} />
        <h1 className="text-6xl font-serif font-black text-osg-navy uppercase tracking-tighter mb-8 italic">Privilege <br/> Escalation</h1>
        <p className="text-sm font-black text-osg-navy/50 uppercase tracking-[0.4em] leading-relaxed mb-12">
          This system utility promotes the currently authenticated identity to <span className="text-osg-gold underline decoration-2 underline-offset-4">Principal Administrator</span> status within the OSG architectural control platform.
        </p>

        {!user ? (
          <div className="p-10 bg-[#f8f9f5] border-2 border-osg-navy/10 text-osg-navy text-[11px] font-black uppercase tracking-[0.3em] shadow-inner">
            Identity Unverified. Please authenticate via a secure login terminal first.
          </div>
        ) : status === 'success' ? (
          <div className="p-10 bg-green-50 border-2 border-green-200 text-green-900 flex flex-col items-center gap-6 shadow-xl">
            <CheckCircle size={48} className="text-green-600" />
            <span className="text-[12px] font-black uppercase tracking-[0.5em]">Command Access Granted</span>
            <a href="/admin/dashboard" className="w-full btn-primary py-6 px-10 text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl">Enter Command Center</a>
          </div>
        ) : (
          <button 
            onClick={promoteToAdmin}
            disabled={status === 'pending'}
            className="w-full btn-primary py-8 flex items-center justify-center gap-4 disabled:opacity-50 text-[12px] font-black uppercase tracking-[0.3em] shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all"
          >
            {status === 'pending' ? <Loader2 className="animate-spin" size={24} /> : 'Authorize Administrative Rights'}
          </button>
        )}
        
        <p className="mt-16 text-[9px] font-black text-osg-navy/30 uppercase tracking-[0.5em] italic">
          Security Protocol: Decommission this utility terminal following successful authorization.
        </p>
      </div>
    </main>
  );
}
