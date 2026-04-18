'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle, ShieldCheck, Lock } from 'lucide-react';

const serviceLinks = [
  { label: 'Curtain Wall Systems', href: '/services/aluminium-glass' },
  { label: 'Structural Glazing', href: '/services/structural-glazing' },
  { label: 'Acoustic Assemblies', href: '/services/acoustic' },
  { label: 'Technical Finishing', href: '/services/finishing' },
];

const companyLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Sector Portfolio', href: '/projects' },
  { label: 'Technical Blog', href: '/blog' },
  { label: 'Resource Library', href: '/resources' },
];

export default function Footer() {
  const pathname = usePathname();

  // Hide Footer on Login and Portal pages to avoid branding clash
  const isHiddenRoute = pathname === '/login' || pathname?.startsWith('/portal') || pathname?.startsWith('/admin');

  if (isHiddenRoute) return null;

  return (
    <footer className="bg-osg-navy text-white pt-48 pb-24 overflow-hidden">
      <div className="container-osg relative">
        {/* Large Architectural Watermark */}
        <div className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden h-full">
          <span className="text-[25vw] font-serif font-black text-white/[0.03] leading-none uppercase -translate-y-1/3 translate-x-1/4 inline-block transform -rotate-12 blur-[2px]">
            OSG
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex flex-col items-start gap-2">
              <span className="font-serif font-black text-5xl tracking-tight uppercase leading-[0.85] italic">
                Ole Sereni <br />
                <span className="text-osg-gold drop-shadow-2xl">Group</span>
              </span>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-[1px] bg-osg-gold/30"></div>
                <span className="text-[10px] font-black text-osg-gold/60 uppercase tracking-[0.6em]">
                  Engineering Identity
                </span>
              </div>
            </div>
            
            <p className="text-lg text-white/40 leading-relaxed max-w-sm">
              Defining the East African skyline through specialist architectural systems and precision-engineered building envelopes.
            </p>

            <div className="flex gap-4 pt-4">
              <Link href="/quote" className="btn-primary !rounded-none py-5 px-8">
                Initialize Project Review
              </Link>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12">
            <div className="space-y-10">
              <h4 className="text-[12px] font-serif font-bold text-osg-gold uppercase tracking-[0.4em]">Directory</h4>
              <ul className="space-y-6">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-10">
              <h4 className="text-[12px] font-serif font-bold text-osg-gold uppercase tracking-[0.4em]">Systems</h4>
              <ul className="space-y-6">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Internal Access - COMMAND CENTER */}
          <div className="lg:col-span-3 space-y-10">
            <div className="relative bg-white/5 p-8 border border-white/10 space-y-8 backdrop-blur-md group overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-osg-gold/30"></div>
              
              <div className="flex items-center gap-3 relative z-10">
                <ShieldCheck size={16} className="text-osg-gold animate-pulse" />
                <h4 className="text-[12px] font-serif font-bold uppercase tracking-[0.4em]">Operational Access</h4>
              </div>
              
              <div className="space-y-4 relative z-10">
                <Link 
                  href="/admin/dashboard" 
                  className="flex items-center justify-between w-full p-5 bg-white text-osg-navy text-[10px] font-black uppercase tracking-widest hover:bg-osg-gold transition-all duration-500 hover:scale-[1.02]"
                >
                  Admin Command <Lock size={12} className="opacity-40" />
                </Link>
                <Link 
                  href="/portal/dashboard" 
                  className="flex items-center justify-between w-full p-5 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-500 hover:scale-[1.02]"
                >
                  Client Portal <ArrowUpRight size={12} className="opacity-40" />
                </Link>
              </div>

              <div className="pt-4 border-t border-white/5 relative z-10">
                <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/20 leading-relaxed text-center italic">
                  Secure 256-bit encrypted operational tunnel. Internal use only.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Bottom */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">Registered Office</span>
              <span className="text-[9px] font-medium uppercase tracking-widest text-white/30 mt-1">Forest Mall, Kampala, Uganda</span>
            </div>
          </div>
          
          <div className="flex items-center gap-12">
             <div className="text-right">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
                  © {new Date().getFullYear()} Ole Sereni Group
                </p>
                <p className="text-[8px] font-medium uppercase tracking-[0.1em] text-white/20 mt-1">Structural Integrity. All Rights Reserved.</p>
             </div>
             <a href="https://wa.me/256767358604" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-osg-gold hover:text-osg-navy transition-all">
                <MessageCircle size={18} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
