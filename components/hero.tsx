'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight, Truck, Package, Boxes, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE_NUMBER = '+375292035662';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Градиентный фон с дорогой */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Дорога в фоне */}
      <div className="absolute inset-0 bg-road-pattern opacity-10 dark:opacity-5" />
      
            {/* Декоративные элементы - только на десктопе */}
            {/* Декоративные грузовики */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-0 top-1/4 hidden lg:block"
            >
              <Truck className="h-32 w-32 text-primary rotate-12" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute right-0 top-1/3 hidden lg:block"
            >
              <Truck className="h-24 w-24 text-primary -rotate-12" />
            </motion.div>

            {/* Декоративные коробки */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute left-1/4 bottom-1/4 hidden md:block"
            >
              <Package className="h-20 w-20 text-primary rotate-45" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute right-1/4 bottom-1/3 hidden md:block"
            >
              <Boxes className="h-16 w-16 text-primary -rotate-12" />
            </motion.div>
      
      {/* Плавающие иконки преимуществ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute top-20 left-10 hidden xl:flex flex-col gap-8"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
        >
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">Страхование</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
        >
          <Clock className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">24/7</span>
        </motion.div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Главная иконка грузовика */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="mb-6 sm:mb-8 inline-flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                <div className="relative bg-gradient-to-br from-primary to-blue-600 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl">
                  <Truck className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-white" />
                </div>
              </div>
            </motion.div>

            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent px-2">
              Грузоперевозки в Минске
              <br />
              <span className="block mt-1 sm:mt-2">Быстро и надёжно</span>
            </h1>
            
            <p className="mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-2xl mx-auto px-2 leading-relaxed">
              Профессиональные грузоперевозки по Минску и области.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Гарантируем безопасность, скорость и выгодные цены.
            </p>

            {/* Статистика - компактнее на мобильных */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
              className="mb-6 sm:mb-8 md:mb-10 grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-2xl mx-auto px-2"
            >
              {[
                { number: '5', label: 'Лет опыта' },
                { number: '24/7', label: 'Работаем' },
                { number: '100%', label: 'Гарантия' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05, duration: 0.4, ease: 'easeOut' }}
                  className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-primary/20 shadow-sm sm:shadow-md"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-0.5 sm:mb-1">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Кнопки - более заметные на мобильных */}
            <div className="flex flex-col items-stretch sm:items-center gap-3 sm:gap-4 px-2 sm:px-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto sm:min-w-[200px]"
              >
                <a 
                  href={`tel:${PHONE_NUMBER}`} 
                  className="flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[200px] h-14 sm:h-12 px-6 sm:px-8 rounded-md text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Phone className="h-5 w-5 sm:h-4 sm:w-4" />
                  <span className="text-base sm:text-sm">Позвонить сейчас</span>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto sm:min-w-[200px]"
              >
                <a 
                  href="#services" 
                  className="flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[200px] h-14 sm:h-12 px-6 sm:px-8 rounded-md text-base sm:text-lg font-semibold border-2 border-input bg-background hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <span>Наши услуги</span>
                  <ArrowRight className="h-5 w-5 sm:h-4 sm:w-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

