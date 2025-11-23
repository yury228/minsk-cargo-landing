import Link from 'next/link';
import { Phone, Truck } from 'lucide-react';

const PHONE_NUMBER = '+375292035662';
const PHONE_DISPLAY = '+375 (29) 203-56-62';

export function Footer() {
  return (
    <footer className="relative border-t-2 border-primary/20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4 py-8 sm:py-10 md:py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-blue-600 p-2 rounded-lg">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-extrabold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent sm:text-lg">
                ВозимМинск
              </h3>
            </div>
            <p className="text-xs text-muted-foreground sm:text-sm leading-relaxed">
              Надёжные грузоперевозки в Минске и области. Профессиональный
              сервис с гарантией качества.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold sm:text-lg">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  <Phone className="h-4 w-4 shrink-0 transition-transform duration-300 hover:scale-110" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li className="text-xs text-muted-foreground sm:text-sm">
                г. Минск, проспект Рокоссовского, д. 141
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold sm:text-lg">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground sm:text-sm">
            © {new Date().getFullYear()} ГрузоМинск. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

