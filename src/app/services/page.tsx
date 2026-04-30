'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Image from 'next/image';


function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const services = [
  {
    id: 'aluminium-glass',
    icon: '◈',
    title: 'Aluminium & Glass Systems',
    tag: 'Flagship Service',
    desc: 'Curtain walls, window systems, door frames, facades, and specialist glazing solutions engineered for precision, weather resistance, and architectural elegance.',
    features: ['Curtain wall systems', 'Window & door systems', 'Glass facades & balustrades', 'Skylights & atria', 'Fire-rated glazing', 'Acoustic glass systems'],
    href: '/services/aluminium-glass',
    sectors: ['Commercial', 'Hospitality', 'Residential', 'Institutional'],
  },
  {
    id: 'gypsum-ceilings',
    icon: '⬡',
    title: 'Gypsum Works & Ceilings',
    tag: 'Interior',
    desc: 'Suspended ceilings, partition systems, decorative plasterwork, acoustic panels, and bespoke interior structures built to exact specification.',
    features: ['Suspended T-bar ceilings', 'Gypsum board partitions', 'Decorative plasterwork', 'Acoustic ceiling panels', 'Bulkheads & coffers', 'Fire-rated assemblies'],
    href: '/services/gypsum-works',
    sectors: ['Commercial', 'Hospitality', 'Institutional', 'Residential'],
  },
  {
    id: 'painting-tiling',
    icon: '◭',
    title: 'Painting & Tiling',
    tag: 'Finishing',
    desc: 'Surface preparation, primer systems, specialist coatings, large-format tiling, and precision grouting for premium interior and exterior finishes.',
    features: ['Interior wall & ceiling painting', 'Exterior facade coatings', 'Large-format floor tiling', 'Wall cladding & mosaic', 'Epoxy flooring systems', 'Waterproof coatings'],
    href: '/services/painting-tiling',
    sectors: ['All Sectors'],
  },
  {
    id: 'carpentry-joinery',
    icon: '◫',
    title: 'Carpentry & Joinery',
    tag: 'Joinery',
    desc: 'Custom millwork, built-in furniture, architectural woodwork, door and frame fabrication, and bespoke joinery crafted to elevated standards.',
    features: ['Custom millwork & cabinetry', 'Built-in wardrobes & units', 'Architectural panelling', 'Door & frame fabrication', 'Feature walls & screening', 'Staircase finishing'],
    href: '/services/carpentry',
    sectors: ['Residential', 'Hospitality', 'Retail', 'Corporate'],
  },
  {
    id: 'electrical',
    icon: '⚡',
    title: 'Electrical Installations',
    tag: 'M&E',
    desc: 'Wiring, switchgear, lighting systems, power distribution, and compliance-certified electrical works for commercial and residential projects.',
    features: ['Full wiring installations', 'DB boards & switchgear', 'LED lighting systems', 'Emergency & safety systems', 'Power distribution', 'Low-voltage systems'],
    href: '/services/electrical',
    sectors: ['Commercial', 'Residential', 'Industrial', 'Institutional'],
  },
  {
    id: 'finishing',
    icon: '◉',
    title: 'Interior & Exterior Finishing',
    tag: 'Full-scope',
    desc: 'Full-scope finishing coordination — from screeding and waterproofing to final cosmetic layers — ensuring a premium handover every time.',
    features: ['Floor screeding & levelling', 'Waterproofing systems', 'External rendering', 'Skirting & architrave', 'Final cosmetic finishing', 'Defects rectification'],
    href: '/services/finishing',
    sectors: ['All Sectors'],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Our Expertise"
        title="Specialist"
        titleHighlight="Service Lines."
        subtitle="One accountable contractor. OSG coordinates all finishing works under a single umbrella so your project stays on programme and delivers at the highest standard."
        ctaPrimary={{ label: 'Request a Quote', href: '/quote' }}
        ctaSecondary={{ label: 'View Projects', href: '/projects' }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Services Matrix: Luxury Staggered Grid */}
      <section className="py-40 relative z-10">
        <div className="container-clean">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl space-y-10">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                 <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Service Spectrum</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tighter leading-[0.85] font-sans">Operational <br/><span className="text-osg-navy/10">Divisions.</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-1/3 border-l border-osg-gold pl-12">
               <p className="text-[10px] text-osg-navy/40 uppercase tracking-[0.4em] font-black leading-relaxed">
                    Our technical divisions operate as a unified force, ensuring seamless transitions between structural and finishing phases.
               </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((s, i) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white rounded-[4rem] p-16 border border-osg-navy/5 shadow-premium h-full flex flex-col justify-between transition-all duration-700 hover:border-osg-gold hover:shadow-2xl">
                  <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01] pointer-events-none" />
                  
                  <div className="space-y-10 relative z-10">
                    <div className="flex justify-between items-start">
                       <span className="text-4xl text-osg-gold/40 group-hover:text-osg-gold transition-colors duration-500">{s.icon}</span>
                       <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.4em]">{s.tag}</span>
                    </div>
                    
                    <h3 className="text-[2.5rem] font-sans font-black text-osg-navy uppercase tracking-tight leading-none group-hover:text-osg-gold transition-colors duration-500">
                      {s.title}
                    </h3>
                    
                    <p className="text-lg text-osg-navy/40 font-sans leading-relaxed">
                      {s.desc}
                    </p>

                    <div className="space-y-4 pt-4">
                       <span className="text-[9px] font-black text-osg-navy/20 uppercase tracking-[0.5em] block">Sector Capability</span>
                       <div className="flex flex-wrap gap-3">
                          {s.sectors.map(sec => (
                            <span key={sec} className="px-4 py-2 bg-[#F8F9FB] rounded-full text-[9px] font-black text-osg-navy/60 uppercase tracking-widest">{sec}</span>
                          ))}
                       </div>
                    </div>
                  </div>

                  <div className="mt-16 relative z-10">
                    <Link href={s.href} className="btn-cta w-full justify-center group !py-5 !text-[10px]">
                       EXPLORE DIVISION <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Support Section */}
      <section className="py-48 bg-[#0B1C2C] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03]" />
          <div className="container-clean flex flex-col lg:flex-row items-center gap-32">
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="lg:w-1/2 space-y-12"
               >
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                     <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Consolidated Oversight</span>
                  </div>
                  <h2 className="text-[4rem] lg:text-[6.5rem] font-sans font-black uppercase tracking-tighter leading-[0.85]">Single <br/><span className="text-osg-gold">Accountability.</span></h2>
                  <p className="text-2xl text-white/40 font-sans leading-relaxed">
                    We eliminate the friction between subcontractors by managing the entire finishing envelope. One team, one standard, one point of contact.
                  </p>
                  <div className="grid grid-cols-2 gap-12 pt-12">
                     <div className="space-y-4">
                        <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.4em]">01 // Integration</span>
                        <p className="text-white/40 text-sm font-sans">Seamless coordination across all service lines.</p>
                     </div>
                     <div className="space-y-4">
                        <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.4em]">02 // Quality Control</span>
                        <p className="text-white/40 text-sm font-sans">Rigorous inspection protocols at every phase.</p>
                     </div>
                  </div>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="lg:w-1/2 relative aspect-square rounded-[5rem] overflow-hidden border border-white/5 shadow-2xl"
               >
                  <Image src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop" fill className="object-cover grayscale opacity-60" alt="Technical Oversight" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C] to-transparent" />
               </motion.div>
          </div>
      </section>

      {/* Final Call: Project Brief */}
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
                <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">Initialize Scope</span>
              </div>
              <h2 className="text-[4rem] lg:text-[7rem] text-osg-navy font-black uppercase tracking-tight leading-[0.8] font-sans">Define your <br/><span className="text-osg-navy/10">Project Brief.</span></h2>
              <p className="text-2xl text-osg-navy/40 max-w-3xl mx-auto font-sans leading-relaxed">
                Submit your project requirements and let our technical team design a consolidated finishing schedule for your build.
              </p>
              <div className="flex flex-wrap justify-center gap-10 pt-8">
                  <Link href="/brief" className="btn-cta !px-16 py-6 !text-[11px]">SUBMIT TECHNICAL BRIEF</Link>
                  <Link href="/contact" className="flex items-center gap-6 px-12 py-6 rounded-full border border-osg-navy/10 text-[11px] font-black uppercase tracking-widest text-osg-navy hover:bg-osg-navy hover:text-white transition-all">TALK TO AN ENGINEER</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

