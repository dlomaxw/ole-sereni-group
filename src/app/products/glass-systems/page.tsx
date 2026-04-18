'use client';

import { ArrowRight, PlusCircle, CheckCircle, Settings, Download, Shield, Eye, ShieldCheck, Zap, Thermometer, Layers, Waves, Wind } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import TechShowcase from '@/components/TechShowcase';


const solutions = [
  {
    title: 'Structural Glass',
    desc: 'Engineered load-bearing solutions for floors, stairs, and facades.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop',
    size: 'large',
  },
  {
    title: 'Frameless Balustrades',
    desc: 'Seamless safety for high-end terraces and balconies.',
    image: 'https://images.unsplash.com/photo-1628133534591-912abda85d41?q=80&w=800&auto=format&fit=crop',
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

export default function GlassSystemsPage() {
  return (
    <main className="bg-osg-navy">
      <PageHero
        label="Architectural Portfolio"
        title="Uncompromised"
        titleHighlight="Clarity."
        subtitle="Ole Sereni Group's Glass Systems redefine the boundaries of transparency. We engineer structural solutions that merge safety with aesthetic integration."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Glass Systems' }]}
        ctaPrimary={{ label: 'Technical Specification', href: '/resources/downloads' }}
        ctaSecondary={{ label: 'View Portfolio', href: '/projects' }}
      />

      {/* Bento Solutions Grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Detail */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none opacity-50" />
        
        <div className="container-osg relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <Reveal>
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">The Collection // 04</span>
              <h2 className="text-display-sm text-osg-navy font-black uppercase tracking-tighter italic leading-none">Structural <br/><span className="text-osg-navy/20">Precision.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-osg-navy/40 max-w-sm text-[10px] uppercase tracking-[0.3em] font-black leading-relaxed border-l-2 border-osg-gold pl-8">
                From load-bearing structural glass to intelligent office partitions, our systems are tested against rigorous engineering standards.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
            {solutions.map((sol, i) => (
              <Reveal key={sol.title} className={sol.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'}>
                <div className="group relative h-full overflow-hidden bg-osg-charcoal border border-osg-navy/5 shadow-2xl transition-all duration-1000">
                  <img src={sol.image} alt={sol.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/90 via-osg-navy/20 to-transparent flex flex-col justify-end p-10">
                    <h3 className={`font-black text-white uppercase tracking-tighter mb-2 leading-none transition-colors group-hover:text-osg-gold ${sol.size === 'large' ? 'text-4xl' : 'text-2xl'}`}>{sol.title}</h3>
                    <p className="text-white/40 text-xs max-w-xs mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 font-light">{sol.desc}</p>
                    {sol.cta ? (
                      <button className="btn-primary w-fit py-3 px-8 text-[10px] !bg-white !text-osg-navy">{sol.cta}</button>
                    ) : (
                      <div className="flex items-center gap-4 text-osg-gold text-[10px] font-black uppercase tracking-widest translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                        Technical Spec <ArrowRight size={14} />
                      </div>
                    )}
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
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Technical Depth // 04</span>
                    <h2 className="text-display-xs lg:text-display-sm text-white font-black uppercase tracking-tighter italic">Laminate <br /><span className="text-osg-gold">Schematics.</span></h2>
                    <p className="mt-6 text-white/50 text-lg max-w-xl">
                        Explore the surface tension, fragmentation patterns, and UV filtration indexes of our structural and safety glass configurations.
                    </p>
                </Reveal>
            </div>
            
            <Reveal delay={0.2}>
                <TechShowcase categoryKey="GlassSystems" />
            </Reveal>
        </div>
      </section>

      {/* Physics / Performance Row */}
      <section className="section-padding bg-osg-navy border-t border-white/5">
        <div className="container-osg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal className="relative">
              <div className="aspect-square bg-osg-charcoal border border-white/5 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40 hover:scale-110 transition-transform duration-1000" alt="Glass Physics" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-12 shadow-2xl w-[90%] md:w-3/4 border border-osg-navy/5">
                <span className="text-osg-gold text-[9px] font-black uppercase tracking-[0.4em] mb-4 block">Engineered Thresholds</span>
                <h3 className="text-osg-navy font-black text-3xl mb-8 tracking-tighter uppercase italic leading-none">Performance <br/>Matrix.</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Thermal U-Value', value: '0.8 W/m²K', icon: Wind },
                    { label: 'Acoustic Reduction', value: '45dB +', icon: Waves },
                    { label: 'Visual Light Trans.', value: '92%', icon: Eye },
                    { label: 'Impact Safety', value: 'Class 1', icon: ShieldCheck },
                  ].map(m => (
                    <div key={m.label} className="flex justify-between items-center border-b border-osg-navy/5 pb-4 group">
                      <div className="flex items-center gap-4">
                        <m.icon size={16} className="text-osg-gold opacity-40 group-hover:opacity-100 transition-opacity" />
                        <span className="text-osg-navy opacity-60 font-black uppercase tracking-widest text-[9px]">{m.label}</span>
                      </div>
                      <span className="text-osg-navy font-black text-xl italic group-hover:text-osg-gold transition-colors">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="space-y-10">
              <Reveal>
                <span className="text-osg-gold font-black uppercase tracking-[0.5em] text-[10px] block mb-6">Structural Mastery</span>
                <h2 className="text-display-sm text-white font-black uppercase tracking-tighter leading-none italic mb-8">The Physics of <br/><span className="text-osg-gold">Transparency.</span></h2>
                <p className="text-white/40 text-lg leading-relaxed font-light mb-12">
                  Our glass systems are high-performance engineering components. Through advanced lamination and coating techniques, we achieve industry-leading insulation without sacrificing clarity.
                </p>
              </Reveal>
              
              <div className="space-y-12">
                {physicsPoints.map((pt, i) => (
                  <Reveal key={pt.title} delay={i * 0.1}>
                    <div className="flex items-start gap-8 group">
                      <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-3 group-hover:text-osg-gold transition-colors">{pt.title}</h4>
                        <p className="text-white/30 text-xs leading-relaxed max-w-sm font-medium">{pt.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical CTA Bento */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-osg relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Reveal>
              <Eye className="mx-auto text-osg-gold mb-12" size={64} />
              <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter mb-8 italic">Integrate into <br/><span className="text-osg-navy/20">your design.</span></h2>
              <p className="text-lg text-osg-navy/50 font-light leading-relaxed max-w-2xl mx-auto">
                Access our BIM library, CAD details, and performance data sheets to seamlessly incorporate our glass systems into your next project.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Download, label: 'BIM / Revit Library' },
              { icon: ArrowRight, label: 'Technical Manuals' },
              { icon: ShieldCheck, label: 'Certifications' },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <div className="bg-[#f8f9f8] border border-osg-navy/5 p-12 flex flex-col items-center group hover:bg-osg-navy transition-all duration-700 shadow-2xl shadow-osg-navy/5">
                  <item.icon size={32} className="text-osg-gold group-hover:scale-110 transition-transform mb-8" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-navy group-hover:text-white transition-colors">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="section-padding-lg bg-[#fcfdfc] text-center border-t border-osg-navy/5">
        <div className="container-osg">
          <Reveal>
            <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.5em] mb-10 block leading-none">Engineering Brief</span>
            <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter mb-10 italic leading-none">Specify the <br/><span className="text-osg-navy/20">Perfect Lite.</span></h2>
            <p className="text-lg text-osg-navy/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed">Consult with our glazed-unit specialists to determine the optimal glass configuration for your project requirements.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="btn-primary py-6 px-14">Request Consultation</Link>
              <Link href="/resources/downloads" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy py-6 px-14 text-[10px] font-black uppercase tracking-widest transition-all">Get Performance Data</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
