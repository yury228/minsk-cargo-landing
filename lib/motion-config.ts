// Конфигурация для плавных анимаций без мерцания

export const smoothMotionConfig = {
  // Для элементов, появляющихся при скролле
  scrollReveal: {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }, // cubic-bezier для плавности
  },
  
  // Для карточек
  card: {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
  
  // Для списков
  listItem: {
    initial: { opacity: 0, x: 10 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

