'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ChevronDown, ArrowRight, Cpu, Grid, Square, Palette, 
  Hammer, Zap, Layout, DoorOpen, Box, Component
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// DATA STRUCTURES
const services = [
  { label: 'Aluminium & Glass Systems', href: '/services/aluminium-glass', icon: Grid, description: 'Precision engineering for modern architectural transparency.', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=500&auto=format&fit=crop' },
  { label: 'Gypsum Works & Ceilings', href: '/services/gypsum-works', icon: Square, description: 'Aesthetic interior structuring with flawless finishing.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500&auto=format&fit=crop' },
  { label: 'Painting & Tiling', href: '/services/painting-tiling', icon: Palette, description: 'High-end surface treatments for durability and elegance.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=500&auto=format&fit=crop' },
  { label: 'Carpentry & Joinery', href: '/services/carpentry', icon: Hammer, description: 'Bespoke woodwork and custom fit-outs for niche interiors.', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=500&auto=format&fit=crop' },
  { label: 'Electrical Installations', href: '/services/electrical', icon: Zap, description: 'Integrated power solutions for smart building environments.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=500&auto=format&fit=crop' },
];

const products = [
  { label: 'Window Systems', href: '/products/window-systems', icon: Layout, description: 'High-performance fenestration for climate control.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=500&auto=format&fit=crop' },
  { label: 'Door Systems', href: '/products/door-systems', icon: DoorOpen, description: 'Secure, elegant entryways designed for longevity.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500&auto=format&fit=crop' },
  { label: 'Curtain Wall & Facades', href: '/products/curtain-wall', icon: Box, description: 'Dynamic structural envelopes for landmark architecture.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop' },
  { label: 'Glass Systems', href: '/products/glass-systems', icon: Component, description: 'Specialized structural glass and acoustic solutions.', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=500&auto=format&fit=crop' },
];

const navLinks = [
  { label: 'Home Systems', href: '/products', dropdown: products, icon: Cpu, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670' },
  { label: 'Services', href: '/services', dropdown: services },
  { label: 'Industries', href: '/industries' },
  { label: 'Properties', href: '/properties' },
  { label: 'Projects', href: '/projects' },
  { label: 'Technology', href: '/products/specialized-systems' },
  { label: 'Technical Brief', href: '/quote?mode=brief' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isHiddenRoute = pathname === '/login' || pathname?.startsWith('/portal') || pathname?.startsWith('/admin');
  const isActive = (href: string) => {
    const cleanHref = href.split('?')[0];
    return pathname === cleanHref || (cleanHref !== '/' && pathname?.startsWith(`${cleanHref}/`));
  };
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (isHiddenRoute) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          fixed top-0 left-0 right-0 z-[100] transition-all duration-700
          ${scrolled 
            ? 'glass-nav h-20' 
            : 'bg-gradient-to-b from-osg-navy/80 to-transparent h-24 lg:h-28'
          }
        `}
      >
        <div className="max-w-[1720px] mx-auto h-full px-4 sm:px-6 md:px-10 xl:px-12 2xl:px-16 flex items-center justify-between gap-4 overflow-hidden">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4 lg:gap-6 group min-w-0 shrink-0" aria-label="Ole Sereni Group home">
            <div className="relative shrink-0">
              <span className={`font-black text-3xl sm:text-4xl lg:text-5xl tracking-tighter transition-colors duration-500 ${scrolled ? 'text-osg-navy' : 'text-white'}`}>
                OSG
              </span>
              <div className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-osg-gold rounded-full"></div>
            </div>
            <div className={`hidden lg:flex flex-col border-l pl-6 transition-colors duration-500 ${scrolled ? 'border-osg-navy/10' : 'border-white/10'}`}>
              <span className={`text-[9px] font-black tracking-[0.6em] uppercase leading-none ${scrolled ? 'text-osg-navy' : 'text-white'}`}>
                Ole Sereni Group
              </span>
              <span className="text-[7px] font-bold tracking-[0.4em] text-osg-gold uppercase leading-none mt-2">
                Engineering Identity
              </span>
            </div>
          </Link>

          {/* NAV LINKS */}
          <div className="hidden 2xl:flex items-center gap-1 h-full min-w-0">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="h-full flex items-center"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`
                    px-4 py-4 text-[11px] font-black uppercase tracking-[0.25em] transition-all relative flex items-center gap-2
                    ${scrolled ? 'text-osg-navy/80 hover:text-osg-gold' : 'text-white/80 hover:text-white'}
                    ${activeDropdown === link.label || isActive(link.href) ? '!text-osg-gold' : ''}
                  `}
                >
                  <span>{link.label}</span>
                  {link.dropdown && <ChevronDown size={12} className={`transition-transform duration-500 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                  
                  {activeDropdown === link.label && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-6 left-4 right-4 h-[2px] bg-osg-gold shadow-[0_4px_12px_rgba(201,168,76,0.3)]"
                    />
                  )}
                </Link>

                {/* MEGA MENU */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="fixed top-20 left-1/2 -translate-x-1/2 w-[min(92vw,1200px)] bg-white rounded-[1.5rem] border border-osg-border shadow-premium flex overflow-hidden z-[110]"
                    >
                        <div className="flex-1 p-8 grid grid-cols-2 gap-3">
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="group p-5 hover:bg-osg-bg transition-all rounded-2xl border border-transparent hover:border-osg-border"
                              >
                                <div className="flex items-center gap-5 mb-3">
                                  <div className="w-10 h-10 rounded-xl bg-osg-bg flex items-center justify-center text-osg-navy group-hover:bg-osg-gold group-hover:text-white transition-all">
                                    <sub.icon size={18} />
                                  </div>
                                  <h4 className="text-[12px] font-black uppercase tracking-[0.15em] text-osg-navy">
                                    {sub.label}
                                  </h4>
                                </div>
                                <p className="text-[11px] font-bold text-osg-navy/30 leading-relaxed max-w-[250px] uppercase tracking-wider">
                                  {sub.description}
                                </p>
                              </Link>
                            ))}
                        </div>

                        {link.image && (
                        <div className="w-[360px] bg-osg-navy relative group/img overflow-hidden">
                            <Image src={link.image} alt="" fill sizes="360px" className="object-cover opacity-40 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-80 group-hover/img:scale-105 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/80 to-transparent" />
                            <div className="absolute bottom-12 left-12 right-12">
                                <h5 className="text-[9px] font-black text-osg-gold uppercase tracking-[0.4em] mb-3">Technical Highlight</h5>
                                <p className="text-2xl font-black text-white tracking-tighter leading-tight uppercase">
                                  Engineering Full-Scale Architectural Resilience.
                                </p>
                            </div>
                        </div>
                        )}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>

          {/* ACTION AREA */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <Link 
              href="/quote" 
              className="hidden md:flex btn-cta !px-5 lg:!px-8 py-3 lg:py-4 !text-[9px] lg:!text-[10px] whitespace-nowrap"
            >
              GET QUOTE TODAY <ArrowRight size={14} className="ml-2" />
            </Link>
            
            <button
              type="button"
              aria-label="Open main menu"
              onClick={() => setMobileOpen(true)}
              className={`2xl:hidden w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all shrink-0 ${scrolled ? 'bg-osg-navy/5 text-osg-navy' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[200] bg-osg-navy flex flex-col p-5 sm:p-8 2xl:hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <Link href="/" onClick={() => setMobileOpen(false)} className="font-black text-3xl text-white" aria-label="Ole Sereni Group home">OSG</Link>
              <button type="button" aria-label="Close main menu" onClick={() => setMobileOpen(false)} className="w-12 h-12 flex items-center justify-center bg-white/5 text-white rounded-full"><X size={24} /></button>
            </div>

            <nav className="flex flex-col gap-3 overflow-y-auto pb-6 pr-1">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-white/5 pb-3">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-xl sm:text-2xl font-black uppercase tracking-tight transition-all ${isActive(link.href) ? 'text-osg-gold' : 'text-white/70 hover:text-white'}`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="group relative min-h-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 text-white transition-all hover:border-osg-gold/50"
                        >
                          <Image src={sub.image} alt="" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover opacity-25 grayscale transition-all group-hover:scale-105 group-hover:opacity-45" />
                          <div className="absolute inset-0 bg-gradient-to-r from-osg-navy via-osg-navy/70 to-transparent" />
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-osg-gold text-osg-navy">
                              <sub.icon size={16} />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.14em] leading-snug">{sub.label}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-auto pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3">
               <Link href="/quote" onClick={() => setMobileOpen(false)} className="btn-cta w-full py-4 sm:py-5 !text-[9px]">Get Quote Today</Link>
               <Link href="/portal/dashboard" onClick={() => setMobileOpen(false)} className="w-full py-4 sm:py-5 bg-white/5 text-white rounded-full font-black uppercase tracking-widest text-[9px] sm:text-[10px] text-center border border-white/10">Enterprise Portal</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

