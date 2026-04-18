'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Layers, 
  Layout, 
  Compass, 
  FileText,
  Download,
  Building2,
  Minimize2,
  Maximize2,
  Box,
  Wind,
  Sun
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';

const productCategories = [
  {
    id: 'window-systems',
    title: 'Precision Window Systems',
    label: 'Series 01',
    desc: 'High-performance architectural window systems designed for extreme wind loads and superior thermal acoustics.',
    href: '/products/window-systems',
    specs: ['6063-T5 Aluminium', 'Thermal Break Technology', 'Dual-seal Gaskets'],
    icon: Minimize2
  },
  {
    id: 'door-systems',
    title: 'Advanced Door Systems',
    label: 'Series 02',
    desc: 'Bespoke entry solutions, from oversized pivot doors to heavy-duty sliding systems with concealed automation.',
    href: '/products/door-systems',
    specs: ['Security Integration', 'Concealed Hinges', 'Premium Hardware'],
    icon: Maximize2
  },
  {
    id: 'curtain-wall',
    title: 'Structural Curtain Walls',
    label: 'Series 03',
    desc: 'Unitized and semi-unitized facade systems that define modern skylines with ethereal transparency.',
    href: '/products/curtain-wall',
    specs: ['Unitized Framework', 'Pressure Equalized', 'Self-draining'],
    icon: Building2
  },
  {
    id: 'glass-systems',
    title: 'Architectural Glazing',
    label: 'Series 04',
    desc: 'Certified specialist glazing including fire-rated, acoustic, and low-emissivity structural glass units.',
    href: '/products/glass-systems',
    specs: ['E6 Anodic Coating', 'Laminated Structural', 'Argon-filled'],
    icon: Box
  },
  {
    id: 'aluminium-profiles',
    title: 'Millwork & Profiles',
    label: 'Series 05',
    desc: 'Specialized mill-finish and powder-coated profiles for architectural louvers, cladding, and screens.',
    href: '/products/aluminium-profiles',
    specs: ['Custom Die Options', 'AAMA 2604 Coating', 'Recycled Casting'],
    icon: Layout
  },
  {
    id: 'specialized-systems',
    title: 'Specialized Systems',
    label: 'Series 06',
    desc: 'Technical overhead systems, skylights, atria covers, and custom engineered building enclosures.',
    href: '/products/specialized-systems',
    specs: ['FEA Verified', 'Integrated Drainage', 'Solar Tracking'],
    icon: Sun
  }
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

      {/* Grid Section */}
      <section className="section-padding bg-osg-cream">
        <div className="container-osg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {productCategories.map((cat, i) => (
              <div 
                key={cat.id} 
                className="bg-white border border-osg-navy/5 p-12 flex flex-col h-full group hover:border-osg-gold transition-all duration-700 hover:shadow-2xl"
              >
                <div className="mb-10 flex justify-between items-start">
                  <cat.icon size={32} className="text-osg-navy/20 group-hover:text-osg-navy transition-colors" />
                  <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.3em]">{cat.label}</span>
                </div>
                
                <h3 className="text-xl font-serif font-black text-osg-navy uppercase mb-6 leading-tight group-hover:text-osg-gold transition-colors">{cat.title}</h3>
                
                <p className="text-osg-navy/50 text-small leading-relaxed mb-8 flex-grow">
                  {cat.desc}
                </p>

                <div className="space-y-3 mb-10 pt-6 border-t border-osg-navy/5">
                  {cat.specs.map(spec => (
                    <div key={spec} className="flex items-center gap-3 text-[10px] font-bold text-osg-navy/40 uppercase tracking-widest">
                      <div className="w-1 h-1 rounded-full bg-osg-gold" />
                      {spec}
                    </div>
                  ))}
                </div>

                <Link href={cat.href} className="text-[10px] font-black text-osg-navy uppercase tracking-[0.3em] flex items-center gap-3 group/link border-b border-osg-navy/5 pb-2 w-fit">
                  Explore Series <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Download Section */}
      <section className="section-padding bg-osg-navy text-white overflow-hidden relative">
        <div className="container-osg relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16">
          <div className="max-w-2xl">
            <span className="text-label mb-6 block">Resource Center</span>
            <h2 className="text-heading-xl font-serif font-black uppercase tracking-tight italic">Technical Specification Sheets</h2>
            <p className="text-white/40 text-lg mt-8">
              Access the OSG Component Library. Download complete CAD files, BIM models, and technical data sheets for our entire series of architectural systems.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/resources" className="btn-primary">
              Access Library <Download size={18} />
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 translate-x-1/2" />
      </section>

      {/* Quote CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-osg max-w-4xl mx-auto">
          <h2 className="text-heading-xl text-osg-navy font-black uppercase tracking-tighter mb-8 italic">Calibrate Your Project</h2>
          <p className="text-osg-navy/80 text-lg mb-12">
            Need a custom profile or a specialized glass assembly? Our engineering department specializes in hardware-level customization for unique structural requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/quote" className="btn-primary">Initialize Project Review</Link>
            <Link href="/contact" className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy">Request Sample Kit</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
