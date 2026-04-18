'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import TechShowcase from '@/components/TechShowcase';

const systems = [
  {
    name: 'Interior Wall Painting',
    desc: 'Premium emulsion, satin, and gloss finishes applied by skilled tradesmen for flawless interior surfaces.',
    image: '/images/detail-painting.jpg',
    tag: 'Interior',
  },
  {
    name: 'Exterior Facade Coatings',
    desc: 'Weather-resistant exterior masonry paints, textured coatings, and anti-carbonation systems.',
    image: '/images/detail-facade.jpg',
    tag: 'Protective',
  },
  {
    name: 'Architectural Textured Coatings',
    desc: 'Bespoke textured wall finishes, including Italian stucco, concrete-effect renders, and specialized metallic coatings.',
    image: '/images/service-finishing.jpg',
    tag: 'Artisanal',
  },
  {
    name: 'Large-Format Porcelain Tiling',
    desc: 'Precision installation of jumbo-format porcelain slabs up to 3200mm, featuring rectified edges and colour-matched epoxy grouting.',
    image: '/images/service-tiling.jpg',
    tag: 'Precision',
  },
  {
    name: 'Wall Cladding & Mosaic',
    desc: 'Natural stone, ceramic, and glass mosaic wall tiling for feature walls and wet areas.',
    image: '/images/service-tiling.jpg',
    tag: 'Decorative',
  },
];

export default function PaintingTilingPage() {
  return (
    <main className="bg-osg-navy">
      <PageHero
        label="Surface Engineering"
        title="Painting &"
        titleHighlight="Tiling."
        subtitle="High-end decorative finishes, protective facade coatings, and precision large-format tiling for premium architectural projects."
        ctaPrimary={{ label: 'Request a Quote', href: '/quote' }}
        ctaSecondary={{ label: 'View Projects', href: '/projects' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Painting & Tiling' },
        ]}
      />

      <section className="section-padding bg-[#fcfdfc] relative overflow-hidden">
        <div className="container-osg relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
            <Reveal className="max-w-2xl">
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">
                Scope of Works // 03
              </span>
              <h2 className="text-4xl lg:text-6xl text-osg-navy font-black uppercase tracking-tighter italic leading-[0.9]">
                Surface <br />
                <span className="text-osg-navy/20">Finishes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:w-1/3 border-l-2 border-osg-gold pl-8">
              <p className="text-sm text-osg-navy/60 leading-relaxed">
                Protective coatings and premium tiling applied by skilled tradesmen to an elevated finish standard.
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

      <section className="section-padding bg-osg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none" />
        <div className="container-osg relative z-10">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block leading-none">
                Technical Depth // 06
              </span>
              <h2 className="text-4xl lg:text-6xl text-white font-black uppercase tracking-tighter italic leading-[0.9]">
                Material <br />
                <span className="text-osg-gold">Parameters.</span>
              </h2>
              <p className="mt-6 text-white/60 text-base leading-relaxed max-w-xl">
                Analyze the adhesion, slip resistance, and VOC characteristics of our premium surface coating and tiling solutions.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <TechShowcase categoryKey="PaintingTiling" />
          </Reveal>
        </div>
      </section>

      <section className="bg-osg-navy py-14 border-t border-white/5">
        <div className="container-osg flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl lg:text-3xl font-serif font-black text-white mb-3 italic leading-tight">
              Premium finish project?
            </h3>
            <p className="text-white/50 text-sm">
              Our finishing team executes to the highest architectural standards.
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
