'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Search, 
  Loader2, 
  MoreHorizontal,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Filter,
  Activity,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { getCRMLeads, ERPLead } from '@/lib/api/erp';
import Reveal from '@/components/Reveal';

export default function OnlineRequestsPage() {
  const [requests, setRequests] = useState<ERPLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRequests() {
      try {
        const data = await getCRMLeads();
        // Filter leads from internal Website/API source
        const onlineOnly = data.filter(l => l.status === 'Lead' || l.territory === 'Website');
        setRequests(onlineOnly);
      } catch (e) {
        // Fallback
      } finally {
        setLoading(false);
      }
    }
    loadRequests();
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="animate-spin text-osg-gold" size={40} />
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 relative">
      
      {/* 1. ARCHITECTURAL HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-12 border-b border-osg-navy/5">
         <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Online Gateway // Requests</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-sans font-black text-osg-navy tracking-tighter leading-none uppercase">Portal <br/><span className="text-osg-navy/10">Inquiries.</span></h1>
            <p className="text-xl text-osg-navy/40 font-sans leading-relaxed max-w-xl">
              Direct telemetry from the OSG main website and secure client portals.
            </p>
         </div>

         <div className="flex items-center gap-6">
             <div className="bg-white px-8 py-5 rounded-2xl border border-osg-navy/5 flex items-center gap-6 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-navy/40">Live Stream Active</span>
             </div>
         </div>
      </div>

      {/* 2. COMMAND BAR: FILTERS */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 relative group">
           <Search size={20} className="absolute left-8 top-1/2 -translate-y-1/2 text-osg-navy/20 group-focus-within:text-osg-gold transition-colors" />
           <input 
              type="text" 
              placeholder="FILTER REQUESTS BY KEYWORD OR ENCRYPTED PACKET ID..." 
              className="w-full bg-white border border-osg-navy/5 p-8 pl-16 rounded-[2.5rem] text-[12px] font-black outline-none focus:shadow-premium transition-all placeholder:text-osg-navy/20 uppercase tracking-widest"
           />
        </div>
        <button className="p-8 bg-white border border-osg-navy/5 rounded-[2.5rem] text-osg-navy/40 hover:text-osg-gold transition-all hover:shadow-premium">
           <Filter size={24} />
        </button>
      </div>

      {/* 3. REQUESTS GRID: LUXURY DATA TILES */}
      {requests.length === 0 ? (
        <div className="bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium p-32 flex flex-col items-center justify-center text-center space-y-10">
            <div className="w-24 h-24 bg-osg-navy/5 rounded-full flex items-center justify-center text-osg-navy/10">
               <MessageSquare size={56} />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-sans font-black text-osg-navy uppercase">No Requests Detected.</h3>
              <p className="text-lg text-osg-navy/40 font-sans max-w-sm mx-auto">
                The online gateway is active but no matching telemetry was received from the OSG web server.
              </p>
            </div>
        </div>
      ) : (
        <div className="bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium overflow-hidden">
          <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50/50">
                        <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Requester</th>
                        <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Project Interest</th>
                        <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Network Source</th>
                        <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Timestamp</th>
                        <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-osg-navy/5">
                    {requests.map((req, i) => (
                        <tr key={i} className="group hover:bg-[#F8F9FB] transition-all duration-500">
                          <td className="p-10">
                              <div className="flex items-center gap-8">
                                <div className="w-16 h-16 rounded-[1.5rem] bg-[#F8F9FB] border border-gray-100 flex items-center justify-center text-osg-gold shadow-sm relative group-hover:rotate-3 transition-transform duration-500">
                                    <MessageSquare size={28} className="transition-transform group-hover:scale-110" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-sans font-black text-osg-navy mb-1 group-hover:text-osg-gold transition-colors">{req.customer_name}</h4>
                                    <p className="text-[10px] font-black text-osg-navy/30 uppercase tracking-[0.4em]">Inquiry ID: {req.name}</p>
                                </div>
                              </div>
                          </td>
                          <td className="p-10">
                              <span className="text-xl font-sans font-black text-osg-navy/60 group-hover:text-osg-navy transition-colors">
                                Architectural Systems
                              </span>
                          </td>
                          <td className="p-10">
                              <div className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-osg-gold"></div>
                                 <span className="text-[11px] font-black text-osg-navy/60 uppercase tracking-[0.4em] uppercase">{req.territory || 'GLOBAL WEBSITE'}</span>
                              </div>
                          </td>
                          <td className="p-10">
                              <span className="text-[12px] font-black text-osg-navy tracking-widest">{req.creation.split(' ')[0]}</span>
                          </td>
                          <td className="p-10 text-right">
                              <div className="flex items-center justify-end gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/40 hover:text-osg-gold hover:shadow-premium transition-all"><Mail size={20} /></button>
                                <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/40 hover:text-osg-gold hover:shadow-premium transition-all"><ExternalLink size={20} /></button>
                              </div>
                          </td>
                        </tr>
                    ))}
                </tbody>
              </table>
          </div>
        </div>
      )}

      {/* 4. FOOTER NOTE */}
      <div className="pt-12 text-center">
         <p className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.6em]">
            Automated telemetry protocol active // Secure Gateway v4.2.1
         </p>
      </div>

    </div>
  );
}

