'use client';

import { motion } from 'framer-motion';
import {
  Truck,
  Package,
  Home,
  Building2,
  Boxes,
  Clock,
  Phone,
} from 'lucide-react';

const PHONE_NUMBER = '+375292035662';

const services = [
  {
    icon: Truck,
    title: 'Квартирные переезды',
    description:
      'Аккуратная перевозка мебели и вещей при переезде. Упаковка, погрузка и разгрузка.',
  },
  {
    icon: Package,
    title: 'Доставка грузов',
    description:
      'Быстрая доставка грузов любой сложности по Минску и области в кратчайшие сроки.',
  },
  {
    icon: Home,
    title: 'Офисные переезды',
    description:
      'Организация переезда офиса с сохранением работоспособности компании.',
  },
  {
    icon: Building2,
    title: 'Строительные перевозки',
    description:
      'Перевозка строительных материалов, инструментов и оборудования.',
  },
  {
    icon: Boxes,
    title: 'Складские услуги',
    description:
      'Перевозка товаров со склада, организация логистики для бизнеса.',
  },
  {
    icon: Clock,
    title: 'Срочные перевозки',
    description:
      'Экспресс-доставка в день заказа. Работаем 24/7 для вашего удобства.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier для плавности
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto mb-8 max-w-2xl text-center sm:mb-12 md:mb-16"
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-2">
            Наши услуги
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Полный спектр услуг по грузоперевозкам в Минске
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px 0px' }}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={index}
                href={`tel:${PHONE_NUMBER}`}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group relative cargo-card flex flex-col rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card to-card/50 p-5 sm:p-6 shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl active:scale-[0.97] touch-manipulation cursor-pointer"
              >
                {/* Декоративный фон */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                {/* Иконка с анимацией */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl group-hover:blur-2xl transition-all" />
                </motion.div>

                <h3 className="relative mb-2 text-base sm:text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Декоративная линия */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-blue-600 group-hover:w-full transition-all duration-500 ease-out rounded-full" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
