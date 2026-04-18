'use client';

import Image from 'next/image';
import { ArrowRight, ArrowUpRight, CheckCircle, Download, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import TechShowcase from '@/components/TechShowcase';

const systems = [
  {
    name: 'Curtain Wall Systems',
    desc: 'Full-height structural glazing facades for offices, hotels, and institutional projects offering maximum light and weather performance.',
    image: '/images/typology-curtain-wall.jpg',
    tag: 'Structural',
  },
  {
    name: 'Aluminium Window Systems',
    desc: 'Casement, sliding, tilt-and-turn, and fixed-light windows in anodized and powder-coated aluminium profiles.',
    image: '/images/product-window.jpg',
    tag: 'Systems',
  },
  {
    name: 'Aluminium Door Systems',
    desc: 'Single and double-leaf doors, frameless pivot doors, automatic sliding systems, and fire-rated aluminium doors.',
    image: '/images/product-door.jpg',
    tag: 'Access',
  },
  {
    name: 'Glass Balustrades',
    desc: 'Frameless and semi-framed tempered or laminated glass balustrades for balconies, staircases, and terraces.',
    image: '/images/product-glass.jpg',
    tag: 'Safety',
  },
  {
    name: 'Skylights & Atria',
    desc: 'Custom-designed structural rooflights, atriums, and canopy systems bringing natural light deep into a building.',
    image: '/images/typology-skylight.jpg',
    tag: 'Light',
  },
  {
    name: 'Acoustic & Fire-Rated Glazing',
    desc: 'Specialist glass assemblies meeting acoustic, thermal, and fire safety requirements for critical applications.',
    image: '/images/service-glazing.jpg',
    tag: 'Technical',
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

const sectors = [
  'Commercial Offices',
  'Hotels & Resorts',
  'Residential Apartments',
  'Shopping Malls',
  'Educational Institutions',
  'Healthcare Facilities',
];

const related = [
  { title: 'Gypsum Works & Ceilings', href: '/services/gypsum-works' },
  { title: 'Structural Glazing Products', href: '/products/glass-systems' },
  { title: 'Curtain Wall Facades', href: '/products/curtain-wall' },
];

export default function AluminiumGlassPage() {
  return (
    <main className="bg-osg-navy">
      <PageHero
        label="Architecture Facades"
        title="Aluminium &"
        titleHighlight="Glass."
        subtitle="High-performance architectural glazing, curtain wall systems, and precision aluminium fabrication for modern infrastructure."
        ctaPrimary={{ label: 'Request a Quote', href: '/quote' }}
        ctaSecondary={{ label: 'View Projects', href: '/projects' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Aluminium & Glass' },
        ]}
      />

      {/* Systems Grid */}
      <section className="section-padding bg-[#fcfdfc] relative overflow-hidden">
        <div className="container-osg relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
            <Reveal className="max-w-2xl">
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">
                Scope of Works // 01
              </span>
              <h2 className="text-4xl lg:text-6xl text-osg-navy font-black uppercase tracking-tighter italic leading-[0.9]">
                Glazing <br />
                <span className="text-osg-navy/20">Solutions.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:w-1/3 border-l-2 border-osg-gold pl-8">
              <p className="text-sm text-osg-navy/60 leading-relaxed">
                Six specialist glazing disciplines engineered and installed under one integrated delivery framework.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systems.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <article className="group h-full flex flex-col bg-white border border-osg-navy/5 hover:border-osg-gold transition-all duration-500 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(10,22,40,0.18)] overflow-hidden rounded-lg">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-osg-navy/10">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      priority={i < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/50 via-osg-navy/10 to-transparent" />
                    <span className="absolute top-5 right-5 bg-osg-gold text-osg-navy px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-lg rounded-sm">
                      {s.tag}
                    </span>
                  </div>
                  <div className="flex flex-col flex-grow p-7">
                    <h3 className="text-lg lg:text-xl font-serif font-black text-osg-navy uppercase mb-3 leading-tight">
                      {s.name}
                    </h3>
                    <p className="text-sm text-osg-navy/60 leading-relaxed mb-6 flex-grow">
                      {s.desc}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-osg-navy/8">
                      <span className="text-xs font-black uppercase tracking-[0.25em] text-osg-navy group-hover:text-osg-gold transition-colors">
                        Learn More
                      </span>
                      <span className="w-10 h-10 bg-osg-navy text-white flex items-center justify-center group-hover:bg-osg-gold group-hover:text-osg-navy transition-all rounded-sm">
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </article>
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
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">
                Technical Depth // 02
              </span>
              <h2 className="text-4xl lg:text-6xl text-white font-black uppercase tracking-tighter italic leading-[0.9]">
                Technical <br />
                <span className="text-osg-gold">Showcase.</span>
              </h2>
              <p className="mt-6 text-white/60 text-base leading-relaxed max-w-xl">
                Explore the precision engineering behind our architectural systems.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <TechShowcase categoryKey="AluminiumGlass" />
          </Reveal>
        </div>
      </section>

      {/* Benefits & Sectors */}
      <section className="section-padding bg-osg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container-osg relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <Reveal>
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">
                Why OSG // 03
              </span>
              <h2 className="text-3xl lg:text-5xl text-white uppercase italic tracking-tighter mb-10 leading-tight font-black">
                Engineering Excellence in <span className="text-osg-gold">Fabrication.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-osg-gold mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 p-10 backdrop-blur-md">
                <span className="text-[10px] font-black text-osg-gold uppercase tracking-widest mb-6 block">
                  Target Sectors
                </span>
                <div className="flex flex-wrap gap-3 mb-10">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="px-4 py-2 border border-white/15 text-xs uppercase font-bold text-white/70 tracking-wider"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-8">
                  <h4 className="text-white font-bold mb-5 italic uppercase tracking-wider text-sm">
                    Related Solutions
                  </h4>
                  <div className="space-y-3">
                    {related.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-center justify-between group py-3 px-4 bg-white/5 hover:bg-osg-gold border border-white/5 hover:border-osg-gold transition-all"
                      >
                        <span className="text-white group-hover:text-osg-navy transition-colors uppercase text-xs font-bold tracking-wider">
                          {item.title}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="text-osg-gold group-hover:text-osg-navy transition-colors"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-osg-gold py-14">
        <div className="container-osg flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl lg:text-3xl font-serif font-black text-osg-navy mb-3 italic leading-tight">
              Technical consultation required?
            </h3>
            <p className="text-osg-navy/70 text-sm">
              Speak with our glazing engineers about your project specifications.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary !bg-osg-navy !text-white">
              Contact Engineer <Phone size={15} />
            </Link>
            <Link
              href="/quote"
              className="px-8 py-4 bg-white text-osg-navy border-2 border-osg-navy hover:bg-osg-navy hover:text-white transition-all text-xs font-black uppercase tracking-widest inline-flex items-center gap-3"
            >
              Technical PDF <Download size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
