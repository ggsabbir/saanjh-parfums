import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const scrollTo = (id) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Editorial Menu"
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Blurred Dim Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#220404]/60 backdrop-blur-sm transition-opacity duration-500 animate-fadeIn cursor-pointer"
      />

      {/* Slide-over Content Drawer in #FFF0D2 */}
      <div className="relative w-full max-w-[85vw] sm:max-w-md bg-[#FFF0D2] h-full shadow-2xl z-10 flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-y-auto border-l border-[#6E1414]/15 transform transition-transform duration-500 ease-out">
        {/* Header: Brand Woodmark + Close button */}
        <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#6E1414]/15">
          <img
            src="/woodmark-clean.png"
            alt="SAANJH PARFUMS"
            className="h-7 w-auto object-contain"
          />

          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#6E1414]/20 flex items-center justify-center text-[#6E1414] hover:bg-[#6E1414] hover:text-[#FFF0D2] transition-all duration-300 cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6 sm:space-y-7 py-8 sm:py-10">
          <button
            onClick={() => scrollTo('hero')}
            className="text-left font-serif text-2xl sm:text-3xl md:text-4xl text-[#6E1414] hover:opacity-75 transition-opacity cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('the-fragrance')}
            className="text-left font-serif text-2xl sm:text-3xl md:text-4xl text-[#6E1414] hover:opacity-75 transition-opacity cursor-pointer"
          >
            The Fragrance
          </button>
          <button
            onClick={() => scrollTo('our-story')}
            className="text-left font-serif text-2xl sm:text-3xl md:text-4xl text-[#6E1414] hover:opacity-75 transition-opacity cursor-pointer"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollTo('early-access')}
            className="text-left font-serif text-2xl sm:text-3xl md:text-4xl text-[#6E1414] hover:opacity-75 transition-opacity cursor-pointer"
          >
            Early Access
          </button>
        </nav>

        {/* Footer Notes & Quote */}
        <div className="pt-6 sm:pt-8 border-t border-[#6E1414]/15 space-y-4 sm:space-y-5">
          <p className="font-serif italic text-lg sm:text-xl text-[#5A3E36]">
            Some things are better felt than revealed.
          </p>
          <div className="flex items-center justify-between text-xs text-[#7A685D]">
            <span>hello@saanjhparfums.in</span>
            <span className="tracking-widest uppercase text-[9px] sm:text-[10px]">Debut 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
