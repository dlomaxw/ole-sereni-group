'use client';

import { Shield, Flame, Zap, CheckCircle, ArrowRight, Layers, Box, Factory, Ruler, Download, ShieldCheck, Clock, Terminal, Activity, Monitor } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';


const highlightFeatures = [
  {
    icon: Shield,
    title: 'Impact Resistance',
    desc: 'Reinforced material selection designed to withstand heavy machinery and constant logistics movement.',
  },
  {
    icon: Flame,
    title: 'Fire Safety Compliance',
    desc: 'Rigorous adherence to international safety standards, utilizing non-combustible partitions.',
  },
  {
    icon: Zap,
    title: 'Fast-Track Delivery',
    desc: 'Modular installation techniques and optimized supply chain management to minimize downtime.',
  },
];

const infrastructureSectors = [
  {
    id: '01',
    title: 'High-Traffic Flooring',
    desc: 'From epoxy resins to high-load architectural concrete, we provide flooring solutions that serve as the foundation for retail success and industrial efficiency.',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=800&auto=format&fit=crop',
    points: ['Anti-Slip Certification', 'Chemical Resistant Coatings', 'Zero-Maintenance Thresholds'],
    overlayTitle: 'Diamond Polish Finish',
    overlayDesc: 'Our proprietary finishing process increases surface density by 40%, ensuring decade-long durability.',
    reversed: false
  },
  {
    id: '02',
    title: 'Structural Partitioning',
    desc: 'High-span gypsum and aluminium wall systems designed to meet fire and acoustic requirements in massive warehouse or mall environments.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop',
    points: ['60-120 Min Fire Rating', 'Sound Transmission Class 55+', 'Seismic Brace Options'],
    overlayTitle: 'Integrity Rating',
    overlayDesc: 'Independently tested for thermal and structural load-bearing capacity under stress.',
    reversed: true
  }
];

const technicalBenchmarks = [
    { label: 'Surface Density', value: '+40% Opt.', desc: 'Enhanced impact resilience for logistics.' },
    { label: 'Slip Resistance', value: 'R11 / PTV36', desc: 'Safety-certified flooring solutions.' },
    { label: 'Thermal Shield', value: '0.28 G-Val', desc: 'Solar control for massive skylights.' },
    { label: 'Load Limit', value: '1,500 kg', desc: 'Per m² structural reinforcement.' },
];

const requirements = [
  { icon: ShieldCheck, title: 'Intrusion Security', desc: 'Laminated glass and reinforced framing systems.' },
  { icon: Clock, title: 'Rapid Deployment', desc: 'Pre-assembled unitized systems for fast fit-outs.' },
  { icon: Activity, title: 'Energy Efficiency', desc: 'Thermal breaks and solar-control glazing integration.' },
];

