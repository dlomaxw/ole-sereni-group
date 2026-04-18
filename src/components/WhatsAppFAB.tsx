'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFAB() {
  const pathname = usePathname();
  
  // Hide FAB on Login and Portal pages to maintain a professional atmosphere
  const isHiddenRoute = pathname === '/login' || pathname?.startsWith('/portal') || pathname?.startsWith('/admin');

  if (isHiddenRoute) return null;
  return (
    <motion.a
      href="https://wa.me/256767358604?text=Hello%20Ole%20Sereni%20Group%2C%20I%27d%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-pulse-gold"
      style={{ background: '#25d366' }}
    >
      <MessageCircle size={26} fill="white" color="white" />
    </motion.a>
  );
}
