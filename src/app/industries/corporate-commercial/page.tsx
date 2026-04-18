'use client';

import { Building2, Thermometer, Volume2, ShieldCheck, ArrowRight, Download, Laptop, Cog, Zap, Layout, Layers, Terminal } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Image from 'next/image';

const techSpecs = [
  { icon: Building2, label: 'Structural Load', value: '5.0kN/m²' },
  { icon: Thermometer, label: 'Thermal Efficiency', value: 'U-Value 1.1' },
  { icon: Volume2, label: 'Acoustic Rating', value: 'Rw 52dB' },
  { icon: ShieldCheck, label: 'Compliance', value: 'LEED Platinum' },
];

const services = [
  {
    id: '01',
    title: 'Office Fit-Out Excellence',
    desc: 'Bespoke interior solutions that synchronize employee well-being with operational productivity. Our fit-out methodology leverages acoustic precision and ergonomic engineering.',
    tags: ['Ergonomic Analysis', 'Acoustic Sealing'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    align: 'left',
  },
];

const subServices = [
  {
    id: '02',
    title: 'Curtain Wall Systems',
    desc: 'High-performance building envelopes engineered for structural resilience and seismic stability.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Integrated MEP Systems',
    desc: 'Precision Mechanical, Electrical, and Plumbing engineering designed for long-term scalability.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop',
  },
];

export default function CorporateCommercialPage() {
  return (
    <main className="bg-osg-navy">
      <PageHero
        label="Expertise / Sector"
        title="Precision"
        titleHighlight="Infrastructure."
        subtitle="Delivering high-performance commercial environments through rigorous engineering and architectural excellence."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Corporate & Commercial' }]}
        ctaPrimary={{ label: 'Capability Statement', href: '/contact' }}
        ctaSecondary={{ label: 'Sector Portfolio', href: '/projects' }}
      />

      {/* Sector DNA Meta-data */}
      <section className="bg-osg-navy-mid py-12 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
        <div className="container-osg relative z-10">
          <div className="flex flex-wrap justify-between items-center gap-10">
            {techSpecs.map((spec, i) => (
              <Reveal key={spec.label} delay={i * 0.1} className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-osg-gold transition-colors">
                    <spec.icon className="text-osg-gold" size={20} />
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

      {/* Main Sector Matrix */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Detail */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none opacity-50" />
        
        <div className="container-osg relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
            {/* Primary Service - Large Profile */}
            <div className="md:col-span-12 lg:col-span-8 group">
              <Reveal className="mb-12">
                <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Primary Capability // 01</span>
                <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter italic leading-[0.9]">Office <br /><span className="text-osg-navy/20">Fit-Out Excellence.</span></h2>
              </Reveal>
              
              <Reveal delay={0.1} className="relative overflow-hidden aspect-video bg-osg-charcoal mb-12 shadow-2xl transition-all duration-1000 border border-osg-navy/5">
                <Image 
                    src={services[0].image} 
                    alt="Fit-out"
                    fill
                    className="object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-10 left-10 bg-osg-gold text-osg-navy px-8 py-5 font-black text-3xl italic shadow-2xl">01</div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              </Reveal>

              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-osg-navy/50 text-xl font-light leading-relaxed mb-8">
                            Bespoke interior solutions that synchronize employee well-being with operational productivity. Our fit-out methodology leverages acoustic precision and ergonomic engineering.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {services[0].tags.map(tag => (
                                <span key={tag} className="bg-osg-navy/5 border border-osg-navy/10 px-6 py-2 text-[10px] font-black uppercase tracking-widest text-osg-navy">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="border-l-2 border-osg-gold pl-10 flex flex-col justify-center">
                        <Terminal className="text-osg-gold mb-6" size={32} />
                        <p className="text-osg-navy/40 text-[10px] uppercase font-black tracking-[0.3em] leading-relaxed">
                            Implementing zero-snag delivery protocols across multi-sector commercial fit-outs.
                        </p>
                    </div>
                </div>
              </Reveal>
            </div>

            {/* Performance Matrix Sidebar */}
            <Reveal delay={0.3} className="md:col-span-12 lg:col-span-4 bg-osg-navy p-12 lg:p-14 shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
              <h4 className="text-osg-gold font-black uppercase tracking-[0.4em] text-[10px] mb-16 relative z-10 leading-none">Sector DNA Matrix</h4>
              <div className="space-y-16 relative z-10">
                {[
                  { label: 'Acoustic Rating', value: '52dB', desc: 'Sound attenuation for confidential environments.' },
                  { label: 'Thermal Efficiency', value: '0.9 W/m²K', desc: 'Advanced glazing for climate optimization.' },
                  { label: 'Structural Load', value: '750 kg/m²', desc: 'Reinforced floor plating for heavy tech stacks.' },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mt-24">
            {/* Sub Services */}
            {subServices.map((sub, i) => (
              <Reveal key={sub.id} delay={i * 0.1} className="group">
                  <div className="relative overflow-hidden aspect-[16/10] bg-osg-charcoal mb-10 border border-osg-navy/5 shadow-2xl transition-all duration-1000">
                    <Image 
                        src={sub.image} 
                        alt={sub.title}
                        fill
                        className="object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" 
                    />
                    <div className="absolute top-0 right-0 bg-osg-navy text-white px-8 py-5 font-black text-2xl italic">0{sub.id}</div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  </div>
                  <h3 className="text-4xl font-black text-osg-navy mb-6 uppercase tracking-tighter italic leading-none group-hover:text-osg-gold transition-colors">{sub.title}</h3>
                  <p className="text-osg-navy/50 text-lg font-light leading-relaxed mb-10 max-w-lg">{sub.desc}</p>
                  <Link href="/contact" className="text-osg-navy font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-4 group-hover:gap-6 transition-all border-b-2 border-osg-navy/10 pb-2 w-fit group-hover:border-osg-gold group-hover:text-osg-gold">
                    IDENTIFY SPECIFICATIONS <ArrowRight size={14} />
                  </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Infrastructure Row */}
      <section className="section-padding bg-osg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="container-osg relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal className="p-12 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
              <Laptop className="text-osg-gold mb-8" size={40} />
              <h4 className="text-white text-3xl font-black mb-6 uppercase tracking-tighter italic leading-none group-hover:text-osg-gold transition-colors">IT Integrated <br/>Fitout.</h4>
              <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-[0.2em] font-black">Zero-latency data routing & discrete server integration.</p>
            </Reveal>
            <Reveal delay={0.1} className="p-12 bg-osg-gold group">
              <Cog className="text-osg-navy mb-8" size={40} />
              <h4 className="text-osg-navy text-3xl font-black mb-6 uppercase tracking-tighter italic leading-none group-hover:translate-x-1 transition-transform">MEP <br/>Scalability.</h4>
              <p className="text-[10px] text-osg-navy/60 leading-relaxed uppercase tracking-[0.2em] font-black">Future-proof mechanical systems for expanding teams.</p>
            </Reveal>
            <Reveal delay={0.2} className="p-12 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
              <Zap className="text-osg-gold mb-8" size={40} />
              <h4 className="text-white text-3xl font-black mb-6 uppercase tracking-tighter italic leading-none group-hover:text-osg-gold transition-colors">Smart <br/>Lighting.</h4>
              <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-[0.2em] font-black">Circadian rhythm balancing & automated harvesting.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Documentation CTA */}
      <section className="section-padding-lg bg-[#fcfdfc] text-center border-t border-osg-navy/5">
        <div className="container-osg">
          <Reveal className="max-w-4xl mx-auto">
            <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.5em] mb-10 block leading-none">Engineering Access</span>
            <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter mb-10 italic leading-none">Sector <br/><span className="text-osg-navy/20">Capabilities.</span></h2>
            <p className="text-lg text-osg-navy/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed">Ready to specify your commercial space? Our team provides end-to-end technical support for high-throughput corporate environments.</p>
            
            <div className="bg-white p-12 border border-osg-navy/5 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
              <div className="relative z-10">
                <span className="block text-[10px] font-black text-osg-gold uppercase tracking-[0.3em] mb-4">Verification Pack</span>
                <span className="block font-black text-osg-navy text-3xl uppercase tracking-tighter italic">2024 CAPABILITY STATEMENT.PDF</span>
              </div>
              <Link href="/contact" className="btn-primary py-6 px-14 group relative z-10">
                Download <Download size={18} className="ml-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
