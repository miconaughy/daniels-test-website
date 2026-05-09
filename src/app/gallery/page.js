import GalleryGrid from '@/components/gallery/GalleryGrid';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Gallery | Drone Photography & Video — Tulsa & Oklahoma Aerial Imagery',
  description:
    'Browse aerial drone photography and video from RidgeLine Aerial Services covering Tulsa, Sapulpa, Broken Arrow, and surrounding Oklahoma — mapping, inspections, thermal imaging, and deer recovery.',
};

export default function GalleryPage() {
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
            Gallery
          </h1>
          <div className="mt-3 mx-auto w-16 h-1 bg-brand-orange rounded" />
          <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
            A look at what we see from above.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Work"
            subtitle="Drone photography and video from real projects — mapping, inspections, thermal imaging, and recovery operations."
          />
          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-charcoal">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold uppercase tracking-wide text-2xl md:text-3xl text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-white/60 mb-8">
            Let&apos;s talk about what aerial data can do for your property or business.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
