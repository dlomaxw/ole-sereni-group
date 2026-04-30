'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  KeyRound,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import Link from 'next/link';

type AccessMode = 'client' | 'admin';

const accessPanels = {
  client: {
    label: 'Client Portal',
    title: 'Project Workspace',
    eyebrow: 'Client Access',
    description: 'Secure access for project owners to review milestones, billing, documents, and field communication.',
    emailPlaceholder: 'Client email address',
    passwordPlaceholder: 'Client passphrase',
    button: 'Enter Client Portal',
    href: '/portal/dashboard',
    icon: UserRound,
    shell: 'bg-white text-osg-navy',
    panel: 'bg-white border-osg-navy/10 text-osg-navy',
    accent: 'text-osg-gold',
    buttonClass: 'btn-cta',
  },
  admin: {
    label: 'Admin Console',
    title: 'Command Center',
    eyebrow: 'Internal Operations',
    description: 'Restricted OSG staff access for leads, inventory, finance, campaigns, service operations, and system setup.',
    emailPlaceholder: 'Admin email address',
    passwordPlaceholder: 'Admin passphrase',
    button: 'Unlock Admin Console',
    href: '/admin/dashboard',
    icon: ShieldCheck,
    shell: 'bg-[#07131F] text-white',
    panel: 'bg-[#07131F] border-white/10 text-white',
    accent: 'text-osg-gold',
    buttonClass: 'bg-osg-gold text-osg-navy hover:bg-white',
  },
} satisfies Record<AccessMode, {
  label: string;
  title: string;
  eyebrow: string;
  description: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  button: string;
  href: string;
  icon: typeof UserRound;
  shell: string;
  panel: string;
  accent: string;
  buttonClass: string;
}>;

function AccessLoginPanel({ mode }: { mode: AccessMode }) {
  const config = accessPanels[mode];
  const Icon = config.icon;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setIsPending(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: unknown) {
      const message = err instanceof FirebaseError && err.code === 'auth/too-many-requests'
        ? 'Access temporarily limited. Try again shortly.'
        : 'Invalid credentials. Please try again.';
      setError(message);
      setIsPending(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-3xl border p-5 shadow-2xl sm:p-6 lg:p-7 ${config.panel}`}
    >
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.04] pointer-events-none" />
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-osg-gold/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col">
        <header className="space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 space-y-2">
              <span className={`block text-[9px] font-black uppercase tracking-[0.28em] sm:tracking-[0.35em] ${config.accent}`}>
                {config.eyebrow}
              </span>
              <h1 className="text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                {config.title}
              </h1>
            </div>
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl sm:h-14 sm:w-14 ${mode === 'client' ? 'bg-osg-navy text-osg-gold' : 'bg-white/5 text-osg-gold border border-white/10'}`}>
              <Icon size={24} />
            </div>
          </div>

          <p className={`max-w-md text-sm leading-relaxed sm:text-[15px] ${mode === 'client' ? 'text-osg-navy/60' : 'text-white/55'}`}>
            {config.description}
          </p>
        </header>

        <div className={`my-6 grid grid-cols-1 gap-4 border-y py-4 sm:grid-cols-2 ${mode === 'client' ? 'border-osg-navy/10' : 'border-white/10'}`}>
          <div className="space-y-1">
            <p className={`text-[9px] font-black uppercase tracking-[0.25em] ${mode === 'client' ? 'text-osg-navy/35' : 'text-white/25'}`}>
              Destination
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest sm:text-[11px]">{config.label}</p>
          </div>
          <div className="space-y-1">
            <p className={`text-[9px] font-black uppercase tracking-[0.25em] ${mode === 'client' ? 'text-osg-navy/35' : 'text-white/25'}`}>
              Protocol
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest sm:text-[11px]">
              {mode === 'client' ? 'Partner Verified' : 'Role Restricted'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <label className="relative block group">
              <span className={`absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl border ${mode === 'client' ? 'border-osg-navy/10 bg-white text-osg-gold' : 'border-white/10 bg-osg-navy text-osg-gold'}`}>
                <Mail size={15} />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={config.emailPlaceholder}
                aria-label={config.emailPlaceholder}
                className={`h-12 w-full rounded-2xl border py-3 pl-14 pr-5 text-sm font-bold outline-none transition-all sm:h-[52px] ${
                  mode === 'client'
                    ? 'bg-white border-osg-navy/15 text-osg-navy placeholder:text-osg-navy/45 focus:border-osg-gold focus:bg-osg-bg'
                    : 'bg-white/[0.08] border-white/15 text-white placeholder:text-white/50 focus:border-osg-gold focus:bg-white/[0.12]'
                }`}
              />
            </label>

            <label className="relative block group">
              <span className={`absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl border ${mode === 'client' ? 'border-osg-navy/10 bg-white text-osg-gold' : 'border-white/10 bg-osg-navy text-osg-gold'}`}>
                <Lock size={15} />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={config.passwordPlaceholder}
                aria-label={config.passwordPlaceholder}
                className={`h-12 w-full rounded-2xl border py-3 pl-14 pr-5 text-sm font-bold outline-none transition-all sm:h-[52px] ${
                  mode === 'client'
                    ? 'bg-white border-osg-navy/15 text-osg-navy placeholder:text-osg-navy/45 focus:border-osg-gold focus:bg-osg-bg'
                    : 'bg-white/[0.08] border-white/15 text-white placeholder:text-white/50 focus:border-osg-gold focus:bg-white/[0.12]'
                }`}
              />
            </label>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-osg-red/20 bg-osg-red/10 px-4 py-3 text-center text-[10px] font-black uppercase tracking-widest text-osg-red"
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className={`flex min-h-12 w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-center text-[10px] font-black uppercase tracking-[0.22em] transition-all hover:scale-[1.01] disabled:opacity-50 ${config.buttonClass}`}
          >
            {isPending ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <>
                {config.button}
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default function LoginPage() {
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

  if (loading) {
    return (
      <div className="min-h-screen bg-osg-navy flex items-center justify-center">
        <Loader2 className="animate-spin text-osg-gold" size={40} />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-osg-navy px-4 py-8 sm:px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.04] pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-osg-gold/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1280px] flex-col">
        <header className="flex flex-col gap-5 pb-6 sm:flex-row sm:items-center sm:justify-between lg:pb-7">
          <Link href="/" className="inline-flex items-center gap-5 w-fit" aria-label="Ole Sereni Group home">
            <span className="font-sans text-4xl font-black leading-none tracking-tight text-white sm:text-5xl">OSG</span>
            <span className="hidden sm:block border-l border-white/10 pl-5 text-[9px] font-black tracking-[0.45em] text-osg-gold uppercase">
              Ole Sereni Group
            </span>
          </Link>

          <Link
            href="/brief"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/60 transition-all hover:border-osg-gold hover:text-osg-gold"
          >
            <KeyRound size={14} />
            Request Workspace
          </Link>
        </header>

        <section className="mb-6 max-w-3xl space-y-4 lg:mb-7">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-osg-gold/50" />
            <span className="text-[10px] font-black uppercase tracking-[0.45em] text-osg-gold">
              Authorized Access
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Choose Your <span className="text-osg-gold">Gateway.</span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
            Client and administrator access are separated into distinct workspaces. Credentials are still verified by the secure OSG identity layer.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <AccessLoginPanel mode="client" />
          <AccessLoginPanel mode="admin" />
        </div>

        <footer className="pt-8 text-center text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
          Secure access is role enforced after authentication.
        </footer>
      </div>
    </main>
  );
}
