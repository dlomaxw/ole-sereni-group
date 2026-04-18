'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, Phone, Mail, ChevronDown, ArrowRight, Shield, ArrowUpRight,
  Home, Info, Layers, Cpu, Building2, Briefcase, Grid, Square, Palette, 
  Hammer, Zap, Layout, DoorOpen, Box, Component, Hotel, GraduationCap, ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

const services = [
  { label: 'Aluminium & Glass Systems', href: '/services/aluminium-glass', icon: Grid },
  { label: 'Gypsum Works & Ceilings', href: '/services/gypsum-works', icon: Square },
  { label: 'Painting & Tiling', href: '/services/painting-tiling', icon: Palette },
  { label: 'Carpentry & Joinery', href: '/services/carpentry', icon: Hammer },
  { label: 'Electrical Installations', href: '/services/electrical', icon: Zap },
  { label: 'Interior & Exterior Finishing', href: '/services/finishing', icon: Home },
];

const products = [
  { label: 'Window Systems', href: '/products/window-systems', icon: Layout },
  { label: 'Door Systems', href: '/products/door-systems', icon: DoorOpen },
  { label: 'Curtain Wall & Facades', href: '/products/curtain-wall', icon: Box },
  { label: 'Glass Systems', href: '/products/glass-systems', icon: Component },
  { label: 'Aluminium Profiles', href: '/products/aluminium-profiles', icon: Menu },
  { label: 'Specialized Systems', href: '/products/specialized-systems', icon: Shield },
];

const industries = [
  { label: 'Hospitality & Residential', href: '/industries/hospitality-residential', icon: Hotel },
  { label: 'Corporate & Commercial', href: '/industries/corporate-commercial', icon: Briefcase },
  { label: 'Educational & Institutional', href: '/industries/educational-institutional', icon: GraduationCap },
  { label: 'Retail & Light Industrial', href: '/industries/retail-industrial', icon: ShoppingBag },
];

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About Us', href: '/about-us', icon: Info },
  { label: 'Services', href: '/services', dropdown: services, icon: Layers },
  { label: 'Systems', href: '/products', dropdown: products, icon: Cpu },
  { label: 'Industries', href: '/industries', dropdown: industries, icon: Building2 },
  { label: 'Projects', href: '/projects', icon: Briefcase },
  { label: 'Contact', href: '/contact', icon: Phone },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { osgUser } = useAuth();

  // Hide Navbar on Login and Portal pages to avoid branding clash
  const isHiddenRoute = pathname === '/login' || pathname?.startsWith('/portal') || pathname?.startsWith('/admin');
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (isHiddenRoute) return null;

  return (
    <>
      {/* Full-Width Architectural Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          fixed top-0 left-0 right-0 z-[100] transition-all duration-700
          ${scrolled 
            ? 'bg-white border-b border-osg-navy/10 shadow-2xl h-24' 
            : 'bg-white/70 backdrop-blur-3xl h-28'
          }
        `}
      >
        {/* Signature HK Properties Gold Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-osg-gold z-10"></div>

        <div className="max-w-[1720px] mx-auto h-full px-8 md:px-16 flex items-center justify-between">
          {/* Logo Section - Architectural & Bold */}
          <Link href="/" className="flex items-center gap-6 group">
            <div className="relative">
              <span className="font-serif font-black text-5xl tracking-tighter text-osg-navy leading-none">
                OSG
              </span>
              <div className="absolute -top-1 -right-4 w-2 h-2 bg-osg-gold rounded-full"></div>
            </div>
            <div className="hidden lg:flex flex-col border-l border-osg-navy/10 pl-6">
              <span className="text-[10px] font-black tracking-[0.6em] text-osg-navy uppercase leading-none">
                Ole Sereni Group
              </span>
              <span className="text-[7px] font-bold tracking-[0.4em] text-osg-gold uppercase leading-none mt-2">
                Engineering Identity
              </span>
            </div>
          </Link>

          {/* Nav Links - Spaced & Minimalist (HK Properties Inspired) */}
          <div className="hidden xl:flex items-center gap-12">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`
                    px-2 py-4 text-[15px] font-black uppercase tracking-[0.25em] transition-all relative flex items-center gap-3
                    ${activeDropdown === link.label ? 'text-osg-gold' : 'text-osg-navy/85 hover:text-osg-navy'}
                  `}
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.15 }}
                    className="flex items-center gap-3"
                  >
                    <link.icon size={18} className={`${activeDropdown === link.label ? 'text-osg-gold' : 'text-osg-navy/40'} drop-shadow-sm`} />
                    <span className="relative z-10">{link.label}</span>
                  </motion.div>
                  {activeDropdown === link.label && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-osg-gold shadow-[0_4px_12px_rgba(168,120,30,0.3)]"
                    />
                  )}
                </Link>

                {/* Dropdown Panel - Clean Architectural Style */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute top-[100%] left-[-20px] min-w-[340px] bg-white border border-osg-navy/5 shadow-[0_40px_100px_-15px_rgba(10,22,40,0.18)] p-6 z-[110]"
                    >
                      <div className="grid grid-cols-1 gap-1">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="px-6 py-5 text-[13px] font-black text-osg-navy/60 hover:text-osg-gold hover:bg-osg-cream/50 transition-all uppercase tracking-widest flex items-center justify-between group rounded-xl"
                          >
                            <div className="flex items-center gap-4">
                              <sub.icon size={16} className="text-osg-navy/20 group-hover:text-osg-gold transition-colors" />
                              <span>{sub.label}</span>
                            </div>
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-8">
            {!osgUser && (
              <Link 
                href="/portal/dashboard" 
                className="hidden lg:flex items-center gap-3 px-10 py-5 bg-osg-navy text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-osg-gold hover:text-osg-navy transition-all shadow-xl shadow-osg-navy/10"
              >
                Portal Login <ArrowUpRight size={14} />
              </Link>
            )}
            
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden w-12 h-12 flex items-center justify-center bg-osg-navy/5 text-osg-navy hover:bg-osg-navy hover:text-white transition-all"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Portal */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-osg-navy flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <Link href="/" onClick={() => setMobileOpen(false)} className="font-serif font-black text-3xl text-white">OSG</Link>
              <button 
                onClick={() => setMobileOpen(false)}
                className="p-3 bg-white/5 rounded-full text-white hover:bg-osg-gold hover:text-osg-navy transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 overflow-y-auto pb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-6 text-4xl font-serif font-black text-white/40 hover:text-osg-gold uppercase tracking-tighter transition-all"
                  >
                    <link.icon size={28} className="opacity-20" />
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="mt-4 ml-14 flex flex-col gap-4">
                      {link.dropdown.map(sub => (
                        <Link 
                          key={sub.label} 
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-4 text-[10px] font-bold text-white/40 hover:text-osg-gold uppercase tracking-widest transition-all"
                        >
                          <sub.icon size={14} />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-10 border-t border-white/5 grid grid-cols-2 gap-4">
              <Link href="/quote" onClick={() => setMobileOpen(false)} className="flex items-center justify-center h-16 bg-white text-osg-navy text-[10px] font-black uppercase tracking-widest rounded-2xl">
                Get Quote
              </Link>
              <Link href="/portal/dashboard" onClick={() => setMobileOpen(false)} className="flex items-center justify-center h-16 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl">
                Client Portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
