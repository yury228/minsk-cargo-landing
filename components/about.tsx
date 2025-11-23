'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Опытная команда',
    description: 'Профессиональные водители и грузчики с многолетним опытом',
  },
  {
    icon: Award,
    title: 'Гарантия качества',
    description: 'Страхование грузов и гарантия сохранности вашего имущества',
  },
  {
    icon: Clock,
    title: 'Работаем 24/7',
    description: 'Круглосуточная служба поддержки и возможность заказа в любое время',
  },
];

const advantages = [
  'Более 10 лет на рынке грузоперевозок',
  'Собственный автопарк различной грузоподъёмности',
  'Фиксированные цены без скрытых доплат',
  'Быстрое оформление заказа за 5 минут',
  'Индивидуальный подход к каждому клиенту',
  'Полная ответственность за сохранность груза',
];

export function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted/30 to-primary/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px 0px' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary">
              <span>О компании</span>
            </div>
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text px-2">
              Почему выбирают нас
            </h2>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-2">
              Мы — надёжная компания по грузоперевозкам в Минске, которая
              заботится о каждом клиенте. Наша команда профессионалов
              обеспечивает качественный сервис и безопасную доставку ваших
              грузов.
            </p>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 active:scale-[0.97] touch-manipulation"
                  >
                    <div className="mb-2 sm:mb-3 flex justify-center">
                      <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                      </div>
                    </div>
                    <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base font-bold">{feature.title}</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px 0px' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-card to-card/80 p-5 sm:p-6 md:p-8 border-2 border-primary/20 shadow-xl backdrop-blur-sm">
              <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                <span className="h-1 w-6 sm:w-8 bg-gradient-to-r from-primary to-blue-600 rounded-full" />
                Наши преимущества
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-primary/5 active:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="mt-0.5 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-white shadow-md group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-foreground font-medium pt-0.5 leading-relaxed">{advantage}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

