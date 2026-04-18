'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Upload, CheckCircle, AlertTriangle, 
  ShieldCheck, Clock, FileText, ChevronRight, CornerDownRight, 
  Zap, Terminal, Cpu, Database, Activity, LayoutGrid, Info
} from 'lucide-react';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';

/* ─── Architectural UI Components ─────────────────────────────────────── */

function FloatingInput({ label, name, type = 'text', value, onChange, placeholder, required = false, systemIdent }: any) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;

  return (
    <div className="relative group mb-12">
      <div className="flex justify-between items-center mb-4">
        <label className={`text-[9px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${focused ? 'text-osg-gold' : 'text-osg-navy/30'}`}>
          {label} {required && '*'}
        </label>
        {systemIdent && <span className="text-[8px] font-mono text-osg-navy/10 uppercase tracking-widest">{systemIdent}</span>}
      </div>
      <div className="relative">
        <input 
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={focused ? placeholder : ''}
          className={`
            w-full bg-white/5 border border-osg-navy/5 p-6 text-osg-navy text-sm outline-none transition-all duration-700
            ${focused ? 'border-osg-gold bg-white shadow-architectural' : 'hover:border-osg-navy/20'}
          `}
        />
        <div className={`absolute bottom-0 left-0 h-[2px] bg-osg-gold transition-all duration-1000 ${focused ? 'w-full' : 'w-0'}`} />
      </div>
    </div>
  );
}

function FloatingSelect({ label, name, value, onChange, options, required = false, systemIdent }: any) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;

  return (
    <div className="relative group mb-12">
      <div className="flex justify-between items-center mb-4">
        <label className={`text-[9px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${focused ? 'text-osg-gold' : 'text-osg-navy/30'}`}>
          {label} {required && '*'}
        </label>
        {systemIdent && <span className="text-[8px] font-mono text-osg-navy/10 uppercase tracking-widest">{systemIdent}</span>}
      </div>
      <div className="relative">
        <select 
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`
            w-full bg-white/5 border border-osg-navy/5 p-6 text-osg-navy text-sm outline-none transition-all duration-700 appearance-none cursor-pointer
            ${focused ? 'border-osg-gold bg-white shadow-architectural' : 'hover:border-osg-navy/20'}
          `}
        >
          <option value="" disabled>Select {label}...</option>
          {options.map((o: string) => <option key={o} value={o} className="bg-white">{o}</option>)}
        </select>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity">
          <ChevronRight size={14} className="rotate-90" />
        </div>
        <div className={`absolute bottom-0 left-0 h-[2px] bg-osg-gold transition-all duration-1000 ${focused ? 'w-full' : 'w-0'}`} />
      </div>
    </div>
  );
}

