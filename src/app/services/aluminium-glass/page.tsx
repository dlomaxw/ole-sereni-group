'use client';

import { ArrowRight, CheckCircle, Download, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import TechShowcase from '@/components/TechShowcase';

const systems = [
  { 
    name: 'Curtain Wall Systems', 
    desc: 'Full-height structural glazing facades for offices, hotels, and institutional projects offering maximum light and weather performance.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    tag: 'Structural'
  },
  { 
    name: 'Aluminium Window Systems', 
    desc: 'Casement, sliding, tilt-and-turn, and fixed-light windows in anodized and powder-coated aluminium profiles.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    tag: 'Systems'
  },
  { 
    name: 'Aluminium Door Systems', 
    desc: 'Single and double-leaf doors, frameless pivot doors, automatic sliding systems, and fire-rated aluminium doors.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop',
    tag: 'Access'
  },
  { 
    name: 'Glass Balustrades', 
    desc: 'Frameless and semi-framed tempered or laminated glass balustrades for balconies, staircases, and terraces.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop',
    tag: 'Safety'
  },
  { 
    name: 'Skylights & Atria', 
    desc: 'Custom-designed structural rooflights, atriums, and canopy systems bringing natural light deep into a building.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop',
    tag: 'Light'
  },
  { 
    name: 'Acoustic & Fire-Rated Glazing', 
    desc: 'Specialist glass assemblies meeting acoustic, thermal, and fire safety requirements for critical applications.',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=800&auto=format&fit=crop',
    tag: 'Technical'
  },
];

const benefits = [
  'Precision-engineered aluminium extrusion profiles',
  'Powder-coated & anodized finish options',
  'Weather-sealed to international standards',
  'Thermal break technology for energy efficiency',
  'Configured to architectural drawings',
  'Site measurement, fabrication & installation',
  'Quality test reports on completion',
  'Post-installation support',
];

const sectors = ['Commercial Offices', 'Hotels & Resorts', 'Residential Apartments', 'Shopping Malls', 'Educational Institutions', 'Healthcare Facilities'];

const related = [
  { title: 'Gypsum Works & Ceilings', href: '/services/gypsum-works', icon: '⬡' },
  { title: 'Structural Glazing Products', href: '/products/glass-systems', icon: '◈' },
  { title: 'Curtain Wall Facades', href: '/products/curtain-wall', icon: '◭' },
];

export default function AluminiumGlassPage() {
  return (
    <main className="bg-osg-navy">
      <PageHero label="Architecture Facades" title="Aluminium &" titleHighlight="Glass." 
        subtitle="High-performance architectural glazing, curtain wall systems, and precision aluminium fabrication for modern infrastructure."
        ctaPrimary={{ label: 'Request a Quote', href: '/quote' }} ctaSecondary={{ label: 'View Projects', href: '/projects' }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Aluminium & Glass' }]} />
      
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Architectural Background Decoration */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f4f6f5] -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container-osg relative z-10">
          <Reveal className="mb-20">
            <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Scope of Works // 01</span>
            <h2 className="text-display-sm text-osg-navy font-black uppercase tracking-tighter">Glazing <br/><span className="text-osg-navy/20">Solutions.</span></h2>
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
                    <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">Technical Depth // 02</span>
                    <h2 className="text-display-xs lg:text-display-sm text-white font-black uppercase tracking-tighter">Technical <br /><span className="text-osg-gold">Showcase.</span></h2>
                    <p className="mt-6 text-white/50 text-lg max-w-xl">
                        Explore the precision engineering behind our architectural systems. Select a category to visualize structural schematics and performance data.
                    </p>
                </Reveal>
            </div>
            
            <Reveal delay={0.2}>
                <TechShowcase categoryKey="AluminiumGlass" />
            </Reveal>
        </div>
      </section>

      {/* Benefits & Technical Section */}
      <section className="section-padding bg-osg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="container-osg relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <h2 className="text-display-xs text-white uppercase tracking-tighter mb-10 leading-tight">Engineering Excellence in <span className="text-osg-gold">Fabrication.</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-osg-gold mt-1 flex-shrink-0" />
                    <span className="text-white/60 text-sm font-light leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 p-12 backdrop-blur-md">
                <span className="text-[10px] font-black text-osg-gold uppercase tracking-widest mb-6 block">Target Sectors</span>
                <div className="flex flex-wrap gap-3 mb-12">
                  {sectors.map(sector => (
                    <span key={sector} className="px-5 py-2 border border-white/10 text-[10px] uppercase font-bold text-white/40 tracking-widest">{sector}</span>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-10">
                  <h4 className="text-white font-bold mb-6 uppercase">Related Solutions</h4>
                  <div className="space-y-4">
                    {related.map(item => (
                      <Link key={item.title} href={item.href} className="flex items-center justify-between group py-3 border-b border-white/5 last:border-0 hover:border-osg-gold transition-colors">
                        <div className="flex items-center gap-4">
                          <span className="text-osg-gold text-lg">{item.icon}</span>
                          <span className="text-white/60 group-hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest">{item.title}</span>
                        </div>
                        <ArrowRight size={14} className="text-osg-gold translate-x-0 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-osg-gold py-16">
        <div className="container-osg flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-4xl font-black text-osg-navy mb-3 font-sans uppercase leading-none">Technical <br/>Consultation?</h3>
            <p className="text-osg-navy/60 text-[10px] font-black uppercase tracking-[0.3em]">Speak with our glazing engineers about your project specifications.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-cta !bg-osg-navy !text-white !px-8">Contact Engineer <Phone size={16} /></Link>
            <Link href="/resources/downloads" className="btn-cta !bg-white !text-osg-navy border border-osg-navy/10 hover:!bg-white/80 !px-8">
              Technical PDF <Download size={16}/>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

