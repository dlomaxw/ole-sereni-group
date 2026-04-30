'use client';

import { motion } from 'framer-motion';
import { 
  Check, 
  Construction, 
  Clock, 
  ChevronRight, 
  ImageIcon, 
  FileText, 
  Play, 
  Palette, 
  Download,
  Headset,
  DraftingCompass
} from 'lucide-react';

const milestones = [
  {
    title: 'Foundation & Site Preparation',
    date: 'Oct 24, 2023 — Dec 12, 2023',
    description: 'Detailed excavation, soil stabilization, and reinforced concrete foundation pouring. All structural benchmarks verified by independent engineering consultants.',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop',
    links: [
      { label: 'SITE PHOTOS', icon: ImageIcon },
      { label: 'TECHNICAL REPORT', icon: FileText }
    ]
  },
  {
    title: 'Structural Framing & MEP Rough-in',
    date: 'Est. Completion: March 2024',
    description: 'Vertical structural elements reached the 4th level. Mechanical, Electrical, and Plumbing (MEP) systems are currently being integrated within the structural framework.',
    status: 'active',
    progress: 42,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    activePhase: 'Current Phase Progress',
    videoLink: true
  },
  {
    title: 'Interior Finishes & Landscaping',
    date: 'Est. Start: April 2024',
    description: 'Installation of premium Italian marble, custom millwork, and the sustainable exterior green-scaping. Procurement of all interior materials is 90% complete.',
    status: 'upcoming'
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[9px] font-black text-osg-gold uppercase tracking-[0.4em] mb-10">
        <span className="opacity-40">Portal</span>
        <ChevronRight size={10} className="opacity-20" />
        <span className="opacity-40">Active Projects</span>
        <ChevronRight size={10} className="opacity-20" />
        <span className="text-osg-navy">Serenity Heights Residential</span>
      </nav>

      {/* Page Header */}
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-sans font-black text-osg-navy tracking-tighter mb-6 leading-[0.85] uppercase">
            Project <br /> <span className="text-osg-gold">Milestones</span>
          </h1>
          <p className="text-[11px] font-bold text-osg-navy/50 leading-relaxed uppercase tracking-widest max-w-md">
            A granular overview of your architectural journey. Track structural progress, technical systems integration, and bespoke interior finishes in real-time.
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-xl border border-osg-navy/5 p-10 min-w-[300px] shadow-2xl shadow-osg-navy/5">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-osg-gold mb-3">Overall Progress</p>
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-sans font-black text-osg-navy">68%</span>
            <span className="text-[9px] font-black text-osg-navy/30 uppercase tracking-widest">Ahead of schedule</span>
          </div>
          <div className="w-full bg-osg-navy/5 h-1 mt-6">
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: '68%' }}
               transition={{ duration: 1.5, ease: 'easeOut' }}
               className="bg-osg-gold h-full" 
            />
          </div>
        </div>
      </header>

      {/* Milestone Timeline */}
      <section className="relative">
        {/* Vertical Line */}
        <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-osg-navy/5 hidden md:block"></div>

        <div className="space-y-24 relative">
          {milestones.map((milestone, idx) => (
            <div key={idx} className={`relative pl-0 md:pl-28 group ${milestone.status === 'upcoming' ? 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700' : ''}`}>
              {/* Marker */}
              <div className={`
                absolute left-10 top-0 hidden md:flex items-center justify-center w-5 h-5 rounded-full z-10 -translate-x-2.5 translate-y-2
                ${milestone.status === 'completed' ? 'bg-osg-navy text-osg-gold' : milestone.status === 'active' ? 'bg-osg-gold text-osg-navy ring-8 ring-osg-gold/10' : 'bg-osg-cream border border-osg-navy/10'}
              `}>
                {milestone.status === 'completed' && <Check size={12} />}
                {milestone.status === 'active' && <div className="w-1.5 h-1.5 bg-osg-navy rounded-full animate-pulse" />}
              </div>

              <div className={`
                bg-white p-10 border border-osg-navy/5 transition-all duration-500 hover:shadow-3xl
                ${milestone.status === 'active' ? 'border-l-4 border-l-osg-gold shadow-2xl' : ''}
              `}>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1.5 ${milestone.status === 'active' ? 'bg-osg-navy text-white' : 'bg-osg-gold/10 text-osg-gold'}`}>
                        {milestone.status === 'completed' ? 'Certified Complete' : milestone.status === 'active' ? 'Operational Phase' : 'Future Milestone'}
                      </span>
                      <span className="text-[9px] font-bold text-osg-navy/30 uppercase tracking-widest">{milestone.date}</span>
                    </div>

                    <h3 className="text-3xl font-sans font-black text-osg-navy mb-4 tracking-tight uppercase leading-none">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-xs text-osg-navy/50 leading-relaxed mb-10 max-w-xl">
                      {milestone.description}
                    </p>

                    {milestone.progress && (
                       <div className="mb-10 max-w-sm">
                          <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-3">
                            <span className="text-osg-navy/40">{milestone.activePhase}</span>
                            <span className="text-osg-gold">{milestone.progress}%</span>
                          </div>
                          <div className="w-full bg-osg-navy/5 h-1">
                            <div className="bg-osg-gold h-full" style={{ width: `${milestone.progress}%` }}></div>
                          </div>
                       </div>
                    )}

                    {milestone.links && (
                      <div className="flex flex-wrap gap-6 pt-4 border-t border-osg-navy/5">
                        {milestone.links.map((link, lIdx) => (
                          <button key={lIdx} className="flex items-center gap-3 text-[9px] font-black text-osg-navy hover:text-osg-gold transition-colors uppercase tracking-widest">
                            <link.icon size={14} className="opacity-40" /> {link.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {milestone.image && (
                    <div className="lg:w-1/3 group/img relative overflow-hidden aspect-video lg:aspect-square bg-osg-cream">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title} 
                        className="w-full h-full object-cover grayscale opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-1000" 
                      />
                      {milestone.videoLink && (
                         <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-osg-navy hover:bg-osg-gold transition-all shadow-2xl">
                               <Play size={24} fill="currentColor" />
                            </button>
                         </div>
                      )}
                    </div>
                  )}

                  {!milestone.image && milestone.status === 'upcoming' && (
                     <div className="lg:w-1/3 flex items-center justify-center border-2 border-dashed border-osg-navy/5 bg-osg-cream/50 min-h-[200px]">
                        <div className="text-center space-y-3">
                           <Palette size={32} className="mx-auto text-osg-navy/10" />
                           <p className="text-[8px] font-black text-osg-navy/20 uppercase tracking-[0.4em]">Design Finalization Pending</p>
                        </div>
                     </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intelligence Grid */}
      <section className="mt-40">
        <h2 className="text-4xl font-sans font-black text-osg-navy mb-12 tracking-tighter uppercase leading-none">
           Project <span className="text-osg-gold">Intelligence</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-osg-navy text-white p-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-noise opacity-10"></div>
            <div className="relative z-10">
              <span className="text-osg-gold font-black text-[9px] uppercase tracking-[0.6em] mb-6 block">Resource Vault</span>
              <h4 className="text-4xl font-sans font-black mb-6 uppercase tracking-tight leading-[0.9]">Complete Architectural <br /> CAD Specifications</h4>
              <p className="text-white/40 text-[11px] font-medium leading-relaxed uppercase tracking-widest max-w-md mb-12">
                Access the master architectural set including all BIM revisions and structural overlays. Sync live with site engineering data.
              </p>
              <button className="btn-primary flex items-center gap-4 group/dl">
                 <Download size={16} className="group-hover/dl:translate-y-1 transition-transform" /> Initialize Master Download
              </button>
            </div>
            <div className="absolute -right-20 -bottom-20 pointer-events-none opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-1000">
               <DraftingCompass size={400} />
            </div>
          </div>

          <div className="bg-osg-offwhite p-12 flex flex-col justify-between border border-osg-navy/5 shadow-2xl shadow-osg-navy/5">
            <div>
              <span className="text-osg-gold font-black text-[9px] uppercase tracking-[0.6em] mb-6 block">Concierge Desk</span>
              <h4 className="text-2xl font-sans font-black text-osg-navy mb-4 uppercase leading-none">Concierge <br /> Architect</h4>
              <p className="text-[10px] font-bold text-osg-navy/40 uppercase tracking-widest leading-relaxed">
                Direct encrypted line for technical modifications or design inquiries.
              </p>
            </div>
            
            <div className="mt-20 pt-10 border-t border-osg-navy/5">
               <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-osg-navy flex items-center justify-center text-white">
                     <Headset size={24} className="text-osg-gold" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-osg-navy uppercase tracking-widest mb-1">Request Audio Session</p>
                     <p className="text-[8px] font-bold text-osg-navy/30 uppercase">Available 09:00 — 17:00 EAT</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

