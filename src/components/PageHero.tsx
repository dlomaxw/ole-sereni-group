'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface PageHeroProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  breadcrumb?: Array<{ label: string; href?: string }>;
  centered?: boolean;
}

export default function PageHero({
  label, title, titleHighlight, subtitle,
  ctaPrimary, ctaSecondary, breadcrumb, centered = false,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#F8F9FB] border-b border-osg-navy/5 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      {/* Structural Accent Lines */}
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-osg-navy/[0.03] hidden lg:block" />
      <div className="absolute top-[40%] left-0 w-full h-[1px] bg-osg-navy/[0.03] hidden lg:block" />

      <div className={`container-clean relative z-10 pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-44 lg:pb-28 ${centered ? 'text-center' : ''}`}>
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-wrap items-center gap-3 text-[9px] font-black text-osg-navy/25 uppercase tracking-[0.22em] sm:tracking-[0.35em] mb-8 lg:mb-12 ${centered ? 'justify-center' : ''}`}
          >
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-4">
                {i > 0 && <ChevronRight size={10} className="opacity-10" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-osg-navy transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-osg-navy/60">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className={centered ? 'max-w-3xl mx-auto' : 'max-w-5xl'}>
            {/* Label */}
            {label && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-4 mb-6 lg:mb-8"
              >
                 <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                 <span className="text-[9px] sm:text-[10px] font-black text-osg-gold uppercase tracking-[0.28em] sm:tracking-[0.5em]">
                    {label}
                 </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="text-5xl sm:text-6xl lg:text-[6.5rem] font-sans font-black text-osg-navy uppercase leading-[0.9] tracking-tight mb-8 lg:mb-10"
            >
              {title}
              {titleHighlight && (
                <span className="block text-osg-gold uppercase">{titleHighlight}</span>
              )}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="text-base sm:text-lg lg:text-2xl text-osg-navy/55 mb-10 lg:mb-14 max-w-3xl leading-relaxed font-sans"
              >
                {subtitle}
              </motion.p>
            )}

            {/* CTAs */}
            {(ctaPrimary || ctaSecondary) && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.38 }}
                className={`flex flex-wrap gap-4 sm:gap-6 ${centered ? 'justify-center' : ''}`}
              >
                {ctaPrimary && (
                  <Link href={ctaPrimary.href} className="btn-cta !px-8 sm:!px-12 py-4 sm:py-5 !text-[9px] sm:!text-[10px]">
                    {ctaPrimary.label} <ArrowRight size={16} />
                  </Link>
                )}
                {ctaSecondary && (
                  <Link href={ctaSecondary.href} className="flex items-center gap-4 px-7 sm:px-10 py-4 sm:py-5 rounded-full border border-osg-navy/10 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-osg-navy hover:bg-osg-navy hover:text-white transition-all">
                    {ctaSecondary.label}
                  </Link>
                )}
              </motion.div>
            )}
        </div>
      </div>
    </section>
  );
}