export default function RetailIndustrialPage() {
  return (
    <main className="bg-osg-navy font-sans">
      <PageHero
        label="Industries / Commerce"
        title="Commercial"
        titleHighlight="Precision."
        subtitle="Driving business performance through architectural excellence. Our systems are engineered for the high-intensity demands of retail and industrial operations."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Retail & Industrial' }]}
        ctaPrimary={{ label: 'Commercial Portfolio', href: '/projects' }}
        ctaSecondary={{ label: 'Technical Standards', href: '/resources/downloads' }}
      />

      {/* Sector DNA Meta-data */}
      <section className="bg-osg-navy-mid py-12 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
        <div className="container-osg relative z-10">
          <div className="flex flex-wrap justify-between items-center gap-10">
            {technicalBenchmarks.map((spec, i) => (
              <Reveal key={spec.label} delay={i * 0.1} className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-osg-gold transition-colors">
                    <span className="text-osg-gold font-black text-xs italic">{i + 1}</span>
                </div>
                <div>
                    <span className="block text-[10px] uppercase font-black tracking-[0.2em] text-osg-slate mb-1">{spec.label}</span>
                    <span className="block text-xl font-black text-white italic tracking-tighter leading-none">{spec.value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial High-Intensity Highlight */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Detail */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none opacity-50" />
        
        <div className="container-osg relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-32">
            {highlightFeatures.map((feat, i) => (
              <Reveal key={feat.title} delay={i * 0.1}>
                <div className="p-10 bg-[#f8f9f8] border border-osg-navy/5 group hover:bg-osg-navy transition-all duration-700 shadow-2xl shadow-osg-navy/5 h-full">
                  <feat.icon className="text-osg-gold mb-10 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-2xl font-black text-osg-navy group-hover:text-white mb-6 uppercase tracking-tighter italic leading-none transition-colors">{feat.title}</h3>
                  <p className="text-osg-navy/40 group-hover:text-white/40 text-[11px] font-black uppercase tracking-widest leading-relaxed transition-colors">{feat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-48">
            {infrastructureSectors.map((sec, i) => (
              <div key={sec.id} className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
                <div className={`${sec.reversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'} relative order-1`}>
                    <Reveal className="aspect-video bg-osg-charcoal overflow-hidden border border-osg-navy/5 shadow-2xl relative group">
                        <Image 
                            src={sec.image} 
                            alt={sec.title}
                            fill
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" 
                        />
                        <div className="absolute top-10 right-10 flex items-center gap-4">
                            <span className="bg-osg-gold text-osg-navy text-[9px] font-black uppercase tracking-widest px-5 py-2 shadow-2xl">Infrastructure {sec.id}</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </Reveal>
                    {sec.overlayTitle && (
                        <Reveal delay={0.2} className="absolute -bottom-10 -right-10 bg-osg-navy p-10 hidden lg:block max-w-xs shadow-2xl border border-white/5 overflow-hidden group">
                           <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
                           <div className="relative z-10">
                                <h4 className="text-osg-gold font-black text-2xl mb-4 italic uppercase tracking-tighter leading-none">{sec.overlayTitle}</h4>
                                <p className="text-[10px] text-white/30 leading-relaxed font-black uppercase tracking-[0.2em]">{sec.overlayDesc}</p>
                           </div>
                        </Reveal>
                    )}
                </div>
                <div className={`${sec.reversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'} space-y-10 order-2`}>
                  <Reveal>
                    <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.5em] mb-10 block leading-none">Engineering Spec</span>
                    <h3 className="text-5xl lg:text-6xl text-osg-navy mt-4 uppercase tracking-tighter italic font-black leading-none">{sec.title}</h3>
                    <p className="text-osg-navy/50 text-xl font-light leading-relaxed mt-10">{sec.desc}</p>
                    <div className="space-y-4 mt-12 mb-12">
                      {sec.points.map(point => (
                        <div key={point} className="flex items-center gap-4 text-[10px] font-black text-osg-navy uppercase tracking-widest border-l-2 border-osg-gold pl-4 transition-transform group-hover:translate-x-1">
                          {point}
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="text-osg-navy font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-4 group-hover:gap-6 transition-all border-b-2 border-osg-navy/10 pb-2 w-fit hover:border-osg-gold hover:text-osg-gold">
                      IDENTIFY BENCHMARKS <ArrowRight size={14} />
                    </Link>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Matrix Showcase */}
      <section className="section-padding bg-osg-navy relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="container-osg relative z-10">
          <div className="max-w-3xl mb-24">
            <Reveal>
              <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.5em] mb-8 block leading-none">Execution Matrix</span>
              <h2 className="text-5xl lg:text-7xl text-white font-black uppercase tracking-tighter italic font-black leading-none">Portfolio <br /><span className="text-white/20">Showcase.</span></h2>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6">
            <Reveal className="md:col-span-2 md:row-span-2 relative group overflow-hidden border border-white/5 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800" 
                alt="Retail"
                fill
                className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/95 via-osg-navy/20 to-transparent flex flex-col justify-end p-12 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <Monitor className="text-osg-gold mb-10" size={40} />
                <h4 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-4 leading-none">Luxury <br/>Flagship Concept.</h4>
                <p className="text-osg-gold text-[10px] font-black uppercase tracking-widest">Retail Sector / Deployment 2024</p>
              </div>
            </Reveal>
            <Reveal className="md:col-span-2 relative group overflow-hidden border border-white/5 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800" 
                alt="Industrial"
                fill
                className="object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/90 via-transparent to-transparent p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-2">Distribution Center</h4>
                <p className="text-osg-gold text-[9px] font-black uppercase opacity-60 tracking-widest">Light Industrial / 2023</p>
              </div>
            </Reveal>
            <Reveal className="bg-white/5 border border-white/5 p-10 flex flex-col justify-center text-center hover:bg-osg-gold group transition-all duration-500 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
               <Layers className="text-osg-gold mx-auto mb-8 group-hover:text-osg-navy group-hover:scale-110 transition-all duration-500 relative z-10" size={40} />
               <h4 className="text-white text-[11px] font-black uppercase tracking-[0.2em] group-hover:text-osg-navy relative z-10">Boutique Fit-out</h4>
            </Reveal>
            <Reveal className="bg-white/5 border border-white/5 p-10 flex flex-col justify-center text-center hover:bg-osg-gold group transition-all duration-500 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
               <Factory className="text-osg-gold mx-auto mb-8 group-hover:text-osg-navy group-hover:scale-110 transition-all duration-500 relative z-10" size={40} />
               <h4 className="text-white text-[11px] font-black uppercase tracking-[0.2em] group-hover:text-osg-navy relative z-10">Structural Core</h4>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Requirements Benchmarks Banner */}
      <section className="bg-white py-24 border-t border-osg-navy/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
        <div className="container-osg flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            <div className="max-w-2xl">
                <Terminal className="text-osg-gold mb-8" size={32} />
                <h3 className="text-osg-navy text-5xl font-black uppercase tracking-tighter italic mb-6 leading-none">Standardized <br/><span className="text-osg-navy/20">Protocols.</span></h3>
                <p className="text-osg-navy/40 text-[10px] uppercase tracking-[0.4em] font-black leading-relaxed">We adhere to global security and energy safety codes for high-throughput commercial architecture.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
                {requirements.map((r, i) => (
                    <Reveal key={r.title} delay={i * 0.1}>
                        <div className="flex flex-col items-center lg:items-start group">
                            <r.icon size={28} className="text-osg-gold mb-6 group-hover:translate-y-[-4px] transition-transform" />
                            <h4 className="text-osg-navy text-[11px] font-black uppercase tracking-widest mb-3 leading-none transition-colors group-hover:text-osg-gold">{r.title}</h4>
                            <p className="text-osg-navy/40 text-[10px] leading-relaxed max-w-[180px] uppercase font-black tracking-widest transition-colors group-hover:text-osg-navy/60">{r.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="section-padding-lg bg-[#fcfdfc] text-center border-t border-osg-navy/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-osg relative z-10">
          <Reveal className="max-w-4xl mx-auto space-y-12">
            <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.5em] mb-12 block leading-none">Operational Mandate</span>
            <h2 className="text-5xl lg:text-8xl text-osg-navy font-black uppercase tracking-tighter leading-[0.8] mb-12 italic">Secure Structural <br /><span className="text-osg-navy/20">Foundations.</span></h2>
            <p className="text-lg text-osg-navy/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed">Partner with Ole Sereni Group for industrial-grade excellence in retail environments. Our engineers are ready to discuss your durability requirements.</p>
            
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/contact" className="btn-primary py-6 px-14 group shadow-2xl">
                Consult Our Engineers <Ruler size={18} className="ml-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link href="/resources/downloads" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy py-6 px-14 text-[10px] font-black uppercase tracking-widest transition-all">Industry Dossier <Download size={18} className="ml-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
