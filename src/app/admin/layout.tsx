'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Database, 
  FileEdit, 
  Settings, 
  LogOut,
  ChevronRight,
  Loader2,
  Menu,
  X,
  Activity, 
  Plus,
  Search,
  Users,
  Bell,
  Mail,
  Smartphone,
  Command,
  Monitor
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const adminSidebarItems = [
  { label: 'Overview', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Project Pipeline', href: '/admin/projects', icon: Briefcase },
  { label: 'Lead Management', href: '/admin/leads', icon: Users },
  { label: 'Cost Library', href: '/admin/estimator-config', icon: Database },
  { label: 'Blog Editor', href: '/admin/blog', icon: FileEdit },
  { label: 'Site Monitoring', href: '/admin/analytics', icon: Activity },
  { label: 'System Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { osgUser, loading, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!loading && (!osgUser || osgUser.role !== 'admin')) {
      if (osgUser?.role === 'client') {
        router.push('/portal/dashboard');
      } else {
        router.push('/login');
      }
    }
  }, [osgUser, loading, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  };

  if (loading || !osgUser || osgUser.role !== 'admin') {
    return (
      <div className="min-h-screen bg-osg-navy flex items-center justify-center">
        <Loader2 className="animate-spin text-osg-gold" size={40} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f0f2f1]">
      {/* Admin Sidebar - Desktop (Command Center Motif) */}
      <aside className="hidden lg:flex w-80 bg-osg-navy flex-col py-10 px-0 fixed h-screen z-50 border-r border-white/5">
        <div className="mb-10 px-8">
            <Link href="/" className="inline-flex flex-col items-start leading-none group">
                <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-osg-gold rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform">
                        <Monitor size={22} className="text-osg-navy" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="font-serif font-black text-lg tracking-tight text-white leading-none uppercase">COMMAND <span className="text-osg-gold">CENTER</span></span>
                        <span className="text-xs font-semibold tracking-widest text-white/30 uppercase">Industrial Control</span>
                    </div>
                </div>
            </Link>
        </div>

        <nav className="flex-1 space-y-0.5 overflow-y-auto pr-0 custom-scrollbar">
          {adminSidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 py-4 px-8 transition-all group relative ${
                  isActive ? 'bg-white/5 text-osg-gold' : 'text-white/40 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {isActive && (
                    <motion.div 
                        layoutId="adminTab"
                        className="absolute left-0 w-1 h-8 bg-osg-gold"
                    />
                )}
                <item.icon size={20} className={isActive ? 'text-osg-gold' : 'opacity-50 group-hover:opacity-100 transition-all'} />
                <span className={`text-xs font-bold uppercase tracking-widest leading-none ${isActive ? 'opacity-100' : 'opacity-70'}`}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t border-white/10 px-8 space-y-5">
            <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 p-0.5 shrink-0">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${osgUser.displayName || 'Admin'}`} alt="Admin" className="w-full h-full rounded-full grayscale hover:grayscale-0 transition-all" />
                 </div>
                 <div className="overflow-hidden">
                    <p className="text-sm font-bold text-white truncate">{osgUser.displayName || 'Principal Admin'}</p>
                    <p className="text-xs text-osg-gold/80 uppercase tracking-widest truncate">Administrator</p>
                 </div>
            </div>
            <button 
                onClick={handleSignOut}
                className="w-full py-3 text-xs font-bold text-white/30 hover:text-red-400 uppercase tracking-widest flex items-center gap-3 transition-colors border-t border-white/5 pt-5"
            >
                <LogOut size={16} /> Terminate Session
            </button>
        </div>
      </aside>

      {/* Main Admin Area */}
      <div className="flex-1 lg:ml-80 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden h-20 bg-white border-b border-osg-navy/10 px-6 flex items-center justify-between sticky top-0 z-40">
            <Link href="/" className="flex flex-col items-start leading-tight">
                <span className="font-serif font-bold text-2xl text-osg-navy">OSG</span>
                <span className="text-[8px] font-black text-osg-gold uppercase tracking-widest">Architectural CMS</span>
            </Link>
            <button 
                onClick={() => setMobileMenuOpen(true)}
                className="text-osg-navy"
            >
                <Menu size={24} />
            </button>
        </header>

        {/* Global Admin Header */}
        <header className="h-20 hidden lg:flex items-center justify-between px-10 bg-white/90 backdrop-blur-md border-b border-osg-navy/5 sticky top-0 z-40">
           <div className="flex items-center gap-8 flex-1">
              {/* Central Search Bar */}
              <div className="relative w-full max-w-lg group">
                <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-osg-navy/30 group-focus-within:text-osg-navy transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search operations, tasks, or metrics..." 
                    className="w-full bg-gray-100 border-2 border-transparent py-3 pl-12 pr-14 rounded-2xl text-sm font-medium focus:bg-white focus:border-osg-navy/10 outline-none transition-all placeholder:text-osg-navy/30"
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-20 group-focus-within:opacity-0 transition-opacity">
                    <Command size={12} />
                    <span className="text-xs font-bold">F</span>
                </div>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <button className="p-3 bg-gray-100 text-osg-navy/50 hover:bg-osg-navy hover:text-white rounded-xl transition-all relative">
                <Bell size={18} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-osg-gold rounded-full border-2 border-white" />
              </button>
              <button className="p-3 bg-gray-100 text-osg-navy/50 hover:bg-osg-navy hover:text-white rounded-xl transition-all">
                <Mail size={18} />
              </button>
              
              <div className="w-px h-8 bg-osg-navy/10 mx-1" />

              <button className="flex items-center gap-3 bg-osg-navy text-white py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-osg-gold hover:text-osg-navy transition-all">
                <Plus size={16} /> Add project
              </button>
           </div>
        </header>

        {/* Admin Content */}
        <main className="p-8 lg:p-12 flex-1 w-full">
          {children}
        </main>
      </div>

      {/* Mobile Admin Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            className="fixed inset-0 z-50 bg-white flex flex-col"
          >
            <div className="h-20 px-8 flex items-center justify-between border-b border-osg-navy/10">
                <span className="font-serif font-bold text-2xl text-osg-navy">OSG CMS</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-osg-navy">
                    <X size={28} />
                </button>
            </div>
            <nav className="flex-1 p-8 space-y-2">
                {adminSidebarItems.map((item) => (
                    <Link 
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-6 p-6 font-black uppercase tracking-widest text-xs ${
                            pathname === item.href ? 'text-white bg-osg-navy' : 'text-osg-navy/60'
                        }`}
                    >
                        <item.icon size={22} className={pathname === item.href ? 'text-osg-gold' : ''} /> {item.label}
                    </Link>
                ))}
            </nav>
            <div className="p-8 border-t border-osg-navy/10">
                <button 
                    onClick={handleSignOut}
                    className="w-full p-6 text-osg-navy/60 font-black uppercase text-xs tracking-widest flex items-center gap-6 border border-osg-navy/10"
                >
                    <LogOut size={22} /> Terminate Session
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
