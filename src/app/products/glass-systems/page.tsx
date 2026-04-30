'use client';

import { ArrowRight, PlusCircle, CheckCircle, Settings, Download, Shield, Eye, ShieldCheck, Zap, Thermometer, Layers, Waves, Wind } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import TechShowcase from '@/components/TechShowcase';
import Image from 'next/image';


const solutions = [
  {
    title: 'Structural Glass',
    desc: 'Engineered load-bearing solutions for floors, stairs, and facades.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop',
    size: 'large',
  },
  {
    title: 'Frameless Balustrades',
    desc: 'Seamless safety for high-end terraces and balconies.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
  {
    title: 'Acoustic Partitions',
    desc: 'Optimized sound dampening for executive suites and boardrooms.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
  {
    title: 'Switchable Smart Glass',
    desc: 'Instant privacy at the touch of a button using PDLC technology.',
    image: 'https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1200&auto=format&fit=crop',
    size: 'large',
    cta: 'Explore Tech',
  },
];

const physicsPoints = [
  { title: 'SentryGlas® Interlayers', desc: '5x stronger and up to 100x stiffer than conventional laminating materials.' },
  { title: 'Low-Iron Extra Clear', desc: 'Eliminating the natural green tint for absolute color neutrality and brilliance.' },
];

import { motion } from 'framer-motion';

export default function GlassSystemsPage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Architectural Portfolio"
        title="Uncompromised"
        titleHighlight="Clarity."
        subtitle="Ole Sereni Group's Glass Systems redefine the boundaries of transparency. We engineer structural solutions that merge safety with aesthetic integration."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Glass Systems' }]}
        ctaPrimary={{ label: 'Technical Specification', href: '/resources/downloads' }}
        ctaSecondary={{ label: 'View Portfolio', href: '/projects' }}
      />

      {/* Bento Solutions Grid: Luxury High-Contrast */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        
        <div className="container-clean">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl space-y-10">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                 <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">The Collection // 04</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tighter leading-[0.85] font-sans">Structural <br/><span className="text-osg-navy/10">Precision.</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-1/3 border-l border-osg-gold pl-12">
               <p className="text-[10px] text-osg-navy/40 uppercase tracking-[0.4em] font-black leading-relaxed">
                    From load-bearing structural glass to intelligent office partitions, our systems are tested against rigorous engineering standards.
               </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[360px] lg:auto-rows-[420px]">
            {solutions.map((sol, i) => (
              <motion.div 
                key={sol.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={sol.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'}
              >
                <div className="group relative h-full overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-osg-navy border border-osg-navy/5 shadow-premium transition-all duration-1000">
                  <Image src={sol.image} alt={sol.title} fill className="absolute inset-0 w-full h-full object-cover grayscale opacity-75 group-hover:scale-105 group-hover:opacity-95 group-hover:grayscale-0 transition-all duration-[1500ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C] via-[#0B1C2C]/70 to-[#0B1C2C]/10 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                    <div className="space-y-6 relative z-10">
                       <h3 className={`font-sans font-black text-white uppercase tracking-tight leading-tight transition-colors group-hover:text-osg-gold ${sol.size === 'large' ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl'}`}>{sol.title}</h3>
                       <p className="text-white/75 text-sm sm:text-base font-sans max-w-sm transition-all duration-700">{sol.desc}</p>
                       {sol.cta ? (
                         <Link href="/resources/downloads" className="inline-flex min-h-10 items-center justify-center rounded-full bg-osg-gold px-5 py-3 text-[9px] font-black uppercase tracking-[0.08em] text-osg-navy transition-all hover:bg-white">{sol.cta}</Link>
                       ) : (
                         <Link href="/resources/downloads" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-osg-gold px-5 py-3 text-[9px] font-black uppercase tracking-[0.08em] text-osg-navy transition-all hover:bg-white">
                           Technical Spec <ArrowRight size={16} />
                         </Link>
                       )}
                    </div>
                  </div>
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
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Technical Depth // 04</span>
                </motion.div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black uppercase tracking-tight leading-tight">Laminate <span className="text-osg-gold">Schematics.</span></h2>
                <p className="text-lg sm:text-xl text-white/50 font-sans leading-relaxed max-w-2xl">
                    Explore the surface tension, fragmentation patterns, and UV filtration indexes of our structural and safety glass configurations.
                </p>
            </div>
            
            <TechShowcase categoryKey="GlassSystems" />
        </div>
      </section>

      {/* Physics / Performance Module: High-Fidelity Data */}
      <section className="py-56 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        <div className="container-clean">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative group"
            >
              <div className="aspect-square bg-[#F8F9FB] rounded-[5rem] overflow-hidden border border-osg-navy/5 shadow-premium relative">
                <Image src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop" fill className="object-cover grayscale opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-[2000ms]" alt="Glass Physics" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              
              {/* High-Fidelity Data Floating Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-3xl p-16 rounded-[4rem] shadow-premium w-[85%] border border-osg-navy/5"
              >
                <span className="text-osg-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Engineered Thresholds</span>
                <h3 className="text-osg-navy font-sans font-black text-4xl mb-12 tracking-tight uppercase leading-none">Performance <br/>Matrix.</h3>
                <div className="space-y-8">
                  {[
                    { label: 'Thermal U-Value', value: '0.8 W/m²K', icon: Wind },
                    { label: 'Acoustic Reduction', value: '45dB +', icon: Waves },
                    { label: 'Visual Light Trans.', value: '92%', icon: Eye },
                    { label: 'Impact Safety', value: 'Class 1', icon: ShieldCheck },
                  ].map(m => (
                    <div key={m.label} className="flex justify-between items-center border-b border-osg-navy/5 pb-6 group/item">
                      <div className="flex items-center gap-6">
                        <m.icon size={20} className="text-osg-gold group-hover/item:scale-110 transition-transform" />
                        <span className="text-osg-navy/40 font-black uppercase tracking-[0.3em] text-[9px]">{m.label}</span>
                      </div>
                      <span className="text-2xl font-sans font-black text-osg-navy group-hover/item:text-osg-gold transition-colors">{m.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <div className="lg:col-span-6 space-y-16">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
                <span className="text-osg-gold font-black uppercase tracking-[0.6em] text-[10px] block">Structural Mastery</span>
                <h2 className="text-[4rem] lg:text-[6rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-[0.85]">The Physics of <br/><span className="text-osg-navy/10">Transparency.</span></h2>
                <p className="text-2xl text-osg-navy/40 leading-relaxed font-sans">
                  Our glass systems are high-performance engineering components. Through advanced lamination and coating techniques, we achieve industry-leading insulation without sacrificing clarity.
                </p>
              </motion.div>
              
              <div className="space-y-16">
                {physicsPoints.map((pt, i) => (
                  <motion.div 
                    key={pt.title} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-10 group"
                  >
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-[#F8F9FB] flex items-center justify-center text-osg-navy group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 shadow-premium">
                       <ShieldCheck size={28} />
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-xl font-sans font-black text-osg-navy uppercase tracking-tight group-hover:text-osg-gold transition-colors">{pt.title}</h4>
                       <p className="text-lg text-osg-navy/40 font-sans leading-relaxed max-w-sm">{pt.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical CTA Bento: Design Integration */}
      <section className="py-48 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean">
          <div className="max-w-5xl mx-auto text-center mb-32 space-y-12">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <Eye className="mx-auto text-osg-gold/40 mb-12" size={80} />
              <h2 className="text-[4rem] lg:text-[7rem] font-sans font-black uppercase tracking-tighter leading-none">Integrate into <br/><span className="text-white/10">your design.</span></h2>
              <p className="text-2xl text-white/40 font-sans leading-relaxed max-w-3xl mx-auto">
                Access our BIM library, CAD details, and performance data sheets to seamlessly incorporate our glass systems into your next project.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Download, label: 'BIM / Revit Library' },
              { icon: ArrowRight, label: 'Technical Manuals' },
              { icon: ShieldCheck, label: 'Certifications' },
            ].map((item, i) => (
              <motion.div 
                key={item.label} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/5 p-16 rounded-[4rem] flex flex-col items-center group hover:border-osg-gold transition-all duration-700 shadow-2xl"
              >
                <item.icon size={40} className="text-osg-gold group-hover:scale-110 transition-transform mb-10" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-colors text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call: Specified Lite */}
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
                <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">Engineering Brief</span>
            </div>
            <h2 className="text-[4rem] lg:text-[8rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-none">Specify the <br/><span className="text-osg-navy/10">Perfect Lite.</span></h2>
            <p className="text-2xl text-osg-navy/40 max-w-3xl mx-auto font-sans leading-relaxed">Consult with our glazed-unit specialists to determine the optimal glass configuration for your project requirements.</p>
            <div className="flex flex-wrap justify-center gap-10 pt-8">
              <Link href="/contact" className="btn-cta !px-16 py-6 !text-[11px]">REQUEST CONSULTATION</Link>
              <Link href="/resources/downloads" className="flex items-center gap-6 px-12 py-6 rounded-full border border-osg-navy/10 text-[11px] font-black uppercase tracking-widest text-osg-navy hover:bg-osg-navy hover:text-white transition-all">GET PERFORMANCE DATA</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

