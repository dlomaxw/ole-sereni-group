'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  ChevronRight, 
  Phone,
  Mail,
  User,
  Clock,
  DollarSign,
  Layout,
  ArrowLeft,
  Loader2,
  Building2,
  Calendar,
  Briefcase
} from 'lucide-react';
import Image from 'next/image';
import { submitProjectBrief } from '@/lib/api/leads';

// --- CLEAN COMPONENTS ---

function SelectableCard({ title, icon: Icon, isSelected, onClick }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex min-h-16 items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left
        ${isSelected 
          ? 'bg-osg-navy text-white border-osg-gold shadow-lg ring-2 ring-osg-gold/25' 
          : 'bg-white text-osg-navy border-osg-border hover:border-osg-gold/40 hover:shadow-md'}
      `}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? 'bg-white/10' : 'bg-osg-bg'}`}>
        <Icon size={18} className={isSelected ? 'text-white' : 'text-osg-gold'} />
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest">{title}</p>
        <div className={`h-1 w-4 mt-1 transition-all ${isSelected ? 'bg-osg-gold w-8' : 'bg-transparent'}`} />
      </div>
    </button>
  );
}

function SelectionRow({ label, options, selectedValue, onSelect }: any) {
  return (
    <div className="space-y-4">
      <label className="text-[10px] font-black uppercase tracking-[0.18em] text-osg-navy/55">{label}</label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {options.map((opt: any) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={`
              min-h-12 flex items-center justify-center p-3 rounded-xl border font-bold text-[10px] uppercase tracking-widest transition-all
              ${selectedValue === opt.value 
                ? 'bg-osg-gold border-osg-gold text-osg-navy shadow-sm ring-2 ring-osg-gold/20' 
                : 'bg-white border-osg-border text-osg-navy/40 hover:border-osg-gold/20'}
            `}
          >
            {selectedValue === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-osg-gold mr-3" />}
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function UnifiedIntakePage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: 'Residential',
    service: 'Full Home Design',
    budget: '$25K-$50K',
    urgency: 'Within 3 Months',
    description: '',
    intakeType: 'Quote' // 'Quote' | 'Brief' | 'Consultation'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await submitProjectBrief({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        sector: form.sector,
        service: form.service,
        location: 'Not Specified',
        stage: 'Initial Planning',
        urgency: form.urgency,
        budget: form.budget,
        description: `Unified Intake (${form.intakeType}): ${form.description}`,
      });
      setStatus('success');
    } catch (error) {
      console.error('Submission Failed:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-osg-bg flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-clean max-w-lg w-full text-center space-y-8"
        >
          <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-black text-osg-navy uppercase tracking-tight font-sans">Transmission Received</h2>
          <p className="text-sm font-bold text-osg-navy/40 leading-relaxed uppercase tracking-widest">Our engineering team has received your unified brief. A technical account manager will contact you within 24 hours.</p>
          <button onClick={() => window.location.href = '/'} className="btn-cta w-full">Back to Home</button>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-osg-bg lg:flex">
      {/* --- FORM SECTION (LEFT) --- */}
      <section className="lg:w-1/2 px-4 py-8 sm:px-6 lg:p-12 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto w-full rounded-3xl border border-osg-navy/10 bg-white p-5 shadow-premium sm:p-7 lg:p-8">
          
          <header className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-osg-navy/45 hover:text-osg-gold transition-colors">
              <ArrowLeft size={14} /> Back to Systems
            </Link>
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-osg-gold">Unified Project Intake // v2.0</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-osg-navy leading-tight font-sans uppercase">
                Initialize <span className="text-osg-gold">Technical Brief.</span>
              </h1>
            </div>
            <p className="text-sm font-bold text-osg-navy/55 leading-relaxed uppercase tracking-[0.14em]">
              Consolidated architecture for quotes, formal briefs, and specialist consultations.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="mt-8 space-y-8">
            
            {/* Intake Type Selection */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.18em] text-osg-navy/55">Select Objective</label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                 {['Quote', 'Brief', 'Consultation'].map(type => (
                   <button 
                    key={type}
                    type="button"
                    onClick={() => setForm({...form, intakeType: type})}
                    className={`min-h-12 px-5 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${form.intakeType === type ? 'bg-osg-navy text-white border border-osg-gold ring-2 ring-osg-gold/25' : 'bg-white border border-osg-border text-osg-navy/55 hover:border-osg-gold/40'}`}
                   >
                     {type}
                   </button>
                 ))}
              </div>
            </div>

            {/* Identity Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.16em] text-osg-navy/60">Full Name</label>
                <div className="relative">
                   <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-osg-gold" />
                   <input required className="input-clean !p-4 !pl-12" placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-navy/60">Professional Email</label>
                <div className="relative">
                   <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-osg-gold" />
                   <input required type="email" className="input-clean !p-4 !pl-12" placeholder="johndoe@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-navy/60">Phone</label>
                <div className="relative">
                    <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-osg-gold" />
                    <input required className="input-clean !p-4 !pl-12" placeholder="+256 000 000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-navy/60">Company / Organization</label>
                <div className="relative">
                    <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-osg-gold" />
                    <input className="input-clean !p-4 !pl-12" placeholder="OSG Projects" value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
                </div>
              </div>
            </div>

            {/* Sector Selection */}
            <SelectionRow 
              label="Select Sector"
              selectedValue={form.sector}
              onSelect={(val: string) => setForm({...form, sector: val})}
              options={[
                { label: 'Residential', value: 'Residential' },
                { label: 'Commercial', value: 'Commercial' },
                { label: 'Industrial', value: 'Industrial' }
              ]}
            />

            {/* Service Cards */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-navy/40">Select Primary System</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'full', label: 'Curtain Wall', icon: Layout },
                  { id: 'glass', label: 'Glass Systems', icon: CheckCircle },
                  { id: 'interior', label: 'Specialized Fit-out', icon: Briefcase },
                  { id: 'consult', label: 'Advisory Only', icon: Calendar }
                ].map(s => (
                  <SelectableCard 
                    key={s.id}
                    title={s.label}
                    icon={s.icon}
                    isSelected={form.service === s.label}
                    onClick={() => setForm({...form, service: s.label})}
                  />
                ))}
              </div>
            </div>

            {/* Budget & Urgency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <SelectionRow 
                label="Budget Range"
                selectedValue={form.budget}
                onSelect={(val: string) => setForm({...form, budget: val})}
                options={[
                  { label: '<$10K', value: '<$10K' },
                  { label: '$10K-$50K', value: '$10K-$50K' },
                  { label: '$50K+', value: '$50K+' }
                ]}
              />
               <SelectionRow 
                label="Project Timeline"
                selectedValue={form.urgency}
                onSelect={(val: string) => setForm({...form, urgency: val})}
                options={[
                  { label: 'ASAP', value: 'ASAP' },
                  { label: '1-3 Mos', value: '1-3 Mos' },
                  { label: 'Planning', value: 'Planning' }
                ]}
              />
            </div>

            <div className="space-y-4">
               <label className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-navy/40">Narrative Description</label>
               <textarea 
                className="input-clean min-h-[140px] resize-none !p-4" 
                placeholder="Describe your project vision and structural requirements..."
                value={form.description}
                onChange={e => setForm({...form, description: e.target.value})}
              />
            </div>

            <button 
              disabled={status === 'loading'}
              type="submit" 
              className="btn-cta w-full py-5 text-sm"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2"><Loader2 className="animate-spin" size={18} /> Processing Transmission...</span>
              ) : (
                `Submit ${form.intakeType} Brief`
              )}
            </button>
          </form>

        </div>
      </section>

      {/* --- VISUAL SECTION (RIGHT) --- */}
      <section className="lg:w-1/2 p-8 lg:p-12 h-screen max-lg:hidden sticky top-0">
        <div className="relative h-full w-full rounded-[3.5rem] overflow-hidden shadow-premium group">
          <Image 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop" 
            alt="Modern Interior" 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-osg-navy/60 to-transparent" />
          <div className="absolute bottom-16 left-16 right-16">
            <div className="bg-white/10 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/20 text-white space-y-6">
               <div className="flex items-center gap-3">
                 <Activity size={18} className="text-osg-gold animate-pulse" />
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-gold">Structural Integrity defined.</p>
               </div>
               <h3 className="text-4xl font-black font-sans tracking-tighter leading-none">Engineering full-scale <br/><span className="text-white/40">modernist facades.</span></h3>
               <p className="text-sm font-bold text-white/60 leading-relaxed uppercase tracking-widest">
                 Your unified brief will be analyzed by our architectural engineering team using proprietary BOQ algorithms.
               </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Activity({ size, className }: any) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

