'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, ChevronDown, ArrowUpRight, ArrowRight,
  Grid, Square, Palette, Hammer, Zap, Home,
  Layout, DoorOpen, Box, Component, Shield,
  Hotel, Briefcase, GraduationCap, ShoppingBag, Cpu,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

const services = [
  { label: 'Aluminium & Glass Systems', href: '/services/aluminium-glass', icon: Grid, desc: 'Facades, curtain walls & glazing solutions' },
  { label: 'Gypsum Works & Ceilings', href: '/services/gypsum-works', icon: Square, desc: 'Suspended ceilings and partitions' },
  { label: 'Painting & Tiling', href: '/services/painting-tiling', icon: Palette, desc: 'Premium surface finishes' },
  { label: 'Carpentry & Joinery', href: '/services/carpentry', icon: Hammer, desc: 'Bespoke timber and millwork' },
  { label: 'Electrical Installations', href: '/services/electrical', icon: Zap, desc: 'Commercial electrical systems' },
  { label: 'Interior & Exterior Finishing', href: '/services/finishing', icon: Home, desc: 'Complete finishing solutions' },
];

const products = [
  { label: 'Window Systems', href: '/products/window-systems', icon: Layout, desc: 'Aluminium and composite windows' },
  { label: 'Door Systems', href: '/products/door-systems', icon: DoorOpen, desc: 'Security and feature entrances' },
  { label: 'Curtain Wall & Facades', href: '/products/curtain-wall', icon: Box, desc: 'High-performance facade systems' },
  { label: 'Glass Systems', href: '/products/glass-systems', icon: Component, desc: 'Structural and decorative glass' },
  { label: 'Aluminium Profiles', href: '/products/aluminium-profiles', icon: Cpu, desc: 'Extrusions and custom profiles' },
  { label: 'Specialized Systems', href: '/products/specialized-systems', icon: Shield, desc: 'Bespoke architectural solutions' },
];

const industries = [
  { label: 'Hospitality & Residential', href: '/industries/hospitality-residential', icon: Hotel, desc: 'Hotels, resorts, and homes' },
  { label: 'Corporate & Commercial', href: '/industries/corporate-commercial', icon: Briefcase, desc: 'Offices and commercial spaces' },
  { label: 'Educational & Institutional', href: '/industries/educational-institutional', icon: GraduationCap, desc: 'Schools and public buildings' },
  { label: 'Retail & Light Industrial', href: '/industries/retail-industrial', icon: ShoppingBag, desc: 'Retail fit-outs and warehouses' },
];

