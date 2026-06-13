import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Statement from '@/components/Statement';
import Showcase from '@/components/Showcase';
import Philosophy from '@/components/Philosophy';
import BestSellers from '@/components/BestSellers';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';

export default function Home() {
  return (
    <>
      <span id="top" aria-hidden="true" />
      <Nav />
      <Hero />
      <Ticker />
      <Statement />
      <Showcase />
      <Philosophy />
      <BestSellers />
      <Testimonials />
      <Gallery />
      <Footer />
      <FloatingDock />
    </>
  );
}
