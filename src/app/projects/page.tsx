'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';


const filters = ['All Work', 'Commercial', 'Residential', 'Civic', 'Hospitality', 'Offices'];

const projects = [
  { 
    id: 'kampala-heights', 
    title: 'Kampala Heights', 
    sector: 'Commercial', 
    location: 'Kampala, Uganda', 
    status: 'Completed', 
    scope: 'Curtain Wall Facade, High-Performance Glazing',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
    span: '' 
  },
  { 
    id: 'serena-suites', 
    title: 'Serena Suites', 
    sector: 'Hospitality', 
    location: 'Kampala, Uganda', 
    status: 'Completed', 
    scope: 'Bespoke Carpentry & Luxury Interior Finishing',
    image: 'https://images.unsplash.com/photo-1512914890251-2f96a9b092e3?q=80&w=1200',
    span: 'lg:col-span-1' 
  },
  { 
    id: 'forest-mall', 
    title: 'Forest Mall Annex', 
    sector: 'Commercial', 
    location: 'Kampala, Uganda', 
    status: 'Completed', 
    scope: 'Aluminium Systems & Unitized Glazing',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee6b?q=80&w=1200',
    span: '' 
  },
  { 
    id: 'nakawa-residences', 
    title: 'The Nakawa Residences', 
    sector: 'Residential', 
    location: 'Nakawa, Uganda', 
    status: 'Completed', 
    scope: 'Gypsum Artistry & Architectural Painting',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
    span: 'md:col-span-2' 
  },
  { 
    id: 'city-corporate', 
    title: 'City Corporate Centre', 
    sector: 'Offices', 
    location: 'Kampala, Uganda', 
    status: 'In Progress', 
    scope: 'Structural Glazing & Multi-Phase Electrical',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200',
    span: '' 
  },
  { 
    id: 'makerere-institute', 
    title: 'Makerere Innovation Hub', 
    sector: 'Civic', 
    location: 'Kampala, Uganda', 
    status: 'Completed', 
    scope: 'Institutional Fit-Out & Acoustic Partitions',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200',
    span: '' 
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState('All Work');

  const filtered = active === 'All Work'
    ? projects
    : projects.filter(p => p.sector === active);

  return (
    <main className="bg-osg-navy font-sans">
      <PageHero
        label="Industry Portfolio"
        title="Works &"
        titleHighlight="Case Studies."
        subtitle="A selection of landmark architectural implementations across the East African landscape. We bridge the gap between design and built excellence."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
        ctaPrimary={{ label: 'Initiate Project', href: '/quote' }}
        ctaSecondary={{ label: 'Industry Standards', href: '/resources/downloads' }}
      />

      {/* Sticky filter bar */}
      <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-xl border-b border-osg-navy/5">
        <div className="container-osg py-4">
          <div className="flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 flex-shrink-0">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-8 py-3 text-[9px] font-black tracking-[0.3em] uppercase transition-all whitespace-nowrap ${
                    active === f
                      ? 'bg-osg-gold text-osg-navy shadow-lg'
                      : 'text-osg-navy/40 hover:text-osg-navy hover:bg-osg-navy/5'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <span className="text-[10px] text-osg-navy/30 font-black tracking-widest uppercase flex-shrink-0">{filtered.length} DISCOVERIES</span>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <div className="container-osg relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`${p.span} group`}
                >
                  <Link href={`/projects/${p.id}`} className="block">
                    <div className="relative aspect-[4/5] bg-osg-charcoal overflow-hidden mb-10 border border-osg-navy/5 shadow-2xl transition-all duration-1000 group-hover:shadow-osg-navy/20">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-75 transition-all duration-1000"
                      />
                      
                      {/* Architectural Overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                      
                      {/* Metadata */}
                      <div className="absolute top-8 left-8 flex flex-col items-start gap-4">
                        <span className="bg-white text-osg-navy text-[8px] font-black uppercase tracking-[0.4em] px-4 py-1.5 shadow-xl transition-transform group-hover:-translate-x-1 duration-700">{p.sector}</span>
                        <div className="flex items-center gap-2 bg-osg-navy/80 backdrop-blur-md px-3 py-1.5">
                           <span className={`w-1.5 h-1.5 rounded-full ${p.status === 'In Progress' ? 'bg-osg-gold animate-pulse' : 'bg-green-500'}`} />
                           <span className="text-[8px] text-white font-black uppercase tracking-widest">{p.status}</span>
                        </div>
                      </div>

                      {/* Detail Link */}
                      <div className="absolute bottom-8 right-8 w-16 h-16 bg-osg-gold flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                         <ArrowUpRight size={20} className="text-osg-navy" />
                      </div>
                    </div>

                    <div className="flex items-end justify-between border-l-2 border-osg-navy/5 pl-8 group-hover:border-osg-gold transition-colors duration-700">
                      <div>
                        <span className="text-[9px] text-osg-navy/30 font-black uppercase tracking-[0.5em] mb-3 block">{p.location}</span>
                        <h3 className="text-3xl font-black text-osg-navy uppercase tracking-tighter mb-1 italic leading-none group-hover:text-osg-navy transition-colors">{p.title}</h3>
                        <p className="text-[11px] text-osg-navy/50 font-medium uppercase tracking-widest mt-4 max-w-[200px] leading-relaxed">{p.scope}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                         <span className="text-[8px] font-black text-osg-navy/20 uppercase tracking-[0.3em]">Project ID</span>
                         <span className="text-[10px] font-black text-osg-navy/40 tracking-widest">OSG-00{i+1}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modern High-Impact CTA */}
      <section className="bg-osg-navy py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
        <div className="container-osg relative z-10 text-center">
            <Reveal>
              <span className="text-osg-gold font-black uppercase text-xs tracking-[0.6em] mb-12 block">Strategic Partnerships</span>
              <h2 className="text-6xl lg:text-8xl text-white font-black uppercase tracking-tighter italic mb-16 leading-none">Engineer <br/> your <span className="text-white/20">Legacy.</span></h2>
              <div className="flex flex-wrap justify-center gap-10">
                <Link href="/quote" className="btn-primary !py-8 !px-20 text-sm font-black tracking-[0.3em]">START PROJECT CONSULTATION <ArrowRight size={18} /></Link>
              </div>
            </Reveal>
        </div>
      </section>
    </main>
  );
}
