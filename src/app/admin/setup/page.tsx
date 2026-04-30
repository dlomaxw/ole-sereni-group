'use client';

import { useState } from 'react';
import { db, auth } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '@/context/AuthContext';
import { ShieldAlert, CheckCircle, Loader2, Lock, Terminal, ShieldCheck, Activity, Key } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="min-h-[calc(100vh-10rem)] bg-[#0B1C2C] rounded-[2rem] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-osg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
         initial={{ opacity: 0, y: 40 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, ease: 'circOut' }}
         className="max-w-3xl w-full bg-white rounded-[2rem] p-6 sm:p-10 lg:p-14 text-center shadow-premium border border-white/10 relative z-10"
      >
        <div className="flex justify-center mb-16">
           <div className="relative">
              <div className="w-40 h-40 bg-[#0B1C2C] rounded-[2.5rem] flex items-center justify-center text-osg-gold shadow-2xl relative z-10 group-hover:rotate-6 transition-transform duration-700">
                 <Lock size={64} className="animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-osg-gold/20 animate-ping rounded-[2.5rem] scale-90" />
           </div>
        </div>

        <div className="space-y-8 mb-16">
           <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-osg-gold/40"></div>
              <span className="text-[11px] font-black text-osg-gold uppercase tracking-[0.6em]">Secure Terminal // Authorization</span>
              <div className="w-12 h-[1px] bg-osg-gold/40"></div>
           </div>
           <h1 className="text-4xl lg:text-6xl font-sans font-black text-osg-navy uppercase tracking-normal leading-none">Privilege <br/><span className="text-osg-navy/10">Escalation.</span></h1>
           <p className="text-xl text-osg-navy/40 font-sans leading-relaxed max-w-xl mx-auto">
              This secure utility terminal promotes the currently authenticated identity to <span className="text-osg-gold border-b-2 border-osg-gold/20 pb-1 font-black">Principal Administrator</span> status within the OSG architectural control platform.
           </p>
        </div>

        <div className="space-y-10">
           {!user ? (
             <div className="p-12 bg-[#F8F9FB] border border-osg-navy/5 rounded-[2.5rem] text-osg-navy/40 text-[11px] font-black uppercase tracking-[0.5em] flex flex-col items-center gap-6">
                <ShieldAlert size={32} className="opacity-20" />
                <span>Identity Unverified // Please authenticate via a secure login terminal.</span>
             </div>
           ) : status === 'success' ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="p-12 bg-green-500/5 border border-green-500/20 rounded-[3rem] text-green-900 flex flex-col items-center gap-10 shadow-sm"
             >
               <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                  <ShieldCheck size={40} />
               </div>
               <div className="space-y-2">
                  <span className="text-[12px] font-black uppercase tracking-[0.6em] text-green-600">Command Access Granted</span>
                  <p className="text-[10px] font-black text-green-900/40 uppercase tracking-[0.4em] leading-none">IDENTITY: {user.email} //</p>
               </div>
               <a href="/admin/dashboard" className="w-full btn-cta !py-8 !text-[12px] shadow-premium">ENTER COMMAND CENTER</a>
             </motion.div>
           ) : (
             <button 
               onClick={promoteToAdmin}
               disabled={status === 'pending'}
               className="w-full btn-cta !py-10 flex items-center justify-center gap-6 disabled:opacity-50 !text-[13px] shadow-premium relative overflow-hidden group"
             >
               <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
               {status === 'pending' ? <Loader2 className="animate-spin" size={28} /> : <Key size={28} className="group-hover:rotate-12 transition-transform" />} 
               AUTHORIZE ADMINISTRATIVE RIGHTS
             </button>
           )}
        </div>
        
        <div className="mt-20 pt-10 border-t border-osg-navy/5 flex flex-col items-center gap-4">
           <div className="flex items-center gap-6">
              <Activity size={14} className="text-osg-gold" />
              <p className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.6em]">
                Security Protocol: Decommission terminal after successful escrow.
              </p>
           </div>
           <p className="text-[9px] font-black text-osg-navy/10 uppercase tracking-[0.4em]">Secure Escrow Kernel v12.4.1 // OSG Secure Systems</p>
        </div>
      </motion.div>
    </section>
  );
}

