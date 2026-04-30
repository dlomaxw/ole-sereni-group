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
    <div className="relative group mb-5">
      <div className="flex justify-between items-center gap-3 mb-2">
        <label className={`text-[9px] font-black uppercase tracking-[0.22em] transition-colors duration-500 ${focused ? 'text-osg-gold' : 'text-osg-navy/45'}`}>
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
            w-full bg-white/70 border border-osg-navy/10 px-4 py-3 rounded-xl text-osg-navy text-sm font-semibold outline-none transition-all duration-300
            ${focused ? 'border-osg-gold bg-white shadow-architectural' : 'hover:border-osg-navy/20'}
          `}
        />
        <div className={`absolute bottom-0 left-0 h-[2px] bg-osg-gold transition-all duration-1000 ${focused ? 'w-full' : 'w-0'}`} />
      </div>
    </div>
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
    <main className="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none" />
      
      <PageHero
        label="Global Terminal / Comm"
        title="Contact"
        titleHighlight="Command."
        subtitle="Initialize communication with our technical sales team or visit our Kampala headquarters for a physical consultation."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="container-clean">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left Column: Direct Uplinks (5 of 12) */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <div className="flex items-center gap-6">
                   <div className="w-12 h-[1px] bg-osg-gold/40"></div>
                   <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.6em]">Initialization Module</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl text-osg-navy font-black uppercase leading-tight font-sans">
                  Global <br /> <span className="text-osg-navy/10 uppercase not-">Uplinks.</span>
                </h2>
                <p className="text-base sm:text-lg text-osg-navy/55 font-sans leading-relaxed max-w-sm">Direct technical channels to our regional project managers and logistics coordinators.</p>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {contactChannels.map((c, i) => (
                  <motion.div 
                    key={c.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                      className="group block bg-white border border-osg-navy/5 p-5 sm:p-6 rounded-3xl transition-all duration-500 hover:border-osg-gold hover:shadow-premium relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01] pointer-events-none" />
                      
                      <div className="flex justify-between items-start gap-4 mb-5 relative z-10">
                        <span className="text-[9px] font-black text-osg-gold uppercase tracking-[0.25em] opacity-70 group-hover:opacity-100 transition-opacity">{c.id}</span>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#F8F9FB] text-osg-navy/45 group-hover:bg-osg-navy group-hover:text-osg-gold transition-all duration-500">
                           <c.icon size={20} />
                        </div>
                      </div>
                      <div className="space-y-3 relative z-10">
                        <span className="text-[9px] font-black text-osg-navy/40 uppercase tracking-[0.25em] block">{c.label}</span>
                        <span className="text-lg sm:text-xl font-sans font-black text-osg-navy group-hover:text-osg-gold transition-colors tracking-tight block break-words leading-tight">
                          {c.value}
                        </span>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-[#0B1C2C] text-white rounded-[3rem] relative overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03]" />
                <div className="flex items-center gap-6 mb-12 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-osg-gold/10 flex items-center justify-center">
                    <Clock size={20} className="text-osg-gold" />
                  </div>
                  <span className="text-[10px] font-black text-osg-gold uppercase tracking-[0.5em]">Operation window</span>
                </div>
                <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-center border-b border-white/5 pb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Mon — Fri</span>
                    <span className="text-white font-sans font-black">08:00 - 18:00 EAT</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Saturday</span>
                    <span className="text-white font-sans font-black">09:00 - 13:00 EAT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-gold flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-osg-gold animate-pulse" />
                      Sunday
                    </span>
                    <span className="text-osg-gold font-sans font-black">Standby / Remote</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Inquiry Terminal (7 of 12) */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-osg-navy/5 p-5 sm:p-7 lg:p-9 relative overflow-hidden shadow-premium rounded-3xl lg:sticky lg:top-28"
              >
                <div className="absolute inset-0 bg-grid-blueprint opacity-[0.01] pointer-events-none" />
                
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-osg-gold animate-pulse" />
                    <span className="text-[9px] font-black text-osg-gold uppercase tracking-[0.28em]">Inquiry Mode : Active</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl text-osg-navy font-black uppercase tracking-tight leading-tight font-sans">
                    Send <span className="text-osg-gold">Transmission.</span>
                  </h2>
                  <p className="text-base text-osg-navy/55 font-sans mt-4 max-w-xl">Define your technical requirements or general project scope for a direct stakeholder evaluation.</p>
                </div>

                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-32 bg-[#F8F9FB] rounded-[3rem] border border-dashed border-osg-gold/20">
                    <div className="w-24 h-24 rounded-full border border-osg-gold flex items-center justify-center mx-auto mb-10 bg-osg-gold/5">
                      <Send size={40} className="text-osg-gold" />
                    </div>
                    <h4 className="text-4xl font-sans font-black text-osg-navy uppercase mb-6 tracking-tight">Route Confirmed</h4>
                    <p className="text-lg text-osg-navy/40 font-sans mb-12 max-w-xs mx-auto">
                      Your data has been strictly routed to our sales department. Response latency: &lt; 24h.
                    </p>
                    <button onClick={() => setStatus('idle')} className="btn-cta !px-12 py-5 !text-[10px]">
                      INITIALIZE NEW TRANSMISSION
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                      <FloatingInput label="Full Name" name="name" value={form.name} onChange={handleChange} required placeholder="INPUT NAME..." systemIdent="IDENT_01" />
                      <FloatingInput label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="ARCHITECT@DOMAIN.COM" systemIdent="IDENT_02" />
                      <FloatingInput label="Contact Line" name="phone" value={form.phone} onChange={handleChange} placeholder="+256 XXX..." systemIdent="IDENT_03" />
                      <FloatingInput label="Organisation" name="company" value={form.company} onChange={handleChange} placeholder="COMPANY LTD" systemIdent="IDENT_04" />
                    </div>

                    <div className="relative group mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.22em] text-osg-navy/45 group-focus-within:text-osg-gold transition-colors">Select System Sector</label>
                        <span className="text-[8px] font-mono text-osg-navy/10 uppercase tracking-widest">SYS_ROUTING</span>
                      </div>
                      <div className="relative">
                        <select name="service" value={form.service} onChange={handleChange}
                          className="w-full bg-[#F8F9FB] border border-osg-navy/10 px-4 py-4 rounded-2xl text-[11px] font-black uppercase text-osg-navy outline-none focus:border-osg-gold focus:bg-white transition-all appearance-none cursor-pointer">
                          <option value="">Select Target Sector...</option>
                          <option>Aluminium & Glass Systems</option>
                          <option>Gypsum Works & Ceilings</option>
                          <option>Painting & Tiling</option>
                          <option>Carpentry & Joinery</option>
                          <option>Electrical Installations</option>
                          <option>Interior & Exterior Finishing</option>
                          <option>General Inquiry</option>
                        </select>
                        <ChevronRight size={18} className="absolute right-8 top-1/2 -translate-y-1/2 rotate-90 text-osg-gold opacity-40" />
                      </div>
                    </div>

                    <div className="relative group mb-8">
                       <div className="flex justify-between items-center mb-2">
                          <label className="text-[9px] font-black uppercase tracking-[0.22em] text-osg-navy/45 group-focus-within:text-osg-gold transition-colors">Technical Brief</label>
                          <span className="text-[8px] font-mono text-osg-navy/10 uppercase tracking-widest">DATA_PACKAGE</span>
                       </div>
                       <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                        placeholder="DEFINE PROJECT SCOPE..."
                        className="w-full bg-[#F8F9FB] border border-osg-navy/10 p-5 rounded-2xl text-osg-navy text-base font-sans outline-none focus:border-osg-gold focus:bg-white transition-all duration-300 resize-none shadow-inner" />
                    </div>

                    <div className="pt-2">
                      <button type="submit" disabled={status === 'loading'}
                        className="btn-cta w-full justify-center group !py-5 !text-[10px]">
                        {status === 'loading' ? (
                          <span className="flex items-center gap-6"><Activity size={20} className="animate-spin" /> ESTABLISHING LINK...</span>
                        ) : (
                          <span className="flex items-center gap-6">INITIALIZE TRANSMISSION <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" /></span>
                        )}
                      </button>
                      {status === 'error' && (
                        <div className="flex items-center justify-center gap-4 mt-8 text-red-500">
                          <AlertTriangle size={20} />
                          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Security Fault: Transmission Aborted.</span>
                        </div>
                      )}
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Metadata Footer */}
      <section className="bg-[#0B1C2C] py-20 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-blueprint opacity-[0.03]" />
          <div className="container-clean relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
               <div className="flex flex-wrap justify-center gap-16 lg:gap-24">
                    <div className="flex flex-col items-center gap-4 group cursor-help">
                         <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-osg-gold/40 transition-colors">
                            <ShieldCheck size={28} className="text-osg-gold/40 group-hover:text-osg-gold transition-colors" />
                         </div>
                         <span className="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase group-hover:text-white/40 transition-colors">ISO Certified</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group cursor-help">
                         <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-osg-gold/40 transition-colors">
                            <Globe size={28} className="text-osg-gold/40 group-hover:text-osg-gold transition-colors" />
                         </div>
                         <span className="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase group-hover:text-white/40 transition-colors">East African Grid</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group cursor-help">
                         <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-osg-gold/40 transition-colors">
                            <Activity size={28} className="text-osg-gold/40 group-hover:text-osg-gold transition-colors" />
                         </div>
                         <span className="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase group-hover:text-white/40 transition-colors">Live Telemetry</span>
                    </div>
               </div>
               <div className="text-right">
                  <span className="text-[10px] font-mono text-white/10 tracking-[0.6em] uppercase block mb-2">Security Protocol // 256.OSG.v4</span>
                  <div className="w-48 h-[1px] bg-white/10 ml-auto"></div>
               </div>
          </div>
      </section>
    </main>
  );
}

