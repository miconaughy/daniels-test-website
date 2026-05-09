'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';

const SERVICE_OPTIONS = [
  'Aerial Mapping',
  'Roofing Inspection',
  'Thermal Services',
  'Deer Recovery',
  'General Inquiry',
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICE_OPTIONS.includes(serviceParam) ? serviceParam : '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  useEffect(() => {
    if (SERVICE_OPTIONS.includes(serviceParam)) {
      setForm((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold uppercase text-xl text-white">Message Sent!</h3>
        <p className="text-white/60">We&apos;ll be in touch shortly. You can also call us at <a href="tel:+14232173311" className="text-brand-orange hover:underline">(423) 217-3311</a>.</p>
        <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }} className="text-brand-orange text-sm hover:underline mt-2">
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors duration-200 text-sm';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-display font-semibold uppercase tracking-wider text-white/50 mb-1.5">
            Name <span className="text-brand-orange">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-display font-semibold uppercase tracking-wider text-white/50 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-display font-semibold uppercase tracking-wider text-white/50 mb-1.5">
          Email <span className="text-brand-orange">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-display font-semibold uppercase tracking-wider text-white/50 mb-1.5">
          Service
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-display font-semibold uppercase tracking-wider text-white/50 mb-1.5">
          Message <span className="text-brand-orange">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project or property..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again or call us directly.</p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'} className="mt-2">
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="py-8 text-white/40 text-sm text-center">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
