'use client';

import { motion } from 'framer-motion';
import {
    Users,
    Truck,
    Container,
    Scale,
    Ruler,
} from 'lucide-react';

const PHONE_NUMBER = '+375292035662';

const pricingItems = [
    {
        icon: Users,
        title: 'Грузчики',
        price: 'от 25 руб/час',
        description: 'Профессиональные грузчики для любых задач',
        details: ['Погрузка/разгрузка', 'Подъем на этаж', 'Сборка/разборка мебели'],
    },
    {
        icon: Truck,
        title: 'Микроавтобус',
        price: 'от 35 руб/час',
        description: 'Для небольших переездов и доставки',
        details: ['До 10 куб.м', 'До 1 тонны', 'Идеально для вещей'],
    },
    {
        icon: Container,
        title: 'Фургон',
        price: 'от 45 руб/час',
        description: 'Вместительный транспорт для переездов',
        details: ['До 2.5 тонн', 'Мебельный фургон', 'Квартирные переезды'],
    },
    {
        icon: Scale,
        title: '3-тонник',
        price: 'от 60 руб/час',
        description: 'Для крупных грузов и переездов',
        details: ['До 3 тонн', 'Длина до 6 метров', 'Офисные переезды'],
    },
    {
        icon: Ruler,
        title: '5-тонник',
        price: 'от 70 руб/час',
        description: 'Максимальная вместимость',
        details: ['До 5 тонн', 'Длина от 6 метров', 'Крупногабаритные грузы'],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export function Pricing() {
    return (
        <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-16"
                >
                    <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-2">
                        Наши цены
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
                        Честные тарифы без скрытых платежей
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px 0px' }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
                >
                    {pricingItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.a
                                key={index}
                                href={`tel:${PHONE_NUMBER}`}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="group relative flex flex-col rounded-2xl border border-primary/10 bg-card p-6 shadow-sm transition-all hover:shadow-xl hover:border-primary/30 cursor-pointer"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                                <div className="mb-4 text-2xl font-bold text-primary">
                                    {item.price}
                                </div>
                                <p className="mb-6 text-sm text-muted-foreground">
                                    {item.description}
                                </p>

                                <ul className="space-y-2">
                                    {item.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
