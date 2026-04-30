'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  FileText, 
  Hammer, 
  Zap, 
  Droplets,
  Ruler,
  Clock,
  Briefcase,
  Upload,
  Headphones
} from 'lucide-react';
import Link from 'next/link';
import { submitProjectBrief } from '@/lib/api/leads';


const steps = [
  { id: '01', title: 'Project Identity', icon: Building2 },
  { id: '02', title: 'Scope & Services', icon: Hammer },
  { id: '03', title: 'Technical Specs', icon: Ruler },
  { id: '04', title: 'Timeline & Budget', icon: Clock },
  { id: '05', title: 'File Uploads', icon: Upload },
];

const services = [
  { id: 'aluminium', icon: Briefcase, title: 'Aluminium Systems', desc: 'Curtain walls, windows, and structural glazing.' },
  { id: 'gypsum', icon: Layers, title: 'Gypsum & Ceilings', desc: 'Acoustic treatments and ornate suspended systems.' },
  { id: 'electrical', icon: Zap, title: 'Electrical Works', desc: 'High-tension distribution and intelligent lighting.' },
  { id: 'mechanical', icon: Droplets, title: 'Mechanical & Plumbing', desc: 'HVAC systems and commercial grade piping.' },
];

import { Layers } from 'lucide-react'; // Fix missing import

