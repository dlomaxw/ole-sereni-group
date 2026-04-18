'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Download,
  Building2,
  Minimize2,
  Maximize2,
  Box,
  Layout,
  Sun,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const productCategories = [
  {
    id: 'window-systems',
    title: 'Precision Window Systems',
    label: 'Series 01',
    image: '/images/product-window.jpg',
    desc: 'High-performance architectural window systems designed for extreme wind loads and superior thermal acoustics.',
    href: '/products/window-systems',
    specs: ['6063-T5 Aluminium', 'Thermal Break Technology', 'Dual-seal Gaskets'],
    icon: Minimize2,
  },
  {
    id: 'door-systems',
    title: 'Advanced Door Systems',
    label: 'Series 02',
    image: '/images/product-door.jpg',
    desc: 'Bespoke entry solutions, from oversized pivot doors to heavy-duty sliding systems with concealed automation.',
    href: '/products/door-systems',
    specs: ['Security Integration', 'Concealed Hinges', 'Premium Hardware'],
    icon: Maximize2,
  },
  {
    id: 'curtain-wall',
    title: 'Structural Curtain Walls',
    label: 'Series 03',
    image: '/images/typology-curtain-wall.jpg',
    desc: 'Unitized and semi-unitized facade systems that define modern skylines with ethereal transparency.',
    href: '/products/curtain-wall',
    specs: ['Unitized Framework', 'Pressure Equalized', 'Self-draining'],
    icon: Building2,
  },
  {
    id: 'glass-systems',
    title: 'Architectural Glazing',
    label: 'Series 04',
    image: '/images/product-glass.jpg',
    desc: 'Certified specialist glazing including fire-rated, acoustic, and low-emissivity structural glass units.',
    href: '/products/glass-systems',
    specs: ['E6 Anodic Coating', 'Laminated Structural', 'Argon-filled'],
    icon: Box,
  },
  {
    id: 'aluminium-profiles',
    title: 'Millwork & Profiles',
    label: 'Series 05',
    image: '/images/product-profile.jpg',
    desc: 'Specialized mill-finish and powder-coated profiles for architectural louvers, cladding, and screens.',
    href: '/products/aluminium-profiles',
    specs: ['Custom Die Options', 'AAMA 2604 Coating', 'Recycled Casting'],
    icon: Layout,
  },
  {
    id: 'specialized-systems',
    title: 'Specialized Systems',
    label: 'Series 06',
    image: '/images/product-specialized.jpg',
    desc: 'Technical overhead systems, skylights, atria covers, and custom engineered building enclosures.',
    href: '/products/specialized-systems',
    specs: ['FEA Verified', 'Integrated Drainage', 'Solar Tracking'],
    icon: Sun,
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="System Inventory"
        title="Technical"
        titleHighlight="Component Catalog."
        subtitle="A directory of our precision-engineered architectural systems, calibrated for structural integrity and aesthetic clarity."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
      />

      {/* Catalog Grid */}
      <section className="section-padding bg-osg-cream">
        <div className="container-osg">
          {/* Intro row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
            <Reveal className="max-w-2xl">
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-5 block">
                Component Library // 01
              </span>
              <h2 className="text-4xl lg:text-6xl text-osg-navy font-black uppercase tracking-tighter italic leading-[0.9]">
                Six system <br />
                <span className="text-osg-navy/20">series.</span>
              </h2>
            </Reveal>
            <Reveal
              delay={0.1}
              className="lg:w-1/3 border-l-2 border-osg-gold pl-8"
            >
              <p className="text-sm text-osg-navy/60 leading-relaxed">
                Precision-engineered architectural systems across six calibrated series — from window profiles to structural facades.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.06}>
                <Link
                  href={cat.href}
                  className="group flex flex-col h-full bg-white border border-osg-navy/5 hover:border-osg-gold transition-all duration-500 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(10,22,40,0.18)] overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-osg-navy">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/80 via-osg-navy/20 to-transparent" />

                    {/* Label */}
                    <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-3.5 py-2">
                      <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.3em]">
                        {cat.label}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-5 right-5 w-11 h-11 flex items-center justify-center bg-osg-gold/95 text-osg-navy">
                      <cat.icon size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-7">
                    <h3 className="text-xl font-serif font-black text-osg-navy uppercase mb-3 leading-tight group-hover:text-osg-gold transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-osg-navy/55 leading-relaxed mb-6 flex-grow">
                      {cat.desc}
                    </p>

                    {/* Specs */}
                    <div className="space-y-2.5 mb-6 pt-5 border-t border-osg-navy/8">
                      <span className="text-[9px] font-black text-osg-navy/40 uppercase tracking-[0.3em] block mb-3">
                        Specifications
                      </span>
                      {cat.specs.map((spec) => (
                        <div
                          key={spec}
                          className="flex items-center gap-2.5 text-xs font-medium text-osg-navy/60"
                        >
                          <div className="w-1 h-1 rounded-full bg-osg-gold flex-shrink-0" />
                          {spec}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-black uppercase tracking-[0.25em] text-osg-navy group-hover:text-osg-gold transition-colors">
                        Explore Series
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

      {/* Technical Download Section */}
      <section className="section-padding bg-osg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
        <div className="container-osg relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-5 block">
              Resource Center
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif font-black uppercase tracking-tighter italic leading-[0.9]">
              Technical <br />
              <span className="text-white/20">Specification Sheets.</span>
            </h2>
            <p className="text-white/50 text-base mt-8 max-w-xl leading-relaxed">
              Access the OSG Component Library. Download complete CAD files, BIM
              models, and technical data sheets for our entire series of
              architectural systems.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/resources" className="btn-primary">
              Access Library <Download size={18} />
            </Link>
            <Link href="/resources/downloads" className="btn-outline">
              Browse Downloads <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="section-padding bg-white text-center border-t border-osg-navy/5">
        <div className="container-osg max-w-4xl mx-auto">
          <Reveal>
            <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-6 block">
              Project Engineering
            </span>
            <h2 className="text-4xl lg:text-6xl text-osg-navy font-black uppercase tracking-tighter italic leading-[0.9] mb-6">
              Calibrate your <br />
              <span className="text-osg-navy/20">project.</span>
            </h2>
            <p className="text-base text-osg-navy/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Need a custom profile or a specialized glass assembly? Our
              engineering department specializes in hardware-level customization
              for unique structural requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote" className="btn-primary">
                Initialize Project Review <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="btn-outline !text-osg-navy !border-osg-navy/15 hover:!border-osg-navy"
              >
                Request Sample Kit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
