'use client';

import { ArrowRight, CheckCircle, Download, Settings, Box, Terminal, Zap, Thermometer, Layers, Maximize2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import TechShowcase from '@/components/TechShowcase';


const alloySpecs = [
  { label: 'Silicon (Si)', value: '0.2 - 0.6 %' },
  { label: 'Magnesium (Mg)', value: '0.45 - 0.9 %' },
  { label: 'Iron (Fe)', value: '0.35 % max' },
];

const profileSeries = [
  {
    title: 'Series 50 Slim',
    tag: 'Residential Core',
    desc: 'Optimized for minimal sightlines and maximum glass area. Ideal for high-end residential casements.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f3344d1?q=80&w=800&auto=format&fit=crop',
    specs: ['Wall Thickness: 1.2mm - 1.5mm', 'Max Glass: 24mm Double Glazed'],
    size: 'large',
  },
  {
    title: 'Series 70 Thermal',
    tag: 'Heavy Duty',
    desc: 'Engineered with Polyamide thermal breaks for extreme weather insulation.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
  {
    title: 'Series 100 Wall',
    tag: 'Commercial Grade',
    desc: 'Large-span curtain wall system for commercial facades. Supports heavy vertical loads.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    size: 'medium',
    stats: [{ label: 'Min Wall', value: '2.5mm' }, { label: 'Capability', value: 'Custom Die' }],
  },
];

const attributes = [
    { label: 'Alloy Grade', value: '6063-T6', desc: 'Standard architectural alloy for precision extrusion.' },
    { label: 'Tolerance', value: '±0.15mm', desc: 'High-precision manufacturing with zero-gap assembly.' },
    { label: 'Max Length', value: '7.2 Metres', desc: 'Extended span capability for tall facade applications.' },
    { label: 'Finish Spec', value: 'Class 2', desc: 'Qualicoat certified powder coatings for UV resilience.' },
];

const profiles = [
    { 
        title: 'Casement Profiles', 
        tag: 'Standard Series', 
        desc: 'Versatile extrusion series for side-hung, top-hung, and fixed-light window configurations.',
        image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=800'
    },
    { 
        title: 'Sliding Rails', 
        tag: 'Heavy Duty', 
        desc: 'Reinforced track and frame profiles designed for high-span sliding systems and multi-pane doors.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f3344d1?q=80&w=800'
    },
    { 
        title: 'Transoms & Mullions', 
        tag: 'Structural', 
        desc: 'Heavy-gauge profiles for unitized and stick curtain wall systems with high wind-load tolerances.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800'
    }
];

export default function AluminiumProfilesPage() {
  return (
    <main className="bg-osg-navy">
      <PageHero
        label="Precision Extrusions"
        title="Structural"
        titleHighlight="Integrity."
        subtitle="High-performance aluminium profile series engineered for the modern architect. Precise tolerances, premium finishes, and superior alloy compositions."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Aluminium Profiles' }]}
        ctaPrimary={{ label: 'CAD Configuration', href: '/brief' }}
        ctaSecondary={{ label: 'Request Technical Data', href: '/contact' }}
      />

      {/* Intro Metrics */}
      <section className="bg-osg-navy-mid py-12 border-b border-white/5">
        <div className="container-osg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal className="p-6 bg-white/5 border-l-4 border-osg-gold">
              <span className="block text-2xl font-black text-white mb-1">6063-T6</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-osg-slate">Standard Alloy Grade</span>
            </Reveal>
            <Reveal delay={0.1} className="p-6 bg-white/5 border-l-4 border-osg-gold">
              <span className="block text-2xl font-black text-white mb-1">±0.2mm</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-osg-slate">Extrusion Tolerance</span>
            </Reveal>
            <Reveal delay={0.2} className="p-6 bg-white/5 border-l-4 border-osg-gold">
              <span className="block text-2xl font-black text-white mb-1">AA-15</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-osg-slate">Anodizing Standard</span>
            </Reveal>
            <Reveal delay={0.3} className="p-6 bg-white/5 border-l-4 border-osg-gold">
              <span className="block text-2xl font-black text-white mb-1">QUALICOAT</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-osg-slate">Finishing Certification</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Detail */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none opacity-50" />
        
        <div className="container-osg relative z-10">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
            <Reveal>
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">The Series // 05</span>
              <h2 className="text-display-xs text-osg-navy font-black uppercase tracking-tighter italic leading-none">System <br/><span className="text-osg-navy/20">Portfolio.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-osg-navy/40 max-w-sm text-[10px] uppercase tracking-[0.3em] font-black leading-relaxed border-l-2 border-osg-gold pl-8">
                Filter-ready extrusion series for diverse architectural implementations. Infinite geometries, zero-tolerance machining.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Series 50 - Large Horizontal */}
            <Reveal className="md:col-span-8">
              <div className="group bg-osg-charcoal border border-osg-navy/5 flex flex-col lg:flex-row h-full shadow-2xl transition-all duration-1000">
                <div className="lg:w-1/2 overflow-hidden border-r border-osg-navy/5">
                  <img src={profileSeries[0].image} className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" alt="Series 50" />
                </div>
                <div className="lg:w-1/2 p-10 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.3em] mb-4 block leading-none">{profileSeries[0].tag}</span>
                    <h3 className="text-3xl font-black text-osg-navy uppercase tracking-tighter mb-4 transition-colors group-hover:text-osg-gold leading-none">{profileSeries[0].title}</h3>
                    <p className="text-sm text-osg-navy/50 leading-relaxed mb-8 font-light">{profileSeries[0].desc}</p>
                    <div className="space-y-3 mb-8">
                      {profileSeries[0].specs?.map(s => (
                        <div key={s} className="flex items-center gap-3 text-[10px] font-black text-osg-navy uppercase tracking-widest">
                          <CheckCircle className="text-osg-gold" size={14} /> {s}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="btn-outline !text-osg-navy !border-osg-navy/10 w-full hover:!border-osg-gold hover:!text-osg-gold py-4 text-[10px] font-black uppercase tracking-widest">Technical Datasheet</button>
                </div>
              </div>
            </Reveal>

            {/* Series 70 - Small Vertical */}
            <Reveal className="md:col-span-4">
              <div className="group bg-white border border-osg-navy/5 flex flex-col h-full hover:bg-osg-navy transition-colors duration-700 shadow-2xl">
                <div className="aspect-video overflow-hidden border-b border-osg-navy/5">
                  <img src={profileSeries[1].image} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" alt="Series 70" />
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.3em] mb-3 block leading-none">{profileSeries[1].tag}</span>
                    <h3 className="text-2xl font-black text-osg-navy group-hover:text-white uppercase tracking-tighter mb-3 transition-colors leading-none">{profileSeries[1].title}</h3>
                    <p className="text-xs text-osg-navy/40 group-hover:text-white/40 leading-relaxed mb-8 font-light">{profileSeries[1].desc}</p>
                  </div>
                  <Link href="/quote" className="text-[10px] font-black uppercase tracking-widest text-osg-gold border-b-2 border-osg-gold/30 pb-1 w-fit hover:border-osg-gold transition-colors">View Configurations</Link>
                </div>
              </div>
            </Reveal>

            {/* Alloy Spec Card */}
            <Reveal className="md:col-span-4">
              <div className="bg-osg-gold p-10 h-full flex flex-col justify-between shadow-2xl">
                <div>
                  <Box className="text-osg-navy mb-8" size={32} />
                  <h3 className="text-3xl font-black text-osg-navy uppercase tracking-tighter mb-8 italic leading-none">Alloy <br/>Spec.</h3>
                </div>
                <div className="space-y-6">
                  {alloySpecs.map(spec => (
                    <div key={spec.label} className="flex justify-between items-end border-b border-osg-navy/10 pb-2">
                       <span className="text-[10px] font-black text-osg-navy/40 uppercase tracking-widest">{spec.label}</span>
                       <span className="text-2xl font-black text-osg-navy italic tracking-tighter">{spec.value}</span>
                    </div>
                  ))}
                  <p className="text-[9px] text-osg-navy/30 italic mt-6 uppercase font-black tracking-widest">Conforming to EN 573-3 standards</p>
                </div>
              </div>
            </Reveal>

            {/* Series 100 - Large Horizontal (Reversed) */}
            <Reveal className="md:col-span-8">
              <div className="group bg-osg-charcoal border border-osg-navy/5 flex flex-col lg:flex-row-reverse h-full shadow-2xl transition-all duration-1000">
                <div className="lg:w-1/2 overflow-hidden border-l border-osg-navy/5">
                  <img src={profileSeries[2].image} className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" alt="Series 100" />
                </div>
                <div className="lg:w-1/2 p-10 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.3em] mb-4 block leading-none">{profileSeries[2].tag}</span>
                    <h3 className="text-3xl font-black text-osg-navy uppercase tracking-tighter mb-4 transition-colors group-hover:text-osg-gold leading-none">{profileSeries[2].title}</h3>
                    <p className="text-sm text-osg-navy/50 leading-relaxed mb-8 font-light">{profileSeries[2].desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {profileSeries[2].stats?.map(s => (
                      <div key={s.label} className="p-4 bg-[#f8f9f8] text-center border border-osg-navy/5">
                        <span className="block text-2xl font-black text-osg-navy mb-1 italic tracking-tighter">{s.value}</span>
                        <span className="text-[9px] uppercase font-black text-osg-gold tracking-widest">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technical Exploration Showcase */}
      <section className="section-padding bg-osg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none" />
        <div className="container-osg relative z-10">
            <div className="max-w-3xl mb-16">
                <Reveal>
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Technical Depth // 05</span>
                    <h2 className="text-display-xs lg:text-display-sm text-white font-black uppercase tracking-tighter italic">Extrusion <br /><span className="text-osg-gold">Extraction.</span></h2>
                    <p className="mt-6 text-white/50 text-lg max-w-xl">
                        Analyze the metallurgical composition, yield strength, and surface finishing tolerances of our high-precision architectural profiles.
                    </p>
                </Reveal>
            </div>
            
            <Reveal delay={0.2}>
                <TechShowcase categoryKey="AluminiumProfiles" />
            </Reveal>
        </div>
      </section>

      {/* Finishing Options */}
      <section className="section-padding bg-osg-navy border-t border-white/5">
        <div className="container-osg">
          <div className="max-w-xl mb-20">
            <Reveal>
              <h2 className="text-display-xs text-white mb-4 uppercase tracking-tighter leading-none italic">Surface <br/><span className="text-osg-gold">Finishing.</span></h2>
              <div className="w-20 h-1 bg-osg-gold mt-6 mb-6" />
              <p className="text-white/40 text-lg font-light leading-relaxed">Treatments for longevity and aesthetic excellence in any environment.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <Reveal>
              <div className="space-y-8 group">
                <div className="aspect-video bg-osg-charcoal overflow-hidden border border-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" alt="Anodizing" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-4 group-hover:text-osg-gold transition-colors">Anodizing Process</h4>
                  <p className="text-white/30 text-xs leading-relaxed mb-6 font-medium max-w-sm">Electrolytic passivation increasing core oxide thickness for superior corrosion resistance and metallic translucency.</p>
                  <div className="flex gap-3">
                    {['#C0C0C0', '#8C7853', '#4A3728', '#1A1A1A'].map(c => (
                      <div key={c} className="w-10 h-10 border border-white/10 hover:scale-110 transition-transform cursor-crosshair" style={{ backgroundColor: c }} title="Anodized Swatch" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-8 group">
                <div className="aspect-video bg-osg-charcoal overflow-hidden border border-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" alt="Powder Coating" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-4 group-hover:text-osg-gold transition-colors">Powder Coating</h4>
                  <p className="text-white/30 text-xs leading-relaxed mb-6 font-medium max-w-sm">Heat-cured dry powder application available in 200+ RAL colors. Qualicoat Class 2 certified for extreme UV resistance.</p>
                  <div className="flex gap-3">
                    {['#FFFFFF', '#707173', '#2D2926', '#B1B3B3'].map(c => (
                      <div key={c} className="w-10 h-10 border border-white/10 hover:scale-110 transition-transform cursor-crosshair" style={{ backgroundColor: c }} title="RAL Swatch" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Engineering CTA */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-osg relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
            <Reveal className="max-w-2xl">
                <Terminal className="text-osg-gold mb-8" size={32} />
                <h2 className="text-5xl lg:text-7xl font-black text-osg-navy uppercase tracking-tighter italic leading-none">Custom <br /><span className="text-osg-navy/20">Die Fabrication.</span></h2>
            </Reveal>
            <Reveal className="lg:w-1/3 border-l-2 border-osg-gold pl-10 text-right">
                <p className="text-osg-navy/40 text-[10px] uppercase tracking-[0.3em] font-black leading-relaxed">
                    Infinite geometries, zero-tolerance machining. Our profiles define the visible and structural boundaries of modern facades.
                </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {profiles.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.15}>
                <div className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-osg-charcoal mb-10 relative border border-osg-navy/5 shadow-2xl transition-all duration-1000">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                    <div className="absolute top-10 left-10">
                       <span className="bg-osg-gold text-osg-navy text-[9px] font-black uppercase tracking-widest px-4 py-1.5 shadow-xl">{s.tag}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-osg-navy uppercase tracking-tighter mb-4 transition-colors group-hover:text-osg-gold leading-none">{s.title}</h3>
                  <p className="text-sm text-osg-navy/50 leading-relaxed font-light mb-8 line-clamp-3">{s.desc}</p>
                  <Link href="/contact" className="flex items-center gap-4 text-osg-gold text-[10px] font-black uppercase tracking-[0.4em] hover:gap-6 transition-all border-b border-osg-gold/20 pb-2 inline-block">
                    CUSTOM DIE REQUEST <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Attributes Table */}
      <section className="bg-osg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="container-osg relative z-10">
            <div className="max-w-xl mb-16">
                <span className="text-osg-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Control Matrix</span>
                <h3 className="text-white text-5xl font-black uppercase tracking-tighter italic mb-0 leading-none">Material <br/>Benchmarks.</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 shadow-2xl">
                {attributes.map((attr, i) => (
                    <Reveal key={attr.label} delay={i * 0.1}>
                        <div className="bg-osg-navy p-12 h-full group hover:bg-white/5 transition-all duration-500">
                            <h4 className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-6 leading-none group-hover:text-osg-gold transition-colors">{attr.label}</h4>
                            <p className="text-white text-3xl font-black italic mb-3 leading-none uppercase tracking-tighter">{attr.value}</p>
                            <p className="text-white/20 text-[8px] font-black uppercase tracking-widest leading-relaxed group-hover:text-white/40 transition-colors">{attr.desc}</p>
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
            <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter mb-10 italic leading-none">Infinite <br/><span className="text-osg-navy/20">Extrusion.</span></h2>
            <p className="text-lg text-osg-navy/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed">Whether you require a standard system profile or a bespoke architectural die, our team provides the technical precision required for your build.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="btn-primary py-6 px-14">Request Custom Profile</Link>
              <Link href="/resources/downloads" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy py-6 px-14 text-[10px] font-black uppercase tracking-widest transition-all">Download Catalog</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