export default function ProjectBriefPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    projectTitle: '',
    services: [] as string[],
    area: '',
    materialGrade: 'Standard Commercial Specifications',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  const progress = (currentStep / steps.length) * 100;

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(id) 
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id]
    }));
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitProjectBrief(formData);
      setIsSuccess(true);
    } catch (error) {
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <main className="bg-osg-navy min-h-screen pt-32 pb-24">
      <div className="container-osg">
        {/* Header & Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <nav className="flex items-center gap-2 mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-osg-gold">
              <span>Home</span>
              <span className="opacity-30">/</span>
              <span>Engagement</span>
              <span className="opacity-30">/</span>
              <span className="text-white">Project Brief</span>
            </nav>
            <h1 className="text-display-sm lg:text-display-md text-white uppercase tracking-tighter leading-none">
              OSG INTAKE <br /><span className="text-osg-gold">WIZARD.</span>
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Intake Progress</span>
              <span className="text-4xl font-black text-osg-gold">{Math.round(progress)}%</span>
            </div>
            <div className="h-1 bg-white/10 w-full overflow-hidden">
              <motion.div 
                className="h-full bg-osg-gold" 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "circOut" }}
              />
            </div>
            <p className="text-xs text-osg-slate uppercase tracking-widest font-bold">
              Currently defining: <span className="text-white">Step 0{currentStep} — {steps[currentStep-1].title}</span>
            </p>
          </div>
        </div>

        {/* Wizard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-white/5 border border-white/10 p-10 space-y-8">
              {steps.map((step, idx) => {
                const isActive = (idx + 1) === currentStep;
                const isCompleted = (idx + 1) < currentStep;
                return (
                  <div key={idx} className={`flex items-center gap-6 transition-all duration-500 ${isActive ? 'lg:translate-x-2' : ''}`}>
                    <div className={`w-10 h-10 flex items-center justify-center border-2 font-black text-xs transition-colors duration-500 ${
                      isActive ? 'bg-osg-gold border-osg-gold text-osg-navy' : 
                      isCompleted ? 'bg-white/10 border-white/10 text-osg-gold' : 
                      'border-white/10 text-white/20'
                    }`}>
                      {isCompleted ? <CheckCircle2 size={16} /> : step.id}
                    </div>
                    <div>
                        <span className={`text-[10px] font-black uppercase tracking-[0.1em] block ${isActive ? 'text-white' : 'text-white/20'}`}>
                            {step.title}
                        </span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="relative h-64 overflow-hidden border border-white/10 group">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-[3000ms]" alt="OSG Project" />
              <div className="absolute inset-0 bg-osg-navy/40" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[9px] font-bold text-osg-gold uppercase tracking-[0.3em] mb-2">Reference Standard</p>
                <p className="text-xs font-black text-white uppercase tracking-widest">Nairobi Global Trade Center</p>
              </div>
            </div>
          </aside>

          {/* Main Wizard Area */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={isSuccess ? 'success' : currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-10 lg:p-16 shadow-2xl backdrop-blur-3xl"
              >
                {isSuccess ? (
                  <div className="text-center py-20 px-10">
                    <div className="w-24 h-24 bg-osg-gold rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(168,120,30,0.3)]">
                      <CheckCircle2 size={48} className="text-osg-navy" />
                    </div>
                    <h2 className="text-display-sm text-white uppercase tracking-tighter mb-4">Brief Synchronized.</h2>
                    <p className="text-osg-slate text-body-lg max-w-lg mx-auto mb-12">
                      Your technical architectural requirements have been captured. A structural specialist will review your brief and contact you within 24 hours.
                    </p>
                    <Link href="/projects" className="btn-primary py-5 px-12">Explore OSG Portfolio</Link>
                  </div>
                ) : (
                  <>
                    {currentStep === 1 && (
                      <div className="max-w-4xl space-y-12">
                        <h2 className="text-display-xs text-white uppercase tracking-tighter mb-8">01. Project Identity</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-gold">Project Name / Reference</label>
                            <input 
                              type="text" 
                              value={formData.projectTitle}
                              onChange={(e) => setFormData({...formData, projectTitle: e.target.value})}
                              className="w-full bg-osg-navy border border-white/10 p-5 text-white focus:border-osg-gold outline-none transition-colors" 
                              placeholder="e.g. Zenith Tower II" 
                            />
                          </div>
                          <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-gold">Lead Contact Full Name</label>
                            <input 
                              type="text" 
                              value={formData.clientName}
                              onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                              className="w-full bg-osg-navy border border-white/10 p-5 text-white focus:border-osg-gold outline-none transition-colors" 
                              placeholder="Your Name" 
                            />
                          </div>
                          <div className="space-y-4 md:col-span-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-gold">Professional Email Address</label>
                            <input 
                              type="email" 
                              value={formData.clientEmail}
                              onChange={(e) => setFormData({...formData, clientEmail: e.target.value})}
                              className="w-full bg-osg-navy border border-white/10 p-5 text-white focus:border-osg-gold outline-none transition-colors" 
                              placeholder="email@company.com" 
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                       <div className="max-w-4xl">
                         <h2 className="text-display-xs text-white uppercase tracking-tighter mb-8">02. Scope & Services Selection</h2>
                         <p className="text-osg-slate text-body-lg mb-12">Select the specific structural and finishing work packages required for this project to help our material specialists allocate resources.</p>
                         
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            {services.map((service) => (
                               <label 
                                key={service.id} 
                                className={`relative flex flex-col p-8 bg-osg-navy border-2 cursor-pointer transition-all duration-500 overflow-hidden group ${
                                  formData.services.includes(service.id) ? 'border-osg-gold' : 'border-white/5 hover:border-white/20'
                                }`}
                               >
                                  <input 
                                    type="checkbox" 
                                    className="hidden" 
                                    checked={formData.services.includes(service.id)}
                                    onChange={() => toggleService(service.id)}
                                  />
                                  <service.icon className={`mb-6 transition-colors ${formData.services.includes(service.id) ? 'text-osg-gold' : 'text-osg-slate group-hover:text-white'}`} size={32} />
                                  <h3 className="text-heading-md text-white uppercase tracking-tighter mb-2">{service.title}</h3>
                                  <p className="text-[10px] text-osg-slate uppercase font-bold tracking-widest leading-relaxed">{service.desc}</p>
                                  {formData.services.includes(service.id) && (
                                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-osg-gold rotate-45 flex items-end justify-center pb-2">
                                      <CheckCircle2 className="text-osg-navy -rotate-45" size={16} />
                                    </div>
                                  )}
                               </label>
                            ))}
                         </div>

                         <div className="space-y-12">
                            <div className="flex items-center gap-6">
                               <h3 className="text-heading-sm text-white uppercase tracking-tighter">Preliminary Technical Metrics</h3>
                               <div className="h-px flex-grow bg-white/10" />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-gold">Estimated Floor Area (SQM)</label>
                                <input 
                                  type="number" 
                                  value={formData.area}
                                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                                  className="w-full bg-osg-navy border border-white/10 p-5 text-white focus:border-osg-gold outline-none transition-colors" 
                                  placeholder="e.g. 15000" 
                                />
                              </div>
                              <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-gold">Material Preference</label>
                                <select 
                                  value={formData.materialGrade}
                                  onChange={(e) => setFormData({...formData, materialGrade: e.target.value})}
                                  className="w-full bg-osg-navy border border-white/10 p-5 text-white focus:border-osg-gold outline-none transition-colors appearance-none"
                                >
                                  <option>Grade A Premium Finishing</option>
                                  <option>Standard Commercial Specifications</option>
                                  <option>Eco-Sustainable / LEED Certified</option>
                                </select>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-gold">Project Description & Core Objectives</label>
                              <textarea 
                                value={formData.description}
                                onChange={(e) => setFormData({...formData, description: e.target.value})}
                                className="w-full bg-osg-navy border border-white/10 p-6 text-white text-small h-40 focus:border-osg-gold outline-none transition-colors"
                                placeholder="Briefly describe the architectural vision and functional requirements..."
                              />
                            </div>
                         </div>
                       </div>
                    )}

                    {currentStep > 2 && currentStep < 6 && (
                        <div className="text-center py-20">
                             <h2 className="text-display-xs text-white uppercase tracking-tighter mb-4 underline decoration-osg-gold underline-offset-8 decoration-1">Section in Development</h2>
                             <p className="text-osg-slate text-body-lg">The detailed technical filing for Step 0{currentStep} is being optimized for structural compliance.</p>
                             <p className="text-[10px] font-bold text-osg-gold uppercase tracking-[0.4em] mt-8">Available in production environment</p>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="mt-20 flex justify-between items-center border-t border-white/10 pt-12">
                      <button 
                        onClick={prevStep}
                        disabled={currentStep === 1 || isSubmitting}
                        className="flex items-center gap-3 text-osg-slate hover:text-white font-black text-[10px] uppercase tracking-[0.2em] disabled:opacity-30 disabled:pointer-events-none transition-all"
                      >
                        <ArrowLeft size={16} /> Previous Step
                      </button>
                      <button 
                        onClick={currentStep === steps.length ? handleFinalSubmit : nextStep}
                        disabled={isSubmitting}
                        className="btn-primary group py-5 px-14 flex items-center gap-3"
                      >
                        {isSubmitting ? (
                          <>Synchronizing <span className="animate-pulse">...</span></>
                        ) : (
                          <>
                            {currentStep === steps.length ? 'Submit Final Brief' : 'Save & Continue'} 
                            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </motion.div>

            </AnimatePresence>

            {/* Support Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-osg-gold p-10 flex flex-col justify-between h-full group hover:bg-white transition-colors duration-700">
                <Headphones className="text-osg-navy mb-8" size={40} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-osg-navy/40 mb-2">Need Assistance?</p>
                  <h4 className="text-heading-sm font-black text-osg-navy uppercase tracking-tighter leading-none mb-6">Commercial Concierge Line</h4>
                  <Link href="/contact" className="text-xs font-black text-osg-navy uppercase underline underline-offset-8">Talk to an Engineer</Link>
                </div>
              </div>
              <div className="md:col-span-2 bg-white/5 border border-white/10 p-10 flex items-center gap-10">
                <div className="w-24 h-24 bg-osg-navy flex items-center justify-center border border-white/10">
                  <FileText className="text-osg-gold" size={32} />
                </div>
                <div>
                  <h4 className="text-heading-sm text-white uppercase tracking-tighter mb-2">Standard BOQ Template</h4>
                  <p className="text-osg-slate text-xs mb-6 uppercase tracking-widest leading-relaxed">Download our standardized Bill of Quantities template to streamline technical filing.</p>
                  <button className="text-[10px] font-black text-osg-gold uppercase tracking-[0.3em] border-b border-osg-gold/30 pb-1 hover:border-osg-gold">Download XLSX (2.4MB)</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

