import React from 'react';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { formatPrice } from '../data/product.js';
import RazorpayPaymentButton from './RazorpayPaymentButton.jsx';

export default function CartDrawer({ cart, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-end" role="dialog" aria-modal="true" aria-label="Your cart">
      <button className="absolute inset-0 bg-[#220404]/55 backdrop-blur-sm" onClick={onClose} aria-label="Close cart" />
      <aside className="relative z-10 flex h-full w-full max-w-md flex-col border-l border-[#6E1414]/15 bg-[#FFF0D2] p-5 shadow-2xl sm:p-8">
        <div className="flex items-center justify-between border-b border-[#6E1414]/15 pb-5">
          <div className="flex items-center gap-3 text-[#6E1414]"><ShoppingBag size={17} strokeWidth={1.5} /><h2 className="font-serif text-2xl">Your selection</h2></div>
          <button onClick={onClose} aria-label="Close cart" className="p-2 text-[#6E1414] hover:opacity-60"><X size={20} strokeWidth={1.5} /></button>
        </div>
        <div className="flex-1 overflow-y-auto py-6">
          {cart.items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-[#7A685D]"><p className="font-serif text-2xl text-[#6E1414]">Nothing chosen yet.</p><p className="mt-2 text-xs tracking-wide">AFTER RAIN is waiting to be felt.</p></div>
          ) : cart.items.map((item) => (
            <div key={item.variantId} className="flex gap-4 border-b border-[#6E1414]/10 py-4">
              <div className="flex h-20 w-16 items-center justify-center bg-[#E4D5C3]/45"><img src="/perfume-bottle.png" alt="AFTER RAIN bottle" className="max-h-16 w-full object-contain" /></div>
              <div className="flex-1"><div className="flex justify-between gap-3"><div><p className="font-serif text-xl text-[#6E1414]">AFTER RAIN</p><p className="text-[10px] uppercase tracking-[0.18em] text-[#7A685D]">{item.size}</p></div><p className="text-sm text-[#4A3A34]">{formatPrice(item.price * item.quantity)}</p></div><div className="mt-4 flex items-center gap-3 text-[#6E1414]"><button onClick={() => cart.updateQuantity(item.variantId, item.quantity - 1)} aria-label={`Remove one ${item.size}`} className="border border-[#6E1414]/25 p-1"><Minus size={12} /></button><span className="min-w-4 text-center text-xs">{item.quantity}</span><button onClick={() => cart.updateQuantity(item.variantId, item.quantity + 1)} aria-label={`Add one ${item.size}`} className="border border-[#6E1414]/25 p-1"><Plus size={12} /></button></div></div>
            </div>
          ))}
        </div>
        <div className="border-t border-[#6E1414]/15 pt-5"><div className="mb-2 flex justify-between text-sm text-[#4A3A34]"><span>Subtotal</span><span>{formatPrice(cart.subtotal)}</span></div><p className="mb-5 text-[11px] leading-relaxed text-[#7A685D]">Your details and payment are collected securely by Razorpay.</p><div className={`flex min-h-12 items-center justify-center border border-[#6E1414] px-4 ${!cart.items.length ? 'pointer-events-none opacity-40' : ''}`}><RazorpayPaymentButton /></div></div>
      </aside>
    </div>
  );
}