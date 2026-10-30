import React, { useState } from 'react';
import { AFTER_RAIN } from '../data/product.js';

export default function FragranceShowcase({ onShop }) {
  const [selectedVariant, setSelectedVariant] = useState(AFTER_RAIN.variants[0]);

  return (
    <section
      id="the-fragrance"
      className="scroll-scene relative min-h-[680px] sm:min-h-[680px] lg:min-h-[760px] w-full flex items-center overflow-hidden bg-[#FFF0D2]"
    >
      {/* Background with product showcase (driftwood, bottle, red blossoms) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/product-showcase-bg.jpg"
          alt="SAANJH AFTER RAIN perfume on weathered driftwood with red blossoms"
          className="scroll-scene-image w-full h-full object-cover object-[35%_center] sm:object-[24%_center]"
        />
        {/* Soft cream fade on right for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF0D2]/98 via-[#FFF0D2]/82 via-[58%] to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:via-[48%] sm:to-[#FFF0D2] sm:to-[88%] pointer-events-none" />
        <div className="scroll-scene-wash absolute inset-0 pointer-events-none" />
      </div>

      {/* Content Container (Side-by-side on all screen sizes) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 grid grid-cols-1 sm:grid-cols-12 items-end sm:items-center py-12 sm:py-20 lg:py-24">
        {/* Left space reserving bottle visibility */}
        <div className="hidden sm:block sm:col-span-6 lg:col-span-7" />

        {/* Right column editorial content */}
        <div className="editorial-reveal col-span-1 sm:col-span-6 lg:col-span-5 flex translate-x-0 flex-col items-start text-left sm:translate-x-4 lg:translate-x-8">
          {/* Eyebrow */}
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#6E1414] font-medium mb-2.5 sm:mb-3">
            OUR FIRST SIGNATURE FRAGRANCE
          </span>

          {/* H2 Title */}
          <h2 className="font-serif text-[#6E1414] text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.03em] font-normal leading-[1.08] mb-4 sm:mb-6">
            AFTER RAIN
          </h2>

          {/* Description */}
          <p className="font-sans text-[#4A3A34] text-xs sm:text-[14px] md:text-[15px] leading-[1.7] sm:leading-[1.75] mb-4 sm:mb-6 max-w-md font-light">
            A woody, aromatic fragrance shaped by oud, leather and musk.
          </p>

          {/* Divider */}
          <div className="w-8 h-[1px] bg-[#6E1414]/40 mb-4 sm:mb-6" />

          <div className="mb-5 flex flex-wrap gap-2">
            {AFTER_RAIN.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`border px-4 py-2 text-left transition-colors ${selectedVariant.id === variant.id ? 'border-[#6E1414] bg-[#6E1414] text-[#FFF0D2]' : 'border-[#6E1414]/25 text-[#6E1414]'}`}
              >
                <span className="block text-[10px] uppercase tracking-[0.18em]">{variant.size}</span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button onClick={onShop} className="btn-luxury-primary inline-flex w-full items-center justify-center px-6 py-4 text-[10px] uppercase tracking-[0.22em]">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
}
