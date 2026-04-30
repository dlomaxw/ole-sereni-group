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
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero 
        label="System Inventory"
        title="Technical"
        titleHighlight="Component Catalog."
        subtitle="A directory of our precision-engineered architectural systems, calibrated for structural integrity and aesthetic clarity."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
      />

      {/* Grid Section: Luxury Series Cards */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        <div className="container-clean relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {productCategories.map((cat, i) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={cat.href} className="group block h-full">
                  <div className="bg-[#F8F9FB] border border-osg-navy/5 p-16 flex flex-col h-full transition-all duration-700 hover:bg-[#0B1C2C] hover:border-osg-gold hover:shadow-premium rounded-[4rem] relative overflow-hidden group/card">
                    <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
                    
                    <div className="mb-16 flex justify-between items-center relative z-10">
                      <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-osg-navy group-hover/card:bg-osg-gold group-hover/card:text-osg-navy transition-all duration-500 shadow-xl group-hover/card:rotate-6">
                        <cat.icon size={32} />
                      </div>
                      <span className="text-[11px] font-black text-osg-gold uppercase tracking-[0.5em]">{cat.label}</span>
                    </div>
                    
                    <h3 className="text-3xl font-sans font-black text-osg-navy uppercase mb-8 tracking-tighter group-hover/card:text-white transition-colors leading-none">{cat.title}</h3>
                    
                    <p className="text-osg-navy/50 text-lg font-sans leading-relaxed mb-12 flex-grow group-hover/card:text-white/40 transition-colors">
                      {cat.desc}
                    </p>

                    <div className="space-y-6 mb-16 pt-12 border-t border-osg-navy/10 group-hover/card:border-white/10 transition-colors">
                      {cat.specs.map(spec => (
                        <div key={spec} className="flex items-center gap-6 text-[10px] font-black text-osg-navy/30 uppercase tracking-[0.4em] group-hover/card:text-white/30 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-osg-gold/40 group-hover/card:bg-osg-gold" />
                          {spec}
                        </div>
                      ))}
                    </div>

                    <div className="text-[11px] font-black text-osg-navy uppercase tracking-[0.6em] flex items-center gap-6 group-hover/card:text-osg-gold transition-colors">
                      EXPLORE SERIES <ArrowRight size={20} className="group-hover/card:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Download Section: Luxury Data Library */}
      <section className="py-64 bg-[#0B1C2C] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05]" />
        <div className="container-clean relative z-10 flex flex-col lg:flex-row justify-between items-center gap-32">
          <div className="max-w-4xl space-y-16">
            <div className="flex items-center gap-6">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-[11px] font-black text-osg-gold uppercase tracking-[0.6em]">Resource Center</span>
            </div>
            <h2 className="text-[4.5rem] lg:text-[8rem] font-sans font-black uppercase tracking-tighter leading-[0.8]">Technical <br /> <span className="text-white/10">Specification</span> Library.</h2>
            <p className="text-white/40 text-2xl font-sans leading-relaxed max-w-2xl">
              Access the OSG Component Library. Download complete CAD files, BIM models, and technical data sheets for our entire series of architectural systems.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <Link href="/resources" className="btn-cta !px-20 py-8 !text-[12px] shadow-premium">
              ACCESS ARCHIVE <Download size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote CTA: Structural Outro */}
      <section className="py-64 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
        <div className="container-clean max-w-6xl mx-auto space-y-24">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">
            <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-[1px] bg-osg-gold/40"></div>
                <span className="text-osg-gold font-black uppercase text-[11px] tracking-[0.6em]">Operational Mandate</span>
            </div>
            <h2 className="text-[4rem] lg:text-[9rem] font-sans font-black text-osg-navy uppercase tracking-tighter leading-[0.85]">Calibrate Your <br/><span className="text-osg-navy/10">Project.</span></h2>
            <p className="text-osg-navy/40 text-2xl font-sans leading-relaxed max-w-4xl mx-auto">
              Need a custom profile or a specialized glass assembly? Our engineering department specializes in hardware-level customization for unique structural requirements.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-12 pt-12">
            <Link href="/quote" className="btn-cta !px-24 py-8 !text-[12px] shadow-premium">INITIALIZE PROJECT REVIEW</Link>
            <Link href="/contact" className="flex items-center gap-8 px-20 py-8 rounded-full border border-osg-navy/10 text-[12px] font-black uppercase tracking-[0.4em] text-osg-navy hover:bg-osg-navy hover:text-white transition-all shadow-sm">REQUEST SAMPLE KIT</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

