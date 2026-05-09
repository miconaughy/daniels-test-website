import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/hero-aerial.jpg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/60 to-brand-dark/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        <Image
          src="https://lirp.cdn-website.com/d13e17ca/dms3rep/multi/opt/FullLogo+2-1920w.png"
          alt="RidgeLine Aerial Services"
          width={200}
          height={200}
          className="w-40 md:w-52 mb-8 drop-shadow-2xl"
          priority
        />

        <h1 className="font-display font-bold uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-4">
          See More.{' '}
          <span className="text-gradient-brand">Know More.</span>{' '}
          Act Faster.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
          Professional drone services across Tulsa and surrounding Oklahoma — delivering
          precision aerial data for inspections, mapping, thermal analysis, and more.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Get a Free Quote
          </Button>
          <Button href="/services" variant="outline" size="lg">
            View Our Services
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
