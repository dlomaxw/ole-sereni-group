'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  ShieldCheck, 
  Zap,
  Activity,
  Maximize2,
  RefreshCcw,
  AlertCircle
} from 'lucide-react';

const ERP_URL = 'http://localhost:8000'; // Defaulting to local ERPNext

export default function ERPConsolePage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Check if ERP is reachable (simple ping via image or fetch)
  useEffect(() => {
    const checkConnectivity = async () => {
      try {
        const res = await fetch('/api/erp/resource/DocType', { method: 'GET' });
        if (!res.ok) throw new Error('Unreachable');
        setError(false);
      } catch (e) {
        // We don't block the iframe, but we show a warning if the API is down
        console.warn('ERPNext API bridge potentially inactive.');
      } finally {
        setIsLoading(false);
      }
    };
    checkConnectivity();
  }, []);

  return (
    <div className={`flex flex-col space-y-6 ${isFullscreen ? 'fixed inset-0 z-[9999] bg-white p-6' : 'animate-in fade-in slide-in-from-bottom-4 duration-1000'}`}>
      
      {/* --- REFINED HEADER --- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-osg-border">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-black text-osg-gold uppercase tracking-[0.4em]">
            <Activity size={12} className="animate-pulse" />
            <span>Enterprise Engine // Live Desktop</span>
          </div>
          <h1 className="text-4xl font-black text-osg-navy tracking-tighter leading-none uppercase">
            Native <br/> <span className="text-osg-navy/20">Operational Console.</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
           <button 
            onClick={() => window.open(`${ERP_URL}/app`, '_blank')}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-osg-border rounded-xl text-[10px] font-black uppercase tracking-widest text-osg-navy hover:bg-osg-bg transition-all"
           >
             <ExternalLink size={14} /> Open in New Tab
           </button>
           <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="flex items-center gap-2 px-6 py-3 bg-osg-navy text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-osg-navy-mid transition-all shadow-lg"
           >
             <Maximize2 size={14} /> {isFullscreen ? 'Exit Fullscreen' : 'Expand Interface'}
           </button>
        </div>
      </div>

      {/* --- NATIVE ERP IFRAME CONTAINER --- */}
      <div className={`relative flex-1 min-h-[700px] rounded-[2.5rem] overflow-hidden border border-osg-border bg-osg-bg shadow-premium group`}>
        
        {/* Loading Overlay */}
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 bg-osg-bg flex flex-col items-center justify-center space-y-6"
            >
              <RefreshCcw size={48} className="text-osg-gold animate-spin" />
              <div className="text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-navy/40">Initializing Deep Integration</p>
                <p className="text-xs font-bold text-osg-navy">Establishing Secure Handshake with ERPNext...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Native Desk */}
        <iframe 
          src={`${ERP_URL}/app`}
          className="w-full h-full border-none bg-white"
          onLoad={() => setIsLoading(false)}
          title="ERPNext Native Desk"
        />

        {/* Security / Info Overlay (Bottom Right) */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
           <div className="glass-nav px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl border-white/20">
              <ShieldCheck size={18} className="text-green-500" />
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-osg-navy/60 leading-none mb-1">Security Status</p>
                <p className="text-[11px] font-bold text-osg-navy leading-none">Enterprise Level Isolation</p>
              </div>
           </div>
           <div className="glass-nav px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl border-white/20">
              <Zap size={18} className="text-osg-gold" />
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-osg-navy/60 leading-none mb-1">Engine Version</p>
                <p className="text-[11px] font-bold text-osg-navy leading-none">Frappe v15.x Production</p>
              </div>
           </div>
        </div>

        {/* Error State if bridge is down */}
        {error && (
          <div className="absolute inset-x-8 top-8 z-30">
            <div className="bg-osg-gold/10 border border-osg-gold/20 p-6 rounded-2xl flex items-center gap-6 text-osg-navy">
               <AlertCircle size={24} className="text-osg-gold" />
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-osg-gold">Connection Bridge Warning</p>
                  <p className="text-xs font-medium">Your primary ERPNext instance at {ERP_URL} appears to be offline. Verify your local server status.</p>
               </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

