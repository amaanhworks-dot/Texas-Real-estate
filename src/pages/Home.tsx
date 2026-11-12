import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/Hero';
import { MobileActionBar } from '@/components/MobileActionBar';
import { Process } from '@/components/Process';
import { Results } from '@/components/Results';
import { ServiceAreas } from '@/components/ServiceAreas';
import { Services } from '@/components/Services';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Results />
      <Process />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <MobileActionBar />
    </>
  );
}
