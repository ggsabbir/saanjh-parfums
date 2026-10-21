import React from 'react';

function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#FFF0D2] text-[#5A3E36] py-10 sm:py-14 px-5 sm:px-8 md:px-12 border-t border-[#6E1414]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-10 text-center md:text-left">
        {/* Left Column: Real Brand Woodmark & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="flex items-center group cursor-pointer"
          >
            <img
              src="/woodmark-clean.png"
              alt="SAANJH PARFUMS"
              className="h-6 sm:h-7 w-auto object-contain hover:opacity-85 transition-opacity"
            />
          </a>
          <p className="font-serif italic text-xl sm:text-2xl text-[#6E1414]/85 mt-2.5 sm:mt-3 font-normal">
            Some feelings stay.
          </p>
        </div>

        {/* Center Column: Navigation & Socials */}
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-[10px] tracking-[0.22em] uppercase text-[#5A3E36]">
            <button
              onClick={() => scrollTo('the-fragrance')}
              className="hover:text-[#6E1414] transition-colors cursor-pointer"
            >
              THE FRAGRANCE
            </button>
            <span className="opacity-30">·</span>
            <button
              onClick={() => scrollTo('our-story')}
              className="hover:text-[#6E1414] transition-colors cursor-pointer"
            >
              OUR STORY
            </button>
            <span className="opacity-30">·</span>
            <button
              onClick={() => scrollTo('early-access')}
              className="hover:text-[#6E1414] transition-colors cursor-pointer"
            >
              EARLY ACCESS
            </button>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[#6E1414]">
            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow SAANJH PARFUMS on Instagram"
              className="w-8 h-8 rounded-full border border-[#6E1414]/20 flex items-center justify-center hover:bg-[#6E1414] hover:text-[#FFF0D2] transition-all duration-300"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* Brand Monogram Icon */}
            <div
              className="w-8 h-8 rounded-full border border-[#6E1414]/20 p-1 flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity"
              title="SAANJH Monogram"
            >
              <img
                src="/logo-clean.png"
                alt="SAANJH Monogram"
                className="w-4 h-4 object-contain brightness-0 filter"
                style={{
                  filter:
                    'invert(15%) sepia(50%) saturate(4000%) hue-rotate(340deg) brightness(85%) contrast(95%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Contact & Legal */}
        <div className="flex flex-col items-center md:items-end text-xs text-[#6B5647] space-y-2">
          {/* Email Link */}
          <a
            href="mailto:hello@saanjhparfums.in"
            className="text-[13px] text-[#4A3A34] hover:text-[#6E1414] transition-colors tracking-wide font-light"
          >
            hello@saanjhparfums.in
          </a>

          {/* Legal Links */}
          <div className="flex gap-4 text-[11px] text-[#7A685D] tracking-wide pt-1">
            <button
              onClick={() =>
                alert(
                  'SAANJH PARFUMS Privacy Policy: We respect your discretion. Your information is never sold or shared.'
                )
              }
              className="hover:text-[#6E1414] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="opacity-40">|</span>
            <button
              onClick={() =>
                alert(
                  'SAANJH PARFUMS Terms of Use: Debut release "AFTER RAIN" is in limited development.'
                )
              }
              className="hover:text-[#6E1414] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Terms of Use
            </button>
          </div>

          {/* Copyright */}
          <p className="text-[10px] text-[#7A685D]/80 tracking-widest pt-1">
            © 2024 SAANJH PARFUMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
