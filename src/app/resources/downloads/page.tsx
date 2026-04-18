'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, FileText, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.72, delay }} className={className}>{children}</motion.div>);
}

const downloads = [
  { category: 'Company Documents', items: [
    { name: 'OSG Company Profile 2026', type: 'PDF', size: '2.4 MB', tag: 'Corporate' },
    { name: 'Certificate of Incorporation', type: 'PDF', size: '0.5 MB', tag: 'Legal' },
    { name: 'Tax Compliance Certificate', type: 'PDF', size: '0.3 MB', tag: 'Legal' },
  ]},
  { category: 'Technical Specifications', items: [
    { name: 'Aluminium Curtain Wall System Spec', type: 'PDF', size: '3.1 MB', tag: 'Technical' },
    { name: 'Window & Door Systems Datasheet', type: 'PDF', size: '2.8 MB', tag: 'Technical' },
    { name: 'Glass Systems Product Guide', type: 'PDF', size: '4.2 MB', tag: 'Technical' },
    { name: 'Gypsum Ceiling Systems Specification', type: 'PDF', size: '1.9 MB', tag: 'Technical' },
    { name: 'Painting & Tiling Standards Manual', type: 'PDF', size: '2.1 MB', tag: 'Technical' },
  ]},
  { category: 'Templates & Tools', items: [
    { name: 'Project Brief Template (Excel)', type: 'XLSX', size: '0.2 MB', tag: 'Template' },
    { name: 'BOQ Template — Finishing Works', type: 'XLSX', size: '0.4 MB', tag: 'Template' },
    { name: 'Site Visit Checklist', type: 'PDF', size: '0.3 MB', tag: 'Template' },
  ]},
];

const tagColors: Record<string, string> = {
  Corporate: 'rgba(201,168,76,0.15)',
  Legal: 'rgba(220,140,60,0.15)',
  Technical: 'rgba(100,160,220,0.15)',
  Template: 'rgba(100,200,140,0.15)',
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        label="Downloads"
        title="Technical Resources &"
        titleHighlight="Downloads."
        subtitle="Access OSG company documents, technical specifications, product datasheets, and project templates."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Downloads' }]}
      />

      <section className="section-padding bg-osg-navy">
        <div className="container-osg">
          {downloads.map((cat, ci) => (
            <Reveal key={cat.category} delay={ci * 0.06} className="mb-12">
              <h2 className="text-heading-md text-osg-gold mb-5 pb-4 border-b border-white/8">{cat.category}</h2>
              <div className="space-y-3">
                {cat.items.map((item, ii) => (
                  <div key={item.name} className="card-glass p-5 flex items-center gap-4 group hover:border-osg-gold/40">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,168,76,0.1)' }}>
                      <FileText size={16} className="text-osg-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-body text-white group-hover:text-osg-gold transition-colors block truncate">{item.name}</span>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs px-2 py-0.5 font-semibold text-osg-gold" style={{ background: tagColors[item.tag] }}>{item.tag}</span>
                        <span className="text-xs text-osg-slate">{item.type} · {item.size}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => alert(`Download: ${item.name}\n\nIn production, this will download from Firebase Storage.`)}
                      className="flex items-center gap-2 text-xs text-osg-gold border border-osg-gold/30 px-4 py-2 hover:bg-osg-gold hover:text-osg-navy transition-all flex-shrink-0"
                    >
                      <Download size={13} /> Download
                    </button>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="card-gold-outline p-8 text-center">
              <h3 className="text-heading-md text-white mb-3">Need something not listed here?</h3>
              <p className="text-body text-osg-slate mb-6">Contact our technical team for specific product specifications or custom material data.</p>
              <Link href="/contact" className="btn-primary">Contact Technical Team <ArrowRight size={14} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
