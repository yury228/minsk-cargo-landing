'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: 'Сколько стоит перевозка груза?',
    answer: 'Стоимость перевозки зависит от объёма груза, расстояния и сложности работ. Мы предлагаем бесплатную оценку стоимости при выезде специалиста. Минимальная стоимость перевозки от 50 рублей.',
  },
  {
    question: 'Как быстро можно организовать перевозку?',
    answer: 'Мы работаем 24/7 и можем организовать перевозку в день обращения. При необходимости можем выехать в течение 1-2 часов после звонка.',
  },
  {
    question: 'Какие документы нужны для перевозки?',
    answer: 'Для перевозки мебели и личных вещей документы не требуются. При перевозке коммерческих грузов может потребоваться товарно-транспортная накладная. Все детали уточняются при оформлении заказа.',
  },
  {
    question: 'Обеспечиваете ли вы сохранность груза?',
    answer: 'Да, мы полностью отвечаем за сохранность вашего груза. Все ценные вещи упаковываются в защитные материалы. При необходимости предоставляем страховку груза.',
  },
  {
    question: 'Работаете ли вы в выходные и праздники?',
    answer: 'Да, мы работаем круглосуточно, включая выходные и праздничные дни. Вы можете заказать перевозку в любое удобное для вас время.',
  },
  {
    question: 'Какие виды грузоперевозок вы выполняете?',
    answer: 'Мы выполняем квартирные и офисные переезды, перевозку мебели, бытовой техники, строительных материалов, доставку товаров, перевозку оборудования и другие виды грузоперевозок в Минске и области.',
  },
  {
    question: 'Есть ли у вас грузчики?',
    answer: 'Да, у нас работают опытные грузчики, которые аккуратно погрузят, перевезут и разгрузят ваш груз. Стоимость услуг грузчиков рассчитывается отдельно.',
  },
  {
    question: 'Можно ли оплатить картой?',
    answer: 'Да, мы принимаем оплату наличными, банковскими картами и безналичным расчётом для юридических лиц. Все способы оплаты обговариваются при оформлении заказа.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px 0px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-8 max-w-2xl text-center sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 text-primary mr-2" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Часто задаваемые вопросы
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px 0px' }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-xl sm:rounded-2xl border-2 border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl sm:rounded-2xl active:bg-primary/5 touch-manipulation"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground pr-4 flex-1">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                      <div className="pt-2 sm:pt-3 border-t border-primary/10">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px 0px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <a
            href="tel:+375291234567"
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 touch-manipulation"
          >
            Позвоните нам
          </a>
        </motion.div>
      </div>
    </section>
  );
}

