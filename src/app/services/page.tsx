'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Grid,
  Square,
  Palette,
  Hammer,
  Zap,
  Home,
} from 'lucide-react';
import PageHero from '@/components/PageHero';

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    id: 'aluminium-glass',
    number: '01',
    icon: Grid,
    image: '/images/service-aluminium.jpg',
    title: 'Aluminium & Glass Systems',
    tag: 'Flagship Service',
    desc: 'Curtain walls, window systems, door frames, facades, and specialist glazing solutions engineered for precision, weather resistance, and architectural elegance.',
    features: [
      'Curtain wall systems',
      'Window & door systems',
      'Glass facades & balustrades',
      'Skylights & atria',
      'Fire-rated glazing',
      'Acoustic glass systems',
    ],
    href: '/services/aluminium-glass',
    sectors: ['Commercial', 'Hospitality', 'Residential', 'Institutional'],
  },
  {
    id: 'gypsum-ceilings',
    number: '02',
    icon: Square,
    image: '/images/service-gypsum.jpg',
    title: 'Gypsum Works & Ceilings',
    tag: 'Interior',
    desc: 'Suspended ceilings, partition systems, decorative plasterwork, acoustic panels, and bespoke interior structures built to exact specification.',
    features: [
      'Suspended T-bar ceilings',
      'Gypsum board partitions',
      'Decorative plasterwork',
      'Acoustic ceiling panels',
      'Bulkheads & coffers',
      'Fire-rated assemblies',
    ],
    href: '/services/gypsum-works',
    sectors: ['Commercial', 'Hospitality', 'Institutional', 'Residential'],
  },
  {
    id: 'painting-tiling',
    number: '03',
    icon: Palette,
    image: '/images/service-tiling.jpg',
    title: 'Painting & Tiling',
    tag: 'Finishing',
    desc: 'Surface preparation, primer systems, specialist coatings, large-format tiling, and precision grouting for premium interior and exterior finishes.',
    features: [
      'Interior wall & ceiling painting',
      'Exterior facade coatings',
      'Large-format floor tiling',
      'Wall cladding & mosaic',
      'Epoxy flooring systems',
      'Waterproof coatings',
    ],
    href: '/services/painting-tiling',
    sectors: ['All Sectors'],
  },
  {
    id: 'carpentry-joinery',
    number: '04',
    icon: Hammer,
    image: '/images/service-carpentry.jpg',
    title: 'Carpentry & Joinery',
    tag: 'Joinery',
    desc: 'Custom millwork, built-in furniture, architectural woodwork, door and frame fabrication, and bespoke joinery crafted to elevated standards.',
    features: [
      'Custom millwork & cabinetry',
      'Built-in wardrobes & units',
      'Architectural panelling',
      'Door & frame fabrication',
      'Feature walls & screening',
      'Staircase finishing',
    ],
    href: '/services/carpentry',
    sectors: ['Residential', 'Hospitality', 'Retail', 'Corporate'],
  },
  {
    id: 'electrical',
    number: '05',
    icon: Zap,
    image: '/images/service-electrical.jpg',
    title: 'Electrical Installations',
    tag: 'M&E',
    desc: 'Wiring, switchgear, lighting systems, power distribution, and compliance-certified electrical works for commercial and residential projects.',
    features: [
      'Full wiring installations',
      'DB boards & switchgear',
      'LED lighting systems',
      'Emergency & safety systems',
      'Power distribution',
      'Low-voltage systems',
    ],
    href: '/services/electrical',
    sectors: ['Commercial', 'Residential', 'Industrial', 'Institutional'],
  },
  {
    id: 'finishing',
    number: '06',
    icon: Home,
    image: '/images/service-finishing.jpg',
    title: 'Interior & Exterior Finishing',
    tag: 'Full-scope',
    desc: 'Full-scope finishing coordination — from screeding and waterproofing to final cosmetic layers — ensuring a premium handover every time.',
    features: [
      'Floor screeding & levelling',
      'Waterproofing systems',
      'External rendering',
      'Skirting & architrave',
      'Final cosmetic finishing',
      'Defects rectification',
    ],
    href: '/services/finishing',
    sectors: ['All Sectors'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Expertise"
        title="Six Specialist"
        titleHighlight="Service Lines."
        subtitle="One accountable contractor. OSG coordinates all finishing works under a single umbrella so your project stays on programme and delivers at the highest standard."
        ctaPrimary={{ label: 'Request a Quote', href: '/quote' }}
        ctaSecondary={{ label: 'View Projects', href: '/projects' }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Services Grid */}
      <section className="section-padding bg-[#fcfdfc]">
        <div className="container-osg">
          {/* Section Intro */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
            <Reveal className="max-w-2xl">
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-5 block">
                Service Catalog // 01
              </span>
              <h2 className="text-4xl lg:text-6xl text-osg-navy font-black uppercase tracking-tighter italic leading-[0.9]">
                Everything <br />
                <span className="text-osg-navy/20">under one roof.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:w-1/3 border-l-2 border-osg-gold pl-8">
              <p className="text-sm text-osg-navy/60 leading-relaxed">
                From facade engineering to final finishing coat — six coordinated service lines delivered by one accountable contractor.
              </p>
            </Reveal>
          </div>

          {/* Grid of Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <Link
                  href={s.href}
                  className="group flex flex-col h-full bg-white border border-osg-navy/5 hover:border-osg-gold transition-all duration-500 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(10,22,40,0.18)] overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-osg-navy">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/80 via-osg-navy/20 to-transparent" />

                    {/* Number badge */}
                    <div className="absolute top-5 left-5 w-12 h-12 flex items-center justify-center bg-white/95 backdrop-blur-sm">
                      <span className="font-serif font-black text-osg-navy text-lg italic">
                        {s.number}
                      </span>
                    </div>

                    {/* Tag */}
                    <div className="absolute top-5 right-5 bg-osg-gold text-osg-navy px-3 py-1.5 text-[9px] font-black uppercase tracking-widest">
                      {s.tag}
                    </div>

                    {/* Icon at bottom */}
                    <div className="absolute bottom-5 left-5 w-11 h-11 flex items-center justify-center bg-osg-gold/95 text-osg-navy">
                      <s.icon size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-7">
                    <h3 className="text-xl font-serif font-black text-osg-navy uppercase mb-3 leading-tight group-hover:text-osg-gold transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-osg-navy/55 leading-relaxed mb-6 flex-grow">
                      {s.desc}
                    </p>

                    {/* Sectors */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {s.sectors.map((sec) => (
                        <span
                          key={sec}
                          className="text-[9px] font-bold uppercase tracking-widest text-osg-navy/50 px-2.5 py-1 bg-osg-navy/[0.04] border border-osg-navy/5"
                        >
                          {sec}
                        </span>
                      ))}
                    </div>

                    {/* Scope checklist (shown on hover) */}
                    <div className="pt-5 border-t border-osg-navy/8">
                      <span className="text-[9px] font-black text-osg-navy/40 uppercase tracking-[0.3em] mb-3 block">
                        Scope Includes
                      </span>
                      <ul className="grid grid-cols-1 gap-2 mb-6">
                        {s.features.slice(0, 3).map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2.5 text-xs text-osg-navy/60"
                          >
                            <CheckCircle
                              size={13}
                              className="text-osg-gold flex-shrink-0"
                            />
                            <span className="leading-snug">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-black uppercase tracking-[0.25em] text-osg-navy group-hover:text-osg-gold transition-colors">
                        Explore Service
                      </span>
                      <span className="w-10 h-10 bg-osg-navy text-white flex items-center justify-center group-hover:bg-osg-gold group-hover:text-osg-navy transition-colors">
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-osg-navy border-t border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.04] pointer-events-none" />
        <div className="container-osg text-center relative z-10">
          <Reveal>
            <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-6 block">
              Consultation
            </span>
            <h2 className="text-4xl lg:text-6xl text-white font-black uppercase tracking-tighter italic leading-[0.9] mb-6">
              Not sure which service <br />
              <span className="text-white/30">you need?</span>
            </h2>
            <p className="text-base text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
              Submit a project brief or speak with our team — we&apos;ll recommend the right scope.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/brief" className="btn-primary">
                Submit a Brief <ArrowUpRight size={15} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Talk to Us <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
