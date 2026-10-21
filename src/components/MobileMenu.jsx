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
        className="fixed inset-0 bg-[#220404]/60 backdrop-blur-sm transition-opacity duration-500 animate-fadeIn"
      />

      {/* Slide-over Content Drawer */}
      <div className="relative w-full max-w-md bg-[#F2E9DC] h-full shadow-2xl z-10 flex flex-col justify-between p-8 sm:p-12 overflow-y-auto border-l border-[#6E1414]/15 transform transition-transform duration-500 ease-out">
        {/* Header: Brand + Close button */}
        <div className="flex items-center justify-between pb-8 border-b border-[#6E1414]/15">
          <div className="flex flex-col">
            <span className="font-serif text-[22px] font-medium tracking-[0.22em] text-[#6E1414] leading-none">
              SAANJH
            </span>
            <span className="font-sans text-[7.5px] tracking-[0.45em] text-[#6E1414]/85 uppercase mt-1 pl-[0.45em]">
              PARFUMS
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="w-10 h-10 rounded-full border border-[#6E1414]/20 flex items-center justify-center text-[#6E1414] hover:bg-[#6E1414] hover:text-[#FFF0D2] transition-all duration-300"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-7 py-10">
          <button
            onClick={() => scrollTo('hero')}
            className="text-left font-serif text-3xl sm:text-4xl text-[#6E1414] hover:opacity-75 transition-opacity"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('the-fragrance')}
            className="text-left font-serif text-3xl sm:text-4xl text-[#6E1414] hover:opacity-75 transition-opacity"
          >
            The Fragrance
          </button>
          <button
            onClick={() => scrollTo('our-story')}
            className="text-left font-serif text-3xl sm:text-4xl text-[#6E1414] hover:opacity-75 transition-opacity"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollTo('early-access')}
            className="text-left font-serif text-3xl sm:text-4xl text-[#6E1414] hover:opacity-75 transition-opacity"
          >
            Early Access
          </button>
        </nav>

        {/* Footer Notes & Quote */}
        <div className="pt-8 border-t border-[#6E1414]/15 space-y-5">
          <p className="font-serif italic text-xl text-[#5A3E36]">
            Some things are better felt than revealed.
          </p>
          <div className="flex items-center justify-between text-xs text-[#7A685D]">
            <span>hello@saanjhparfums.in</span>
            <span className="tracking-widest uppercase text-[10px]">Debut 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
