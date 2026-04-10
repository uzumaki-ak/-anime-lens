// ─── Import all main page sections
import Preloader from '@/components/Preloader';
import ScrollReveal from '@/components/ScrollReveal';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Category from '@/components/Category';
import About from '@/components/About';
import Service from '@/components/Service';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

// ─── Main application layout
export default function Home() {
  return (
    <div id="top">
      <Preloader />
      <ScrollReveal />
      <CustomCursor />
      <Header />

      <main>
        <article>
          <Hero />
          <Gallery />
          <Category />
          <About />
          <Service />
          <Portfolio />
        </article>
      </main>

      <Footer />
    </div>
  );
}
