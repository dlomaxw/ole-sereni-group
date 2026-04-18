'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Download, 
  ArrowRight, 
  FileText,
  MessageSquare,
  MoreVertical,
  Calendar,
  Layers,
  FileSearch,
  ExternalLink,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Layout,
  Construction,
  Check,
  CalendarDays,
  Image as ImageIcon
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';

export default function ClientDashboardPage() {
  const { osgUser } = useAuth();

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-10 pb-12 border-b border-osg-navy/5">
        <div className="max-w-2xl">
          <nav className="flex items-center gap-3 text-[9px] font-black text-osg-gold uppercase tracking-[0.4em] mb-6">
            <TrendingUp size={12} />
            <span>Operational Context</span>
          </nav>
          <h1 className="text-5xl font-serif font-black text-osg-navy tracking-tight uppercase leading-[0.9] mb-4">
            Zenith Tower <span className="text-osg-gold">Exterior</span>
          </h1>
          <p className="text-[11px] font-bold text-osg-navy/50 uppercase tracking-[0.2em] leading-relaxed">
            Phase 04: Advanced Glazing & Structural Sealing. <br />
            Current Deployment Status: 75% Certified Completion.
          </p>
        </div>
        
        <div className="flex gap-8">
          <div className="text-right">
            <p className="text-[9px] font-black text-osg-navy/30 uppercase tracking-[0.4em] mb-1">Next Milestone</p>
            <p className="text-xs font-black text-osg-gold uppercase tracking-widest">Roofing Systems Inst.</p>
          </div>
          <div className="w-[1px] h-10 bg-osg-navy/10"></div>
          <div className="text-right">
            <p className="text-[9px] font-black text-osg-navy/30 uppercase tracking-[0.4em] mb-1">Target Handover</p>
            <p className="text-xs font-black text-osg-navy uppercase tracking-widest">October 2024</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
        
        {/* Left Column: Progress & Timeline */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Project Progression (Horizontal Timeline) */}
          <div className="bg-white p-12 border border-osg-navy/5 shadow-[0_32px_64px_rgba(10,22,40,0.04)] relative overflow-hidden group">
            {/* Background Architectural Watermark */}
            <div className="absolute -right-10 -bottom-10 opacity-[0.02] pointer-events-none translate-y-1/4 group-hover:translate-y-0 transition-transform duration-1000">
               <Layers size={300} />
            </div>

            <div className="flex justify-between items-center mb-16 relative z-10">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-osg-navy flex items-center justify-center text-osg-gold">
                    <Construction size={20} />
                 </div>
                 <h3 className="text-[10px] font-black text-osg-navy uppercase tracking-[0.4em]">Project Progression</h3>
              </div>
              <div className="px-4 py-2 bg-osg-gold/10 border border-osg-gold/20 rounded-full">
                 <span className="text-[8px] font-black text-osg-gold uppercase tracking-widest">Action: Structural Signoff Required</span>
              </div>
            </div>

            <div className="relative z-10">
               {/* Timeline Track */}
               <div className="absolute top-6 left-0 w-full h-[1px] bg-osg-navy/5"></div>
               <div className="absolute top-6 left-0 w-[75%] h-[1px] bg-osg-gold"></div>

               <div className="flex justify-between relative">
                  {[
                    { label: 'Foundation', status: 'Complete', date: 'Jan 12', active: false, done: true, icon: Check },
                    { label: 'Superstructure', status: 'Complete', date: 'Mar 05', active: false, done: true, icon: Check },
                    { label: 'Internal Works', status: 'In Progress', date: 'Ongoing', active: true, done: false, icon: Construction },
                    { label: 'Handover', status: 'Upcoming', date: 'Oct 15', active: false, done: false, icon: Clock },
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center group/step">
                       <div className={`
                          w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 z-10 mb-4
                          ${step.done ? 'bg-osg-gold text-osg-navy shadow-lg shadow-osg-gold/20' : step.active ? 'bg-osg-navy text-white shadow-2xl scale-125 ring-[12px] ring-white' : 'bg-osg-cream text-osg-navy/20'}
                       `}>
                          <step.icon size={18} />
                       </div>
                       <span className={`text-[9px] font-black uppercase tracking-widest mb-1 ${step.active || step.done ? 'text-osg-navy' : 'text-osg-navy/30'}`}>{step.label}</span>
                       <span className={`text-[7px] font-bold uppercase tracking-widest ${step.active ? 'text-osg-gold animate-pulse' : 'text-osg-navy/20'}`}>{step.status}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Media Context Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="relative aspect-[16/10] overflow-hidden group">
                 <Image 
                   src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                   alt="Site North" 
                   fill
                   sizes="(max-width: 768px) 100vw, 50vw"
                   className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 cursor-zoom-in" 
                 />
                <div className="absolute inset-0 bg-osg-navy/20 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute top-6 left-6 flex items-center gap-3">
                   <div className="w-8 h-8 bg-osg-gold flex items-center justify-center">
                      <ImageIcon size={14} className="text-osg-navy" />
                   </div>
                   <span className="text-[10px] font-black text-white uppercase tracking-widest drop-shadow-lg">North Wing Elevation</span>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                   <button className="bg-white/10 backdrop-blur-md border border-white/20 p-4 text-white hover:bg-white hover:text-osg-navy transition-all">
                      <ArrowUpRight size={16} />
                   </button>
                </div>
             </div>

             <div className="relative aspect-[16/10] overflow-hidden group">
                 <Image 
                   src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" 
                   alt="Internal Shell" 
                   fill
                   sizes="(max-width: 768px) 100vw, 50vw"
                   className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 cursor-zoom-in" 
                 />
                <div className="absolute inset-0 bg-osg-navy/20 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute top-6 left-6 flex items-center gap-3">
                   <div className="w-8 h-8 bg-osg-navy flex items-center justify-center border border-osg-gold/50">
                      <ImageIcon size={14} className="text-osg-gold" />
                   </div>
                   <span className="text-[10px] font-black text-white uppercase tracking-widest drop-shadow-lg">Master Penthouse Shell</span>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                   <button className="bg-white/10 backdrop-blur-md border border-white/20 p-4 text-white hover:bg-white hover:text-osg-navy transition-all">
                      <ArrowUpRight size={16} />
                   </button>
                </div>
             </div>
          </div>

          {/* Document Center */}
          <div className="bg-white/80 backdrop-blur-xl border border-osg-navy/5 p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-osg-gold/[0.02] rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-osg-navy/5 relative z-10">
              <div className="flex items-center gap-3">
                <FileSearch size={14} className="text-osg-gold" />
                <h3 className="text-[10px] font-black text-osg-navy uppercase tracking-[0.3em]">Document Repository</h3>
              </div>
              <button className="text-[9px] font-black text-osg-gold hover:text-osg-navy uppercase tracking-widest transition-colors flex items-center gap-2">
                Request Vault Access <ArrowUpRight size={12} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {[
                { name: 'Project_BOQ_Final.xlsx', size: '1.2 MB', icon: Layers, type: 'Financial' },
                { name: 'Structural_Plan_V4.dwg', size: '42.5 MB', icon: FileText, type: 'Technical' },
                { name: 'FEA_Analysis_Report.pdf', size: '8.4 MB', icon: FileSearch, type: 'Safety' },
                { name: 'Material_Schedule.pdf', size: '2.1 MB', icon: Calendar, type: 'Logistics' },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white border border-osg-navy/5 hover:border-osg-gold/30 hover:shadow-2xl hover:-translate-y-1 group transition-all duration-500">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-osg-cream flex items-center justify-center group-hover:bg-osg-navy/5 transition-colors">
                      <doc.icon size={20} className="text-osg-navy/40 group-hover:text-osg-navy transition-colors" />
                    </div>
                    <div>
                      <span className="text-[7px] font-black text-osg-gold uppercase tracking-[0.2em]">{doc.type}</span>
                      <p className="text-[10px] font-bold text-osg-navy uppercase tracking-widest truncate max-w-[140px] mt-1">{doc.name}</p>
                      <p className="text-[8px] font-bold text-osg-navy/20 uppercase mt-0.5">{doc.size}</p>
                    </div>
                  </div>
                  <button className="p-3 text-osg-navy/20 hover:text-osg-navy hover:bg-osg-cream transition-all rounded-full">
                    <Download size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Expert & Messages */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Assigned Expert Panel */}
          <div className="bg-osg-navy text-white p-16 relative overflow-hidden group">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-noise opacity-10"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="relative mb-10">
                 <div className="w-32 h-32 bg-white/5 border border-osg-gold/30 p-1 grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                      alt="Expert" 
                      fill
                      sizes="128px"
                      className="object-cover" 
                    />
                 </div>
                 {/* Decorative Corner Accent */}
                 <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-osg-gold"></div>
              </div>
              
              <h4 className="text-2xl font-serif font-black tracking-tight leading-none mb-2">Elena Sterling</h4>
              <p className="text-[9px] font-black text-osg-gold uppercase tracking-[0.6em] mb-12">Lead Project Strategist</p>
              
              <div className="w-full space-y-5 pt-10 border-t border-white/5">
                <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
                  <span className="opacity-30">Operational Desk</span>
                  <span className="text-osg-gold">Connected (Live)</span>
                </div>
                <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
                  <span className="opacity-30">Technical Response</span>
                  <span>&lt; 2 Hours</span>
                </div>
              </div>

              <button className="w-full bg-white text-osg-navy hover:bg-osg-gold py-6 mt-14 text-[9px] font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 group/btn">
                <MessageSquare size={14} className="group-hover/btn:scale-125 transition-transform" /> 
                Open Operational Tunnel
              </button>
            </div>
          </div>

          {/* Site Logs Card */}
          <div className="bg-white border border-osg-navy/5 p-12 shadow-xl shadow-osg-navy/5">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-osg-navy/5">
              <CalendarDays size={16} className="text-osg-gold" />
              <h3 className="text-[10px] font-black text-osg-navy uppercase tracking-[0.4em]">Audit Trail</h3>
            </div>
            
            <div className="space-y-8">
              {[
                { event: 'Structural Anchor Report Uploaded', time: '2h ago', level: 'technical' },
                { event: 'Phase 03 QA Integration Passed', time: 'Yesterday', level: 'verification' },
                { event: 'Material Logistics Verified', time: '3 Oct 2024', level: 'logistics' },
              ].map((log, i) => (
                <div key={i} className="flex gap-6 items-start group/log cursor-pointer">
                  <div className="w-[2px] h-10 bg-osg-navy/5 group-hover/log:bg-osg-gold transition-colors"></div>
                  <div>
                    <h5 className="text-[10px] font-black text-osg-navy uppercase tracking-widest mb-1">{log.event}</h5>
                    <div className="flex items-center gap-3">
                       <span className="text-[7px] font-black text-osg-gold uppercase tracking-widest">{log.level}</span>
                       <span className="text-[8px] font-bold text-osg-navy/20 uppercase">{log.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-12 py-4 border border-osg-navy/10 text-osg-navy/40 hover:text-osg-navy hover:bg-osg-navy/5 transition-all text-[9px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3">
               Full Operational Logs <ExternalLink size={12} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
