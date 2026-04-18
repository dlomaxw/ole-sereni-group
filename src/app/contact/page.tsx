'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, Phone, Mail, MapPin, MessageCircle, 
  Calendar, Clock, Terminal, Globe, Send, Info,
  Cpu, Database, Activity, ShieldCheck, ChevronRight,
  AlertTriangle
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

/* ─── Architectural UI Components ─────────────────────────────────────── */

function FloatingInput({ label, name, type = 'text', value, onChange, placeholder, required = false, systemIdent }: any) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative group mb-10">
      <div className="flex justify-between items-center mb-3">
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

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const contactChannels = [
  { id: 'COMMS / 01', icon: Phone, label: 'Technical Sales', value: '+256 (0) 767 358 604', href: 'tel:+256767358604' },
  { id: 'COMMS / 02', icon: Mail, label: 'Sales Inquiries', value: 'sales@oleserenigroup.com', href: 'mailto:sales@oleserenigroup.com' },
  { id: 'COMMS / 03', icon: Mail, label: 'General Logistics', value: 'info@oleserenigroup.com', href: 'mailto:info@oleserenigroup.com' },
  { id: 'LOC / KLA-HQ', icon: MapPin, label: 'Command Center', value: 'Forest Mall, Block A, Suite 48, Kampala', href: 'https://maps.google.com/?q=Forest+Mall+Kampala' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '', service: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await addDoc(collection(db, 'contact_inquiries'), {
        ...form,
        createdAt: serverTimestamp(),
        source: 'contact_page',
        status: 'new',
      });
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', message: '', service: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className="bg-osg-creme min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
      
      <PageHero
        label="Global Terminal / Comm"
        title="Contact"
        titleHighlight="Command."
        subtitle="Initialize communication with our technical sales team or visit our Kampala headquarters for a physical consultation."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="section-padding relative z-10">
        <div className="container-osg max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Direct Uplinks (5 of 12) */}
            <div className="lg:col-span-5 space-y-12">
              <Reveal>
                <div className="space-y-4 mb-20">
                  <span className="badge-system">Initialization Module</span>
                  <h2 className="text-display text-osg-navy italic !text-heading-xl leading-none">
                    Global <br /> <span className="text-osg-navy/20 uppercase not-italic">Uplinks.</span>
                  </h2>
                  <p className="text-body-muted max-w-sm uppercase tracking-widest leading-loose">Direct technical channels to our regional project managers and logistics coordinators.</p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-6">
                {contactChannels.map((c, i) => (
                  <Reveal key={c.id} delay={i * 0.1}>
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                      className="group block card-terminal p-8 border-l-2 border-l-transparent hover:border-l-osg-gold">
                      <div className="corner-accent corner-tl" />
                      <div className="corner-accent corner-tr" />
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] font-mono text-osg-gold font-bold tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">{c.id}</span>
                        <div className="w-10 h-10 flex items-center justify-center bg-osg-navy/5 text-osg-navy/20 group-hover:bg-osg-gold group-hover:text-osg-navy transition-all duration-500">
                           <c.icon size={16} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[9px] font-black text-osg-navy/30 uppercase tracking-[0.3em] block">{c.label}</span>
                        <span className="text-xl font-bold text-osg-navy group-hover:text-osg-gold transition-colors tracking-tighter leading-tight block">
                          {c.value}
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.4}>
                <div className="card-terminal p-10 bg-osg-navy text-white relative overflow-hidden border-none shadow-architectural">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-osg-gold/5 blur-[80px]" />
                  <div className="flex items-center gap-6 mb-10">
                    <Clock size={20} className="text-osg-gold" />
                    <span className="text-system-label !text-white/60">Operation window</span>
                  </div>
                  <div className="space-y-6 font-mono text-[11px] uppercase tracking-widest text-white/40">
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span>Mon — Fri</span>
                      <span className="text-white font-bold">08:00 - 18:00 EAT</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span>Saturday</span>
                      <span className="text-white font-bold">09:00 - 13:00 EAT</span>
                    </div>
                    <div className="flex justify-between items-center text-osg-gold">
                      <span className="font-bold flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-osg-gold animate-pulse" />
                        Sunday
                      </span>
                      <span className="font-bold">Standby / Remote</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Inquiry Terminal (7 of 12) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <div className="bg-white border border-osg-navy/5 p-12 lg:p-20 relative overflow-hidden shadow-architectural">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-osg-gold/5 blur-[100px] pointer-events-none" />
                  
                  <div className="mb-16">
                    <span className="badge-system mb-6">Inquiry Mode : Active</span>
                    <h2 className="text-heading-xl text-osg-navy not-italic tracking-tighter">
                      Send <br /><span className="text-osg-gold italic">Transmission.</span>
                    </h2>
                    <p className="text-body-muted mt-6 max-w-sm">Define your technical requirements or general project scope for a direct stakeholder evaluation.</p>
                  </div>

                  {status === 'success' ? (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-24 bg-osg-creme border border-dashed border-osg-gold/20">
                      <div className="w-24 h-24 border-2 border-osg-gold flex items-center justify-center mx-auto mb-10 bg-osg-gold/5">
                        <Send size={40} className="text-osg-gold" />
                      </div>
                      <h4 className="text-3xl font-black text-osg-navy uppercase mb-6 tracking-tighter italic">Route Confirmed</h4>
                      <p className="text-body-muted text-[10px] uppercase tracking-[0.4em] mb-12 max-w-xs mx-auto">
                        Your data has been strictly routed to our sales department. Response latency: &lt; 24h.
                      </p>
                      <button onClick={() => setStatus('idle')} className="btn-outline !text-[10px]">
                        INITIALIZE NEW TRANSMISSION
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                        <FloatingInput label="Full Name" name="name" value={form.name} onChange={handleChange} required placeholder="INPUT NAME..." systemIdent="IDENT_01" />
                        <FloatingInput label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="ARCHITECT@DOMAIN.COM" systemIdent="IDENT_02" />
                        <FloatingInput label="Contact Line" name="phone" value={form.phone} onChange={handleChange} placeholder="+256 XXX..." systemIdent="IDENT_03" />
                        <FloatingInput label="Organisation" name="company" value={form.company} onChange={handleChange} placeholder="COMPANY LTD" systemIdent="IDENT_04" />
                      </div>

                      <div className="relative group mb-12">
                        <div className="flex justify-between items-center mb-4">
                          <label className="text-[9px] font-black uppercase tracking-[0.4em] text-osg-navy/30 group-focus-within:text-osg-gold transition-colors">Select System Sector</label>
                          <span className="text-[8px] font-mono text-osg-navy/10 uppercase tracking-widest">SYS_ROUTING</span>
                        </div>
                        <div className="relative">
                          <select name="service" value={form.service} onChange={handleChange}
                            className="w-full bg-osg-navy/[0.02] border border-osg-navy/5 p-6 text-[11px] font-black uppercase text-osg-navy outline-none focus:border-osg-gold focus:bg-white transition-all appearance-none cursor-pointer">
                            <option value="">Select Target Sector...</option>
                            <option>Aluminium & Glass Systems</option>
                            <option>Gypsum Works & Ceilings</option>
                            <option>Painting & Tiling</option>
                            <option>Carpentry & Joinery</option>
                            <option>Electrical Installations</option>
                            <option>Interior & Exterior Finishing</option>
                            <option>General Inquiry</option>
                          </select>
                          <ChevronRight size={14} className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-osg-gold opacity-40" />
                        </div>
                      </div>

                      <div className="relative group mb-12">
                         <div className="flex justify-between items-center mb-4">
                            <label className="text-[9px] font-black uppercase tracking-[0.4em] text-osg-navy/30 group-focus-within:text-osg-gold transition-colors">Technical Brief</label>
                            <span className="text-[8px] font-mono text-osg-navy/10 uppercase tracking-widest">DATA_PACKAGE</span>
                         </div>
                         <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                          placeholder="DEFINE PROJECT SCOPE..."
                          className="w-full bg-osg-navy/[0.02] border border-osg-navy/5 p-8 text-osg-navy text-sm outline-none focus:border-osg-gold focus:bg-white transition-all duration-700 resize-none font-medium shadow-inner" />
                      </div>

                      <div className="pt-10">
                        <button type="submit" disabled={status === 'loading'}
                          className="btn-primary w-full justify-center group shadow-gold !py-7">
                          {status === 'loading' ? (
                            <span className="flex items-center gap-4"><Activity size={18} className="animate-spin" /> ESTABLISHING LINK...</span>
                          ) : (
                            <span className="flex items-center gap-4 text-[11px]">INITIALIZE TRANSMISSION <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" /></span>
                          )}
                        </button>
                        {status === 'error' && <p className="text-red-600 text-[10px] uppercase font-black text-center mt-6 flex items-center justify-center gap-3"><AlertTriangle size={14} /> SECURITY FAULT: TRANSMISSION ABORTED.</p>}
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Metadata Footer */}
      <section className="bg-osg-navy py-12 border-t border-white/5">
          <div className="container-osg flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
               <div className="flex items-center gap-12">
                    <div className="flex flex-col items-center gap-2">
                         <ShieldCheck size={24} className="text-osg-gold" />
                         <span className="text-[8px] font-bold tracking-widest text-white uppercase">ISO Certified</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                         <Globe size={24} className="text-osg-gold" />
                         <span className="text-[8px] font-bold tracking-widest text-white uppercase">East African Grid</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                         <Activity size={24} className="text-osg-gold" />
                         <span className="text-[8px] font-bold tracking-widest text-white uppercase">Live Telemetry</span>
                    </div>
               </div>
               <span className="text-[9px] font-mono text-white/40 tracking-[0.4em] uppercase">Security Protocol // 256.OSG.v4</span>
          </div>
      </section>
    </main>
  );
}
