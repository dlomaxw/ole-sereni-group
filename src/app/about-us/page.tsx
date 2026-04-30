'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Target, 
  Eye, 
  Users, 
  Zap,
  DraftingCompass,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col bg-[#F8F9FB]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#0B1C2C]">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
            alt="The OSG Office"
            fill
            className="object-cover grayscale opacity-10 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2C] via-transparent to-[#0B1C2C]" />
          <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03]" />
        </div>

        <div className="container-clean relative z-10">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6 mb-12"
            >
              <div className="w-16 h-[1px] bg-osg-gold/40"></div>
              <span className="text-[11px] font-black text-osg-gold uppercase tracking-[0.6em]">Architectural Identity // Established Excellence</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[5rem] lg:text-[10rem] font-sans font-black text-white uppercase leading-[0.8] tracking-tighter mb-12"
            >
              The Blueprint <br />
              <span className="text-osg-gold">Of OSG.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl lg:text-3xl text-white/40 max-w-3xl font-sans leading-relaxed"
            >
              Ole Sereni Group: East Africa's premier partner for high-performance architectural systems and precision finishing.
            </motion.p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute right-24 bottom-24 hidden lg:block">
           <div className="w-[1px] h-48 bg-gradient-to-b from-osg-gold to-transparent opacity-40"></div>
        </div>
      </section>

      {/* Mission & Vision: Refined Luxury Split */}
      <section className="bg-white py-0 border-y border-osg-navy/5 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-20 lg:p-40 bg-[#0B1C2C] text-white relative group overflow-hidden">
                <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02]" />
                <div className="relative z-10 space-y-12">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-[1px] bg-osg-gold"></div>
                       <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Directive 01</span>
                    </div>
                    <h2 className="text-6xl font-sans font-black uppercase tracking-tight">The <span className="text-osg-gold">Vision.</span></h2>
                    <p className="text-2xl text-white/40 leading-relaxed font-sans">
                        To define the next generation of architectural integrity through specialist systems that combine ethereal transparency with structural permanence.
                    </p>
                </div>
            </div>
            <div className="p-20 lg:p-40 bg-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02]" />
                <div className="relative z-10 space-y-12">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-[1px] bg-osg-navy/20"></div>
                       <span className="text-[10px] font-black text-osg-navy/40 uppercase tracking-[0.6em]">Directive 02</span>
                    </div>
                    <h2 className="text-6xl font-sans font-black text-osg-navy uppercase tracking-tight">The <span className="text-osg-gold">Mission.</span></h2>
                    <p className="text-2xl text-osg-navy/40 leading-relaxed font-sans">
                        Engineering precision. Aesthetic soul. We deliver superior environments through uncompromising safety, material mastery, and client-centered execution.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Core Principles: Architectural Grid */}
      <section className="py-40 bg-[#F8F9FB] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02]" />
        <div className="container-clean">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-40 gap-16">
            <div className="max-w-4xl space-y-8">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Our Operating DNA</span>
                </div>
                <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tighter leading-[0.85] font-sans">Core Principles <br/><span className="text-osg-navy/10">Of Execution.</span></h2>
            </div>
            <div className="lg:w-1/3 space-y-8">
                <div className="w-full h-[1px] bg-osg-navy/10" />
                <p className="text-[10px] text-osg-navy/40 uppercase tracking-[0.4em] font-black leading-loose">
                    At OSG, we don't just build. <br/> We calibrate environments for the human experience through industrial-grade precision.
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Engineering Precision', 
                desc: 'Every system is rigorously tested for wind loads and structural stability by certified engineers.',
                icon: DraftingCompass,
                stat: '0.001mm Tolerance'
              },
              { 
                title: 'Material Integrity', 
                desc: 'We source only premium-grade architectural materials from global leaders in specialized fabrication.',
                icon: ShieldCheck,
                stat: 'ISO Certified'
              },
              { 
                title: 'Execution Excellence', 
                desc: 'Our zero-defect philosophy ensures millimetre-perfect installation for the most complex facades.',
                icon: Award,
                stat: '99% Accuracy'
              }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-16 lg:p-20 group relative overflow-hidden rounded-[3rem] shadow-premium hover:shadow-2xl transition-all duration-700 border border-osg-navy/5"
              >
                <div className="absolute -right-6 -top-6 text-osg-navy/5 font-black text-8xl uppercase group-hover:text-osg-gold/5 transition-colors">0{i+1}</div>
                <div className="w-20 h-20 rounded-2xl bg-[#F8F9FB] flex items-center justify-center text-osg-navy group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 mb-12">
                   <value.icon size={32} />
                </div>
                <h3 className="text-3xl font-sans font-black text-osg-navy uppercase mb-6 group-hover:text-osg-gold transition-colors">{value.title}</h3>
                <p className="text-xl text-osg-navy/40 font-sans leading-relaxed mb-12">{value.desc}</p>
                <div className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.4em] pt-10 border-t border-osg-navy/5 group-hover:text-osg-gold/40 transition-colors">{value.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section: The Timeline */}
      <section className="py-48 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03]" />
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-6 space-y-12">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                 <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">Industrial Roots</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] font-sans font-black uppercase tracking-tight mb-12 leading-[0.85]">Uncompromising <br /><span className="text-osg-gold">Legacy.</span></h2>
              
              <div className="space-y-10 text-white/40 text-xl font-sans leading-relaxed max-w-2xl">
                <p>Founded as a specialized contractor for high-performance architectural systems, Ole Sereni Group has evolved into East Africa's premier partner for complex building envelopes.</p>
                <p>Our journey began with a singular focus: to raise the standard of structural finishing. Today, we coordinate full-spectrum technical executions for the region's most ambitious developments.</p>
              </div>

              <div className="flex flex-wrap gap-10 pt-8">
                <Link href="/projects" className="btn-cta !px-16 py-6 !text-[11px]">
                    VIEW PORTFOLIO <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="flex items-center gap-6 px-12 py-6 rounded-full border border-white/10 text-[11px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-osg-navy transition-all">TECHNICAL SUPPORT</Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
                <div className="aspect-[4/5] relative grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden rounded-[4rem] border border-white/5 shadow-2xl">
                    <Image 
                        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop"
                        alt="OSG Site Construction"
                        fill
                        className="object-cover scale-110 hover:scale-100 transition-transform duration-2000"
                    />
                </div>
                {/* Float Overlay */}
                <div className="absolute -bottom-12 -left-12 bg-osg-gold p-16 rounded-[2rem] hidden xl:block shadow-premium rotate-[-3deg]">
                    <p className="text-osg-navy font-black text-8xl font-sans leading-none">15+</p>
                    <p className="text-osg-navy font-black text-[11px] uppercase tracking-[0.5em] mt-4">Years Of Precision</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">System Integration</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tight leading-[0.8] font-sans">Engineer Your <br/><span className="text-osg-navy/10">Vision.</span></h2>
              <p className="text-2xl text-osg-navy/40 max-w-3xl mx-auto font-sans leading-relaxed">
                  Bring your blueprints to our technical experts. We provide the structural integrity your architecture deserves.
              </p>
              <div className="flex flex-wrap justify-center gap-10 pt-8">
                  <Link href="/quote" className="btn-cta !px-16 py-6 !text-[11px]">INITIALIZE BRIEF</Link>
                  <Link href="/book" className="flex items-center gap-6 px-12 py-6 rounded-full border border-osg-navy/10 text-[11px] font-black uppercase tracking-widest text-osg-navy hover:bg-osg-navy hover:text-white transition-all">BOOK CONSULTATION</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

