'use client';

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PHONE_NUMBER = '+375292035662';

export function FloatingPhoneButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Показывать кнопку после прокрутки вниз
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.a
      href={`tel:${PHONE_NUMBER}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 active:scale-90"
      aria-label="Позвонить"
    >
      <Phone className="h-7 w-7 sm:h-6 sm:w-6" />
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full bg-primary/40 -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className="absolute inset-0 rounded-full bg-primary/20 -z-10"
      />
    </motion.a>
  );
}

