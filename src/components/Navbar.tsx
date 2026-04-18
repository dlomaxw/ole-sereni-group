'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu, X, ChevronDown, ArrowUpRight, ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

const services = [
  { label: 'Aluminium & Glass Systems', href: '/services/aluminium-glass', image: '/images/service-aluminium.jpg', desc: 'Facades, curtain walls & glazing solutions' },
  { label: 'Gypsum Works & Ceilings', href: '/services/gypsum-works', image: '/images/service-gypsum.jpg', desc: 'Suspended ceilings and partitions' },
  { label: 'Painting & Tiling', href: '/services/painting-tiling', image: '/images/service-tiling.jpg', desc: 'Premium surface finishes' },
  { label: 'Carpentry & Joinery', href: '/services/carpentry', image: '/images/service-carpentry.jpg', desc: 'Bespoke timber and millwork' },
  { label: 'Electrical Installations', href: '/services/electrical', image: '/images/service-electrical.jpg', desc: 'Commercial electrical systems' },
  { label: 'Interior & Exterior Finishing', href: '/services/finishing', image: '/images/service-finishing.jpg', desc: 'Complete finishing solutions' },
];

const products = [
  { label: 'Window Systems', href: '/products/window-systems', image: '/images/product-window.jpg', desc: 'Aluminium and composite windows' },
  { label: 'Door Systems', href: '/products/door-systems', image: '/images/product-door.jpg', desc: 'Security and feature entrances' },
  { label: 'Curtain Wall & Facades', href: '/products/curtain-wall', image: '/images/typology-curtain-wall.jpg', desc: 'High-performance facade systems' },
  { label: 'Glass Systems', href: '/products/glass-systems', image: '/images/product-glass.jpg', desc: 'Structural and decorative glass' },
  { label: 'Aluminium Profiles', href: '/products/aluminium-profiles', image: '/images/product-profile.jpg', desc: 'Extrusions and custom profiles' },
  { label: 'Specialized Systems', href: '/products/specialized-systems', image: '/images/product-specialized.jpg', desc: 'Bespoke architectural solutions' },
];

