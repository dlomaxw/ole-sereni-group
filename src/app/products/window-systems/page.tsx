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
    <main className="bg-osg-navy">
      <PageHero
        label="Solutions / Products"
        title="Structural"
        titleHighlight="Precision."
        subtitle="Engineered for the modern envelope. Our premium aluminium window profiles merge minimalist aesthetics with extreme thermal efficiency."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Window Systems' }]}
        ctaPrimary={{ label: 'Technical Specs', href: '/resources/downloads' }}
        ctaSecondary={{ label: 'Get a Quote', href: '/quote' }}
      />

      {/* Variations Section: Technical Catalog Style */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none opacity-50" />
        
        <div className="container-osg relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <Reveal>
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Product Range // 01</span>
              <h2 className="text-display-sm text-osg-navy font-black uppercase tracking-tighter italic">System <br/><span className="text-osg-navy/20">Variations.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
                <div className="h-px w-32 bg-osg-gold mb-4" />
                <p className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] text-osg-navy/30">Select Configuration</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {windowSystems.map((sys, i) => (
              <Reveal key={sys.title} delay={i * 0.15}>
                <div className="group relative">
                    <div className="aspect-[3/4] overflow-hidden bg-osg-navy relative border border-osg-navy/5">
                        <Image 
                        src={sys.image} 
                        alt={sys.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                        />
                        <div className="absolute top-6 right-6 bg-osg-gold text-osg-navy px-4 py-1.5 text-[9px] font-black uppercase tracking-widest shadow-xl">
                        {sys.tag}
                        </div>
                        {/* Dimensional Lines Overlay */}
                        <div className="absolute inset-x-8 top-1/2 h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                        <div className="absolute inset-y-8 left-1/2 w-px bg-white/20 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-700" />
                    </div>
                    <div className="pt-8">
                        <h3 className="text-2xl font-black text-osg-navy mb-4 uppercase tracking-tighter transition-colors group-hover:text-osg-gold">{sys.title}</h3>
                        <p className="text-sm text-osg-navy/60 mb-8 font-light leading-relaxed">{sys.desc}</p>
                        <Link href="/quote" className="flex items-center gap-3 text-osg-gold text-[10px] font-black uppercase tracking-[0.3em] hover:gap-6 transition-all border-b border-osg-gold/20 pb-2 inline-block">
                        Configure Technical Spec <ArrowRight size={14} />
                        </Link>
                    </div>
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
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Technical Depth // 01</span>
                    <h2 className="text-display-xs lg:text-display-sm text-white font-black uppercase tracking-tighter italic">Structural <br /><span className="text-osg-gold">Extraction.</span></h2>
                    <p className="mt-6 text-white/50 text-lg max-w-xl">
                        Review the thermal transmittance, acoustic reduction, and security classifications of our premium casement and sliding window systems.
                    </p>
                </Reveal>
            </div>
            
            <Reveal delay={0.2}>
                <TechShowcase categoryKey="WindowSystems" />
            </Reveal>
        </div>
      </section>

      {/* Performance Section: Data Visualization */}
      <section className="section-padding bg-osg-navy relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-noise opacity-5" />
        <div className="container-osg relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <Reveal>
                <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.5em] mb-10 block leading-none">Technical Benchmarks</span>
                <h2 className="text-display-md text-white font-black uppercase tracking-tighter leading-[0.85] italic mb-12">Engineered <br/><span className="text-osg-gold">Performance.</span></h2>
              </Reveal>
              <div className="space-y-12">
                {metrics.map((m, i) => (
                  <Reveal key={m.label} delay={i * 0.1}>
                    <div className="group">
                      <div className="flex items-center gap-8 mb-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 text-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500">
                          <m.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-end mb-4">
                            <h4 className="text-lg font-black text-white uppercase tracking-tight">{m.label}</h4>
                            <span className="text-xl text-osg-gold font-black italic">{m.value}</span>
                          </div>
                          <div className="h-1 w-full bg-white/5 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${m.pct}%` }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              className="h-full bg-osg-gold"
                            />
                          </div>
                          <p className="text-[9px] text-white/30 uppercase tracking-[0.4em] mt-4 font-black">{m.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.2}>
              <div className="relative bg-white/5 p-16 overflow-hidden min-h-[600px] flex items-center justify-center border border-white/10 group">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="relative z-10 text-center max-w-sm">
                  <span className="text-osg-gold text-[10px] uppercase tracking-[0.5em] font-black mb-10 block">Structural Resources</span>
                  <h3 className="text-white text-5xl font-black uppercase tracking-tighter italic mb-12 leading-none">Access the full structural data.</h3>
                  <button className="btn-primary !bg-white !text-osg-navy mx-auto py-5 px-10">
                    <Download size={18} /> DOWNLOAD TECHNICAL CATALOG
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Hardware Options: Tactical Grid */}
      <section className="section-padding bg-white">
        <div className="container-osg">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-10">
            <div className="max-w-xl">
                <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.5em] mb-6 block leading-none">Interface Components</span>
                <h2 className="text-display-sm text-osg-navy font-black uppercase tracking-tighter leading-none">Tactile <br/><span className="text-osg-navy/20 italic">Precision.</span></h2>
            </div>
            <p className="lg:w-1/3 text-xs text-osg-navy/40 uppercase tracking-[0.2em] font-bold leading-relaxed border-l-2 border-osg-gold pl-8">
                The interface between user and architecture. Tactile quality engineered into every interaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-osg-navy/10">
            {hardware.map((h, i) => (
              <Reveal key={h.name} delay={i * 0.1}>
                <div className="bg-white p-16 text-center group transition-colors duration-700 hover:bg-osg-navy">
                  <div className="aspect-square flex items-center justify-center mb-10 relative">
                    {h.icon ? (
                      <h.icon size={56} className="text-osg-navy/20 group-hover:text-osg-gold transition-all duration-700 group-hover:scale-110" />
                    ) : (
                      <div className="w-20 h-20 rounded-full group-hover:scale-110 transition-transform shadow-2xl border-4 border-white/10" style={{ backgroundColor: h.color }} />
                    )}
                  </div>
                  <h5 className="text-lg font-black text-osg-navy group-hover:text-white mb-2 uppercase tracking-tighter transition-colors">{h.name}</h5>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-osg-navy/30 group-hover:text-osg-gold transition-colors font-black">{h.tool}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding-lg bg-[#fcfdfc] text-center border-t border-osg-navy/5">
        <div className="container-osg">
          <Reveal>
            <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.5em] mb-10 block">Consultation Lead</span>
            <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter mb-10 italic leading-none">Ready to <span className="text-osg-navy/20">Specify?</span></h2>
            <p className="text-xl text-osg-navy/60 mb-14 max-w-2xl mx-auto font-light leading-relaxed">Consult with our engineering team to integrate OSG Window Systems into your structural envelope.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="btn-primary py-6 px-14">Talk to an Engineer</Link>
              <Link href="/quote" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy py-6 px-14 uppercase tracking-widest text-[11px] font-black">Request Bulk Quote</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
