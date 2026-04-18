'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, Briefcase, MapPin, 
  Clock, Users, Terminal, Cpu, 
  Activity, ShieldCheck, CornerDownRight 
} from 'lucide-react';
import PageHero from '@/components/PageHero';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 30 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} 
      className={className}
    >
      {children}
    </motion.div>
  );
}

const openRoles = [
  { id: 'JOB / 01', title: 'Senior Site Engineer', dept: 'Engineering', location: 'Kampala', type: 'Full-time', urgency: true },
  { id: 'JOB / 02', title: 'Aluminium & Glass Fabricator', dept: 'Technical', location: 'Kampala', type: 'Full-time', urgency: false },
  { id: 'JOB / 03', title: 'Project Coordinator', dept: 'Operations', location: 'Kampala', type: 'Full-time', urgency: false },
  { id: 'JOB / 04', title: 'Business Development Manager', dept: 'Sales', location: 'Kampala', type: 'Full-time', urgency: false },
  { id: 'JOB / 05', title: 'Gypsum Ceiling Installer', dept: 'Technical', location: 'Kampala', type: 'Contract', urgency: false },
  { id: 'JOB / 06', title: 'Quantity Surveyor (Assistant)', dept: 'Commercial', location: 'Kampala', type: 'Full-time', urgency: false },
];

const values = [
  { icon: Terminal, title: 'Build Landmarks', desc: 'Work on major construction projects that transform Kampala\'s built environment.' },
  { icon: Activity, title: 'Scalable Growth', desc: 'OSG is a growing business. As we scale, careers grow alongside the company.' },
  { icon: Cpu, title: 'Technical Mentorship', desc: 'Access to training, certifications, and mentorship from senior engineers.' },
  { icon: ShieldCheck, title: 'Collaborative Culture', desc: 'A team that respects every trade and works with shared accountability.' },
];

export default function CareersPage() {
  return (
    <main className="bg-osg-creme font-sans overflow-hidden">
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
      
      <PageHero
        label="Global Talent Acquisition"
        title="Careers at"
        titleHighlight="OSG Group."
        subtitle="We're looking for engineers, tradesmen, coordinators, and business professionals who share our commitment to architectural precision."
        ctaPrimary={{ label: 'View Open Roles', href: '#roles' }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      />

      {/* Why OSG: The Architectural Advantage */}
      <section className="section-padding relative">
        <div className="container-osg">
          <Reveal className="mb-24">
            <span className="badge-system mb-6">Internal Culture</span>
            <h2 className="text-display text-osg-navy italic !text-heading-xl leading-none">
              The OSG <br /> <span className="text-osg-navy/20 not-italic">DNA.</span>
            </h2>
            <p className="text-body-muted mt-8 max-w-sm uppercase tracking-widest leading-loose">A high-precision environment defined by shared ambition and technical mastery.</p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="card-terminal p-10 h-full border-osg-navy/5 group cursor-default">
                  <div className="corner-accent corner-tl transition-all duration-700" />
                  <v.icon size={24} className="text-osg-gold/40 mb-8 group-hover:text-osg-gold transition-colors" />
                  <h3 className="text-xs font-black text-osg-navy uppercase tracking-[0.2em] mb-4 group-hover:text-osg-gold transition-colors">{v.title}</h3>
                  <p className="text-body-muted text-[11px] leading-loose">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles: The Opportunity Grid */}
      <section id="roles" className="section-padding bg-osg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-5 pointer-events-none" />
        <div className="container-osg relative z-10">
          <Reveal className="mb-24">
            <span className="badge-system mb-6">Active Vacancies</span>
            <h2 className="text-display text-white italic !text-heading-xl leading-none">
              Join the <br /> <span className="text-white/20 not-italic">Foundation.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-white/5 border border-white/5">
            {openRoles.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.05}>
                <div className="bg-osg-navy p-10 flex flex-col md:flex-row md:items-center justify-between gap-12 group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-osg-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                  
                  <div className="flex items-start gap-10">
                    <span className="text-[10px] font-mono text-osg-gold font-bold tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity mt-1">{role.id}</span>
                    <div className="space-y-4">
                      <div className="flex items-center gap-6 flex-wrap">
                        <h3 className="text-2xl font-black text-white italic tracking-tighter group-hover:text-osg-gold transition-colors">{role.title}</h3>
                        {role.urgency && <span className="badge-system !text-[8px] !bg-red-500/10 !border-red-500/20 !text-red-500">PRIORITY</span>}
                      </div>
                      <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                        <span className="flex items-center gap-3"><Users size={12} className="text-osg-gold/50" /> {role.dept}</span>
                        <span className="flex items-center gap-3"><MapPin size={12} className="text-osg-gold/50" /> {role.location}</span>
                        <span className="flex items-center gap-3"><Clock size={12} className="text-osg-gold/50" /> {role.type}</span>
                      </div>
                    </div>
                  </div>

                  <a href={`mailto:hr@oleserenigroup.com?subject=Application: ${role.title}`}
                    className="btn-primary group !py-5 !px-10">
                    INITIALIZE APPLICATION <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="mt-24">
            <div className="card-terminal p-16 text-center border-white/5 bg-white/[0.01]">
              <div className="max-w-xl mx-auto">
                <h3 className="text-2xl font-black text-white italic tracking-tighter mb-6 uppercase">Speculative Briefings</h3>
                <p className="text-body-muted text-white/40 mb-12 uppercase tracking-[0.2em] text-[10px] leading-loose">Don't see your architectural role listed? We are always analyzing high-potential talent for future structural expansions.</p>
                <a href="mailto:hr@oleserenigroup.com?subject=Speculative Application — OSG" className="btn-outline !text-white !border-white/10 hover:!border-white group">
                  SEND DATA PACKAGE <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
