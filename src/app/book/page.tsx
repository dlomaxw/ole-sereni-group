'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, Building, Landmark, Paintbrush,
  Calendar as CalendarIcon, Clock, MapPin,
  Phone, Mail, CheckCircle2, ArrowLeft, ArrowRight,
  User, Map, Construction, Terminal, Cpu,
  Database, Info, Activity, ShieldCheck, CornerDownRight,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { createBooking } from '@/lib/api/leads';

const steps = [
  { id: '01', title: 'Intelligence', subtitle: 'Project Nature' },
  { id: '02', title: 'Alignment', subtitle: 'Service Selection' },
  { id: '03', title: 'Schedule', subtitle: 'Preferred Uplink' },
  { id: '04', title: 'Identity', subtitle: 'Contact Details' },
];

const projectTypes = [
  { id: 'residential', title: 'Residential', desc: 'Villas, luxury estates, and private apartments.', icon: Home, ident: 'TYPE_RES' },
  { id: 'commercial', title: 'Commercial', desc: 'Offices, retail hubs, and industrial complexes.', icon: Building, ident: 'TYPE_COM' },
  { id: 'infrastructure', title: 'Infrastructure', desc: 'Public works and large-scale architectural sites.', icon: Landmark, ident: 'TYPE_INF' },
  { id: 'renovation', title: 'Renovation', desc: 'Structural updates and high-fidelity finishing.', icon: Paintbrush, ident: 'TYPE_REN' },
];

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
        <input name={name} type={type} required={required} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          placeholder={focused ? placeholder : ''}
          className={`w-full bg-white/5 border border-osg-navy/5 p-6 text-osg-navy text-sm outline-none transition-all duration-700 ${focused ? 'border-osg-gold bg-white shadow-architectural' : 'hover:border-osg-navy/20'}`} />
        <div className={`absolute bottom-0 left-0 h-[2px] bg-osg-gold transition-all duration-1000 ${focused ? 'w-full' : 'w-0'}`} />
      </div>
    </div>
  );
}

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleBooking = async () => {
    if (!clientName || !clientEmail) { alert('Please provide contact details.'); return; }
    setIsSubmitting(true);
    try {
      await createBooking({ clientName, clientEmail, projectType: selectedType, date: `Oct ${selectedDate}, 2023`, time: selectedTime });
      setIsSuccess(true);
    } catch (err) { alert('Booking failed. Please try again.'); } finally { setIsSubmitting(false); }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-osg-creme flex items-center justify-center font-sans relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05]" />
        <div className="text-center max-w-xl px-10 relative z-10">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-32 h-32 flex items-center justify-center mx-auto mb-12 bg-white border border-osg-navy/5 shadow-architectural group">
            <CheckCircle2 className="text-osg-gold" size={48} />
          </motion.div>
          <span className="text-system-label mb-4 block">Consultation Secured</span>
          <h2 className="text-display mb-8">Uplink <br /><span className="text-osg-gold">Confirmed.</span></h2>
          <p className="text-body-muted mb-12 max-w-sm mx-auto uppercase tracking-widest text-[10px] leading-loose">Your structural consultation for <span className="text-osg-navy font-black">{selectedType}</span> has been provisionally scheduled for <br /> <span className="text-osg-gold font-black">Oct {selectedDate} @ {selectedTime}</span>.</p>
          <Link href="/" className="btn-primary">RETURN TO PORTAL</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-osg-creme min-h-screen flex flex-col lg:flex-row font-sans overflow-hidden">
      {/* ─── Tracker Sidebar (35%) ─── */}
      <section className="lg:w-[35vw] bg-osg-navy relative flex flex-col justify-between p-12 lg:p-24 overflow-hidden order-2 lg:order-1">
        <div className="absolute inset-0 bg-grid-blueprint opacity-5 pointer-events-none" />

        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-4 text-white/40 font-black uppercase text-[10px] tracking-[0.4em] mb-20 hover:text-osg-gold transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> COMMAND CENTER
          </Link>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-system-label mb-6 block text-osg-gold">Site Consultation // v4.0</span>
            <h1 className="text-display text-white mb-10 leading-[0.85]">Architectural <br /> <span className="text-white/20">Consult.</span></h1>
            <p className="text-body-muted text-white/40 max-w-sm mb-20 uppercase tracking-widest leading-loose">Secure a professional assessment for your next landmark project.</p>
          </motion.div>

          <div className="space-y-16 relative">
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-white/10" />
            {steps.map((s, i) => {
              const idx = i + 1;
              const isActive = idx === currentStep;
              const isCompleted = idx < currentStep;
              return (
                <div key={s.id} className="relative flex items-center gap-10 group transition-all duration-700">
                  <div className={`w-10 h-10 flex items-center justify-center text-[10px] font-black z-10 transition-all duration-700 bg-osg-navy border ${isActive ? 'border-osg-gold text-osg-navy bg-osg-gold scale-125 shadow-gold' : isCompleted ? 'border-osg-gold text-osg-gold' : 'border-white/20 text-white/30'}`}>
                    {isCompleted ? '✓' : s.id}
                  </div>
                  <div className={`transition-all duration-700 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-[-10px]'}`}>
                    <span className={`block text-[10px] font-black uppercase tracking-[0.4em] mb-1 ${isActive ? 'text-osg-gold' : 'text-white'}`}>{s.title}</span>
                    <span className="block text-[8px] text-white/40 font-mono tracking-widest uppercase">{s.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 mt-20 pt-12 border-t border-white/5 flex justify-between items-end grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
          <div className="space-y-2">
            <span className="text-system-label text-osg-gold !tracking-widest">Network Status</span>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-osg-gold animate-pulse" />
              <span className="text-[10px] font-black text-white tracking-tighter uppercase">GRID_SECURE</span>
            </div>
          </div>
          <Activity size={24} className="text-osg-gold opacity-40" />
        </div>
      </section>

      {/* ─── Booking Canvas (65%) ─── */}
      <section className="flex-1 bg-white relative lg:overflow-y-auto scrollbar-hide order-1 lg:order-2 flex flex-col transition-all duration-700">
        <div className="absolute inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />

        <div className="container-osg max-w-5xl py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Canvas Area (8 of 12) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div key={currentStep} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>

                  {currentStep === 1 && (
                    <div className="space-y-16">
                      <div className="space-y-4">
                        <span className="badge-system">Initialization Phase</span>
                        <h2 className="text-heading-xl text-osg-navy">Project <br /><span className="text-osg-navy/20">Nature.</span></h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectTypes.map((type) => (
                          <button key={type.id} onClick={() => { setSelectedType(type.id); nextStep(); }}
                            className={`group p-10 text-left border transition-all duration-700 flex flex-col gap-10 hover:shadow-architectural relative overflow-hidden ${selectedType === type.id ? 'bg-osg-navy border-osg-navy' : 'bg-white border-osg-navy/5 hover:border-osg-gold'}`}>

                            {selectedType !== type.id && <div className="corner-accent corner-tl opacity-0 group-hover:opacity-100" />}

                            <div className="flex justify-between items-start">
                              <type.icon className={`transition-all duration-700 ${selectedType === type.id ? 'text-osg-gold scale-125' : 'text-osg-gold/40 group-hover:text-osg-gold group-hover:scale-110'}`} size={32} />
                              <span className={`text-[8px] font-mono tracking-widest ${selectedType === type.id ? 'text-white/20' : 'text-osg-navy/10'}`}>{type.ident}</span>
                            </div>
                            <div>
                              <h4 className={`text-xl font-black uppercase tracking-tighter ${selectedType === type.id ? 'text-white' : 'text-osg-navy'}`}>{type.title}</h4>
                              <p className={`text-[10px] font-bold uppercase tracking-widest mt-3 leading-loose ${selectedType === type.id ? 'text-white/40' : 'text-osg-navy/30'}`}>{type.desc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-16">
                      <div className="space-y-4">
                        <span className="badge-system">Technical Alignment</span>
                        <h2 className="text-heading-xl text-osg-navy">Service <br /><span className="text-osg-navy/20">Selection.</span></h2>
                      </div>
                      <div className="bg-osg-navy/[0.02] p-10 lg:p-16 border border-osg-navy/5 shadow-inner">
                        <p className="text-body-muted text-sm mb-12 uppercase tracking-widest leading-loose">"OSG services are grouped by technical complexity. Select the core discipline for this consultation."</p>
                        <div className="grid grid-cols-1 gap-4">
                          {['Aluminium & Glass Systems', 'Interior Gypsum & Ceilings', 'Mechanical & Electrical', 'Civil Engineering'].map((opt, i) => (
                            <button key={opt} onClick={() => nextStep()}
                              className="group p-8 text-left bg-white border border-osg-navy/5 hover:border-osg-gold hover:shadow-architectural transition-all duration-500 relative flex justify-between items-center overflow-hidden">
                              <div className="flex items-center gap-6">
                                <span className="text-[10px] font-mono text-osg-gold/50">0{i + 1}</span>
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-osg-navy group-hover:translate-x-2 transition-transform">{opt}</span>
                              </div>
                              <ChevronRight size={14} className="text-osg-navy/10 group-hover:text-osg-gold group-hover:translate-x-2 transition-all" />
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-osg-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-16">
                      <div className="space-y-4">
                        <span className="badge-system">Temporal Allocation</span>
                        <h2 className="text-heading-xl text-osg-navy">Schedule <br /><span className="text-osg-navy/20">Uplink.</span></h2>
                      </div>
                      <div className="space-y-12">
                        <div className="bg-osg-navy/[0.02] p-10 border border-osg-navy/5">
                          <label className="text-system-label block mb-8 leading-none">Select Consultation Date</label>
                          <div className="grid grid-cols-7 gap-4">
                            {Array.from({ length: 14 }).map((_, i) => (
                              <button key={i} onClick={() => setSelectedDate(i + 1)}
                                className={`p-6 text-[11px] font-black tracking-tighter transition-all duration-500 border aspect-square flex items-center justify-center ${selectedDate === i + 1 ? 'bg-osg-gold border-osg-gold text-osg-navy shadow-gold scale-110' : 'bg-white border-osg-navy/5 text-osg-navy hover:border-osg-gold'}`}>
                                {i + 1}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="relative group">
                          <label className="text-system-label block mb-8 leading-none">Select Time Window</label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map(time => (
                              <button key={time} onClick={() => setSelectedTime(time)}
                                className={`px-8 py-5 border-2 font-black text-[10px] uppercase tracking-widest transition-all duration-500 ${selectedTime === time ? 'bg-osg-gold border-osg-gold text-osg-navy shadow-gold' : 'bg-white border-osg-navy/5 text-osg-navy/40 hover:border-osg-gold hover:text-osg-navy'}`}>
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-16">
                      <div className="space-y-4">
                        <span className="badge-system">Security Clearance</span>
                        <h2 className="text-heading-xl text-osg-navy">Identity <br /><span className="text-osg-navy/20">Validation.</span></h2>
                      </div>
                      <div className="space-y-2">
                        <FloatingInput label="Full Name" name="name" value={clientName} onChange={(e: any) => setClientName(e.target.value)} required placeholder="Architecture Lead / Owner" systemIdent="IDENT_01" />
                        <FloatingInput label="Email Address" name="email" type="email" value={clientEmail} onChange={(e: any) => setClientEmail(e.target.value)} required placeholder="professional@email.com" systemIdent="IDENT_02" />
                      </div>
                      <div className="p-10 border-2 border-dashed border-osg-gold/20 bg-osg-gold/5 flex gap-8 items-start">
                        <Info size={24} className="text-osg-gold flex-shrink-0 mt-1" />
                        <p className="text-[10px] font-black text-osg-navy/60 uppercase tracking-widest leading-loose">By validating these credentials, you authorize a technical site briefing conformant to OSG Project protocols and regional safety standards.</p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row justify-between items-center pt-12 border-t border-osg-navy/5 mt-16 gap-6">
                    <button onClick={prevStep} disabled={currentStep === 1 || isSubmitting} className="flex items-center gap-2 text-osg-navy/40 hover:text-osg-navy font-black uppercase text-[10px] tracking-widest transition-colors disabled:opacity-0 group">
                      <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> PREVIOUS PHASE
                    </button>
                    <button onClick={currentStep === steps.length ? handleBooking : nextStep} disabled={isSubmitting} className="btn-primary flex-[2] group w-full sm:w-auto">
                      {isSubmitting ? (
                        <span className="flex items-center gap-4"><Activity size={18} className="animate-spin" /> DISPATCHING...</span>
                      ) : (
                        <>
                          {currentStep === steps.length ? 'CONFIRM APPOINTMENT' : 'CONTINUE CONSULTATION'}
                          <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* System Intelligence Column (4 of 12) */}
            <aside className="lg:col-span-4 hidden lg:block space-y-8">
              <div className="sticky top-12">
                <div className="card-terminal p-10 mb-8 border-osg-navy/5">
                  <div className="corner-accent corner-tl" />
                  <div className="flex items-center gap-4 mb-8">
                    <Cpu size={16} className="text-osg-gold" />
                    <span className="text-system-label !text-osg-navy text-[10px]">Contextual Brief</span>
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-osg-navy mb-6">Security & Protocols</h4>

                  <AnimatePresence mode="wait">
                    <motion.div key={currentStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                      {currentStep === 1 && <p className="text-body-muted text-[11px] leading-loose">Different project natures require specialized site clearance. Commercial sites often require full PPE documentation 24h prior.</p>}
                      {currentStep === 2 && <p className="text-body-muted text-[11px] leading-loose">Each technical sector triggers a discrete consulting workflow. Selecting the right discipline ensures the correct expert is dispatched.</p>}
                      {currentStep === 3 && <p className="text-body-muted text-[11px] leading-loose">Our consultation windows are strictly managed to ensure max site evaluation depth. Ensure your site leads are available during the timeframe.</p>}
                      {currentStep === 4 && <p className="text-body-muted text-[11px] leading-loose">Identity validation is logged as part of our ISO quality control protocol. All data handled via encrypted regional hubs.</p>}

                      <div className="flex items-center gap-4 text-osg-gold pt-4 border-t border-osg-navy/5">
                        <ShieldCheck size={14} />
                        <span className="text-[9px] font-black uppercase tracking-widest">ISO 9001:2015 DATA_READY</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="bg-osg-gold p-10 shadow-gold">
                  <Activity size={24} className="text-osg-navy mb-6 opacity-40" />
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-navy mb-4">Availability status</h4>
                  <p className="text-[10px] text-osg-navy/70 leading-relaxed uppercase tracking-widest font-black mb-8">Nairobi & Kampala hubs reporting high demand for structural site visits. Secure your slot early.</p>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-osg-navy animate-pulse" />
                    <span className="text-[9px] font-black text-osg-navy uppercase">STABLE_GRID_RESERVE</span>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}

