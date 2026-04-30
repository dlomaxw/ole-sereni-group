'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  Search, 
  Plus, 
  Loader2, 
  MoreHorizontal,
  Clock,
  Settings,
  AlertCircle,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  ChevronRight,
  Filter,
  ArrowRight,
  Download,
  Activity,
  Layers,
  Cpu
} from 'lucide-react';
import { getWorkOrders } from '@/lib/api/erp';
import AdminQuickActionModal from '@/components/admin/AdminQuickActionModal';
import { downloadCsv } from '@/lib/admin-actions';

export default function WorkshopPanelPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    async function loadOrders() {
      try {
        const data = await getWorkOrders();
        setOrders(data);
      } catch (e) {
        // Fallback
      } finally {
        setLoading(false);
      }
    }
    loadOrders();
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
      
      {/* 1. ARCHITECTURAL HEADER: FABRICATION HUB */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-12 border-b border-osg-navy/5">
        <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Enterprise HQ // Workshop Hub</span>
            </div>
            <h1 className="text-5xl lg:text-[7rem] font-sans font-black text-osg-navy tracking-tighter leading-[0.8] uppercase">Fabrication <br/><span className="text-osg-navy/10">Nexus.</span></h1>
            <p className="text-xl text-osg-navy/40 font-sans leading-relaxed max-w-xl">
               Real-time monitoring of architectural manufacturing, precision assembly, and specialized industrial fabrication jobs.
            </p>
        </div>

        <div className="flex items-center gap-6">
             <button onClick={() => setIsModalOpen(true)} className="btn-cta !px-12 py-6 !text-[11px] shadow-premium">
                <Plus size={20} className="mr-2" /> NEW WORK ORDER
             </button>
        </div>
      </div>

      {/* 2. COMMAND BAR: SEARCH & FILTERS */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 relative group">
           <Search size={20} className="absolute left-8 top-1/2 -translate-y-1/2 text-osg-navy/20 group-focus-within:text-osg-gold transition-colors" />
           <input 
              type="text" 
              placeholder="FILTER BY WORK ORDER ID, MATERIAL SPEC OR PROJECT REFERENCE..." 
              className="w-full bg-white border border-osg-navy/5 p-8 pl-16 rounded-[2.5rem] text-[12px] font-black outline-none focus:shadow-premium transition-all placeholder:text-osg-navy/20 uppercase tracking-widest"
           />
        </div>
        <div className="flex gap-6">
           <button onClick={() => downloadCsv('osg-workshop-production-log.csv', orders)} className="flex items-center gap-6 px-12 py-8 rounded-[2.5rem] bg-white border border-osg-navy/5 text-osg-navy/60 hover:text-osg-gold transition-all hover:shadow-premium font-black text-[11px] uppercase tracking-[0.4em]">
              <Download size={22} /> EXPORT PRODUCTION LOGS
           </button>
           <button className="p-8 bg-white border border-osg-navy/5 rounded-[2.5rem] text-osg-navy/40 hover:text-osg-gold transition-all hover:shadow-premium">
              <Filter size={24} />
           </button>
        </div>
      </div>

      {/* 3. WORKSHOP GRID: LUXURY PRODUCTION TABLE */}
      <div className="bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-gray-50/50">
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Order Designation</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Production Specification</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-center">Batch Vol.</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Deployment Date</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-center">Protocol Status</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-osg-navy/5">
                  {orders.map((order, i) => (
                     <motion.tr 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="group hover:bg-[#F8F9FB] transition-all duration-500 cursor-pointer"
                     >
                        <td className="p-10">
                           <div className="flex items-center gap-8">
                              <div className="w-14 h-14 rounded-2xl bg-[#F8F9FB] border border-osg-navy/5 flex items-center justify-center text-osg-navy/10 group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 shadow-sm relative group-hover:rotate-3 font-sans font-black text-xs">
                                 WO
                              </div>
                              <div>
                                 <h4 className="text-2xl font-sans font-black text-osg-navy uppercase tracking-tighter leading-none mb-1 group-hover:text-osg-gold transition-colors">{order.name}</h4>
                                 <p className="text-[10px] font-black text-osg-navy/30 uppercase tracking-[0.4em] font-sans">Batch Protocol Active //</p>
                              </div>
                           </div>
                        </td>
                        <td className="p-10">
                           <div className="space-y-1">
                              <p className="text-xl font-sans font-black text-osg-navy/60 group-hover:text-osg-navy transition-colors">{order.production_item}</p>
                              <div className="flex items-center gap-2">
                                 <Layers size={10} className="text-osg-gold/40" />
                                 <span className="text-[9px] font-black text-osg-navy/20 uppercase tracking-widest">Architectural Profile System</span>
                              </div>
                           </div>
                        </td>
                        <td className="p-10 text-center">
                           <span className="text-2xl font-sans font-black text-osg-navy">{order.qty}</span>
                        </td>
                        <td className="p-10">
                           <span className="text-[12px] font-black text-osg-navy/40 tracking-widest uppercase">{order.planned_start_date || 'INITIALIZING'}</span>
                        </td>
                        <td className="p-10">
                           <div className="flex justify-center">
                              <div className={`flex items-center gap-4 px-6 py-2.5 rounded-full border shadow-sm ${
                                 order.status === 'Completed' ? 'bg-green-500/10 border-green-500/20 text-green-600' : 
                                 order.status === 'In Progress' ? 'bg-osg-gold/10 border-osg-gold/20 text-osg-gold' : 
                                 'bg-osg-navy/5 border-osg-navy/10 text-osg-navy/40'
                              }`}>
                                 <div className={`w-1.5 h-1.5 rounded-full ${order.status === 'Completed' ? 'bg-green-500' : order.status === 'In Progress' ? 'bg-osg-gold animate-pulse' : 'bg-gray-400'}`} />
                                 <span className="text-[9px] font-black uppercase tracking-[0.4em] leading-none">{order.status}</span>
                              </div>
                           </div>
                        </td>
                        <td className="p-10 text-right">
                           <div className="flex items-center justify-end gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/10 hover:text-osg-gold hover:shadow-premium transition-all"><Settings size={20} /></button>
                              <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/10 hover:text-osg-gold hover:shadow-premium transition-all"><MoreHorizontal size={20} /></button>
                           </div>
                        </td>
                     </motion.tr>
                  ))}
               </tbody>
            </table>
            {orders.length === 0 && (
               <div className="p-32 text-center flex flex-col items-center justify-center space-y-10">
                  <div className="w-24 h-24 bg-osg-navy/5 rounded-full flex items-center justify-center text-osg-navy/10">
                     <Cpu size={56} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-sans font-black text-osg-navy uppercase">No Production Jobs.</h3>
                    <p className="text-lg text-osg-navy/40 font-sans max-w-sm mx-auto">
                      The fabrication nexus is active but no matching work order telemetry was retrieved from the OSG cloud.
                    </p>
                  </div>
                  <button onClick={() => window.location.reload()} className="btn-cta !px-12 py-5 !text-[11px]">INITIALIZE WORKSHOP SYNC</button>
               </div>
            )}
         </div>
      </div>

      {/* 4. FOOTER NOTE */}
      <div className="pt-24 text-center">
         {notice && <p className="mb-6 text-sm font-black text-green-600">{notice}</p>}
         <p className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.8em]">
            Fabrication Nexus Hub // Industrial Production Protocol v1.4.2
         </p>
      </div>

      <AdminQuickActionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eyebrow="Fabrication Protocol"
        title="New Work Order"
        submitLabel="Create Work Order"
        fields={[
          { name: 'production_item', label: 'Production Item', placeholder: 'CW-50 facade frame batch' },
          { name: 'qty', label: 'Batch Volume', type: 'number', placeholder: '24' },
          { name: 'planned_start_date', label: 'Deployment Date', type: 'date' },
          { name: 'status', label: 'Status', type: 'select', options: ['Draft', 'In Progress', 'Completed'] },
        ]}
        onSubmit={(values) => {
          setOrders((current) => [{ name: `WO-${Date.now()}`, ...values }, ...current]);
          setNotice('Work order created locally and ready for production sync.');
          setIsModalOpen(false);
        }}
      />

    </div>
  );
}

