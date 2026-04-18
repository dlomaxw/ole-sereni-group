'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import TechShowcase from '@/components/TechShowcase';
import { ClickableImage } from '@/components/ClickableImage';

const systems = [
  {
    name: 'Custom Millwork & Cabinetry',
    desc: 'Bespoke fitted kitchens, office cabinetry, and custom storage solutions crafted to architectural drawings.',
    image: '/images/detail-millwork.jpg',
    tag: 'Bespoke',
  },
  {
    name: 'Built-in Wardrobes & Units',
    desc: 'Floor-to-ceiling built-in wardrobes, linen cupboards, and media units with premium hardware finishes.',
    image: '/images/detail-millwork.jpg',
    tag: 'Fitted',
  },
  {
    name: 'Architectural Panelling',
    desc: 'Timber wall panelling, feature panelled ceilings, and decorative board systems for premium interiors.',
    image: '/images/service-carpentry.jpg',
    tag: 'Premium',
  },
  {
    name: 'Door & Frame Fabrication',
    desc: 'Solid timber, engineered wood, and veneer doors with bespoke frames, architraves, and ironmongery.',
    image: '/images/product-door.jpg',
    tag: 'Structural',
  },
  {
    name: 'Feature Walls & Screening',
    desc: 'Decorative timber screens, feature wall cladding, and privacy partitions for hospitality and residential projects.',
    image: '/images/service-carpentry.jpg',
    tag: 'Decorative',
  },
  {
    name: 'Staircase Finishing',
    desc: 'Timber stair treads, risers, handrails, and balustrade systems to complete interior staircases.',
    image: '/images/service-carpentry.jpg',
    tag: 'Detail',
  },
];

export default function CarpentryPage() {
  return (
    <main className="bg-osg-navy">
      <PageHero
        label="Joinery Works"
        title="Carpentry &"
        titleHighlight="Joinery."
        subtitle="Custom millwork, built-in furniture, architectural woodwork, door and frame fabrication, and bespoke joinery crafted to elevated standards."
        ctaPrimary={{ label: 'Request a Quote', href: '/quote' }}
        ctaSecondary={{ label: 'View Projects', href: '/projects' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Carpentry & Joinery' },
        ]}
      />

      <section className="section-padding bg-[#fcfdfc] relative overflow-hidden">
        <div className="container-osg relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
            <Reveal className="max-w-2xl">
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">
                Scope of Works // 04
              </span>
              <h2 className="text-4xl lg:text-6xl text-osg-navy font-black uppercase tracking-tighter italic leading-[0.9]">
                Joinery <br />
                <span className="text-osg-navy/20">Systems.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:w-1/3 border-l-2 border-osg-gold pl-8">
              <p className="text-sm text-osg-navy/60 leading-relaxed">
                Bespoke timber work, built-in furniture, and architectural panelling — fabricated in-house to exacting tolerances.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systems.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <Link href={`#system-${i}`}>
                  <article className="group h-full flex flex-col bg-white border border-osg-navy/5 hover:border-osg-gold transition-all duration-500 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(10,22,40,0.18)] overflow-hidden rounded-lg cursor-pointer">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-osg-navy/10">
                    <ClickableImage
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i < 2}
                      className="!relative w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/50 via-osg-navy/10 to-transparent pointer-events-none" />
                    <span className="absolute top-5 right-5 bg-osg-gold text-osg-navy px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-lg rounded-sm pointer-events-none">
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
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-osg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none" />
        <div className="container-osg relative z-10">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">
                Technical Depth // 08
              </span>
              <h2 className="text-4xl lg:text-6xl text-white font-black uppercase tracking-tighter italic leading-[0.9]">
                Joinery <br />
                <span className="text-osg-gold">Extraction.</span>
              </h2>
              <p className="mt-6 text-white/60 text-base leading-relaxed max-w-xl">
                Explore the structural density, moisture tolerance, and fire-integrity ratings of our bespoke millwork and technical timber products.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <TechShowcase categoryKey="CarpentryJoinery" />
          </Reveal>
        </div>
      </section>

      <section className="bg-osg-navy py-14 border-t border-white/5">
        <div className="container-osg flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl lg:text-3xl font-serif font-black text-white mb-3 italic leading-tight">
              Looking for bespoke joinery?
            </h3>
            <p className="text-white/50 text-sm">
              Our workshop team can fabricate to any architectural specification.
            </p>
          </div>
          <Link href="/quote" className="btn-primary !bg-white !text-osg-navy flex-shrink-0">
            Initialize Project <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
