import React from 'react';

export default function FragranceShowcase() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="the-fragrance"
      className="relative min-h-[580px] sm:min-h-[680px] lg:min-h-[760px] w-full flex items-center overflow-hidden bg-[#FFF0D2]"
    >
      {/* Background with product showcase (driftwood, bottle, red blossoms) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/product-showcase-bg.jpg"
          alt="SAANJH AFTER RAIN perfume on weathered driftwood with red blossoms"
          className="w-full h-full object-cover object-[35%_center] sm:object-[24%_center]"
        />
        {/* Soft cream fade on right for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFF0D2]/75 to-[#FFF0D2] pointer-events-none" />
      </div>

      {/* Content Container (Side-by-side on all screen sizes) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 grid grid-cols-12 items-center py-16 sm:py-20 lg:py-24">
        {/* Left space reserving bottle visibility */}
        <div className="col-span-5 sm:col-span-6 lg:col-span-7" />

        {/* Right column editorial content */}
        <div className="col-span-7 sm:col-span-6 lg:col-span-5 flex flex-col items-start text-left pl-2 sm:pl-0">
          {/* Eyebrow */}
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#6E1414] font-medium mb-2.5 sm:mb-3">
            THE FIRST FRAGRANCE
          </span>

          {/* H2 Title */}
          <h2 className="font-serif text-[#6E1414] text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.03em] font-normal leading-[1.08] mb-4 sm:mb-6">
            AFTER RAIN
          </h2>

          {/* Description */}
          <p className="font-sans text-[#4A3A34] text-xs sm:text-[14px] md:text-[15px] leading-[1.7] sm:leading-[1.75] mb-4 sm:mb-6 max-w-md font-light">
            A fragrance inspired by the feeling of the world after rainfall — quiet, intimate, and
            impossible to quite put into words.
          </p>

          {/* Poetic Quote */}
          <blockquote className="font-serif italic text-[#6E1414] text-base sm:text-xl lg:text-[26px] leading-[1.3] mb-4 sm:mb-6 font-normal">
            Some moments disappear.
            <br />
            Their feeling doesn&apos;t.
          </blockquote>

          {/* Divider */}
          <div className="w-8 h-[1px] bg-[#6E1414]/40 mb-4 sm:mb-6" />

          {/* Status Badge */}
          <div className="inline-block bg-[#E4D5C3] text-[#6B5647] text-[9px] sm:text-[10px] tracking-[0.22em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 mb-5 sm:mb-6 font-sans font-medium rounded-[1px]">
            IN DEVELOPMENT
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollTo('early-access')}
            className="btn-luxury-primary px-6 sm:px-8 py-3 sm:py-3.5 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium rounded-[2px] cursor-pointer"
          >
            GET EARLY ACCESS
          </button>
        </div>
      </div>
    </section>
  );
}
