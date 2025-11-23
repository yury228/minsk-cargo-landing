import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Грузоперевозки в Минске | ВозимМинск - Быстро и надёжно',
  description:
    'Профессиональные грузоперевозки в Минске и области. Квартирные и офисные переезды, доставка грузов, строительные перевозки. Работаем 24/7. Гарантия качества.',
  keywords: [
    'грузоперевозки Минск',
    'переезд Минск',
    'доставка грузов Минск',
    'грузчики Минск',
    'транспортные услуги Минск',
    'квартирный переезд',
    'офисный переезд',
  ],
  authors: [{ name: 'ВозимМинск' }],
  creator: 'ВозимМинск',
  publisher: 'ВозимМинск',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gruzominsk.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_BY',
    url: 'https://gruzominsk.vercel.app',
    title: 'Грузоперевозки в Минске | ВозимМинск',
    description:
      'Профессиональные грузоперевозки в Минске и области. Квартирные и офисные переезды, доставка грузов. Работаем 24/7.',
    siteName: 'ВозимМинск',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Грузоперевозки в Минске',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Грузоперевозки в Минске | ВозимМинск',
    description:
      'Профессиональные грузоперевозки в Минске и области. Работаем 24/7.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Добавьте ваши коды верификации здесь
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

