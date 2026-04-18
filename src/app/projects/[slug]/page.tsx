'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Download, MessageCircle } from 'lucide-react';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.72, delay }} className={className}>{children}</motion.div>);
}

// Static project data - in production this would be fetched from Firestore
const projectData: Record<string, {
  title: string; sector: string; location: string; status: string;
  scope: string; client: string; duration: string; scope_items: string[];
  challenge: string; solution: string; outcome: string;
}> = {
  'kampala-heights': {
    title: 'Kampala Heights', sector: 'Commercial', location: 'Kampala, Uganda',
    status: 'Completed', scope: 'Aluminium Curtain Wall, Windows, Interior Gypsum',
    client: 'Commercial Developer', duration: '8 months',
    scope_items: ['Full curtain wall system — 4,200m²', 'Aluminium window systems across 22 floors', 'Interior suspended ceilings — all common areas', 'Structural glazing entrance atrium'],
    challenge: 'Complex curtain wall geometry on a stepped facade with varying floor-to-floor heights and a tight programme.',
    solution: 'OSG pre-fabricated unitised curtain wall panels off-site to reduce installation time and ensure dimensional consistency across all elevations.',
    outcome: 'Delivered 3 weeks ahead of programme. Client commended precision of finished curtain wall joints and zero water infiltration on first-fill test.',
  },
  default: {
    title: 'OSG Project', sector: 'Commercial', location: 'Kampala, Uganda',
    status: 'Completed', scope: 'Premium Finishing Works',
    client: 'Client Confidential', duration: '6 months',
    scope_items: ['Specialist finishing works', 'Premium material installation', 'Quality-assured delivery', 'Client-supervised handover'],
    challenge: 'Complex multi-discipline coordination across a live commercial premises with restricted access windows.',
    solution: 'OSG deployed a dedicated site manager and coordinated all trades under a single programme, minimising interface risk and site disruption.',
    outcome: 'Successful handover with zero defects on snag list. Client satisfaction confirmed in post-project review.',
  },
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug] ?? projectData['default'];

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[65vh] flex items-end overflow-hidden"
        style={{ background: 'linear-gradient(150deg, var(--osg-navy) 0%, var(--osg-charcoal) 100%)' }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)' }} />

        <div className="container-osg relative z-10 pb-20 pt-40 w-full">
          {/* Breadcrumb */}
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-xs text-osg-slate mb-6">
            <Link href="/" className="hover:text-osg-gold transition-colors">Home</Link>
            <span className="text-osg-gold/50">/</span>
            <Link href="/projects" className="hover:text-osg-gold transition-colors">Projects</Link>
            <span className="text-osg-gold/50">/</span>
            <span className="text-osg-gold">{project.title}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="flex items-center gap-4 mb-4">
                <div className="divider-gold" />
                <span className="text-label">{project.sector} · {project.location}</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-display text-white mb-4">{project.title}</motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="text-body-lg text-osg-slate">{project.scope}</motion.p>
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}
              className="grid grid-cols-2 gap-4">
              {[
                { label: 'Status', value: project.status },
                { label: 'Sector', value: project.sector },
                { label: 'Duration', value: project.duration },
                { label: 'Location', value: project.location },
              ].map(stat => (
                <div key={stat.label} className="card-gold-outline p-5">
                  <span className="text-label block mb-1">{stat.label}</span>
                  <span className="text-small text-white">{stat.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="section-padding bg-osg-navy">
        <div className="container-osg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <Reveal>
              <span className="text-label block mb-4">Scope of Works</span>
              <h2 className="text-heading-xl text-white mb-6">What We Delivered</h2>
              <div className="divider-gold mb-8" />
              <ul className="space-y-4">
                {project.scope_items.map(item => (
                  <li key={item} className="flex items-start gap-3 text-body text-osg-slate">
                    <CheckCircle size={16} className="text-osg-gold mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="card-glass p-8">
                  <h4 className="text-heading-md text-white mb-3">The Challenge</h4>
                  <p className="text-body text-osg-slate leading-relaxed">{project.challenge}</p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="card-glass p-8">
                  <h4 className="text-heading-md text-white mb-3">Our Solution</h4>
                  <p className="text-body text-osg-slate leading-relaxed">{project.solution}</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="p-8 border border-osg-gold/30" style={{ background: 'rgba(201,168,76,0.06)' }}>
                  <h4 className="text-heading-md text-osg-gold mb-3">The Outcome</h4>
                  <p className="text-body text-osg-slate leading-relaxed">{project.outcome}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom nav */}
      <section className="section-padding-sm bg-osg-navy-mid border-y border-white/8">
        <div className="container-osg flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/projects" className="btn-ghost flex items-center gap-2"><ArrowLeft size={14} /> Back to Portfolio</Link>
          <div className="flex gap-4">
            <Link href="/quote" className="btn-primary text-sm">Get a Similar Quote <ArrowRight size={14} /></Link>
            <a href="https://wa.me/256767358604" target="_blank" rel="noreferrer" className="btn-outline text-sm flex items-center gap-2"><MessageCircle size={14} /> Discuss This Project</a>
          </div>
        </div>
      </section>
    </>
  );
}
