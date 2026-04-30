'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Search, 
  Plus,
  ArrowUpRight, 
  MessageSquare,
  Phone,
  Mail,
  MoreHorizontal,
  ChevronRight,
  Target,
  Loader2,
  X,
  CheckCircle2,
  AlertCircle,
  Filter,
  Download,
  Calendar
} from 'lucide-react';
import { getCRMLeads, createLead, ERPLead } from '@/lib/api/erp';
import { downloadCsv } from '@/lib/admin-actions';

const territories = [
  'All Territories',
  'Uganda - Kampala Central',
  'Uganda - Entebbe',
  'Uganda - Jinja Corridor',
  'Uganda - Mbarara',
  'Uganda - Gulu / Northern',
  'Uganda - Mbale / Eastern',
  'Uganda - Fort Portal / Western',
  'Kenya - Nairobi Hub',
  'Rwanda - Kigali',
  'Tanzania - Dar es Salaam',
  'Other / Cross-border',
];

export default function CRMLeadsPage() {
  const [leads, setLeads] = useState<ERPLead[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  
  // New Lead Form State
  const [formData, setFormData] = useState({
    customer_name: '',
    email_id: '',
    mobile_no: '',
    lead_source: 'Website',
    territory: 'All Territories',
    status: 'Lead'
  });

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    setLoading(true);
    try {
      const data = await getCRMLeads();
      setLeads(data);
    } catch (e) {
      setNotification({ type: 'error', message: 'Failed to fetch leads from ERP.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createLead(formData);
      setNotification({ type: 'success', message: 'New lead created successfully in ERPNext.' });
      setIsModalOpen(false);
      setFormData({ customer_name: '', email_id: '', mobile_no: '', lead_source: 'Website', territory: 'All Territories', status: 'Lead' });
      loadLeads();
    } catch (e: any) {
      setNotification({ type: 'error', message: e.message || 'Failed to create lead.' });
    } finally {
      setLoading(false);
    }
  };

  const exportLeads = () => {
    downloadCsv('osg-crm-leads.csv', filteredLeads.map((lead) => ({
      id: lead.name,
      customer: lead.customer_name,
      territory: lead.territory,
      status: lead.status,
      creation: lead.creation,
      valuation: lead.base_total || 0,
    })));
    setNotification({ type: 'success', message: 'CRM lead export downloaded.' });
  };

  const filteredLeads = leads.filter(lead => 
    lead.customer_name?.toLowerCase().includes(search.toLowerCase()) || 
    lead.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 relative">
      
      {/* NOTIFICATION TOAST: Premium Luxury Alert */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={`fixed top-12 right-12 z-[100] p-6 rounded-[2rem] shadow-premium flex items-center gap-6 border backdrop-blur-3xl ${
              notification.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-osg-gold/10 border-osg-gold/20 text-osg-gold'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${notification.type === 'success' ? 'bg-green-500/20' : 'bg-osg-gold/20'}`}>
              {notification.type === 'success' ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-1">{notification.type === 'success' ? 'Success State' : 'Error Protocol'}</p>
              <p className="text-sm font-sans font-black text-white">{notification.message}</p>
            </div>
            <button onClick={() => setNotification(null)} className="ml-8 text-white/20 hover:text-white transition-colors"><X size={18} /></button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. ARCHITECTURAL HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-12 border-b border-osg-navy/5">
         <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">CRM Module // Leads</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-sans font-black text-osg-navy tracking-tighter leading-none uppercase">Lead <br/><span className="text-osg-navy/10">Intelligence.</span></h1>
            <p className="text-xl text-osg-navy/40 font-sans leading-relaxed max-w-xl">
              Calibrated pipeline for incoming architectural inquiries and enterprise project intake.
            </p>
         </div>

         <div className="flex items-center gap-6">
             <button onClick={exportLeads} className="flex items-center gap-4 px-8 py-5 rounded-2xl border border-osg-navy/10 text-[11px] font-black uppercase tracking-[0.4em] text-osg-navy hover:bg-osg-navy hover:text-white transition-all">
                <Download size={18} /> Export Data
             </button>
             <button 
               onClick={() => setIsModalOpen(true)}
               className="btn-cta !px-10 py-5 !text-[11px] shadow-premium"
             >
                <Plus size={20} className="mr-2" /> NEW INTAKE
             </button>
         </div>
      </div>

      {/* 2. COMMAND BAR: SEARCH & FILTERS */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 relative group">
           <Search size={20} className="absolute left-8 top-1/2 -translate-y-1/2 text-osg-navy/20 group-focus-within:text-osg-gold transition-colors" />
           <input 
              type="text" 
              placeholder="SEARCH BY CUSTOMER, PROJECT OR ENCRYPTED ID..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-osg-navy/5 p-8 pl-16 rounded-[2.5rem] text-[12px] font-black outline-none focus:shadow-premium transition-all placeholder:text-osg-navy/20 uppercase tracking-widest"
           />
        </div>
        <div className="flex gap-6">
           <button className="p-8 bg-white border border-osg-navy/5 rounded-[2.5rem] text-osg-navy/40 hover:text-osg-gold transition-all hover:shadow-premium">
              <Filter size={24} />
           </button>
           <button className="p-8 bg-white border border-osg-navy/5 rounded-[2.5rem] text-osg-navy/40 hover:text-osg-gold transition-all hover:shadow-premium">
              <Calendar size={24} />
           </button>
        </div>
      </div>

      {/* 3. LEADS TABLE: LUXURY DATA GRID */}
      {loading && leads.length === 0 ? (
        <div className="flex h-96 items-center justify-center">
          <Loader2 className="animate-spin text-osg-gold" size={40} />
        </div>
      ) : leads.length === 0 ? (
        <div className="bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium p-32 flex flex-col items-center justify-center text-center space-y-10">
            <div className="w-24 h-24 bg-osg-navy/5 rounded-full flex items-center justify-center text-osg-navy/10">
               <Users size={56} />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-sans font-black text-osg-navy uppercase">No Leads Detected.</h3>
              <p className="text-lg text-osg-navy/40 font-sans max-w-sm mx-auto">
                The enterprise gateway is active but no matching lead data was retrieved from the OSG cloud.
              </p>
            </div>
            <button onClick={loadLeads} className="btn-cta !px-12 py-5 !text-[11px]">INITIALIZE SYNC</button>
        </div>
      ) : (
        <div className="bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium overflow-hidden">
          <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50/50">
                        <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Customer Identity</th>
                        <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Valuation</th>
                        <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Territory</th>
                        <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Sync Status</th>
                        <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-osg-navy/5">
                    {filteredLeads.map((lead, i) => (
                        <tr key={lead.name} className="group hover:bg-[#F8F9FB] transition-all duration-500">
                          <td className="p-10">
                              <div className="flex items-center gap-8">
                                <div className="w-16 h-16 rounded-[1.5rem] overflow-hidden flex-shrink-0 bg-[#F8F9FB] border border-gray-100 shadow-sm relative group-hover:rotate-3 transition-transform">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${lead.name}`} alt="" className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-sans font-black text-osg-navy mb-1 group-hover:text-osg-gold transition-colors">{lead.customer_name}</h4>
                                    <p className="text-[10px] font-black text-osg-navy/30 uppercase tracking-[0.4em]">{lead.name}</p>
                                </div>
                              </div>
                          </td>
                          <td className="p-10">
                              <span className="text-xl font-sans font-black text-osg-navy">
                                ${(lead.base_total || 0).toLocaleString()}
                              </span>
                          </td>
                          <td className="p-10">
                              <div className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-osg-gold"></div>
                                 <span className="text-[11px] font-black text-osg-navy/60 uppercase tracking-[0.4em]">{lead.territory}</span>
                              </div>
                          </td>
                          <td className="p-10">
                              <span className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-sm ${
                                lead.status === 'Opportunity' ? 'bg-blue-500/10 text-blue-600 border border-blue-100' : 
                                lead.status === 'Quotation' ? 'bg-purple-500/10 text-purple-600 border border-purple-100' : 
                                'bg-green-500/10 text-green-600 border border-green-100'
                              }`}>
                                {lead.status}
                              </span>
                          </td>
                          <td className="p-10 text-right">
                              <div className="flex items-center justify-end gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/40 hover:text-osg-gold hover:shadow-premium transition-all"><Mail size={20} /></button>
                                <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/40 hover:text-osg-gold hover:shadow-premium transition-all"><Phone size={20} /></button>
                                <button className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/40 hover:text-osg-gold hover:shadow-premium transition-all"><MoreHorizontal size={20} /></button>
                              </div>
                          </td>
                        </tr>
                    ))}
                </tbody>
              </table>
          </div>
        </div>
      )}

      {/* NEW LEAD MODAL: Luxury Intake Form */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#0B1C2C]/60 backdrop-blur-md z-[110]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(92vw,46rem)] max-h-[88vh] bg-white rounded-[2rem] shadow-premium z-[120] overflow-hidden border border-white/10"
            >
              <div className="p-6 sm:p-8 border-b border-gray-100 flex items-center justify-between bg-[#F8F9FB]">
                <div className="space-y-2 min-w-0">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-[1px] bg-osg-gold/40"></div>
                      <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em]">Lead Intake Protocol</span>
                   </div>
                   <h3 className="text-3xl sm:text-4xl font-sans font-black text-osg-navy tracking-normal uppercase leading-none">Create Lead.</h3>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-osg-navy/5 flex items-center justify-center text-osg-navy/30 hover:text-red-600 hover:shadow-premium transition-all">
                  <X size={22} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[66vh] overflow-y-auto">
                <div className="space-y-2">
                  <label className="block text-[11px] font-black uppercase tracking-[0.4em] text-osg-navy/30 ml-4">Customer Identity</label>
                  <input 
                    required
                    type="text" 
                    value={formData.customer_name}
                    onChange={(e) => setFormData({...formData, customer_name: e.target.value})}
                    placeholder="ENTER FULL NAME OR ARCHITECTURAL FIRM..."
                    className="w-full bg-white border border-osg-navy/10 focus:border-osg-gold/50 px-4 py-3 rounded-2xl text-sm font-bold outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-black uppercase tracking-[0.4em] text-osg-navy/30 ml-4">Secure Email</label>
                    <input 
                      type="email" 
                      value={formData.email_id}
                      onChange={(e) => setFormData({...formData, email_id: e.target.value})}
                      placeholder="EMAIL@PROTOCOL.COM"
                      className="w-full bg-white border border-osg-navy/10 focus:border-osg-gold/50 px-4 py-3 rounded-2xl text-sm font-bold outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-black uppercase tracking-[0.4em] text-osg-navy/30 ml-4">Comm Line</label>
                    <input 
                      type="text" 
                      value={formData.mobile_no}
                      onChange={(e) => setFormData({...formData, mobile_no: e.target.value})}
                      placeholder="+256 700 000 000"
                      className="w-full bg-white border border-osg-navy/10 focus:border-osg-gold/50 px-4 py-3 rounded-2xl text-sm font-bold outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-black uppercase tracking-[0.4em] text-osg-navy/30 ml-4">Territorial Assignment</label>
                  <select 
                    value={formData.territory}
                    onChange={(e) => setFormData({...formData, territory: e.target.value})}
                    className="w-full bg-white border border-osg-navy/10 focus:border-osg-gold/50 px-4 py-3 rounded-2xl text-sm font-bold outline-none transition-all appearance-none"
                  >
                    {territories.map((territory) => (
                      <option key={territory}>{territory}</option>
                    ))}
                  </select>
                </div>

                 <button 
                   disabled={loading}
                   type="submit" 
                   className="w-full btn-cta !py-8 !text-[12px] shadow-premium"
                 >
                   {loading ? <Loader2 className="animate-spin" size={24} /> : 'INITIALIZE ERP RECORD'}
                 </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}

