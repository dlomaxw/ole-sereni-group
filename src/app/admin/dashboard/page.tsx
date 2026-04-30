'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Package, 
  Wallet, 
  ArrowRight,
  ArrowUpRight, 
  Activity, 
  ShieldCheck, 
  Zap,
  AlertTriangle,
  Loader2,
  Terminal,
  ChevronRight,
} from 'lucide-react';
import { getERPMetrics, ERPMetrics, getStockLevels, ERPStockItem } from '@/lib/api/erp';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const { osgUser } = useAuth();
  const [metrics, setMetrics] = useState<ERPMetrics | null>(null);
  const [recentInventory, setRecentInventory] = useState<ERPStockItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [m, inv] = await Promise.all([
          getERPMetrics(),
          getStockLevels()
        ]);
        setMetrics(m);
        setRecentInventory(inv.slice(0, 3));
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="animate-spin text-osg-gold" size={40} />
      </div>
    );
  }

  // REPLACEMENT FOR BLANK PAGE (RESEARCH REPORT P0)
  if (!metrics) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] space-y-10 text-center px-8">
         <div className="w-24 h-24 bg-osg-navy/5 rounded-[2rem] flex items-center justify-center text-osg-gold/50 relative">
            <AlertTriangle size={48} />
            <div className="absolute inset-0 bg-osg-gold/10 animate-ping rounded-[2rem]" />
         </div>
         <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-sans font-black text-osg-navy uppercase tracking-tighter">Connection Latency.</h2>
            <p className="text-sm font-black text-osg-navy/40 uppercase tracking-[0.4em] max-w-lg mx-auto leading-relaxed">
              The enterprise gateway is currently unreachable. <br /> Check your OSG Secure Cloud connection protocol.
            </p>
         </div>
         <button 
           onClick={() => window.location.reload()} 
           className="btn-cta !px-16 py-6 !text-[11px] shadow-premium"
         >
            RE-INITIALIZE GATEWAY
         </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 lg:space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 relative pb-16 lg:pb-24">
      
      {/* 1. ARCHITECTURAL HEADER: OPERATIONAL INTEL */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 lg:gap-12 pb-8 lg:pb-10 border-b border-osg-navy/5">
        <div className="space-y-5 lg:space-y-6 min-w-0">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-[1px] bg-osg-gold/40"></div>
            <span className="text-[9px] sm:text-[10px] font-black text-osg-gold uppercase tracking-[0.25em] sm:tracking-[0.45em]">Enterprise HQ // Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-sans font-black text-osg-navy tracking-tighter leading-[0.9] uppercase">
            Operational <br/><span className="text-osg-navy/10">Intelligence.</span>
          </h1>
          <p className="text-base sm:text-lg xl:text-xl text-osg-navy/45 font-sans leading-relaxed max-w-xl">
             System-wide telemetry analysis of architectural leads, material inventory, and economic performance.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 lg:gap-6">
             <div className="bg-white px-5 lg:px-7 py-4 rounded-2xl border border-osg-navy/5 flex items-center gap-4 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.25em] text-osg-navy/45">Cloud Gateway Active</span>
             </div>
             <button aria-label="Open terminal console" className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-osg-navy text-osg-gold flex items-center justify-center hover:bg-osg-gold hover:text-osg-navy transition-all shadow-premium">
                <Terminal size={24} />
             </button>
        </div>
      </div>


      {/* 2. CORE MODULE TILES: THE ARCHITECTURAL TRIAD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-8">
        {[
          { 
            title: 'CRM Pipeline', 
            desc: 'LEAD CONVERSION & SALES TELEMETRY', 
            value: metrics.openLeads, 
            unit: 'Opportunities Active',
            icon: Target, 
            href: '/admin/erp/crm',
            color: 'text-osg-gold',
            bg: 'bg-[#0B1C2C] text-white',
            accent: 'bg-white/5'
          },
          { 
            title: 'Inventory Hub', 
            desc: 'MATERIAL STOCK & WAREHOUSING', 
            value: metrics.stockAlerts, 
            unit: 'Low Stock Alerts Detected',
            icon: Package, 
            href: '/admin/erp/inventory',
            color: 'text-osg-navy',
            bg: 'bg-white text-osg-navy',
            accent: 'bg-osg-navy/5'
          },
          { 
            title: 'Economic Hub', 
            desc: 'INVOICING & ACCOUNT LEDGERS', 
            value: `$${(metrics.totalRevenue / 1000).toFixed(1)}k`, 
            unit: 'Total Revenue Protocol',
            icon: Wallet, 
            href: '/admin/erp/finance',
            color: 'text-osg-navy',
            bg: 'bg-[#F8F9FB] text-osg-navy',
            accent: 'bg-osg-navy/5'
          }
        ].map((module, i) => (
          <Link key={i} href={module.href}>
            <motion.div 
              whileHover={{ y: -8 }}
              className={`${module.bg} p-6 sm:p-8 xl:p-10 rounded-[1.75rem] xl:rounded-[2.5rem] shadow-premium border border-osg-navy/5 flex flex-col justify-between min-h-[320px] xl:min-h-[380px] group transition-all duration-700 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-56 h-56 bg-osg-gold/5 -mr-20 -mt-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-[2000ms]" />
              
              <div className="flex justify-between items-start relative z-10">
                <div className={`w-14 h-14 xl:w-16 xl:h-16 rounded-2xl flex items-center justify-center ${module.accent} border border-white/5 group-hover:rotate-6 transition-transform duration-500`}>
                  <module.icon size={28} className={module.color} />
                </div>
                <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-full border border-osg-navy/5 group-hover:border-osg-gold/30 flex items-center justify-center transition-colors">
                   <ArrowUpRight size={20} className="opacity-25 group-hover:opacity-100 group-hover:text-osg-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                </div>
              </div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-3">
                  <p className="text-[9px] xl:text-[10px] font-black uppercase tracking-[0.25em] xl:tracking-[0.35em] opacity-45 leading-relaxed">{module.desc}</p>
                  <h3 className="text-2xl xl:text-3xl font-sans font-black uppercase tracking-tighter group-hover:text-osg-gold transition-colors leading-none">{module.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <span className="block text-5xl xl:text-6xl font-sans font-black tracking-tighter leading-none break-words">{module.value}</span>
                  <p className="text-[9px] font-black uppercase tracking-[0.25em] xl:tracking-[0.35em] opacity-35 leading-relaxed">{module.unit}</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* 3. ACTIVITY & INTEGRITY: THE OPERATIONAL LAYER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-8">
        
        {/* System Activity Chart (ERP Traffic) */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 xl:p-10 rounded-[1.75rem] xl:rounded-[2.5rem] border border-osg-navy/5 shadow-premium space-y-8 xl:space-y-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01] pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-osg-navy/5 rounded-2xl text-osg-navy">
                  <Activity size={24} />
                </div>
                <h3 className="text-[10px] xl:text-[12px] font-black uppercase tracking-[0.25em] xl:tracking-[0.4em] text-osg-navy">System Throughput Analysis</h3>
              </div>
              <div className="flex gap-4 items-center">
                 <span className="text-[9px] font-black text-osg-navy/25 uppercase tracking-[0.25em]">Telemetry Live Sync</span>
                 <div className="w-2 h-2 bg-osg-gold rounded-full animate-ping" />
              </div>
            </div>

            <div className="h-56 sm:h-72 flex items-end justify-between gap-2 sm:gap-4 px-1 sm:px-4 relative z-10">
               {[40, 70, 45, 95, 65, 80, 50, 75, 90, 60, 85, 40].map((h, i) => (
                  <div key={i} className="flex-1 group/bar relative">
                     <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 1, ease: 'circOut' }}
                        viewport={{ once: true }}
                        className={`w-full rounded-2xl transition-all duration-700 ${
                          i % 3 === 0 ? 'bg-[#0B1C2C]' : 
                          i % 3 === 1 ? 'bg-osg-gold' : 
                          'bg-osg-navy/5'
                        } hover:opacity-80 group-hover/bar:scale-x-110`}
                     />
                     <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity text-[10px] font-black text-osg-navy uppercase tracking-widest">
                        {h}%
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="pt-8 border-t border-osg-navy/5 flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6 relative z-10">
               <div className="flex flex-wrap gap-8 xl:gap-12">
                  <div className="space-y-1">
                     <p className="text-[9px] font-black text-osg-navy/20 uppercase tracking-[0.4em]">Peak Velocity</p>
                     <p className="text-xl font-sans font-black text-osg-navy uppercase">12.4 GB/s</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[9px] font-black text-osg-navy/20 uppercase tracking-[0.4em]">Average Latency</p>
                     <p className="text-xl font-sans font-black text-osg-navy uppercase">14ms</p>
                  </div>
               </div>
               <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.25em] text-osg-gold hover:text-osg-navy transition-colors">
                  VIEW FULL REPORT <ChevronRight size={16} />
               </button>
            </div>
        </div>

        {/* Security & Activity Status */}
        <div className="lg:col-span-4 space-y-5 xl:space-y-8">
            <div className="bg-white p-6 sm:p-8 xl:p-9 rounded-[1.75rem] xl:rounded-[2.25rem] border border-osg-navy/5 shadow-premium space-y-7 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
               <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600">
                     <ShieldCheck size={24} />
                  </div>
                  <h4 className="text-[10px] xl:text-[12px] font-black uppercase tracking-[0.25em] xl:tracking-[0.35em] text-osg-navy">System Integrity</h4>
               </div>
               <p className="text-lg font-sans text-osg-navy/60 leading-relaxed relative z-10">
                 "Enterprise logic layer is synchronized with the primary OSG architectural cloud. Core schemas validated and encrypted."
               </p>
               <div className="pt-7 border-t border-osg-navy/5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 justify-between items-start xl:items-baseline relative z-10">
                  <span className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.4em]">Validation Status</span>
                  <span className="text-2xl font-sans font-black text-osg-navy">100% SECURE</span>
               </div>
            </div>

            <div className="bg-osg-gold p-6 sm:p-8 xl:p-9 rounded-[1.75rem] xl:rounded-[2.25rem] shadow-premium flex flex-col justify-between min-h-[280px] group relative overflow-hidden">
               <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
               <div className="flex justify-between items-start relative z-10">
                  <div className="w-16 h-16 bg-osg-navy rounded-2xl flex items-center justify-center text-osg-gold text-sm font-black shadow-xl font-sans">
                    AI
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-osg-navy group-hover:rotate-12 transition-transform">
                     <Zap size={24} className="animate-pulse" />
                  </div>
               </div>
               <div className="relative z-10 space-y-4">
                  <h4 className="text-osg-navy font-sans font-black text-3xl xl:text-4xl tracking-tighter leading-[0.9] uppercase">Automated <br/> Optimizations.</h4>
                  <p className="text-[9px] font-black text-osg-navy uppercase tracking-[0.3em] opacity-45">Process automation protocol active //</p>
               </div>
               <div className="relative z-10 pt-7 border-t border-osg-navy/10 flex justify-between items-center gap-4">
                  <span className="text-[9px] font-black text-osg-navy/45 uppercase tracking-[0.25em]">Last Run: 0.2ms ago</span>
                  <ArrowRight size={20} className="text-osg-navy/60 group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
        </div>

      </div>

      {/* 4. FOOTER NOTE */}
      <div className="pt-24 text-center">
         <p className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.8em]">
            Architectural Operating System // Secure Kernel v12.0.4
         </p>
      </div>

    </div>
  );
}