const steps = [
  { id: '01', title: 'Identity', subtitle: 'Project Stakeholder', icon: Terminal },
  { id: '02', title: 'Scope', subtitle: 'Technical Parameters', icon: Cpu },
  { id: '03', title: 'Assets', subtitle: 'BOQs & Documentation', icon: Database }
];

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    sector: '', service: '', location: '', stage: '', urgency: '', budget: '',
    description: '',
  });

  const handleChange = (e: any) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    try {
      const fileUrls: string[] = [];
      for (const file of files) {
        const fileRef = storageRef(storage, `quote_uploads/${Date.now()}_${file.name}`);
        await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);
        fileUrls.push(url);
      }
      await addDoc(collection(db, 'quote_requests'), {
        ...form, fileUrls,
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'quote_page',
      });
      setStatus('success');
    } catch (err: any) {
      console.error(err);
      setStatus('error');
    } finally {
      setUploading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-osg-creme flex items-center justify-center font-sans relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05]" />
        <div className="text-center max-w-xl px-10 relative z-10">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
            className="w-32 h-32 flex items-center justify-center mx-auto mb-12 bg-white border border-osg-navy/5 shadow-architectural relative overflow-hidden group">
            <div className="absolute inset-0 bg-osg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            <CheckCircle className="text-osg-gold group-hover:text-osg-navy relative z-10 transition-colors" size={48} />
          </motion.div>
          <span className="text-system-label mb-4 block">Transmission Confirmed</span>
          <h2 className="text-display mb-8">Proposal <br/><span className="text-osg-gold italic">Initiated.</span></h2>
          <p className="text-body-muted mb-12 max-w-sm mx-auto">Our engineering systems have received your technical brief. An itemized BOQ and structural proposal are being compiled.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/" className="btn-primary">RETURN TO TERMINAL</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-osg-creme min-h-screen flex flex-col lg:flex-row overflow-hidden font-sans">
      {/* ─── Sidebar: Intelligence Panel (35%) ─── */}
      <section className="lg:w-[35vw] bg-osg-navy relative flex flex-col justify-between p-12 lg:p-24 overflow-hidden order-2 lg:order-1">
        <div className="absolute inset-0 bg-grid-blueprint opacity-5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-osg-navy via-transparent to-osg-gold/5 pointer-events-none" />
        
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-4 text-white/40 font-black uppercase text-[10px] tracking-[0.4em] mb-20 hover:text-osg-gold transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> COMMAND CENTER
          </Link>
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-system-label mb-6 block text-osg-gold">Project Configurator // v1.2</span>
            <h1 className="text-display text-white mb-10 leading-[0.85]">Technical <br /> <span className="text-white/20">Briefing.</span></h1>
            <p className="text-body-muted text-white/40 max-w-sm mb-20 uppercase tracking-widest leading-loose">Initialize structural parameters to generate high-precision fabrication quotes.</p>
          </motion.div>

          {/* Stepper: Structural Layout */}
          <div className="space-y-16 relative">
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-white/10" />
            {steps.map((s, i) => (
              <div key={s.id} className="relative flex items-center gap-12 group cursor-pointer" onClick={() => i <= step && setStep(i)}>
                <div className={`w-10 h-10 flex items-center justify-center text-[11px] font-black z-10 transition-all duration-700 bg-osg-navy border ${i === step ? 'border-osg-gold text-osg-navy bg-osg-gold scale-125 shadow-gold' : i < step ? 'border-osg-gold text-osg-gold' : 'border-white/20 text-white/30'}`}>
                    {i < step ? '✓' : <s.icon size={14} />}
                </div>
                <div className={`transition-all duration-700 ${i === step ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-[-10px]'}`}>
                  <span className={`block text-[10px] font-black uppercase tracking-[0.4em] mb-1 ${i === step ? 'text-osg-gold' : 'text-white'}`}>{s.title}</span>
                  <span className="block text-[8px] text-white/40 font-mono tracking-widest uppercase">{s.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Telemetry */}
        <div className="relative z-10 mt-20 pt-12 border-t border-white/5 flex justify-between items-end">
             <div className="space-y-2">
                 <span className="text-system-label text-osg-gold/50 !tracking-widest">Latency Status</span>
                 <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                     <span className="text-xs font-black text-white italic">LIVE_UPLINK</span>
                 </div>
             </div>
             <div className="text-right">
                 <span className="text-system-label text-osg-gold/50 !tracking-widest">Transmission Rate</span>
                 <span className="block text-xl font-black text-white italic leading-none mt-1">99.2% ACC</span>
             </div>
        </div>
      </section>

      {/* ─── Main Interface: Interactive Canvas (65%) ─── */}
      <section className="flex-1 bg-white relative lg:overflow-y-auto scrollbar-hide order-1 lg:order-2 flex flex-col transition-all duration-700">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
        
        <div className="container-osg max-w-5xl py-24 lg:py-32 relative z-10">
          <form onSubmit={step === 2 ? handleSubmit : e => e.preventDefault()} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Form Column (8 of 12) */}
            <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div key="step0" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="space-y-16">
                      <div className="space-y-4">
                        <span className="badge-system">Initialization Phase</span>
                        <h2 className="text-heading-xl text-osg-navy italic">Primary <br/><span className="text-osg-navy/20">Stakeholder.</span></h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                        <FloatingInput label="Full Name" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. David Sereni" systemIdent="IDENT_01" />
                        <FloatingInput label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="e.g. d.sereni@company.com" systemIdent="IDENT_02" />
                        <FloatingInput label="Direct Line" name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. +256 7XX XXX XXX" systemIdent="IDENT_03" />
                        <FloatingInput label="Organisation" name="company" value={form.company} onChange={handleChange} placeholder="e.g. Sereni Arch Group" systemIdent="IDENT_04" />
                      </div>
                      <div className="pt-8 border-t border-osg-navy/5">
                        <button type="button" onClick={() => setStep(1)} className="btn-primary group w-full sm:w-auto">
                            INITIALIZE PARAMETERS <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="space-y-16">
                      <div className="space-y-4">
                        <span className="badge-system">Technical Alignment</span>
                        <h2 className="text-heading-xl text-osg-navy italic">Structural <br/><span className="text-osg-navy/20">Constraints.</span></h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 bg-osg-navy/[0.02] p-8 lg:p-12 border border-osg-navy/5 shadow-inner">
                        <FloatingSelect label="Project Sector" name="sector" value={form.sector} onChange={handleChange} required options={['Residential', 'Hospitality', 'Commercial', 'Corporate', 'Retail', 'Institutional', 'Industrial']} systemIdent="SYS_SECTOR" />
                        <FloatingSelect label="Core Product" name="service" value={form.service} onChange={handleChange} required options={['Aluminium & Glass Systems', 'Gypsum Works & Ceilings', 'Painting & Tiling', 'Carpentry & Joinery', 'Electrical Installations', 'Multiple Services']} systemIdent="SYS_CORE" />
                        <FloatingSelect label="Maturity Stage" name="stage" value={form.stage} onChange={handleChange} options={['Concept / Design', 'Tender Released', 'Active Construction', 'Renovation Brief']} systemIdent="SYS_STAGE" />
                        <FloatingInput label="Project Location" name="location" value={form.location} onChange={handleChange} placeholder="e.g. Nakasero, Kampala" systemIdent="SYS_LOC" />
                        <FloatingSelect label="Time Horizon" name="urgency" value={form.urgency} onChange={handleChange} options={['Immediate fit-out', 'Within Quarter', 'Future Phase']} systemIdent="SYS_TIME" />
                        <FloatingSelect label="Budget Bracket" name="budget" value={form.budget} onChange={handleChange} options={['UGX 10M – 50M', 'UGX 50M – 200M', 'UGX 200M+', 'Enterprise Level']} systemIdent="SYS_VOL" />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-osg-navy/5">
                        <button type="button" onClick={() => setStep(0)} className="btn-outline flex-1 group !px-8">
                             <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> PREVIOUS
                        </button>
                        <button type="button" onClick={() => setStep(2)} className="btn-primary flex-[2] group">
                             ATTACH TECHNICAL ASSETS <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="space-y-16">
                      <div className="space-y-4">
                        <span className="badge-system">Final Transmission</span>
                        <h2 className="text-heading-xl text-osg-navy italic">Data <br/><span className="text-osg-navy/20">Transmission.</span></h2>
                      </div>
                      <div className="space-y-12">
                        <div className="relative group">
                          <label className="text-system-label block mb-6 leading-none">Technical Specification Summary</label>
                          <textarea name="description" value={form.description} onChange={handleChange} rows={5} placeholder="Describe the structural scope, specialized finish requirements, and performance criteria..." className="w-full bg-osg-navy/[0.02] border border-osg-navy/5 p-8 text-osg-navy text-sm outline-none focus:border-osg-gold focus:bg-white transition-all duration-700 resize-none font-medium shadow-inner" />
                        </div>
                        <div className="relative">
                          <label className="text-system-label block mb-6 leading-none">Engineering Drawings (CAD/PDF/BIM)</label>
                          <label className="block cursor-pointer group">
                            <div className="border-2 border-dashed border-osg-navy/10 p-16 lg:p-24 text-center bg-white group-hover:bg-osg-navy/[0.02] group-hover:border-osg-gold transition-all duration-700 relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-osg-gold opacity-30" />
                              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-osg-gold opacity-30" />
                              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-osg-gold opacity-30" />
                              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-osg-gold opacity-30" />
                              
                              <Upload size={40} className="text-osg-gold/40 mx-auto mb-8 transition-all duration-1000 group-hover:scale-110 group-hover:text-osg-gold opacity-50 shadow-gold" />
                              <p className="text-xs font-black text-osg-navy uppercase tracking-[0.4em] mb-3">Upload Technical Package</p>
                              <p className="text-body-muted text-[10px] uppercase">CAD, PDF, or XLSX up to 100MB Aggregate</p>
                              
                              {files.length > 0 && (
                                <div className="mt-12 flex flex-wrap justify-center gap-4 bg-osg-navy/5 p-6 border border-osg-navy/5">
                                  {files.map(f => (
                                    <div key={f.name} className="bg-white text-osg-navy px-5 py-3 text-[9px] font-black uppercase tracking-widest flex items-center gap-3 border border-osg-navy/5 active:scale-95 transition-transform"><Zap size={10} className="text-osg-gold" /> {f.name}</div>
                                  ))}
                                </div>
                              )}
                            </div>
                            <input type="file" multiple accept=".pdf,.dwg,.jpg,.jpeg,.png,.xlsx" onChange={handleFileChange} className="sr-only" />
                          </label>
                        </div>
                      </div>
                      
                      {status === 'error' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-6 text-red-600 bg-red-50 p-8 border border-red-100">
                             <AlertTriangle size={24} />
                             <div>
                                <span className="text-[10px] font-black uppercase tracking-widest block mb-1">Transmission Fault Detected</span>
                                <span className="text-xs font-medium opacity-70 italic font-mono">CODE: ERR_UPLINK_TIMOUT — Re-initializing...</span>
                             </div>
                        </motion.div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-osg-navy/5">
                        <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1 group !px-8">
                             <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> PREVIOUS
                        </button>
                        <button type="submit" disabled={uploading} className="btn-primary flex-[3] group shadow-gold">
                          {uploading ? (
                            <span className="flex items-center gap-4"><Activity size={18} className="animate-spin" /> DISPATCHING DATA PACKAGE...</span>
                          ) : (
                            <span className="flex items-center gap-4">TRANSMIT BRIEF TO ENGINEERING <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></span>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>

            {/* System Intelligence Column (4 of 12) */}
            <aside className="lg:col-span-4 hidden lg:block space-y-8">
                 <div className="sticky top-12">
                     <Reveal delay={0.2} className="card-terminal p-10 mb-8 border-osg-navy/5">
                         <div className="corner-accent corner-tl" />
                         <div className="flex items-center gap-4 mb-8">
                             <div className="w-10 h-10 flex items-center justify-center bg-osg-gold/10 text-osg-gold">
                                 <Info size={16} />
                             </div>
                             <span className="text-system-label !text-osg-navy text-[10px]">Contextual Data</span>
                         </div>
                         <h4 className="text-xs font-black uppercase tracking-widest text-osg-navy mb-6">System Intelligence</h4>
                         
                         <AnimatePresence mode="wait">
                            {step === 0 && (
                                <motion.div key="hint0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                                    <p className="text-body-muted text-[11px]">Primary identification is required for project auditing and legal architectural compliance across East African territories.</p>
                                    <div className="flex items-center gap-4 text-osg-gold">
                                        <ShieldCheck size={14} />
                                        <span className="text-[9px] font-black uppercase tracking-widest">SSL Encrypted Terminal</span>
                                    </div>
                                </motion.div>
                            )}
                            {step === 1 && (
                                <motion.div key="hint1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                                    <p className="text-body-muted text-[11px]">Selecting a specific Sector allows our CAD systems to pre-load relevant structural benchmarks and compliance templates.</p>
                                    <div className="p-4 bg-osg-gold/5 border-l-2 border-osg-gold flex items-center gap-4">
                                        <Clock size={14} className="text-osg-gold" />
                                        <span className="text-[9px] font-black uppercase tracking-widest">Est. Response: 48h</span>
                                    </div>
                                </motion.div>
                            )}
                            {step === 2 && (
                                <motion.div key="hint2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                                    <p className="text-body-muted text-[11px]">Large technical drawing packages (DWG/BIM) expedite the itemization phase by 40%, ensuring higher BID-BUILT accuracy.</p>
                                    <div className="flex items-center gap-4 text-osg-gold">
                                        <Zap size={14} />
                                        <span className="text-[9px] font-black uppercase tracking-widest">Priority Priority Protocol</span>
                                    </div>
                                </motion.div>
                            )}
                         </AnimatePresence>
                     </Reveal>

                     <div className="p-10 border border-osg-navy/10 bg-osg-navy text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-osg-gold/10 blur-[60px]" />
                        <Activity size={24} className="text-osg-gold mb-6 opacity-40" />
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Fabrication Status</h4>
                        <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest mb-10">Our Mombasa Road facility currently operating at 92% capacity. Queue status: ACTIVE.</p>
                        <div className="h-1 bg-white/10 relative">
                            <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} className="absolute top-0 left-0 h-full bg-osg-gold" />
                        </div>
                     </div>
                 </div>
            </aside>
          </form>
        </div>
      </section>
    </main>
  );
}

function Reveal({ children, delay = 0, className = '' }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
