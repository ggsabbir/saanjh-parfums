import React from 'react';

export default function Interlude() {
  return (
    <section
      id="interlude"
      className="relative min-h-[260px] sm:min-h-[300px] md:min-h-[360px] w-full flex items-center overflow-hidden bg-[#2D0606]"
    >
      {/* Dark Crimson Water Ripples Background with Floating Petal */}
      <div className="absolute inset-0 z-0">
        <img
          src="/water-ripples-bg.jpg"
          alt="Dark crimson water ripples with drifting leaf"
          loading="lazy"
          className="w-full h-full object-cover object-[15%_center] brightness-95"
        />
        {/* Deep oxblood subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#220404]/60 via-transparent to-[#220404]/60 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 py-14 sm:py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-14">
        {/* Left/Center Heading */}
        <div className="lg:col-span-8 lg:pl-10 xl:pl-20 text-left">
          <h2 className="font-serif text-[#FFF0D2] text-[26px] sm:text-3xl md:text-4xl lg:text-[50px] leading-[1.16] uppercase tracking-[0.04em] font-light">
            WHAT LINGERS,
            <br />
            AFTER THE RAIN?
          </h2>
        </div>

        {/* Right Column Body Copy */}
        <div className="lg:col-span-4 flex flex-col items-start text-[#FFF0D2]/90 text-left">
          <div className="w-8 h-[1px] bg-[#FFF0D2]/50 mb-3 sm:mb-4" />
          <p className="font-sans text-xs sm:text-sm md:text-[15px] leading-[1.8] font-light tracking-wide text-[#FFF0D2]/90">
            It&apos;s not just the scent.
            <br />
            It&apos;s the quiet, the change,
            <br />
            the feeling that stays.
          </p>
        </div>
      </div>
    </section>
  );
}
