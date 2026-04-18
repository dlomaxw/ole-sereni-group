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
    <main className="bg-osg-navy min-h-screen">
      <PageHero
        label="Markets We Serve"
        title="Industries &"
        titleHighlight="Sectors."
        subtitle="OSG delivers premium finishing works across residential, hospitality, commercial, institutional, and retail sectors throughout East Africa."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      {/* Industry Matrix Grid */}
      <section className="section-padding bg-osg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="container-osg relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <Reveal className="max-w-2xl">
                <span className="text-osg-gold font-black text-[10px] uppercase tracking-[0.5em] mb-8 block leading-none">Sector Allocation</span>
                <h2 className="text-5xl lg:text-7xl text-white font-black uppercase tracking-tighter italic leading-none">Market <br /><span className="text-white/20">DNA Matrix.</span></h2>
            </Reveal>
            <Reveal className="lg:w-1/3 border-l-2 border-osg-gold pl-10">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-black leading-relaxed">
                    Deploying specialized engineering benchmarks across five strategic commercial and civic domains.
                </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {industries.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.1}>
                <Link href={ind.href} className="block group h-full">
                  <div className="bg-osg-navy p-12 lg:p-16 h-full transition-all duration-700 group-hover:bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none transition-opacity group-hover:opacity-[0.08]" />
                    
                    <div className="flex justify-between items-start mb-16 relative z-10">
                        <div className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500">
                            {ind.icon && <ind.icon size={28} className="transition-transform group-hover:scale-110" />}
                        </div>
                        <div className="text-right">
                             <span className="block text-osg-gold font-black text-[10px] uppercase tracking-[0.4em] mb-1">{ind.tag}</span>
                             <span className="block text-white/20 font-black text-xs uppercase tracking-widest group-hover:text-white/40 transition-colors">{ind.metric}</span>
                        </div>
                    </div>

                    <div className="relative z-10 mb-12">
                        <h2 className="text-4xl lg:text-5xl text-white font-black uppercase tracking-tighter italic mb-4 leading-none group-hover:text-osg-gold transition-colors">{ind.title}</h2>
                        <p className="text-osg-gold/50 text-[10px] font-black uppercase tracking-widest">{ind.subtitle}</p>
                    </div>

                    <p className="text-white/40 text-sm font-medium leading-relaxed mb-12 max-w-lg relative z-10 group-hover:text-white/60 transition-colors line-clamp-3">
                        {ind.desc}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-12 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                      {ind.services.map(s => (
                        <span key={s} className="text-[9px] font-black uppercase tracking-widest px-4 py-1.5 bg-white/5 border border-white/10 text-white/50 group-hover:text-white transition-colors">{s}</span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 text-osg-gold text-[10px] font-black uppercase tracking-[0.4em] relative z-10">
                        EXPLORE SECTOR 
                        <span className="w-12 h-12 flex items-center justify-center border border-osg-gold/20 group-hover:border-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500">
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist CTA */}
      <section className="section-padding-lg bg-[#fcfdfc] border-t border-osg-navy/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
        <div className="container-osg relative z-10 text-center">
          <Reveal className="max-w-4xl mx-auto">
            <Terminal className="text-osg-gold mx-auto mb-10" size={40} />
            <h2 className="text-5xl lg:text-7xl text-osg-navy font-black uppercase tracking-tighter mb-10 italic leading-none">Cross-Sector <br/><span className="text-osg-navy/20">Capabilities.</span></h2>
            <p className="text-lg text-osg-navy/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed">OSG has experience across diverse building types. Operating in a sector not listed? Contact our engineering team to discuss your specific structural requirements.</p>
            
            <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="btn-primary py-6 px-14 group">
                    Talk to an Engineer <ArrowRight size={18} className="ml-4 transition-transform group-hover:translate-x-2" />
                </Link>
                <Link href="/quote" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy py-6 px-14 text-[10px] font-black uppercase tracking-widest transition-all">Submit Technical Brief</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
