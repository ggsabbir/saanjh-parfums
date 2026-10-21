import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Interlude from './components/Interlude.jsx';
import FragranceShowcase from './components/FragranceShowcase.jsx';
import SensoryTriptych from './components/SensoryTriptych.jsx';
import BrandStory from './components/BrandStory.jsx';
import EarlyAccess from './components/EarlyAccess.jsx';
import Footer from './components/Footer.jsx';
import MobileMenu from './components/MobileMenu.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeStep, setActiveStep] = useState('01');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize Lenis luxury smooth scroll
  useEffect(() => {
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
      const sections = ['hero', 'the-fragrance', 'our-story', 'early-access'];
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
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFF0D2] text-[#4A3A34] overflow-x-hidden selection:bg-[#6E1414] selection:text-[#FFF0D2]">
      {/* Editorial Navigation Bar */}
      <Navbar
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        activeSection={activeSection}
      />

      {/* Slide-over Mobile / Editorial Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main>
        {/* Section 1: Hero */}
        <Hero activeStep={activeStep} />

        {/* Section 2: Poetic Interlude Banner */}
        <Interlude />

        {/* Section 3: The First Fragrance Showcase */}
        <FragranceShowcase />

        {/* Section 4: Sensory Triptych */}
        <SensoryTriptych />

        {/* Section 5: Brand Story */}
        <BrandStory />

        {/* Section 6: Early Access Lead Capture */}
        <EarlyAccess />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
