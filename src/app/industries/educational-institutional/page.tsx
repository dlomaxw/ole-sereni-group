'use client';

import { ShieldAlert, Droplets, HardHat, School, Hospital, Landmark, Download, FileText, ArrowRight, ShieldCheck, Clock, Zap, Terminal, Activity, Layers } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Image from 'next/image';

const strategicSectors = [
  {
    icon: Hospital,
    title: 'Healthcare',
    subtitle: 'Hospitals & Clinics',
    desc: 'Advanced sterile environment solutions including seamless coved flooring and clinical-grade wall cladding.',
    id: '01',
  },
  {
    icon: School,
    title: 'Education',
    subtitle: 'Campuses & Labs',
    desc: 'Specialized acoustic partitioning and high-durability surfaces for high-density academic environments.',
    id: '02',
  },
  {
    icon: Landmark,
    title: 'Institutional',
    subtitle: 'Civic & Cultural',
    desc: 'Large-span structural glazing and high-security architectural finishing for public buildings.',
    id: '03',
  },
];

const requirements = [
  { icon: ShieldCheck, title: 'Sterile Standards', desc: 'Medical-grade surface treatments and seamless joints.' },
  { icon: Clock, title: 'Acoustic Control', desc: 'STC 50+ rated wall systems for lecture and ward privacy.' },
  { icon: Activity, title: 'Smart Infrastructure', desc: 'Fully integrated MEP systems for lab and theatre power.' },
];

const technicalBenchmarks = [
    { label: 'Sterility Index', value: '99.9% Clean', desc: 'Silver-ion antimicrobial efficacy.' },
    { label: 'Fire Integrity', value: '120 Mins', desc: 'ASTM E119 certified containment.' },
    { label: 'Acoustic Barrier', value: '55+ STC', desc: 'Lecture-grade privacy isolation.' },
    { label: 'Impact Rating', value: 'Grade 1 HD', desc: 'High-density heavy-traffic surfaces.' },
];

