import './App.css'
import { ReactLenis } from 'lenis/react';
import ConferenceBanner from './components/ConferenceBanner';
import OurTargets from './components/OurTargets';
import ProductSuite from './components/ProductSuite';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FloatingKnowMore from './components/FloatingKnowMore';


export default function App() {
  return (
    <ReactLenis root>
      <main className="overflow-hidden">

      <HeroSection />
      <ProductSuite />
      <OurTargets />
      <div
        className="relative w-full"
        style={{
          backgroundImage: "url('/images/footer-bg.svg')",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        <ConferenceBanner />
        <Footer />
      </div>
      <FloatingKnowMore />
      </main>
    </ReactLenis>
  );
}