'use client';

import { ArrowRight, Zap, Shield, Target } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import TechShowcase from '@/components/TechShowcase';

const systems = [
  { 
    name: 'Full Wiring Installations', 
    desc: 'Comprehensive electrical wiring for residential, commercial, and light industrial projects to Uganda and international standards.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop',
    tag: 'Infrastructure'
  },
  { 
    name: 'DB Boards & Switchgear', 
    desc: 'Distribution board installation, circuit breaker sizing, and switchgear to IEC standards.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    tag: 'Control'
  },
  { 
    name: 'Industrial Containment', 
    desc: 'Heavy-duty cable tray and trunking systems for commercial and industrial applications, engineered for future capacity expansion.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop',
    tag: 'Industrial'
  },
  { 
    name: 'Smart Lighting Control', 
    desc: 'Integration of automated dimming, scene setting, and motion-sensor controls using KNX or DALI protocols.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    tag: 'Automated'
  },
  { 
    name: 'Data & ICT Infrastructure', 
    desc: 'Structured cabling solutions for corporate headquarters, featuring CAT6A/Fiber-Optic backbones and server room fit-outs.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop',
    tag: 'Digital'
  },
];

export default function ElectricalPage() {
  return (
    <main className="bg-osg-navy">
      <PageHero label="Building Intelligence" title="Electrical" titleHighlight="Works." 
        subtitle="Tier-1 electrical installations, power distribution, smart automation, and ICT infrastructure for mission-critical facilities."
        ctaPrimary={{ label: 'Request a Quote', href: '/quote' }} ctaSecondary={{ label: 'View Projects', href: '/projects' }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Electrical Works' }]} />
      
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Decoration */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container-osg relative z-10">
          <Reveal className="mb-20">
            <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Scope of Works // 05</span>
            <h2 className="text-display-sm text-osg-navy font-black uppercase tracking-tighter">Technical <br/><span className="text-osg-navy/20">Systems.</span></h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systems.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1}>
                <div className="group relative h-[480px] bg-[#f8f9f8] overflow-hidden border border-osg-navy/5 shadow-2xl shadow-osg-navy/5">
                  {/* Image with Blueprint Overlay */}
                  <div className="absolute inset-0">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-osg-navy group-hover:via-osg-navy/40 transition-colors duration-700" />
                    {/* Blueprint Grid */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  </div>

                  <div className="relative z-20 h-full p-8 sm:p-10 lg:p-12 flex flex-col justify-end">
                    <span className="mb-4 w-fit rounded-full bg-osg-gold/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-osg-gold transition-colors group-hover:bg-osg-gold group-hover:text-osg-navy">{s.tag}</span>
                    <h3 className="text-2xl font-black text-osg-navy group-hover:text-white mb-6 uppercase tracking-tighter leading-none transition-colors">{s.name}</h3>
                    <p className="text-sm text-osg-navy/60 group-hover:text-white/75 leading-relaxed font-medium transition-colors">{s.desc}</p>
                    
                    <Link href="#technical-depth" className="mt-8 inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-osg-gold px-6 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-osg-navy shadow-lg shadow-osg-gold/20 transition-all hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-osg-gold">
                      Technical Spec <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Exploration Showcase */}
      <section id="technical-depth" className="section-padding scroll-mt-28 bg-osg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none" />
        <div className="container-osg relative z-10">
            <div className="max-w-3xl mb-16">
                <Reveal>
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Technical Depth // 05</span>
                    <h2 className="text-display-xs lg:text-display-sm text-white font-black uppercase tracking-tighter">Grid <br /><span className="text-osg-gold">Intelligence.</span></h2>
                    <p className="mt-6 text-white/50 text-lg max-w-xl">
                        Examine the distribution capacities, ingress protection ratings, and smart control protocols for our high-end electrical installations.
                    </p>
                </Reveal>
            </div>
            
            <Reveal delay={0.2}>
                <TechShowcase categoryKey="Electrical" />
            </Reveal>
        </div>
      </section>

      <section className="bg-osg-navy py-12 border-t border-white/5">
        <div className="container-osg flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-heading-md text-white mb-3">Complex electrical spec?</h3>
            <p className="text-white/40 text-small uppercase tracking-widest">Our technical engineers can review your site plans and load requirements.</p>
          </div>
          <Link href="/quote" className="btn-primary flex-shrink-0 !bg-white !text-osg-navy">Initialize Project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}

