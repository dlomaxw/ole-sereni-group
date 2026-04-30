'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Download, MessageCircle } from 'lucide-react';
import Image from 'next/image';

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
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      {/* Immersive Full-Bleed Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-[#0B1C2C]">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05]" />
        <div className="absolute inset-0 opacity-40">
           <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" fill className="object-cover grayscale" alt={project.title} />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C] via-[#0B1C2C]/60 to-transparent" />
        </div>

        <div className="container-clean relative z-10 pb-32 w-full">
          {/* Breadcrumb: Minimalist */}
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="flex items-center gap-6 text-[10px] font-black text-white/40 uppercase tracking-[0.5em] mb-12">
            <Link href="/" className="hover:text-osg-gold transition-colors">Home</Link>
            <div className="w-8 h-[1px] bg-white/10" />
            <Link href="/projects" className="hover:text-osg-gold transition-colors">Projects</Link>
            <div className="w-8 h-[1px] bg-white/10" />
            <span className="text-osg-gold">{project.title}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end">
            <div className="lg:col-span-8 space-y-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                className="flex items-center gap-6">
                <div className="w-12 h-[1px] bg-osg-gold" />
                <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">{project.sector} // {project.location}</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="text-[5rem] lg:text-[8rem] font-sans font-black text-white uppercase tracking-tighter leading-[0.85]">
                {project.title}
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="text-2xl text-white/40 font-sans max-w-2xl leading-relaxed">
                {project.scope}
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="lg:col-span-4 grid grid-cols-1 gap-6">
              {[
                { label: 'Status', value: project.status },
                { label: 'Duration', value: project.duration },
                { label: 'Client Type', value: project.client },
              ].map(stat => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-xl border border-white/5 p-8 rounded-3xl group hover:border-osg-gold/40 transition-all duration-500">
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] mb-3 block">{stat.label}</span>
                  <span className="text-xl font-sans font-black text-osg-gold uppercase tracking-tight">{stat.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Narrative: Luxury Staggered Layout */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        <div className="container-clean">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            {/* Left: Scope Matrix (5 of 12) */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8">
                <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Technical Delivery</span>
                <h2 className="text-[4rem] lg:text-[6rem] font-sans font-black text-osg-navy uppercase tracking-tighter leading-[0.85]">Scope <br/><span className="text-osg-navy/10">Matrix.</span></h2>
                <div className="w-24 h-[2px] bg-osg-gold" />
              </div>
              
              <ul className="space-y-8">
                {project.scope_items.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F9FB] flex items-center justify-center text-osg-navy group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 flex-shrink-0 shadow-premium">
                       <CheckCircle size={20} />
                    </div>
                    <span className="text-xl text-osg-navy/40 font-sans leading-relaxed group-hover:text-osg-navy transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: Challenge & Solution (7 of 12) */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F8F9FB] rounded-[4rem] p-16 lg:p-24 border border-osg-navy/5 shadow-premium space-y-10"
              >
                <div className="flex items-center gap-6">
                   <div className="w-8 h-8 rounded-full border border-osg-navy/10 flex items-center justify-center text-[10px] font-black text-osg-navy/40 uppercase tracking-widest">01</div>
                   <h4 className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.5em]">The Structural Challenge</h4>
                </div>
                <p className="text-2xl text-osg-navy/60 font-sans leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[4rem] p-16 lg:p-24 border border-osg-gold/20 shadow-2xl space-y-10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02]" />
                <div className="flex items-center gap-6 relative z-10">
                   <div className="w-8 h-8 rounded-full bg-osg-gold text-osg-navy flex items-center justify-center text-[10px] font-black uppercase tracking-widest shadow-xl">02</div>
                   <h4 className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em]">The OSG Solution</h4>
                </div>
                <p className="text-2xl text-osg-navy font-sans leading-relaxed relative z-10">
                  {project.solution}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#0B1C2C] rounded-[4rem] p-16 lg:p-24 shadow-2xl space-y-10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05]" />
                <div className="flex items-center gap-6 relative z-10">
                   <div className="w-8 h-8 rounded-full border border-white/10 text-white flex items-center justify-center text-[10px] font-black uppercase tracking-widest">03</div>
                   <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">The Project Outcome</h4>
                </div>
                <p className="text-3xl text-osg-gold font-sans font-black leading-tight relative z-10">
                  {project.outcome}
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Uplink: Final Navigation */}
      <section className="py-32 bg-[#F8F9FB] border-t border-osg-navy/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01]" />
        <div className="container-clean relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <Link href="/projects" className="group flex items-center gap-6 text-[10px] font-black text-osg-navy/40 uppercase tracking-[0.5em] hover:text-osg-navy transition-all">
              <div className="w-12 h-12 rounded-full border border-osg-navy/10 flex items-center justify-center group-hover:bg-osg-navy group-hover:text-white transition-all duration-500">
                <ArrowLeft size={16} />
              </div>
              Return to Global Portfolio
            </Link>
            
            <div className="flex flex-wrap justify-center gap-10">
              <Link href="/quote" className="btn-cta !px-12 py-5 !text-[10px]">INITIALIZE SIMILAR PROJECT</Link>
              <a href="https://wa.me/256767358604" target="_blank" rel="noreferrer" className="flex items-center gap-6 px-10 py-5 rounded-full border border-osg-navy/10 text-[10px] font-black uppercase tracking-widest text-osg-navy hover:bg-osg-navy hover:text-white transition-all">
                <MessageCircle size={16} /> DISCUSS WITH AN ARCHITECT
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
