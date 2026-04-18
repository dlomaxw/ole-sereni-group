'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Users, 
  Globe,
  DraftingCompass,
  Building2,
  HardHat,
  MonitorCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-osg-navy">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
            alt="Architectural Masterpiece"
            fill
            sizes="100vw"
            className="object-cover opacity-60 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-osg-navy/20 via-osg-navy/40 to-osg-navy" />
        </div>

        <div className="container-osg relative z-10">
          <div className="max-w-5xl">
            <span className="text-system-label !text-osg-gold !tracking-[0.8em] mb-12 block animate-fade-in-up">
              Engineering Architectural Excellence
            </span>
            <h1 className="text-display text-white mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Redefining <br />
              <span className="text-osg-gold">Structural</span> <br />
              Integrity.
            </h1>
            <p className="text-body-muted text-white/80 max-w-xl mb-16 animate-fade-in-up !text-lg uppercase tracking-widest leading-loose" style={{ animationDelay: '0.2s' }}>
              Precision-engineered building envelopes and specialist architectural systems for the next generation of infrastructure.
            </p>
            <div className="flex flex-wrap gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/quote" className="btn-primary shadow-gold">
                INITIALIZE PROJECT <ArrowRight size={18} />
              </Link>
              <Link href="/products" className="btn-outline !text-white !border-white/20 hover:!border-osg-gold hover:!text-osg-gold">
                VIEW SECTOR PORTFOLIO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Summary - Immediately under Hero */}
      <section className="bg-white border-b border-osg-navy/5 py-12">
        <div className="container-osg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Projects Completed', value: '1200+' },
              { label: 'Qualified Engineers', value: '150+' },
              { label: 'SLA Turnaround', value: '24h' },
              { label: 'Certified Quality', value: 'ISO 9001' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <h4 className="text-2xl font-serif font-black text-osg-navy mb-1">{stat.value}</h4>
                <p className="text-[9px] font-bold text-osg-navy/40 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Precision Section */}
      <section className="section-padding bg-osg-cream">
        <div className="container-osg">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl">
              <span className="text-label mb-4 block">Our Methodology</span>
              <h2 className="text-heading-xl text-osg-navy font-black uppercase leading-none">Engineering Precision</h2>
              <p className="text-osg-navy/60 mt-6 text-lg">
                We combine technical BOQ analysis with bespoke fabrication to deliver building envelopes that exceed international standards for performance and sustainability.
              </p>
            </div>
            <Link href="/about-us" className="text-[11px] font-black text-osg-navy uppercase tracking-[0.3em] flex items-center gap-4 border-b-2 border-osg-navy pb-3 hover:text-osg-gold hover:border-osg-gold transition-all">
              DISCOVER OUR BLUEPRINT <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: 'Aluminium Systems', 
                desc: 'Bespoke curtain walls and window systems engineered for structural resilience.',
                image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2670&auto=format&fit=crop',
                icon: Building2
              },
              { 
                title: 'Structural Glazing', 
                desc: 'Unitized and semi-unitized frameworks designed for ethereal transparency.',
                image: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=2574&auto=format&fit=crop',
                icon: DraftingCompass
              },
              { 
                title: 'Specialist Tiling', 
                desc: 'Precision exterior and interior finishing using advanced material adhesives.',
                image: 'https://images.unsplash.com/photo-1502005229762-f833b18ba72c?q=80&w=2574&auto=format&fit=crop',
                icon: MonitorCheck
              }
            ].map((service, i) => (
              <div key={i} className="card-architectural group overflow-hidden">
                <div className="h-80 relative overflow-hidden">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-osg-navy/20 group-hover:bg-transparent transition-all" />
                </div>
                <div className="p-10">
                  <service.icon size={24} className="text-osg-gold mb-6" />
                  <h3 className="text-xl font-serif font-black text-osg-navy uppercase mb-4">{service.title}</h3>
                  <p className="text-osg-navy/50 text-small mb-8">{service.desc}</p>
                  <Link href="/services" className="text-[10px] font-bold text-osg-navy uppercase tracking-widest flex items-center gap-2 group/link">
                    Explore Technical Specs <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typologies Grid */}
      <section className="section-padding bg-osg-navy text-white">
        <div className="container-osg">
          <div className="text-center max-w-3xl mx-auto mb-20 px-4">
            <span className="text-[10px] font-bold text-osg-gold uppercase tracking-[0.4em] mb-4 block">System Classifications</span>
            <h2 className="text-4xl lg:text-heading-xl font-serif font-black uppercase tracking-tight">Advanced System Typologies</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            {[
              { 
                title: 'Structural Curtain Walls', 
                label: 'Type 01 / Unitized',
                desc: 'Engineered for rapid installation and extreme thermal performance.',
                image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=2670&auto=format&fit=crop'
              },
              { 
                title: 'Unitized Systems', 
                label: 'Type 02 / Modular',
                desc: 'Pre-fabricated offsite modules for precision structural alignment.',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop'
              },
              { 
                title: 'Precision Skylights', 
                label: 'Type 03 / Glazing',
                desc: 'Architectural overhead systems for optimized natural light control.',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop'
              },
              { 
                title: 'Industrial Envelopes', 
                label: 'Type 04 / Heavy-Duty',
                desc: 'Durable structural shells designed for logistic and retail hubs.',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop'
              }
            ].map((item, i) => (
              <div key={i} className="relative group overflow-hidden h-96">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-osg-navy/40 group-hover:bg-osg-navy/20 transition-all" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <span className="text-[9px] font-black text-osg-gold uppercase tracking-widest mb-2">{item.label}</span>
                  <h3 className="text-2xl font-serif font-black uppercase mb-4">{item.title}</h3>
                  <p className="text-white/40 text-small max-w-xs mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                  <Link href="/projects" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-osg-gold hover:border-osg-gold transition-all text-white hover:text-osg-navy">
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-osg-cream relative overflow-hidden">
        <div className="container-osg relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-heading-xl text-osg-navy font-black uppercase tracking-tighter mb-8 italic">Ready to Engineer the Future?</h2>
          <p className="text-osg-navy/60 text-lg mb-12">
            Initialize your architectural journey with our precision-engineered intake system. Our consultants are ready to evaluate your structural requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/quote" className="btn-primary">
              Initialize Project Review
            </Link>
            <Link href="/contact" className="btn-outline !border-osg-navy/10 !text-osg-navy hover:!border-osg-navy">
              Contact Command Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
