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
      className="relative min-h-[680px] lg:min-h-[760px] w-full flex items-center overflow-hidden bg-[#F2E9DC]"
    >
      {/* Background with product showcase (driftwood, bottle, red blossoms) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/product-showcase-bg.jpg"
          alt="SAANJH AFTER RAIN perfume on weathered driftwood with red blossoms"
          loading="lazy"
          className="w-full h-full object-cover object-[20%_center] lg:object-[24%_center]"
        />
        {/* Soft cream fade on right for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#F2E9DC]/60 lg:via-[#F2E9DC]/80 to-[#F2E9DC] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Left space reserving bottle visibility */}
        <div className="lg:col-span-6 xl:col-span-7 h-48 sm:h-72 lg:h-auto" />

        {/* Right column editorial content */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left bg-[#F2E9DC]/75 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 rounded-sm">
          {/* Eyebrow */}
          <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-[#6E1414] font-medium mb-3">
            THE FIRST FRAGRANCE
          </span>

          {/* H2 Title */}
          <h2 className="font-serif text-[#6E1414] text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.03em] font-normal leading-[1.08] mb-6">
            AFTER RAIN
          </h2>

          {/* Description */}
          <p className="font-sans text-[#4A3A34] text-[15px] leading-[1.75] mb-6 max-w-md font-light">
            A fragrance inspired by the feeling of the world after rainfall — quiet, intimate, and
            impossible to quite put into words.
          </p>

          {/* Poetic Quote */}
          <blockquote className="font-serif italic text-[#6E1414] text-2xl sm:text-[26px] leading-[1.3] mb-6 font-normal">
            Some moments disappear.
            <br />
            Their feeling doesn&apos;t.
          </blockquote>

          {/* Divider */}
          <div className="w-8 h-[1px] bg-[#6E1414]/40 mb-6" />

          {/* Status Badge */}
          <div className="inline-block bg-[#E4D5C3] text-[#6B5647] text-[10px] tracking-[0.22em] uppercase px-4 py-2 mb-6 font-sans font-medium rounded-[1px]">
            IN DEVELOPMENT
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollTo('early-access')}
            className="btn-luxury-primary px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase font-medium rounded-[2px] cursor-pointer"
          >
            GET EARLY ACCESS
          </button>
        </div>
      </div>
    </section>
  );
}
