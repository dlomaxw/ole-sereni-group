'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Wind, Anchor, Download, Settings, Zap, Thermometer, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import TechShowcase from '@/components/TechShowcase';

const doorSystems = [
  {
    title: 'Vision Pivot',
    desc: 'Monumental entrance solutions with offset pivot hinges. Certified for openings up to 3000mm in width. Integrated hydraulic closing systems.',
    image: 'https://images.unsplash.com/photo-1512914890251-2f96a9b092e3?q=80&w=1000&auto=format&fit=crop',
    tag: 'Flagship',
  },
  {
    title: 'Air Sliders',
    desc: 'Bespoke large-format sliding doors with zero-threshold drains and "air-lift" mechanism for effortless operation even at 400kg per panel.',
    image: 'https://images.unsplash.com/photo-1620626011761-9963d75214ec?q=80&w=1000&auto=format&fit=crop',
    tag: 'Panoramic',
  },
  {
    title: 'Infinity Bi-Fold',
    desc: 'Concertina folding systems with 90° corner-opening capability. Extreme weather-sealed performance and ultra-slim profile joints.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop',
    tag: 'Flexible',
  },
];

const features = [
  { icon: Shield, title: 'Multi-Point Security', desc: 'Hardware-integrated 5-point locking systems for maximum resistance.' },
  { icon: Wind, title: 'Storm Resilience', desc: 'Tested up to Class 4 for air permeability and extreme water tightness.' },
  { icon: Anchor, title: 'Structural Stability', desc: 'Reinforced aluminium profiles engineered for large-scale spans.' },
];

export default function DoorSystemsPage() {
  return (
    <main className="bg-osg-navy font-sans">
      <PageHero
        label="Solutions / Products"
        title="Portal"
        titleHighlight="Architecture."
        subtitle="The transition between environments, re-imagined. Our door systems combine monumental scale with whisper-quiet precision."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Door Systems' }]}
        ctaPrimary={{ label: 'View Technical Catalog', href: '/resources/downloads' }}
        ctaSecondary={{ label: 'Request Entry Review', href: '/quote' }}
      />

      {/* Hero Catalog Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Detail */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none opacity-50" />
        
        <div className="container-osg relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <Reveal>
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">The Portal Series // 02</span>
              <h2 className="text-display-sm text-osg-navy font-black uppercase tracking-tighter italic leading-none">Structural <br/><span className="text-osg-navy/20">Portals.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
                <div className="text-right">
                    <div className="h-px w-32 bg-osg-gold mb-4 ml-auto" />
                    <p className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] text-osg-navy/30">System Configurations</p>
                </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {doorSystems.map((sys, i) => (
              <Reveal key={sys.title} delay={i * 0.15}>
                <div className="group">
                  <div className="aspect-[4/5] bg-osg-charcoal overflow-hidden mb-12 relative border border-osg-navy/5 shadow-2xl transition-all duration-1000 hover:shadow-osg-navy/20">
                    <Image
                      src={sys.image}
                      alt={sys.title}
                      fill
                      className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                    />
                    {/* Blueprint Overlay on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <div className="absolute top-8 left-8">
                       <span className="bg-osg-gold text-osg-navy text-[9px] font-black uppercase tracking-widest px-4 py-1.5 shadow-xl">{sys.tag}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-osg-navy uppercase tracking-tighter mb-4 transition-colors group-hover:text-osg-gold leading-none">{sys.title}</h3>
                  <div className="h-px w-12 bg-osg-navy/10 mb-6 group-hover:w-24 group-hover:bg-osg-gold transition-all duration-500" />
                  <p className="text-sm text-osg-navy/50 leading-relaxed font-light mb-10 min-h-[60px]">{sys.desc}</p>
                  <Link href="/quote" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-gold hover:!text-osg-gold w-full flex justify-center py-5 text-[10px] font-black uppercase tracking-widest transition-all">
                    Configure Specification <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Exploration Showcase */}
      <section className="section-padding bg-osg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none" />
        <div className="container-osg relative z-10">
            <div className="max-w-3xl mb-16">
                <Reveal>
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Technical Depth // 02</span>
                    <h2 className="text-display-xs lg:text-display-sm text-white font-black uppercase tracking-tighter italic">Portal <br /><span className="text-osg-gold">Extraction.</span></h2>
                    <p className="mt-6 text-white/50 text-lg max-w-xl">
                        Examine the mechanical durability, thermal insulation, and multi-point security ratings of our flagship pivot and sliding door systems.
                    </p>
                </Reveal>
            </div>
            
            <Reveal delay={0.2}>
                <TechShowcase categoryKey="DoorSystems" />
            </Reveal>
        </div>
      </section>

      {/* Technical Banner */}
      <section className="bg-osg-navy py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="container-osg relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 text-center lg:text-left">
                <span className="text-osg-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Hardware Specs</span>
                <h3 className="text-white text-4xl lg:text-5xl font-black uppercase tracking-tighter italic mb-4 leading-none">Bespoke Entrance <br/>Requirements?</h3>
                <p className="text-white/30 text-[11px] font-black uppercase tracking-[0.4em] mb-8">Engineering millimetre-perfect first impressions.</p>
                <Link href="/contact" className="btn-primary !py-5 !px-10 inline-flex items-center gap-3">
                    TALK TO AN ENGINEER <ArrowRight size={16} />
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full lg:w-auto">
                {features.map((f, i) => (
                    <Reveal key={f.title} delay={i * 0.1}>
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-osg-gold mb-6">
                                <f.icon size={20} />
                            </div>
                            <h4 className="text-white text-[11px] font-black uppercase tracking-widest mb-3">{f.title}</h4>
                            <p className="text-white/30 text-[10px] leading-relaxed max-w-[160px] font-medium">{f.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* Final Resources Grid */}
      <section className="section-padding bg-[#f8f9f8]">
        <div className="container-osg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-osg-navy/10 border border-osg-navy/10">
            <div className="bg-white p-16 lg:p-24">
                <h4 className="text-3xl font-black text-osg-navy uppercase tracking-tighter mb-8 italic">Technical Downloader.</h4>
                <p className="text-sm text-osg-navy/50 mb-12 font-light leading-relaxed">Access full DWG profiles, wind-load capacity charts, and hardware finish catalogs for the Entire Series.</p>
                <button className="flex items-center gap-4 text-osg-gold text-xs font-black uppercase tracking-[0.3em] group">
                    <span className="w-12 h-12 flex items-center justify-center border border-osg-gold rounded-full group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500">
                        <Download size={16} />
                    </span>
                    Download ZIP Archive (42MB)
                </button>
            </div>
            <div className="bg-osg-navy p-16 lg:p-24 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Image src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=800" alt="Hardware" fill className="object-cover" />
                </div>
                <div className="relative z-10">
                    <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 italic">Hardware Matrix.</h4>
                    <p className="text-sm text-white/40 mb-12 font-light leading-relaxed">Explore our range of premium designer handles and smart-locking integrations.</p>
                    <Link href="/products" className="btn-primary !bg-osg-gold !text-osg-navy !py-4 !px-8">
                        EXPLORE HARDWARE
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
