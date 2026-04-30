'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.72, delay }} className={className}>{children}</motion.div>);
}

const faqs = [
  {
    category: 'Services & Scope',
    items: [
      { q: 'What types of construction projects does OSG handle?', a: 'OSG specialises in finishing works for residential, commercial, hospitality, institutional, and retail projects. Our services include aluminium & glass systems, gypsum works & ceilings, painting & tiling, carpentry & joinery, electrical installations, and full interior/exterior finishing.' },
      { q: 'Do you handle design as well as installation?', a: 'We offer design-assist services for our specialist trades — particularly for aluminium/glass systems and gypsum ceiling layouts. For full architectural design, we work alongside your appointed architect or interior designer and can recommend partners from our network.' },
      { q: 'Can OSG handle the full finishing scope instead of separate contractors?', a: 'Yes — single-contractor finishing coordination is one of our key value propositions. Having OSG manage all finishing trades under one programme reduces interface risk, simplifies communication, and gives you a single accountable party.' },
      { q: 'What is the minimum project size OSG takes on?', a: 'We assess projects on a case-by-case basis. For specialist works (curtain wall, glass systems), we typically work on projects from UGX 20M upwards. For full fit-out packages, the minimum is typically UGX 50M.' },
    ],
  },
  {
    category: 'Quoting & Procurement',
    items: [
      { q: 'How quickly can I get a quote?', a: 'For standard works with drawings provided, we typically deliver a priced BOQ within 5–7 working days. For complex or large-scale projects, allow 10–14 days. Emergency budget estimates can be provided faster on request.' },
      { q: 'What information do you need to provide a quote?', a: 'At minimum: project location, scope description, and either architectural drawings, a finishes schedule, or a BOQ to price against. The more detail you provide, the more accurate our submission.' },
      { q: 'Do you offer fixed-price contracts?', a: 'Yes. We price on a lump-sum or bill of quantities basis. We can also offer provisional sums for works that cannot yet be fully defined. All quotations include a validity period (typically 30–60 days).' },
      { q: 'Is VAT included in your quotes?', a: 'All OSG quotations clearly state whether prices are inclusive or exclusive of VAT (18%). We are a VAT-registered company in Uganda.' },
    ],
  },
  {
    category: 'Project Delivery',
    items: [
      { q: 'How do you ensure quality on site?', a: 'Every OSG project is supervised by a qualified engineer or site manager. We carry out daily quality checks, maintain photographic records, and operate a zero-defect rework philosophy — meaning any non-conforming work is rectified at our cost.' },
      { q: 'Do you provide a warranty on your works?', a: 'Yes. Depending on the scope, OSG provides a 12-month defects liability period on installation workmanship. For materials, we pass through manufacturer warranties (typically 5–10 years for aluminium systems).' },
      { q: 'Can OSG work on occupied buildings?', a: 'Yes. We have significant experience in occupied premises, phased fit-outs, and renovation works requiring noise and access control. We operate extended hours and weekend works where required.' },
      { q: 'How are delays handled?', a: 'Programme delays caused by OSG are managed at our cost. We maintain a live programme (Gantt chart) shared with the client and project manager, with weekly progress reporting. Force majeure events are handled through our standard contract terms.' },
    ],
  },
  {
    category: 'Client Portal & Admin',
    items: [
      { q: 'What is the OSG Client Portal?', a: 'The Client Portal is a secure online dashboard where project clients can track real-time progress milestones, view site photos, access documents including invoices and quality certificates, and communicate with the OSG project team.' },
      { q: 'How do I access the client portal?', a: 'Your dedicated project coordinator will send you a portal invitation by email once your contract is signed. The portal is web-based and works on all devices — no app download required.' },
      { q: 'Can I submit snags or variations through the portal?', a: 'Yes. The portal includes a variation request and snag logging module. Our team will respond to all submissions within 24 hours during working hours.' },
    ],
  },
];

export default function FAQsPage() {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpenMap(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <PageHero
        label="Support"
        title="Frequently Asked"
        titleHighlight="Questions."
        subtitle="Answers to the most common questions from clients, architects, and procurement teams about our services, quoting process, and project delivery."
        ctaPrimary={{ label: 'Contact Our Team', href: '/contact' }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]}
        centered
      />

      <section className="section-padding bg-osg-navy">
        <div className="container-osg max-w-4xl mx-auto">
          {faqs.map((cat, ci) => (
            <Reveal key={cat.category} delay={ci * 0.05} className="mb-12">
              <h2 className="text-heading-md text-osg-gold mb-6 pb-4 border-b border-white/8">{cat.category}</h2>
              <div className="space-y-2">
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  const open = !!openMap[key];
                  return (
                    <div key={key} className="card-glass overflow-hidden">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between p-6 text-left gap-4 group"
                      >
                        <span className={`text-body font-medium transition-colors ${open ? 'text-osg-gold' : 'text-white group-hover:text-osg-gold'}`}>{item.q}</span>
                        <ChevronDown
                          size={18}
                          className={`text-osg-gold flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="px-6 pb-6 text-body text-osg-slate leading-relaxed">{item.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="card-gold-outline p-8 text-center">
              <h3 className="text-heading-md text-white mb-3">Still have questions?</h3>
              <p className="text-body text-osg-slate mb-6">Our team is available Monday – Friday, 8am – 6pm EAT.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Contact Us</Link>
                <a href="https://wa.me/256767358604" target="_blank" rel="noreferrer" className="btn-outline">WhatsApp Chat</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

