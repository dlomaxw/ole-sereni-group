'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Layers, Thermometer, ShieldCheck, Download, Wind, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import TechShowcase from '@/components/TechShowcase';


const systems = [
  {
    title: 'CW-50 Stick System',
    desc: 'The versatile standard for aluminum glass facades. Featuring a 50mm face width and extensive profile depths for varying wind loads. Millimetre-precision engineering for stick-frame assembly.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    tag: 'Versatile',
  },
  {
    title: 'SG-Series Glazing',
    desc: 'Bespoke structural glazing with no external caps. Creates a seamless "all-glass" aesthetic with extreme weather resistance and high-performance silicone sealing.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop',
    tag: 'Aesthetic',
  },
  {
    title: 'Unitized Facades',
    desc: 'Modular facade units pre-assembled in factory conditions for high-speed installation on high-rise commercial structures and extreme wind-load areas.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000&auto=format&fit=crop',
    tag: 'Industrial',
  },
];

const capabilities = [
  { icon: Layers, title: 'Inertia Values', desc: 'Custom mullion depths up to 260mm for high-span structural capacity.' },
  { icon: Thermometer, title: 'Thermal Breaks', desc: 'High-performance polyamide strips for U-values down to 1.1 W/m²K compliance.' },
  { icon: ShieldCheck, title: 'Seismic Integrity', desc: 'Engineered expansion joints for structural movement and seismic load displacement.' },
];

export default function CurtainWallPage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Solutions / Products"
        title="Facade"
        titleHighlight="Envelopes."
        subtitle="Scale without compromise. Our curtain wall systems provide the structural backbone for the world's most ambitious glazed architectures."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Curtain Wall' }]}
        ctaPrimary={{ label: 'Technical Diagrams', href: '/resources/downloads' }}
        ctaSecondary={{ label: 'Consult Engineer', href: '/contact' }}
      />

      {/* Hero Catalog Section: Luxury Grid */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        
        <div className="container-clean">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-40 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl space-y-10">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                 <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Envelope Systems // 03</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tighter leading-[0.85] font-sans">Glazing <br/><span className="text-osg-navy/10">Matrices.</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-1/3 border-l border-osg-gold pl-12">
               <p className="text-[10px] text-osg-navy/40 uppercase tracking-[0.4em] font-black leading-relaxed">
                    Precision-machined mullions and transoms engineered for high-altitude wind resistance and solar performance benchmarks.
               </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {systems.map((s, i) => (
              <motion.div 
                key={s.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group space-y-8"
              >
                <div className="aspect-[3/4] relative rounded-[3rem] overflow-hidden border border-osg-navy/5 shadow-premium">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute top-10 left-10">
                     <span className="bg-osg-gold text-osg-navy text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2.5 rounded-full shadow-2xl">{s.tag}</span>
                  </div>
                </div>
                <div className="space-y-5">
                  <h3 className="text-4xl font-sans font-black text-osg-navy uppercase tracking-tight leading-none group-hover:text-osg-gold transition-colors">{s.title}</h3>
                  <div className="w-16 h-[1px] bg-osg-gold/20 group-hover:w-24 group-hover:bg-osg-gold transition-all duration-500" />
                  <p className="text-lg text-osg-navy/40 font-sans leading-relaxed line-clamp-3">{s.desc}</p>
                  <Link href="/resources/downloads" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-osg-navy px-6 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white transition-all hover:bg-osg-gold hover:text-osg-navy">
                    Technical Data <ArrowRight size={16} />
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
                   <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Technical Depth // 03</span>
                </motion.div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black uppercase tracking-tight leading-tight">Envelope <span className="text-osg-gold">Schematics.</span></h2>
                <p className="text-lg sm:text-xl text-white/50 font-sans leading-relaxed max-w-2xl">
                    Review the structural performance, thermal break efficiency, and seismic movement tolerances of our unitized and stick facade systems.
                </p>
            </div>
            
            <TechShowcase categoryKey="CurtainWall" />
        </div>
      </section>

      {/* Engineering Benchmarks: Luxury Technical Bar */}
      <section className="bg-white py-40 relative overflow-hidden border-t border-osg-navy/5">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02]" />
        <div className="container-clean flex flex-col lg:flex-row items-center justify-between gap-32">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-1 space-y-10">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Structural Performance</span>
                </div>
                <h3 className="text-[4rem] lg:text-[6rem] text-osg-navy font-sans font-black uppercase tracking-tight mb-8 leading-[0.9]">Engineered <br/><span className="text-osg-navy/10">Integrity.</span></h3>
                <p className="text-[11px] text-osg-navy/40 font-black uppercase tracking-[0.4em]">Tested to ASTM and EN standards for high-span envelopes.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {capabilities.map((c, i) => (
                    <motion.div 
                      key={c.title} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center md:items-start text-center md:text-left group"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-[#F8F9FB] flex items-center justify-center text-osg-navy group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 mb-10 shadow-premium">
                            <c.icon size={28} />
                        </div>
                        <h4 className="text-2xl font-sans font-black text-osg-navy uppercase tracking-tight mb-6">{c.title}</h4>
                        <p className="text-lg text-osg-navy/40 font-sans leading-relaxed max-w-[220px]">{c.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Call to Engineering: Final CTA */}
      <section className="py-48 bg-[#F8F9FB] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02]" />
        <div className="container-clean max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-20 lg:p-32 border border-osg-navy/5 rounded-[5rem] relative overflow-hidden shadow-premium bg-white"
          >
            <div className="space-y-12 relative z-10">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">Engineering Brief</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tight leading-[0.8] font-sans">Consult our <br/><span className="text-osg-navy/10">Facade Engineers.</span></h2>
              <p className="text-2xl text-osg-navy/40 max-w-3xl mx-auto font-sans leading-relaxed">
                  From initial concept to structural calculation and unitization, we provide the technical expertise for your building envelope.
              </p>
              <div className="flex flex-wrap justify-center gap-10 pt-8">
                  <Link href="/contact" className="btn-cta !px-16 py-6 !text-[11px]">REQUEST STRUCTURAL REVIEW</Link>
                  <Link href="/resources/downloads" className="flex items-center gap-6 px-12 py-6 rounded-full border border-osg-navy/10 text-[11px] font-black uppercase tracking-widest text-osg-navy hover:bg-osg-navy hover:text-white transition-all">DOWNLOAD CAD PROFILES</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

