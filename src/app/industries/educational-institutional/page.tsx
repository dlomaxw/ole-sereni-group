'use client';

import { ShieldAlert, Droplets, HardHat, School, Hospital, Landmark, Download, FileText, ArrowRight, ShieldCheck, Clock, Zap, Terminal, Activity, Layers } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import { motion } from 'framer-motion';


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
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Expertise / Sector"
        title="Structural Integrity"
        titleHighlight="By Design."
        subtitle="Engineering premium finishing solutions for high-traffic public environments. Where safety standards meet architectural excellence."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Educational & Institutional' }]}
        ctaPrimary={{ label: 'Technical Manuals', href: '/resources/downloads' }}
        ctaSecondary={{ label: 'Sector Portfolio', href: '/projects' }}
      />

      {/* Sector DNA Meta-data: High-Fidelity Data Bar */}
      <section className="bg-[#0B1C2C] py-20 relative overflow-hidden border-y border-white/5 shadow-2xl">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {technicalBenchmarks.map((spec, i) => (
              <motion.div 
                key={spec.label} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-10 group"
              >
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-2xl">
                    <span className="text-osg-gold font-sans font-black text-2xl group-hover:text-osg-navy">{i + 1}</span>
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

      {/* Institutional Matrix Section: Architectural Storytelling */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-40">
            
            {/* Primary Specification - Fire Rating */}
            <div className="lg:col-span-7 space-y-20">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Safety Mandate // 01</span>
                </div>
                <h2 className="text-[4rem] lg:text-[7.5rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-[0.85]">Fire-Rated <br /><span className="text-osg-navy/10">Protocols.</span></h2>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden aspect-[16/10] bg-[#F8F9FB] rounded-[5rem] shadow-premium group border border-osg-navy/5"
              >
                <Image 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200" 
                    alt="Schematic"
                    fill
                    className="object-cover grayscale opacity-30 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2000ms]"
                />
                <div className="absolute top-12 left-12 bg-osg-gold text-osg-navy px-10 py-6 font-sans font-black text-4xl shadow-2xl rounded-3xl">EI 120</div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none bg-grid-blueprint" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <p className="text-2xl text-osg-navy/50 font-sans leading-relaxed">
                            Certified 120-minute fire resistance ratings for high-occupancy government and educational structures. Engineered for containment and structural stability during critical failure points.
                        </p>
                        <div className="space-y-6">
                            {['ASTM E119 Compliance', 'Non-Combustible Core', 'Intumescent Seal Integration'].map(item => (
                                <div key={item} className="flex items-center gap-6 text-[10px] font-black text-osg-navy uppercase tracking-[0.4em] border-l border-osg-gold pl-6 transition-all group-hover:translate-x-2">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-8">
                        <Terminal className="text-osg-gold" size={48} />
                        <p className="text-[10px] text-osg-navy/40 uppercase font-black tracking-[0.5em] leading-relaxed">
                            Implementing fail-safe structural enclosures across the civic landscape of East Africa through integrated hardware terminal logic.
                        </p>
                    </div>
              </motion.div>
            </div>

            {/* Performance Sidebar: Luxury Data Modules */}
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
                    { label: 'Sterile Standards', value: '99.9%', desc: 'Antimicrobial surface treatments for zero-pathogen growth environments.' },
                    { label: 'Acoustic Barrier', value: '55dB', desc: 'STC rated wall systems for lecture and ward privacy isolation.' },
                    { label: 'Impact Durability', value: 'Grade 1', desc: 'High-density surfaces designed for institutional lifecycle performance.' },
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
        </div>
      </section>

      {/* Strategic Sectors Grid: High-Fidelity Domain Cards */}
      <section className="py-48 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10">
          <div className="max-w-4xl mb-32 space-y-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-6">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.6em]">Specialized Domains</span>
            </motion.div>
            <h2 className="text-[4rem] lg:text-[7.5rem] font-sans font-black uppercase tracking-tighter leading-[0.85]">Institutional <br /><span className="text-white/10">Landscape.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {strategicSectors.map((sector, i) => (
              <motion.div 
                key={sector.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-3xl border border-white/5 p-16 rounded-[4rem] h-full transition-all duration-700 hover:border-osg-gold relative overflow-hidden flex flex-col justify-between shadow-2xl">
                  <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
                  <div className="space-y-12 relative z-10">
                    <div className="flex justify-between items-start">
                       <span className="text-osg-gold font-black text-[11px] uppercase tracking-[0.4em]">{sector.id} // {sector.title}</span>
                       <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-2xl group-hover:rotate-6">
                          <sector.icon size={32} />
                       </div>
                    </div>
                    <h3 className="text-4xl font-sans font-black text-white uppercase tracking-tight leading-none group-hover:text-osg-gold transition-colors">{sector.subtitle}</h3>
                    <p className="text-lg text-white/30 font-sans leading-relaxed group-hover:text-white/60 transition-colors">{sector.desc}</p>
                  </div>
                  
                  <div className="mt-12 relative z-10 flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] text-osg-gold">
                      EXPLORE DOMAIN <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Bento Showcase: Luxury Deployment View */}
      <section className="py-56 bg-white relative overflow-hidden border-t border-osg-navy/5">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
        <div className="container-clean relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center mb-40">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <div className="relative aspect-[16/10] bg-[#F8F9FB] rounded-[5rem] shadow-premium overflow-hidden group border border-osg-navy/5">
                        <Image 
                            src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200" 
                            alt="Library"
                            fill
                            className="object-cover grayscale opacity-30 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2000ms]"
                        />
                        <div className="absolute top-12 left-12">
                            <span className="bg-[#0B1C2C] text-osg-gold text-[10px] font-black uppercase tracking-[0.5em] px-8 py-4 rounded-full shadow-2xl">Case Study 04</span>
                        </div>
                        <div className="absolute bottom-12 right-12">
                             <div className="w-16 h-16 rounded-2xl bg-osg-gold flex items-center justify-center text-osg-navy shadow-2xl transition-transform group-hover:rotate-12">
                                <HardHat size={32} />
                             </div>
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none bg-grid-blueprint" />
                    </div>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                       <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.6em]">Civic Excellence</span>
                    </div>
                    <h3 className="text-[4rem] lg:text-[7.5rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-[0.85]">Educational <br/><span className="text-osg-navy/10">Deployment.</span></h3>
                    <p className="text-2xl text-osg-navy/50 font-sans leading-relaxed max-w-xl">
                        Strategic finishing for high-density academic environments where durability, acoustics, and visual clarity are the primary benchmarks for success.
                    </p>
                    <Link href="/projects" className="btn-cta !px-16 py-6 !text-[11px] w-fit">Review Deployment Logs</Link>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 lg:gap-24 border-t border-osg-navy/5 pt-24">
                {requirements.map((r, i) => (
                    <motion.div 
                      key={r.title} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center lg:items-start group space-y-8"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#F8F9FB] border border-osg-navy/5 flex items-center justify-center text-osg-gold group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 shadow-sm">
                           <r.icon size={32} className="group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="space-y-4">
                           <h4 className="text-osg-navy text-[12px] font-black uppercase tracking-[0.4em] group-hover:text-osg-gold transition-colors">{r.title}</h4>
                           <p className="text-osg-navy/40 text-[11px] leading-relaxed uppercase font-black tracking-[0.3em]">{r.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Large Scale Deployment CTA: Luxury Impact */}
      <section className="py-64 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
        <div className="container-clean relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-24">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-16">
              <h2 className="text-[5rem] lg:text-[10rem] font-sans font-black uppercase tracking-tighter leading-[0.8]">
                READY FOR <br /><span className="text-osg-gold">INSTITUTIONAL</span> <br /><span className="text-white/10">SCALE.</span>
              </h2>
              <p className="text-2xl text-white/40 max-w-4xl mx-auto font-sans leading-relaxed">
                Consult with our institutional specialists to review technical documentation, compliance certificates, and logistical capacity for your next major civic infrastructure project.
              </p>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-12"
            >
                <Link href="/contact" className="btn-cta !px-20 py-8 !text-[12px]">
                    TALK TO AN ENGINEER <ArrowRight size={20} />
                </Link>
                <Link href="/resources/downloads" className="flex items-center gap-6 px-16 py-8 rounded-full border border-white/10 text-[12px] font-black uppercase tracking-[0.4em] text-white hover:bg-white hover:text-osg-navy transition-all">REQUEST DOSSIER</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

