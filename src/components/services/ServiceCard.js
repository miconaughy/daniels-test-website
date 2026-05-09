import Button from '@/components/ui/Button';

export default function ServiceCard({ id, title, description, bullets, imageAlt, flip = false }) {
  return (
    <div id={id} className="scroll-mt-24 py-16 border-b border-white/10 last:border-0">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${
          flip ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } gap-10 lg:gap-16 items-center`}
      >
        {/* Image placeholder */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="aspect-video bg-brand-charcoal border border-brand-orange/20 rounded-xl flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-brand-orange/40">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-display uppercase tracking-widest text-xs">{imageAlt}</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-display font-bold uppercase tracking-wide text-3xl md:text-4xl text-white mb-2">
            {title}
          </h2>
          <div className="w-12 h-1 bg-brand-orange rounded mb-6" />
          <p className="text-white/70 text-lg leading-relaxed mb-6">{description}</p>
          {bullets && (
            <ul className="flex flex-col gap-2 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/60 text-sm">
                  <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          )}
          <Button href={`/contact?service=${encodeURIComponent(title)}`} variant="primary" size="md">
            Request This Service
          </Button>
        </div>
      </div>
    </div>
  );
}