const industries = [
  { label: 'Hospitality & Residential', href: '/industries/hospitality-residential', image: '/images/industry-hospitality.jpg', desc: 'Hotels, resorts, and homes' },
  { label: 'Corporate & Commercial', href: '/industries/corporate-commercial', image: '/images/industry-corporate.jpg', desc: 'Offices and commercial spaces' },
  { label: 'Educational & Institutional', href: '/industries/educational-institutional', image: '/images/industry-educational.jpg', desc: 'Schools and public buildings' },
  { label: 'Retail & Light Industrial', href: '/industries/retail-industrial', image: '/images/industry-retail.jpg', desc: 'Retail fit-outs and warehouses' },
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
            ? 'bg-white shadow-[0_4px_30px_rgba(10,22,40,0.12)]'
            : 'bg-white'
        }`}
      >
        {/* Gold top accent bar */}
        <div className="h-1 bg-osg-gold w-full" />

        <div className="max-w-[1720px] mx-auto px-8 md:px-12 lg:px-20 flex items-center justify-between h-24">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-6 group flex-shrink-0">
            <div className="relative flex items-end gap-1">
              <span className="font-serif font-black text-3xl text-osg-navy leading-none tracking-[-0.04em]">
                OSG
              </span>
              <div className="w-2 h-2 rounded-full bg-osg-gold mb-1 group-hover:scale-125 transition-transform" />
            </div>
            <div className="hidden lg:block border-l border-osg-navy/10 pl-6">
              <p className="text-xs font-black tracking-[0.5em] text-osg-navy uppercase leading-tight">
                Ole Sereni Group
              </p>
              <p className="text-[10px] font-bold tracking-[0.4em] text-osg-gold uppercase leading-tight mt-1">
                Engineering Identity
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden xl:flex items-center gap-2" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-black uppercase tracking-[0.25em] transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-osg-gold'
                      : 'text-osg-navy/60 hover:text-osg-navy'
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {/* ── Enhanced Dropdown with Images ── */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white border border-osg-navy/8 shadow-[0_30px_80px_-15px_rgba(10,22,40,0.2)] z-[110] overflow-hidden rounded-xl"
                      style={{ width: '900px' }}
                    >
                      {/* Dropdown header */}
                      <div className="flex items-center justify-between px-8 py-5 border-b border-osg-navy/6 bg-osg-navy/[0.02]">
                        <span className="text-xs font-black tracking-[0.6em] text-osg-gold uppercase">
                          {link.label}
                        </span>
                        <Link
                          href={link.featured?.href ?? link.href}
                          className="flex items-center gap-1.5 text-xs font-bold tracking-[0.3em] text-osg-navy/50 hover:text-osg-navy uppercase transition-colors"
                        >
                          {link.featured?.label}
                          <ArrowUpRight size={12} />
                        </Link>
                      </div>

                      {/* Items Grid with Images */}
                      <div className="grid grid-cols-3 gap-px bg-osg-navy/5">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="group flex flex-col bg-white hover:bg-[#faf9f7] transition-colors"
                          >
                            {/* Image */}
                            <div className="relative w-full h-40 overflow-hidden bg-osg-navy/8">
                              <Image
                                src={sub.image}
                                alt={sub.label}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="300px"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Text Content */}
                            <div className="p-5 flex-grow flex flex-col">
                              <h4 className="text-sm font-black text-osg-navy uppercase tracking-[0.15em] leading-tight mb-2 group-hover:text-osg-gold transition-colors">
                                {sub.label}
                              </h4>
                              <p className="text-xs text-osg-navy/50 font-medium leading-relaxed flex-grow">
                                {sub.desc}
                              </p>
                              <div className="flex items-center gap-2 mt-4 text-osg-gold/60 group-hover:text-osg-gold transition-colors">
                                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Explore</span>
                                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Dropdown footer */}
                      <div className="flex items-center justify-between px-8 py-4 bg-osg-navy/[0.015] border-t border-osg-navy/6">
                        <p className="text-xs font-bold tracking-[0.35em] text-osg-navy/30 uppercase">
                          Ole Sereni Group — Premium Architectural Systems
                        </p>
                        <Link
                          href="/contact"
                          className="flex items-center gap-1.5 text-xs font-black tracking-[0.3em] text-osg-navy/40 hover:text-osg-gold uppercase transition-colors"
                        >
                          Get a Quote <ArrowRight size={10} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-4">
            {!osgUser ? (
              <Link
                href="/login"
                className="hidden lg:flex items-center gap-2 px-7 py-3 bg-osg-navy text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-osg-gold hover:text-osg-navy transition-all duration-300 rounded-lg"
              >
                Portal Login <ArrowUpRight size={13} />
              </Link>
            ) : (
              <Link
                href="/portal/dashboard"
                className="hidden lg:flex items-center gap-2 px-7 py-3 bg-osg-gold text-osg-navy text-xs font-black uppercase tracking-[0.3em] hover:bg-osg-gold-light transition-all duration-300 rounded-lg"
              >
                Dashboard <ArrowUpRight size={13} />
              </Link>
            )}

            {/* Mobile trigger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="xl:hidden flex items-center justify-center w-11 h-11 text-osg-navy hover:bg-osg-navy/5 transition-colors rounded-lg"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
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
              className="fixed top-0 right-0 bottom-0 z-[200] w-[min(400px,100vw)] bg-osg-navy flex flex-col xl:hidden overflow-y-auto"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link href="/" onClick={() => setMobileOpen(false)} className="font-serif font-black text-3xl text-white tracking-[-0.03em]">
                  OSG<span className="text-osg-gold">.</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile links */}
              <nav className="flex-1 px-5 py-6" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                          className="w-full flex items-center justify-between px-4 py-4 text-sm font-black uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors"
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
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
                              <div className="pl-6 pb-3 space-y-2">
                                {link.dropdown.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex flex-col px-4 py-3 text-xs font-bold text-white/50 hover:text-osg-gold uppercase tracking-[0.2em] transition-colors bg-white/5 rounded-lg"
                                  >
                                    <span className="font-black mb-1">{sub.label}</span>
                                    <span className="text-[10px] text-white/30 font-normal">{sub.desc}</span>
                                  </Link>
                                ))}
                                <Link
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 px-4 py-3 text-xs font-black text-osg-gold/80 hover:text-osg-gold uppercase tracking-[0.3em] transition-colors mt-2"
                                >
                                  View all {link.label} <ArrowRight size={11} />
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
                        className={`flex items-center px-4 py-4 text-sm font-black uppercase tracking-[0.3em] transition-colors ${
                          isActive(link.href) ? 'text-osg-gold' : 'text-white/70 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="px-6 pb-8 pt-5 border-t border-white/10">
                <Link
                  href={osgUser ? '/portal/dashboard' : '/login'}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center h-14 bg-osg-gold text-osg-navy text-xs font-black uppercase tracking-[0.35em] hover:bg-osg-gold-light transition-colors rounded-lg"
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
