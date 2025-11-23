import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Pricing } from '@/components/pricing';
import { About } from '@/components/about';
import { Gallery } from '@/components/gallery';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { FloatingPhoneButton } from '@/components/floating-phone-button';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingPhoneButton />
    </main>
  );
}

