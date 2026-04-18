'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, Loader2, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    <main className="min-h-screen flex">
      {/* ── Left Panel: Brand / Imagery ────────────────────────────── */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] relative flex-col overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/login-bg.jpg"
          alt="Ole Sereni Group architectural work"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-osg-navy/75" />
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-14">
          {/* Top: Back to site */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-osg-gold transition-colors duration-300 text-[10px] font-bold uppercase tracking-[0.3em] font-mono w-fit"
          >
            <span className="w-6 h-px bg-current inline-block" />
            Ole Sereni Group
          </Link>

          {/* Middle: Brand mark */}
          <div className="flex flex-col gap-6">
            <p className="text-system-label">Client Portal Access</p>
            <h1
              className="font-serif font-black italic text-white leading-[0.9]"
              style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)' }}
            >
              Your Projects.
              <br />
              <span className="text-osg-gold">Your Portal.</span>
            </h1>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-sans">
              Securely access your project workspace, track progress, manage documents, and collaborate with the OSG team — all in one place.
            </p>

            {/* Stat bar */}
            <div className="flex gap-10 mt-4 pt-8 border-t border-white/10">
              {[
                { value: '200+', label: 'Projects Delivered' },
                { value: '15+', label: 'Years Experience' },
                { value: '98%', label: 'Client Satisfaction' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-osg-gold font-black text-2xl font-sans">{s.value}</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-widest font-mono mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Legal */}
          <p className="text-white/25 text-[10px] font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Ole Sereni Group Ltd. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── Right Panel: Form ──────────────────────────────────────── */}
      <div className="w-full lg:w-1/2 xl:w-[45%] flex flex-col bg-osg-creme">
        {/* Mobile: back link */}
        <div className="lg:hidden px-8 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-osg-slate hover:text-osg-navy transition-colors text-[10px] font-bold uppercase tracking-[0.3em] font-mono"
          >
            <span className="w-6 h-px bg-current inline-block" />
            Back to site
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-8 py-16 sm:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm"
          >
            {/* Brand mark */}
            <Link href="/" className="inline-flex flex-col mb-12 group">
              <span className="font-serif font-black text-5xl tracking-widest text-osg-navy leading-none group-hover:text-osg-gold transition-colors duration-500">
                OSG
              </span>
              <span className="text-[9px] font-black tracking-[0.4em] text-osg-gold uppercase mt-2 font-mono">
                Ole Sereni Group
              </span>
            </Link>

            {/* Heading */}
            <div className="mb-10">
              <h2 className="font-sans font-black text-osg-navy text-2xl uppercase tracking-tight leading-tight">
                Portal Sign In
              </h2>
              <p className="text-osg-slate text-sm mt-2 leading-relaxed">
                Authorized clients and project owners only.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-0">
              {/* Email field */}
              <div className="group border-b border-osg-navy/15 focus-within:border-osg-gold transition-colors duration-300 pb-1 mb-8">
                <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-osg-slate mb-3 font-mono">
                  Email Address
                </label>
                <div className="flex items-center gap-3">
                  <Mail
                    size={14}
                    className="text-osg-navy/30 group-focus-within:text-osg-gold transition-colors duration-300 shrink-0"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent outline-none text-osg-navy font-medium text-sm placeholder:text-osg-navy/25 py-1"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="group border-b border-osg-navy/15 focus-within:border-osg-gold transition-colors duration-300 pb-1 mb-10">
                <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-osg-slate mb-3 font-mono">
                  Password
                </label>
                <div className="flex items-center gap-3">
                  <Lock
                    size={14}
                    className="text-osg-navy/30 group-focus-within:text-osg-gold transition-colors duration-300 shrink-0"
                  />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your passphrase"
                    className="flex-1 bg-transparent outline-none text-osg-navy font-medium text-sm placeholder:text-osg-navy/25 py-1"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-osg-navy/30 hover:text-osg-gold transition-colors duration-300"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-6 font-mono"
                >
                  {error}
                </motion.p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full btn-primary justify-center py-5 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isPending ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    Access Workspace
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform duration-300"
                      size={16}
                    />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-osg-navy/8">
              <p className="text-osg-slate text-[11px] leading-relaxed">
                Don&apos;t have access?{' '}
                <Link
                  href="/brief"
                  className="text-osg-gold font-bold hover:underline underline-offset-2"
                >
                  Request a Project Workspace
                </Link>
              </p>
              <p className="text-osg-navy/25 text-[10px] uppercase tracking-widest font-mono mt-4">
                Restricted to vetted partners &amp; clients
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
