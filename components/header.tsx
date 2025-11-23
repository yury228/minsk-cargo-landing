'use client';

import Link from 'next/link';
import { Phone, Menu, X, Truck } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

const PHONE_NUMBER = '+375292035662';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-primary to-blue-600 p-2 rounded-lg transition-transform duration-300 group-hover:scale-105">
              <Truck className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            </div>
          </div>
          <span className="text-xl font-extrabold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent sm:text-2xl transition-all duration-300">
            ВозимМинск
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#services"
            className="text-sm font-medium relative group transition-all duration-300 hover:text-primary"
          >
            Услуги
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium relative group transition-all duration-300 hover:text-primary"
          >
            Цены
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium relative group transition-all duration-300 hover:text-primary"
          >
            О нас
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium relative group transition-all duration-300 hover:text-primary"
          >
            Вопросы
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium relative group transition-all duration-300 hover:text-primary"
          >
            Контакты
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Кнопка звонка - видна на мобильных в header */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="hidden xs:flex sm:hidden items-center gap-1.5 h-9 px-3 rounded-md text-xs font-medium text-white bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transition-all duration-300"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Звонок</span>
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="hidden sm:flex items-center gap-2 h-11 px-6 rounded-md text-sm font-medium text-white bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transition-all duration-300"
          >
            <Phone className="h-4 w-4" />
            Позвонить
          </a>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-10 w-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <nav className="container mx-auto flex flex-col space-y-3 px-4 py-4">
              <Link
                href="#services"
                className="text-base font-semibold transition-all duration-300 hover:text-primary hover:translate-x-2 py-3 px-2 rounded-lg hover:bg-primary/5 active:bg-primary/10"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (typeof window !== 'undefined') {
                    setTimeout(() => {
                      const element = document.getElementById('services');
                      if (element) {
                        const headerHeight = 64;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                          top: elementPosition - headerHeight,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }
                }}
              >
                Услуги
              </Link>
              <Link
                href="#pricing"
                className="text-base font-semibold transition-all duration-300 hover:text-primary hover:translate-x-2 py-3 px-2 rounded-lg hover:bg-primary/5 active:bg-primary/10"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (typeof window !== 'undefined') {
                    setTimeout(() => {
                      const element = document.getElementById('pricing');
                      if (element) {
                        const headerHeight = 64;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                          top: elementPosition - headerHeight,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }
                }}
              >
                Цены
              </Link>
              <Link
                href="#about"
                className="text-base font-semibold transition-all duration-300 hover:text-primary hover:translate-x-2 py-3 px-2 rounded-lg hover:bg-primary/5 active:bg-primary/10"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (typeof window !== 'undefined') {
                    setTimeout(() => {
                      const element = document.getElementById('about');
                      if (element) {
                        const headerHeight = 64;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                          top: elementPosition - headerHeight,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }
                }}
              >
                О нас
              </Link>
              <Link
                href="#faq"
                className="text-base font-semibold transition-all duration-300 hover:text-primary hover:translate-x-2 py-3 px-2 rounded-lg hover:bg-primary/5 active:bg-primary/10"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (typeof window !== 'undefined') {
                    setTimeout(() => {
                      const element = document.getElementById('faq');
                      if (element) {
                        const headerHeight = 64;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                          top: elementPosition - headerHeight,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }
                }}
              >
                Вопросы
              </Link>
              <Link
                href="#contact"
                className="text-base font-semibold transition-all duration-300 hover:text-primary hover:translate-x-2 py-3 px-2 rounded-lg hover:bg-primary/5 active:bg-primary/10"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (typeof window !== 'undefined') {
                    setTimeout(() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        const headerHeight = 64;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                          top: elementPosition - headerHeight,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }
                }}
              >
                Контакты
              </Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 w-full mt-2 h-14 px-6 rounded-md text-base font-semibold text-white bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                Позвонить сейчас
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

