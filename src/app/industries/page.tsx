'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Building2, Hotel, School, ShoppingBag, LayoutGrid, Terminal } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const industries = [
  {
    id: 'hospitality-residential',
    icon: Hotel,
    title: 'Hospitality & Residential',
    subtitle: 'Hotels, resorts, apartments, villas',
    desc: 'From 5-star hotel fit-outs to premium apartment finishing, OSG brings the level of precision and aesthetic quality that high-end residential and hospitality clients demand.',
    services: ['Aluminium & Glass Systems', 'Gypsum Ceilings', 'Carpentry & Joinery', 'Painting & Tiling'],
    href: '/industries/hospitality-residential',
    tag: 'Sector 01',
    metric: 'STC 65+ Rated'
  },
  {
    id: 'corporate-commercial',
    icon: Building2,
    title: 'Corporate & Commercial',
    subtitle: 'Offices, banks, corporate HQs',
    desc: 'Corporate interiors and commercial facades that project professionalism and support productivity — delivered to programme and specification.',
    services: ['Curtain Wall Systems', 'Interior Finishing', 'Electrical Works', 'Gypsum Partitions'],
    href: '/industries/corporate-commercial',
    tag: 'Sector 02',
    metric: 'LEED Compatible'
  },
  {
    id: 'educational-institutional',
    icon: School,
    title: 'Educational & Institutional',
    subtitle: 'Schools, hospitals, government',
    desc: 'Durable, compliant finishing works for educational institutions and government facilities where safety, longevity, and value for money are paramount.',
    services: ['Painting & Tiling', 'Electrical Installations', 'Ceiling Works', 'Joinery'],
    href: '/industries/educational-institutional',
    tag: 'Sector 03',
    metric: 'EI 120 Certified'
  },
  {
    id: 'retail-industrial',
    icon: ShoppingBag,
    title: 'Retail & Light Industrial',
    subtitle: 'Malls, showrooms, warehouses',
    desc: 'High-throughput retail environments and industrial spaces require robust, practical finishes delivered with minimal disruption to trading operations.',
    services: ['Aluminium Shopfronts', 'Epoxy Flooring', 'Ceiling Systems', 'Electrical'],
    href: '/industries/retail-industrial',
    tag: 'Sector 04',
    metric: 'R11 Slip Rating'
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen">
      <PageHero
        label="Markets We Serve"
        title="Industries &"
        titleHighlight="Sectors."
        subtitle="OSG delivers premium finishing works across residential, hospitality, commercial, institutional, and retail sectors throughout East Africa."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      {/* Industry Matrix Grid */}
      <section className="py-20 lg:py-28 bg-[#0B1C2C] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-10 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl space-y-8"
            >
                <div className="flex items-center gap-4">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-[9px] sm:text-[10px] font-black text-osg-gold uppercase tracking-[0.3em] sm:tracking-[0.5em]">Sector Allocation</span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-[6.5rem] text-white font-black uppercase tracking-tighter leading-[0.9] font-sans">Market <br /><span className="text-white/20">DNA Matrix.</span></h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 border-l border-white/10 pl-6 lg:pl-12 pb-4"
            >
                <p className="text-white/45 text-[10px] uppercase tracking-[0.25em] lg:tracking-[0.35em] font-black leading-relaxed">
                    Deploying specialized engineering benchmarks across five strategic commercial and civic domains.
                </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
            {industries.map((ind, i) => (
              <motion.div 
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={ind.href} className="block group h-full">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 rounded-[1.75rem] lg:rounded-[2.25rem] h-full transition-all duration-700 hover:bg-white/10 hover:border-osg-gold relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
                    
                    <div className="flex justify-between items-start gap-4 mb-10 lg:mb-12 relative z-10">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-osg-gold group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500">
                            {ind.icon && <ind.icon size={28} className="transition-transform group-hover:scale-110" />}
                        </div>
                        <div className="text-right space-y-2">
                             <span className="block text-osg-gold font-black text-[10px] uppercase tracking-[0.25em]">{ind.tag}</span>
                             <span className="block text-white/20 font-black text-[9px] uppercase tracking-widest group-hover:text-white/40 transition-colors">{ind.metric}</span>
                        </div>
                    </div>

                    <div className="relative z-10 mb-10">
                        <h2 className="text-3xl lg:text-4xl text-white font-black uppercase tracking-tight mb-4 font-sans group-hover:text-osg-gold transition-colors">{ind.title}</h2>
                        <p className="text-osg-gold/50 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.25em]">{ind.subtitle}</p>
                    </div>

                    <p className="text-white/45 text-base lg:text-lg font-medium leading-relaxed mb-8 lg:mb-10 max-w-lg relative z-10 font-sans group-hover:text-white/60 transition-colors">
                        {ind.desc}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10 lg:mb-12 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                      {ind.services.map(s => (
                        <span key={s} className="text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 text-white/55 group-hover:text-white transition-colors">{s}</span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-osg-gold text-[10px] font-black uppercase tracking-[0.28em] lg:tracking-[0.45em] relative z-10">
                        EXPLORE SECTOR 
                        <div className="w-12 h-12 rounded-full border border-osg-gold/20 flex items-center justify-center group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500">
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist CTA */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-clean relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto space-y-12"
          >
            <div className="flex justify-center">
               <Terminal className="text-osg-gold" size={48} />
            </div>
            <h2 className="text-5xl lg:text-[6.5rem] text-osg-navy font-black uppercase tracking-tight leading-[0.9] font-sans">Cross-Sector <br/><span className="text-osg-navy/10">Capabilities.</span></h2>
            <p className="text-lg lg:text-2xl text-osg-navy/45 max-w-3xl mx-auto font-sans leading-relaxed">OSG has experience across diverse building types. Operating in a sector not listed? Contact our engineering team to discuss your specific structural requirements.</p>
            
            <div className="flex flex-wrap justify-center gap-8 pt-10">
                <Link href="/contact" className="btn-cta !px-16 py-6 !text-[10px]">
                    TALK TO AN ENGINEER <ArrowRight size={18} />
                </Link>
                <Link href="/quote" className="flex items-center gap-6 px-12 py-6 rounded-full border border-osg-navy/10 text-[10px] font-black uppercase tracking-widest text-osg-navy hover:bg-osg-navy hover:text-white transition-all">SUBMIT TECHNICAL BRIEF</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

