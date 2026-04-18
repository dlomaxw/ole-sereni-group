'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Layers, Thermometer, ShieldCheck, Download, Wind, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import TechShowcase from '@/components/TechShowcase';
import { ClickableImage } from '@/components/ClickableImage';

const systems = [
  {
    title: 'CW-50 Stick System',
    desc: 'The versatile standard for aluminum glass facades. Featuring a 50mm face width and extensive profile depths for varying wind loads. Millimetre-precision engineering for stick-frame assembly.',
    image: '/images/curtain-wall-cw50.jpg',
    tag: 'Versatile',
  },
  {
    title: 'SG-Series Glazing',
    desc: 'Bespoke structural glazing with no external caps. Creates a seamless "all-glass" aesthetic with extreme weather resistance and high-performance silicone sealing.',
    image: '/images/curtain-wall-sg-series.jpg',
    tag: 'Aesthetic',
  },
  {
    title: 'Unitized Facades',
    desc: 'Modular facade units pre-assembled in factory conditions for high-speed installation on high-rise commercial structures and extreme wind-load areas.',
    image: '/images/curtain-wall-unitized.jpg',
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
    <main className="bg-osg-navy font-sans">
      <PageHero
        label="Solutions / Products"
        title="Facade"
        titleHighlight="Envelopes."
        subtitle="Scale without compromise. Our curtain wall systems provide the structural backbone for the world's most ambitious glazed architectures."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Curtain Wall' }]}
        ctaPrimary={{ label: 'Technical Diagrams', href: '/resources/downloads' }}
        ctaSecondary={{ label: 'Consult Engineer', href: '/contact' }}
      />

      {/* Hero Catalog Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Detail */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none opacity-50" />
        
        <div className="container-osg relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <Reveal>
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Envelope Systems // 03</span>
              <h2 className="text-display-sm text-osg-navy font-black uppercase tracking-tighter italic leading-none">Glazing <br/><span className="text-osg-navy/20">Matrices.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
                <div className="lg:w-1/3 border-l-2 border-osg-gold pl-10">
                   <p className="text-osg-navy/40 text-[10px] uppercase tracking-[0.3em] font-black leading-relaxed">
                        Precision-machined mullions and transoms engineered for high-altitude wind resistance and solar performance benchmarks.
                   </p>
                </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {systems.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.15}>
                <div className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-osg-charcoal mb-12 relative border border-osg-navy/5 shadow-2xl transition-all duration-1000 cursor-pointer">
                    <ClickableImage
                      src={s.image}
                      alt={s.title}
                      fill
                      className="!relative w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                      showHover={true}
                    />
                    {/* Measurement Overlay */}
                    <div className="absolute top-1/2 left-10 right-10 flex justify-between items-center opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none">
                        <div className="h-px bg-white/50 w-full" />
                        <span className="px-4 text-[9px] text-white font-black whitespace-nowrap">EXTERIOR LINE</span>
                        <div className="h-px bg-white/50 w-full" />
                    </div>
                    <div className="absolute top-10 left-10">
                       <span className="bg-osg-gold text-osg-navy text-[9px] font-black uppercase tracking-widest px-4 py-1.5 shadow-xl">{s.tag}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-osg-navy uppercase tracking-tighter mb-4 transition-colors group-hover:text-osg-gold leading-none">{s.title}</h3>
                  <div className="h-px w-12 bg-osg-navy/10 mb-6 group-hover:w-24 group-hover:bg-osg-gold transition-all duration-500" />
                  <p className="text-sm text-osg-navy/50 leading-relaxed font-light mb-10 min-h-[60px]">{s.desc}</p>
                  <Link href="/contact" className="flex items-center gap-4 text-osg-gold text-[10px] font-black uppercase tracking-[0.4em] hover:gap-6 transition-all">
                    TECHNICAL DATA <ArrowRight size={14} />
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
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Technical Depth // 03</span>
                    <h2 className="text-display-xs lg:text-display-sm text-white font-black uppercase tracking-tighter italic">Envelope <br /><span className="text-osg-gold">Schematics.</span></h2>
                    <p className="mt-6 text-white/50 text-lg max-w-xl">
                        Review the structural performance, thermal break efficiency, and seismic movement tolerances of our unitized and stick facade systems.
                    </p>
                </Reveal>
            </div>
            
            <Reveal delay={0.2}>
                <TechShowcase categoryKey="CurtainWall" />
            </Reveal>
        </div>
      </section>

      {/* Engineering Benchmarks */}
      <section className="bg-osg-navy py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="container-osg relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1">
                <span className="text-osg-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 block font-sans">Structural Performance</span>
                <h3 className="text-white text-5xl font-black uppercase tracking-tighter italic mb-6 leading-none">Engineered <br/>Integrity.</h3>
                <p className="text-white/30 text-xs font-black uppercase tracking-[0.4em]">Tested to ASTM and EN standards for high-span envelopes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {capabilities.map((c, i) => (
                    <Reveal key={c.title} delay={i * 0.1}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 text-osg-gold mb-8 hover:bg-osg-gold hover:text-osg-navy transition-all">
                                <c.icon size={24} />
                            </div>
                            <h4 className="text-white text-[11px] font-black uppercase tracking-widest mb-3">{c.title}</h4>
                            <p className="text-white/30 text-[10px] leading-relaxed max-w-[180px] font-medium">{c.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* Call to Engineering */}
      <section className="section-padding-lg bg-[#fcfdfc] text-center border-t border-osg-navy/5">
        <div className="container-osg">
          <Reveal>
            <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.5em] mb-10 block">Engineering Brief</span>
            <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter mb-10 italic leading-none">Consult our <br/><span className="text-osg-navy/20">Facade Engineers.</span></h2>
            <p className="text-lg text-osg-navy/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed">From initial concept to structural calculation and unitization, we provide the technical expertise for your building envelope.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="btn-primary py-6 px-14">Request Structural Review</Link>
              <Link href="/resources/downloads" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy py-6 px-14 text-[10px] font-black uppercase tracking-widest transition-all">Download CAD Profiles</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
