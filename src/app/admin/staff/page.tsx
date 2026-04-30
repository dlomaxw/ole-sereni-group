'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Search, 
  Plus, 
  Loader2, 
  MoreHorizontal,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  Terminal,
  ShieldCheck,
  ChevronRight,
  Filter,
  ArrowRight,
  Download
} from 'lucide-react';
import { frappeFetch } from '@/lib/api/erp';
import AdminQuickActionModal from '@/components/admin/AdminQuickActionModal';
import { downloadCsv } from '@/lib/admin-actions';

export default function StaffManagementPage() {
  const [staff, setStaff] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    async function loadStaff() {
      try {
        const res = await (window as any).frappeFetch('Employee?fields=["name","employee_name","designation","department","status","cell_number"]&limit_page_length=50');
        setStaff(res.data || []);
      } catch (e) {
        // Fallback to empty
      } finally {
        setLoading(false);
      }
    }
    loadStaff();
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
      
      {/* 1. ARCHITECTURAL HEADER: HUMAN CAPITAL */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-12 border-b border-osg-navy/5">
        <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Enterprise HQ // Human Capital</span>
            </div>
            <h1 className="text-5xl lg:text-[7rem] font-sans font-black text-osg-navy tracking-tighter leading-[0.8] uppercase">Personnel <br/><span className="text-osg-navy/10">Assets.</span></h1>
            <p className="text-xl text-osg-navy/40 font-sans leading-relaxed max-w-xl">
               Management of architectural engineers, specialized technicians, project managers, and operational staff.
            </p>
        </div>

        <div className="flex items-center gap-6">
             <button onClick={() => setIsModalOpen(true)} className="btn-cta !px-12 py-6 !text-[11px] shadow-premium">
                <Plus size={20} className="mr-2" /> REGISTER PERSONNEL
             </button>
        </div>
      </div>

      {/* 2. COMMAND BAR: SEARCH & FILTERS */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 relative group">
           <Search size={20} className="absolute left-8 top-1/2 -translate-y-1/2 text-osg-navy/20 group-focus-within:text-osg-gold transition-colors" />
           <input 
              type="text" 
              placeholder="FILTER BY NAME, DESIGNATION OR ENCRYPTED EMPLOYEE ID..." 
              className="w-full bg-white border border-osg-navy/5 p-8 pl-16 rounded-[2.5rem] text-[12px] font-black outline-none focus:shadow-premium transition-all placeholder:text-osg-navy/20 uppercase tracking-widest"
           />
        </div>
        <div className="flex gap-6">
           <button onClick={() => downloadCsv('osg-staff-roster.csv', staff)} className="flex items-center gap-6 px-12 py-8 rounded-[2.5rem] bg-white border border-osg-navy/5 text-osg-navy/60 hover:text-osg-gold transition-all hover:shadow-premium font-black text-[11px] uppercase tracking-[0.4em]">
              <Download size={22} /> EXPORT ROSTER
           </button>
           <button className="p-8 bg-white border border-osg-navy/5 rounded-[2.5rem] text-osg-navy/40 hover:text-osg-gold transition-all hover:shadow-premium">
              <Filter size={24} />
           </button>
        </div>
      </div>

      {/* 3. STAFF TABLE: LUXURY PERSONNEL GRID */}
      <div className="bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-gray-50/50">
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Personnel Identity</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Specialization</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Division</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-center">Protocol Status</th>
                     <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-osg-navy/5">
                  {staff.map((emp, i) => (
                     <motion.tr 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="group hover:bg-[#F8F9FB] transition-all duration-500 cursor-pointer"
                     >
                        <td className="p-10">
                           <div className="flex items-center gap-8">
                              <div className="w-14 h-14 rounded-2xl bg-[#F8F9FB] border border-osg-navy/5 flex items-center justify-center text-osg-navy/10 group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 shadow-sm relative group-hover:rotate-3 overflow-hidden">
                                 <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(emp.employee_name)}&background=0B1C2C&color=C8A96A&bold=true`} alt="Avatar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                              </div>
                              <div>
                                 <h4 className="text-2xl font-sans font-black text-osg-navy uppercase tracking-tighter leading-none mb-1 group-hover:text-osg-gold transition-colors">{emp.employee_name}</h4>
                                 <p className="text-[10px] font-black text-osg-navy/30 uppercase tracking-[0.4em]">EID: {emp.name}</p>
                              </div>
                           </div>
                        </td>
                        <td className="p-10">
                           <span className="text-[12px] font-black text-osg-navy/40 uppercase tracking-widest">{emp.designation || 'Specialist'}</span>
                        </td>
                        <td className="p-10">
                           <span className="text-[12px] font-black text-osg-navy/40 uppercase tracking-widest">{emp.department || 'Operations'}</span>
                        </td>
                        <td className="p-10">
                           <div className="flex justify-center">
                              <div className={`flex items-center gap-4 px-6 py-2.5 rounded-full border shadow-sm ${
                                 emp.status === 'Active' ? 'bg-green-500/10 border-green-500/20 text-green-600' : 'bg-gray-100 border-gray-200 text-gray-400'
                              }`}>
                                 <div className={`w-1.5 h-1.5 rounded-full ${emp.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`} />
                                 <span className="text-[9px] font-black uppercase tracking-[0.4em] leading-none">{emp.status || 'OFFLINE'}</span>
                              </div>
                           </div>
                        </td>
                        <td className="p-10 text-right">
                           <div className="flex items-center justify-end gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/40 hover:text-osg-gold hover:shadow-premium transition-all"><Mail size={20} /></button>
                              <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/40 hover:text-osg-gold hover:shadow-premium transition-all"><Phone size={20} /></button>
                              <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/20 hover:text-osg-gold hover:shadow-premium transition-all"><MoreHorizontal size={20} /></button>
                           </div>
                        </td>
                     </motion.tr>
                  ))}
               </tbody>
            </table>
            {staff.length === 0 && (
               <div className="p-32 text-center flex flex-col items-center justify-center space-y-10">
                  <div className="w-24 h-24 bg-osg-navy/5 rounded-full flex items-center justify-center text-osg-navy/10">
                     <Users size={56} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-sans font-black text-osg-navy uppercase">No Roster Detected.</h3>
                    <p className="text-lg text-osg-navy/40 font-sans max-w-sm mx-auto">
                      The personnel registry is active but no matching employee telemetry was retrieved from the OSG cloud.
                    </p>
                  </div>
                  <button onClick={() => window.location.reload()} className="btn-cta !px-12 py-5 !text-[11px]">INITIALIZE ROSTER SYNC</button>
               </div>
            )}
         </div>
      </div>

      {/* 4. FOOTER NOTE */}
      <div className="pt-24 text-center">
         {notice && <p className="mb-6 text-sm font-black text-green-600">{notice}</p>}
         <p className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.8em]">
            Personnel Asset Registry // Secure Human Capital Protocol Active
         </p>
      </div>

      <AdminQuickActionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eyebrow="Human Capital Protocol"
        title="Register Personnel"
        submitLabel="Add Personnel"
        fields={[
          { name: 'employee_name', label: 'Full Name', placeholder: 'Jane Doe' },
          { name: 'designation', label: 'Specialization', placeholder: 'Facade Engineer' },
          { name: 'department', label: 'Division', type: 'select', options: ['Operations', 'Engineering', 'Workshop', 'Sales', 'Administration'] },
          { name: 'cell_number', label: 'Comm Line', type: 'tel', placeholder: '+256 700 000 000' },
        ]}
        onSubmit={(values) => {
          setStaff((current) => [{ name: `EMP-${Date.now()}`, status: 'Active', ...values }, ...current]);
          setNotice('Personnel record added locally and ready for roster sync.');
          setIsModalOpen(false);
        }}
      />

    </div>
  );
}

