'use client';

import { motion } from 'framer-motion';
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
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Expertise / Sector"
        title="Engineering"
        titleHighlight="Elegance."
        subtitle="From iconic five-star landmarks to bespoke private estates, we deliver structural precision and high-polish finishing for the world's most discerning owners."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Hospitality & Residential' }]}
        ctaPrimary={{ label: 'Capability Statement', href: '/contact' }}
        ctaSecondary={{ label: 'Sector Portfolio', href: '/projects' }}
      />

      {/* Sector DNA Meta-data: High-Fidelity Data Bar */}
      <section className="bg-[#0B1C2C] py-20 relative overflow-hidden border-y border-white/5 shadow-2xl">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {performanceMetrics.map((spec, i) => (
              <motion.div 
                key={spec.label} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-10 group"
              >
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-2xl">
                    {spec.icon && <spec.icon size={24} className="group-hover:scale-110 transition-transform" />}
                </div>
                <div className="space-y-2">
                    <span className="block text-[10px] uppercase font-black tracking-[0.4em] text-white/30 group-hover:text-osg-gold transition-colors">{spec.label}</span>
                    <span className="block text-3xl font-sans font-black text-white tracking-tight leading-none">{spec.value || spec.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality Matrix Section: Luxury Narrative */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-40 items-start">
            <div className="lg:col-span-7 space-y-20">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Sector Standard // 01</span>
                </div>
                <h2 className="text-[4rem] lg:text-[7.5rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-[0.85]">Engineering <br /><span className="text-osg-navy/10">The Hospitality Standard.</span></h2>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-2xl text-osg-navy/50 font-sans leading-relaxed max-w-2xl">
                  Guest experience is engineered, not just designed. We focus on the invisible systems that ensure operational excellence and guest comfort in high-traffic luxury environments.
                </p>
              </motion.div>

              <div className="space-y-12 group">
                {hospitalityFeatures.map((feat, i) => (
                  <motion.div 
                    key={feat.title} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-12 items-start group/item"
                  >
                    <div className="w-20 h-20 bg-[#F8F9FB] rounded-[2rem] border border-osg-navy/5 flex items-center justify-center flex-shrink-0 text-osg-gold group-hover/item:bg-osg-navy group-hover/item:text-osg-gold transition-all duration-700 shadow-premium group-hover/item:rotate-6">
                      <feat.icon size={32} />
                    </div>
                    <div className="pt-4 space-y-4">
                      <h4 className="text-3xl font-sans font-black text-osg-navy uppercase tracking-tight transition-colors group-hover/item:text-osg-gold leading-none">{feat.title}</h4>
                      <p className="text-lg text-osg-navy/40 leading-relaxed font-sans max-w-md group-hover/item:text-osg-navy/60 transition-colors">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-2 gap-12 lg:gap-16 sticky top-40">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12 pt-20"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[4rem] shadow-premium group border border-osg-navy/5">
                    <Image 
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800" 
                        alt="Lobby"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms] opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
                <div className="p-12 bg-[#0B1C2C] rounded-[3rem] border border-white/5 shadow-premium relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
                  <span className="text-osg-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block leading-none">Spec Target</span>
                  <h5 className="text-3xl font-sans font-black text-white tracking-tight leading-none uppercase group-hover:text-osg-gold transition-colors">65 STC <br/>Soundproofing.</h5>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[4rem] shadow-premium group border border-osg-navy/5">
                    <Image 
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" 
                        alt="Suite"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms] opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
                <div className="p-12 bg-osg-gold rounded-[3rem] shadow-premium relative overflow-hidden group">
                  <span className="text-osg-navy text-[10px] font-black tracking-[0.5em] uppercase mb-6 block leading-none">Operational</span>
                  <h5 className="text-3xl font-sans font-black text-osg-navy tracking-tight leading-none uppercase group-hover:translate-x-2 transition-transform">Zero-Vibration <br/>Slab Tech.</h5>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Residential Bento: High-Polish Tiles */}
      <section className="py-56 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10">
          <div className="max-w-4xl mb-32 space-y-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-6">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.6em]">Bespoke Sector</span>
            </motion.div>
            <h2 className="text-[4rem] lg:text-[7.5rem] font-sans font-black uppercase tracking-tighter leading-[0.85]">Luxury <br /><span className="text-white/10">Residential.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[400px] gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-[5rem] border border-white/5 shadow-premium"
            >
              <Image 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800" 
                alt="Villa"
                fill
                className="object-cover grayscale opacity-30 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2000ms]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-osg-navy via-transparent flex flex-col justify-end p-16 lg:p-24">
                <div className="w-20 h-20 rounded-2xl bg-osg-gold flex items-center justify-center text-osg-navy mb-12 shadow-2xl transition-transform group-hover:rotate-6">
                   <Gem size={40} />
                </div>
                <h3 className="text-5xl lg:text-7xl font-sans font-black text-white mb-8 uppercase tracking-tighter leading-none transition-colors group-hover:text-osg-gold">The Penthouse <br/>Philosophy.</h3>
                <p className="text-white/40 text-lg font-sans leading-relaxed max-w-sm group-hover:text-white/60 transition-colors">Bespoke carpentry and custom-milled joinery that elevates private residences to structural art forms.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-3xl p-16 rounded-[4rem] border border-white/5 flex flex-col justify-between group hover:border-osg-gold transition-all duration-700 shadow-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
              <Zap className="text-osg-gold relative z-10 transition-transform group-hover:scale-125" size={48} />
              <div className="relative z-10 space-y-6">
                <h4 className="text-3xl font-sans font-black text-white tracking-tight uppercase leading-none group-hover:text-osg-gold transition-colors">Smart <br/>Systems.</h4>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.5em] font-black leading-relaxed">Invisible automation & theatre-grade lighting controls.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-osg-gold p-16 rounded-[4rem] flex flex-col justify-between group hover:scale-[1.02] transition-all duration-700 shadow-2xl"
            >
              <LayoutGrid className="text-osg-navy transition-transform group-hover:rotate-12" size={48} />
              <div className="space-y-6">
                <h4 className="text-3xl font-sans font-black text-osg-navy tracking-tight uppercase leading-none">Premium <br/>Curation.</h4>
                <p className="text-[10px] text-osg-navy/50 uppercase tracking-[0.5em] font-black leading-relaxed">Large-format bookmatched marble & precision joints.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white/5 backdrop-blur-3xl border border-white/5 p-16 lg:p-20 rounded-[5rem] flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
              <div className="flex-1 relative z-10 space-y-10">
                <h3 className="text-4xl lg:text-5xl font-sans font-black text-white uppercase tracking-tight leading-none">Private <br /><span className="text-white/20">Villa Estate.</span></h3>
                <p className="text-xl text-white/40 font-sans leading-relaxed max-w-sm group-hover:text-white/60 transition-colors">Complete design-build services for ultra-high-net-worth individuals requiring total privacy and technical specification.</p>
                <Link href="/projects" className="btn-cta !px-10 py-4 !text-[10px] w-fit">VIEW CASE STUDY <ArrowRight size={16} /></Link>
              </div>
              <div className="hidden lg:block w-2/5 relative aspect-square rounded-[3rem] border-2 border-white/5 overflow-hidden shadow-2xl group-hover:border-osg-gold transition-all duration-700">
                <Image 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400" 
                    alt="Private Villa" 
                    fill
                    className="object-cover grayscale opacity-40 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2000ms]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Control Matrix Section: Luxury Data Deep-Dive */}
      <section className="py-56 bg-white relative overflow-hidden border-y border-osg-navy/5">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-48 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="group space-y-16">
                <div className="space-y-6 text-center lg:text-left">
                  <div className="flex flex-col items-center lg:items-start gap-4">
                    <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                    <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.6em]">Case Study 02</span>
                  </div>
                  <h3 className="text-[4rem] lg:text-[7.5rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-[0.85]">The Sapphire <br /><span className="text-osg-navy/10">Meridian.</span></h3>
                </div>
                
                <div className="relative aspect-video bg-[#F8F9FB] rounded-[5rem] overflow-hidden border border-osg-navy/5 shadow-premium group transition-all duration-[2000ms]">
                  <Image 
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200" 
                    alt="Case Study" 
                    fill
                    className="object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none bg-grid-blueprint" />
                </div>
                
                <div className="grid grid-cols-2 gap-16 lg:gap-24">
                  <div className="border-l border-osg-gold pl-12 space-y-4">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-navy/30">Verification Phase</h5>
                    <p className="text-3xl font-sans font-black text-osg-navy tracking-tight uppercase leading-none">Full MEP Audit</p>
                  </div>
                  <div className="border-l border-osg-gold pl-12 space-y-4">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-navy/30">Deployment</h5>
                    <p className="text-3xl font-sans font-black text-osg-navy tracking-tight uppercase leading-none">18 Months Cycle</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="bg-[#0B1C2C] p-20 lg:p-32 rounded-[5rem] shadow-premium relative overflow-hidden flex flex-col justify-center border border-white/5"
            >
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
              <div className="relative z-10 space-y-24">
                <div className="space-y-6">
                  <h3 className="text-4xl font-sans font-black text-white uppercase tracking-tight leading-none">Sector <span className="text-osg-gold">DNA Matrix.</span></h3>
                  <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                </div>
                
                <ul className="space-y-16">
                  {sectorSpecs.map((spec, idx) => (
                    <li key={spec.label} className="group/item cursor-default border-b border-white/5 pb-12 last:border-0 last:pb-0 space-y-6">
                      <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-white/30 group-hover/item:text-osg-gold transition-colors uppercase tracking-[0.5em]">{spec.label}</span>
                          <span className="text-4xl text-white font-sans font-black tracking-tight group-hover/item:scale-105 transition-transform">{spec.value}</span>
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
                      <p className="text-lg text-white/20 font-sans leading-relaxed group-hover/item:text-white/40 transition-colors">{spec.desc}</p>
                    </li>
                  ))}
                </ul>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="mt-16 group"
                >
                  <Link href="/resources/downloads" className="p-12 bg-osg-gold rounded-[2rem] flex items-center gap-10 shadow-2xl relative overflow-hidden">
                    <div className="w-16 h-16 rounded-2xl bg-osg-navy flex items-center justify-center text-osg-gold shadow-2xl transition-transform group-hover:rotate-12">
                       <Terminal size={32} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[12px] font-black text-osg-navy leading-tight uppercase tracking-[0.4em]">Technical Dossier</p>
                      <p className="text-[10px] text-osg-navy/50 uppercase tracking-[0.3em] font-black mt-2">Hospitality Grade Standards 2024</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-osg-navy/10 flex items-center justify-center group-hover:bg-osg-navy group-hover:text-white transition-all">
                       <Download className="transition-transform group-hover:translate-y-1" size={20} />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Call: Extraordinary Implementation */}
      <section className="py-64 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
        <div className="container-clean relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-24"
          >
            <div className="space-y-12">
               <div className="flex flex-col items-center gap-6">
                  <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                  <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">Structural Mandate</span>
               </div>
               <h2 className="text-[5rem] lg:text-[10rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-[0.8]">Extraordinary <br/><span className="text-osg-navy/10">Implementation.</span></h2>
               <p className="text-2xl text-osg-navy/40 max-w-3xl mx-auto font-sans leading-relaxed">Partner with Ole Sereni Group for projects where failure is not an option and luxury is the baseline structural requirement.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 pt-12">
              <Link href="/contact" className="btn-cta !px-20 py-8 !text-[12px] group">
                CONSULT OUR PRINCIPAL <ShieldCheck size={24} className="ml-6 transition-transform group-hover:rotate-12" />
              </Link>
              <Link href="/resources" className="flex items-center gap-6 px-16 py-8 rounded-full border border-osg-navy/10 text-[12px] font-black uppercase tracking-[0.4em] text-osg-navy hover:bg-osg-navy hover:text-white transition-all">SECTOR DOSSIER <ArrowRight size={20} className="ml-6" /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

