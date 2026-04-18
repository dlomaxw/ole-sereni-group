'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  FileText,
  Zap
} from 'lucide-react';
import { subscribeToLeads, subscribeToBookings, subscribeToEstimates, updateLeadStatus, ProjectLead } from '@/lib/api/leads';

export default function AdminLeadsPage() {
  const [activeTab, setActiveTab] = useState<'briefs' | 'bookings' | 'estimates'>('briefs');
  const [data, setData] = useState<any[]>([]);
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData([]);
    setLoading(true);
    let unsubscribe: () => void;
    
    if (activeTab === 'briefs') {
      unsubscribe = subscribeToLeads((fetched) => {
        setData(fetched);
        if (fetched.length > 0 && !selectedLead) setSelectedLead(fetched[0]);
        setLoading(false);
      });
    } else if (activeTab === 'bookings') {
      unsubscribe = subscribeToBookings((fetched) => {
        setData(fetched);
        if (fetched.length > 0 && !selectedLead) setSelectedLead(fetched[0]);
        setLoading(false);
      });
    } else {
      unsubscribe = subscribeToEstimates((fetched) => {
        setData(fetched);
        if (fetched.length > 0 && !selectedLead) setSelectedLead(fetched[0]);
        setLoading(false);
      });
    }
    
    return unsubscribe;
  }, [activeTab]);


  return (
    <div className="space-y-10">
      <section className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-display-md text-osg-navy font-black tracking-tighter uppercase mb-6 italic">Operations CRM</h1>
          <div className="flex gap-10 border-b border-osg-navy/10">
             {(['briefs', 'bookings', 'estimates'] as const).map(tab => (
                 <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-5 text-[11px] font-black uppercase tracking-[0.4em] transition-all border-b-2 ${
                    activeTab === tab ? 'border-osg-gold text-osg-navy scale-110' : 'border-transparent text-osg-navy/30 hover:text-osg-navy'
                  }`}
                 >
                    {tab}
                 </button>
             ))}
          </div>
        </div>
        <div className="flex gap-4 w-full md:w-auto self-start">

            <div className="relative flex-1 md:w-96 shadow-xl">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-osg-navy/30" size={20} />
                <input 
                    type="text" 
                    placeholder="Search leads, projects, or clients..." 
                    className="w-full bg-white border-2 border-osg-navy/5 p-6 pl-14 text-sm outline-none focus:border-osg-gold transition-all font-bold uppercase tracking-widest placeholder:text-osg-navy/20 shadow-inner"
                />
            </div>
            <button className="p-6 bg-osg-navy text-white hover:bg-osg-gold transition-all shadow-xl">
                <Filter size={24} />
            </button>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Leads List */}
        <div className="lg:col-span-5 space-y-4">
            <div className="justify-between items-center mb-8 hidden lg:flex px-2">
                <h3 className="text-[12px] font-black text-osg-navy uppercase tracking-[0.4em]">Operational Inbox</h3>
                <span className="text-[10px] font-black bg-osg-navy text-white px-4 py-1.5 shadow-[0_5px_15px_rgba(0,0,0,0.1)]">{data.length} ACTIVE ENTRIES</span>
            </div>
            
            {loading ? (
                <div className="space-y-4">
                    {[1,2,3].map(i => (
                        <div key={i} className="h-32 bg-white/10 animate-pulse" />
                    ))}
                </div>
            ) : (
                <div className="space-y-3">
                    {data.map((item) => (
                        <motion.div 
                            key={item.id}
                            onClick={() => setSelectedLead(item)}
                            whileHover={{ x: 4 }}
                            className={`p-6 cursor-pointer border-l-4 transition-all ${
                                selectedLead?.id === item.id 
                                ? 'bg-white border-osg-gold shadow-sm' 
                                : 'bg-white/50 border-transparent hover:bg-white'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h4 className="text-sm font-black text-osg-navy uppercase tracking-widest truncate w-2/3">
                                    {item.projectTitle || item.projectType || 'Cost Valuation'}
                                </h4>
                                <span className="text-[9px] font-black px-3 py-1 bg-osg-navy text-osg-gold uppercase tracking-[0.2em] leading-none shadow-sm">
                                    {activeTab}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-5 mb-2">
                                <div className="w-12 h-12 bg-osg-navy flex items-center justify-center border-t-2 border-osg-gold shadow-lg">
                                    <User size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-osg-navy uppercase tracking-widest leading-none mb-1.5">{item.clientName || 'Commercial Inquiry'}</p>
                                    <p className="text-[9px] font-bold text-osg-gold uppercase tracking-[0.2em]">{item.clientEmail}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}


        </div>

        {/* Lead Detail Panel */}
        <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
                {selectedLead ? (
                    <motion.div 
                        key={selectedLead.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="bg-white border border-osg-navy/5 overflow-hidden"
                    >
                        <div className="p-12 border-b border-osg-navy/10 bg-[#fafafa] flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-[12px] font-black text-osg-gold uppercase tracking-[0.5em]">Project Identifier</span>
                                    <div className="h-[2px] w-14 bg-osg-gold" />
                                </div>
                                <h2 className="text-display-sm text-osg-navy uppercase tracking-tighter mb-4 italic">{selectedLead.projectTitle || 'Intake Brief'}</h2>
                                <p className="text-md font-bold text-osg-navy uppercase tracking-widest opacity-60">{selectedLead.clientName} // {selectedLead.clientEmail}</p>
                            </div>
                            <div className="bg-osg-navy p-8 text-center min-w-[140px] shadow-2xl border-b-4 border-osg-gold">
                                <p className="text-[10px] font-black text-osg-gold uppercase tracking-[0.3em] mb-2 opacity-60">Status</p>
                                <span className="text-2xl font-black text-white uppercase tracking-tighter">{selectedLead.status}</span>
                            </div>
                        </div>

                        <div className="p-10 space-y-10">
                             {/* Data Bento */}
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: 'System Type', value: selectedLead.type.toUpperCase() },
                                    { label: 'Required Services', value: selectedLead.services?.join(', ') || 'N/A' },
                                    { label: 'Evaluation Budget', value: selectedLead.budget || 'N/A' },
                                    { label: 'Floor Area', value: `${selectedLead.area || 0} SQM` },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-8 border border-osg-navy/10 shadow-sm hover:shadow-md transition-shadow group">
                                        <p className="text-[10px] font-black text-osg-navy/30 uppercase tracking-[0.3em] mb-3 group-hover:text-osg-gold transition-colors">{item.label}</p>
                                        <p className="text-md font-black text-osg-navy uppercase tracking-widest">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* AI Insights Bar */}
                            <div className="bg-osg-navy p-10 flex items-start gap-8 border-l-8 border-osg-gold shadow-2xl overflow-hidden relative group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-osg-gold/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <Zap size={32} className="text-osg-gold shrink-0 mt-1 animate-pulse" />
                                <div className="relative z-10">
                                    <h4 className="text-[14px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4">Strategic Engineering Recommendation</h4>
                                    <p className="text-md text-white/80 leading-relaxed font-bold uppercase tracking-wide">
                                        Manual structural review required. This {selectedLead.type} submission aligns with Q1 growth sectors. Initial strategy: Validate structural requirements for {selectedLead.services?.[0] || 'structural work'} and prepare localized BOQ metrics.
                                    </p>
                                </div>
                            </div>

                             {/* Action Toolbar */}
                            <div className="grid grid-cols-2 gap-6 pt-12 border-t border-osg-navy/10">
                                <button className="w-full flex items-center justify-center gap-4 p-8 bg-osg-gold text-osg-navy text-[11px] font-black uppercase tracking-widest hover:bg-osg-navy hover:text-white transition-all shadow-xl">
                                    <Clock size={20} /> Schedule Structural Audit
                                </button>
                                <button className="w-full flex items-center justify-center gap-4 p-8 border-2 border-osg-navy text-osg-navy text-[11px] font-black uppercase tracking-widest hover:bg-osg-navy hover:text-white transition-all shadow-xl">
                                    <FileText size={20} /> Dispatch Evaluation Quote
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <div className="bg-white/50 border border-osg-navy/5 h-[600px] flex items-center justify-center">
                        <p className="text-osg-navy/20 font-black uppercase tracking-widest">Select a lead to view details</p>
                    </div>
                )}
            </AnimatePresence>


             {/* Lifecycle Stages */}
            <div className="bg-white border border-osg-navy/10 p-12 shadow-2xl">
                <h4 className="text-[12px] font-black text-osg-navy uppercase tracking-[0.4em] mb-12">System Lifecycle Progression</h4>
                <div className="flex justify-between items-center relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-osg-navy/5 -z-0" />
                    {[
                        { label: 'System Inquiry', status: 'done', icon: CheckCircle2 },
                        { label: 'Site Audit', status: 'current', icon: Clock },
                        { label: 'Evaluation', status: 'pending', icon: MoreVertical },
                        { label: 'Deployment', status: 'pending', icon: AlertCircle },
                    ].map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center gap-4 bg-white px-4 group">
                            <div className={`w-14 h-14 flex items-center justify-center border-2 transition-all duration-500 ${
                                step.status === 'done' ? 'bg-osg-navy border-osg-navy text-osg-gold shadow-lg' :
                                step.status === 'current' ? 'bg-white border-osg-gold text-osg-gold shadow-[0_0_25px_rgba(168,120,30,0.3)] scale-110' :
                                'bg-white border-osg-navy/10 text-osg-navy/20 group-hover:border-osg-navy/30'
                            }`}>
                                <step.icon size={24} />
                            </div>
                            <span className={`text-[10px] font-black uppercase tracking-widest ${
                                step.status === 'pending' ? 'text-osg-navy/20 font-medium' : 'text-osg-navy font-black'
                            }`}>{step.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
