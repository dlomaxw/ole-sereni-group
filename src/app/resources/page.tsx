'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, BookOpen, Download, Video, FileText } from 'lucide-react';
import PageHero from '@/components/PageHero';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.72, delay }} className={className}>{children}</motion.div>);
}

const resourceCategories = [
  {
    icon: FileText, title: 'Technical Specifications', desc: 'Product datasheets, system specs, and material guides for all OSG service lines.',
    count: '12 documents', href: '/resources/downloads', color: 'rgba(201,168,76,0.12)',
  },
  {
    icon: Download, title: 'Project Templates', desc: 'BOQ templates, project brief formats, and site checklist downloads for procurement teams.',
    count: '6 templates', href: '/resources/downloads', color: 'rgba(100,160,220,0.12)',
  },
  {
    icon: BookOpen, title: 'Blog & Insights', desc: 'Technical guides written by OSG engineers covering specification, installation, and compliance.',
    count: '24 articles', href: '/blog', color: 'rgba(100,200,140,0.12)',
  },
  {
    icon: Video, title: 'Case Studies', desc: 'In-depth project walkthroughs including scope, challenge, solution, and outcome.',
    count: '8 cases', href: '/projects', color: 'rgba(220,140,60,0.12)',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Technical Resource"
        titleHighlight="Centre."
        subtitle="Specifications, templates, guides, and case studies to support architects, developers, and procurement teams working with OSG."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
      />

      <section className="py-32 bg-[#0B1C2C]">
        <div className="container-clean">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {resourceCategories.map((cat, i) => (
              <motion.div 
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={cat.href} className="block group h-full">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 lg:p-16 rounded-[3rem] h-full transition-all duration-700 hover:bg-white/10 hover:border-osg-gold relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
                    
                    <div className="flex items-start gap-10 relative z-10">
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-osg-gold group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 flex-shrink-0">
                            <cat.icon size={32} className="transition-transform group-hover:scale-110" />
                        </div>
                        <div className="flex-1 space-y-6">
                           <div className="flex justify-between items-center">
                              <h3 className="text-3xl font-sans font-black text-white uppercase tracking-tight group-hover:text-osg-gold transition-colors">{cat.title}</h3>
                              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.4em]">{cat.count}</span>
                           </div>
                           <p className="text-white/40 text-lg font-sans leading-relaxed group-hover:text-white/60 transition-colors">
                             {cat.desc}
                           </p>
                           <div className="pt-6 border-t border-white/5 flex items-center justify-between group-hover:text-osg-gold transition-colors">
                              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Access Archive</span>
                              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                           </div>
                        </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick access */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-osg-navy/5 p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 rounded-[4rem] shadow-premium"
          >
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-4xl lg:text-5xl font-sans font-black text-osg-navy uppercase tracking-tight">Need a custom specification?</h3>
              <p className="text-osg-navy/40 text-lg lg:text-xl font-sans max-w-2xl">Our technical team can prepare project-specific material and system specifications on request.</p>
            </div>
            <Link href="/contact" className="btn-cta !px-16 py-6 !text-[10px] flex-shrink-0">
              TALK TO OUR ENGINEERS <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

