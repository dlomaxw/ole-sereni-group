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

import { motion } from 'framer-motion';

export default function SpecializedSystemsPage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Solutions / Products"
        title="Bespoke"
        titleHighlight="Technologies."
        subtitle="Where engineering meets the impossible. Our specialized systems are tailored for unique structural challenges and extreme performance requirements."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Specialized Systems' }]}
        ctaPrimary={{ label: 'Technical Brief', href: '/contact' }}
        ctaSecondary={{ label: 'BMS Documentation', href: '/resources/downloads' }}
      />

      {/* Performance Control Matrix: High-Fidelity Data Cards */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        
        <div className="container-clean">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl space-y-10">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                 <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Control Matrix // 06</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tighter leading-[0.85] font-sans">Performance <br/><span className="text-osg-navy/10">Extraction.</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-1/3 border-l border-osg-gold pl-12">
               <p className="text-[10px] text-osg-navy/40 uppercase tracking-[0.4em] font-black leading-relaxed">
                    Verified data from independent testing laboratories. Engineering-grade defensive and environmental enclosures.
               </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {matrices.map((matrix, i) => (
              <motion.div 
                key={matrix.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="bg-[#F8F9FB] p-16 rounded-[4rem] border border-osg-navy/5 h-full group hover:bg-osg-navy transition-all duration-700 shadow-premium flex flex-col justify-between">
                  <div className="space-y-12">
                    <div className="flex justify-between items-start">
                      <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-osg-gold shadow-premium transition-all duration-500 group-hover:bg-white/10 group-hover:text-osg-gold group-hover:rotate-6">
                         <matrix.icon size={32} />
                      </div>
                      <span className="text-[10px] font-black text-osg-navy/30 group-hover:text-osg-gold uppercase tracking-[0.4em]">{matrix.tag}</span>
                    </div>
                    <h3 className="text-3xl font-sans font-black text-osg-navy group-hover:text-white uppercase tracking-tight transition-colors leading-none">{matrix.title}</h3>
                  </div>
                  
                  <div className="space-y-8 mt-12">
                    {matrix.items.map(item => (
                      <div key={item.label} className="flex justify-between items-end border-b border-osg-navy/5 group-hover:border-white/10 pb-4">
                        <span className="text-[10px] font-black text-osg-navy/40 group-hover:text-white/40 uppercase tracking-[0.3em]">{item.label}</span>
                        <span className="text-2xl text-osg-navy group-hover:text-osg-gold font-sans font-black tracking-tight">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Exploration Showcase */}
      <section className="py-48 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10">
            <div className="max-w-4xl mb-32 space-y-12">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-6">
                    <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Technical Depth // 06</span>
                </motion.div>
                <h2 className="text-[4rem] lg:text-[7rem] font-sans font-black uppercase tracking-tighter leading-[0.85]">Bespoke <br /><span className="text-osg-gold">Schematics.</span></h2>
                <p className="text-2xl text-white/40 font-sans leading-relaxed max-w-2xl">
                    Review the fire integrity ratings, ballistic grades, and automated light control latencies of our high-security and intelligence systems.
                </p>
            </div>
            
            <TechShowcase categoryKey="SpecializedSystems" />
        </div>
      </section>

      {/* Structural Integrity Bento: Luxury Engineering Tiles */}
      <section className="py-56 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        <div className="container-clean">
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[350px] gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2"
            >
              <div className="bg-osg-gold rounded-[4rem] p-20 lg:p-24 flex flex-col justify-between h-full shadow-premium relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-blueprint opacity-10" />
                <div className="relative z-10 space-y-12">
                   <FileText className="text-osg-navy" size={64} />
                   <h3 className="text-5xl lg:text-7xl text-osg-navy font-sans font-black tracking-tighter uppercase leading-none">Structural <br />Integrity.</h3>
                   <p className="text-osg-navy/70 text-xl leading-relaxed font-sans max-w-sm">
                      Our systems undergo rigorous physical testing in pressurized chambers and live furnace environments to ensure that in an emergency, the envelope remains uncompromised.
                   </p>
                </div>
                <div className="relative z-10 flex items-center gap-10 border-t border-osg-navy/10 pt-12">
                  <span className="text-7xl font-sans font-black text-osg-navy/20 leading-none">99.9%</span>
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-osg-navy leading-relaxed">System <br />Reliability <br />Coefficient</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative overflow-hidden group rounded-[4rem] border border-osg-navy/5 shadow-premium"
            >
              <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" fill className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[2000ms]" alt="ISO" />
              <div className="absolute inset-0 bg-gradient-to-t from-osg-navy via-transparent to-transparent p-16 flex flex-col justify-end">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-osg-gold text-osg-navy mb-10 shadow-2xl transition-transform group-hover:rotate-6">
                    <Factory size={28} />
                </div>
                <h4 className="text-3xl font-sans font-black text-white uppercase tracking-tight leading-none transition-colors group-hover:text-osg-gold">ISO 9001 <br/>Production Factory.</h4>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F8F9FB] p-16 rounded-[4rem] border border-osg-navy/5 flex flex-col justify-between group hover:bg-osg-navy transition-all duration-700 shadow-premium"
            >
              <div>
                <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.5em] mb-12 block leading-none">Certifications</span>
                <ul className="text-[11px] font-black uppercase text-osg-navy/40 space-y-6 group-hover:text-white/40">
                  <li className="flex items-center gap-6 transition-colors group-hover:text-white"><CheckCircle size={18} className="text-osg-gold" /> UL 10C POSITIVE PRESSURE</li>
                  <li className="flex items-center gap-6 transition-colors group-hover:text-white"><CheckCircle size={18} className="text-osg-gold" /> NFPA 252 TESTING</li>
                  <li className="flex items-center gap-6 transition-colors group-hover:text-white"><CheckCircle size={18} className="text-osg-gold" /> ASTM E119 WALL SYSTEMS</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-osg-navy p-16 rounded-[4rem] flex flex-col justify-center text-white border border-white/5 group hover:border-osg-gold transition-all duration-700 shadow-premium overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
              <div className="relative z-10 transition-transform group-hover:translate-x-3 duration-1000 space-y-8">
                <Settings className="text-osg-gold" size={48} />
                <h4 className="text-3xl font-sans font-black uppercase leading-none tracking-tight">Custom <br />Extrusion.</h4>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-black leading-relaxed">Bespoke engineering for unique project requirements.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Structural Blueprints: Luxury Call to Action */}
      <section className="py-48 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
                <div className="max-w-4xl space-y-12 text-center lg:text-left">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center justify-center lg:justify-start gap-6">
                        <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                        <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.6em]">Technical Access</span>
                    </motion.div>
                    <h2 className="text-[4rem] lg:text-[7rem] font-sans font-black uppercase tracking-tighter mb-8 leading-none">Structural <br/><span className="text-white/10">Blueprints.</span></h2>
                    <p className="text-2xl text-white/40 font-sans leading-relaxed max-w-2xl">
                        Access our BIM library, DWG details, and comprehensive certification dossiers for your next specification. Our engineering consultants are available for project-specific calculations.
                    </p>
                </div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-10"
                >
                    <Link href="/contact" className="btn-cta !px-16 py-6 !text-[11px]">TALK TO AN ENGINEER</Link>
                    <Link href="/resources/downloads" className="flex items-center gap-6 px-12 py-6 rounded-full border border-white/10 text-[11px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-osg-navy transition-all">DOWNLOAD DOSSIER</Link>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Dossier Access: Final Impact */}
      <section className="py-64 bg-white text-center relative overflow-hidden border-t border-osg-navy/5">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02]" />
        <div className="container-clean">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                <span className="text-osg-gold font-black text-[11px] uppercase tracking-[0.6em]">Risk Management</span>
            </div>
            <h2 className="text-[4rem] lg:text-[8rem] text-osg-navy font-sans font-black uppercase tracking-tighter leading-none">Dossier <br/><span className="text-osg-navy/10">Access.</span></h2>
            <Link href="/quote" className="btn-cta !px-16 py-6 !text-[11px] mx-auto group">
              ACCESS SECURITY DOSSIER <FileText size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

