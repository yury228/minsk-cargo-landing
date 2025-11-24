'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE_NUMBER = '+375292035662';
const PHONE_DISPLAY = '+375 (29) 203-56-62';
const EMAIL = 'srusakivic03@gmail.com';
const ADDRESS = 'г. Минск, проспект Рокоссовского, д. 141';
const VIBER_NUMBER = '+375292035662';
const VIBER_NUMBER_DIGITS = VIBER_NUMBER.replace('+', '');
// Пробуем формат для публичного аккаунта
const VIBER_CHAT_LINK = `viber://pa?chatURI=${VIBER_NUMBER_DIGITS}`;
const VIBER_WEB_FALLBACK = `https://viber.click/${VIBER_NUMBER_DIGITS}`;

export function Contact() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px 0px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-8 max-w-2xl text-center sm:mb-12 md:mb-16"
        >
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary">
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Контакты</span>
          </div>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text px-2">
            Свяжитесь с нами
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Готовы ответить на все ваши вопросы и помочь с перевозкой
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px 0px' }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card to-card/80 p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 active:scale-95"
              >
                <div className="mb-3 sm:mb-4 flex items-start gap-2 sm:gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-base sm:text-lg font-bold">Телефон</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                      Звонки принимаются круглосуточно
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 w-full h-12 sm:h-11 px-6 sm:px-8 rounded-md text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card to-card/80 p-6 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg transition-transform duration-300 hover:scale-110">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-bold text-lg">Email</h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      Напишите нам письмо
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center justify-center gap-2 w-full h-12 sm:h-11 px-6 sm:px-8 rounded-md text-sm sm:text-base font-semibold border-2 border-input bg-background hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{EMAIL}</span>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card to-card/80 p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 active:scale-95"
              >
                <div className="mb-3 sm:mb-4 flex items-start gap-2 sm:gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#665CAC] to-[#7B6FBF] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.366 6.543a7.016 7.016 0 0 1 1.876 4.111 6.93 6.93 0 0 1-.5 3.618 6.891 6.891 0 0 1-1.376 2.05c-.156.15-.331.3-.525.416a.122.122 0 0 0-.07.138l.4 1.678a.48.48 0 0 1-.643.534l-2.4-.956a9.325 9.325 0 0 1-1.1-.488 10.936 10.936 0 0 1-5.494-5.494 9.325 9.325 0 0 1-.488-1.1l-.956-2.4a.48.48 0 0 1 .534-.643l1.678.4a.122.122 0 0 0 .138-.07 6.891 6.891 0 0 1 2.05-1.376 6.93 6.93 0 0 1 3.618-.5 7.016 7.016 0 0 1 4.111 1.876zm3.35-2.543a11.978 11.978 0 0 0-2.4-.244C8.727 3.756 3.756 8.727 3.756 14.316c0 .8.08 1.585.244 2.4l-1.678 4.222a.96.96 0 0 0 1.069 1.286l4.222-1.678a11.978 11.978 0 0 0 2.4.244c5.589 0 10.56-4.971 10.56-10.56 0-5.589-4.971-10.56-10.56-10.56z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-base sm:text-lg font-bold">Viber</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                      Напишите нам в Viber
                    </p>
                  </div>
                </div>
                <a
                  href={VIBER_CHAT_LINK}
                  onClick={(e) => {
                    if (typeof window === 'undefined') {
                      return;
                    }

                    // На ПК или если Viber не установлен, открываем веб-версию
                    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      window.navigator.userAgent
                    );
                    const hasViber = /Viber/i.test(window.navigator.userAgent);
                    
                    if (!isMobile || !hasViber) {
                      e.preventDefault();
                      window.open(VIBER_WEB_FALLBACK, '_blank');
                    }
                  }}
                  className="flex items-center justify-center gap-2 w-full h-12 sm:h-11 px-6 sm:px-8 rounded-md text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#665CAC] to-[#7B6FBF] hover:from-[#7B6FBF] hover:to-[#665CAC] shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.366 6.543a7.016 7.016 0 0 1 1.876 4.111 6.93 6.93 0 0 1-.5 3.618 6.891 6.891 0 0 1-1.376 2.05c-.156.15-.331.3-.525.416a.122.122 0 0 0-.07.138l.4 1.678a.48.48 0 0 1-.643.534l-2.4-.956a9.325 9.325 0 0 1-1.1-.488 10.936 10.936 0 0 1-5.494-5.494 9.325 9.325 0 0 1-.488-1.1l-.956-2.4a.48.48 0 0 1 .534-.643l1.678.4a.122.122 0 0 0 .138-.07 6.891 6.891 0 0 1 2.05-1.376 6.93 6.93 0 0 1 3.618-.5 7.016 7.016 0 0 1 4.111 1.876zm3.35-2.543a11.978 11.978 0 0 0-2.4-.244C8.727 3.756 3.756 8.727 3.756 14.316c0 .8.08 1.585.244 2.4l-1.678 4.222a.96.96 0 0 0 1.069 1.286l4.222-1.678a11.978 11.978 0 0 0 2.4.244c5.589 0 10.56-4.971 10.56-10.56 0-5.589-4.971-10.56-10.56-10.56z" />
                  </svg>
                  Написать в Viber
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card to-card/80 p-6 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg transition-transform duration-300 hover:scale-110">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-bold text-lg">Адрес</h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      Наш офис в Минске
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground sm:text-base">{ADDRESS}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card to-card/80 p-6 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg transition-transform duration-300 hover:scale-110">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-bold text-lg">Режим работы</h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      Всегда на связи
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground sm:text-base">
                  Пн-Вс: 24/7
                  <br />
                  Приём заказов и консультации круглосуточно
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px 0px' }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card to-card/80 p-4 sm:p-5 md:p-6 shadow-xl"
            >
              <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">
                    Заказать обратный звонок
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                    Мы свяжемся с вами в течение 5 минут
                  </p>
                </div>
              </div>
              <form
                className="space-y-3 sm:space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                  const subject = `Заявка с сайта от ${name}`;
                  const body = `Имя: ${name}%0D%0AТелефон: ${phone}%0D%0AСообщение: ${message}`;

                  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold"
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border-2 border-input bg-background px-3 sm:px-4 py-2.5 sm:py-3 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:border-primary"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-lg border-2 border-input bg-background px-3 sm:px-4 py-2.5 sm:py-3 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:border-primary"
                    placeholder="+375 (29) 123-45-67"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-lg border-2 border-input bg-background px-3 sm:px-4 py-2.5 sm:py-3 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:border-primary resize-none"
                    placeholder="Опишите ваш груз и маршрут..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full h-12 sm:h-11 px-6 sm:px-8 rounded-md text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="h-4 w-4" />
                  Отправить заявку
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

