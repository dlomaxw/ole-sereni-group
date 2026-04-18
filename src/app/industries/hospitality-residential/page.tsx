'use client';

import { Hotel, Bed, Droplets, Zap, LayoutGrid, FileText, Download, ArrowRight, ShieldCheck, Thermometer, Volume2, Shield, Gem, Terminal } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Image from 'next/image';

const hospitalityFeatures = [
  {
    icon: Hotel,
    title: 'Grand Lobbies & Atriums',
    desc: 'Structural integrity for massive spans and monumental stone installations that define first impressions.',
  },
  {
    icon: Bed,
    title: 'Precision Guest Suites',
    desc: 'Turnkey MEP integration and high-end fit-outs featuring sound-insulated partitions and smart HVAC.',
  },
  {
    icon: Droplets,
    title: 'Exterior & Leisure Systems',
    desc: 'Advanced waterproofing for rooftop pools and durable architectural facades resistant to weathering.',
  },
];

const sectorSpecs = [
  { label: 'Acoustic Separation', value: 'STC 65+ Target', desc: 'Superior sound isolation for guest privacy.' },
  { label: 'Load Durability', value: '15kN/m²', desc: 'High-traffic structural reinforcement.' },
  { label: 'Safety Protocols', value: 'Cat-A Fire', desc: 'Integrated fire protective enclosures.' },
];

const performanceMetrics = [
    { icon: Volume2, label: 'Sound Mitigation', value: '65 dB SNR' },
    { icon: Zap, label: 'Smart Integration', desc: 'KNX / DALI Controls' },
    { icon: Shield, label: 'Safety Rating', value: 'Class A-100' },
    { icon: Droplets, label: 'Hydro Isolation', value: 'P5 Critical' },
];

