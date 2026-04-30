'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Megaphone, 
  Target, 
  BarChart3, 
  Plus, 
  MoreHorizontal,
  ChevronRight,
  Loader2,
  TrendingUp,
  Mail,
  Search,
  Filter,
  PieChart as PieChartIcon,
  ArrowUpRight,
  TrendingDown,
  X,
  Activity,
  Terminal,
  Layers,
  Zap,
  Globe,
  Award
} from 'lucide-react';
import { getCampaigns, getMarketingInsights } from '@/lib/api/erp';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

export default function MarketingPanelPage() {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [insights, setInsights] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    campaign_name: '',
    status: 'Active',
    campaign_type: 'Digital',
    description: ''
  });

  useEffect(() => {
    async function loadMarketingData() {
      try {
        const [cmds, ins] = await Promise.all([
          getCampaigns(),
          getMarketingInsights()
        ]);
        setCampaigns(cmds);
        setInsights(ins);
      } catch (e) {
        console.error("Marketing connection error:", e);
      } finally {
        setLoading(false);
      }
    }
    loadMarketingData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await (window as any).frappeFetch('Campaign', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      setIsModalOpen(false);
      // Reload
      const [cmds, ins] = await Promise.all([
        getCampaigns(),
        getMarketingInsights()
      ]);
      setCampaigns(cmds);
      setInsights(ins);
    } catch (e) {
      console.error(e);
      setCampaigns((current) => [{ name: `CMP-${Date.now()}`, ...formData, total_leads: 0, total_conversion: '0.0' }, ...current]);
      setIsModalOpen(false);
      setFormData({ campaign_name: '', status: 'Active', campaign_type: 'Digital', description: '' });
    } finally {
      setLoading(false);
    }
  };

  const COLORS = ['#C8A96A', '#0B1C2C', '#1E293B', '#EA580C', '#0891B2'];

  if (loading) {
     return (
       <div className="flex h-96 items-center justify-center">
         <Loader2 className="animate-spin text-osg-gold" size={40} />
       </div>
     );
  }

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-32 relative">
      
      {/* 1. ARCHITECTURAL HEADER: MARKETING STRATEGY */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-12 border-b border-osg-navy/5">
        <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">ERP Module // Marketing</span>
            </div>
            <h1 className="text-5xl lg:text-[7rem] font-sans font-black text-osg-navy tracking-tighter leading-[0.8] uppercase">Campaign <br/><span className="text-osg-navy/10">Command.</span></h1>
            <p className="text-xl text-osg-navy/40 font-sans leading-relaxed max-w-xl">
               Strategic outreach, lead funnel optimization, and high-fidelity performance metrics for global architectural presence.
            </p>
        </div>

        <div className="flex items-center gap-6">
             <button 
               onClick={() => setIsModalOpen(true)}
               className="btn-cta !px-12 py-6 !text-[11px] shadow-premium"
             >
                <Plus size={20} className="mr-2" /> CREATE CAMPAIGN
             </button>
        </div>
      </div>

      {/* 2. CORE KPIS: PRECISION METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
         <MetricBox label="Total Intake" value={insights?.totalLeads || 0} trend="+12.4%" positive={true} icon={Target} />
         <MetricBox label="Active ROI" value="4.2x" trend="+0.8x" positive={true} icon={TrendingUp} />
         <MetricBox label="Unit Cost (CPL)" value="$12.50" trend="-4.2%" positive={true} icon={Activity} />
         <MetricBox label="Conversion Velocity" value={`${insights?.conversionRate || 0}%`} trend="-0.4%" positive={false} icon={Zap} />
      </div>

      {/* 3. ANALYTICS GRID: VISUAL TELEMETRY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         {/* Performance Trend (Line Chart) */}
         <div className="col-span-12 lg:col-span-8 bg-white p-12 rounded-[4rem] border border-osg-navy/5 shadow-premium space-y-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01] pointer-events-none" />
            <div className="flex items-center justify-between relative z-10">
               <div className="flex items-center gap-6">
                  <Terminal className="text-osg-gold" size={20} />
                  <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-osg-navy">Market Acquisition Trail</h3>
               </div>
               <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-osg-gold"></div>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-osg-navy/30">LEAD VOLUME</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-osg-navy"></div>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-osg-navy/30">SALES INTAKE</span>
                  </div>
               </div>
            </div>
            
            <div className="h-[400px] w-full relative z-10 px-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={[
                  { name: 'MON', leads: 40, sales: 24 },
                  { name: 'TUE', leads: 30, sales: 13 },
                  { name: 'WED', leads: 20, sales: 98 },
                  { name: 'THU', leads: 27, sales: 39 },
                  { name: 'FRI', leads: 18, sales: 48 },
                  { name: 'SAT', leads: 23, sales: 38 },
                  { name: 'SUN', leads: 34, sales: 43 },
                ]}>
                   <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C8A96A" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#C8A96A" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#0B1C2C" strokeOpacity={0.05} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 900, fill: '#0B1C2C', opacity: 0.2}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 900, fill: '#0B1C2C', opacity: 0.2}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '2rem', border: 'none', background: '#0B1C2C', color: '#fff', padding: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                    itemStyle={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                    labelStyle={{ fontSize: '12px', fontWeight: '900', color: '#C8A96A', marginBottom: '0.5rem', fontFamily: 'sans-serif', fontStyle: '' }}
                  />
                  <Area type="monotone" dataKey="leads" stroke="#C8A96A" strokeWidth={4} fillOpacity={1} fill="url(#colorLeads)" />
                  <Area type="monotone" dataKey="sales" stroke="#0B1C2C" strokeWidth={4} fillOpacity={0} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
         </div>

         {/* Channel Distribution (Pie Chart) */}
         <div className="col-span-12 lg:col-span-4 bg-white p-12 rounded-[4rem] border border-osg-navy/5 shadow-premium space-y-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01] pointer-events-none" />
            <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-osg-navy relative z-10">Lead Source Allocation</h3>
            <div className="h-[280px] relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={insights?.sourceDistribution || [{ name: 'Other', value: 1 }]}
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                  >
                    {insights?.sourceDistribution?.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="hover:opacity-80 transition-opacity cursor-pointer outline-none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '1.5rem', border: 'none', background: '#0B1C2C', color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="text-center">
                    <p className="text-[9px] font-black text-osg-navy/20 uppercase tracking-[0.4em] leading-none mb-1">Global</p>
                    <p className="text-2xl font-sans font-black text-osg-navy leading-none">Market</p>
                 </div>
              </div>
            </div>
            
            <div className="space-y-6 relative z-10">
              {insights?.sourceDistribution?.map((item: any, i: number) => (
                <div key={i} className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.4em] group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                    <span className="text-osg-navy/40 group-hover:text-osg-navy transition-colors">{item.name}</span>
                  </div>
                  <span className="text-osg-navy font-sans font-black">{item.value}</span>
                </div>
              ))}
            </div>
         </div>
      </div>

      {/* 4. CAMPAIGN COMMAND CENTER: ARCHITECTURAL CARDS */}
      <div className="space-y-12">
         <div className="flex items-center justify-between px-8">
            <div className="flex items-center gap-6">
               <Layers className="text-osg-gold" size={20} />
               <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-osg-navy">Active Deployment Registry ({campaigns.length})</h3>
            </div>
            <button className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.5em] hover:text-osg-gold transition-colors">ARCHIVAL HISTORY <ChevronRight size={14} className="inline ml-2" /></button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {campaigns.map((camp, i) => (
               <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 rounded-[4rem] border border-osg-navy/5 shadow-premium group hover:bg-[#0B1C2C] hover:border-osg-gold transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-[480px]"
               >
                  <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" />
                  
                  <div className="relative z-10 flex justify-between items-start mb-12">
                     <div className="w-16 h-16 rounded-[1.5rem] bg-[#F8F9FB] border border-osg-navy/5 flex items-center justify-center text-osg-navy/20 group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-sm group-hover:rotate-6">
                        <Megaphone size={28} />
                     </div>
                     <span className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-sm transition-all duration-500 ${
                       camp.status === 'Active' ? 'bg-green-500/10 text-green-600 border border-green-500/20 group-hover:bg-green-500 group-hover:text-white' : 'bg-white/10 text-white/20 border border-white/5 group-hover:text-white/40'
                     }`}>
                        {camp.status}
                     </span>
                  </div>
                  
                  <div className="space-y-6 relative z-10">
                     <h4 className="text-3xl font-sans font-black text-osg-navy group-hover:text-white transition-colors uppercase tracking-tighter leading-none">{camp.campaign_name || camp.name}</h4>
                     <p className="text-lg text-osg-navy/40 font-sans leading-relaxed group-hover:text-white/40 transition-colors line-clamp-2">Primary launch strategy for new high-performance architectural glazing systems.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 pt-10 border-t border-osg-navy/5 group-hover:border-white/10 relative z-10 transition-colors">
                     <div className="space-y-1">
                        <p className="text-[9px] font-black text-osg-navy/20 uppercase tracking-[0.4em] group-hover:text-white/20 transition-colors">Leads In</p>
                        <p className="text-2xl font-sans font-black text-osg-navy group-hover:text-white transition-colors">{camp.total_leads || 0}</p>
                     </div>
                     <div className="text-right space-y-1">
                        <p className="text-[9px] font-black text-osg-navy/20 uppercase tracking-[0.4em] group-hover:text-white/20 transition-colors">Conversion</p>
                        <p className="text-2xl font-sans font-black text-osg-gold">{camp.total_conversion || '0.0'}%</p>
                     </div>
                  </div>
               </motion.div>
            ))}

            {campaigns.length === 0 && (
              <div className="col-span-full py-32 bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium flex flex-col items-center justify-center text-center space-y-10">
                  <div className="w-24 h-24 bg-osg-navy/5 rounded-full flex items-center justify-center text-osg-navy/10">
                     <Megaphone size={56} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-sans font-black text-osg-navy uppercase">No Active Campaigns.</h3>
                    <p className="text-lg text-osg-navy/40 font-sans max-w-sm mx-auto">
                      The marketing command center is active but no matching deployment data was found in the OSG cloud.
                    </p>
                  </div>
                  <button onClick={() => setIsModalOpen(true)} className="btn-cta !px-12 py-5 !text-[11px]">LAUNCH INITIAL CAMPAIGN</button>
              </div>
            )}
         </div>
      </div>

      {/* 5. FOOTER NOTE */}
      <div className="pt-24 text-center">
         <p className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.8em]">
            Marketing Automation Protocol // Market Sync v5.5.1
         </p>
      </div>

      {/* NEW CAMPAIGN MODAL: Luxury Strategy Launcher */}
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
                      <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em]">Strategy Protocol // Deployment</span>
                   </div>
                   <h3 className="text-3xl sm:text-4xl font-sans font-black text-osg-navy tracking-normal uppercase leading-none">Launch.</h3>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-osg-navy/5 flex items-center justify-center text-osg-navy/30 hover:text-red-600 hover:shadow-premium transition-all">
                  <X size={22} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[66vh] overflow-y-auto">
                <div className="space-y-2">
                  <label className="block text-[11px] font-black uppercase tracking-[0.4em] text-osg-navy/30 ml-4">Campaign Designation</label>
                  <input 
                    required
                    type="text" 
                    value={formData.campaign_name}
                    onChange={(e) => setFormData({...formData, campaign_name: e.target.value})}
                    placeholder="E.G. Q4 ARCHITECTURAL SYSTEMS GLOBAL LAUNCH"
                    className="w-full bg-white border border-osg-navy/10 focus:border-osg-gold/50 px-4 py-3 rounded-2xl text-sm font-bold outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-black uppercase tracking-[0.4em] text-osg-navy/30 ml-4">Strategic Brief</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="ENTER OPERATIONAL OBJECTIVES AND TARGET SECTORS..."
                    className="w-full bg-white border border-osg-navy/10 focus:border-osg-gold/50 px-4 py-3 rounded-2xl text-sm font-bold outline-none transition-all h-40 resize-none"
                  />
                </div>

                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full btn-cta !py-8 !text-[12px] shadow-premium"
                >
                  {loading ? <Loader2 className="animate-spin" size={24} /> : 'INITIALIZE DEPLOYMENT'}
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}

function MetricBox({ label, value, trend, positive, icon: Icon }: { label: string, value: string | number, trend: string, positive: boolean, icon: any }) {
  return (
    <div className="bg-white p-12 rounded-[4rem] border border-osg-navy/5 shadow-premium group hover:bg-[#0B1C2C] hover:border-osg-gold transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-[320px]">
       <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01] pointer-events-none group-hover:opacity-[0.05] transition-opacity" />
       
       <div className="flex justify-between items-start relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#F8F9FB] flex items-center justify-center text-osg-navy/20 group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-sm group-hover:rotate-6">
             <Icon size={28} />
          </div>
          <div className={`flex items-center gap-3 text-[10px] font-black ${positive ? 'text-green-500' : 'text-red-500'} uppercase tracking-[0.3em]`}>
             {positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />} {trend}
          </div>
       </div>
       
       <div className="space-y-4 relative z-10">
          <span className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.5em] group-hover:text-osg-gold transition-colors">{label}</span>
          <h4 className="text-[4rem] font-sans font-black text-osg-navy tracking-tighter leading-none group-hover:text-white transition-colors uppercase">{value}</h4>
       </div>
    </div>
  );
}

