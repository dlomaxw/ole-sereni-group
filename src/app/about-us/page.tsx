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
    <div className="flex flex-col bg-[#fcfdfc]">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
            alt="The OSG Office"
            fill
            className="object-cover grayscale opacity-20 scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="container-osg relative z-10">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[11px] font-black text-osg-gold uppercase tracking-[0.6em] mb-10 block"
            >
              Architectural Identity // Established Excellence
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-display font-serif font-black text-osg-navy uppercase leading-[0.85] tracking-tighter mb-10 italic"
            >
              The Blueprint <br />
              <span className="text-white bg-osg-navy px-4 py-2 inline-block -rotate-1 mt-4">OF OSG.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-osg-navy/70 max-w-2xl font-light leading-relaxed"
            >
              Ole Sereni Group: East Africa's premier partner for high-performance architectural systems and precision finishing.
            </motion.p>
          </div>
        </div>

        {/* Vertical Text Decoration */}
        <div className="absolute right-12 bottom-20 hidden lg:block overflow-hidden h-64">
           <motion.p 
             animate={{ y: [0, -200, 0] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="text-[10px] font-black text-osg-navy/10 uppercase tracking-[1em] [writing-mode:vertical-rl] whitespace-nowrap"
           >
             Precision // Integrity // Excellence // Innovation // Structural Strength
           </motion.p>
        </div>
      </section>

      {/* Mission & Vision: Split Terminal Layout */}
      <section className="bg-white py-0 border-y border-osg-navy/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-16 lg:p-32 bg-osg-navy text-white relative group overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="relative z-10 space-y-10">
                    <div className="w-16 h-1 w-full bg-osg-gold mb-12"></div>
                    <Eye size={48} className="text-osg-gold opacity-40" />
                    <h2 className="text-5xl font-serif font-black uppercase tracking-tight italic">The Vision</h2>
                    <p className="text-xl text-white/60 leading-relaxed font-light">
                        To define the next generation of architectural integrity through specialist systems that combine ethereal transparency with structural permanence.
                    </p>
                </div>
            </div>
            <div className="p-16 lg:p-32 bg-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-osg-cream/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative z-10 space-y-10">
                    <div className="w-16 h-1 w-full bg-osg-navy mb-12"></div>
                    <Target size={48} className="text-osg-navy opacity-20" />
                    <h2 className="text-5xl font-serif font-black text-osg-navy uppercase tracking-tight">The Mission</h2>
                    <p className="text-xl text-osg-navy/60 leading-relaxed font-light">
                        Engineering precision. Aesthetic soul. We deliver superior environments through uncompromising safety, material mastery, and client-centered execution.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Core Principles: Architectural Grid */}
      <section className="section-padding bg-[#fcfdfc]">
        <div className="container-osg">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-10">
            <div className="max-w-2xl">
                <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.5em] mb-6 block">Our Operating DNA</span>
                <h2 className="text-display-sm text-osg-navy font-black uppercase tracking-tighter leading-none">Core Principles <br/><span className="text-osg-navy/20 italic">Of Execution.</span></h2>
            </div>
            <div className="lg:w-1/3">
                <div className="w-full h-px bg-osg-navy/10 mb-8" />
                <p className="text-sm text-osg-navy/50 uppercase tracking-widest font-bold leading-loose">
                    At OSG, we don't just build. <br/> We calibrate environments for the human experience through industrial-grade precision.
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-osg-navy/5">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 lg:p-20 group relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-osg-navy/5 font-black text-7xl uppercase italic opacity-20 group-hover:text-osg-gold/10 transition-colors">{i+1}</div>
                <value.icon size={32} className="text-osg-gold mb-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif font-black text-osg-navy uppercase mb-6">{value.title}</h3>
                <p className="text-osg-navy/50 text-body leading-relaxed mb-10">{value.desc}</p>
                <div className="text-[10px] font-black text-osg-navy/30 uppercase tracking-[0.4em] pt-8 border-t border-osg-navy/5 group-hover:text-osg-gold transition-colors">{value.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section: The Timeline */}
      <section className="section-padding bg-osg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5" />
        <div className="container-osg relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
              <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.6em] mb-10 block">Industrial Roots</span>
              <h2 className="text-display-sm font-serif font-black uppercase tracking-tight italic mb-10 leading-[0.9]">Uncompromising <br /><span className="text-osg-gold">Legacy.</span></h2>
              
              <div className="space-y-8 text-white/50 text-lg leading-relaxed font-light mb-12">
                <p>Founded as a specialized contractor for high-performance architectural systems, Ole Sereni Group has evolved into East Africa's premier partner for complex building envelopes.</p>
                <p>Our journey began with a singular focus: to raise the standard of structural finishing. Today, we coordinate full-spectrum technical executions for the region's most ambitious developments.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/projects" className="btn-primary group !bg-white !text-osg-navy">
                    View Portfolio <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-outline !border-white/20 !text-white hover:!bg-white hover:!text-osg-navy transition-all uppercase tracking-widest text-[10px] py-4 px-10">Technical Support</Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
                <div className="aspect-[4/5] relative grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden border border-white/5">
                    <Image 
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2670&auto=format&fit=crop"
                        alt="OSG Site Construction"
                        fill
                        className="object-cover scale-110 group-hover:scale-100 transition-transform duration-2000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-osg-navy via-transparent translate-y-20 transition-transform duration-1000" />
                </div>
                {/* Float Overlay */}
                <div className="absolute -bottom-10 -left-10 bg-osg-gold p-12 hidden md:block shadow-2xl">
                    <p className="text-osg-navy font-black text-6xl italic leading-none">15+</p>
                    <p className="text-osg-navy font-black text-[10px] uppercase tracking-[0.4em] mt-2">Years Of Precision</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-lg bg-white text-center">
        <div className="container-osg max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-16 lg:p-24 border border-osg-navy/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.5em] mb-10 block">System Integration</span>
            <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter mb-10 leading-[0.85] italic">Engineer Your <br/><span className="text-osg-navy/20">Vision.</span></h2>
            <p className="text-osg-navy/60 text-xl font-light mb-14 max-w-2xl mx-auto leading-relaxed">
                Bring your blueprints to our technical experts. We provide the structural integrity your architecture deserves.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                <Link href="/quote" className="btn-primary py-6 px-14">Initialize Brief</Link>
                <Link href="/book" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy py-6 px-14 uppercase tracking-widest text-[11px] font-black">Book Consultation</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
