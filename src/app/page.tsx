'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Activity,
  Maximize2,
  Building2,
  Cpu,
  Layout,
  Package,
  ArrowDown
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '@/components/Reveal';

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Global Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
      
      {/* --- PREMIUM ARCHITECTURAL HERO --- */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1C2C] pt-28 pb-16 lg:pt-32 lg:pb-40">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800"
            alt="Architectural Masterpiece"
            fill
            sizes="100vw"
            className="object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2C]/60 via-transparent to-[#0B1C2C]" />
          <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05]" />
        </motion.div>

        <div className="container-clean relative z-10 w-full">
          <div className="max-w-6xl">
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="space-y-12"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                 <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                 <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.28em] sm:tracking-[0.5em] text-osg-gold">Architectural Identity // 01</span>
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-[8rem] xl:text-[9.5rem] font-sans font-black text-white leading-[0.9] lg:leading-[0.82] tracking-tighter uppercase">
                The Blueprint <br />
                Of <span className="text-osg-gold/10 text-stroke-gold">OSG.</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/55 font-sans max-w-2xl leading-relaxed">
                Ole Sereni Group: East Africa's premier partner for high-performance architectural systems and precision finishing.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 pt-4 lg:pt-8">
                <Link href="/quote" className="btn-cta text-[9px] sm:text-[11px] !px-8 sm:!px-12 lg:!px-16 py-5 lg:py-7">
                  INITIALIZE PROJECT <ArrowRight size={20} />
                </Link>
                <Link href="/products" className="flex items-center gap-4 sm:gap-6 px-7 sm:px-10 lg:px-12 py-5 lg:py-7 rounded-full border border-white/10 text-white text-[9px] sm:text-[11px] font-black uppercase tracking-[0.25em] sm:tracking-[0.35em] hover:bg-white hover:text-osg-navy transition-all backdrop-blur-3xl">
                  EXPLORE SYSTEMS <ArrowUpRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- LUXURY STATS BAR --- */}
        <div className="absolute bottom-16 left-0 w-full hidden lg:block overflow-hidden">
           <div className="container-clean">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="bg-white/5 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 xl:p-10 flex justify-between items-center shadow-premium relative overflow-hidden"
              >
                  <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
                  {[
                    { label: 'Projects Completed', value: '1,200+', icon: Building2 },
                    { label: 'SLA Response', value: '24H', icon: Zap },
                    { label: 'Calibration', value: '0.01mm', icon: Maximize2 }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-10 group relative z-10">
                       <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-2xl">
                          <stat.icon size={28} />
                       </div>
                       <div className="space-y-2">
                          <p className="text-2xl font-sans font-black text-white tracking-tight leading-none">{stat.value}</p>
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                  
                  <div className="h-16 w-[1px] bg-white/5 mx-12 relative z-10" />
                  
                  <div className="flex items-center gap-10 group relative z-10">
                     <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-osg-gold shadow-2xl">
                        <Activity size={28} className="animate-pulse" />
                     </div>
                     <div className="text-right space-y-2">
                        <p className="text-[11px] font-black text-white uppercase tracking-[0.4em] leading-none">Facility Active</p>
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-green-500/60 flex items-center gap-3 justify-end">
                           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                           Sub-Millimeter Logic
                        </p>
                     </div>
                  </div>
              </motion.div>
           </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 hidden lg:block"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* --- VISION & MISSION: Architectural Split --- */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 xl:gap-40 items-start">
            <Reveal className="space-y-12">
              <div className="w-20 h-20 rounded-[2rem] bg-[#0B1C2C] flex items-center justify-center text-osg-gold shadow-premium">
                 <ShieldCheck size={40} />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.6em]">Operational Philosophy</span>
                </div>
                <h3 className="text-5xl lg:text-7xl font-sans font-black text-osg-navy uppercase tracking-tighter">The Vision.</h3>
              </div>
              <p className="text-lg lg:text-2xl text-osg-navy/55 font-sans leading-relaxed max-w-xl">
                To define the next generation of architectural integrity through specialist systems that combine ethereal transparency with structural permanence.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="space-y-12">
              <div className="w-20 h-20 rounded-[2rem] bg-[#0B1C2C] flex items-center justify-center text-osg-gold shadow-premium">
                 <Activity size={40} />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.6em]">Engineering Mandate</span>
                </div>
                <h3 className="text-5xl lg:text-7xl font-sans font-black text-osg-navy uppercase tracking-tighter">The Mission.</h3>
              </div>
              <p className="text-lg lg:text-2xl text-osg-navy/55 font-sans leading-relaxed max-w-xl">
                Engineering precision. Aesthetic soul. We deliver superior environments through uncompromising safety, material mastery, and client-centered execution.
              </p>
              <div className="pt-8 border-l border-osg-gold pl-12 space-y-4">
                <p className="text-[11px] font-black text-osg-navy/30 uppercase tracking-[0.5em] leading-relaxed">
                  At OSG, we don't just build. <br />
                  <span className="text-osg-navy text-[13px]">We calibrate environments for the human experience through industrial-grade precision.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- FEATURED TYPOLOGIES: High-Fidelity Catalog --- */}
      <section className="py-24 lg:py-40 bg-[#0B1C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10">
          <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16 mb-16 lg:mb-24">
             <div className="max-w-3xl space-y-12">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-[11px] font-black uppercase tracking-[0.6em] text-osg-gold">System Typologies</span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-[7rem] font-sans font-black uppercase tracking-tighter leading-[0.88]">Architectural <br/><span className="text-white/10">Modernism.</span></h2>
                <p className="text-lg lg:text-2xl text-white/45 font-sans max-w-2xl leading-relaxed">
                  We combine technical BOQ analysis with bespoke fabrication to deliver systems that exceed international standards.
                </p>
             </div>
             <Link href="/services" className="btn-cta !px-12 py-6 !text-[11px]">
                THE ENGINEERING BLUEPRINT <ArrowRight size={18} />
             </Link>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
            {[
              { 
                title: 'Aluminium Systems', 
                desc: 'Bespoke curtain walls engineered for structural resilience.',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
                icon: Building2,
                href: '/services/aluminium-glass',
              },
              { 
                title: 'Structural Glazing', 
                desc: 'Unitized frameworks designed for ethereal transparency.',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
                icon: Layout,
                href: '/products/glass-systems',
              },
              { 
                title: 'Clean Finishing', 
                desc: 'Precision interior finishing using advanced material logic.',
                image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=1200',
                icon: Cpu,
                href: '/services/painting-tiling',
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link href={item.href} className="group block h-full">
                  <div className="bg-white/5 backdrop-blur-3xl border border-white/5 rounded-[1.75rem] lg:rounded-[2.25rem] overflow-hidden group h-full flex flex-col transition-all duration-700 hover:border-osg-gold shadow-2xl relative">
                    <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
                    <div className="relative aspect-[4/3] min-h-[260px] overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover grayscale opacity-40 transition-all duration-[2000ms] group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100" />
                      <div className="absolute top-10 left-10 w-16 h-16 rounded-2xl bg-osg-navy flex items-center justify-center text-osg-gold shadow-2xl transition-transform group-hover:rotate-6">
                        <item.icon size={32} />
                      </div>
                    </div>
                    <div className="p-6 lg:p-8 xl:p-10 space-y-8 flex-1 flex flex-col relative z-10">
                      <div className="space-y-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-osg-gold transition-colors">System Typologies // 0{i+1}</span>
                        <h3 className="text-2xl lg:text-3xl font-sans font-black text-white uppercase tracking-tight group-hover:text-osg-gold transition-colors">{item.title}</h3>
                        <p className="text-base lg:text-lg text-white/40 font-sans leading-relaxed group-hover:text-white/55 transition-colors">{item.desc}</p>
                      </div>
                      <div className="pt-8 mt-auto border-t border-white/10">
                         <span className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-osg-gold px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-osg-navy shadow-lg shadow-osg-gold/20 transition-all group-hover:bg-white group-hover:shadow-white/10">
                           Explore Specs
                           <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                         </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- OPERATIONAL EXCELLENCE: Luxury Deep-Dive --- */}
      <section className="py-24 lg:py-40 bg-white border-y border-osg-navy/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
        <div className="container-clean relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 xl:gap-40 items-center">
              <Reveal>
                <div className="relative h-[380px] lg:h-[560px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-premium group border border-osg-navy/5">
                   <Image 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200" 
                    alt="Engineering" 
                    fill 
                    className="object-cover grayscale opacity-30 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute top-12 left-12">
                      <span className="bg-[#0B1C2C] text-osg-gold text-[10px] font-black uppercase tracking-[0.5em] px-8 py-4 rounded-full shadow-2xl">Calibration Hub</span>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none bg-grid-blueprint" />
                </div>
              </Reveal>
              
              <Reveal delay={0.2} className="space-y-16">
                 <div className="space-y-12">
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                      <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.6em]">Operational Excellence</span>
                   </div>
                   <h2 className="text-5xl lg:text-[6.5rem] font-sans font-black text-osg-navy uppercase leading-[0.9] tracking-tighter">Enterprise Scale <br/> Fabrication.</h2>
                   <p className="text-lg lg:text-2xl text-osg-navy/55 font-sans leading-relaxed max-w-xl">
                     Our state-of-the-art facility on Mombasa Road operates at 92% efficiency, ensuring your architectural components are fabricated with sub-millimeter precision.
                   </p>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-16 lg:gap-24">
                    <div className="space-y-6">
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-navy/20">Quality Control</span>
                       <p className="text-[12px] font-black text-osg-navy uppercase tracking-[0.3em] flex items-center gap-4 group hover:text-osg-gold transition-colors">
                          <ShieldCheck size={20} className="text-osg-gold group-hover:scale-110 transition-transform" />
                          ISO 9001:2015 CERTIFIED
                       </p>
                    </div>
                    <div className="space-y-6">
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-navy/20">Supply Chain</span>
                       <p className="text-[12px] font-black text-osg-navy uppercase tracking-[0.3em] flex items-center gap-4 group hover:text-osg-gold transition-colors">
                          <Package size={20} className="text-osg-gold group-hover:scale-110 transition-transform" />
                          TIER-1 ARCHITECTURAL
                       </p>
                    </div>
                 </div>
                 
                 <div className="pt-8">
                    <Link href="/about-us" className="btn-cta !px-16 py-6 !text-[11px]">
                       VIEW CAPABILITIES <ArrowRight size={20} />
                    </Link>
                 </div>
              </Reveal>
           </div>
        </div>
      </section>
      
      {/* FINAL CTA: High-Impact Outro */}
      <section className="py-24 lg:py-40 bg-[#F8F9FB] relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
         <div className="container-clean relative z-10 text-center space-y-24">
            <Reveal className="space-y-16">
              <div className="flex flex-col items-center gap-6">
                 <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                 <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">Operational Mandate</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-[8rem] xl:text-[9rem] font-sans font-black text-osg-navy uppercase tracking-tighter leading-[0.88]">
                 Ready to Engineer <br/><span className="text-osg-navy/10">the Future.</span>
              </h2>
              <p className="text-lg lg:text-2xl text-osg-navy/45 max-w-3xl mx-auto font-sans leading-relaxed">
                Partner with Ole Sereni Group for projects where failure is not an option and luxury is the baseline structural requirement.
              </p>
            </Reveal>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-12"
            >
                <Link href="/quote" className="btn-cta !px-24 py-8 !text-[12px]">INITIALIZE REVIEW</Link>
                <Link href="/contact" className="flex items-center gap-6 px-16 py-8 rounded-full border border-osg-navy/10 text-[12px] font-black uppercase tracking-[0.4em] text-osg-navy hover:bg-osg-navy hover:text-white transition-all shadow-sm">CONTACT CENTER</Link>
            </motion.div>
         </div>
      </section>
    </main>
  );
}

