'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Activity, 
  Plus,
  Zap,
  Layout,
  PieChart,
  ArrowUpRight,
  Clock,
  Play,
  Square,
  MoreHorizontal,
  Video,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { subscribeToLeads } from '@/lib/api/leads';

export default function AdminDashboardPage() {
  const [leadCount, setLeadCount] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribeToLeads((leads) => {
      setLeadCount(leads.length);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* Top Metric Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Projects', value: '24', icon: Layout, color: 'bg-osg-navy text-white' },
          { label: 'Ended Projects', value: '10', icon: CheckCircle2, color: 'bg-white text-osg-navy' },
          { label: 'Running Projects', value: '12', icon: Activity, color: 'bg-white text-osg-navy' },
          { label: 'Pending Project', value: '2', icon: AlertCircle, color: 'bg-white text-osg-navy' },
        ].map((stat, i) => (
          <div key={i} className={`${stat.color} p-8 rounded-[2rem] shadow-sm border border-osg-navy/5 flex flex-col justify-between group hover:shadow-xl transition-all h-60`}>
            <div className="flex justify-between items-start">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color === 'bg-osg-navy text-white' ? 'bg-white/10' : 'bg-osg-cream/30'}`}>
                <stat.icon size={20} className={stat.color === 'bg-osg-navy text-white' ? 'text-osg-gold' : 'text-osg-navy'} />
              </div>
              <button className={`w-10 h-10 rounded-full flex items-center justify-center border ${stat.color === 'bg-osg-navy text-white' ? 'border-white/20 hover:bg-white/10' : 'border-osg-navy/10 hover:bg-osg-cream/30'} transition-all`}>
                <ArrowUpRight size={16} />
              </button>
            </div>
            <div>
              <h4 className="text-5xl font-serif font-black mb-2 tracking-tighter">{stat.value}</h4>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Project Analytics Card */}
        <div className="lg:col-span-8 bg-white p-10 rounded-[2.5rem] border border-osg-navy/5 shadow-sm space-y-10 group">
          <div className="flex justify-between items-center">
            <h3 className="text-[13px] font-black uppercase tracking-[0.4em] text-osg-navy">Project Analytics</h3>
            <div className="flex gap-2">
                 {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <span key={i} className="w-8 h-8 flex items-center justify-center text-[10px] font-black text-osg-navy/20">{day}</span>
                 ))}
            </div>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-4 px-2">
            {[35, 60, 45, 90, 75, 55, 40].map((height, i) => (
              <div key={i} className="relative flex-1 group/bar">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  className={`w-full rounded-full transition-all duration-700 ${
                    i === 3 ? 'bg-osg-navy' : 
                    i % 2 === 0 ? 'bg-osg-gold/20 hover:bg-osg-gold transition-colors' : 
                    'bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(10,22,40,0.05)_5px,rgba(10,22,40,0.05)_10px)] border border-osg-navy/5'
                  }`}
                />
                {i === 3 && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-osg-gold text-osg-navy px-2 py-1 text-[9px] font-black rounded-lg shadow-lg">75%</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reminders Card */}
        <div className="lg:col-span-4 bg-white p-10 rounded-[2.5rem] border border-osg-navy/5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] opacity-40">Next Sequence</h3>
              <MoreHorizontal size={18} className="opacity-20" />
            </div>
            <h4 className="text-2xl font-serif font-black text-osg-navy leading-tight mb-4 italic">Meeting with <br/> Architectural Board</h4>
            <p className="text-[10px] font-bold text-osg-navy/40 uppercase tracking-widest">Time: 02.00 pm - 04.00 pm</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex -space-x-4">
              {[1,2,3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-osg-cream">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}`} alt="User" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-osg-gold flex items-center justify-center text-[10px] font-black text-osg-navy">+12</div>
            </div>
            <button className="w-full bg-osg-navy text-white rounded-[1.5rem] py-5 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-widest hover:bg-osg-gold hover:text-osg-navy transition-all shadow-xl shadow-osg-navy/10">
              <Video size={18} /> Start Digital Brief
            </button>
          </div>
        </div>

        {/* Bottom Bento Row */}
        <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Team Collaboration */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-osg-navy/5 shadow-sm">
             <div className="flex justify-between items-center mb-10">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-osg-navy">Team Collaboration</h3>
                <button className="text-[18px] text-osg-navy/20 hover:text-osg-gold transition-colors"><Plus size={24} /></button>
             </div>
             <div className="space-y-6">
                {[
                  { name: 'Elena Sterling', task: 'Lead Project Strategist', status: 'Active', color: 'bg-green-100 text-green-700' },
                  { name: 'Marcus Chen', task: 'Structural Engineer', status: 'Review', color: 'bg-osg-gold/20 text-osg-gold' },
                  { name: 'Sarah J.', task: 'Logistics Manager', status: 'Pending', color: 'bg-osg-cream text-osg-navy/40' },
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-osg-cream overflow-hidden">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} alt="Member" />
                        </div>
                        <div>
                            <p className="text-[12px] font-black text-osg-navy uppercase tracking-tighter leading-none mb-1">{member.name}</p>
                            <p className="text-[9px] font-bold text-osg-navy/30 uppercase tracking-widest">{member.task}</p>
                        </div>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest ${member.color}`}>
                        {member.status}
                    </span>
                  </div>
                ))}
             </div>
          </div>

          {/* Project Progress Gauge */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-osg-navy/5 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-osg-navy mb-12 relative z-10">Deployment Phase</h3>
              
              <div className="relative w-48 h-24 mb-6">
                <svg className="w-48 h-48 transform -rotate-180" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#f0f2f0" strokeWidth="8" strokeDasharray="141.37" strokeDashoffset="0" />
                  <motion.circle 
                    cx="50" cy="50" r="45" fill="none" stroke="#A8781E" strokeWidth="8" 
                    strokeDasharray="141.37" 
                    initial={{ strokeDashoffset: 141.37 }}
                    animate={{ strokeDashoffset: 141.37 * (1 - 0.75) }}
                    transition={{ duration: 2, ease: "circOut" }}
                  />
                </svg>
                <div className="absolute top-1/2 left-0 right-0 transform translate-y-2 flex flex-col items-center">
                    <span className="text-4xl font-serif font-black text-osg-navy leading-none">75%</span>
                    <span className="text-[8px] font-black text-osg-navy/20 uppercase tracking-[0.3em] mt-2">Certified</span>
                </div>
              </div>
              <p className="text-[10px] font-bold text-osg-navy/30 uppercase tracking-[0.4em] mt-2 relative z-10 italic">Glazing Integrity Pass</p>
          </div>

          {/* Time Tracker Card */}
          <div className="bg-osg-navy p-10 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute -left-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-2000">
                  <PieChart size={300} className="text-white" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-white/30 mb-8">System Uptime</h3>
                  
                  <div className="mb-10">
                    <p className="text-5xl font-serif font-black text-osg-gold tracking-tighter leading-none mb-4">01:24:08</p>
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Live Feed Active //</p>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-white/10 hover:bg-white text-white hover:text-osg-navy p-4 rounded-3xl flex items-center justify-center transition-all">
                        <Play size={18} fill="currentColor" />
                    </button>
                    <button className="flex-1 bg-white/10 hover:bg-osg-gold text-white hover:text-osg-navy p-4 rounded-3xl flex items-center justify-center transition-all">
                        <Square size={18} fill="currentColor" />
                    </button>
                  </div>
              </div>
          </div>

        </div>

      </div>
    </div>
  );
}
