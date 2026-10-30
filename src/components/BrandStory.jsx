import React from 'react';

export default function BrandStory() {
  return (
    <section
      id="our-story"
      className="scroll-scene relative min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] w-full flex items-center overflow-hidden bg-[#FFF0D2] py-16 sm:py-20 lg:py-24"
    >
      {/* Full-bleed story image with a warm light wash behind the copy */}
      <div
        className="scroll-scene-image absolute inset-0 z-0 bg-cover bg-[78%_center] bg-no-repeat"
        style={{ backgroundImage: "url('/our-story-card.jpg')" }}
        role="img"
        aria-label="SAANJH PARFUMS cotton card on sunlit sandstone with red blossoms"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF0D2]/88 via-[#FFF0D2]/62 via-45% to-[#FFF0D2]/5 to-75% pointer-events-none" />
        <div className="absolute inset-0 bg-[#FFF0D2]/5 pointer-events-none lg:hidden" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-16">
        {/* Left Column Editorial Content */}
        <div className="editorial-reveal lg:col-span-6 flex flex-col items-start text-left">
          {/* Eyebrow */}
          <span className="font-sans text-[10.5px] sm:text-[11px] tracking-[0.24em] uppercase text-[#6E1414] font-medium mb-3 block">
            OUR STORY
          </span>

          {/* H2 Heading */}
          <h2 className="font-serif text-[#6E1414] text-3xl sm:text-4xl md:text-5xl leading-[1.12] font-normal mb-5 sm:mb-6">
            We started
            <br />
            with a feeling.
          </h2>

          <p className="font-sans text-[#4A3A34] text-xs sm:text-sm md:text-[14.5px] leading-[1.75] mb-6 sm:mb-7 font-light max-w-lg">
            We began with one thought: what if a fragrance could mean something beyond how it smells?
          </p>

          {/* Divider Line */}
          <div className="w-8 h-[1px] bg-[#6E1414]/40" />
        </div>

        {/* Right space preserving cotton card and red flowers in the desktop background */}
        <div className="hidden lg:block lg:col-span-6" />
      </div>
    </section>
  );
}