export default function EducationalInstitutionalPage() {
  return (
    <main className="bg-osg-navy">
      <PageHero
        label="Expertise / Sector"
        title="Structural Integrity"
        titleHighlight="By Design."
        subtitle="Engineering premium finishing solutions for high-traffic public environments. Where safety standards meet architectural excellence."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Educational & Institutional' }]}
        ctaPrimary={{ label: 'Technical Manuals', href: '/resources/downloads' }}
        ctaSecondary={{ label: 'Sector Portfolio', href: '/projects' }}
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

      {/* Institutional Matrix Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Detail */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none opacity-50" />
        
        <div className="container-osg relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Primary Specification - Fire Rating */}
            <div className="md:col-span-12 lg:col-span-8 group">
              <Reveal className="mb-12">
                <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Safety Mandate // 01</span>
                <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter italic leading-[0.9]">Fire-Rated <br /><span className="text-osg-navy/20">Protocols.</span></h2>
              </Reveal>
              
              <Reveal delay={0.1} className="relative overflow-hidden aspect-video bg-osg-charcoal mb-12 shadow-2xl transition-all duration-1000 border border-osg-navy/5">
                <Image 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800" 
                    alt="Schematic"
                    fill
                    className="object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-10 left-10 bg-osg-gold text-osg-navy px-8 py-5 font-black text-3xl italic shadow-2xl">EI 120</div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              </Reveal>

              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-osg-navy/50 text-xl font-light leading-relaxed mb-8">
                            Certified 120-minute fire resistance ratings for high-occupancy government and educational structures. Engineered for containment and structural stability during critical failure points.
                        </p>
                        <div className="space-y-4">
                            {['ASTM E119 Compliance', 'Non-Combustible Core', 'Intumescent Seal Integration'].map(item => (
                                <div key={item} className="flex items-center gap-4 text-[10px] font-black text-osg-navy uppercase tracking-widest border-l-2 border-osg-gold pl-4 transition-transform group-hover:translate-x-1">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:mt-0 flex flex-col justify-center">
                        <Terminal className="text-osg-gold mb-6" size={32} />
                        <p className="text-osg-navy/40 text-[10px] uppercase font-black tracking-[0.3em] leading-relaxed">
                            Implementing fail-safe structural enclosures across the civic landscape of East Africa.
                        </p>
                    </div>
                </div>
              </Reveal>
            </div>

            {/* Performance Sidebar */}
            <Reveal delay={0.3} className="md:col-span-12 lg:col-span-4 bg-osg-navy p-12 lg:p-14 shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
              <h4 className="text-osg-gold font-black uppercase tracking-[0.4em] text-[10px] mb-16 relative z-10 leading-none">Sector Benchmarks</h4>
              <div className="space-y-16 relative z-10">
                {[
                  { label: 'Sterile Standards', value: '99.9%', desc: 'Medical-grade surface treatments for zero-microbial growth.' },
                  { label: 'Acoustic Control', value: '55dB', desc: 'STC rated wall systems for lecture and ward privacy.' },
                  { label: 'Durability Cycle', value: '25 Yrs', desc: 'Designed for high-density institutional life-cycles.' },
                ].map(metric => (
                  <div key={metric.label} className="group cursor-default">
                    <div className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-4 group-hover:text-osg-gold transition-colors">{metric.label}</div>
                    <div className="text-6xl font-black text-white mb-4 tracking-tighter italic leading-none">{metric.value.split(' ')[0]} <span className="text-lg opacity-20 uppercase font-bold tracking-widest">{metric.value.split(' ').slice(1).join(' ')}</span></div>
                    <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest leading-relaxed line-clamp-2">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Strategic Sectors Grid */}
      <section className="section-padding bg-osg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="container-osg relative z-10">
          <div className="max-w-3xl mb-20">
            <Reveal>
              <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.5em] mb-8 block leading-none">Specialized Domains</span>
              <h2 className="text-display-xs text-white uppercase tracking-tighter italic font-black leading-none">Institutional <br /><span className="text-white/20">Landscape.</span></h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {strategicSectors.map((sector, i) => (
              <Reveal key={sector.id} delay={i * 0.1}>
                <div className="bg-osg-navy p-14 h-full group hover:bg-white/5 transition-all duration-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
                  <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.4em] mb-12 block leading-none">{sector.id} // {sector.title}</span>
                  <sector.icon className="text-osg-gold/20 mb-10 group-hover:scale-110 group-hover:text-osg-gold transition-all duration-700" size={48} />
                  <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none">{sector.subtitle}</h3>
                  <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-black leading-relaxed group-hover:text-white/60 transition-colors">{sector.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Bento Showcase */}
      <section className="section-padding bg-white relative overflow-hidden border-t border-osg-navy/5">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-osg relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">
                <Reveal>
                    <div className="relative aspect-[16/10] bg-osg-charcoal border border-osg-navy/5 shadow-2xl overflow-hidden group">
                        <Image 
                            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200" 
                            alt="Library"
                            fill
                            className="object-cover grayscale opacity-40 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        />
                        <div className="absolute top-10 right-10 flex items-center gap-4">
                            <span className="bg-osg-navy text-white text-[9px] font-black uppercase tracking-widest px-5 py-2">Case Study 04</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all duration-100 group-hover:translate-x-2">
                             <HardHat className="text-osg-gold" size={32} />
                        </div>
                    </div>
                </Reveal>
                <Reveal delay={0.1}>
                    <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.5em] mb-8 block leading-none">Civic Excellence</span>
                    <h3 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter italic mb-8 leading-none">Educational <br/><span className="text-osg-navy/20">Deployment.</span></h3>
                    <p className="text-lg text-osg-navy/50 font-light leading-relaxed mb-12">
                        Strategic finishing for high-density academic environments where durability, acoustics, and visual clarity are the primary benchmarks for success.
                    </p>
                    <Link href="/projects" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy py-6 px-14 text-[10px] font-black uppercase tracking-widest transition-all">Review Deployment Logs</Link>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-osg-navy/5 pt-16">
                {requirements.map((r, i) => (
                    <Reveal key={r.title} delay={i * 0.1}>
                        <div className="flex flex-col items-center lg:items-start group">
                            <r.icon size={28} className="text-osg-gold mb-6 group-hover:translate-x-1 transition-transform" />
                            <h4 className="text-osg-navy text-[11px] font-black uppercase tracking-widest mb-3">{r.title}</h4>
                            <p className="text-osg-navy/40 text-[10px] leading-relaxed max-w-[200px] uppercase font-black tracking-widest">{r.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* Large Scale Deployment CTA */}
      <section className="section-padding-lg bg-osg-navy-mid border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
        <div className="container-osg relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-white font-black text-5xl lg:text-8xl tracking-tighter leading-[0.8] mb-12 italic">
                READY FOR <br /><span className="text-osg-gold">INSTITUTIONAL</span> <br />SCALE.
              </h2>
              <p className="text-white/40 text-lg mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                Consult with our institutional specialists to review technical documentation, compliance certificates, and logistical capacity for your next major project.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-8">
                <Link href="/contact" className="btn-primary py-6 px-14 group">
                    Talk to an Engineer <ArrowRight size={18} className="ml-4 transition-transform group-hover:translate-x-2" />
                </Link>
                <Link href="/resources/downloads" className="btn-outline !text-white !border-white/10 hover:!border-osg-gold py-6 px-14 text-[10px] font-black uppercase tracking-widest transition-all">Request Dossier</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
