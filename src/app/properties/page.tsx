'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROPERTIES, Property } from '@/lib/properties-data';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  MapPin, 
  Maximize2, 
  Building2, 
  Zap,
  Filter
} from 'lucide-react';

const SECTORS = ['All', 'Residential', 'Commercial', 'Industrial', 'Hospitality'];

export default function PropertiesPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.sector === filter);

  return (
    <main className="bg-osg-bg min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="bg-osg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03]" />
        <div className="container-clean relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-gold mb-4 block">Portfolio // Real Estate</span>
            <h1 className="text-display text-white mb-8">Architectural <br/><span className="text-white/20 text-">Properties.</span></h1>
            <p className="text-xl text-white/40 font-medium leading-relaxed max-w-xl">
              Explore our curated selection of high-performance properties integrated with OSG architectural systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER & GRID --- */}
      <section className="section-spacing pt-12">
        <div className="container-clean">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-16 pb-8 border-b border-osg-navy/5">
             <div className="flex items-center gap-3 mr-8">
                <Filter size={16} className="text-osg-navy/30" />
                <span className="text-[10px] font-black uppercase tracking-widest text-osg-navy/40">Filter by Sector</span>
             </div>
             <div className="flex flex-wrap gap-2">
                {SECTORS.map(s => (
                  <button
                    key={s}
                    onClick={() => setFilter(s)}
                    className={`
                      px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all
                      ${filter === s 
                        ? 'bg-osg-navy text-white shadow-lg' 
                        : 'bg-white text-osg-navy/40 hover:bg-osg-navy/5'}
                    `}
                  >
                    {s}
                  </button>
                ))}
             </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <PropertyCard key={item.slug} property={item} index={i} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-white border-y border-osg-navy/5 py-24 mb-24">
        <div className="container-clean text-center">
            <h2 className="text-3xl font-black text-osg-navy uppercase tracking-tight mb-8">Have a Property in Mind?</h2>
            <p className="text-body-clean max-w-lg mx-auto mb-12">Initialize a technical brief for our engineering team to evaluate your project scope and structural requirements.</p>
            <Link href="/quote" className="btn-cta">Initialize Project Brief</Link>
        </div>
      </section>
    </main>
  );
}

function PropertyCard({ property, index }: { property: Property; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/properties/${property.slug}`} className="block">
        <div className="card-clean p-0 overflow-hidden group">
          {/* Image Container */}
          <div className="relative h-64 w-full overflow-hidden">
            <Image 
              src={property.mainImage} 
              alt={property.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-6 left-6 flex flex-col gap-2">
               <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-osg-navy">
                 {property.sector}
               </span>
               <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                 property.status === 'Completed' ? 'bg-green-500 text-white' : 
                 property.status === 'In Progress' ? 'bg-osg-gold text-white' : 
                 'bg-osg-navy/40 text-white'
               }`}>
                 {property.status}
               </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="space-y-2">
               <div className="flex items-center gap-2 text-osg-navy/30">
                  <MapPin size={12} />
                  <span className="text-[9px] font-black uppercase tracking-widest">{property.location}</span>
               </div>
               <h3 className="text-xl font-black text-osg-navy group-hover:text-osg-red transition-all tracking-tight leading-none uppercase">
                 {property.title}
               </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y border-osg-navy/5 py-4">
               <div className="flex items-center gap-3">
                  <Maximize2 size={14} className="text-osg-gold" />
                  <div>
                    <p className="text-[8px] font-black text-osg-navy/30 uppercase leading-none mb-1">Total area</p>
                    <p className="text-[11px] font-black text-osg-navy leading-none">{property.area}</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <Building2 size={14} className="text-osg-gold" />
                  <div>
                    <p className="text-[8px] font-black text-osg-navy/30 uppercase leading-none mb-1">System level</p>
                    <p className="text-[11px] font-black text-osg-navy leading-none">{property.specs[0].value.split(' ')[0]}</p>
                  </div>
               </div>
            </div>

            <div className="flex items-center justify-between pt-2">
               <span className="text-lg font-black text-osg-navy">{property.price}</span>
               <div className="w-10 h-10 rounded-full border border-osg-border flex items-center justify-center text-osg-navy group-hover:bg-osg-gold group-hover:text-white group-hover:border-osg-gold transition-all duration-500">
                  <ArrowRight size={16} />
               </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

