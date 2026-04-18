'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { techData, CategoryKey } from '@/lib/tech-data';

interface TechShowcaseProps {
  categoryKey: CategoryKey;
}

export default function TechShowcase({ categoryKey }: TechShowcaseProps) {
  const data = techData[categoryKey];
  const [activeTab, setActiveTab] = useState(data.subCategories[0].id);

  if (!data) return null;

  const currentSpecs = data.specs[activeTab] || [];

  return (
    <div className="card-terminal bg-grid-blueprint border-white/10 min-h-[600px] flex flex-col lg:flex-row overflow-hidden group/container">
      {/* Sidebar Navigator */}
      <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-white/5 bg-osg-navy/40 backdrop-blur-md z-20">
        <div className="p-8 border-b border-white/5 bg-osg-navy/20 relative">
          <div className="absolute top-0 right-0 p-2 opacity-20 group-hover/container:opacity-40 transition-opacity">
            <span className="text-[10px] font-mono text-osg-gold">SCN_LN / {data.id.substring(0, 3).toUpperCase()}</span>
          </div>
          <h3 className="text-[10px] font-black text-osg-gold uppercase tracking-[0.4em] mb-2 font-mono">System Selector</h3>
          <p className="text-[9px] text-white/40 uppercase font-black tracking-widest leading-none">Initialize Category Specs</p>
        </div>
        <div className="p-4 space-y-2">
          {data.subCategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveTab(sub.id)}
              className={`w-full group flex items-center justify-between p-4 transition-all duration-500 relative ${
                activeTab === sub.id ? 'bg-osg-gold text-osg-navy' : 'text-white/40 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-[11px] font-black uppercase tracking-widest transition-transform group-hover:translate-x-2">{sub.label}</span>
              <ChevronRight size={14} className={activeTab === sub.id ? 'opacity-100' : 'opacity-0'} />
              {activeTab === sub.id && (
                <motion.div layoutId="active-marker" className="absolute left-0 w-1.5 h-full bg-osg-navy" />
              )}
            </button>
          ))}
        </div>
        <div className="mt-auto p-8 border-t border-white/5 text-[9px] font-mono text-white/20 uppercase tracking-widest">
            OSG / TECH-SPEC / {data.id} / v1.4
        </div>
      </div>

      {/* 3D Visualization Area */}
      <div className="flex-1 relative p-12 lg:p-20 overflow-hidden bg-osg-navy/20 flex flex-col">
        {/* Background Layered Grid */}
        <div className="absolute inset-0 bg-scanlines opacity-[0.03] pointer-events-none" />
        
        {/* Animated Headline */}
        <div className="relative z-10 mb-12">
            <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em] mb-4 block animate-pulse">Analyzing Structural Logic...</span>
            <h2 className="text-display-sm text-white font-black uppercase tracking-tighter italic leading-none">
              Technical <span className="text-osg-gold">Schematic.</span>
            </h2>
        </div>

        {/* Dynamic 3D Viewer Placeholder */}
        <div className="flex-1 flex items-center justify-center perspective-[1200px] mb-12 relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.8, rotateX: 45, rotateY: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 20, rotateY: -15 }}
                    exit={{ opacity: 0, scale: 1.1, rotateX: -45, rotateY: 30 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-sm aspect-square transform-gpu preserve-3d"
                >
                    {/* Layered Architectural Sketch (Isometric style) */}
                    <div className="absolute inset-0 border-2 border-osg-gold/20 bg-osg-gold/5 backdrop-blur-sm -translate-z-10 group-hover/container:-translate-z-20 transition-all duration-700" />
                    
                    {/* Main Schematic Graphic */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-64 h-64 border border-osg-gold/30 flex items-center justify-center">
                             {/* Technical Grid Overlay */}
                             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--osg-gold) 1px, transparent 1px), linear-gradient(90deg, var(--osg-gold) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                            {/* Animated Crosshairs */}
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1] }} 
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-osg-gold" 
                            />
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1] }} 
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-osg-gold" 
                            />
                            
                            {/* Dynamic Content based on Category */}
                            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-5">
                                <span className="text-[10px] font-mono text-osg-gold/80 tracking-[0.3em] uppercase">SYSTEM / {activeTab.toUpperCase()}</span>
                                <div className="w-16 h-[2px] bg-osg-gold/40" />
                                <div className="space-y-1">
                                    <div className="h-0.5 bg-osg-gold/40 w-full" />
                                    <div className="h-0.5 bg-osg-gold/20 w-3/4 mx-auto" />
                                    <div className="h-0.5 bg-osg-gold/10 w-1/2 mx-auto" />
                                </div>
                                <span className="text-[9px] font-sans text-white/30 uppercase tracking-[0.2em] leading-relaxed max-w-[200px]">
                                    Engineered architectural {data.label.toLowerCase()} systems optimized for high-performance building envelopes.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Exploded View Floating Elements */}
                    <motion.div 
                        animate={{ y: [-15, 15, -15], rotateZ: [-2, 2, -2] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-16 -right-8 p-5 border border-white/10 bg-osg-navy/90 backdrop-blur-xl translate-z-40 shadow-2xl"
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-[8px] font-mono text-osg-gold uppercase">SPEC_DATA_PKT</span>
                            <div className="h-px w-full bg-white/10" />
                            <div className="flex gap-1 mt-1">
                                <div className="w-1 h-1 bg-osg-gold animate-pulse" />
                                <div className="w-1 h-1 bg-osg-gold/40" />
                                <div className="w-1 h-1 bg-osg-gold/20" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Technical Data Console */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentSpecs.map((spec, i) => (
                <motion.div
                    key={spec.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 border border-white/10 bg-white/[0.02] group/item hover:bg-white/[0.05] hover:border-osg-gold/40 transition-all duration-500 cursor-default relative overflow-hidden"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-osg-gold/5 border border-osg-gold/20 text-osg-gold group-hover/item:bg-osg-gold group-hover/item:text-osg-navy transition-all duration-500">
                            <spec.icon size={16} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono text-osg-gold/50 tracking-widest uppercase">{spec.id}</span>
                            <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">{spec.label}</span>
                        </div>
                    </div>
                    <div>
                        <span className="text-base font-black text-white group-hover/item:text-osg-gold transition-colors duration-500 tracking-tight">
                            {spec.value}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
