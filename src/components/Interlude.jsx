import React from 'react';

export default function Interlude() {
  return (
    <section
      id="emotional-core"
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
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-28 flex items-center justify-center">
        <div className="editorial-reveal text-center">
          <h2 className="font-serif text-[#FFF0D2] text-[26px] sm:text-3xl md:text-4xl lg:text-[50px] leading-[1.16] uppercase tracking-[0.04em] font-light">
            YOU REMEMBER
            <br />
            HOW IT FELT.
          </h2>
        </div>
      </div>
    </section>
  );
}
