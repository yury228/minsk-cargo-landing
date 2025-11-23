'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Массив фотографий - замените на ваши реальные пути
// Если фотографий нет, карусель не будет отображаться
const images = [
  {
    src: '/gallery/photo1.JPG',
    alt: 'Грузчики за работой',
  },
  {
    src: '/gallery/photo2.JPG',
    alt: 'Перевозка мебели',
  },
  {
    src: '/gallery/photo3.JPG',
    alt: 'Грузовой транспорт',
  },
  {
    src: '/gallery/photo4.JPG',
    alt: 'Квартирный переезд',
  },
  {
    src: '/gallery/photo5.JPG',
    alt: 'Офисный переезд',
  },
  {
    src: '/gallery/photo6.JPG',
    alt: 'Доставка грузов',
  },
].filter(Boolean); // Фильтруем пустые значения

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Меняем каждые 5 секунд

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Если нет изображений, не показываем карусель
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px 0px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-8 max-w-2xl text-center sm:mb-12 md:mb-16"
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-2">
            Наша работа
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Фотографии с реальных объектов грузоперевозок
          </p>
        </motion.div>

        {/* Карусель */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl w-full max-h-[600px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 w-full h-full"
              >
                {!imageError[currentIndex] ? (
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    onError={() => {
                      setImageError((prev) => ({ ...prev, [currentIndex]: true }));
                    }}
                    unoptimized
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
                    <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                      Фото загружается...
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Кнопки навигации */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 shadow-lg backdrop-blur-sm border border-primary/20 active:scale-95 touch-manipulation"
              onClick={() => paginate(-1)}
              aria-label="Предыдущее фото"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 shadow-lg backdrop-blur-sm border border-primary/20 active:scale-95 touch-manipulation"
              onClick={() => paginate(1)}
              aria-label="Следующее фото"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </Button>
          </div>

          {/* Индикаторы (точки) - улучшенный дизайн */}
          <div className="flex justify-center items-center gap-2 sm:gap-2.5 mt-4 sm:mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative rounded-full transition-all duration-300 touch-manipulation active:scale-90 ${index === currentIndex
                    ? 'h-2.5 w-8 sm:h-3 sm:w-10 bg-primary shadow-lg shadow-primary/50'
                    : 'h-2 w-2 sm:h-2.5 sm:w-2.5 bg-primary/30 hover:bg-primary/50 active:bg-primary/60'
                  }`}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>

          {/* Счётчик - более компактный на мобильных */}
          <div className="text-center mt-2.5 sm:mt-4">
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

