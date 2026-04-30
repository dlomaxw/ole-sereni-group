'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle, ShieldCheck, Activity, ArrowRight, LayoutDashboard, UserCircle } from 'lucide-react';

const serviceLinks = [
  { label: 'Curtain Wall Systems', href: '/products/curtain-wall' },
  { label: 'Structural Glazing', href: '/products/glass-systems' },
  { label: 'Properties Portfolio', href: '/properties' },
  { label: 'Specialized Systems', href: '/products/specialized-systems' },
];

const companyLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Sector Portfolio', href: '/projects' },
  { label: 'Technical Brief', href: '/brief' },
  { label: 'Resource Library', href: '/resources/downloads' },
];

export default function Footer() {
  const pathname = usePathname();

  const isHiddenRoute = pathname === '/login' || pathname?.startsWith('/portal') || pathname?.startsWith('/admin');

  if (isHiddenRoute) return null;

  return (
    <footer className="bg-osg-navy text-white pt-24 lg:pt-36 pb-10 lg:pb-12 overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />

      <div className="container-clean relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10">
            <div className="space-y-4 max-w-full">
              <span className="text-4xl lg:text-5xl font-black uppercase leading-none tracking-tighter font-sans">
                Ole Sereni <br />
                <span className="text-osg-gold">Group</span>
              </span>
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-osg-gold"></div>
                <span className="text-[9px] sm:text-[10px] font-black text-osg-gold uppercase tracking-[0.35em] sm:tracking-[0.6em]">
                   Engineering Identity
                </span>
              </div>
            </div>
            
            <p className="text-lg text-white/40 font-medium leading-relaxed max-w-sm font-sans">
              Defining the East African skyline through specialist architectural systems and structural resilience.
            </p>

            <div className="pt-4">
              <Link href="/quote?mode=brief" className="btn-cta !px-8 sm:!px-12 py-4 sm:py-5 !text-[9px]">
                INITIALIZE TECHNICAL BRIEF
              </Link>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12">
            <div className="space-y-6 lg:space-y-8">
              <h4 className="text-[11px] font-black text-osg-gold uppercase tracking-[0.35em]">Directory</h4>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 lg:space-y-8">
              <h4 className="text-[11px] font-black text-osg-gold uppercase tracking-[0.35em]">Systems</h4>
              <ul className="space-y-4">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Internal Access - COMMAND CENTER */}
          <div className="lg:col-span-3 space-y-10">
            <div className="bg-white/5 p-6 sm:p-8 lg:p-9 rounded-[1.75rem] border border-white/10 space-y-6 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-4 relative z-10">
                <ShieldCheck size={20} className="text-osg-gold" />
                <h4 className="text-[11px] font-black uppercase tracking-[0.35em]">Operations</h4>
              </div>
              
              <div className="grid gap-3 relative z-10">
                <Link href="/admin/dashboard" className="flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 text-osg-navy shadow-xl transition-all hover:bg-osg-gold">
                  <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                    <LayoutDashboard size={16} />
                    Admin Hub
                  </span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/portal/dashboard" className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white transition-all hover:border-osg-gold hover:text-osg-gold">
                  <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                    <UserCircle size={16} />
                    Client Portal
                  </span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="pt-4 border-t border-white/5 relative z-10 flex items-center gap-4 justify-center">
                 <Activity size={14} className="text-green-500 animate-pulse" />
                 <p className="text-[9px] font-black uppercase tracking-[0.2em] text-green-500/80">
                   Secure Tunnel Active
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Bottom */}
        <div className="mt-20 lg:mt-28 pt-8 lg:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] font-bold uppercase tracking-widest text-white/20 text-center md:text-left">
             Forest Mall, Block A, Suite 48, Kampala
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
             <div className="text-center sm:text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                  STRUCTURAL INTEGRITY DEFINED.
                </p>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/10 mt-1">SECURITY PROTOCOL // 256.OSG.V4.0</p>
             </div>
             <a href="https://wa.me/256767358604" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-osg-gold hover:border-osg-gold transition-all shadow-xl">
                <MessageCircle size={20} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

