'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Search, 
  Plus, 
  Loader2, 
  MoreHorizontal,
  ExternalLink,
  Archive,
  Globe,
  Award,
  Link as LinkIcon,
  ChevronRight,
  Terminal
} from 'lucide-react';
import { getBrands } from '@/lib/api/erp';
import AdminQuickActionModal from '@/components/admin/AdminQuickActionModal';

export default function ManageBrandsPage() {
  const [brands, setBrands] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    async function loadBrands() {
      try {
        const data = await getBrands();
        setBrands(data);
      } catch (e) {
        // Fallback
      } finally {
        setLoading(false);
      }
    }
    loadBrands();
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="animate-spin text-osg-gold" size={40} />
      </div>
    );
  }

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 relative pb-32">
      
      {/* 1. ARCHITECTURAL HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-12 border-b border-osg-navy/5">
         <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-osg-gold/40"></div>
               <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Enterprise HQ // Registry</span>
            </div>
            <h1 className="text-5xl lg:text-[7rem] font-sans font-black text-osg-navy tracking-tighter leading-[0.8] uppercase">Brand <br/><span className="text-osg-navy/10">Registry.</span></h1>
            <p className="text-xl text-osg-navy/40 font-sans leading-relaxed max-w-xl">
               Management of global architectural partners, specialized system brands, and technical component catalogs.
            </p>
         </div>

         <div className="flex items-center gap-6">
             <button onClick={() => setIsModalOpen(true)} className="btn-cta !px-12 py-6 !text-[11px] shadow-premium">
                <Plus size={20} className="mr-2" /> NEW BRAND PARTNER
             </button>
         </div>
      </div>

      {/* 2. BRANDS GRID: LUXURY PARTNER TILES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
         {brands.map((brand, i) => (
            <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="bg-white p-12 rounded-[3.5rem] border border-osg-navy/5 shadow-premium group hover:bg-[#0B1C2C] hover:border-osg-gold transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-[480px]"
            >
               <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" />
               
               <div className="relative z-10 flex items-center justify-between mb-12">
                  <div className="w-20 h-20 bg-[#F8F9FB] border border-osg-navy/5 rounded-[1.5rem] flex items-center justify-center text-osg-navy/20 group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500 shadow-sm group-hover:rotate-6">
                     <Globe size={32} />
                  </div>
                  <div className="w-12 h-12 rounded-xl border border-osg-navy/5 flex items-center justify-center text-osg-navy/10 group-hover:text-osg-gold/40 group-hover:border-osg-gold/20 transition-all cursor-pointer">
                     <MoreHorizontal size={24} />
                  </div>
               </div>
               
               <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                     <Award size={16} className="text-osg-gold opacity-40 group-hover:opacity-100 transition-opacity" />
                     <span className="text-[10px] font-black uppercase tracking-[0.5em] text-osg-gold/60">Certified Partner</span>
                  </div>
                  <h3 className="text-3xl font-sans font-black text-osg-navy group-hover:text-white transition-colors uppercase tracking-tighter leading-none">{brand.brand_name || brand.name}</h3>
                  <p className="text-lg text-osg-navy/40 font-sans leading-relaxed group-hover:text-white/40 transition-colors">
                     {brand.description || 'Premium architectural systems and industrial fabrication solutions for high-end enterprise projects.'}
                  </p>
               </div>

               <div className="relative z-10 flex items-center justify-between pt-10 border-t border-osg-navy/5 group-hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-600">Active</span>
                  </div>
                  <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-osg-navy/30 group-hover:text-osg-gold transition-colors">
                     ACCESS CATALOG <ExternalLink size={14} />
                  </button>
               </div>
            </motion.div>
         ))}

         {brands.length === 0 && (
            <div className="col-span-full py-48 bg-white rounded-[4rem] border border-osg-navy/5 shadow-premium flex flex-col items-center justify-center text-center space-y-10">
                <div className="w-24 h-24 bg-osg-navy/5 rounded-full flex items-center justify-center text-osg-navy/10">
                   <ShieldCheck size={56} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-sans font-black text-osg-navy uppercase">Registry Empty.</h3>
                  <p className="text-lg text-osg-navy/40 font-sans max-w-sm mx-auto">
                    No brand partners have been registered in the OSG architectural database.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-cta !px-12 py-5 !text-[11px]">INITIALIZE PARTNER SETUP</button>
            </div>
         )}
      </div>

      {/* 3. FOOTER NOTE */}
      <div className="pt-24 text-center">
         {notice && <p className="mb-6 text-sm font-black text-green-600">{notice}</p>}
         <p className="text-[10px] font-black text-osg-navy/20 uppercase tracking-[0.8em]">
            Brand Authority Registry // Global Partner Protocol Active
         </p>
      </div>

      <AdminQuickActionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eyebrow="Partner Registry"
        title="New Brand Partner"
        submitLabel="Add Partner"
        fields={[
          { name: 'brand_name', label: 'Brand Name', placeholder: 'Premium Systems Partner' },
          { name: 'region', label: 'Region / Country', placeholder: 'Uganda' },
          { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Pending', 'Inactive'] },
          { name: 'description', label: 'Catalog Notes', type: 'textarea', placeholder: 'Component catalog, warranty coverage, and technical scope.' },
        ]}
        onSubmit={(values) => {
          setBrands((current) => [{ name: `BR-${Date.now()}`, ...values }, ...current]);
          setNotice('Brand partner added locally and ready for registry sync.');
          setIsModalOpen(false);
        }}
      />

    </div>
  );
}