const navLinks = [
  { label: 'About', href: '/about-us' },
  { label: 'Services', href: '/services', dropdown: services, featured: { label: 'View All Services', href: '/services' } },
  { label: 'Systems', href: '/products', dropdown: products, featured: { label: 'View All Systems', href: '/products' } },
  { label: 'Industries', href: '/industries', dropdown: industries, featured: { label: 'View All Industries', href: '/industries' } },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const { osgUser } = useAuth();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHiddenRoute =
    pathname === '/login' ||
    pathname?.startsWith('/portal') ||
    pathname?.startsWith('/admin');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  if (isHiddenRoute) return null;

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-[0_2px_20px_rgba(10,22,40,0.08)]'
            : 'bg-white'
        }`}
      >
        {/* Gold top accent bar */}
        <div className="h-[3px] bg-osg-gold w-full" />

        <div className="max-w-[1720px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-[80px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-4 group flex-shrink-0">
            <div className="relative flex items-end gap-1">
              <span className="font-serif font-black text-[2.2rem] text-osg-navy leading-none tracking-[-0.04em]">
                OSG
              </span>
              <div className="w-[6px] h-[6px] rounded-full bg-osg-gold mb-1 group-hover:scale-125 transition-transform" />
            </div>
            <div className="hidden lg:block border-l border-osg-navy/10 pl-4">
              <p className="text-[9px] font-black tracking-[0.45em] text-osg-navy uppercase leading-none">
                Ole Sereni Group
              </p>
              <p className="text-[7px] font-bold tracking-[0.35em] text-osg-gold uppercase leading-none mt-[5px]">
                Engineering Identity
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-osg-gold'
                      : 'text-osg-navy/60 hover:text-osg-navy'
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {/* ── Improved Dropdown ── */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-osg-navy/8 shadow-[0_20px_60px_-10px_rgba(10,22,40,0.15)] z-[110] overflow-hidden"
                      style={{ width: link.dropdown.length <= 4 ? '380px' : '560px' }}
                    >
                      {/* Dropdown header */}
                      <div className="flex items-center justify-between px-5 py-3 border-b border-osg-navy/6 bg-osg-navy/[0.015]">
                        <span className="text-[8px] font-black tracking-[0.55em] text-osg-gold uppercase">
                          {link.label}
                        </span>
                        <Link
                          href={link.featured?.href ?? link.href}
                          className="flex items-center gap-1 text-[8px] font-bold tracking-[0.3em] text-osg-navy/40 hover:text-osg-navy uppercase transition-colors"
                        >
                          {link.featured?.label}
                          <ArrowUpRight size={9} />
                        </Link>
                      </div>

                      {/* Items */}
                      <div className={`grid gap-px bg-osg-navy/5 ${link.dropdown.length <= 4 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="group flex items-start gap-3.5 px-5 py-4 bg-white hover:bg-[#faf9f7] transition-colors"
                          >
                            {/* Icon badge */}
                            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-osg-navy/8 bg-osg-offwhite group-hover:border-osg-gold/40 group-hover:bg-osg-gold/8 transition-all duration-200 mt-0.5">
                              <sub.icon size={14} className="text-osg-navy/35 group-hover:text-osg-gold transition-colors duration-200" />
                            </div>

                            {/* Text */}
                            <div className="min-w-0">
                              <p className="text-[11px] font-black text-osg-navy uppercase tracking-[0.1em] leading-none group-hover:text-osg-navy transition-colors">
                                {sub.label}
                              </p>
                              <p className="text-[10px] text-osg-navy/40 font-medium mt-1.5 leading-relaxed">
                                {sub.desc}
                              </p>
                            </div>

                            {/* Arrow */}
                            <ArrowRight
                              size={12}
                              className="flex-shrink-0 ml-auto mt-1 text-osg-navy/0 group-hover:text-osg-gold/60 transition-all duration-200 translate-x-1 group-hover:translate-x-0"
                            />
                          </Link>
                        ))}
                      </div>

                      {/* Dropdown footer */}
                      <div className="flex items-center justify-between px-5 py-3 bg-osg-navy/[0.02] border-t border-osg-navy/6">
                        <p className="text-[8px] font-bold tracking-[0.3em] text-osg-navy/25 uppercase">
                          Ole Sereni Group
                        </p>
                        <Link
                          href="/contact"
                          className="flex items-center gap-1 text-[8px] font-black tracking-[0.3em] text-osg-navy/40 hover:text-osg-gold uppercase transition-colors"
                        >
                          Get a Quote <ArrowRight size={8} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-3">
            {!osgUser ? (
              <Link
                href="/login"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-osg-navy text-white text-[9px] font-black uppercase tracking-[0.3em] hover:bg-osg-gold hover:text-osg-navy transition-all duration-300"
              >
                Portal Login <ArrowUpRight size={12} />
              </Link>
            ) : (
              <Link
                href="/portal/dashboard"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-osg-gold text-osg-navy text-[9px] font-black uppercase tracking-[0.3em] hover:bg-osg-gold-light transition-all duration-300"
              >
                Dashboard <ArrowUpRight size={12} />
              </Link>
            )}

            {/* Mobile trigger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="xl:hidden flex items-center justify-center w-10 h-10 text-osg-navy hover:text-osg-gold transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu (unchanged from original) ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[190] bg-osg-navy/50 xl:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[200] w-[min(380px,100vw)] bg-osg-navy flex flex-col xl:hidden overflow-y-auto"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link href="/" onClick={() => setMobileOpen(false)} className="font-serif font-black text-2xl text-white tracking-[-0.03em]">
                  OSG<span className="text-osg-gold">.</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile links */}
              <nav className="flex-1 px-4 py-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                          className="w-full flex items-center justify-between px-4 py-3.5 text-[11px] font-black uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors"
                        >
                          {link.label}
                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-200 ${mobileExpanded === link.label ? 'rotate-180 text-osg-gold' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-2">
                                {link.dropdown.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 text-[10px] font-bold text-white/40 hover:text-osg-gold uppercase tracking-[0.2em] transition-colors"
                                  >
                                    <sub.icon size={13} className="flex-shrink-0" />
                                    {sub.label}
                                  </Link>
                                ))}
                                <Link
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-1.5 px-4 py-2 text-[9px] font-black text-osg-gold/60 hover:text-osg-gold uppercase tracking-[0.3em] transition-colors"
                                >
                                  View all {link.label} <ArrowRight size={9} />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center px-4 py-3.5 text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${
                          isActive(link.href) ? 'text-osg-gold' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="px-6 pb-8 pt-4 border-t border-white/10">
                <Link
                  href={osgUser ? '/portal/dashboard' : '/login'}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center h-12 bg-osg-gold text-osg-navy text-[10px] font-black uppercase tracking-[0.3em] hover:bg-osg-gold-light transition-colors"
                >
                  {osgUser ? 'Go to Dashboard' : 'Portal Login'}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
