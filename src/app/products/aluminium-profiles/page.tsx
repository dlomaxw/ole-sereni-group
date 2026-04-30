'use client';
import { motion } from 'framer-motion';

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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    specs: ['Wall Thickness: 1.2mm - 1.5mm', 'Max Glass: 24mm Double Glazed'],
    size: 'large',
  },
  {
    title: 'Series 70 Thermal',
    tag: 'Heavy Duty',
    desc: 'Engineered with Polyamide thermal breaks for extreme weather insulation.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800'
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
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Precision Extrusions"
        title="Structural"
        titleHighlight="Integrity."
        subtitle="High-performance aluminium profile series engineered for the modern architect. Precise tolerances, premium finishes, and superior alloy compositions."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Aluminium Profiles' }]}
        ctaPrimary={{ label: 'CAD Configuration', href: '/brief' }}
        ctaSecondary={{ label: 'Request Technical Data', href: '/contact' }}
      />

      {/* Intro Metrics: Refined Glass Bar */}
      <section className="relative z-20 -mt-24 pb-24">
        <div className="container-clean">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Standard Alloy Grade', value: '6063-T6' },
              { label: 'Extrusion Tolerance', value: '±0.2mm' },
              { label: 'Anodizing Standard', value: 'AA-15' },
              { label: 'Finishing Certification', value: 'QUALICOAT' }
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-xl border border-white p-10 rounded-[2rem] shadow-premium group hover:border-osg-gold/40 transition-all duration-500"
              >
                <span className="block text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.4em] mb-4 group-hover:text-osg-gold/40 transition-colors">{metric.label}</span>
                <span className="block text-4xl font-sans font-black text-osg-navy">{metric.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid: Luxury Staggered Layout */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        
        <div className="container-clean">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-40 gap-16">
            <div className="max-w-4xl space-y-10">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                 <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">The Series // 05</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tighter leading-[0.85] font-sans">System <br/><span className="text-osg-navy/10">Portfolio.</span></h2>
            </div>
            <div className="lg:w-1/3 space-y-8">
              <div className="w-full h-[1px] bg-osg-navy/10" />
              <p className="text-[10px] text-osg-navy/40 uppercase tracking-[0.4em] font-black leading-relaxed border-l border-osg-gold pl-10">
                Filter-ready extrusion series for diverse architectural implementations. Infinite geometries, zero-tolerance machining.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Series 50 - Large Luxury Horizontal */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 group bg-[#F8F9FB] rounded-[4rem] overflow-hidden border border-osg-navy/5 shadow-premium flex flex-col lg:flex-row h-[600px]"
            >
              <div className="lg:w-1/2 relative overflow-hidden">
                <Image src={profileSeries[0].image} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-60 group-hover:opacity-100" alt="Series 50" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F8F9FB]" />
              </div>
              <div className="lg:w-1/2 p-20 flex flex-col justify-between relative z-10">
                <div className="space-y-8">
                  <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.4em] block">{profileSeries[0].tag}</span>
                  <h3 className="text-[4rem] font-sans font-black text-osg-navy uppercase tracking-tight leading-none">{profileSeries[0].title}</h3>
                  <p className="text-xl text-osg-navy/40 font-sans leading-relaxed">{profileSeries[0].desc}</p>
                  <div className="space-y-4 pt-4">
                    {profileSeries[0].specs?.map(s => (
                      <div key={s} className="flex items-center gap-4 text-[10px] font-black text-osg-navy/60 uppercase tracking-widest">
                        <div className="w-2 h-2 rounded-full bg-osg-gold" /> {s}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="btn-cta !px-12 py-5 !text-[10px] mt-12 self-start">TECHNICAL DATASHEET</button>
              </div>
            </motion.div>

            {/* Series 70 - Compact Luxury */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-4 group bg-white rounded-[4rem] overflow-hidden border border-osg-navy/5 shadow-premium flex flex-col h-[600px]"
            >
              <div className="h-2/3 relative overflow-hidden">
                <Image src={profileSeries[1].image} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100" alt="Series 70" />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-16 flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.4em] block">{profileSeries[1].tag}</span>
                  <h3 className="text-4xl font-sans font-black text-osg-navy uppercase tracking-tight leading-none">{profileSeries[1].title}</h3>
                  <p className="text-lg text-osg-navy/40 font-sans leading-relaxed">{profileSeries[1].desc}</p>
                </div>
                <Link href="/quote" className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-gold border-b border-osg-gold/20 pb-3 hover:border-osg-gold transition-all w-fit">VIEW CONFIGURATIONS</Link>
              </div>
            </motion.div>

            {/* Alloy Spec - Technical Display */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 bg-[#0B1C2C] p-16 rounded-[4rem] h-[600px] flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03]" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-osg-gold mb-12">
                   <Box size={32} />
                </div>
                <h3 className="text-[4rem] font-sans font-black text-white uppercase tracking-tight leading-none">Alloy <br/><span className="text-osg-gold">Spec.</span></h3>
              </div>
              <div className="space-y-10 relative z-10">
                {alloySpecs.map(spec => (
                  <div key={spec.label} className="flex justify-between items-end border-b border-white/5 pb-4">
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">{spec.label}</span>
                     <span className="text-3xl font-sans font-black text-osg-gold">{spec.value}</span>
                  </div>
                ))}
                <p className="text-[9px] text-white/10 uppercase font-black tracking-[0.6em]">Conforming to EN 573-3 standards</p>
              </div>
            </motion.div>

            {/* Series 100 - Industrial Power */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-8 group bg-[#F8F9FB] rounded-[4rem] overflow-hidden border border-osg-navy/5 shadow-premium flex flex-col lg:flex-row-reverse h-[600px]"
            >
              <div className="lg:w-1/2 relative overflow-hidden">
                <Image src={profileSeries[2].image} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-60 group-hover:opacity-100" alt="Series 100" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F8F9FB]" />
              </div>
              <div className="lg:w-1/2 p-20 flex flex-col justify-between relative z-10">
                <div className="space-y-8">
                  <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.4em] block">{profileSeries[2].tag}</span>
                  <h3 className="text-[4rem] font-sans font-black text-osg-navy uppercase tracking-tight leading-none">{profileSeries[2].title}</h3>
                  <p className="text-xl text-osg-navy/40 font-sans leading-relaxed">{profileSeries[2].desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-12">
                  {profileSeries[2].stats?.map(s => (
                    <div key={s.label} className="p-8 bg-white rounded-3xl border border-osg-navy/5 shadow-premium text-center">
                      <span className="block text-3xl font-sans font-black text-osg-navy tracking-tight mb-2">{s.value}</span>
                      <span className="text-[9px] uppercase font-black text-osg-gold tracking-[0.4em]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Finishing Options: Luxury Material Showcase */}
      <section className="py-48 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03]" />
        <div className="container-clean">
          <div className="max-w-4xl mb-32 space-y-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-6">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">System Aesthetics</span>
            </motion.div>
            <h2 className="text-[4rem] lg:text-[7rem] font-sans font-black uppercase tracking-tighter leading-[0.85]">Surface <br/><span className="text-osg-gold">Finishing.</span></h2>
            <p className="text-2xl text-white/40 font-sans leading-relaxed max-w-2xl">Treatments for longevity and aesthetic excellence in any environment.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {[
              { 
                title: 'Anodizing Process', 
                desc: 'Electrolytic passivation increasing core oxide thickness for superior corrosion resistance and metallic translucency.',
                image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=800&auto=format&fit=crop',
                colors: ['#C0C0C0', '#8C7853', '#4A3728', '#1A1A1A']
              },
              { 
                title: 'Powder Coating', 
                desc: 'Heat-cured dry powder application available in 200+ RAL colors. Qualicoat Class 2 certified for extreme UV resistance.',
                image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop',
                colors: ['#FFFFFF', '#707173', '#2D2926', '#B1B3B3']
              }
            ].map((finishing, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-12 group"
              >
                <div className="aspect-video relative rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
                  <Image src={finishing.image} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-60 group-hover:opacity-100" alt={finishing.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C] via-transparent to-transparent opacity-60" />
                </div>
                <div className="space-y-8">
                  <h4 className="text-4xl font-sans font-black uppercase tracking-tight group-hover:text-osg-gold transition-colors">{finishing.title}</h4>
                  <p className="text-xl text-white/40 font-sans leading-relaxed max-w-xl">{finishing.desc}</p>
                  <div className="flex gap-6">
                    {finishing.colors.map(c => (
                      <div key={c} className="w-16 h-16 rounded-2xl border border-white/10 hover:scale-110 transition-all duration-500 cursor-crosshair shadow-2xl" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Die Section: Architectural Precision Grid */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] " />
        <div className="container-clean">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl space-y-10">
                <div className="w-16 h-16 rounded-2xl bg-[#F8F9FB] flex items-center justify-center text-osg-gold mb-12">
                   <Terminal size={32} />
                </div>
                <h2 className="text-[4rem] lg:text-[7rem] font-black text-osg-navy uppercase tracking-tighter leading-[0.85] font-sans">Custom <br /><span className="text-osg-navy/10">Die Fabrication.</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-1/3 border-l border-osg-gold pl-12">
                <p className="text-[10px] text-osg-navy/40 uppercase tracking-[0.4em] font-black leading-relaxed">
                    Infinite geometries, zero-tolerance machining. Our profiles define the visible and structural boundaries of modern facades.
                </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {profiles.map((s, i) => (
              <motion.div 
                key={s.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group space-y-10"
              >
                <div className="aspect-[3/4] relative rounded-[3rem] overflow-hidden border border-osg-navy/5 shadow-premium">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute top-10 left-10">
                     <span className="bg-osg-gold text-osg-navy text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2.5 rounded-full shadow-2xl">{s.tag}</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl font-sans font-black text-osg-navy uppercase tracking-tight leading-none group-hover:text-osg-gold transition-colors">{s.title}</h3>
                  <p className="text-lg text-osg-navy/40 font-sans leading-relaxed line-clamp-3">{s.desc}</p>
                  <Link href="/contact" className="flex items-center gap-6 text-osg-gold text-[10px] font-black uppercase tracking-[0.6em] hover:gap-10 transition-all border-b border-osg-gold/10 pb-4 inline-block">
                    CUSTOM DIE REQUEST <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Benchmarks: Luxury Grid Table */}
      <section className="bg-[#0B1C2C] py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03]" />
        <div className="container-clean relative z-10">
            <div className="max-w-4xl mb-24 space-y-10">
                <span className="text-osg-gold text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">Control Matrix</span>
                <h3 className="text-white text-[4rem] lg:text-[7rem] font-sans font-black uppercase tracking-tighter mb-0 leading-[0.85]">Material <br/><span className="text-osg-gold">Benchmarks.</span></h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {attributes.map((attr, i) => (
                    <motion.div 
                      key={attr.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/5 p-12 rounded-[3rem] group hover:bg-white/10 transition-all duration-700 hover:border-osg-gold/20"
                    >
                        <h4 className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-12 group-hover:text-osg-gold transition-colors leading-none">{attr.label}</h4>
                        <p className="text-white text-5xl font-sans font-black mb-6 leading-none uppercase tracking-tight">{attr.value}</p>
                        <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] leading-relaxed group-hover:text-white/40 transition-colors">{attr.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Final Call: Call To Action */}
      <section className="py-48 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02]" />
        <div className="container-clean max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-20 lg:p-32 border border-osg-navy/5 rounded-[5rem] relative overflow-hidden shadow-premium bg-[#F8F9FB]"
          >
            <div className="space-y-12 relative z-10">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">Engineering Brief</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tight leading-[0.8] font-sans">Infinite <br/><span className="text-osg-navy/10">Extrusion.</span></h2>
              <p className="text-2xl text-osg-navy/40 max-w-3xl mx-auto font-sans leading-relaxed">
                  Whether you require a standard system profile or a bespoke architectural die, our team provides the technical precision required for your build.
              </p>
              <div className="flex flex-wrap justify-center gap-10 pt-8">
                  <Link href="/contact" className="btn-cta !px-16 py-6 !text-[11px]">REQUEST Bespoke PROFILE</Link>
                  <Link href="/resources/downloads" className="flex items-center gap-6 px-12 py-6 rounded-full border border-osg-navy/10 text-[11px] font-black uppercase tracking-widest text-osg-navy hover:bg-osg-navy hover:text-white transition-all">DOWNLOAD CATALOG</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

