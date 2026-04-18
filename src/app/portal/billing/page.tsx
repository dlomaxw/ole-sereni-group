'use client';

import { 
  CreditCard, 
  Download, 
  ChevronRight, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  Receipt,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const invoices = [
  { id: 'OSG-INV-24-001', amount: '4,280,000', status: 'PAID', date: 'Oct 12, 2023', type: 'Phase 01: Foundation' },
  { id: 'OSG-INV-24-002', amount: '8,450,000', status: 'PAID', date: 'Jan 05, 2024', type: 'Phase 02: Structural' },
  { id: 'OSG-INV-24-003', amount: '12,200,800', status: 'PENDING', date: 'Mar 28, 2024', type: 'Phase 03: Internal Works' },
];

export default function BillingPage() {
  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[9px] font-black text-osg-gold uppercase tracking-[0.4em] mb-10">
        <span className="opacity-40">Portal</span>
        <ChevronRight size={10} className="opacity-20" />
        <span className="opacity-40">Financials</span>
        <ChevronRight size={10} className="opacity-20" />
        <span className="text-osg-navy">Project Invoicing</span>
      </nav>

      {/* Page Header */}
      <header className="mb-20">
        <h1 className="text-6xl font-serif font-black text-osg-navy tracking-tighter mb-6 leading-[0.85] uppercase">
          Financial <br /> <span className="text-osg-gold">Statements</span>
        </h1>
        <p className="text-[11px] font-bold text-osg-navy/50 leading-relaxed uppercase tracking-widest max-w-sm">
          Consolidated financial overview of your architectural asset. Track milestone disbursements and technical procurement.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Financial Overview */}
        <div className="lg:col-span-8 space-y-10">
          <div className="bg-osg-navy text-white p-16 shadow-2xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-noise opacity-10"></div>
             <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left">
                   <p className="text-[9px] font-black text-osg-gold uppercase tracking-[0.4em] mb-4">Total Contract Value</p>
                   <h2 className="text-5xl font-serif font-black tracking-tight mb-2 uppercase">$ 48,250,000</h2>
                   <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Certified Valuation: OSG-LV-2024-X</p>
                </div>
                <div className="w-[1px] h-20 bg-white/10 hidden md:block"></div>
                <div className="text-center md:text-left">
                   <p className="text-[9px] font-black text-osg-gold/50 uppercase tracking-[0.4em] mb-4">Current Outstanding</p>
                   <h3 className="text-3xl font-serif font-black tracking-tight mb-1 text-osg-gold uppercase">$ 12,200,800</h3>
                   <span className="text-[8px] font-black uppercase px-2 py-1 bg-osg-gold text-osg-navy tracking-widest">Action: Payment In Progress</span>
                </div>
             </div>
          </div>

          {/* Invoices List */}
          <div className="bg-white border border-osg-navy/5 p-12 shadow-2xl shadow-osg-navy/5">
             <div className="flex items-center gap-4 mb-16 pb-6 border-b border-osg-navy/5">
                <Receipt size={18} className="text-osg-gold" />
                <h3 className="text-[10px] font-black text-osg-navy uppercase tracking-[0.5em]">Project Ledger</h3>
             </div>

             <div className="space-y-6">
                {invoices.map((inv, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    className="flex flex-col md:flex-row items-center justify-between p-8 bg-osg-cream/30 hover:bg-white border border-transparent hover:border-osg-navy/10 transition-all group"
                  >
                    <div className="flex items-center gap-8">
                       <div className={`w-12 h-12 flex items-center justify-center rounded-full ${inv.status === 'PAID' ? 'bg-osg-gold text-osg-navy' : 'bg-osg-navy text-white animate-pulse'}`}>
                          {inv.status === 'PAID' ? <CheckCircle2 size={24} /> : <Clock size={24} />}
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-osg-navy uppercase tracking-widest mb-1">{inv.type}</p>
                          <div className="flex items-center gap-4">
                             <span className="text-[9px] font-bold text-osg-navy/30 uppercase tracking-widest">{inv.id}</span>
                             <span className="text-[9px] font-bold text-osg-navy/30 uppercase tracking-widest">— {inv.date}</span>
                          </div>
                       </div>
                    </div>
                    <div className="flex items-center gap-12 mt-6 md:mt-0 text-right">
                       <div>
                          <p className="text-lg font-serif font-black text-osg-navy tracking-tight">{inv.amount}</p>
                          <span className={`text-[8px] font-black px-2 py-0.5 uppercase tracking-widest ${inv.status === 'PAID' ? 'text-green-600 bg-green-50' : 'text-osg-gold bg-osg-gold/10'}`}>
                             {inv.status}
                          </span>
                       </div>
                       <button className="p-4 text-osg-navy/20 hover:text-osg-navy hover:bg-osg-navy/5 transition-all">
                          <Download size={18} />
                       </button>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>

        {/* Right: Payment Method & Contact */}
        <div className="lg:col-span-4 space-y-10">
          <div className="bg-osg-offwhite p-12 border border-osg-navy/5">
             <span className="text-osg-gold font-black text-[9px] uppercase tracking-[0.6em] mb-8 block">Disbursement Channel</span>
             <div className="p-8 bg-white border border-osg-navy/5 mb-8">
                <p className="text-[10px] font-black text-osg-navy uppercase tracking-widest mb-4">Primary Account</p>
                <div className="flex items-center gap-6">
                   <div className="w-14 h-10 bg-osg-navy rounded flex items-center justify-center text-white">
                      <CreditCard size={24} />
                   </div>
                   <div>
                      <p className="text-sm font-serif font-bold text-osg-navy leading-none">**** **** **** 8820</p>
                      <p className="text-[8px] font-bold text-osg-navy/20 uppercase mt-1">Global Trade (SGD)</p>
                   </div>
                </div>
             </div>
             <button className="w-full py-5 bg-osg-navy text-white text-[9px] font-black uppercase tracking-[0.3em] hover:bg-osg-gold hover:text-osg-navy transition-all mb-4">
                Update Disbursement Profile
             </button>
             <p className="text-[8px] font-bold text-center text-osg-navy/20 uppercase tracking-widest italic">
                Secure SSL 256-bit encrypted operational tunnel.
             </p>
          </div>

          <div className="bg-white border border-osg-navy/5 p-12">
             <div className="flex items-center gap-4 mb-8">
                <AlertCircle size={16} className="text-osg-gold" />
                <h4 className="text-[9px] font-black text-osg-navy uppercase tracking-[0.3em]">Financial Concierge</h4>
             </div>
             <p className="text-[10px] font-bold text-osg-navy/40 uppercase tracking-widest leading-relaxed mb-10">
                Direct channel for payment verification, tax documentation, or structural procurement inquiries.
              </p>
              <button className="w-full py-5 border border-osg-navy/10 text-osg-navy/60 hover:text-osg-navy hover:bg-osg-navy/5 transition-all text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-3">
                 Initialize Channel <ArrowUpRight size={14} />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
