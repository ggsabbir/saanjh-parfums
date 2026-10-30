import React from 'react';

const notes = [
  {
    number: '01',
    label: 'TOP NOTES',
    items: ['Sicilian Bergamot', 'Pink Pepper', 'Davana'],
    description: 'A sharp, lively citrus burst with a fruity, herbal and spicy twist.',
  },
  {
    number: '02',
    label: 'HEART NOTES',
    items: ['Agarwood (Oud)', 'White Amber', 'African Rosemary'],
    description: 'A rich, resinous, and dark profile where warmth meets smoke.',
  },
  {
    number: '03',
    label: 'BASE NOTES',
    items: ['Leather', 'Musk', 'Haitian Vetiver'],
    description: 'An earthy, smooth trail that lingers extensively.',
  },
];

export default function FragranceStory() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#1a0202] text-[#FFF0D2]"
      aria-labelledby="fragrance-story-title"
    >
      <img
        src="/Moody Burgundy Smoke and Velvet Waves.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#180101]/35" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[900px] max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 sm:px-10 lg:min-h-[680px] lg:grid-cols-[0.9fr_1.2fr_1fr] lg:gap-4 lg:px-12 lg:py-12">
        <div className="z-10 mx-auto max-w-md text-center sm:text-left lg:pr-8">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#D8C39C]">OUR SIGNATURE FRAGRANCE</p>
          <h2 id="fragrance-story-title" className="font-serif text-5xl uppercase leading-none tracking-[0.08em] text-[#FFF0D2] sm:text-6xl">
            AFTER RAIN
          </h2>
          <div className="my-7 h-px w-24 bg-[#D8C39C]/75" />
          <p className="max-w-sm font-serif text-lg italic leading-[1.35] text-[#FFF0D2]/90 sm:text-xl">
            A woody, aromatic oud fragrance with leather and sweet fruity touches. Crafted for those who carry more than just memories — they carry moments.
          </p>
          <div className="mt-10 inline-flex border border-[#D8C39C]/70 px-5 py-3 text-left text-[9px] uppercase tracking-[0.24em] text-[#D8C39C]">
            A FEELING, BOTTLED IN FRAGRANCE. <span className="ml-3">→</span>
          </div>
        </div>

        <div className="relative order-first flex min-h-[280px] items-center justify-center lg:order-none lg:min-h-[520px]">
          <img
            src="/After Rain_ A Saanjh Fragrance Story - Edited.png"
            alt="Citrus, oud, amber, leather and herbs representing the notes of AFTER RAIN"
            className="h-auto w-full max-w-[340px] object-contain mix-blend-screen sm:max-w-[520px] lg:max-w-[900px] lg:scale-[2.7]"
          />
        </div>

        <div className="z-10 flex flex-col gap-9 lg:pl-8">
          {notes.map((note) => (
            <article key={note.number} className="grid grid-cols-[auto_1fr] gap-4 sm:grid-cols-[auto_1fr_1fr] sm:gap-5">
              <div className="border-r border-[#D8C39C]/55 pr-4 text-[10px] tracking-[0.28em] text-[#D8C39C] sm:pr-5">
                {note.number}
              </div>
              <div>
                <h3 className="mb-3 text-[10px] tracking-[0.28em] text-[#D8C39C]">{note.label}</h3>
                <p className="font-serif text-base leading-[1.45] text-[#FFF0D2] sm:text-lg">
                  {note.items.map((item) => <span className="block" key={item}>{item}</span>)}
                </p>
              </div>
              <p className="col-start-2 mt-1 border-l border-[#D8C39C]/55 pl-4 font-serif text-sm italic leading-[1.45] text-[#FFF0D2]/75 sm:col-start-3 sm:mt-6 sm:pl-5">
                {note.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
