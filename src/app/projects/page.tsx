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
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200',
    span: 'lg:col-span-1' 
  },
  { 
    id: 'forest-mall', 
    title: 'Forest Mall Annex', 
    sector: 'Commercial', 
    location: 'Kampala, Uganda', 
    status: 'Completed', 
    scope: 'Aluminium Systems & Unitized Glazing',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200',
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
    <main className="bg-[#F8F9FB] font-sans">
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
      <div className="sticky top-[80px] z-40 bg-white/70 backdrop-blur-3xl border-b border-osg-navy/5 shadow-xl shadow-osg-navy/5">
        <div className="container-clean py-6">
          <div className="flex items-center justify-between gap-12 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-4 flex-shrink-0">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-10 py-4 text-[10px] font-black tracking-[0.4em] uppercase transition-all whitespace-nowrap rounded-full ${
                    active === f
                      ? 'bg-osg-navy text-osg-gold shadow-2xl'
                      : 'text-osg-navy/40 hover:text-osg-navy hover:bg-osg-navy/5'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <span className="text-[10px] text-osg-navy/20 font-black tracking-[0.4em] uppercase flex-shrink-0">{filtered.length} DISCOVERIES</span>
          </div>
        </div>
      </div>

      <section className="py-32 bg-[#F8F9FB] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
        
        <div className="container-clean relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`${p.span} group`}
                >
                  <Link href={`/projects/${p.id}`} className="block">
                    <div className="relative aspect-[4/5] bg-[#0B1C2C] overflow-hidden mb-12 rounded-[3.5rem] shadow-premium transition-all duration-1000 group-hover:shadow-2xl">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-50 transition-all duration-1000"
                      />
                      
                      {/* Metadata */}
                      <div className="absolute top-10 left-10 flex flex-col items-start gap-4">
                        <span className="bg-white/90 backdrop-blur-md text-osg-navy text-[9px] font-black uppercase tracking-[0.5em] px-6 py-2 rounded-full shadow-2xl">{p.sector}</span>
                        <div className="flex items-center gap-3 bg-osg-navy/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                           <span className={`w-1.5 h-1.5 rounded-full ${p.status === 'In Progress' ? 'bg-osg-gold animate-pulse' : 'bg-green-500'}`} />
                           <span className="text-[9px] text-white font-black uppercase tracking-widest">{p.status}</span>
                        </div>
                      </div>

                      {/* Detail Link Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                         <div className="w-24 h-24 rounded-full bg-osg-gold flex items-center justify-center text-osg-navy scale-50 group-hover:scale-100 transition-transform duration-700 shadow-2xl">
                            <ArrowUpRight size={32} />
                         </div>
                      </div>
                    </div>

                    <div className="space-y-6 px-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <span className="text-[10px] text-osg-gold font-black uppercase tracking-[0.5em]">{p.location}</span>
                          <h3 className="text-4xl font-sans font-black text-osg-navy uppercase tracking-tight leading-none group-hover:text-osg-gold transition-colors">{p.title}</h3>
                        </div>
                        <div className="text-right">
                           <span className="text-[8px] font-black text-osg-navy/10 uppercase tracking-[0.4em] block">ID</span>
                           <span className="text-[10px] font-black text-osg-navy/30 tracking-widest uppercase">OSG-{i+102}</span>
                        </div>
                      </div>
                      <p className="text-lg text-osg-navy/40 font-sans leading-relaxed max-w-xs">{p.scope}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modern High-Impact CTA */}
      <section className="bg-[#0B1C2C] py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                <span className="text-osg-gold font-black uppercase text-[10px] tracking-[0.6em]">Strategic Partnerships</span>
              </div>
              <h2 className="text-[5rem] lg:text-[9rem] text-white font-black uppercase tracking-tight leading-[0.85] font-sans">Engineer <br/> your <span className="text-white/10">Legacy.</span></h2>
              <div className="flex flex-wrap justify-center gap-10 pt-8">
                <Link href="/quote" className="btn-cta !px-20 py-7 !text-[11px]">START PROJECT CONSULTATION <ArrowRight size={18} /></Link>
              </div>
            </motion.div>
        </div>
      </section>
    </main>
  );
}

