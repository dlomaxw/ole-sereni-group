'use client';

import { ShieldAlert, VolumeX, ShieldCheck, FileText, CheckCircle, Factory, Settings, Shield, Smartphone, Wind, Zap, Thermometer, Layers, Maximize2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import TechShowcase from '@/components/TechShowcase';


const matrices = [
  {
    title: 'Fire Resistance',
    icon: ShieldAlert,
    tag: 'Standard: EN 1364-1',
    color: 'osg-gold',
    items: [
      { label: 'System Series 1000', value: 'EI 30' },
      { label: 'System Series 2500', value: 'EI 60' },
      { label: 'System Series 5000+', value: 'EI 120' },
      { label: 'Reinforced Steel Core', value: 'EI 240' },
    ],
  },
  {
    title: 'Acoustic Decibels',
    icon: VolumeX,
    tag: 'Standard: ISO 10140-2',
    color: 'white',
    items: [
      { label: 'Standard Double Glaze', value: '32 dB' },
      { label: 'Laminated Acoustic', value: '42 dB' },
      { label: 'Sound-Shield™ Tech', value: '54 dB' },
      { label: 'Specialist Isolated', value: '60+ dB' },
    ],
  },
  {
    title: 'Security Rating',
    icon: ShieldCheck,
    tag: 'Standard: ASTM F1642',
    color: 'osg-gold',
    items: [
      { label: 'Blast Pressure Peak', value: '85 kPa' },
      { label: 'Ballistic Rating', value: 'FB6 / BR6' },
      { label: 'Intrusion Resistance', value: 'RC4' },
      { label: 'Impact Durability', value: 'Grade A' },
    ],
  },
];

const expertise = [
  { icon: Shield, title: 'Ballistic Certified', desc: 'Tested to FB4 and FB6 standards for high-security sites.' },
  { icon: Smartphone, title: 'Smart Integration', desc: 'Full building management system (BMS) connectivity.' },
  { icon: Wind, title: 'Extreme Climate', desc: 'Sustained performance in 55°C+ desert environments.' },
];

export default function SpecializedSystemsPage() {
  return (
    <main className="bg-osg-navy font-sans">
      <PageHero
        label="Solutions / Products"
        title="Bespoke"
        titleHighlight="Technologies."
        subtitle="Where engineering meets the impossible. Our specialized systems are tailored for unique structural challenges and extreme performance requirements."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Specialized Systems' }]}
        ctaPrimary={{ label: 'Technical Brief', href: '/contact' }}
        ctaSecondary={{ label: 'BMS Documentation', href: '/resources/downloads' }}
      />

      {/* Performance Matrices Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Detail */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none opacity-50" />
        
        <div className="container-osg relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <Reveal>
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Control Matrix // 06</span>
              <h2 className="text-display-xs text-osg-navy font-black uppercase tracking-tighter italic leading-none">Performance <br/><span className="text-osg-navy/20">Extraction.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-osg-navy/40 max-w-sm text-[10px] uppercase tracking-[0.3em] font-black leading-relaxed border-l-2 border-osg-gold pl-8">
                Verified data from independent testing laboratories. Engineering-grade defensive and environmental enclosures.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {matrices.map((matrix, i) => (
              <Reveal key={matrix.title} delay={i * 0.1}>
                <div className="bg-[#f8f9f8] p-10 border border-osg-navy/5 h-full group hover:bg-osg-navy transition-all duration-700 shadow-2xl shadow-osg-navy/5">
                  <div className="flex justify-between items-start mb-12">
                    <matrix.icon className={matrix.color === 'osg-gold' ? 'text-osg-gold' : 'text-osg-navy group-hover:text-white'} size={40} />
                    <span className="text-[9px] font-black text-osg-navy/30 group-hover:text-osg-gold uppercase tracking-widest">{matrix.tag}</span>
                  </div>
                  <h3 className="text-2xl font-black text-osg-navy group-hover:text-white mb-8 uppercase tracking-tighter italic transition-colors leading-none">{matrix.title}</h3>
                  <div className="space-y-4">
                    {matrix.items.map(item => (
                      <div key={item.label} className="flex justify-between items-end border-b border-osg-navy/5 group-hover:border-white/10 pb-2">
                        <span className="text-[10px] font-black text-osg-navy/40 group-hover:text-white/40 uppercase tracking-widest">{item.label}</span>
                        <span className="text-xl text-osg-navy group-hover:text-osg-gold font-black italic tracking-tighter">{item.value}</span>
                      </div>
                    ))}
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
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Technical Depth // 06</span>
                    <h2 className="text-display-xs lg:text-display-sm text-white font-black uppercase tracking-tighter italic">Bespoke <br /><span className="text-osg-gold">Schematics.</span></h2>
                    <p className="mt-6 text-white/50 text-lg max-w-xl">
                        Review the fire integrity ratings, ballistic grades, and automated light control latencies of our high-security and intelligence systems.
                    </p>
                </Reveal>
            </div>
            
            <Reveal delay={0.2}>
                <TechShowcase categoryKey="SpecializedSystems" />
            </Reveal>
        </div>
      </section>

      {/* Engineering Bento */}
      <section className="section-padding bg-osg-navy border-t border-white/5">
        <div className="container-osg">
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6">
            <Reveal className="md:col-span-2 md:row-span-2">
              <div className="bg-osg-gold p-12 flex flex-col justify-end h-full shadow-2xl">
                <FileText className="text-osg-navy mb-8" size={48} />
                <h3 className="text-5xl lg:text-6xl text-osg-navy font-black tracking-tighter uppercase mb-6 italic leading-none">Structural <br />Integrity.</h3>
                <p className="text-osg-navy/70 text-sm leading-relaxed mb-12 font-medium">
                  Our systems undergo rigorous physical testing in pressurized chambers and live furnace environments to ensure that in an emergency, the envelope remains uncompromised.
                </p>
                <div className="flex items-center gap-6 border-t border-osg-navy/10 pt-8">
                  <span className="text-6xl font-black text-osg-navy/20 font-headline italic leading-none">99.9%</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-navy leading-relaxed">System <br />Reliability <br />Coefficient</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="md:col-span-2 relative overflow-hidden group border border-white/5 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" alt="ISO" />
              <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/90 via-osg-navy/20 to-transparent p-10 flex flex-col justify-end">
                <div className="w-12 h-12 flex items-center justify-center bg-osg-gold text-osg-navy mb-6">
                    <Factory size={24} />
                </div>
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter italic leading-none transition-colors group-hover:text-osg-gold">ISO 9001 <br/>Production Factory.</h4>
              </div>
            </Reveal>

            <Reveal className="bg-white/5 p-10 border border-white/5 flex flex-col justify-between group hover:bg-osg-navy-mid transition-colors duration-500 shadow-2xl">
              <div>
                <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.4em] mb-8 block leading-none">Certifications</span>
                <ul className="text-[11px] font-black uppercase text-white/60 space-y-4">
                  <li className="flex items-center gap-4 transition-colors group-hover:text-white"><CheckCircle size={14} className="text-osg-gold" /> UL 10C POSITIVE PRESSURE</li>
                  <li className="flex items-center gap-4 transition-colors group-hover:text-white"><CheckCircle size={14} className="text-osg-gold" /> NFPA 252 TESTING</li>
                  <li className="flex items-center gap-4 transition-colors group-hover:text-white"><CheckCircle size={14} className="text-osg-gold" /> ASTM E119 WALL SYSTEMS</li>
                  <li className="flex items-center gap-4 transition-colors group-hover:text-white"><CheckCircle size={14} className="text-osg-gold" /> BS 476 PART 22</li>
                </ul>
              </div>
            </Reveal>

            <Reveal className="bg-osg-charcoal p-10 flex flex-col justify-center text-white border border-white/5 group hover:bg-osg-navy-mid transition-all duration-700 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
              <div className="relative z-10 transition-transform group-hover:translate-x-2 duration-700">
                <Settings className="text-osg-gold mb-8" size={40} />
                <h4 className="text-3xl font-black uppercase leading-none tracking-tighter italic mb-4">Custom <br />Extrusion.</h4>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black leading-relaxed">Bespoke engineering for unique project requirements.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Blueprints Banner */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-osg relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="max-w-2xl">
                    <Reveal>
                        <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.5em] mb-10 block leading-none">Technical Access</span>
                        <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter mb-8 italic leading-none">Structural <br/><span className="text-osg-navy/20">Blueprints.</span></h2>
                        <p className="text-lg text-osg-navy/50 font-light leading-relaxed max-w-xl">
                            Access our BIM library, DWG details, and comprehensive certification dossiers for your next specification. Our engineering consultants are available for project-specific calculations.
                        </p>
                    </Reveal>
                </div>
                <Reveal delay={0.1}>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link href="/contact" className="btn-primary py-6 px-14">Talk to an Engineer</Link>
                        <Link href="/resources/downloads" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy py-6 px-14 text-[10px] font-black uppercase tracking-widest transition-all">Download Dossier</Link>
                    </div>
                </Reveal>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-lg bg-[#fcfdfc] text-center border-t border-osg-navy/5">
        <div className="container-osg">
          <Reveal>
            <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.5em] mb-10 block leading-none">Risk Management</span>
            <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter mb-10 italic leading-none">Dossier <br/><span className="text-osg-navy/20">Access.</span></h2>
            <Link href="/quote" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-gold hover:!text-osg-gold flex items-center justify-center mx-auto w-fit px-14 py-6 text-[10px] font-black uppercase tracking-widest transition-all shadow-2xl">Access Security Dossier <FileText size={16} className="ml-4" /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
