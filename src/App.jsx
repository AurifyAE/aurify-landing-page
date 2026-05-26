import './App.css'
import ConferenceBanner from './components/ConferenceBanner';
import OurTargets from './components/OurTargets';
import ProductSuite from './components/ProductSuite';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';


export default function App() {
  return (
    <main>

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
    </main>
  );
}