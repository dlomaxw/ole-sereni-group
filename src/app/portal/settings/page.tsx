'use client';

import { 
  User, 
  Shield, 
  Settings, 
  ChevronRight, 
  ArrowUpRight, 
  Globe, 
  Monitor, 
  Bell, 
  Trash2,
  Lock,
  Mail,
  Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

export default function SettingsPage() {
  const { osgUser } = useAuth();

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[9px] font-black text-osg-gold uppercase tracking-[0.4em] mb-10">
        <span className="opacity-40">Portal</span>
        <ChevronRight size={10} className="opacity-20" />
        <span className="opacity-40">System Control</span>
        <ChevronRight size={10} className="opacity-20" />
        <span className="text-osg-navy">Profile & Preferences</span>
      </nav>

      {/* Page Header */}
      <header className="mb-20">
        <h1 className="text-6xl font-sans font-black text-osg-navy tracking-tighter mb-6 leading-[0.85] uppercase">
          Client <br /> <span className="text-osg-gold">Identity</span>
        </h1>
        <p className="text-[11px] font-bold text-osg-navy/50 leading-relaxed uppercase tracking-widest max-w-sm">
          Management of operational identity, secure access parameters, and technical communication preferences.
        </p>
      </header>

      <div className="space-y-10">
        {/* Profile Card */}
        <div className="bg-white border border-osg-navy/5 p-12 shadow-2xl shadow-osg-navy/5 relative overflow-hidden group">
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
             <div className="relative">
                <div className="w-32 h-32 bg-osg-navy border border-osg-navy flex items-center justify-center p-0.5 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(osgUser?.displayName || 'Client')}&background=0A1628&color=C9A84C&bold=true`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                {/* Decorative Corner */}
                <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-osg-gold"></div>
             </div>
             
             <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                   <h2 className="text-3xl font-sans font-black text-osg-navy tracking-tight uppercase leading-none">{osgUser?.displayName || 'Principal User'}</h2>
                   <span className="text-[8px] font-black px-3 py-1 bg-osg-gold text-osg-navy uppercase tracking-widest self-center md:self-auto">Verified Asset Lead</span>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mb-8 text-[9px] font-black text-osg-navy/40 uppercase tracking-widest">
                   <div className="flex items-center gap-2">
                      <Mail size={12} className="text-osg-gold" />
                      <span>{osgUser?.email || 'user@example.com'}</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Smartphone size={12} className="text-osg-gold" />
                      <span>+256 767 358 604</span>
                   </div>
                </div>
                <button className="px-8 py-4 bg-osg-navy text-white text-[9px] font-black uppercase tracking-widest hover:bg-osg-gold hover:text-osg-navy transition-all">
                   Modify Identity Profile
                </button>
             </div>
          </div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-osg-gold/[0.02] rounded-full translate-x-20 -translate-y-20 group-hover:scale-110 transition-transform duration-1000"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           {/* Security Settings */}
           <div className="bg-osg-navy text-white p-12 group transition-all">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                 <Shield size={18} className="text-osg-gold" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Operational Security</h3>
              </div>
              
              <div className="space-y-6 mb-12">
                 {[
                   { label: 'Multi-Factor Authorization', status: 'Active (SMS)', icon: Smartphone },
                   { label: 'Identity Encryption Key', status: 'Last rotated 12d ago', icon: Lock },
                   { label: 'Access Log Monitoring', status: '0 unresolved issues', icon: Globe },
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-5">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-osg-gold">
                         <item.icon size={16} />
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest">{item.label}</p>
                         <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-1">{item.status}</p>
                      </div>
                   </div>
                 ))}
              </div>
              
              <button className="w-full py-5 border border-white/20 text-white/60 hover:text-white hover:bg-white/5 transition-all text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-3">
                 Manage Security Vault <ArrowUpRight size={14} />
              </button>
           </div>

           {/* Preferences Settings */}
           <div className="bg-osg-offwhite p-12 border border-osg-navy/5">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-osg-navy/5">
                 <Settings size={18} className="text-osg-navy/40" />
                 <h3 className="text-[10px] font-black text-osg-navy uppercase tracking-[0.4em]">System Communication</h3>
              </div>

              <div className="space-y-8 mb-12">
                 {[
                   { label: 'Real-time Site Sync', status: 'Enabled', icon: Monitor },
                   { label: 'Weekly Milestone Summaries', status: 'Enabled', icon: Bell },
                   { label: 'Technical Report Broadcast', status: 'Immediate', icon: Mail },
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center justify-between group/pref cursor-pointer">
                      <div className="flex items-center gap-5">
                         <div className="w-10 h-10 bg-osg-navy/5 flex items-center justify-center text-osg-navy/20 group-hover/pref:bg-osg-navy group-hover/pref:text-osg-gold transition-all">
                            <item.icon size={16} />
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-osg-navy uppercase tracking-widest">{item.label}</p>
                            <p className="text-[8px] font-bold text-osg-navy/20 uppercase tracking-widest mt-1">{item.status}</p>
                         </div>
                      </div>
                      <div className="w-8 h-4 bg-osg-navy/10 rounded-full relative">
                         <div className="absolute right-1 top-1 w-2 h-2 bg-osg-gold rounded-full"></div>
                      </div>
                   </div>
                 ))}
              </div>

              <button className="w-full py-5 bg-osg-navy text-white text-[9px] font-black uppercase tracking-widest hover:bg-osg-gold hover:text-osg-navy transition-all">
                 Update Preferences Base
              </button>
           </div>
        </div>

        {/* Deactivation Section */}
        <div className="pt-20 border-t border-osg-navy/5 flex flex-col md:flex-row justify-between items-center gap-10">
           <div>
              <p className="text-[10px] font-black text-osg-navy uppercase tracking-widest mb-1">Archive Operational Access</p>
              <p className="text-[9px] font-bold text-osg-navy/30 uppercase tracking-widest">Workspace data will be retained for structural record-keeping.</p>
           </div>
           <button className="px-8 py-4 border border-red-100 text-red-600 hover:bg-red-50 transition-all text-[9px] font-black uppercase tracking-widest flex items-center gap-3">
              <Trash2 size={14} /> Initialize Decommissioning
           </button>
        </div>
      </div>
    </div>
  );
}

