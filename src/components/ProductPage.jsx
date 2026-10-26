import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, LockKeyhole, Menu } from 'lucide-react';
import { AFTER_RAIN, formatPrice } from '../data/product.js';
import RazorpayPaymentButton from './RazorpayPaymentButton.jsx';

const gallery = [
  { src: '/perfume-bottle.png', alt: 'AFTER RAIN fragrance bottle, front view' },
  { src: '/product-showcase-bg.jpg', alt: 'AFTER RAIN fragrance in its atmospheric setting' },
];

export default function ProductPage({ onOpenMenu, onStory, onBack }) {
  const [selectedVariant, setSelectedVariant] = useState(AFTER_RAIN.variants[0]);
  const [activeImage, setActiveImage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const moveGallery = (direction) => setActiveImage((current) => (current + direction + gallery.length) % gallery.length);
  const handleTouchStart = (event) => setTouchStart(event.touches[0].clientX);
  const handleTouchEnd = (event) => {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 40) moveGallery(distance < 0 ? 1 : -1);
    setTouchStart(null);
  };
  return (
    <main className="min-h-screen bg-[#FFF0D2] text-[#4A3A34]">
      <div className="border-b border-[#6E1414]/10 bg-[#6E1414] px-4 py-2 text-center text-[9px] uppercase tracking-[0.2em] text-[#FFF0D2]">A feeling, bottled in fragrance.</div>
      <header className="sticky top-0 z-40 border-b border-[#6E1414]/10 bg-[#FFF0D2]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:px-12">
          <button onClick={onBack} aria-label="Back to SAANJH home" className="flex items-center"><img src="/woodmark-clean.png" alt="SAANJH PARFUMS" className="h-6 w-auto" /></button>
          <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-[#4A3A34] sm:flex"><button onClick={onStory} className="hover:text-[#6E1414]">OUR STORY</button><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#6E1414]">SHOP AFTER RAIN</button></nav>
          <button onClick={onOpenMenu} aria-label="Open menu" className="p-2 text-[#6E1414] sm:hidden"><Menu size={19} strokeWidth={1.5} /></button>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-8 sm:px-8 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pt-14">
        <section aria-label="AFTER RAIN product gallery" className="editorial-reveal">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#E4D5C3]/35" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {gallery.map((image, index) => <button key={image.src} onClick={() => index === activeImage && setIsZoomed(true)} aria-label={`Zoom ${image.alt}`} className={`absolute inset-0 h-full w-full cursor-zoom-in transition-opacity duration-500 ${index === activeImage ? 'opacity-100' : 'pointer-events-none opacity-0'}`}><img src={image.src} alt={image.alt} className={`h-full w-full ${index === 0 ? 'object-contain' : 'object-cover'} image-lift`} /></button>)}
            {activeImage === 0 && <div className="absolute inset-0 bg-[#FFF0D2]/8" />}
            <button onClick={() => moveGallery(-1)} aria-label="Previous product image" className="absolute left-3 top-1/2 -translate-y-1/2 border border-[#FFF0D2]/60 bg-[#220404]/30 p-2 text-[#FFF0D2] backdrop-blur-sm"><ChevronLeft size={18} /></button>
            <button onClick={() => moveGallery(1)} aria-label="Next product image" className="absolute right-3 top-1/2 -translate-y-1/2 border border-[#FFF0D2]/60 bg-[#220404]/30 p-2 text-[#FFF0D2] backdrop-blur-sm"><ChevronRight size={18} /></button>
          </div>
          <div className="mt-3 flex gap-2" aria-label="Choose product image">{gallery.map((image, index) => <button key={image.src} onClick={() => setActiveImage(index)} aria-label={`View product image ${index + 1}`} className={`h-16 w-14 overflow-hidden border ${activeImage === index ? 'border-[#6E1414]' : 'border-[#6E1414]/15'}`}><img src={image.src} alt="" className="h-full w-full object-cover" /></button>)}</div>
          <p className="mt-3 text-center text-[9px] uppercase tracking-[0.18em] text-[#7A685D] sm:hidden">Swipe to explore</p>
        </section>

        <section className="editorial-reveal self-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#6E1414]">THE SIGNATURE FRAGRANCE</p>
          <h1 className="font-serif text-6xl leading-none text-[#6E1414] sm:text-8xl">AFTER RAIN</h1>
          <p className="mt-5 font-serif text-xl italic text-[#6E1414]">Woody. Aromatic. Unforgettable.</p>
          <p className="mt-5 max-w-lg text-sm leading-[1.8] text-[#4A3A34]">A fragrance shaped by the freshness of bergamot, the depth of oud, and the warmth of leather and musk.</p>
          <div className="my-8 h-px w-10 bg-[#6E1414]/45" />
          <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#7A685D]">CHOOSE YOUR BOTTLE</p>
          <div className="grid grid-cols-2 gap-3">{AFTER_RAIN.variants.map((variant) => <button key={variant.id} onClick={() => setSelectedVariant(variant)} className={`border p-4 text-left transition-colors ${selectedVariant.id === variant.id ? 'border-[#6E1414] bg-[#6E1414] text-[#FFF0D2]' : 'border-[#6E1414]/25 text-[#6E1414]'}`}><span className="block text-[10px] uppercase tracking-[0.18em]">{variant.size}</span><span className="mt-1 block font-serif text-2xl">{formatPrice(variant.price)}</span></button>)}</div>
          <div className="mt-4"><RazorpayPaymentButton /></div>
          <div className="mt-5 flex items-center gap-2 text-[11px] text-[#7A685D]"><LockKeyhole size={13} /> Secure checkout · Delivery across India</div>
          <div className="mt-12 border-t border-[#6E1414]/20 pt-7"><p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#6E1414]">THE STORY</p><p className="font-serif text-xl italic text-[#6E1414]">For the moments that stay with you.</p><p className="mt-4 text-sm leading-[1.8] text-[#5A3E36]">There is a certain stillness after the rain. The air changes, the world grows quieter, and some feelings stay long after the moment has passed.</p><p className="mt-4 text-sm leading-[1.8] text-[#5A3E36]">AFTER RAIN is our interpretation of that feeling.</p></div>
          <div className="mt-10 border-t border-[#6E1414]/20 pt-7"><p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#6E1414]">THE SCENT</p><div className="grid gap-4 text-xs leading-relaxed text-[#5A3A34] sm:grid-cols-3">{Object.entries(AFTER_RAIN.notes).map(([layer, notes]) => <div key={layer}><p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-[#6E1414]">{layer === 'top' ? 'Top notes' : layer === 'heart' ? 'Heart notes' : 'Base notes'}</p><p>{notes.join(' · ')}</p></div>)}</div></div>
        </section>
      </div>
      {isZoomed && <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#220404]/90 p-5" role="dialog" aria-modal="true" aria-label="Expanded product image" onClick={() => setIsZoomed(false)}><img src={gallery[activeImage].src} alt={gallery[activeImage].alt} className="max-h-[90vh] max-w-[92vw] object-contain" /><button onClick={() => setIsZoomed(false)} aria-label="Close image" className="absolute right-5 top-5 p-2 text-[#FFF0D2]"><X size={22} /></button><span className="absolute bottom-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#FFF0D2]/70"><ZoomIn size={13} /> Click to close</span></div>}
    </main>
  );
}
