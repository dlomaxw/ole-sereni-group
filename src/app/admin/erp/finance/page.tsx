'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard, 
  FileText, 
  Search, 
  MoreHorizontal,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Filter,
  Download,
  Terminal,
  Activity,
  ChevronRight,
  Loader2,
  X
} from 'lucide-react';
import { getFinancialSummary, ERPInvoice } from '@/lib/api/erp';
import { downloadCsv } from '@/lib/admin-actions';

export default function FinancePage() {
  const [invoices, setInvoices] = useState<ERPInvoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getFinancialSummary().then(data => {
      setInvoices(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const exportStatements = () => {
    downloadCsv('osg-finance-statements.csv', invoices.map((invoice) => ({
      invoice: invoice.name,
      customer: invoice.customer,
      posting_date: invoice.posting_date,
      total: invoice.grand_total,
      status: invoice.status,
    })));
    setNotification('Statement export downloaded.');
  };

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-32 relative">
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed right-6 top-28 z-[100] flex max-w-sm items-center gap-4 rounded-2xl border border-osg-gold/20 bg-osg-navy px-5 py-4 text-white shadow-premium"
          >
            <CheckCircle2 className="text-osg-gold" size={20} />
            <p className="flex-1 text-sm font-black">{notification}</p>
            <button type="button" aria-label="Dismiss notification" onClick={() => setNotification(null)} className="text-white/40 hover:text-white">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 1. ARCHITECTURAL HEADER: FINANCIAL PERFORMANCE */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-12 border-b border-osg-navy/5">
        <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">ERP Module // Economics</span>
            </div>
            <h1 className="text-5xl lg:text-[7rem] font-sans font-black text-osg-navy tracking-tighter leading-[0.8] uppercase">Financial <br/><span className="text-osg-navy/10">Integrity.</span></h1>
            <p className="text-xl text-osg-navy/40 font-sans leading-relaxed max-w-xl">
              Enterprise-grade financial tracking, automated ledger synchronization, and economic throughput analysis.
            </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 lg:w-1/2">
           <div className="flex-1 bg-[#0B1C2C] p-12 rounded-[3rem] text-white shadow-premium relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-10 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000">
                 <TrendingUp size={120} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-gold/60 mb-4">Total Receivable</p>
              <h2 className="text-6xl font-sans font-black text-white tracking-tighter leading-none">$1.24M</h2>
              <div className="flex items-center gap-4 mt-10">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">+12.5% VS LAST QUARTER</span>
              </div>
           </div>
           
           <div className="flex-1 bg-white p-12 rounded-[3rem] border border-osg-navy/5 shadow-premium relative overflow-hidden group">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-navy/20 mb-4">Operational Payable</p>
              <h2 className="text-6xl font-sans font-black text-osg-navy tracking-tighter leading-none">$340K</h2>
              <div className="flex items-center gap-4 mt-10">
                 <div className="w-2 h-2 rounded-full bg-osg-gold animate-pulse" />
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-osg-navy/20">AWAITING DISPATCH</span>
              </div>
           </div>
        </div>
      </div>

      {/* 2. COMMAND BAR: SEARCH & ACTIONS */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 relative group">
           <Search size={20} className="absolute left-8 top-1/2 -translate-y-1/2 text-osg-navy/20 group-focus-within:text-osg-gold transition-colors" />
           <input 
              type="text" 
              placeholder="SEARCH LEDGER BY CLIENT, REFERENCE OR ENCRYPTED TRANSACTION HASH..." 
              className="w-full bg-white border border-osg-navy/5 p-8 pl-16 rounded-[2.5rem] text-[12px] font-black outline-none focus:shadow-premium transition-all placeholder:text-osg-navy/20 uppercase tracking-widest"
           />
        </div>
        <div className="flex gap-6">
           <button onClick={exportStatements} className="flex items-center gap-6 px-12 py-8 rounded-[2.5rem] bg-white border border-osg-navy/5 text-osg-navy/70 hover:text-osg-gold transition-all hover:shadow-premium font-black text-[11px] uppercase tracking-[0.4em]">
              <Download size={22} /> DOWNLOAD STATEMENTS
           </button>
           <button className="p-8 bg-white border border-osg-navy/5 rounded-[2.5rem] text-osg-navy/40 hover:text-osg-gold transition-all hover:shadow-premium">
              <Filter size={24} />
           </button>
        </div>
      </div>

      {/* 3. FINANCIAL GRID: LUXURY DATA HUB */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        
        {/* Invoice Ledger (8 Columns) */}
        <div className="lg:col-span-8 space-y-10">
           <div className="flex items-center justify-between px-8">
              <div className="flex items-center gap-6">
                 <Terminal className="text-osg-gold" size={20} />
                 <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-osg-navy">
                    Enterprise Transaction Ledger
                 </h3>
              </div>
              <div className="flex gap-6 items-center">
                 <span className="text-[9px] font-black text-osg-navy/20 uppercase tracking-[0.4em]">Auto-Syncing with ERPNext</span>
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
              </div>
           </div>

           {loading ? (
             <div className="bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium p-48 flex items-center justify-center">
                <Loader2 className="animate-spin text-osg-gold" size={48} />
             </div>
           ) : invoices.length === 0 ? (
                <div className="bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium p-32 flex flex-col items-center justify-center text-center space-y-10">
                    <div className="w-24 h-24 bg-osg-navy/5 rounded-full flex items-center justify-center text-osg-navy/10">
                       <Wallet size={56} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-sans font-black text-osg-navy uppercase">No Transactions Detected.</h3>
                      <p className="text-lg text-osg-navy/40 font-sans max-w-sm mx-auto">
                        The financial gateway is active but no matching economic telemetry was retrieved from the OSG cloud.
                      </p>
                    </div>
                    <button onClick={() => window.location.reload()} className="btn-cta !px-12 py-5 !text-[11px]">INITIALIZE ECONOMIC SYNC</button>
                </div>
           ) : (
              <div className="bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium overflow-hidden">
                  <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="bg-gray-50/50">
                              <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Client Identity</th>
                              <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30">Posting Date</th>
                              <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-right">Valuation</th>
                              <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-center">Sync Status</th>
                              <th className="p-10 text-[11px] font-black uppercase tracking-[0.5em] text-osg-navy/30 text-right">Action</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-osg-navy/5">
                           {invoices.map((inv, i) => (
                              <motion.tr 
                                key={inv.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group hover:bg-[#F8F9FB] transition-all duration-500 cursor-pointer"
                              >
                                 <td className="p-10">
                                    <div className="flex items-center gap-8">
                                       <div className="w-14 h-14 rounded-2xl bg-[#F8F9FB] flex items-center justify-center text-osg-navy/10 border border-osg-navy/5 group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500 shadow-sm relative group-hover:rotate-3">
                                          <FileText size={24} />
                                       </div>
                                       <div>
                                          <p className="text-2xl font-sans font-black text-osg-navy uppercase tracking-tighter leading-none mb-1 group-hover:text-osg-gold transition-colors">{inv.customer}</p>
                                          <p className="text-[10px] font-black text-osg-navy/30 uppercase tracking-[0.4em]">{inv.name}</p>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="p-10">
                                    <span className="text-[12px] font-black text-osg-navy/40 uppercase tracking-widest">{inv.posting_date}</span>
                                 </td>
                                 <td className="p-10 text-right">
                                    <span className="text-2xl font-sans font-black text-osg-navy group-hover:text-osg-navy transition-colors">
                                       ${inv.grand_total.toLocaleString()}
                                    </span>
                                 </td>
                                 <td className="p-10">
                                    <div className="flex justify-center">
                                       <div className={`flex items-center gap-4 px-6 py-2.5 rounded-full border shadow-sm ${
                                          inv.status === 'Paid' ? 'bg-green-500/10 border-green-500/20 text-green-600' : 
                                          inv.status === 'Overdue' ? 'bg-red-500/10 border-red-500/20 text-red-600' : 
                                          'bg-osg-gold/10 border-osg-gold/20 text-osg-gold'
                                       }`}>
                                          {inv.status === 'Paid' ? <CheckCircle2 size={14} /> : inv.status === 'Overdue' ? <AlertCircle size={14} /> : <Clock size={14} />}
                                          <span className="text-[9px] font-black uppercase tracking-[0.4em] leading-none">{inv.status}</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="p-10 text-right">
                                    <div className="w-12 h-12 bg-white rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/10 opacity-0 group-hover:opacity-100 group-hover:text-osg-gold group-hover:shadow-premium transition-all duration-500">
                                       <ArrowUpRight size={22} />
                                    </div>
                                 </td>
                              </motion.tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
              </div>
           )}
        </div>

        {/* Sidebar Cards (4 Columns) */}
        <div className="lg:col-span-4 space-y-12">
           {/* Revenue Curve: Performance Analytics */}
           <div className="bg-[#0B1C2C] p-12 rounded-[4rem] border border-white/5 shadow-premium flex flex-col justify-between h-[500px] group relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
              <div className="relative z-10">
                 <div className="flex justify-between items-center mb-12">
                    <div className="space-y-2">
                       <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-osg-gold/60">Revenue Velocity</h4>
                       <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Real-time throughput //</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-osg-gold">
                       <Activity size={24} />
                    </div>
                 </div>
                 <div className="flex items-end gap-4 px-4 h-48">
                    {[40, 60, 35, 85, 55, 75, 45, 95].map((h, i) => (
                       <div key={i} className="flex-1 relative group/v-bar">
                          <motion.div 
                             initial={{ height: 0 }}
                             animate={{ height: `${h}%` }}
                             className={`w-full rounded-2xl transition-all duration-700 ${i === 7 ? 'bg-osg-gold shadow-[0_0_20px_rgba(200,169,106,0.3)]' : 'bg-white/5 group-hover/v-bar:bg-white/10'}`}
                          />
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/v-bar:opacity-100 transition-opacity text-[8px] font-black text-osg-gold uppercase">
                             {h}%
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="relative z-10 mt-12 pt-12 border-t border-white/5 flex justify-between items-center">
                 <div className="space-y-1">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Projected Growth</span>
                    <p className="text-3xl font-sans font-black text-white uppercase tracking-tighter">+18.4%</p>
                 </div>
                 <div className="w-14 h-14 rounded-full border border-osg-gold/20 flex items-center justify-center text-osg-gold group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500">
                    <ChevronRight size={24} />
                 </div>
              </div>
           </div>

           {/* Quick Actions: Financial Command */}
           <div className="space-y-6">
              <button onClick={() => setNotification('Invoice workflow queued for ERPNext sync.')} className="w-full bg-osg-navy text-white p-10 rounded-[3rem] flex items-center justify-between hover:bg-osg-gold hover:text-osg-navy transition-all shadow-premium group relative overflow-hidden">
                 <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
                 <div className="flex items-center gap-8 relative z-10">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-osg-navy/10 transition-all">
                       <FileText size={28} />
                    </div>
                    <div className="text-left space-y-1">
                       <p className="text-[12px] font-black uppercase tracking-[0.3em] leading-none font-sans group-hover:text-osg-navy transition-colors">Generate Invoice</p>
                       <p className="text-[9px] font-black uppercase tracking-widest text-white/30 group-hover:text-osg-navy/40 transition-colors">Auto-sync with erpnext cloud //</p>
                    </div>
                 </div>
                 <ArrowUpRight size={24} className="relative z-10 opacity-20 group-hover:opacity-100 transition-all" />
              </button>

              <button onClick={() => setNotification('Payment processing workflow opened and mapped to the active gateway.')} className="w-full bg-white text-osg-navy border border-osg-navy/5 p-10 rounded-[3rem] flex items-center justify-between hover:border-osg-gold hover:shadow-premium transition-all group relative overflow-hidden">
                 <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-osg-navy/5 rounded-2xl flex items-center justify-center text-osg-navy group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500">
                       <CreditCard size={28} />
                    </div>
                    <div className="text-left space-y-1">
                       <p className="text-[12px] font-black uppercase tracking-[0.3em] leading-none font-sans">Process Payment</p>
                       <p className="text-[9px] font-black uppercase tracking-widest text-osg-navy/20">Global gateway mapping active //</p>
                    </div>
                 </div>
                 <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 text-osg-gold transition-all" />
              </button>
           </div>
        </div>

      </div>

      {/* 4. FOOTER NOTE */}
      <div className="pt-24 text-center">
         <p className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.6em]">
            Economic telemetry protocol v8.1 // Encrypted Transaction Layer Active
         </p>
      </div>

    </div>
  );
}

