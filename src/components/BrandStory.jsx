import React from 'react';

export default function BrandStory() {
  return (
    <section
      id="our-story"
      className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] w-full flex items-center overflow-hidden bg-[#FFF0D2] py-16 sm:py-20 lg:py-24"
    >
      {/* Sunlit Sandstone, Cotton Card & Flowers Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/our-story-card.jpg"
          alt="SAANJH PARFUMS cotton card on sunlit sandstone with red blossoms"
          className="w-full h-full object-cover object-[72%_center] lg:object-[65%_center]"
        />
        {/* Soft gradient ensuring text legibility on left while stone texture and card show on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF0D2]/90 via-[#FFF0D2]/45 to-transparent pointer-events-none max-w-2xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 grid grid-cols-12 items-center">
        {/* Left Column Content */}
        <div className="col-span-8 sm:col-span-7 lg:col-span-6 flex flex-col items-start text-left">
          {/* Eyebrow */}
          <span className="font-sans text-[10.5px] sm:text-[11px] tracking-[0.24em] uppercase text-[#6E1414] font-medium mb-3 block">
            OUR STORY
          </span>

          {/* H2 Heading */}
          <h2 className="font-serif text-[#6E1414] text-3xl sm:text-4xl md:text-5xl leading-[1.12] font-normal mb-5 sm:mb-6">
            A feeling, bottled
            <br />
            in fragrance.
          </h2>

          {/* Paragraph 1 */}
          <p className="font-sans text-[#4A3A34] text-xs sm:text-sm md:text-[14.5px] leading-[1.75] mb-4 sm:mb-5 font-light max-w-lg">
            SAANJH begins with a simple thought: fragrance is more than what you wear. It&apos;s
            what you remember, what you leave behind, and what returns long after a moment has
            passed.
          </p>

          {/* Paragraph 2 */}
          <p className="font-sans text-[#4A3A34] text-xs sm:text-sm md:text-[14.5px] leading-[1.75] mb-6 sm:mb-7 font-light max-w-lg">
            We&apos;re creating fragrances around the feelings that are difficult to explain, but
            impossible to forget.
          </p>

          {/* Divider Line */}
          <div className="w-8 h-[1px] bg-[#6E1414]/40" />
        </div>

        {/* Right space preserving cotton card and red flowers in the background */}
        <div className="col-span-4 sm:col-span-5 lg:col-span-6" />
      </div>
    </section>
  );
}
