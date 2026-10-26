import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Interlude from './components/Interlude.jsx';
import FragranceShowcase from './components/FragranceShowcase.jsx';
import SensoryTriptych from './components/SensoryTriptych.jsx';
import BrandStory from './components/BrandStory.jsx';
import Footer from './components/Footer.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import ProductPage from './components/ProductPage.jsx';
import PolicyPage from './components/PolicyPage.jsx';
import { useCart } from './store/cart.js';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeStep, setActiveStep] = useState('01');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductPage, setIsProductPage] = useState(() => window.location.pathname === '/product/after-rain');
  const [policyPage, setPolicyPage] = useState(() => window.location.pathname.startsWith('/policies/') ? window.location.pathname.split('/').pop() : null);
  const cart = useCart();
  const openProduct = () => {
    window.history.pushState({}, '', '/product/after-rain');
    setIsProductPage(true);
    setPolicyPage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const openPolicy = (type) => {
      window.history.pushState({}, '', `/policies/${type}`);
      setPolicyPage(type);
      setIsProductPage(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  const backToLanding = () => {
    window.history.pushState({}, '', '/');
    setIsProductPage(false);
      setPolicyPage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const goHome = () => {
    if (isProductPage || policyPage) {
      window.history.pushState({}, '', '/');
      setIsProductPage(false);
      setPolicyPage(null);
    }
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  };
  const navigateToSection = (id) => {
    if (isProductPage || policyPage) {
      window.history.pushState({}, '', '/');
      setIsProductPage(false);
      setPolicyPage(null);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 0);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  // Initialize Lenis luxury smooth scroll
  useEffect(() => {
    const handlePopState = () => {
      setIsProductPage(window.location.pathname === '/product/after-rain');
      setPolicyPage(window.location.pathname.startsWith('/policies/') ? window.location.pathname.split('/').pop() : null);
    };
    window.addEventListener('popstate', handlePopState);

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Track scroll positions for section active state & 01/02/03 steps
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      // Calculate step for hero right indicator
      if (scrollY < height * 0.7) {
        setActiveStep('01');
      } else if (scrollY < height * 2.2) {
        setActiveStep('02');
      } else {
        setActiveStep('03');
      }

      // Check current section
      const sections = ['hero', 'emotional-core', 'the-fragrance', 'our-story'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= height * 0.4 && rect.bottom >= height * 0.4) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFF0D2] text-[#4A3A34] overflow-x-hidden selection:bg-[#6E1414] selection:text-[#FFF0D2]">
      {/* Editorial Navigation Bar */}
      {!isProductPage && !policyPage && <Navbar
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        activeSection={activeSection}
        isProductPage={isProductPage}
        onOpenProduct={openProduct}
        onHome={goHome}
        onNavigate={navigateToSection}
      />}

      {/* Slide-over Mobile / Editorial Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenProduct={openProduct}
        onHome={goHome}
        onNavigate={navigateToSection}
      />

      <main>
        {policyPage ? <PolicyPage type={policyPage} onBack={backToLanding} /> : isProductPage ? <ProductPage onOpenMenu={() => setIsMobileMenuOpen(true)} onStory={() => navigateToSection('our-story')} onBack={backToLanding} /> : <>
        {/* Section 1: Hero */}
        <Hero activeStep={activeStep} onShop={openProduct} />

        {/* Section 2: Poetic Interlude Banner */}
        <Interlude />

        {/* Section 3: The First Fragrance Showcase */}
        <FragranceShowcase />

        {/* Section 4: Sensory Triptych */}
        <SensoryTriptych />

        {/* Section 5: Brand Story */}
        <BrandStory />

        <section
          className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#3A0808] px-5 py-20 text-center text-[#FFF0D2] sm:min-h-[440px] sm:px-10 sm:py-28"
          style={{ backgroundImage: "url('/Moody Burgundy Leaves and Dew.png')", backgroundPosition: 'center', backgroundSize: 'cover' }}
        >
          <div className="absolute inset-0 bg-[#220404]/45" />
          <div className="relative z-10">
            <p className="font-serif text-3xl italic text-[#FFF0D2]/90 sm:text-4xl">A feeling, bottled in fragrance.</p>
            <button onClick={openProduct} className="btn-luxury-cream mt-8 px-7 py-4 text-[10px] uppercase tracking-[0.22em]">DISCOVER AFTER RAIN</button>
          </div>
        </section>

        </>}
      </main>

      {/* Footer */}
      <Footer onHome={goHome} onNavigate={navigateToSection} onOpenProduct={openProduct} onOpenPolicy={openPolicy} />
    </div>
  );
}
