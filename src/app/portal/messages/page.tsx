'use client';

import { 
  MessageSquare, 
  Search, 
  Send, 
  ChevronRight, 
  Paperclip, 
  MoreVertical,
  Circle
} from 'lucide-react';
import { motion } from 'framer-motion';

const conversations = [
  { name: 'Elena Sterling', role: 'Lead Architect', message: 'The structural signoff for Phase 04 is ready.', time: '2h ago', unread: true },
  { name: 'Marcus Vancet', role: 'Structural Lead', message: 'I have uploaded the latest FEA report.', time: 'Yesterday', unread: false },
  { name: 'Asset Desk', role: 'Support', message: 'Your vault clearance request was approved.', time: '3 Oct', unread: false },
];

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-200px)] flex flex-col">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[9px] font-black text-osg-gold uppercase tracking-[0.4em] mb-10">
        <span className="opacity-40">Portal</span>
        <ChevronRight size={10} className="opacity-20" />
        <span className="text-osg-navy">Operational Tunnel</span>
      </nav>

      <div className="flex-1 flex bg-white border border-osg-navy/5 shadow-2xl overflow-hidden">
        {/* Conversations List */}
        <div className="w-96 border-r border-osg-navy/5 flex flex-col">
          <div className="p-8 border-b border-osg-navy/5">
            <h3 className="text-[10px] font-black text-osg-navy uppercase tracking-[0.4em] mb-6">Tunnel Channels</h3>
            <div className="relative">
              <input 
                type="text" 
                placeholder="FIND CHANNEL..." 
                className="w-full bg-osg-cream/50 px-5 py-3 text-[9px] font-black uppercase tracking-widest outline-none border-none focus:ring-1 focus:ring-osg-gold"
              />
              <Search size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-osg-navy/20" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
             {conversations.map((chat, idx) => (
               <div key={idx} className={`p-8 border-b border-osg-navy/5 cursor-pointer transition-all hover:bg-osg-cream/30 group ${chat.unread ? 'bg-osg-cream/20' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                     <p className="text-[10px] font-black text-osg-navy uppercase tracking-widest">{chat.name}</p>
                     <span className="text-[8px] font-bold text-osg-navy/20 uppercase">{chat.time}</span>
                  </div>
                  <p className="text-[8px] font-black text-osg-gold uppercase tracking-[0.2em] mb-2">{chat.role}</p>
                  <p className="text-[11px] font-medium text-osg-navy/40 line-clamp-1">{chat.message}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-osg-cream/10">
           {/* Header */}
           <div className="p-8 border-b border-osg-navy/5 flex justify-between items-center bg-white">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-osg-navy flex items-center justify-center text-osg-gold">
                    <MessageSquare size={18} />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black text-osg-navy uppercase tracking-widest">Elena Sterling</h4>
                    <div className="flex items-center gap-2">
                       <Circle size={6} className="fill-osg-gold text-osg-gold animate-pulse" />
                       <span className="text-[8px] font-black text-osg-gold uppercase tracking-widest">Linked (Live)</span>
                    </div>
                 </div>
              </div>
              <button className="text-osg-navy/20 hover:text-osg-navy transition-all">
                 <MoreVertical size={20} />
              </button>
           </div>

           {/* Messages Section */}
           <div className="flex-1 p-10 overflow-y-auto space-y-8">
              <div className="flex flex-col items-start max-w-lg">
                 <div className="p-6 bg-white border border-osg-navy/5 shadow-sm">
                    <p className="text-[11px] font-medium text-osg-navy leading-relaxed">
                       The structural signoff for Phase 04: Advanced Glazing is ready for your review in the Projects desk. We have verified the seal integrity against the original FEA specifications.
                    </p>
                 </div>
                 <span className="text-[8px] font-bold text-osg-navy/20 uppercase mt-2 ml-2">Elena • 09:42 AM</span>
              </div>

              <div className="flex flex-col items-end self-end max-w-lg">
                 <div className="p-6 bg-osg-navy text-white shadow-xl">
                    <p className="text-[11px] font-medium leading-relaxed">
                       Acknowledged. I will initialize the signature process from the operational vault today.
                    </p>
                 </div>
                 <span className="text-[8px] font-bold text-osg-navy/20 uppercase mt-2 mr-2">You • 10:15 AM</span>
              </div>
           </div>

           {/* Input Area */}
           <div className="p-8 bg-white border-t border-osg-navy/5">
              <div className="flex items-center gap-6">
                 <button className="text-osg-navy/20 hover:text-osg-navy transition-all">
                    <Paperclip size={20} />
                 </button>
                 <input 
                   type="text" 
                   placeholder="TRANSMIT MESSAGE..." 
                   className="flex-1 bg-osg-cream/50 px-8 py-5 text-[10px] font-black uppercase tracking-widest outline-none border-none focus:ring-1 focus:ring-osg-gold"
                 />
                 <button className="bg-osg-navy text-osg-gold p-5 hover:bg-osg-gold hover:text-osg-navy transition-all shadow-2xl">
                    <Send size={18} />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
