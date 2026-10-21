import React from 'react';

export default function BrandStory() {
  return (
    <section
      id="our-story"
      className="relative min-h-[540px] lg:min-h-[600px] w-full flex items-center overflow-hidden bg-[#F2E9DC]"
    >
      {/* Background with our-story-card (cotton card on stone with red blossoms) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/our-story-card.jpg"
          alt="SAANJH PARFUMS cotton card on sunlit sandstone with red blossoms"
          loading="lazy"
          className="w-full h-full object-cover object-[72%_center]"
        />
        {/* Soft seamless cream blend keeping left text ultra-readable while preserving right card visual */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2E9DC] from-30% via-[#F2E9DC]/70 via-50% to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
        {/* Left Column Text Content */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left">
          {/* Eyebrow */}
          <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-[#6E1414] font-medium mb-3">
            OUR STORY
          </span>

          {/* H2 Heading */}
          <h2 className="font-serif text-[#6E1414] text-4xl sm:text-5xl leading-[1.12] font-normal mb-6">
            A feeling, bottled
            <br />
            in fragrance.
          </h2>

          {/* Paragraph 1 */}
          <p className="font-sans text-[#4A3A34] text-[14.5px] leading-[1.75] mb-5 font-light max-w-lg">
            SAANJH begins with a simple thought: fragrance is more than what you wear. It&apos;s
            what you remember, what you leave behind, and what returns long after a moment has
            passed.
          </p>

          {/* Paragraph 2 */}
          <p className="font-sans text-[#4A3A34] text-[14.5px] leading-[1.75] mb-7 font-light max-w-lg">
            We&apos;re creating fragrances around the feelings that are difficult to explain, but
            impossible to forget.
          </p>

          {/* Divider Line */}
          <div className="w-8 h-[1px] bg-[#6E1414]/40" />
        </div>

        {/* Right column empty to preserve view of our-story-card */}
        <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />
      </div>
    </section>
  );
}
