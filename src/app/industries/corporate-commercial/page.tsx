'use client';

import { Building2, Thermometer, Volume2, ShieldCheck, ArrowRight, Download, Laptop, Cog, Zap, Layout, Layers, Terminal } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import { motion } from 'framer-motion';


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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Integrated MEP Systems',
    desc: 'Precision Mechanical, Electrical, and Plumbing engineering designed for long-term scalability.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function CorporateCommercialPage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Expertise / Sector"
        title="Precision"
        titleHighlight="Infrastructure."
        subtitle="Delivering high-performance commercial environments through rigorous engineering and architectural excellence."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Corporate & Commercial' }]}
        ctaPrimary={{ label: 'Capability Statement', href: '/contact' }}
        ctaSecondary={{ label: 'Sector Portfolio', href: '/projects' }}
      />

      {/* Sector DNA Meta-data: High-Fidelity Data Bar */}
      <section className="bg-[#0B1C2C] py-20 relative overflow-hidden border-y border-white/5 shadow-2xl">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {techSpecs.map((spec, i) => (
              <motion.div 
                key={spec.label} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-10 group"
              >
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-2xl">
                    <spec.icon size={24} className="group-hover:scale-110 transition-transform" />
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

      {/* Main Sector Matrix: Luxury Storytelling */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-40">
            {/* Primary Service - Large Profile */}
            <div className="lg:col-span-7 space-y-20">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Primary Capability // 01</span>
                </div>
                <h2 className="text-[4rem] lg:text-[7.5rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-[0.85]">Office <br /><span className="text-osg-navy/10">Fit-Out Excellence.</span></h2>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden aspect-[16/10] bg-[#F8F9FB] rounded-[5rem] shadow-premium group border border-osg-navy/5"
              >
                <Image 
                    src={services[0].image} 
                    alt="Fit-out"
                    fill
                    className="object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[2000ms]"
                />
                <div className="absolute top-12 left-12 bg-osg-gold text-osg-navy px-10 py-6 font-sans font-black text-4xl shadow-2xl rounded-3xl">01</div>
                {/* Architectural Grid Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none bg-grid-blueprint" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-10">
                        <p className="text-2xl text-osg-navy/50 font-sans leading-relaxed">
                            Bespoke interior solutions that synchronize employee well-being with operational productivity. Our fit-out methodology leverages acoustic precision and ergonomic engineering.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            {services[0].tags.map(tag => (
                                <span key={tag} className="bg-[#F8F9FB] border border-osg-navy/10 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-osg-navy shadow-sm">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="border-l border-osg-gold pl-12 flex flex-col justify-center space-y-8">
                        <Terminal className="text-osg-gold" size={48} />
                        <p className="text-[10px] text-osg-navy/40 uppercase font-black tracking-[0.5em] leading-relaxed">
                            Implementing zero-snag delivery protocols across multi-sector commercial fit-outs through our integrated terminal management system.
                        </p>
                    </div>
              </motion.div>
            </div>

            {/* Performance Matrix Sidebar: Luxury Data Modules */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="lg:col-span-5 bg-[#0B1C2C] p-20 lg:p-32 rounded-[5rem] shadow-premium relative overflow-hidden flex flex-col justify-center border border-white/5"
            >
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
              <div className="relative z-10 space-y-24">
                <div className="space-y-6">
                   <span className="text-osg-gold font-black uppercase tracking-[0.6em] text-[10px] block leading-none">Sector DNA Matrix</span>
                   <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                </div>
                
                <div className="space-y-20">
                  {[
                    { label: 'Acoustic Rating', value: '52dB', desc: 'Sound attenuation for confidential environments.' },
                    { label: 'Thermal Efficiency', value: '0.9 W/m²K', desc: 'Advanced glazing for climate optimization.' },
                    { label: 'Structural Load', value: '750 kg/m²', desc: 'Reinforced floor plating for heavy tech stacks.' },
                  ].map((metric, idx) => (
                    <div key={metric.label} className="group/item cursor-default space-y-8">
                      <div className="flex justify-between items-end">
                         <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 group-hover/item:text-osg-gold transition-colors">{metric.label}</div>
                         <div className="text-5xl font-sans font-black text-white group-hover/item:scale-105 transition-transform">{metric.value.split(' ')[0]} <span className="text-sm opacity-20 uppercase font-black tracking-[0.4em] ml-2">{metric.value.split(' ').slice(1).join(' ')}</span></div>
                      </div>
                      <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
                         <motion.div 
                           initial={{ x: '-100%' }}
                           whileInView={{ x: '0%' }}
                           transition={{ delay: 0.5 + (idx * 0.1), duration: 1.5 }}
                           viewport={{ once: true }}
                           className="absolute inset-0 bg-osg-gold/40"
                         />
                      </div>
                      <p className="text-lg text-white/30 font-sans leading-relaxed group-hover/item:text-white/50 transition-colors">{metric.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32 mt-48">
            {/* Sub Services: High-Contrast Tiles */}
            {subServices.map((sub, i) => (
              <motion.div 
                key={sub.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group space-y-12"
              >
                  <div className="relative overflow-hidden aspect-[16/10] bg-[#F8F9FB] rounded-[4rem] border border-osg-navy/5 shadow-premium group-hover:shadow-2xl transition-all duration-[1000ms]">
                    <Image 
                        src={sub.image} 
                        alt={sub.title}
                        fill
                        className="object-cover grayscale opacity-30 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[2000ms]" 
                    />
                    <div className="absolute top-12 left-12 bg-[#0B1C2C] text-osg-gold px-10 py-5 rounded-3xl font-sans font-black text-3xl shadow-2xl">0{sub.id}</div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none bg-grid-blueprint" />
                  </div>
                  <div className="space-y-8">
                    <h3 className="text-4xl lg:text-5xl font-sans font-black text-osg-navy uppercase tracking-tight leading-none group-hover:text-osg-gold transition-colors">{sub.title}</h3>
                    <div className="w-16 h-[1px] bg-osg-gold/40 group-hover:w-24 group-hover:bg-osg-gold transition-all duration-500"></div>
                    <p className="text-xl text-osg-navy/50 font-sans leading-relaxed max-w-xl">{sub.desc}</p>
                    <Link href="/contact" className="btn-cta !px-10 py-4 !text-[10px] w-fit">
                      IDENTIFY SPECIFICATIONS <ArrowRight size={18} />
                    </Link>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Infrastructure Row: Modernist Icons */}
      <section className="py-56 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-16 rounded-[4rem] bg-white/5 backdrop-blur-3xl border border-white/5 hover:border-osg-gold transition-all duration-700 group shadow-2xl space-y-10"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-2xl group-hover:rotate-6">
                 <Laptop size={40} />
              </div>
              <h4 className="text-3xl font-sans font-black uppercase tracking-tight leading-none group-hover:text-osg-gold transition-colors">IT Integrated <br/>Fitout.</h4>
              <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-[0.5em] font-black">Zero-latency data routing & discrete server integration systems.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-16 rounded-[4rem] bg-osg-gold shadow-2xl group space-y-10 border border-osg-gold hover:scale-105 transition-all duration-700"
            >
              <div className="w-20 h-20 rounded-2xl bg-osg-navy flex items-center justify-center text-osg-gold shadow-2xl group-hover:rotate-6 transition-transform">
                 <Cog size={40} />
              </div>
              <h4 className="text-osg-navy text-3xl font-sans font-black uppercase tracking-tight leading-none">MEP <br/>Scalability.</h4>
              <p className="text-[10px] text-osg-navy/50 leading-relaxed uppercase tracking-[0.5em] font-black">Future-proof mechanical systems for expanding teams.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-16 rounded-[4rem] bg-white/5 backdrop-blur-3xl border border-white/5 hover:border-osg-gold transition-all duration-700 group shadow-2xl space-y-10"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-2xl group-hover:rotate-6">
                 <Zap size={40} />
              </div>
              <h4 className="text-3xl font-sans font-black uppercase tracking-tight leading-none group-hover:text-osg-gold transition-colors">Smart <br/>Lighting.</h4>
              <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-[0.5em] font-black">Circadian rhythm balancing & automated harvesting.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentation CTA: Luxury File Access */}
      <section className="py-64 bg-white relative overflow-hidden border-t border-osg-navy/5">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
        <div className="container-clean">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto space-y-24 text-center lg:text-left"
          >
            <div className="space-y-12">
               <div className="flex flex-col items-center lg:items-start gap-6">
                  <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                  <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">Engineering Access</span>
               </div>
               <h2 className="text-[4rem] lg:text-[8rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-none">Sector <br/><span className="text-osg-navy/10">Capabilities.</span></h2>
               <p className="text-2xl text-osg-navy/40 max-w-3xl mx-auto lg:mx-0 font-sans leading-relaxed">Ready to specify your commercial space? Our team provides end-to-end technical support for high-throughput corporate environments.</p>
            </div>
            
            <div className="bg-[#F8F9FB] p-20 lg:p-32 rounded-[5rem] border border-osg-navy/5 shadow-premium flex flex-col lg:flex-row items-center justify-between gap-20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
              <div className="relative z-10 space-y-8">
                <span className="block text-[11px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4">Verification Pack</span>
                <span className="block font-sans font-black text-osg-navy text-4xl lg:text-6xl uppercase tracking-tight group-hover:text-osg-gold transition-colors duration-700">2024 CAPABILITY STATEMENT.PDF</span>
              </div>
              <Link href="/contact" className="btn-cta !px-20 py-8 !text-[12px] group relative z-10">
                DOWNLOAD <Download size={24} className="ml-6 transition-transform group-hover:translate-y-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

