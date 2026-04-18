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

      <section className="section-padding bg-osg-navy">
        <div className="container-osg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {resourceCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.08}>
                <Link href={cat.href} className="block group">
                  <div className="card-glass p-8 h-full flex items-start gap-6 group-hover:border-osg-gold/40 transition-all">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0" style={{ background: cat.color }}>
                      <cat.icon size={22} className="text-osg-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-md text-white mb-2 group-hover:text-osg-gold transition-colors">{cat.title}</h3>
                      <p className="text-small text-osg-slate leading-relaxed mb-4">{cat.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="badge-gold">{cat.count}</span>
                        <ArrowRight size={16} className="text-osg-gold/50 group-hover:text-osg-gold group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Quick access */}
          <Reveal>
            <div className="card-gold-outline p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-heading-lg text-white mb-2">Need a custom specification?</h3>
                <p className="text-body text-osg-slate">Our technical team can prepare project-specific material and system specifications on request.</p>
              </div>
              <Link href="/contact" className="btn-primary flex-shrink-0">Talk to Our Engineers <ArrowRight size={14} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
