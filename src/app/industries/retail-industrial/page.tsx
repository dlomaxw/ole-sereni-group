'use client';

import { motion } from 'framer-motion';
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
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop',
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
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Industries / Commerce"
        title="Commercial"
        titleHighlight="Precision."
        subtitle="Driving business performance through architectural excellence. Our systems are engineered for the high-intensity demands of retail and industrial operations."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Retail & Industrial' }]}
        ctaPrimary={{ label: 'Commercial Portfolio', href: '/projects' }}
        ctaSecondary={{ label: 'Technical Standards', href: '/resources/downloads' }}
      />

      {/* Sector DNA Meta-data: High-Fidelity Data Bar */}
      <section className="bg-[#0B1C2C] py-20 relative overflow-hidden border-y border-white/5 shadow-2xl">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {technicalBenchmarks.map((spec, i) => (
              <motion.div 
                key={spec.label} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-10 group"
              >
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-2xl">
                    <span className="text-osg-gold font-sans font-black text-2xl group-hover:text-osg-navy">{i + 1}</span>
                </div>
                <div className="space-y-2">
                    <span className="block text-[10px] uppercase font-black tracking-[0.4em] text-white/30 group-hover:text-osg-gold transition-colors">{spec.label}</span>
                    <span className="block text-3xl font-sans font-black text-white tracking-tight leading-none">{spec.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial High-Intensity Highlight: Luxury Tech Cards */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-48">
            {highlightFeatures.map((feat, i) => (
              <motion.div 
                key={feat.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-16 bg-[#F8F9FB] rounded-[4rem] border border-osg-navy/5 transition-all duration-700 hover:bg-[#0B1C2C] hover:border-osg-gold shadow-premium h-full flex flex-col justify-between group-hover:-translate-y-2">
                  <div className="space-y-12">
                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-osg-gold shadow-xl group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 group-hover:rotate-6">
                      <feat.icon size={40} />
                    </div>
                    <h3 className="text-3xl font-sans font-black text-osg-navy group-hover:text-white uppercase tracking-tight transition-colors leading-none">{feat.title}</h3>
                    <p className="text-lg text-osg-navy/40 group-hover:text-white/40 font-sans leading-relaxed transition-colors">{feat.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-64">
            {infrastructureSectors.map((sec, i) => (
              <div key={sec.id} className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-40 items-center">
                <div className={`${sec.reversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'} relative order-1`}>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="aspect-video bg-[#0B1C2C] rounded-[5rem] overflow-hidden border border-osg-navy/5 shadow-premium relative group"
                    >
                        <Image 
                            src={sec.image} 
                            alt={sec.title}
                            fill
                            className="object-cover grayscale opacity-30 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[2000ms]" 
                        />
                        <div className="absolute top-12 left-12">
                            <span className="bg-osg-gold text-osg-navy text-[10px] font-black uppercase tracking-[0.5em] px-8 py-4 rounded-full shadow-2xl">Infrastructure {sec.id}</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-osg-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none bg-grid-blueprint" />
                    </motion.div>
                    
                    {sec.overlayTitle && (
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                          className="absolute -bottom-16 -right-16 bg-[#0B1C2C] p-16 rounded-[4rem] hidden lg:block max-w-sm shadow-premium border border-white/5 overflow-hidden group/overlay"
                        >
                           <div className="absolute inset-0 bg-grid-blueprint opacity-[0.1] pointer-events-none" />
                           <div className="relative z-10 space-y-6">
                                <h4 className="text-osg-gold font-sans font-black text-3xl uppercase tracking-tight leading-none">{sec.overlayTitle}</h4>
                                <p className="text-lg text-white/30 leading-relaxed font-sans group-hover/overlay:text-white/50 transition-colors">{sec.overlayDesc}</p>
                           </div>
                        </motion.div>
                    )}
                </div>
                
                <div className={`${sec.reversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'} space-y-16 order-2`}>
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                       <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.6em]">Engineering Spec</span>
                    </div>
                    <h3 className="text-[4rem] lg:text-[7rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-[0.85]">{sec.title}</h3>
                    <p className="text-2xl text-osg-navy/50 font-sans leading-relaxed">{sec.desc}</p>
                    <div className="space-y-6">
                      {sec.points.map(point => (
                        <div key={point} className="flex items-center gap-6 text-[10px] font-black text-osg-navy uppercase tracking-[0.4em] border-l border-osg-gold pl-6 transition-all hover:translate-x-2">
                          {point}
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-cta !px-12 py-5 !text-[11px] w-fit">IDENTIFY BENCHMARKS <ArrowRight size={18} /></Link>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Matrix Showcase: Luxury Tiles */}
      <section className="py-56 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10">
          <div className="max-w-4xl mb-32 space-y-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-6">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.6em]">Execution Matrix</span>
            </motion.div>
            <h2 className="text-[4rem] lg:text-[7.5rem] font-sans font-black uppercase tracking-tighter leading-[0.85]">Portfolio <br /><span className="text-white/10">Showcase.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[400px] gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[5rem] border border-white/5 shadow-premium"
            >
              <Image 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800" 
                alt="Retail"
                fill
                className="object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[2000ms]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-osg-navy via-transparent flex flex-col justify-end p-16 lg:p-24 translate-y-8 group-hover:translate-y-0 transition-all duration-1000">
                <div className="w-20 h-20 rounded-2xl bg-osg-gold flex items-center justify-center text-osg-navy mb-12 shadow-2xl transition-transform group-hover:rotate-12">
                   <Monitor size={40} />
                </div>
                <h4 className="text-[4rem] lg:text-[5rem] font-sans font-black text-white tracking-tighter uppercase mb-6 leading-none group-hover:text-osg-gold transition-colors">Luxury <br/>Flagship Concept.</h4>
                <p className="text-osg-gold text-[11px] font-black uppercase tracking-[0.5em]">Retail Sector / Deployment 2024</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative group overflow-hidden rounded-[4rem] border border-white/5 shadow-premium"
            >
              <Image 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800" 
                alt="Industrial"
                fill
                className="object-cover grayscale opacity-30 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[2000ms]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/90 via-transparent to-transparent p-16 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-all duration-1000">
                <h4 className="text-4xl font-sans font-black text-white tracking-tight uppercase mb-4 group-hover:text-osg-gold transition-colors">Distribution Center</h4>
                <p className="text-osg-gold text-[10px] font-black uppercase opacity-60 tracking-[0.4em]">Light Industrial / 2023</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-3xl border border-white/5 p-12 rounded-[4rem] flex flex-col justify-center text-center hover:bg-osg-gold group transition-all duration-700 shadow-2xl relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
               <Layers className="text-osg-gold mx-auto mb-8 group-hover:text-osg-navy group-hover:scale-125 transition-all duration-700 relative z-10" size={56} />
               <h4 className="text-white text-[12px] font-black uppercase tracking-[0.4em] group-hover:text-osg-navy relative z-10">Boutique Fit-out</h4>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-3xl border border-white/5 p-12 rounded-[4rem] flex flex-col justify-center text-center hover:bg-osg-gold group transition-all duration-700 shadow-2xl relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
               <Factory className="text-osg-gold mx-auto mb-8 group-hover:text-osg-navy group-hover:scale-125 transition-all duration-700 relative z-10" size={56} />
               <h4 className="text-white text-[12px] font-black uppercase tracking-[0.4em] group-hover:text-osg-navy relative z-10">Structural Core</h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements Benchmarks Banner: Luxury Data Bar */}
      <section className="bg-white py-32 border-t border-osg-navy/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
        <div className="container-clean flex flex-col lg:flex-row items-center justify-between gap-24 relative z-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-3xl space-y-12">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.6em]">Standardized Protocols</span>
                </div>
                <h3 className="text-osg-navy text-[4rem] lg:text-[7.5rem] font-sans font-black uppercase tracking-tighter leading-[0.85]">Safety <br/><span className="text-osg-navy/10">Compliance.</span></h3>
                <p className="text-2xl text-osg-navy/40 font-sans leading-relaxed max-w-xl">We adhere to global security and energy safety codes for high-throughput commercial architecture across the East African landscape.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 lg:gap-24">
                {requirements.map((r, i) => (
                    <motion.div 
                      key={r.title} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center lg:items-start group space-y-8"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#F8F9FB] border border-osg-navy/5 flex items-center justify-center text-osg-gold group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 shadow-sm">
                           <r.icon size={32} className="group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="space-y-4">
                           <h4 className="text-osg-navy text-[12px] font-black uppercase tracking-[0.4em] group-hover:text-osg-gold transition-colors">{r.title}</h4>
                           <p className="text-osg-navy/40 text-[11px] leading-relaxed uppercase font-black tracking-[0.3em]">{r.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Final Call: Operational Mandate */}
      <section className="py-64 bg-[#F8F9FB] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto space-y-24"
          >
            <div className="space-y-12">
               <div className="flex flex-col items-center gap-6">
                  <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                  <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">Operational Mandate</span>
               </div>
               <h2 className="text-[5rem] lg:text-[10rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-[0.8]">Structural <br /><span className="text-osg-navy/10">Foundations.</span></h2>
               <p className="text-2xl text-osg-navy/40 max-w-4xl mx-auto font-sans leading-relaxed">Partner with Ole Sereni Group for industrial-grade excellence in retail environments. Our engineers are ready to discuss your durability requirements.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 pt-12">
              <Link href="/contact" className="btn-cta !px-24 py-8 !text-[12px] shadow-premium group">
                CONSULT OUR ENGINEERS <Ruler size={24} className="ml-6 transition-transform group-hover:rotate-45" />
              </Link>
              <Link href="/resources/downloads" className="flex items-center gap-6 px-20 py-8 rounded-full border border-osg-navy/10 text-[12px] font-black uppercase tracking-[0.4em] text-osg-navy hover:bg-osg-navy hover:text-white transition-all shadow-sm">INDUSTRY DOSSIER <Download size={24} className="ml-6" /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

