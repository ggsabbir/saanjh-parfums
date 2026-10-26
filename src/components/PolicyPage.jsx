import React from 'react';
import { ArrowLeft } from 'lucide-react';

const content = {
  shipping: {
    eyebrow: 'Shipping & delivery',
    title: 'A considered delivery.',
    paragraphs: [
      'Orders are prepared for delivery across India. The applicable delivery charge and estimated arrival date are shown before payment once the shipping service confirms the destination.',
      'For order support, contact hello@saanjhparfums.in with your order reference. We do not publish an unverified delivery promise or shipping threshold here.',
    ],
  },
  returns: {
    eyebrow: 'Returns & cancellations',
    title: 'Care after purchase.',
    paragraphs: [
      'For cancellation, return, or refund support, contact hello@saanjhparfums.in with your order reference and the reason for your request.',
      'Requests are reviewed against the final order terms presented at checkout. Refunds, where approved, are issued through the original payment method after the order is verified.',
    ],
  },
  privacy: {
    eyebrow: 'Privacy policy',
    title: 'Your details, handled carefully.',
    paragraphs: [
      'SAANJH PARFUMS uses the information you provide to process orders, coordinate delivery, respond to support requests, and send updates you have asked to receive.',
      'We do not sell your personal information. Payment details are handled by the configured payment partner and are not stored by this website.',
    ],
  },
  terms: {
    eyebrow: 'Terms & conditions',
    title: 'The terms of a considered purchase.',
    paragraphs: [
      'Product prices, availability, delivery charges, taxes, and the final payable amount are shown at checkout before payment. Orders are accepted only after payment authorization and server-side confirmation.',
      'For questions about an order or these terms, contact hello@saanjhparfums.in. The final terms presented with an order govern that purchase.',
    ],
  },
};

export default function PolicyPage({ type, onBack }) {
  const page = content[type] || content.shipping;

  return (
    <main className="min-h-screen bg-[#FFF0D2] px-5 pb-24 pt-32 text-[#4A3A34] sm:px-10 sm:pt-40 lg:px-20">
      <div className="mx-auto max-w-3xl">
        <button onClick={onBack} className="mb-14 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#6E1414]"><ArrowLeft size={15} /> Back to SAANJH</button>
        <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-[#6E1414]">{page.eyebrow}</p>
        <h1 className="mb-10 max-w-xl font-serif text-5xl leading-[1.05] text-[#6E1414] sm:text-7xl">{page.title}</h1>
        <div className="max-w-2xl space-y-6 border-t border-[#6E1414]/20 pt-8 text-sm leading-[1.9] text-[#5A3E36]">
          {page.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </main>
  );
}
