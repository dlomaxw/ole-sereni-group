'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Database, 
  Settings, 
  LogOut,
  Loader2,
  Menu,
  X,
  Users,
  Bell,
  Package,
  Wrench,
  Megaphone,
  ClipboardList,
  Search,
  Command,
  Monitor
} from 'lucide-react';
import Link from 'next/link';

// Grouped Navigation Structure
const navSections = [
  { 
    label: 'Overview', 
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
      { label: 'Online Requests', icon: Monitor, href: '/admin/requests' },
    ] 
  },
  { 
    label: 'ERP Systems', 
    items: [
      { label: 'Leads & CRM', icon: Users, href: '/admin/erp/crm' },
      { label: 'Inventory Control', icon: Package, href: '/admin/erp/inventory' },
      { label: 'Financial Hub', icon: Database, href: '/admin/erp/finance' },
    ] 
  },
  { 
    label: 'Operations', 
    items: [
      { label: 'Service Centre', icon: Wrench, href: '/admin/service' },
      { label: 'Workshop Panel', icon: ClipboardList, href: '/admin/workshop' },
      { label: 'Staff Manager', icon: Users, href: '/admin/staff' },
    ] 
  },
  { 
    label: 'Marketing & Setup', 
    items: [
      { label: 'Campaign Manager', icon: Megaphone, href: '/admin/marketing' },
      { label: 'Brand Registry', icon: Briefcase, href: '/admin/brands' },
      { label: 'System Setup', icon: Settings, href: '/admin/setup' },
    ] 
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { osgUser, loading, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <div className="flex min-h-screen bg-[#0B1C2C] font-lato overflow-x-hidden">
      
      {/* 1. SINGLE PREMIUM SIDEBAR (Left) */}
      <aside className="hidden lg:flex w-72 bg-[#08121C] border-r border-white/5 flex-col fixed h-screen z-50">
          <div className="p-10 pb-12 flex items-center gap-4">
            <div className="w-12 h-12 bg-osg-gold rounded-2xl flex items-center justify-center text-[#0B1C2C] font-black font-sans text-2xl shadow-xl shadow-osg-gold/20">
               O
            </div>
            <div>
               <h1 className="text-white font-sans font-black text-sm uppercase tracking-widest leading-none">OSG Group</h1>
               <p className="text-[8px] text-white/20 uppercase tracking-[0.3em] mt-1.5 font-bold">Architectural Enterprise</p>
            </div>
         </div>

         <nav className="flex-1 px-5 space-y-7 overflow-y-auto custom-scroll pb-10">
            {navSections.map((section) => (
              <div key={section.label} className="space-y-3">
                <h3 className="px-3 text-[10px] font-black text-white/30 uppercase tracking-[0.18em]">{section.label}</h3>
                <div className="space-y-2">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
                    return (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold text-[12px] group ${
                          isActive 
                            ? 'bg-osg-gold text-osg-navy shadow-2xl shadow-osg-gold/10' 
                            : 'text-white/55 hover:text-white hover:bg-white/5'
                        }`}
                      >
                         <item.icon size={18} className={isActive ? 'text-osg-navy' : 'text-white/35 group-hover:text-osg-gold transition-colors'} />
                         <span className="uppercase tracking-[0.05em] leading-none">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
         </nav>

         <div className="p-10 border-t border-white/5 mt-auto bg-[#060D14]/50 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-10 h-10 rounded-xl bg-osg-gold/10 border border-osg-gold/20 flex items-center justify-center text-osg-gold text-[12px] font-black">
                  {osgUser.displayName?.charAt(0) || 'A'}
               </div>
               <div className="flex-1 min-w-0">
                  <p className="text-white text-[12px] font-black truncate uppercase tracking-tight">{osgUser.displayName || 'Admin'}</p>
                  <p className="text-white/20 text-[9px] font-bold truncate uppercase tracking-widest mt-0.5">{osgUser.email}</p>
               </div>
            </div>
            <button 
              onClick={handleSignOut}
              className="flex items-center gap-3 text-red-500/60 font-black text-[10px] uppercase tracking-[0.2em] hover:text-red-500 transition-colors"
            >
               <LogOut size={14} />
               <span>Logout System</span>
            </button>
         </div>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <button
            type="button"
            aria-label="Close admin navigation overlay"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative z-10 flex h-full w-[min(88vw,22rem)] flex-col bg-[#08121C] border-r border-white/10 shadow-2xl">
            <div className="p-6 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-osg-gold rounded-2xl flex items-center justify-center text-[#0B1C2C] font-black font-sans text-xl">
                  O
                </div>
                <div>
                  <h1 className="text-white font-sans font-black text-sm uppercase tracking-widest leading-none">OSG Group</h1>
                  <p className="text-[8px] text-white/25 uppercase tracking-[0.25em] mt-1.5 font-bold">Admin Console</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close admin navigation"
                onClick={() => setMobileOpen(false)}
                className="w-11 h-11 rounded-2xl bg-white/5 text-white flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-5 space-y-8">
              {navSections.map((section) => (
                <div key={section.label} className="space-y-3">
                  <h3 className="px-3 text-[9px] font-black text-white/20 uppercase tracking-[0.35em]">{section.label}</h3>
                  <div className="space-y-1.5">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold text-[11px] group ${
                            isActive
                              ? 'bg-osg-gold text-osg-navy'
                              : 'text-white/45 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <item.icon size={17} className={isActive ? 'text-osg-navy' : 'opacity-50'} />
                          <span className="uppercase tracking-wider">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

            <div className="p-5 border-t border-white/5">
              <button
                type="button"
                onClick={handleSignOut}
                className="w-full flex items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-4 text-red-400 font-black text-[10px] uppercase tracking-[0.2em]"
              >
                <LogOut size={14} />
                Logout System
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 lg:ml-72 flex flex-col min-h-screen min-w-0">
        {/* Enhanced Global Header */}
        <header className="min-h-20 lg:h-24 flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:px-12 py-4 bg-[#0B1C2C]/90 sticky top-0 z-40 backdrop-blur-xl border-b border-white/5">
           <div className="flex items-center gap-3 min-w-0 flex-1">
           <button
              type="button"
              aria-label="Open admin navigation"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-11 h-11 rounded-2xl bg-white/5 text-white flex items-center justify-center shrink-0"
           >
              <Menu size={20} />
           </button>
           <div className="flex-1 max-w-md relative group hidden sm:block">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-osg-gold transition-colors" />
              <input 
                type="text" 
                placeholder="GLOBAL SEARCH (LEADS, INVENTORY, ORDERS)..."
                className="w-full bg-white/5 border border-white/5 focus:border-osg-gold/30 py-3.5 pl-14 pr-6 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white outline-none transition-all placeholder:text-white/10"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-lg border border-white/5 text-[8px] font-black text-white/20 pointer-events-none">
                <Command size={10} /> K
              </div>
           </div>
           </div>
           
           <div className="flex items-center gap-3 sm:gap-5 lg:gap-8 shrink-0">
              <button className="hidden md:flex bg-osg-gold text-osg-navy px-5 lg:px-8 py-3.5 rounded-2xl text-[9px] lg:text-[10px] font-black uppercase tracking-[0.18em] hover:bg-white hover:shadow-2xl transition-all active:scale-95">
                 New Campaign
              </button>
              
              <div className="flex items-center gap-4 lg:gap-7">
                 <div className="relative cursor-pointer group">
                    <Bell size={22} className="text-white/20 group-hover:text-osg-gold transition-colors" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-osg-gold text-osg-navy text-[9px] font-black flex items-center justify-center rounded-full border-2 border-[#0B1C2C] shadow-lg">3</span>
                 </div>
                 
                 <div className="flex items-center gap-3 lg:gap-5 pl-4 lg:pl-8 border-l border-white/5 group cursor-pointer min-w-0">
                    <div className="hidden sm:block text-right">
                       <p className="text-[12px] font-black text-white group-hover:text-osg-gold transition-colors uppercase tracking-tight font-sans">{osgUser?.displayName?.split(' ')[0] || 'Admin'}</p>
                       <p className="text-[8px] font-bold text-white/20 uppercase tracking-[0.3em] mt-0.5">Principal</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-osg-gold text-[14px] font-black shadow-2xl group-hover:border-osg-gold/40 transition-all font-sans">
                       {osgUser?.displayName?.charAt(0) || 'A'}
                    </div>
                 </div>
              </div>
           </div>
        </header>

        {/* Dynamic Content */}
        <main className="admin-content p-4 sm:p-6 lg:p-8 xl:p-10 flex-grow bg-[#F8F9FB] lg:rounded-tl-[2rem] shadow-inner shadow-black/20 min-w-0">
          {children}
        </main>
      </div>
      
    </div>
  );
}

