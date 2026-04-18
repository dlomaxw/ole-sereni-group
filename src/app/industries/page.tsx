'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Building2,
  Hotel,
  School,
  ShoppingBag,
  Terminal,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const industries = [
  {
    id: 'hospitality-residential',
    icon: Hotel,
    image: '/images/industry-hospitality.jpg',
    title: 'Hospitality & Residential',
    subtitle: 'Hotels, resorts, apartments, villas',
    desc: 'From 5-star hotel fit-outs to premium apartment finishing, OSG brings the level of precision and aesthetic quality that high-end residential and hospitality clients demand.',
    services: [
      'Aluminium & Glass Systems',
      'Gypsum Ceilings',
      'Carpentry & Joinery',
      'Painting & Tiling',
    ],
    href: '/industries/hospitality-residential',
    tag: 'Sector 01',
    metric: 'STC 65+ Rated',
  },
  {
    id: 'corporate-commercial',
    icon: Building2,
    image: '/images/industry-corporate.jpg',
    title: 'Corporate & Commercial',
    subtitle: 'Offices, banks, corporate HQs',
    desc: 'Corporate interiors and commercial facades that project professionalism and support productivity — delivered to programme and specification.',
    services: [
      'Curtain Wall Systems',
      'Interior Finishing',
      'Electrical Works',
      'Gypsum Partitions',
    ],
    href: '/industries/corporate-commercial',
    tag: 'Sector 02',
    metric: 'LEED Compatible',
  },
  {
    id: 'educational-institutional',
    icon: School,
    image: '/images/industry-educational.jpg',
    title: 'Educational & Institutional',
    subtitle: 'Schools, hospitals, government',
    desc: 'Durable, compliant finishing works for educational institutions and government facilities where safety, longevity, and value for money are paramount.',
    services: [
      'Painting & Tiling',
      'Electrical Installations',
      'Ceiling Works',
      'Joinery',
    ],
    href: '/industries/educational-institutional',
    tag: 'Sector 03',
    metric: 'EI 120 Certified',
  },
  {
    id: 'retail-industrial',
    icon: ShoppingBag,
    image: '/images/industry-retail.jpg',
    title: 'Retail & Light Industrial',
    subtitle: 'Malls, showrooms, warehouses',
    desc: 'High-throughput retail environments and industrial spaces require robust, practical finishes delivered with minimal disruption to trading operations.',
    services: [
      'Aluminium Shopfronts',
      'Epoxy Flooring',
      'Ceiling Systems',
      'Electrical',
    ],
    href: '/industries/retail-industrial',
    tag: 'Sector 04',
    metric: 'R11 Slip Rating',
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
          {/* Intro */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
            <Reveal className="max-w-2xl">
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-5 block leading-none">
                Sector Allocation // 01
              </span>
              <h2 className="text-4xl lg:text-6xl text-white font-black uppercase tracking-tighter italic leading-[0.9]">
                Four core <br />
                <span className="text-white/20">markets.</span>
              </h2>
            </Reveal>
            <Reveal
              delay={0.1}
              className="lg:w-1/3 border-l-2 border-osg-gold pl-8"
            >
              <p className="text-sm text-white/50 leading-relaxed">
                Deploying specialized engineering benchmarks across strategic
                commercial and civic domains throughout East Africa.
              </p>
            </Reveal>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.08}>
                <Link href={ind.href} className="block group h-full">
                  <article className="relative bg-osg-navy-mid border border-white/10 hover:border-osg-gold transition-all duration-500 overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-osg-navy">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-osg-navy via-osg-navy/40 to-transparent" />

                      {/* Tag + Metric */}
                      <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                        <div className="bg-osg-gold text-osg-navy px-3.5 py-2">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                            {ind.tag}
                          </span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2">
                          <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                            {ind.metric}
                          </span>
                        </div>
                      </div>

                      {/* Icon at bottom */}
                      <div className="absolute bottom-6 left-6">
                        <div className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:bg-osg-gold group-hover:text-osg-navy group-hover:border-osg-gold transition-all duration-500">
                          <ind.icon size={24} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow p-8 lg:p-10">
                      <h2 className="text-2xl lg:text-3xl text-white font-serif font-black uppercase tracking-tighter italic mb-2 leading-tight group-hover:text-osg-gold transition-colors">
                        {ind.title}
                      </h2>
                      <p className="text-osg-gold/70 text-[10px] font-black uppercase tracking-[0.3em] mb-5">
                        {ind.subtitle}
                      </p>

                      <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow group-hover:text-white/70 transition-colors">
                        {ind.desc}
                      </p>

                      {/* Service tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {ind.services.map((s) => (
                          <span
                            key={s}
                            className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 text-white/60"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-5 border-t border-white/10">
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-osg-gold group-hover:text-white transition-colors">
                          Explore Sector
                        </span>
                        <span className="w-10 h-10 bg-white/5 border border-white/10 text-white flex items-center justify-center group-hover:bg-osg-gold group-hover:text-osg-navy group-hover:border-osg-gold transition-all">
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist CTA */}
      <section className="section-padding-lg bg-[#fcfdfc] border-t border-osg-navy/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
        <div className="container-osg relative z-10 text-center">
          <Reveal className="max-w-4xl mx-auto">
            <Terminal className="text-osg-gold mx-auto mb-8" size={32} />
            <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-6 block">
              Cross-Sector
            </span>
            <h2 className="text-4xl lg:text-6xl text-osg-navy font-black uppercase tracking-tighter mb-6 italic leading-[0.9]">
              Can&apos;t see your <br />
              <span className="text-osg-navy/20">sector?</span>
            </h2>
            <p className="text-base text-osg-navy/60 mb-10 max-w-xl mx-auto leading-relaxed">
              OSG has experience across diverse building types. Operating in a
              sector not listed? Contact our engineering team to discuss your
              specific structural requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Talk to an Engineer <ArrowRight size={15} />
              </Link>
              <Link
                href="/quote"
                className="btn-outline !text-osg-navy !border-osg-navy/15 hover:!border-osg-navy"
              >
                Submit Technical Brief
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
