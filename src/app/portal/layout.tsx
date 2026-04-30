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
    <div className="min-h-screen bg-[#F8F9FB] flex transition-colors duration-1000">
      {/* Sidebar - Desktop (Luxury Concierge Desk) */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-osg-navy/5 flex-col py-12 px-0 fixed h-screen z-50 shadow-2xl shadow-osg-navy/5">
        <div className="mb-16 px-12">
            <Link href="/" className="inline-flex flex-col items-start leading-none group">
                <span className="font-sans font-black text-2xl tracking-widest text-osg-navy leading-none uppercase">CLIENT <span className="text-osg-gold">DESK</span></span>
                <div className="flex items-center gap-2 mt-4">
                    <div className="w-12 h-[1px] bg-osg-gold/40 transition-all group-hover:w-20"></div>
                    <span className="text-[8px] font-black tracking-[0.4em] text-osg-gold uppercase">Operational</span>
                </div>
            </Link>
        </div>

        <nav className="flex-1 space-y-1.5">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`flex items-center gap-6 py-5 px-12 transition-all duration-700 relative group ${
                  isActive 
                    ? 'text-osg-navy bg-[#F8F9FB]' 
                    : 'text-osg-navy/20 hover:text-osg-navy hover:bg-[#F8F9FB]/50'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? 'bg-osg-navy text-osg-gold shadow-lg shadow-osg-navy/10' : 'bg-transparent text-osg-navy/20 group-hover:text-osg-navy'}`}>
                    <item.icon size={16} />
                </div>
                <span className={`text-[11px] font-black uppercase tracking-[0.2em] transition-opacity ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>{item.label}</span>
                {isActive && (
                    <motion.div 
                        layoutId="clientTab"
                        className="absolute right-0 w-1 h-8 bg-osg-gold rounded-l-full shadow-lg"
                    />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 pt-10 border-t border-osg-navy/5 px-12">
            <div className="flex items-center gap-5 mb-10 group cursor-pointer">
                 <div className="w-12 h-12 bg-[#F8F9FB] rounded-2xl flex items-center justify-center overflow-hidden border border-osg-navy/5 p-1 transition-all group-hover:border-osg-gold/30 group-hover:scale-105 shadow-sm">
                    <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(osgUser.displayName || 'Client')}&background=0B1C2C&color=C8A96A&bold=true`} alt="Avatar" className="w-full h-full object-cover rounded-xl" />
                 </div>
                 <div className="overflow-hidden">
                    <p className="text-[11px] font-black text-osg-navy uppercase tracking-widest truncate font-sans">{osgUser.displayName || 'Principal User'}</p>
                    <p className="text-[8px] font-black text-osg-gold uppercase tracking-[0.3em] mt-1.5">Verified Partner</p>
                 </div>
            </div>
            
            <button 
                onClick={handleSignOut}
                className="w-full flex items-center justify-center gap-3 py-5 bg-osg-navy text-white hover:bg-white hover:text-osg-navy border border-transparent hover:border-osg-navy/10 transition-all px-8 text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-osg-navy/10 rounded-2xl"
            >
                <LogOut size={16} /> EXIT DESK
            </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-72 flex flex-col min-h-screen bg-white">
        {/* Mobile Header */}
        <header className="lg:hidden h-20 bg-osg-navy border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-40">
            <Link href="/" className="flex flex-col items-start leading-tight">
                <span className="font-sans font-black text-xl text-white">OSG</span>
                <span className="text-[8px] font-bold text-osg-gold uppercase tracking-widest">Client Desk</span>
            </Link>
            <button 
                onClick={() => setMobileMenuOpen(true)}
                className="text-osg-gold"
            >
                <Menu size={26} />
            </button>
        </header>

        {/* Global Portal Header */}
        <header className="h-28 hidden lg:flex items-center justify-between px-20 border-b border-osg-navy/5 sticky top-0 z-30 bg-white/80 backdrop-blur-xl">
           <div className="flex items-center gap-6">
              <nav className="flex items-center gap-5 text-[10px] font-black text-osg-navy uppercase tracking-[0.4em] font-sans">
                  <span className="opacity-20">Portfolio</span>
                  <ChevronRight size={14} className="opacity-10" />
                  <span className="opacity-20">Client Hub</span>
                  <ChevronRight size={14} className="opacity-10" />
                  <span className="text-osg-gold">Operations Workspace</span>
              </nav>
           </div>
           
           <div className="flex items-center gap-16">
              <div className="flex flex-col items-end gap-2">
                <span className="text-[9px] font-black text-osg-navy/20 uppercase tracking-[0.4em]">Operational Status</span>
                <div className="flex items-center gap-4">
                    <span className="text-[11px] font-black text-osg-navy uppercase tracking-[0.2em] font-sans">Active Site Synchronized</span>
                    <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-osg-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-osg-gold"></span>
                    </div>
                </div>
              </div>
           </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-12 lg:p-20 flex-1 max-w-[1720px] mx-auto w-full bg-[#F8F9FB] rounded-tl-[5rem] shadow-inner shadow-osg-navy/5">
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
                <span className="font-sans font-bold text-2xl text-white">OSG Portal</span>
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

