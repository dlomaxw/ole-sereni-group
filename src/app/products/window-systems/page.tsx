'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Thermometer, Volume2, ShieldCheck, Settings, Wind, Maximize2, Waves } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import TechShowcase from '@/components/TechShowcase';


const windowSystems = [
  {
    title: 'Series 70 Casement',
    desc: 'The definitive solution for high-performance side-hung or top-hung ventilation. Featuring double-glazing capacity up to 32mm.',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000&auto=format&fit=crop',
    tag: 'Standard',
  },
  {
    title: 'Horizon Sliding',
    desc: 'Invisible sills and ultra-thin 20mm sightlines for uninterrupted panoramic views. Precision engineered tandem rollers.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop',
    tag: 'Premium',
  },
  {
    title: 'Master Tilt & Turn',
    desc: 'Dual-function engineering for secure ventilation and easy exterior cleaning access. Multi-point locking as standard.',
    image: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=1000&auto=format&fit=crop',
    tag: 'Advanced',
  },
];

const metrics = [
  { icon: Thermometer, label: 'Thermal Performance', value: '0.85 W/m²K', pct: 92, desc: 'ISO 10077-1 compliant.' },
  { icon: Volume2, label: 'Acoustic Attenuation', value: '48 dB', pct: 85, desc: 'Maximum silence.' },
  { icon: ShieldCheck, label: 'Security Class', value: 'RC3 / WK3', pct: 78, desc: 'Burglar resistance.' },
];

const hardware = [
  { name: 'Brushed Brass', tool: 'Standard Lever', color: '#B5A642' },
  { name: 'Noir Matte', tool: 'Signature Series', color: '#1A1A1A' },
  { name: 'Satin Steel', tool: 'Industrial Strength', color: '#A0A0A0' },
  { name: 'Smart Access', tool: 'Biometric', icon: Settings },
];

