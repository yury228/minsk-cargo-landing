'use client';

import { motion } from 'framer-motion';
import { Truck, Package, Boxes } from 'lucide-react';

export function CargoDecorations() {
  return (
    <>
      {/* Декоративные грузовики */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-0 top-1/4 hidden lg:block"
      >
        <Truck className="h-32 w-32 text-primary rotate-12" />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute right-0 top-1/3 hidden lg:block"
      >
        <Truck className="h-24 w-24 text-primary -rotate-12" />
      </motion.div>

      {/* Декоративные коробки */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.08 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute left-1/4 bottom-1/4 hidden md:block"
      >
        <Package className="h-20 w-20 text-primary rotate-45" />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.08 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute right-1/4 bottom-1/3 hidden md:block"
      >
        <Boxes className="h-16 w-16 text-primary -rotate-12" />
      </motion.div>
    </>
  );
}

