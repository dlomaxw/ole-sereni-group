'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Building2,
  DraftingCompass,
  MonitorCheck,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ───────────────────────────────────────────────────── */}
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
            <p className="text-white/70 max-w-xl mb-16 animate-fade-in-up text-lg uppercase tracking-widest leading-loose font-medium" style={{ animationDelay: '0.2s' }}>
              Precision-engineered building envelopes and specialist architectural systems for the next generation of infrastructure.
            </p>
            <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/quote" className="btn-primary shadow-gold">
                Initialize Project <ArrowRight size={18} />
              </Link>
              <Link href="/products" className="btn-outline !text-white !border-white/30 hover:!border-osg-gold hover:!text-osg-gold">
                View Sector Portfolio <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30 z-10">
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <div className="w-px h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 w-full h-1/2 bg-osg-gold"
            />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-osg-navy/5 py-14">
        <div className="container-osg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { label: 'Projects Completed', value: '1,200+' },
              { label: 'Qualified Engineers', value: '150+' },
              { label: 'SLA Turnaround', value: '24h' },
              { label: 'Certified Quality', value: 'ISO 9001' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <h4 className="text-3xl font-serif font-black text-osg-navy mb-2 leading-none">{stat.value}</h4>
                <p className="text-xs font-bold text-osg-navy/40 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engineering Precision ──────────────────────────────────── */}
      <section className="section-padding bg-osg-cream">
        <div className="container-osg">

          {/* Section header */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-osg-gold uppercase tracking-[0.4em] mb-4 block">Our Methodology</span>
              <h2 className="text-heading-xl text-osg-navy font-black uppercase leading-none">Engineering Precision</h2>
              <p className="text-osg-navy/60 mt-6 text-lg leading-relaxed">
                We combine technical BOQ analysis with bespoke fabrication to deliver building envelopes that exceed international standards for performance and sustainability.
              </p>
            </div>
            <Link
              href="/about-us"
              className="btn-outline !border-osg-navy/20 !text-osg-navy hover:!bg-osg-navy hover:!text-white hover:!border-osg-navy shrink-0"
            >
              Discover Our Blueprint <ArrowRight size={16} />
            </Link>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Aluminium Systems', 
                desc: 'Bespoke curtain walls and window systems engineered for structural resilience and thermal performance.',
                image: '/images/service-aluminium.jpg',
                icon: Building2,
                href: '/services'
              },
              { 
                title: 'Structural Glazing', 
                desc: 'Unitized and semi-unitized frameworks designed for ethereal transparency and weather resistance.',
                image: '/images/service-glazing.jpg',
                icon: DraftingCompass,
                href: '/services'
              },
              { 
                title: 'Specialist Tiling', 
                desc: 'Precision exterior and interior finishing using advanced material adhesives and large-format systems.',
                image: '/images/service-tiling.jpg',
                icon: MonitorCheck,
                href: '/services'
              }
            ].map((service, i) => (
              <div key={i} className="card-architectural group overflow-hidden flex flex-col bg-white">
                {/* Image */}
                <div className="h-72 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-osg-navy/20 group-hover:bg-transparent transition-all duration-500" />
                  {/* Type badge */}
                  <div className="absolute top-5 left-5 badge-system">
                    <service.icon size={10} className="inline-block mr-2" />
                    System
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-1 gap-6">
                  <div>
                    <h3 className="text-xl font-serif font-black text-osg-navy uppercase mb-3">{service.title}</h3>
                    <p className="text-osg-navy/55 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-osg-navy/5">
                    <Link
                      href={service.href}
                      className="btn-primary !py-4 !px-8 !text-[0.65rem] w-full justify-center"
                    >
                      Explore Technical Specs <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── System Typologies ──────────────────────────────────────── */}
      <section className="section-padding bg-osg-navy text-white">
        <div className="container-osg">

          {/* Section header */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
            <div>
              <span className="text-[10px] font-mono font-bold text-osg-gold uppercase tracking-[0.4em] mb-4 block">System Classifications</span>
              <h2 className="text-4xl lg:text-heading-xl font-serif font-black uppercase tracking-tight">Advanced System Typologies</h2>
            </div>
            <Link
              href="/projects"
              className="btn-outline !border-white/20 !text-white hover:!border-osg-gold hover:!text-osg-gold shrink-0"
            >
              View All Projects <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
            {[
              { 
                title: 'Structural Curtain Walls', 
                label: 'Type 01 / Unitized',
                desc: 'Engineered for rapid installation and extreme thermal performance on commercial high-rise projects.',
                image: '/images/typology-curtain-wall.jpg',
                href: '/services'
              },
              { 
                title: 'Unitized Systems', 
                label: 'Type 02 / Modular',
                desc: 'Pre-fabricated offsite modules for precision structural alignment and accelerated site delivery.',
                image: '/images/typology-unitized.jpg',
                href: '/services'
              },
              { 
                title: 'Precision Skylights', 
                label: 'Type 03 / Glazing',
                desc: 'Architectural overhead systems for optimized natural light control and structural elegance.',
                image: '/images/typology-skylight.jpg',
                href: '/services'
              },
              { 
                title: 'Industrial Envelopes', 
                label: 'Type 04 / Heavy-Duty',
                desc: 'Durable structural shells designed for logistic, industrial and retail hub applications.',
                image: '/images/typology-industrial.jpg',
                href: '/services'
              }
            ].map((item, i) => (
              <div key={i} className="relative group overflow-hidden h-[480px] bg-osg-navy-mid">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-75 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-osg-navy via-osg-navy/40 to-transparent group-hover:via-osg-navy/20 transition-all duration-500" />

                <div className="absolute inset-0 p-12 flex flex-col justify-end gap-4">
                  <span className="badge-system w-fit">{item.label}</span>
                  <h3 className="text-2xl font-serif font-black uppercase">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-sm translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {item.desc}
                  </p>
                  {/* Visible CTA button */}
                  <div className="mt-2">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-3 bg-osg-gold text-osg-navy px-6 py-3.5 text-xs font-black uppercase tracking-widest hover:bg-osg-gold-light transition-all hover:-translate-y-0.5"
                    >
                      View System Details <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why OSG ────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-osg">
          <div className="flex flex-col lg:flex-row gap-20 items-center">

            {/* Left: image */}
            <div className="flex-1 relative h-[520px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671&auto=format&fit=crop"
                alt="OSG Engineering Team"
                fill
                sizes="50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Gold corner accents */}
              <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-osg-gold" />
              <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-osg-gold" />
              {/* Stat overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-osg-navy/90 p-8 flex items-center justify-between backdrop-blur-sm">
                <div>
                  <p className="text-4xl font-serif font-black text-osg-gold leading-none">20+</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest mt-1">Years in East Africa</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <p className="text-4xl font-serif font-black text-osg-gold leading-none">5</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest mt-1">Regional Markets</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <p className="text-4xl font-serif font-black text-osg-gold leading-none">98%</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest mt-1">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right: copy + features */}
            <div className="flex-1 space-y-10">
              <div>
                <span className="text-xs font-mono font-bold text-osg-gold uppercase tracking-[0.4em] mb-4 block">Why Ole Sereni Group</span>
                <h2 className="text-heading-xl text-osg-navy font-black uppercase leading-none mb-6">Built on <span className="text-osg-gold italic">Precision</span></h2>
                <p className="text-osg-navy/60 text-base leading-relaxed">
                  From BOQ analysis to final commissioning, we operate with meticulous precision. Our certified engineers deliver systems that meet international benchmarks for safety, sustainability, and performance across East Africa.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'ISO Certified', desc: 'ISO 9001 quality management across all project phases.' },
                  { title: 'In-house Fabrication', desc: 'Full control from design to installation with our own workshop.' },
                  { title: 'Technical BOQ', desc: 'Detailed quantities and specifications before any commitment.' },
                  { title: 'After-care Support', desc: 'Dedicated maintenance and warranty programs for every client.' },
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-osg-cream border border-osg-navy/5 hover:border-osg-gold/30 transition-colors">
                    <div className="w-2 h-2 bg-osg-gold rounded-full shrink-0 mt-2" />
                    <div>
                      <h4 className="text-sm font-bold text-osg-navy uppercase tracking-wide mb-1">{feat.title}</h4>
                      <p className="text-xs text-osg-navy/50 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/about-us" className="btn-primary">
                  Our Story <ArrowRight size={16} />
                </Link>
                <Link href="/projects" className="btn-outline !border-osg-navy/20 !text-osg-navy hover:!bg-osg-navy hover:!text-white hover:!border-osg-navy">
                  View Projects <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-osg-navy py-32 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-30" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
          <span className="text-[30vw] font-serif font-black text-white leading-none uppercase select-none pointer-events-none">OSG</span>
        </div>

        <div className="container-osg relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono font-bold text-osg-gold uppercase tracking-[0.4em] mb-6 block">Start Your Project</span>
            <h2 className="text-heading-xl text-white font-black uppercase tracking-tighter mb-8 italic leading-none">
              Ready to Engineer <br />
              <span className="text-osg-gold">the Future?</span>
            </h2>
            <p className="text-white/50 text-lg mb-14 max-w-2xl mx-auto leading-relaxed">
              Initialize your architectural journey with our precision-engineered intake system. Our consultants are ready to evaluate your structural requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/quote" className="btn-primary !py-5 !px-12 !text-sm">
                Initialize Project Review <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-outline !border-white/25 !text-white hover:!border-osg-gold hover:!text-osg-gold !py-5 !px-12 !text-sm">
                Contact Command Center <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
