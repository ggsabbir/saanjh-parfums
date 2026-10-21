import React, { useState, useEffect, useRef } from 'react';

export default function Hero({ activeStep = '01' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center overflow-hidden bg-[#FFF0D2] pt-20 pb-12 sm:pt-0 sm:pb-0"
    >
      {/* Sunlit Sandstone & Droplets Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background.jpg"
          alt="Sunlit sandstone with rainfall droplets and crimson petals"
          fetchPriority="high"
          className="w-full h-full object-cover object-[62%_center] scale-105 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px) scale(1.02)`,
          }}
        />
        {/* Soft warm cream gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF0D2]/80 via-[#FFF0D2]/35 to-transparent pointer-events-none max-w-xl md:max-w-2xl" />
      </div>

      {/* Giant Background Watermark "AFTER RAIN" behind the bottle */}
      <div
        className="flex absolute right-[2%] sm:right-[6%] lg:right-[12%] top-[14%] sm:top-[16%] z-[1] select-none pointer-events-none flex-col items-start leading-[0.84] opacity-25 md:opacity-35 mix-blend-multiply"
        style={{
          transform: `translate(${mousePos.x * -0.15}px, ${mousePos.y * -0.15}px)`,
        }}
        aria-hidden="true"
      >
        <span className="font-serif font-light text-[clamp(4.5rem,13vw,12rem)] tracking-[0.05em] text-[#BFA893]">
          AFTER
        </span>
        <span className="font-serif font-light text-[clamp(4.5rem,13vw,12rem)] tracking-[0.05em] text-[#BFA893] ml-3 sm:ml-5">
          RAIN
        </span>
      </div>

      {/* Main Grid: Left Column Text & Right Column Tilted Bottle (Side-by-Side on all screen sizes) */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full grid grid-cols-12 items-center">
        {/* Left Column Content */}
        <div className="col-span-7 sm:col-span-6 lg:col-span-6 text-left py-6 sm:py-0">
          {/* Main H1 Editorial Heading */}
          <h1 className="font-serif text-[#6E1414] text-[32px] sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.06] font-normal tracking-[-0.01em]">
            Some things are
            <br />
            better felt
            <br />
            than revealed.
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-[#5A3E36] text-base sm:text-xl md:text-2xl mt-3 sm:mt-5 mb-6 sm:mb-9 tracking-wide font-normal">
            A feeling, bottled in fragrance.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-7 pt-1">
            {/* Primary Button */}
            <button
              onClick={() => scrollTo('early-access')}
              className="btn-luxury-primary px-5 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium rounded-[2px] cursor-pointer"
            >
              GET EARLY ACCESS
            </button>

            {/* Secondary Link with animated downward arrow */}
            <button
              onClick={() => scrollTo('the-fragrance')}
              className="group flex items-center gap-1.5 sm:gap-2 font-sans text-[10px] sm:text-[11px] tracking-[0.2em] text-[#5A3E36] hover:text-[#6E1414] uppercase py-1 transition-colors duration-300 cursor-pointer"
            >
              <span className="border-b border-[#5A3E36]/50 group-hover:border-[#6E1414] transition-colors pb-[1px]">
                DISCOVER AFTER RAIN
              </span>
              <span className="text-[12px] sm:text-[13px] transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </button>
          </div>
        </div>

        {/* Right Column / Tilted Perfume Bottle Visual */}
        <div
          className="col-span-5 sm:col-span-6 lg:col-span-6 flex items-center justify-center pointer-events-none"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          }}
        >
          <div className="relative w-full max-w-[220px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[440px] max-h-[75vh]">
            {/* Multi-layered soft drop shadow on sandstone */}
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-14 bg-[#2A0505]/45 rounded-full blur-xl pointer-events-none"
              style={{ transform: 'rotate(19deg) scale(0.95)' }}
            />
            <img
              src="/perfume-bottle.png"
              alt="SAANJH AFTER RAIN Eau de Parfum bottle tilted on wet sandstone"
              className="w-full h-auto max-h-[65vh] sm:max-h-[75vh] object-contain transition-transform duration-700 ease-out drop-shadow-[0_24px_38px_rgba(40,10,5,0.45)] drop-shadow-[0_8px_16px_rgba(70,15,10,0.32)] animate-delicate-float"
              style={{
                transform: `rotate(${19 + mousePos.x * 0.08}deg)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Margin Vertical Step Indicator */}
      <div
        className="hidden lg:flex absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-3.5 select-none pointer-events-none"
        aria-hidden="true"
      >
        <span
          className={`font-sans text-[10.5px] tracking-widest transition-all duration-300 ${
            activeStep === '01' ? 'text-[#6E1414] font-semibold scale-110' : 'text-[#6E1414]/40'
          }`}
        >
          01
        </span>
        <div
          className={`w-[1px] h-8 transition-colors duration-300 ${
            activeStep === '01' ? 'bg-[#6E1414]/70' : 'bg-[#6E1414]/25'
          }`}
        />
        <span
          className={`font-sans text-[10.5px] tracking-widest transition-all duration-300 ${
            activeStep === '02' ? 'text-[#6E1414] font-semibold scale-110' : 'text-[#6E1414]/40'
          }`}
        >
          02
        </span>
        <div
          className={`w-[1px] h-8 transition-colors duration-300 ${
            activeStep === '02' ? 'bg-[#6E1414]/70' : 'bg-[#6E1414]/25'
          }`}
        />
        <span
          className={`font-sans text-[10.5px] tracking-widest transition-all duration-300 ${
            activeStep === '03' ? 'text-[#6E1414] font-semibold scale-110' : 'text-[#6E1414]/40'
          }`}
        >
          03
        </span>
      </div>
    </section>
  );
}
