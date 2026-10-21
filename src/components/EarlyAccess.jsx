import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function EarlyAccess() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false,
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formEntries = new FormData(formEl);
    const name = (formEntries.get('name') || formData.name || '').toString().trim();
    const email = (formEntries.get('email') || formData.email || '').toString().trim();
    const phone = (formEntries.get('phone') || formData.phone || '').toString().trim();
    const consent = formEntries.get('consent') !== null || formData.consent;

    if (!name) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!consent) {
      setErrorMsg('Please confirm your consent to receive updates.');
      return;
    }

    setSubmittedEmail(email);
    setStatus('loading');

    setTimeout(() => {
      try {
        const payload = {
          name,
          email,
          phone,
          submittedAt: new Date().toISOString(),
        };
        const existing = JSON.parse(localStorage.getItem('saanjh_early_access_list') || '[]');
        existing.push(payload);
        localStorage.setItem('saanjh_early_access_list', JSON.stringify(existing));
        localStorage.setItem('saanjh_early_access', JSON.stringify(payload));
      } catch {
        // localStorage fallback
      }
      setStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', consent: false });
    setStatus('idle');
    setErrorMsg('');
  };

  return (
    <section
      id="early-access"
      className="relative min-h-[600px] w-full flex items-center overflow-hidden bg-[#3A0808]"
    >
      {/* Dark Crimson Textured Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/early-access-bg.jpg"
          alt="Dark crimson velvety oxblood background"
          loading="lazy"
          className="w-full h-full object-cover object-center brightness-95"
        />
        <div className="absolute inset-0 bg-[#2A0505]/40 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
        {/* Left Column Editorial Content */}
        <div className="lg:col-span-6 text-[#FFF0D2] text-left">
          {/* Eyebrow */}
          <span className="block font-sans text-[11px] tracking-[0.24em] uppercase text-[#FFF0D2]/80 font-medium mb-4">
            EARLY ACCESS
          </span>

          {/* H2 Heading */}
          <h2 className="font-serif text-[#FFF0D2] text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] uppercase tracking-[0.03em] font-light mb-6">
            BE THERE
            <br />
            BEFORE THE REVEAL.
          </h2>

          {/* Body Text */}
          <p className="font-sans text-[#FFF0D2]/90 text-[15px] leading-[1.75] max-w-md mb-6 font-light">
            Be among the first to discover AFTER RAIN.
            <br />
            Join the SAANJH early-access list for launch updates and first access when we&apos;re
            ready.
          </p>

          {/* Divider Line */}
          <div className="w-8 h-[1px] bg-[#FFF0D2]/40 mb-6" />

          {/* Italic Footnote */}
          <p className="font-serif italic text-lg sm:text-xl text-[#FFF0D2]/85 font-normal">
            No payment. Just first access to what&apos;s coming.
          </p>
        </div>

        {/* Right Column Form Container */}
        <div className="lg:col-span-6 max-w-lg w-full mx-auto lg:mx-0">
          {status === 'success' ? (
            /* Luxury Confirmation State */
            <div className="bg-[#240303]/85 border border-[#FFF0D2]/25 p-8 sm:p-10 rounded-[2px] text-center text-[#FFF0D2] shadow-2xl backdrop-blur-md transition-all duration-700">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-[#FFF0D2]/40 flex items-center justify-center text-[#FFF0D2]">
                <Check className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-[0.05em] font-normal mb-3 text-[#FFF0D2]">
                You&apos;re on the list.
              </h3>
              <p className="font-serif italic text-xl text-[#FFF0D2]/90 mb-6">
                We will whisper when AFTER RAIN is ready.
              </p>
              <p className="font-sans text-xs tracking-wider text-[#FFF0D2]/75 mb-8 max-w-xs mx-auto">
                A confirmation has been recorded for{' '}
                <span className="text-[#FFF0D2] font-medium">{submittedEmail}</span>.
              </p>
              <button
                onClick={handleReset}
                className="font-sans text-[10.5px] tracking-[0.22em] uppercase text-[#FFF0D2]/80 hover:text-[#FFF0D2] border-b border-[#FFF0D2]/40 hover:border-[#FFF0D2] pb-1 transition-colors cursor-pointer"
              >
                Join with another email
              </button>
            </div>
          ) : (
            /* Early Access Form */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-[#240303]/70 sm:bg-transparent sm:border-0 border border-[#FFF0D2]/15 p-6 sm:p-0 rounded-[2px] space-y-4 text-left"
            >
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name*"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="saanjh-input w-full bg-[#2A0505]/70 border border-[#FFF0D2]/25 px-4 py-3.5 text-sm text-[#FFF0D2] placeholder-[#FFF0D2]/60 focus:outline-none focus:border-[#FFF0D2] transition-colors duration-300 rounded-[2px]"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email address*"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="saanjh-input w-full bg-[#2A0505]/70 border border-[#FFF0D2]/25 px-4 py-3.5 text-sm text-[#FFF0D2] placeholder-[#FFF0D2]/60 focus:outline-none focus:border-[#FFF0D2] transition-colors duration-300 rounded-[2px]"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="sr-only">
                  WhatsApp number (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="WhatsApp number (optional)"
                  autoComplete="tel"
                  inputMode="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="saanjh-input w-full bg-[#2A0505]/70 border border-[#FFF0D2]/25 px-4 py-3.5 text-sm text-[#FFF0D2] placeholder-[#FFF0D2]/60 focus:outline-none focus:border-[#FFF0D2] transition-colors duration-300 rounded-[2px]"
                />
              </div>

              {/* Checkbox Row */}
              <div className="flex items-start gap-3 pt-1 pb-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-4 h-4 mt-0.5 accent-[#FFF0D2] bg-[#2A0505] border border-[#FFF0D2]/40 rounded-[2px] cursor-pointer"
                />
                <label
                  htmlFor="consent"
                  className="text-xs text-[#FFF0D2]/85 leading-relaxed cursor-pointer select-none font-light"
                >
                  I agree to receive launch updates from SAANJH PARFUMS via email and WhatsApp.
                </label>
              </div>

              {/* Error feedback if needed */}
              {errorMsg && (
                <p className="text-xs text-[#FFAEAE] tracking-wide pt-1 animate-fadeIn">
                  {errorMsg}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-luxury-cream py-4 text-[#4A0E0E] font-medium text-[11px] tracking-[0.24em] uppercase transition-all duration-300 rounded-[2px] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-[#4A0E0E] border-t-transparent rounded-full animate-spin" />
                    <span>JOINING...</span>
                  </>
                ) : (
                  <span>JOIN EARLY ACCESS</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
