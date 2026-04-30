'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProperty, Property } from '@/lib/properties-data';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  MapPin, 
  Maximize2, 
  Building2, 
  ShieldCheck, 
  Zap,
  Play,
  CheckCircle2,
  Share2,
  Heart
} from 'lucide-react';
import { notFound } from 'next/navigation';

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const [property, setProperty] = useState<Property | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    getProperty(params.slug).then(data => {
      if (!data) notFound();
      setProperty(data);
    });
  }, [params.slug]);

  if (!property) return null;

  return (
    <main className="bg-osg-bg min-h-screen pb-32">
      {/* --- TOP NAV / BREADCRUMB --- */}
      <nav className="glass-nav sticky top-0 z-50 h-20 flex items-center">
        <div className="container-clean flex items-center justify-between w-full">
           <Link href="/properties" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-osg-navy/40 hover:text-osg-red transition-colors">
              <ArrowLeft size={14} /> All Properties
           </Link>
           <div className="flex items-center gap-6">
              <button className="text-osg-navy/40 hover:text-osg-red transition-colors"><Share2 size={18} /></button>
              <button className="text-osg-navy/40 hover:text-osg-red transition-colors"><Heart size={18} /></button>
              <Link href="/quote" className="btn-cta !px-6 py-2.5 !text-[10px]">Initialize Brief</Link>
           </div>
        </div>
      </nav>

      <div className="container-clean mt-12 space-y-12">
        {/* --- HEADER --- */}
        <header className="space-y-4">
           <div className="flex items-center gap-3">
              <MapPin size={16} className="text-osg-red" />
              <span className="text-[11px] font-black uppercase tracking-widest text-osg-navy/40">{property.location}</span>
           </div>
           <h1 className="text-5xl lg:text-7xl font-black text-osg-navy uppercase tracking-tighter leading-none">
             {property.title}
           </h1>
        </header>

        {/* --- GALLERY & KEY SPECS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           
           {/* Gallery (8 Columns) */}
           <div className="lg:col-span-8 space-y-4">
              <div className="relative h-[400px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-premium group">
                 <Image 
                  src={property.gallery[activeImage]} 
                  alt={property.title} 
                  fill 
                  className="object-cover transition-all duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/40 to-transparent">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-osg-navy">
                      Phase: {property.status}
                    </span>
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                 {property.gallery.map((img, i) => (
                   <button 
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 transition-all ${activeImage === i ? 'ring-4 ring-osg-red scale-95' : 'opacity-40 hover:opacity-100'}`}
                   >
                      <Image src={img} alt="" fill className="object-cover" />
                   </button>
                 ))}
              </div>
           </div>

           {/* Sidebar Component (4 Columns) */}
           <aside className="lg:col-span-4 space-y-8">
              <div className="card-clean h-full flex flex-col justify-between">
                 <div className="space-y-8">
                    <h3 className="text-xs font-black uppercase tracking-widest text-osg-navy/30 border-b border-osg-navy/5 pb-4">Technical Summary</h3>
                    
                    <div className="space-y-6">
                       {property.specs.map((spec, i) => (
                         <div key={i} className="flex items-center justify-between">
                            <span className="text-[11px] font-black uppercase tracking-widest text-osg-navy/40">{spec.label}</span>
                            <span className="text-sm font-black text-osg-navy">{spec.value}</span>
                         </div>
                       ))}
                       <div className="flex items-center justify-between border-t border-osg-navy/5 pt-6">
                          <span className="text-[11px] font-black uppercase tracking-widest text-osg-navy/40">Total area</span>
                          <span className="text-2xl font-black text-osg-navy">{property.area}</span>
                       </div>
                    </div>
                 </div>

                 <div className="pt-12">
                    <div className="bg-osg-navy p-8 rounded-3xl text-white space-y-6">
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] text-osg-gold">Commercial Offering</p>
                       <p className="text-3xl font-black">{property.price}</p>
                       <Link href="/quote" className="btn-cta w-full text-[11px] !py-4 shadow-none">Request Full Catalog</Link>
                    </div>
                 </div>
              </div>
           </aside>
        </div>

        {/* --- DESCRIPTION & VIDEO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-20">
           
           <div className="lg:col-span-8 space-y-16">
              <section className="space-y-8">
                 <h2 className="text-3xl font-black text-osg-navy uppercase tracking-tight">Project Narrative</h2>
                 <p className="text-xl text-osg-navy/60 leading-relaxed">
                   "{property.description}"
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                    <div className="card-clean bg-osg-bg border-none flex flex-col gap-4">
                       <ShieldCheck size={32} className="text-osg-red" />
                       <h4 className="text-sm font-black uppercase tracking-widest">Structural Integrity</h4>
                       <p className="text-xs text-osg-navy/40 font-medium">All glass systems installed in the {property.title} have passed extreme wind-load and safety testing.</p>
                    </div>
                    <div className="card-clean bg-osg-bg border-none flex flex-col gap-4">
                       <Zap size={32} className="text-osg-gold" />
                       <h4 className="text-sm font-black uppercase tracking-widest">Performance Bridge</h4>
                       <p className="text-xs text-osg-navy/40 font-medium">Equipped with the proprietary V8 Thermal Bridge technology for maximum energy efficiency.</p>
                    </div>
                 </div>
              </section>

              {/* Video Walkthrough (Kia Inspired) */}
              {property.videoUrl && (
                <section className="space-y-8">
                  <div className="flex items-center gap-4">
                     <Play size={24} className="text-osg-red" />
                     <h2 className="text-3xl font-black text-osg-navy uppercase tracking-tight">Walkthrough</h2>
                  </div>
                  <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-osg-navy">
                     <iframe 
                      src={property.videoUrl} 
                      className="absolute inset-0 w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    />
                  </div>
                </section>
              )}
           </div>

           <div className="lg:col-span-4 lg:pl-12 space-y-12">
              <section className="space-y-8">
                 <h3 className="text-xs font-black uppercase tracking-widest text-osg-navy border-b border-osg-navy/5 pb-4">Architectural Features</h3>
                 <ul className="space-y-6">
                    {property.features.map((f, i) => (
                      <li key={i} className="flex gap-4">
                         <div className="flex-shrink-0 w-6 h-6 rounded-full bg-osg-red/10 flex items-center justify-center text-osg-red">
                            <CheckCircle2 size={14} />
                         </div>
                         <span className="text-sm font-bold text-osg-navy/70">{f}</span>
                      </li>
                    ))}
                 </ul>
              </section>

              <div className="card-clean bg-osg-gold/5 border-osg-gold/20 p-10">
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-osg-gold mb-4">Official Certification</h4>
                 <p className="text-xs font-bold text-osg-navy/60 leading-relaxed uppercase tracking-widest">
                   Every property in our portfolio is verified for architectural modernist standards and engineering precision by the OSG Group.
                 </p>
              </div>
           </div>

        </div>
      </div>
    </main>
  );
}
