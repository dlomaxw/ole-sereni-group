'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  Layers, 
  Construction, 
  Ruler, 
  ArrowRight, 
  Download, 
  CheckCircle2,
} from 'lucide-react';

import Link from 'next/link';
import { saveEstimate } from '@/lib/api/leads';

// Using box icon representation as calculation icon isn't standard in lucide-react default
import { Calculator } from 'lucide-react';

const serviceTypes = [
  { id: 'windows', title: 'Aluminium Windows', desc: 'Precision-milled frames with thermal break technology.', icon: Box },
  { id: 'glazing', title: 'Structural Glazing', desc: 'Seamless glass facades for modern architectural profiles.', icon: Layers },
  { id: 'curtain', title: 'Curtain Walls', desc: 'Non-structural cladding for high-performance buildings.', icon: Construction },
];


const glassOptions = [
  { label: 'Double Glazed Low-E', factor: 1.0 },
  { label: 'Triple Glazed Argon', factor: 1.4 },
  { label: 'Laminated Security', factor: 1.25 },
];

const finishes = [
  { label: 'Anodized Matte Black', factor: 1.1 },
  { label: 'Powder Coated Silver', factor: 1.0 },
  { label: 'Raw Industrial Finish', factor: 0.9 },
];

export default function CostEstimatorPage() {
  const [selectedService, setSelectedService] = useState('glazing');
  const [width, setWidth] = useState(2500);
  const [height, setHeight] = useState(3000);
  const [glassSpec, setGlassSpec] = useState(0);
  const [finish, setFinish] = useState(0);
  const [clientEmail, setClientEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const estimate = useMemo(() => {
    // Basic mock pricing logic
    const area = (width * height) / 1000000; // sqm
    const baseRate = selectedService === 'glazing' ? 450 : selectedService === 'windows' ? 300 : 550;
    const total = area * baseRate * glassOptions[glassSpec].factor * finishes[finish].factor;
    return {
      min: total * 0.9,
      max: total * 1.15
    };
  }, [selectedService, width, height, glassSpec, finish]);

  const handleRequestQuote = async () => {
    if (!clientEmail) {
      alert('Please provide your professional email.');
      return;
    }
    setIsSubmitting(true);
    try {
      await saveEstimate({
        clientEmail,
        service: selectedService,
        dimensions: { width, height },
        specs: { glass: glassOptions[glassSpec].label, finish: finishes[finish].label },
        valuation: estimate
      });
      setIsSuccess(true);
    } catch (err) {
      alert('Request failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <main className="bg-osg-navy min-h-screen pt-32 pb-24">
      <div className="container-osg">
        {/* Header */}
        <div className="mb-20">
          <nav className="flex items-center gap-2 text-osg-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            <span>Services</span>
            <span className="opacity-30">/</span>
            <span className="text-white">Estimator</span>
          </nav>
          <h1 className="text-display-md lg:text-display-lg text-white font-black uppercase tracking-tighter leading-[0.9] mb-12">
            INDICATIVE <br /><span className="text-osg-gold">VALUATION.</span>
          </h1>
          <p className="text-osg-slate text-body-lg max-w-2xl leading-relaxed font-light">
            Precision engineering begins with accurate planning. Use our signature tool to calculate technical specifications and receive an immediate indicative valuation for your architectural projects.
          </p>
        </div>

        {/* Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Progress Tracker (Sticky) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-40 space-y-12">
            {[
              { id: '01', title: 'Selection', subtitle: 'Service Type', active: true },
              { id: '02', title: 'Technical', subtitle: 'Dimensions', active: width > 0 && height > 0 },
              { id: '03', title: 'Valuation', subtitle: 'Summary', active: true },
            ].map(step => (
              <div key={step.id} className={`flex items-center gap-6 transition-opacity ${step.active ? 'opacity-100' : 'opacity-20'}`}>
                <div className={`w-10 h-10 flex items-center justify-center font-black text-xs ${step.active ? 'bg-osg-gold text-osg-navy' : 'bg-white/10 text-white/40'}`}>
                  {step.id}
                </div>
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-[0.4em] text-osg-gold">{step.title}</span>
                  <span className="text-sm font-black uppercase text-white tracking-tighter">{step.subtitle}</span>
                </div>
              </div>
            ))}
          </aside>

          {/* Form Content */}
          <div className="lg:col-span-9 space-y-12">
            <section className="bg-white/5 border border-white/10 p-10 lg:p-16 backdrop-blur-3xl shadow-2xl space-y-16">
              {/* Step 1 */}
              <div>
                <h2 className="text-display-xs text-white uppercase tracking-tighter mb-8">Select Structural Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {serviceTypes.map(srv => (
                    <button 
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`group p-8 text-left border-2 transition-all duration-500 relative overflow-hidden ${
                        selectedService === srv.id ? 'bg-osg-gold border-osg-gold' : 'bg-osg-navy border-white/5 hover:border-white/10'
                      }`}
                    >
                      <srv.icon className={`mb-6 transition-colors ${selectedService === srv.id ? 'text-osg-navy' : 'text-osg-gold'}`} size={32} />
                      <h3 className={`font-black uppercase tracking-tighter mb-2 ${selectedService === srv.id ? 'text-osg-navy' : 'text-white'}`}>{srv.title}</h3>
                      <p className={`text-[10px] font-bold uppercase tracking-widest leading-relaxed ${selectedService === srv.id ? 'text-osg-navy/70' : 'text-osg-slate'}`}>{srv.desc}</p>
                      <div className={`mt-8 h-1 transition-all duration-700 ${selectedService === srv.id ? 'w-full bg-osg-navy' : 'w-0 bg-osg-gold group-hover:w-full'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="pt-16 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-gold">Total Width (mm)</label>
                        <input 
                          type="number" 
                          value={width}
                          onChange={(e) => setWidth(Number(e.target.value))}
                          className="w-full bg-osg-navy border-b-2 border-white/10 p-5 text-white text-3xl font-black focus:border-osg-gold outline-none transition-colors" 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-gold">Total Height (mm)</label>
                        <input 
                          type="number" 
                          value={height}
                          onChange={(e) => setHeight(Number(e.target.value))}
                          className="w-full bg-osg-navy border-b-2 border-white/10 p-5 text-white text-3xl font-black focus:border-osg-gold outline-none transition-colors" 
                        />
                      </div>
                   </div>
                   <div className="space-y-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-gold">Glass Specification</label>
                        <select 
                          value={glassSpec}
                          onChange={(e) => setGlassSpec(Number(e.target.value))}
                          className="w-full bg-osg-navy border-b-2 border-white/10 p-5 text-white font-black uppercase tracking-widest text-xs focus:border-osg-gold outline-none transition-colors appearance-none"
                        >
                          {glassOptions.map((opt, i) => <option key={i} value={i}>{opt.label}</option>)}
                        </select>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-osg-gold">Surface Finish</label>
                        <select 
                          value={finish}
                          onChange={(e) => setFinish(Number(e.target.value))}
                          className="w-full bg-osg-navy border-b-2 border-white/10 p-5 text-white font-black uppercase tracking-widest text-xs focus:border-osg-gold outline-none transition-colors appearance-none"
                        >
                          {finishes.map((opt, i) => <option key={i} value={i}>{opt.label}</option>)}
                        </select>
                      </div>
                   </div>
                </div>
              </div>

              {/* Output Hero */}
              <motion.div 
                layout
                className="bg-osg-gold p-12 md:p-16 relative overflow-hidden group shadow-2xl"
              >
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-osg-navy/40 mb-6 block">Indicative Commercial Valuation</span>
                  <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8">
                    <motion.span 
                      key={estimate.min}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-display-sm lg:text-display-md font-black tracking-tighter text-osg-navy"
                    >
                      ${estimate.min.toLocaleString(undefined, { maximumFractionDigits: 0 })} — ${estimate.max.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </motion.span>
                    <span className="text-osg-navy/60 font-black text-xs tracking-widest uppercase">USD indicative</span>
                  </div>
                  <p className="text-osg-navy/70 text-small max-w-xl mb-12 uppercase tracking-widest leading-relaxed">
                    This estimate is based on current material market rates and standard engineering overheads. A final site audit is required for a binding commercial proposal.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    {isSuccess ? (
                      <div className="flex items-center gap-4 bg-osg-navy/10 p-5 w-full">
                        <CheckCircle2 className="text-osg-navy" size={20} />
                        <span className="text-[10px] font-black uppercase text-osg-navy">Request Logged. Advisor will follow up.</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex-grow relative">
                           <input 
                            type="email" 
                             value={clientEmail}
                             onChange={(e) => setClientEmail(e.target.value)}
                             placeholder="professional@email.com"
                             className="w-full bg-white/20 border border-osg-navy/10 p-5 text-[10px] text-osg-navy font-bold uppercase tracking-widest outline-none focus:bg-white/40 transition-all"
                           />
                        </div>
                        <button 
                          onClick={handleRequestQuote}
                          disabled={isSubmitting}
                          className="btn-primary py-5 px-12 bg-osg-navy text-white hover:bg-osg-charcoal disabled:opacity-50"
                        >
                          {isSubmitting ? 'Syncing...' : 'Request Formal Quote'}
                        </button>
                      </>
                    )}
                    {!isSuccess && (
                      <button className="btn-outline border-osg-navy/20 text-osg-navy hover:bg-osg-navy hover:text-white flex items-center gap-3">
                        Technical PDF <Download size={18} />
                      </button>
                    )}
                  </div>

                </div>
                <Calculator className="absolute -right-10 -bottom-10 w-64 h-64 text-osg-navy/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
              </motion.div>
            </section>

            {/* Bottom Callout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square bg-osg-charcoal overflow-hidden border border-white/5 relative group">
                <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-[3000ms]" alt="Architecture" />
                <div className="absolute inset-0 bg-osg-navy/40" />
              </div>
              <div className="bg-white/5 border border-white/10 p-12 flex flex-col justify-center">
                <h3 className="text-display-xs text-white uppercase tracking-tighter mb-6">The Blueprint for Precision.</h3>
                <p className="text-osg-slate text-body-lg mb-10 leading-relaxed font-light">Beyond estimation, Ole Sereni provides end-to-end structural consultancy. Our team ensures that every millimeter aligns with your architectural vision.</p>
                <Link href="/projects" className="flex items-center gap-4 text-osg-gold font-black text-[10px] uppercase tracking-[0.4em] group">
                  View Portfolio <ArrowRight className="group-hover:translate-x-3 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