export default function WindowSystemsPage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Solutions / Products"
        title="Structural"
        titleHighlight="Precision."
        subtitle="Engineered for the modern envelope. Our premium aluminium window profiles merge minimalist aesthetics with extreme thermal efficiency."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Window Systems' }]}
        ctaPrimary={{ label: 'Technical Specs', href: '/resources/downloads' }}
        ctaSecondary={{ label: 'Get a Quote', href: '/quote' }}
      />

      {/* System Variations: Luxury Architectural Catalog */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        
        <div className="container-clean">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl space-y-10">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                 <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Product Range // 01</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tighter leading-[0.85] font-sans">System <br/><span className="text-osg-navy/10">Variations.</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-1/3 border-l border-osg-gold pl-12">
               <p className="text-[10px] text-osg-navy/40 uppercase tracking-[0.4em] font-black leading-relaxed">
                    Select the optimal window configuration for your structural envelope, from panoramic sliding systems to high-ventilation casements.
               </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {windowSystems.map((sys, i) => (
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
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1500ms] opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute top-10 left-10">
                     <span className="bg-osg-gold text-osg-navy text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2.5 rounded-full shadow-2xl">{sys.tag}</span>
                  </div>
                  {/* Dimensional Architecture Lines Overlay */}
                  <div className="absolute inset-x-12 top-1/2 h-[1px] bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000" />
                  <div className="absolute inset-y-12 left-1/2 w-[1px] bg-white/20 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-1000" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl font-sans font-black text-osg-navy uppercase tracking-tight leading-none group-hover:text-osg-gold transition-colors">{sys.title}</h3>
                  <div className="w-16 h-[1px] bg-osg-gold/20 group-hover:w-24 group-hover:bg-osg-gold transition-all duration-500" />
                  <p className="text-lg text-osg-navy/40 font-sans leading-relaxed line-clamp-3">{sys.desc}</p>
                  <Link href="/quote" className="btn-cta w-full justify-center group !py-5 !text-[10px]">
                    CONFIGURE TECHNICAL SPEC <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
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
                   <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Technical Depth // 01</span>
                </motion.div>
                <h2 className="text-[4rem] lg:text-[7rem] font-sans font-black uppercase tracking-tighter leading-[0.85]">Structural <br /><span className="text-osg-gold">Extraction.</span></h2>
                <p className="text-2xl text-white/40 font-sans leading-relaxed max-w-2xl">
                    Review the thermal transmittance, acoustic reduction, and security classifications of our premium casement and sliding window systems.
                </p>
            </div>
            
            <TechShowcase categoryKey="WindowSystems" />
        </div>
      </section>

      {/* Performance Benchmarks: High-Fidelity Data Modules */}
      <section className="py-56 bg-white relative overflow-hidden border-t border-osg-navy/5">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        <div className="container-clean">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-7 space-y-16">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
                <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.6em] mb-10 block leading-none">Technical Benchmarks</span>
                <h2 className="text-[4rem] lg:text-[7.5rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-[0.85]">Engineered <br/><span className="text-osg-navy/10">Performance.</span></h2>
              </motion.div>
              
              <div className="space-y-20">
                {metrics.map((m, i) => (
                  <motion.div 
                    key={m.label} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center gap-10 mb-8">
                      <div className="w-20 h-20 flex-shrink-0 rounded-2xl bg-[#F8F9FB] border border-osg-navy/5 flex items-center justify-center text-osg-navy group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 shadow-premium">
                        <m.icon size={28} />
                      </div>
                      <div className="flex-1 space-y-6">
                        <div className="flex justify-between items-end">
                           <h4 className="text-2xl font-sans font-black text-osg-navy uppercase tracking-tight">{m.label}</h4>
                           <span className="text-3xl font-sans font-black text-osg-gold">{m.value}</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#F8F9FB] rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${m.pct}%` }}
                             transition={{ duration: 2, ease: "circOut" }}
                             viewport={{ once: true }}
                             className="h-full bg-osg-navy"
                           />
                        </div>
                        <p className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.5em]">{m.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative bg-[#F8F9FB] p-20 lg:p-32 rounded-[5rem] overflow-hidden border border-osg-navy/5 shadow-premium group min-h-[600px] flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02]" />
              <div className="relative z-10 space-y-12">
                  <span className="text-osg-gold text-[10px] uppercase tracking-[0.6em] font-black mb-10 block">Structural Resources</span>
                  <h3 className="text-[3rem] lg:text-[4rem] text-osg-navy font-sans font-black uppercase tracking-tight leading-none group-hover:text-osg-gold transition-colors duration-700">Access full structural data.</h3>
                  <p className="text-xl text-osg-navy/40 font-sans leading-relaxed">
                    Download the comprehensive technical catalog including profile dimensions, hardware options, and wind-load performance charts.
                  </p>
              </div>
              <div className="relative z-10 pt-16">
                  <button className="btn-cta w-full justify-center !py-6 group !text-[10px]">
                    <Download size={20} className="mr-4 group-hover:translate-y-1 transition-transform" /> DOWNLOAD TECHNICAL CATALOG
                  </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tactile Precision: Luxury Hardware Grid */}
      <section className="py-48 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-40 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl space-y-10">
                <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.6em] mb-6 block leading-none">Interface Components</span>
                <h2 className="text-[4rem] lg:text-[7rem] font-sans font-black uppercase tracking-tighter leading-[0.85]">Tactile <br/><span className="text-white/10">Precision.</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-1/3 border-l border-osg-gold pl-12">
               <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-black leading-relaxed">
                    The interface between user and architecture. Tactile quality engineered into every interaction through premium hardware finish series.
               </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {hardware.map((h, i) => (
              <motion.div 
                key={h.name} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/5 p-16 rounded-[4rem] text-center group hover:border-osg-gold transition-all duration-700 shadow-2xl"
              >
                <div className="aspect-square flex items-center justify-center mb-10 relative">
                  {h.icon ? (
                    <h.icon size={64} className="text-white/10 group-hover:text-osg-gold transition-all duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="w-24 h-24 rounded-full group-hover:scale-110 transition-transform shadow-2xl border-[6px] border-white/10" style={{ backgroundColor: h.color }} />
                  )}
                </div>
                <h5 className="text-2xl font-sans font-black text-white group-hover:text-osg-gold mb-3 uppercase tracking-tight transition-colors">{h.name}</h5>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-white transition-colors">{h.tool}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA: Ready to Specify */}
      <section className="py-64 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02]" />
        <div className="container-clean">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">Consultation Lead</span>
            </div>
            <h2 className="text-[4rem] lg:text-[8rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-none">Ready to <br/><span className="text-osg-navy/10">Specify?</span></h2>
            <p className="text-2xl text-osg-navy/40 max-w-3xl mx-auto font-sans leading-relaxed">Consult with our engineering team to integrate OSG Window Systems into your structural envelope.</p>
            <div className="flex flex-wrap justify-center gap-10 pt-8">
              <Link href="/contact" className="btn-cta !px-16 py-6 !text-[11px]">TALK TO AN ENGINEER</Link>
              <Link href="/quote" className="flex items-center gap-6 px-12 py-6 rounded-full border border-osg-navy/10 text-[11px] font-black uppercase tracking-widest text-osg-navy hover:bg-osg-navy hover:text-white transition-all">REQUEST BULK QUOTE</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

