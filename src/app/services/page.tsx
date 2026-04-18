'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const services = [
  {
    id: 'aluminium-glass',
    icon: '◈',
    title: 'Aluminium & Glass Systems',
    tag: 'Flagship Service',
    desc: 'Curtain walls, window systems, door frames, facades, and specialist glazing solutions engineered for precision, weather resistance, and architectural elegance.',
    features: ['Curtain wall systems', 'Window & door systems', 'Glass facades & balustrades', 'Skylights & atria', 'Fire-rated glazing', 'Acoustic glass systems'],
    href: '/services/aluminium-glass',
    sectors: ['Commercial', 'Hospitality', 'Residential', 'Institutional'],
  },
  {
    id: 'gypsum-ceilings',
    icon: '⬡',
    title: 'Gypsum Works & Ceilings',
    tag: 'Interior',
    desc: 'Suspended ceilings, partition systems, decorative plasterwork, acoustic panels, and bespoke interior structures built to exact specification.',
    features: ['Suspended T-bar ceilings', 'Gypsum board partitions', 'Decorative plasterwork', 'Acoustic ceiling panels', 'Bulkheads & coffers', 'Fire-rated assemblies'],
    href: '/services/gypsum-works',
    sectors: ['Commercial', 'Hospitality', 'Institutional', 'Residential'],
  },
  {
    id: 'painting-tiling',
    icon: '◭',
    title: 'Painting & Tiling',
    tag: 'Finishing',
    desc: 'Surface preparation, primer systems, specialist coatings, large-format tiling, and precision grouting for premium interior and exterior finishes.',
    features: ['Interior wall & ceiling painting', 'Exterior facade coatings', 'Large-format floor tiling', 'Wall cladding & mosaic', 'Epoxy flooring systems', 'Waterproof coatings'],
    href: '/services/painting-tiling',
    sectors: ['All Sectors'],
  },
  {
    id: 'carpentry-joinery',
    icon: '◫',
    title: 'Carpentry & Joinery',
    tag: 'Joinery',
    desc: 'Custom millwork, built-in furniture, architectural woodwork, door and frame fabrication, and bespoke joinery crafted to elevated standards.',
    features: ['Custom millwork & cabinetry', 'Built-in wardrobes & units', 'Architectural panelling', 'Door & frame fabrication', 'Feature walls & screening', 'Staircase finishing'],
    href: '/services/carpentry',
    sectors: ['Residential', 'Hospitality', 'Retail', 'Corporate'],
  },
  {
    id: 'electrical',
    icon: '⚡',
    title: 'Electrical Installations',
    tag: 'M&E',
    desc: 'Wiring, switchgear, lighting systems, power distribution, and compliance-certified electrical works for commercial and residential projects.',
    features: ['Full wiring installations', 'DB boards & switchgear', 'LED lighting systems', 'Emergency & safety systems', 'Power distribution', 'Low-voltage systems'],
    href: '/services/electrical',
    sectors: ['Commercial', 'Residential', 'Industrial', 'Institutional'],
  },
  {
    id: 'finishing',
    icon: '◉',
    title: 'Interior & Exterior Finishing',
    tag: 'Full-scope',
    desc: 'Full-scope finishing coordination — from screeding and waterproofing to final cosmetic layers — ensuring a premium handover every time.',
    features: ['Floor screeding & levelling', 'Waterproofing systems', 'External rendering', 'Skirting & architrave', 'Final cosmetic finishing', 'Defects rectification'],
    href: '/services/finishing',
    sectors: ['All Sectors'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Expertise"
        title="Six Specialist"
        titleHighlight="Service Lines."
        subtitle="One accountable contractor. OSG coordinates all finishing works under a single umbrella so your project stays on programme and delivers at the highest standard."
        ctaPrimary={{ label: 'Request a Quote', href: '/quote' }}
        ctaSecondary={{ label: 'View Projects', href: '/projects' }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Services Grid */}
      <section className="section-padding bg-osg-navy">
        <div className="container-osg">
          <div className="space-y-6">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <div className="card-glass p-8 md:p-10 group">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left: intro */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl text-osg-gold">{s.icon}</span>
                        <span className="badge-gold">{s.tag}</span>
                      </div>
                      <h2 className="text-heading-lg text-white mb-3 group-hover:text-osg-gold transition-colors">{s.title}</h2>
                      <p className="text-body text-osg-slate mb-6 leading-relaxed">{s.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {s.sectors.map(sec => (
                          <span key={sec} className="px-3 py-1 text-xs text-osg-slate border border-white/10 tracking-wide">{sec}</span>
                        ))}
                      </div>
                      <Link href={s.href} className="btn-primary text-sm inline-flex">
                        Explore Service <ArrowRight size={14} />
                      </Link>
                    </div>
                    {/* Right: features */}
                    <div>
                      <h4 className="text-label mb-4">Scope Includes</h4>
                      <ul className="space-y-2">
                        {s.features.map(f => (
                          <li key={f} className="flex items-center gap-3 text-small text-osg-slate">
                            <CheckCircle size={13} className="text-osg-gold flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-osg-navy-mid border-t border-white/8">
        <div className="container-osg text-center">
          <Reveal>
            <h2 className="text-heading-xl text-white mb-4">Not sure which service you need?</h2>
            <p className="text-body text-osg-slate max-w-lg mx-auto mb-8">
              Submit a project brief or speak with our team — we'll recommend the right scope.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/brief" className="btn-primary">Submit a Brief <ArrowUpRight size={15} /></Link>
              <Link href="/contact" className="btn-outline">Talk to Us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
