import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenMobileMenu, activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F2E9DC]/90 backdrop-blur-md py-4 border-b border-[#6E1414]/10 shadow-[0_4px_20px_rgba(110,20,20,0.04)]'
          : 'bg-transparent py-6 lg:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
          className="group flex flex-col items-center select-none text-left"
          aria-label="SAANJH PARFUMS Home"
        >
          <span className="font-serif text-[22px] md:text-[24px] font-medium tracking-[0.22em] text-[#6E1414] leading-none transition-opacity duration-300 group-hover:opacity-80">
            SAANJH
          </span>
          <span className="font-sans text-[7.5px] md:text-[8px] tracking-[0.45em] text-[#6E1414]/85 uppercase mt-1 pl-[0.45em]">
            PARFUMS
          </span>
        </a>

        {/* Center decorative line and Nav Links (Desktop) */}
        <div className="hidden md:flex items-center flex-1 ml-10 lg:ml-16">
          {/* Hairline connecting to links */}
          <div className="flex-1 h-[1px] bg-[#6E1414]/20 mr-8 lg:mr-12" />

          {/* Navigation Items */}
          <nav className="flex items-center gap-7 lg:gap-10">
            <button
              onClick={() => scrollTo('the-fragrance')}
              className={`relative font-sans text-[10.5px] lg:text-[11px] tracking-[0.24em] uppercase transition-colors duration-300 py-1 ${
                activeSection === 'the-fragrance'
                  ? 'text-[#6E1414] font-medium'
                  : 'text-[#4A3A34]/80 hover:text-[#6E1414]'
              }`}
            >
              THE FRAGRANCE
              <span
                className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#6E1414] transition-transform duration-300 origin-left ${
                  activeSection === 'the-fragrance' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                }`}
              />
            </button>

            <button
              onClick={() => scrollTo('our-story')}
              className={`relative font-sans text-[10.5px] lg:text-[11px] tracking-[0.24em] uppercase transition-colors duration-300 py-1 ${
                activeSection === 'our-story'
                  ? 'text-[#6E1414] font-medium'
                  : 'text-[#4A3A34]/80 hover:text-[#6E1414]'
              }`}
            >
              OUR STORY
              <span
                className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#6E1414] transition-transform duration-300 origin-left ${
                  activeSection === 'our-story' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                }`}
              />
            </button>

            <button
              onClick={() => scrollTo('early-access')}
              className={`relative font-sans text-[10.5px] lg:text-[11px] tracking-[0.24em] uppercase transition-colors duration-300 py-1 ${
                activeSection === 'early-access'
                  ? 'text-[#6E1414] font-medium'
                  : 'text-[#4A3A34]/80 hover:text-[#6E1414]'
              }`}
            >
              EARLY ACCESS
              <span
                className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#6E1414] transition-transform duration-300 origin-left ${
                  activeSection === 'early-access' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                }`}
              />
            </button>
          </nav>
        </div>

        {/* Minimalist 2-line Hamburger Menu Button (Mobile & Editorial Drawer) */}
        <button
          onClick={onOpenMobileMenu}
          aria-label="Open Menu"
          className="ml-6 flex flex-col justify-center items-end gap-[5px] w-8 h-8 group focus:outline-none"
        >
          <span className="w-6 h-[1.5px] bg-[#6E1414] transition-all duration-300 group-hover:w-7" />
          <span className="w-4 h-[1.5px] bg-[#6E1414] transition-all duration-300 group-hover:w-7" />
        </button>
      </div>
    </header>
  );
}