export default function HospitalityResidentialPage() {
  return (
    <main className="bg-osg-navy">
      <PageHero
        label="Expertise / Sector"
        title="Engineering"
        titleHighlight="Elegance."
        subtitle="From iconic five-star landmarks to bespoke private estates, we deliver structural precision and high-polish finishing for the world's most discerning owners."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Hospitality & Residential' }]}
        ctaPrimary={{ label: 'Capability Statement', href: '/contact' }}
        ctaSecondary={{ label: 'Sector Portfolio', href: '/projects' }}
      />

      {/* Sector DNA Meta-data */}
      <section className="bg-osg-navy-mid py-12 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
        <div className="container-osg relative z-10">
          <div className="flex flex-wrap justify-between items-center gap-10">
            {performanceMetrics.map((spec, i) => (
              <Reveal key={spec.label} delay={i * 0.1} className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-osg-gold transition-colors">
                    {spec.icon && <spec.icon className="text-osg-gold" size={20} />}
                </div>
                <div>
                    <span className="block text-[10px] uppercase font-black tracking-[0.2em] text-osg-slate mb-1">{spec.label}</span>
                    <span className="block text-xl font-black text-white italic tracking-tighter leading-none">{spec.value || spec.desc}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality Matrix Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Detail */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none opacity-50" />
        
        <div className="container-osg relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="md:col-span-12 lg:col-span-7">
              <Reveal className="mb-12">
                <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Sector Standard // 01</span>
                <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter italic leading-[0.9]">Engineering <br /><span className="text-osg-navy/20">The Hospitality Standard.</span></h2>
              </Reveal>
              
              <Reveal delay={0.1} className="mb-12">
                <p className="text-osg-navy/50 text-xl font-light leading-relaxed max-w-2xl">
                  Guest experience is engineered, not just designed. We focus on the invisible systems that ensure operational excellence and guest comfort in high-traffic luxury environments.
                </p>
              </Reveal>

              <div className="space-y-10 group">
                {hospitalityFeatures.map((feat, i) => (
                  <Reveal key={feat.title} delay={i * 0.1}>
                    <div className="flex gap-8 items-start group/item">
                      <div className="w-16 h-16 bg-osg-navy-mid flex items-center justify-center flex-shrink-0 text-osg-gold group-hover/item:bg-osg-gold group-hover/item:text-osg-navy transition-all duration-700 shadow-xl">
                        <feat.icon size={28} />
                      </div>
                      <div className="pt-2">
                        <h4 className="text-2xl font-black text-osg-navy uppercase tracking-tighter italic mb-3 transition-colors group-hover/item:text-osg-gold leading-none">{feat.title}</h4>
                        <p className="text-sm text-osg-navy/40 leading-relaxed font-medium max-w-md">{feat.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-12 lg:col-span-5 grid grid-cols-2 gap-8 sticky top-24">
              <Reveal className="space-y-8 pt-12">
                <div className="relative aspect-[3/4] overflow-hidden shadow-2xl group border border-osg-navy/5">
                    <Image 
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800" 
                        alt="Lobby"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="p-8 bg-osg-navy border border-white/10 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
                  <span className="text-osg-gold text-[9px] font-black tracking-widest uppercase mb-4 block leading-none">Spec Target</span>
                  <h5 className="text-3xl font-black text-white italic tracking-tighter leading-none uppercase">65 STC <br/>Soundproofing.</h5>
                </div>
              </Reveal>
              <Reveal delay={0.2} className="space-y-8">
                <div className="relative aspect-[3/4] overflow-hidden shadow-2xl group border border-osg-navy/5">
                    <Image 
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" 
                        alt="Suite"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="p-8 bg-osg-gold shadow-2xl relative overflow-hidden">
                  <span className="text-osg-navy text-[9px] font-black tracking-widest uppercase mb-4 block leading-none">Operational</span>
                  <h5 className="text-3xl font-black text-osg-navy italic tracking-tighter leading-none uppercase">Zero-Vibration <br/>Slab Tech.</h5>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Residential Bento */}
      <section className="section-padding bg-osg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="container-osg relative z-10">
          <div className="max-w-3xl mb-20">
            <Reveal>
              <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.5em] mb-8 block leading-none">Bespoke Sector</span>
              <h2 className="text-display-xs text-white uppercase tracking-tighter italic font-black leading-none">Luxury <br /><span className="text-white/20">Residential.</span></h2>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[350px] gap-6">
            <Reveal className="md:col-span-2 md:row-span-2 relative overflow-hidden group border border-white/5 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800" 
                alt="Villa"
                fill
                className="object-cover grayscale opacity-40 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/95 via-osg-navy/20 to-transparent flex flex-col justify-end p-12">
                <Gem className="text-osg-gold mb-8" size={40} />
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none transition-colors group-hover:text-osg-gold">The Penthouse <br/>Philosophy.</h3>
                <p className="text-white/40 text-[11px] font-black uppercase tracking-widest leading-relaxed max-w-sm">Bespoke carpentry and custom-milled joinery that elevates private residences to structural art forms.</p>
              </div>
            </Reveal>

            <Reveal className="bg-white/5 p-10 border border-white/5 flex flex-col justify-between group hover:bg-osg-navy-mid transition-all shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
              <Zap className="text-osg-gold relative z-10" size={32} />
              <div className="relative z-10">
                <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-3 leading-none group-hover:text-osg-gold transition-colors">Smart <br/>Systems.</h4>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black leading-relaxed">Invisible automation & theatre-grade lighting controls.</p>
              </div>
            </Reveal>

            <Reveal className="bg-osg-gold p-10 flex flex-col justify-between group hover:brightness-110 transition-all shadow-2xl">
              <LayoutGrid className="text-osg-navy" size={32} />
              <div>
                <h4 className="text-2xl font-black text-osg-navy italic tracking-tighter uppercase mb-3 leading-none">Premium <br/>Curation.</h4>
                <p className="text-[10px] text-osg-navy/50 uppercase tracking-[0.2em] font-black leading-relaxed">Large-format bookmatched marble & precision joints.</p>
              </div>
            </Reveal>

            <Reveal className="md:col-span-2 bg-white/5 border border-white/5 p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
              <div className="flex-1 relative z-10">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic mb-6 leading-none">Private <br /><span className="text-white/20">Villa Estate.</span></h3>
                <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium">Complete design-build services for ultra-high-net-worth individuals requiring total privacy and technical specification.</p>
                <Link href="/projects" className="text-osg-gold font-black text-[10px] uppercase tracking-[0.4em] border-b-2 border-osg-gold/20 pb-2 hover:border-osg-gold transition-all w-fit block">VIEW CASE STUDY</Link>
              </div>
              <div className="hidden lg:block w-1/3 relative aspect-square border-2 border-osg-gold/20 overflow-hidden shadow-2xl">
                <Image 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400" 
                    alt="Private Villa" 
                    fill
                    className="object-cover grayscale opacity-60 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Control Matrix Section */}
      <section className="section-padding bg-osg-navy-mid border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-osg relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <div className="group">
                <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.5em] mb-10 block leading-none">Case Study 02</span>
                <h3 className="text-5xl lg:text-7xl text-white font-black uppercase tracking-tighter mb-12 italic leading-[0.9]">The Sapphire <br /><span className="text-white/20">Meridian.</span></h3>
                
                <div className="relative aspect-video bg-osg-charcoal overflow-hidden border border-white/5 mb-12 shadow-2xl group transition-all duration-1000">
                  <Image 
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200" 
                    alt="Case Study" 
                    fill
                    className="object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                </div>
                <div className="grid grid-cols-2 gap-12 pt-0">
                  <div className="border-l-2 border-osg-gold pl-8">
                    <h5 className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-3">Verification Phase</h5>
                    <p className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">Full MEP Audit</p>
                  </div>
                  <div className="border-l-2 border-osg-gold pl-8">
                    <h5 className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-3">Deployment</h5>
                    <p className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">18 Months Cycle</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="bg-white/5 p-12 lg:p-16 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
              <h3 className="text-3xl font-black text-white mb-16 uppercase tracking-tighter italic leading-none relative z-10">Sector <span className="text-osg-gold">DNA.</span></h3>
              <ul className="space-y-10 relative z-10">
                {sectorSpecs.map(spec => (
                  <li key={spec.label} className="group cursor-default border-b border-white/5 pb-8 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black text-white/30 group-hover:text-osg-gold transition-colors uppercase tracking-widest">{spec.label}</span>
                        <span className="text-3xl text-white font-black italic tracking-tighter">{spec.value}</span>
                    </div>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest font-black transition-colors group-hover:text-white/40">{spec.desc}</p>
                  </li>
                ))}
              </ul>
              
              <Link href="/resources/downloads" className="mt-16 p-8 bg-osg-gold group flex items-center gap-6 shadow-2xl hover:scale-[1.02] transition-all">
                <Terminal className="text-osg-navy" size={32} />
                <div className="flex-1">
                  <p className="text-[11px] font-black text-osg-navy leading-tight uppercase tracking-widest">Technical Dossier</p>
                  <p className="text-[9px] text-osg-navy/40 uppercase tracking-widest font-bold mt-1">Hospitality Grade Standards 2024</p>
                </div>
                <Download className="text-osg-navy transition-transform group-hover:translate-y-1" size={24} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="section-padding-lg bg-[#fcfdfc] text-center border-t border-osg-navy/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
        <div className="container-osg relative z-10">
          <Reveal>
            <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.5em] mb-12 block leading-none">Structural Mandate</span>
            <h2 className="text-5xl lg:text-8xl text-osg-navy font-black uppercase tracking-tighter mb-12 italic leading-[0.8]">Extraordinary <br/><span className="text-osg-navy/20">Implementation.</span></h2>
            <p className="text-lg text-osg-navy/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed">Partner with Ole Sereni Group for projects where failure is not an option and luxury is the baseline structural requirement.</p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/contact" className="btn-primary py-6 px-14 group">
                Consult Our Principal <ShieldCheck size={18} className="ml-4 transition-transform group-hover:rotate-12" />
              </Link>
              <Link href="/resources" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy py-6 px-14 text-[10px] font-black uppercase tracking-widest transition-all">Sector Dossier <ArrowRight size={16} className="ml-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
