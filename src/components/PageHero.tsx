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
    <section className="relative bg-osg-cream border-b border-osg-navy/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Structural Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-osg-navy/5 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 border-t border-osg-navy/5 hidden lg:block" />

      <div className={`container-osg relative z-10 py-16 lg:py-24 ${centered ? 'text-center' : ''}`}>
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center gap-3 text-[10px] font-bold text-osg-navy/40 uppercase tracking-[0.3em] mb-10 ${centered ? 'justify-center' : ''}`}
          >
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-3">
                {i > 0 && <ChevronRight size={10} className="opacity-20" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-osg-navy transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-osg-navy">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className={centered ? 'max-w-3xl mx-auto' : 'max-w-4xl'}>
            {/* Label */}
            {label && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[11px] font-black text-osg-gold uppercase tracking-[0.5em] mb-6 block"
              >
                {label}
              </motion.span>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="text-4xl lg:text-7xl font-serif font-black text-osg-navy uppercase leading-[0.9] tracking-tighter mb-8"
            >
              {title}
              {titleHighlight && (
                <span className="block text-osg-gold italic">{titleHighlight}</span>
              )}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="text-lg lg:text-xl text-osg-navy/60 mb-12 max-w-2xl"
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
                className={`flex flex-wrap gap-6 ${centered ? 'justify-center' : ''}`}
              >
                {ctaPrimary && (
                  <Link href={ctaPrimary.href} className="btn-primary">
                    {ctaPrimary.label} <ArrowRight size={18} />
                  </Link>
                )}
                {ctaSecondary && (
                  <Link href={ctaSecondary.href} className="btn-outline !text-osg-navy !border-osg-navy/10 hover:!border-osg-navy">
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
