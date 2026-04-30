'use client';

import { 
  Users, 
  Settings, 
  Plus,
  Loader2,
  Calendar,
  MessageSquare,
  Wrench,
  Package,
  Target
} from 'lucide-react';

export default function OperationalShell({ 
  title = "Operational Module", 
  description = "Module overview and management." 
}: { 
  title?: string, 
  description?: string 
}) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
         <div>
            <h1 className="text-3xl font-montserrat font-black text-osg-navy tracking-tight">{title}</h1>
            <p className="text-[14px] text-osg-navy/50 font-medium mt-1">{description}</p>
         </div>

         <div className="flex items-center gap-4">
            <button className="bg-osg-gold text-osg-navy px-8 py-3 rounded-lg text-[12px] font-black uppercase tracking-widest hover:bg-osg-navy hover:text-white transition-all shadow-lg shadow-osg-gold/20 flex items-center gap-2">
               + Create New
            </button>
         </div>
      </div>

      {/* 2. PLACEHOLDER CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-12 rounded-2xl border border-osg-navy/5 shadow-sm flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-osg-navy/10">
               <Settings size={40} />
            </div>
            <div>
               <h3 className="text-xl font-black text-osg-navy">Module Initialization</h3>
               <p className="text-sm text-osg-navy/40 font-medium max-w-xs mt-2">
                  This operational module is currently synchronizing with the primary ERPNext database.
               </p>
            </div>
         </div>

         <div className="bg-white p-12 rounded-2xl border border-osg-navy/5 border-dashed flex flex-col items-center justify-center text-center space-y-6">
             <div className="text-osg-navy/5">
                <Target size={100} />
             </div>
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-navy/20">Operational Sync in Progress</p>
         </div>
      </div>

      {/* 3. RECENT ACTIVITY LIST (MOCK) */}
      <div className="bg-white p-8 rounded-2xl border border-osg-navy/5 shadow-sm">
         <h3 className="font-montserrat font-black text-sm uppercase tracking-widest mb-8">Module Logs</h3>
         <div className="space-y-6 grayscale opacity-30 pointer-events-none">
            {[1, 2, 3].map(i => (
               <div key={i} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-gray-50 rounded-lg" />
                     <div className="h-4 w-48 bg-gray-50 rounded" />
                  </div>
                  <div className="h-3 w-20 bg-gray-50 rounded" />
               </div>
            ))}
         </div>
         <div className="mt-8 flex justify-center">
            <span className="text-[10px] font-black text-osg-navy/20 uppercase tracking-widest">Connect ERP to view real-time logs</span>
         </div>
      </div>

    </div>
  );
}

