'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  LayoutDashboard, 
  Map as ProjectsIcon, 
  FileText, 
  CreditCard, 
  MessageSquare, 
  Settings, 
  LogOut,
  ChevronRight,
  Loader2,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarItems = [
  { label: 'Overview', href: '/portal/dashboard', icon: LayoutDashboard },
  { label: 'Active Projects', href: '/portal/projects', icon: ProjectsIcon },
  { label: 'Documents', href: '/portal/documents', icon: FileText },
  { label: 'Invoices', href: '/portal/billing', icon: CreditCard },
  { label: 'Messages', href: '/portal/messages', icon: MessageSquare },
  { label: 'Settings', href: '/portal/settings', icon: Settings },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const { osgUser, loading, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!loading && (!osgUser || osgUser.role !== 'client')) {
      if (osgUser?.role === 'admin') {
        router.push('/admin/dashboard');
      } else {
        router.push('/login');
      }
    }
  }, [osgUser, loading, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  };

  if (loading || !osgUser || osgUser.role !== 'client') {
    return (
      <div className="min-h-screen bg-osg-navy flex items-center justify-center">
        <Loader2 className="animate-spin text-osg-gold" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfdfc] flex transition-colors duration-1000">
      {/* Sidebar - Desktop (Architectural Desk Motif) */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-osg-navy/5 flex-col py-10 px-0 fixed h-screen z-50 shadow-2xl shadow-osg-navy/5">
        <div className="mb-14 px-10">
            <Link href="/" className="inline-flex flex-col items-start leading-none group">
                <span className="font-serif font-black text-2xl tracking-widest text-osg-navy leading-none uppercase">CLIENT <span className="text-osg-gold">DESK</span></span>
                <div className="flex items-center gap-2 mt-3">
                    <div className="w-10 h-[1px] bg-osg-gold/40 transition-all group-hover:w-16"></div>
                    <span className="text-[9px] font-black tracking-[0.4em] text-osg-gold uppercase">Operational</span>
                </div>
            </Link>
        </div>

        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`flex items-center gap-5 py-5 px-10 transition-all duration-700 relative group ${
                  isActive 
                    ? 'text-osg-navy' 
                    : 'text-osg-navy/30 hover:text-osg-navy hover:bg-osg-cream/20'
                }`}
              >
                <div className={`w-8 h-8 flex items-center justify-center transition-all ${isActive ? 'bg-osg-navy text-osg-gold' : 'bg-transparent text-osg-navy/20 group-hover:text-osg-navy'}`}>
                    <item.icon size={16} />
                </div>
                <span className={`text-[11px] font-black uppercase tracking-[0.2em] transition-opacity ${isActive ? 'opacity-100' : 'opacity-60'}`}>{item.label}</span>
                {isActive && (
                    <motion.div 
                        layoutId="clientTab"
                        className="absolute right-0 w-1 h-6 bg-osg-gold rounded-full"
                    />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-8 border-t border-osg-navy/5 px-10">
            <div className="flex items-center gap-4 mb-10 group cursor-pointer">
                 <div className="w-12 h-12 bg-osg-cream flex items-center justify-center overflow-hidden border border-osg-navy/5 p-1 transition-transform group-hover:scale-105">
                    <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(osgUser.displayName || 'Client')}&background=0A1628&color=C9A84C&bold=true`} alt="Avatar" className="w-full h-full object-cover" />
                 </div>
                 <div className="overflow-hidden">
                    <p className="text-[11px] font-black text-osg-navy uppercase tracking-widest truncate">{osgUser.displayName || 'Principal User'}</p>
                    <p className="text-[8px] font-black text-osg-gold uppercase tracking-[0.3em] mt-1">Verified Partner</p>
                 </div>
            </div>
            
            <button 
                onClick={handleSignOut}
                className="w-full flex items-center justify-center gap-3 py-4 bg-osg-navy text-white hover:bg-osg-gold hover:text-osg-navy transition-all px-8 text-[9px] font-black uppercase tracking-[0.3em] shadow-xl shadow-osg-navy/10"
            >
                <LogOut size={14} /> Exit Workspace
            </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-72 flex flex-col min-h-screen bg-white">
        {/* Mobile Header */}
        <header className="lg:hidden h-20 bg-osg-navy border-b border-white/5 px-6 flex items-center justify-between sticky top-0 z-40">
            <Link href="/" className="flex flex-col items-start leading-tight">
                <span className="font-serif font-black text-xl text-white">OSG</span>
                <span className="text-[8px] font-bold text-osg-gold uppercase tracking-widest">Client Portal</span>
            </Link>
            <button 
                onClick={() => setMobileMenuOpen(true)}
                className="text-osg-gold"
            >
                <Menu size={24} />
            </button>
        </header>

        {/* Global Portal Header */}
        <header className="h-24 hidden lg:flex items-center justify-between px-16 border-b border-osg-navy/5 sticky top-0 z-30 bg-white/80 backdrop-blur-md">
           <div className="flex items-center gap-4">
              <nav className="flex items-center gap-4 text-[9px] font-black text-osg-navy uppercase tracking-[0.4em]">
                  <span className="opacity-30">Portfolio</span>
                  <ChevronRight size={12} className="opacity-10" />
                  <span className="opacity-30">Zenith Tower</span>
                  <ChevronRight size={12} className="opacity-10" />
                  <span className="text-osg-gold">Project Desk</span>
              </nav>
           </div>
           
           <div className="flex items-center gap-12">
              <div className="flex flex-col items-end gap-1">
                <span className="text-[8px] font-black text-osg-navy/30 uppercase tracking-[0.4em]">Live Operational Status</span>
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-osg-navy uppercase tracking-widest">Active Site Sync</span>
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-osg-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-osg-gold"></span>
                    </div>
                </div>
              </div>
           </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-10 lg:p-16 flex-1 max-w-[1600px] mx-auto w-full">
          {children}
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-osg-navy flex flex-col"
          >
            <div className="h-20 px-8 flex items-center justify-between border-b border-white/5">
                <span className="font-serif font-bold text-2xl text-white">OSG Portal</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-osg-gold">
                    <X size={28} />
                </button>
            </div>
            <nav className="flex-1 p-8 space-y-2">
                {sidebarItems.map((item) => (
                    <Link 
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-6 p-6 font-black uppercase tracking-widest text-xs ${
                            pathname === item.href ? 'text-osg-gold bg-white/5' : 'text-osg-slate'
                        }`}
                    >
                        <item.icon size={22} /> {item.label}
                    </Link>
                ))}
            </nav>
            <div className="p-8 border-t border-white/5">
                <button 
                    onClick={handleSignOut}
                    className="w-full p-6 text-osg-slate font-black uppercase text-xs tracking-widest flex items-center gap-6"
                >
                    <LogOut size={22} /> Sign Out
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
