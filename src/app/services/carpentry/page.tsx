'use client';

import Link from 'next/link';
import { ArrowRight, Layers, Settings, Flame, Waves } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import TechShowcase from '@/components/TechShowcase';

const systems = [
  { 
    name: 'Custom Millwork & Cabinetry', 
    desc: 'Bespoke fitted kitchens, office cabinetry, and custom storage solutions crafted to architectural drawings.',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800&auto=format&fit=crop',
    tag: 'Bespoke'
  },
  { 
    name: 'Built-in Wardrobes & Units', 
    desc: 'Floor-to-ceiling built-in wardrobes, linen cupboards, and media units with premium hardware finishes.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120ec?q=80&w=800&auto=format&fit=crop',
    tag: 'Fitted'
  },
  { 
    name: 'Architectural Panelling', 
    desc: 'Timber wall panelling, feature panelled ceilings, and decorative board systems for premium interiors.',
    image: 'https://images.unsplash.com/photo-1622372738946-629715071d3e?q=80&w=800&auto=format&fit=crop',
    tag: 'Premium'
  },
  { 
    name: 'Door & Frame Fabrication', 
    desc: 'Solid timber, engineered wood, and veneer doors with bespoke frames, architraves, and ironmongery.',
    image: 'https://images.unsplash.com/photo-1544413234-2c351f8a848c?q=80&w=800&auto=format&fit=crop',
    tag: 'Structural'
  },
  { 
    name: 'Feature Walls & Screening', 
    desc: 'Decorative timber screens, feature wall cladding, and privacy partitions for hospitality and residential projects.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4511f7c46bc?q=80&w=800&auto=format&fit=crop',
    tag: 'Decorative'
  },
  { 
    name: 'Staircase Finishing', 
    desc: 'Timber stair treads, risers, handrails, and balustrade systems to complete interior staircases.',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=800&auto=format&fit=crop',
    tag: 'Detail'
  },
];

export default function CarpentryPage() {
  return (
    <main className="bg-osg-navy">
      <PageHero label="Joinery Works" title="Carpentry &" titleHighlight="Joinery."
        subtitle="Custom millwork, built-in furniture, architectural woodwork, door and frame fabrication, and bespoke joinery crafted to elevated standards."
        ctaPrimary={{ label: 'Request a Quote', href: '/quote' }} ctaSecondary={{ label: 'View Projects', href: '/projects' }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Carpentry & Joinery' }]} />
      
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Decoration */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container-osg relative z-10">
          <Reveal className="mb-20">
            <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Scope of Works // 04</span>
            <h2 className="text-display-sm text-osg-navy font-black uppercase tracking-tighter italic">Joinery <br/><span className="text-osg-navy/20">Systems.</span></h2>
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

                  <div className="relative z-20 h-full p-12 flex flex-col justify-end">
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.3em] mb-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 transition-transform">{s.tag}</span>
                    <h3 className="text-2xl font-black text-osg-navy group-hover:text-white mb-6 uppercase tracking-tighter leading-none transition-colors">{s.name}</h3>
                    <p className="text-sm text-osg-navy/50 group-hover:text-white/60 leading-relaxed font-light transition-colors">{s.desc}</p>
                    
                    <div className="mt-8 pt-8 border-t border-osg-navy/5 group-hover:border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                        <span className="text-[9px] font-black text-osg-gold uppercase tracking-widest">Technical Spec</span>
                        <ArrowRight size={16} className="text-osg-gold" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Exploration Showcase */}
      <section className="section-padding bg-osg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none" />
        <div className="container-osg relative z-10">
            <div className="max-w-3xl mb-16">
                <Reveal>
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Technical Depth // 08</span>
                    <h2 className="text-display-xs lg:text-display-sm text-white font-black uppercase tracking-tighter italic">Joinery <br /><span className="text-osg-gold">Extraction.</span></h2>
                    <p className="mt-6 text-white/50 text-lg max-w-xl">
                        Explore the structural density, moisture tolerance, and fire-integrity ratings of our bespoke millwork and technical timber products.
                    </p>
                </Reveal>
            </div>
            
            <Reveal delay={0.2}>
                <TechShowcase categoryKey="CarpentryJoinery" />
            </Reveal>
        </div>
      </section>

      <section className="bg-osg-navy py-12 border-t border-white/5">
        <div className="container-osg flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-heading-md text-white mb-3 italic">Looking for bespoke joinery?</h3>
            <p className="text-white/40 text-small uppercase tracking-widest">Our workshop team can fabricate to any architectural specification.</p>
          </div>
          <Link href="/quote" className="btn-primary flex-shrink-0 !bg-white !text-osg-navy">Initialize Project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
