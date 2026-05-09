import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact | Get a Free Drone Services Quote — Tulsa, OK',
  description:
    'Contact RidgeLine Aerial Services for a free quote on aerial mapping, roofing inspections, thermal services, or deer recovery in the Tulsa, Oklahoma area.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-aerial.jpg')" }}
        />
        <div className="absolute inset-0 bg-brand-dark/75" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display font-bold uppercase tracking-tight text-4xl md:text-6xl text-white">
            Get in Touch
          </h1>
          <div className="mt-3 mx-auto w-16 h-1 bg-brand-orange rounded" />
          <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
            Ready to fly? Fill out the form or give us a call — we typically respond the same day.
          </p>
        </div>
      </section>

      {/* Two-column */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — contact details */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-display font-bold uppercase tracking-wide text-2xl text-white mb-2">
                  Contact Information
                </h2>
                <div className="w-12 h-1 bg-brand-orange rounded" />
              </div>

              <div className="flex flex-col gap-6">
                <a href="tel:+14232173311" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                    <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-display font-semibold uppercase tracking-widest text-white/40 mb-0.5">Phone</p>
                    <p className="text-white group-hover:text-brand-orange transition-colors font-medium">(423) 217-3311</p>
                  </div>
                </a>

                <a href="mailto:danielperry@ridgelineaerialllc.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                    <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-display font-semibold uppercase tracking-widest text-white/40 mb-0.5">Email</p>
                    <p className="text-white group-hover:text-brand-orange transition-colors font-medium break-all">danielperry@ridgelineaerialllc.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-display font-semibold uppercase tracking-widest text-white/40 mb-0.5">Hours</p>
                    <p className="text-white font-medium">Monday – Sunday</p>
                    <p className="text-white/60 text-sm">9:00 AM – 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-display font-semibold uppercase tracking-widest text-white/40 mb-0.5">Location</p>
                    <p className="text-white font-medium">Sapulpa, OK 74066</p>
                    <p className="text-white/60 text-sm">Serving Tulsa & Surrounding Oklahoma</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-xs font-display font-semibold uppercase tracking-widest text-white/40 mb-3">Follow Us</p>
                <div className="flex gap-4">
                  <a href="https://facebook.com/RidgeLineAerial" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/50 hover:text-brand-orange transition-colors text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                    Facebook
                  </a>
                  <a href="https://linkedin.com/company/ridgeline-aerial-solutions-llc" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/50 hover:text-brand-orange transition-colors text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-brand-charcoal rounded-2xl p-6 md:p-8 border border-white/5">
              <h2 className="font-display font-bold uppercase tracking-wide text-xl text-white mb-1">
                Send Us a Message
              </h2>
              <p className="text-white/40 text-sm mb-6">We&apos;ll respond within one business day.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
