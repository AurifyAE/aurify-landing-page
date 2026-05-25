import './App.css'
import ConferenceBanner from './components/ConferenceBanner';
import OurTargets from './components/OurTargets';
import ProductSuite from './components/ProductSuite';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import arrowDown from "/images/arrow-down.svg"


export default function App() {
  return (
    <main>
      <div className="relative">

        <div className="relative z-10">
          <HeroSection />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-0">
          <img src={arrowDown} alt="" />
        </div>

      </div>
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
    </main>
  );
}