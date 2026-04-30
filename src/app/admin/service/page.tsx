'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Search, 
  Plus, 
  Loader2, 
  MoreHorizontal,
  Wrench,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  Terminal,
  ShieldCheck,
  ChevronRight,
  Filter,
  ArrowRight,
  Download,
  Activity,
  MapPin
} from 'lucide-react';
import { getServiceVisits } from '@/lib/api/erp';
import AdminQuickActionModal from '@/components/admin/AdminQuickActionModal';
import { downloadCsv } from '@/lib/admin-actions';

export default function ServicePage() {
  const [visits, setVisits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await getServiceVisits();
        setVisits(data);
      } catch (e) {
        // Fallback
      } finally {
        setLoading(false);
      }
    }
    loadServices();
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="animate-spin text-osg-gold" size={40} />
      </div>
    );
  }

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-32 relative">
      
      {/* 1. ARCHITECTURAL HEADER: SERVICE OPERATIONS */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-12 border-b border-osg-navy/5">
        <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Enterprise HQ // Service Center</span>
            </div>
            <h1 className="text-5xl lg:text-[7rem] font-sans font-black text-osg-navy tracking-tighter leading-[0.8] uppercase">Service <br/><span className="text-osg-navy/10">Operations.</span></h1>
            <p className="text-xl text-osg-navy/40 font-sans leading-relaxed max-w-xl">
               Management of scheduled maintenance protocols, technical service visits, and specialized architectural installations.
            </p>
        </div>

        <div className="flex items-center gap-6">
             <button onClick={() => setIsModalOpen(true)} className="btn-cta !px-12 py-6 !text-[11px] shadow-premium">
                <Plus size={20} className="mr-2" /> SCHEDULE SERVICE VISIT
             </button>
        </div>
      </div>

      {/* 2. COMMAND BAR: SEARCH & FILTERS */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 relative group">
           <Search size={20} className="absolute left-8 top-1/2 -translate-y-1/2 text-osg-navy/20 group-focus-within:text-osg-gold transition-colors" />
           <input 
              type="text" 
              placeholder="FILTER BY BOOKING ID, CUSTOMER OR ARCHITECTURAL SITE..." 
              className="w-full bg-white border border-osg-navy/5 p-8 pl-16 rounded-[2.5rem] text-[12px] font-black outline-none focus:shadow-premium transition-all placeholder:text-osg-navy/20 uppercase tracking-widest"
           />
        </div>
        <div className="flex gap-6">
           <button onClick={() => downloadCsv('osg-service-schedule.csv', visits)} className="flex items-center gap-6 px-12 py-8 rounded-[2.5rem] bg-white border border-osg-navy/5 text-osg-navy/60 hover:text-osg-gold transition-all hover:shadow-premium font-black text-[11px] uppercase tracking-[0.4em]">
              <Download size={22} /> EXPORT SCHEDULE
           </button>
           <button className="p-8 bg-white border border-osg-navy/5 rounded-[2.5rem] text-osg-navy/40 hover:text-osg-gold transition-all hover:shadow-premium">
              <Filter size={24} />
           </button>
        </div>
      </div>

      {/* 3. SERVICE GRID: LUXURY BOOKING TILES */}
      <div className="bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-gray-50/50">
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Service Visit ID</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Client / Site</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Timestamp Protocol</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-center">Operational Status</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-osg-navy/5">
                  {visits.map((visit, i) => (
                     <motion.tr 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="group hover:bg-[#F8F9FB] transition-all duration-500 cursor-pointer"
                     >
                        <td className="p-10">
                           <div className="flex items-center gap-8">
                              <div className="w-14 h-14 rounded-2xl bg-[#F8F9FB] border border-osg-navy/5 flex items-center justify-center text-osg-navy/10 group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 shadow-sm relative group-hover:rotate-3">
                                 <Wrench size={24} className="group-hover:scale-110 transition-transform" />
                              </div>
                              <div>
                                 <h4 className="text-2xl font-sans font-black text-osg-navy uppercase tracking-tighter leading-none mb-1 group-hover:text-osg-gold transition-colors">{visit.name}</h4>
                                 <p className="text-[10px] font-black text-osg-navy/30 uppercase tracking-[0.4em] font-sans">Maintenance Check //</p>
                              </div>
                           </div>
                        </td>
                        <td className="p-10">
                           <div className="space-y-1">
                              <p className="text-xl font-sans font-black text-osg-navy/60 group-hover:text-osg-navy transition-colors">{visit.customer}</p>
                              <div className="flex items-center gap-2">
                                 <MapPin size={10} className="text-osg-gold/40" />
                                 <span className="text-[9px] font-black text-osg-navy/20 uppercase tracking-widest">Registered Architectural Site</span>
                              </div>
                           </div>
                        </td>
                        <td className="p-10">
                           <div className="flex flex-col gap-1">
                              <span className="text-[12px] font-black text-osg-navy tracking-widest uppercase font-sans">{visit.mntc_date}</span>
                              <span className="text-[9px] font-black text-osg-navy/30 uppercase tracking-[0.4em]">{visit.mntc_time}</span>
                           </div>
                        </td>
                        <td className="p-10">
                           <div className="flex justify-center">
                              <div className={`flex items-center gap-4 px-6 py-2.5 rounded-full border shadow-sm ${
                                 visit.status === 'Completed' ? 'bg-green-500/10 border-green-500/20 text-green-600' : 
                                 visit.status === 'Cancelled' ? 'bg-osg-navy/5 border-osg-navy/10 text-osg-navy/40' : 
                                 'bg-osg-gold/10 border-osg-gold/20 text-osg-gold'
                              }`}>
                                 <div className={`w-1.5 h-1.5 rounded-full ${visit.status === 'Completed' ? 'bg-green-500' : visit.status === 'Cancelled' ? 'bg-gray-400' : 'bg-osg-gold animate-pulse'}`} />
                                 <span className="text-[9px] font-black uppercase tracking-[0.4em] leading-none">{visit.status}</span>
                              </div>
                           </div>
                        </td>
                        <td className="p-10 text-right">
                           <div className="flex items-center justify-end gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/10 hover:text-osg-gold hover:shadow-premium transition-all"><Activity size={20} /></button>
                              <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/10 hover:text-osg-gold hover:shadow-premium transition-all"><MoreHorizontal size={20} /></button>
                           </div>
                        </td>
                     </motion.tr>
                  ))}
               </tbody>
            </table>
            {visits.length === 0 && (
               <div className="p-32 text-center flex flex-col items-center justify-center space-y-10">
                  <div className="w-24 h-24 bg-osg-navy/5 rounded-full flex items-center justify-center text-osg-navy/10">
                     <Calendar size={56} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-sans font-black text-osg-navy uppercase">No Scheduled Visits.</h3>
                    <p className="text-lg text-osg-navy/40 font-sans max-w-sm mx-auto">
                      The service operations registry is active but no matching appointment telemetry was retrieved from the OSG cloud.
                    </p>
                  </div>
                  <button onClick={() => window.location.reload()} className="btn-cta !px-12 py-5 !text-[11px]">INITIALIZE SERVICE SYNC</button>
               </div>
            )}
         </div>
      </div>

      {/* 4. FOOTER NOTE */}
      <div className="pt-24 text-center">
         {notice && <p className="mb-6 text-sm font-black text-green-600">{notice}</p>}
         <p className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.8em]">
            Service Operations Hub // Technical Maintenance Protocol v3.1
         </p>
      </div>

      <AdminQuickActionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eyebrow="Service Protocol"
        title="Schedule Visit"
        submitLabel="Create Service Visit"
        fields={[
          { name: 'customer', label: 'Client / Site', placeholder: 'Kampala HQ facade service' },
          { name: 'mntc_date', label: 'Visit Date', type: 'date' },
          { name: 'mntc_time', label: 'Time Window', placeholder: '09:00 - 12:00' },
          { name: 'status', label: 'Status', type: 'select', options: ['Scheduled', 'Confirmed', 'Completed'] },
        ]}
        onSubmit={(values) => {
          setVisits((current) => [{ name: `SV-${Date.now()}`, ...values }, ...current]);
          setNotice('Service visit added locally and ready for ERP sync.');
          setIsModalOpen(false);
        }}
      />

    </div>
  );
}

