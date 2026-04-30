'use client';

import { 
  FileSearch, 
  Download, 
  ChevronRight, 
  Layers, 
  FileText, 
  CalendarDays, 
  ArrowUpRight, 
  ShieldCheck,
  Search,
  Filter
} from 'lucide-react';
import { motion } from 'framer-motion';

const docCategories = [
  {
    title: 'Technical Blueprints',
    docs: [
      { name: 'Project_BOQ_Final.xlsx', size: '1.2 MB', icon: Layers, type: 'Financial', date: '2h ago' },
      { name: 'Structural_Plan_V4.dwg', size: '42.5 MB', icon: FileText, type: 'Technical', date: 'Yesterday' },
      { name: 'FEA_Analysis_Report.pdf', size: '8.4 MB', icon: FileSearch, type: 'Safety', date: '3 Oct 2024' },
      { name: 'Material_Schedule.pdf', size: '2.1 MB', icon: CalendarDays, type: 'Logistics', date: '12 Sep 2024' },
    ]
  },
  {
    title: 'Site Reports & Compliance',
    docs: [
      { name: 'Daily_Log_Feb28.pdf', size: '0.8 MB', icon: FileText, type: 'Report', date: '1h ago' },
      { name: 'QA_Safety_Audit_Q1.pdf', size: '4.2 MB', icon: ShieldCheck, type: 'Compliance', date: 'Yesterday' },
    ]
  }
];

export default function DocumentsPage() {
  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[9px] font-black text-osg-gold uppercase tracking-[0.4em] mb-10">
        <span className="opacity-40">Portal</span>
        <ChevronRight size={10} className="opacity-20" />
        <span className="opacity-40">Workspace</span>
        <ChevronRight size={10} className="opacity-20" />
        <span className="text-osg-navy">Document Repository</span>
      </nav>

      {/* Page Header */}
      <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-sans font-black text-osg-navy tracking-tighter mb-6 leading-[0.85] uppercase">
            Asset <br /> <span className="text-osg-gold">Vault</span>
          </h1>
          <p className="text-[11px] font-bold text-osg-navy/50 leading-relaxed uppercase tracking-widest max-w-sm">
            Centralized technical repository. Access all structural revisions, technical specifications, and compliance certifications.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="relative">
              <input 
                type="text" 
                placeholder="SEARCH REPOSITORY..." 
                className="bg-osg-navy/5 border-none px-6 py-4 text-[9px] font-black uppercase tracking-widest w-64 focus:ring-1 focus:ring-osg-gold outline-none"
              />
              <Search size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-osg-navy/20" />
           </div>
           <button className="p-4 bg-osg-navy text-white hover:bg-osg-gold transition-all">
              <Filter size={16} />
           </button>
        </div>
      </header>

      {/* Vault Action Card */}
      <div className="bg-osg-navy text-white p-12 mb-20 relative overflow-hidden group">
         <div className="absolute inset-0 bg-noise opacity-10"></div>
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-8">
               <div className="w-16 h-16 border-t-2 border-l-2 border-osg-gold flex items-center justify-center">
                  <ShieldCheck size={32} className="text-osg-gold" />
               </div>
               <div>
                  <h3 className="text-2xl font-sans font-black uppercase tracking-tight mb-1">Encrypted CAD Access</h3>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em]">Operational clearance required for live BIM model synchronization.</p>
               </div>
            </div>
            <button className="btn-primary flex items-center gap-4 group/btn">
               Request Vault Clearance <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
         </div>
      </div>

      {/* Document Grid */}
      <div className="space-y-20">
         {docCategories.map((category, idx) => (
           <div key={idx}>
              <div className="flex items-center gap-4 mb-10">
                 <div className="w-8 h-[1px] bg-osg-gold"></div>
                 <h2 className="text-[10px] font-black text-osg-navy uppercase tracking-[0.5em]">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {category.docs.map((doc, dIdx) => (
                   <motion.div 
                     key={dIdx}
                     whileHover={{ y: -5 }}
                     className="bg-white border border-osg-navy/5 p-8 flex items-center justify-between group hover:shadow-2xl transition-all duration-500"
                   >
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-osg-cream flex items-center justify-center text-osg-navy/20 group-hover:bg-osg-navy group-hover:text-osg-gold transition-all">
                           <doc.icon size={24} />
                        </div>
                        <div>
                           <div className="flex items-center gap-3 mb-1">
                              <span className="text-[7px] font-black text-osg-gold uppercase tracking-widest">{doc.type}</span>
                              <span className="text-[7px] font-bold text-osg-navy/20 uppercase tracking-widest">— {doc.date}</span>
                           </div>
                           <h4 className="text-xs font-black text-osg-navy uppercase tracking-widest transition-colors group-hover:text-osg-gold">{doc.name}</h4>
                           <p className="text-[8px] font-bold text-osg-navy/20 uppercase mt-1">{doc.size}</p>
                        </div>
                     </div>
                     <button className="p-4 rounded-full text-osg-navy/20 hover:text-osg-navy hover:bg-osg-cream transition-all">
                        <Download size={18} />
                     </button>
                   </motion.div>
                 ))}
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}

