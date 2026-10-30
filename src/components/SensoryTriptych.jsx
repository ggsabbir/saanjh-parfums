import React from 'react';

const cards = [
  {
    num: '01',
    line1: 'THE AIR',
    line2: 'CHANGES.',
    img: '/card-01-leaves.jpg',
    alt: 'Wet autumn leaves with dewdrops after rain',
  },
  {
    num: '02',
    line1: 'THE WORLD',
    line2: 'GROWS QUIETER.',
    img: '/card-02-window-rain.jpg',
    alt: 'Raindrops running down a warm window pane',
  },
  {
    num: '03',
    line1: 'SOME THINGS',
    line2: 'STAY.',
    img: '/card-03-velvet-petal.jpg',
    alt: 'Deep velvet crimson petal with moisture',
  },
];

export default function SensoryTriptych() {
  return (
    <section className="scroll-scene w-full bg-[#220404] py-[1px]">
      {/* Responsive layout: stacked full-width cards on mobile, 3-column split on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#220404]">
        {cards.map((card) => (
          <article
            key={card.num}
            tabIndex={0}
            className="group relative h-[320px] sm:h-[380px] md:h-[460px] lg:h-[540px] w-full overflow-hidden bg-[#180303] cursor-pointer focus:outline-none"
            aria-label={`${card.num} ${card.line1} ${card.line2}`}
          >
            {/* Background Imagery with smooth zoom and brightness on hover */}
            <img
              src={card.img}
              alt={card.alt}
              className="scroll-scene-image absolute inset-0 w-full h-full object-cover object-center image-lift transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:brightness-105 group-focus:scale-105"
            />

            {/* Dark gradient overlay for text clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-500 group-hover:from-black/90 pointer-events-none" />

            {/* Content: Bottom Left */}
            <div className="absolute bottom-4 left-3 sm:bottom-7 sm:left-6 md:bottom-10 md:left-10 z-10 text-[#FFF0D2] text-left">
              {/* Card Number */}
              <span className="block font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.18em] font-light mb-1.5 sm:mb-2.5 opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                {card.num}
              </span>

              {/* Expanding Horizontal Rule on Hover */}
              <div className="w-4 sm:w-6 h-[1px] bg-[#FFF0D2]/50 mb-2 sm:mb-3.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-8 sm:group-hover:w-12 group-hover:bg-[#FFF0D2]" />

              {/* Title in Cormorant Garamond */}
              <h3 className="font-serif text-base sm:text-base md:text-2xl lg:text-[28px] leading-[1.15] sm:leading-[1.2] tracking-[0.05em] uppercase font-normal text-[#FFF0D2]">
                {card.line1}
                <br />
                {card.line2}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
