import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenMobileMenu, activeSection, isProductPage, onOpenProduct, onHome, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FFF0D2]/95 backdrop-blur-md py-3 sm:py-4 border-b border-[#6E1414]/10 shadow-[0_4px_20px_rgba(110,20,20,0.04)]'
          : 'bg-transparent py-5 sm:py-6 lg:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Real Brand Wordmark Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onHome();
          }}
          className="flex items-center select-none cursor-pointer"
          aria-label="SAANJH PARFUMS Home"
        >
          <img
            src="/woodmark-clean.png"
            alt="SAANJH PARFUMS"
            className="h-6 sm:h-7 md:h-8 w-auto object-contain hover:opacity-85 transition-opacity"
          />
        </a>

        {/* Center decorative line and Nav Links */}
        <div className="flex items-center flex-1 ml-6 sm:ml-10 lg:ml-14">
          {/* Hairline connecting across */}
          <div className="hidden sm:block flex-1 h-[1px] bg-[#6E1414]/25 mr-6 lg:mr-10" />

          {/* Navigation Items */}
          <nav className="hidden sm:flex items-center gap-5 md:gap-7 lg:gap-10">
            <button
              onClick={() => onNavigate('the-fragrance')}
              className={`relative font-sans text-[10px] md:text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 py-1 cursor-pointer whitespace-nowrap ${
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
              onClick={() => onNavigate('our-story')}
              className={`relative font-sans text-[10px] md:text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 py-1 cursor-pointer whitespace-nowrap ${
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
              onClick={onOpenProduct}
              className={`relative font-sans text-[10px] md:text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 py-1 cursor-pointer whitespace-nowrap ${isProductPage ? 'text-[#6E1414] font-medium' : 'text-[#4A3A34]/80 hover:text-[#6E1414]'}`}
            >
              SHOP AFTER RAIN
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#6E1414] transition-transform duration-300 origin-left ${isProductPage ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'}`} />
            </button>
          </nav>
        </div>

        {/* Minimalist 2-line Hamburger Menu Button */}
        <button
          onClick={onOpenMobileMenu}
          aria-label="Open Menu"
          className="ml-4 sm:ml-6 flex flex-col justify-center items-end gap-[5px] w-8 h-8 p-1 group focus:outline-none cursor-pointer"
        >
          <span className="w-6 h-[1.5px] bg-[#6E1414] transition-all duration-300 group-hover:w-7" />
          <span className="w-4 h-[1.5px] bg-[#6E1414] transition-all duration-300 group-hover:w-7" />
        </button>
      </div>
    </header>
  );
}
