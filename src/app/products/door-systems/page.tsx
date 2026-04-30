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
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop',
    tag: 'Flagship',
  },
  {
    title: 'Air Sliders',
    desc: 'Bespoke large-format sliding doors with zero-threshold drains and "air-lift" mechanism for effortless operation even at 400kg per panel.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop',
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
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Solutions / Products"
        title="Portal"
        titleHighlight="Architecture."
        subtitle="The transition between environments, re-imagined. Our door systems combine monumental scale with whisper-quiet precision."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Door Systems' }]}
        ctaPrimary={{ label: 'View Technical Catalog', href: '/resources/downloads' }}
        ctaSecondary={{ label: 'Request Entry Review', href: '/quote' }}
      />

      {/* Hero Catalog Section: Luxury Grid */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        
        <div className="container-clean">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-40 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl space-y-10">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                 <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">The Portal Series // 02</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tighter leading-[0.85] font-sans">Structural <br/><span className="text-osg-navy/10">Portals.</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-1/3 border-l border-osg-gold pl-12">
               <p className="text-[10px] text-osg-navy/40 uppercase tracking-[0.4em] font-black leading-relaxed">
                    Monumental entrance solutions and panoramic sliding systems designed to dissolve the boundary between interior and exterior.
               </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {doorSystems.map((sys, i) => (
              <motion.div 
                key={sys.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group space-y-12"
              >
                <div className="aspect-[3/4] relative rounded-[3rem] overflow-hidden border border-osg-navy/5 shadow-premium">
                  <Image
                    src={sys.image}
                    alt={sys.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute top-10 left-10">
                     <span className="bg-osg-gold text-osg-navy text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2.5 rounded-full shadow-2xl">{sys.tag}</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl font-sans font-black text-osg-navy uppercase tracking-tight leading-none group-hover:text-osg-gold transition-colors">{sys.title}</h3>
                  <div className="w-16 h-[1px] bg-osg-gold/20 group-hover:w-24 group-hover:bg-osg-gold transition-all duration-500" />
                  <p className="text-lg text-osg-navy/40 font-sans leading-relaxed line-clamp-3">{sys.desc}</p>
                  <Link href="/quote" className="btn-cta w-full justify-center group !py-5 !text-[10px]">
                    CONFIGURE SPECIFICATION <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Exploration Showcase */}
      <section className="py-48 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10">
            <div className="max-w-4xl mb-32 space-y-12">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-6">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Technical Depth // 02</span>
                </motion.div>
                <h2 className="text-[4rem] lg:text-[7rem] font-sans font-black uppercase tracking-tighter leading-[0.85]">Portal <br /><span className="text-osg-gold">Extraction.</span></h2>
                <p className="text-2xl text-white/40 font-sans leading-relaxed max-w-2xl">
                    Examine the mechanical durability, thermal insulation, and multi-point security ratings of our flagship pivot and sliding door systems.
                </p>
            </div>
            
            <TechShowcase categoryKey="DoorSystems" />
        </div>
      </section>

      {/* Technical Banner: Hardware Focus */}
      <section className="bg-white py-40 relative overflow-hidden border-t border-osg-navy/5">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02]" />
        <div className="container-clean flex flex-col lg:flex-row items-center justify-between gap-32">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-1 space-y-10">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Hardware Specs</span>
                </div>
                <h3 className="text-[4rem] lg:text-[6rem] text-osg-navy font-sans font-black uppercase tracking-tight mb-8 leading-[0.9]">Bespoke <br/><span className="text-osg-navy/10">Entrances.</span></h3>
                <p className="text-[11px] text-osg-navy/40 font-black uppercase tracking-[0.4em]">Engineering millimetre-perfect first impressions.</p>
                <Link href="/contact" className="btn-cta !px-12 py-5 !text-[10px] inline-flex">
                    TALK TO AN ENGINEER <ArrowRight size={18} className="ml-4" />
                </Link>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {features.map((f, i) => (
                    <motion.div 
                      key={f.title} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center md:items-start text-center md:text-left group"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-[#F8F9FB] flex items-center justify-center text-osg-navy group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 mb-10 shadow-premium">
                            <f.icon size={28} />
                        </div>
                        <h4 className="text-2xl font-sans font-black text-osg-navy uppercase tracking-tight mb-6">{f.title}</h4>
                        <p className="text-lg text-osg-navy/40 font-sans leading-relaxed max-w-[220px]">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Final Resources Grid: Luxury High-Contrast Modules */}
      <section className="py-48 bg-[#F8F9FB] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        <div className="container-clean">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-20 lg:p-32 rounded-[5rem] border border-osg-navy/5 shadow-premium space-y-12 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
                <h4 className="text-[3rem] font-sans font-black text-osg-navy uppercase tracking-tight leading-none">Technical <br/><span className="text-osg-gold">Downloader.</span></h4>
                <p className="text-xl text-osg-navy/40 font-sans leading-relaxed max-w-xl">Access full DWG profiles, wind-load capacity charts, and hardware finish catalogs for the Entire Series.</p>
                <button className="flex items-center gap-8 text-osg-gold text-[10px] font-black uppercase tracking-[0.5em] group">
                    <span className="w-16 h-16 flex items-center justify-center border border-osg-gold rounded-full group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-xl">
                        <Download size={20} />
                    </span>
                    DOWNLOAD ZIP ARCHIVE (42MB)
                </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B1C2C] p-20 lg:p-32 rounded-[5rem] shadow-2xl space-y-12 relative overflow-hidden group"
            >
                <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-[2000ms] grayscale">
                    <Image src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=800" alt="Hardware" fill className="object-cover" />
                </div>
                <div className="relative z-10 space-y-10">
                    <h4 className="text-[3rem] font-sans font-black text-white uppercase tracking-tight leading-none">Hardware <br/><span className="text-osg-gold">Matrix.</span></h4>
                    <p className="text-xl text-white/40 font-sans leading-relaxed max-w-xl">Explore our range of premium designer handles and smart-locking integrations for bespoke portals.</p>
                    <Link href="/products" className="btn-cta !px-12 py-5 !text-[10px]">
                        EXPLORE HARDWARE
                    </Link>
                </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

