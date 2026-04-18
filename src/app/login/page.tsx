'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);
  
  const { osgUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && osgUser) {
      if (osgUser.role === 'admin') {
        router.push('/admin/dashboard');
      } else {
        router.push('/portal/dashboard');
      }
    }
  }, [osgUser, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsPending(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError('Invalid credentials. Please try again.');
      setIsPending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-osg-navy flex items-center justify-center">
        <Loader2 className="animate-spin text-osg-gold" size={40} />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-osg-navy flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-osg-gold/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-12 shadow-3xl overflow-hidden group"
      >
        {/* Subtle architectural detail */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-osg-gold/[0.03] rounded-full translate-x-12 -translate-y-12 transition-transform duration-1000 group-hover:scale-110"></div>
        
          <Link href="/" className="inline-flex flex-col items-center mb-8 hover:scale-105 transition-transform duration-500">
            <span className="font-serif font-black text-4xl tracking-widest text-white leading-none">OSG</span>
            <span className="text-[9px] font-black tracking-[0.4em] text-osg-gold uppercase mt-2">Ole Sereni Group</span>
          </Link>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-[1px] bg-osg-gold/30"></div>
            <h1 className="text-display-xs text-white uppercase tracking-widest font-serif italic">Identity Services</h1>
            <p className="text-osg-slate text-[9px] font-black uppercase tracking-[0.5em]">Authorized Access Only</p>
          </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-osg-slate group-focus-within:text-osg-gold transition-all duration-300" size={16} />
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Architectural ID (Email)"
                className="w-full bg-white/5 border border-white/10 py-5 pr-5 pl-14 text-white outline-none focus:border-osg-gold focus:bg-white/[0.07] transition-all font-medium text-sm placeholder:text-osg-slate/50"
              />
            </div>
            
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-osg-slate group-focus-within:text-osg-gold transition-all duration-300" size={16} />
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Passphrase"
                className="w-full bg-white/5 border border-white/10 py-5 pr-5 pl-14 text-white outline-none focus:border-osg-gold focus:bg-white/[0.07] transition-all font-medium text-sm placeholder:text-osg-slate/50"
              />
            </div>
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-red-400 text-[10px] font-bold uppercase tracking-widest text-center"
            >
              {error}
            </motion.p>
          )}

          <button 
            type="submit"
            disabled={isPending}
            className="w-full btn-primary py-5 group flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isPending ? <Loader2 className="animate-spin" size={18} /> : (
              <>
                Unlock Workspace <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center pt-8 border-t border-white/5">
          <p className="text-osg-slate text-[10px] leading-relaxed uppercase tracking-[0.2em] font-medium">
            Project portals are restricted to vetted partners and project owners. 
            <br />
            <Link href="/brief" className="text-osg-gold font-black hover:underline mt-2 inline-block">Request a New Project Workspace</Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
