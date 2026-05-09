export default function CTABanner({
  heading = 'Ready to see your property from above?',
  subtext = 'Get a free quote today — we serve Tulsa, Sapulpa, and all surrounding Oklahoma areas.',
}) {
  return (
    <section className="py-16 bg-brand-orange">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold uppercase tracking-wide text-3xl md:text-4xl text-white">
          {heading}
        </h2>
        <p className="mt-4 text-white/80 text-lg">{subtext}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+14232173311"
            className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-charcoal text-white font-display font-semibold uppercase tracking-wider text-sm px-8 py-4 rounded transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call (423) 217-3311
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-orange font-display font-semibold uppercase tracking-wider text-sm px-8 py-4 rounded transition-colors duration-200"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
