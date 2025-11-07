import Navigation from '@/Components/Navigation';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Gallery from './Gallery';
import Testimonials from '@/Components/Testimonials';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';

export default function Home() {
  return (
    <main className="font-sans bg-slate-950">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}