import Image from 'next/image';
import CTABanner from '@/components/home/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'About Us | Veteran-Owned Drone Company — Tulsa & Sapulpa, OK',
  description:
    'RidgeLine Aerial Services is a veteran-owned, FAA Part 107 certified drone company based in Sapulpa, OK. Proudly serving Tulsa, Broken Arrow, Owasso, and surrounding Oklahoma communities.',
};

const credentials = [
  {
    title: 'FAA Part 107 Certified',
    description: 'Fully licensed commercial drone pilot operating in compliance with all FAA regulations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Fully Insured',
    description: 'Comprehensive liability coverage on every flight — protecting you, your property, and our team.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Local & Family Owned',
    description: 'Based in Sapulpa, OK — we\'re your neighbors, committed to the communities we serve.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Veteran Owned Business',
    description: 'Founded and operated by a U.S. military veteran — bringing discipline, precision, and mission-first values to every flight.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const areas = [
  'Tulsa', 'Sapulpa', 'Broken Arrow', 'Jenks', 'Owasso',
  'Bixby', 'Sand Springs', 'Claremore', 'Skiatook', 'Glenpool',
  'Mounds', 'Bristow', 'Okmulgee', 'Wagoner', 'Coweta',
];

export default function AboutPage() {
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
            About Us
          </h1>
          <div className="mt-3 mx-auto w-16 h-1 bg-brand-orange rounded" />
        </div>
      </section>

      {/* Mission + Logo */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Mission" centered={false} />
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                At RidgeLine Aerial Services, we believe better data leads to better decisions.
                We leverage cutting-edge drone technology to deliver actionable aerial insights
                tailored to the unique needs of agriculture, landowners, construction, insurance,
                and commercial clients across Oklahoma.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Whether you need a detailed roof inspection, a topographic survey, thermal
                imaging, or help recovering game after a successful hunt — our commitment to
                quality and precision is always at the forefront of every flight.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                As a veteran-owned business, we operate with the same precision and
                accountability that comes from military service — you can count on us to
                show up prepared, execute professionally, and deliver results.
              </p>
              <p className="mt-6 text-brand-orange font-display font-semibold uppercase tracking-widest text-sm">
                See More. Know More. Act Faster.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://lirp.cdn-website.com/d13e17ca/dms3rep/multi/opt/FullLogo+2-1920w.png"
                alt="RidgeLine Aerial Services Logo"
                width={360}
                height={360}
                className="w-64 md:w-80 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Choose RidgeLine" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((c) => (
              <div key={c.title} className="flex flex-col items-center text-center gap-4 p-6 bg-brand-dark rounded-xl border border-white/5">
                <div className="text-brand-orange">{c.icon}</div>
                <h3 className="font-display font-bold uppercase tracking-wide text-lg text-white">{c.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Service Area"
            subtitle="Proudly serving Tulsa and the surrounding communities across eastern Oklahoma."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="bg-brand-charcoal border border-brand-orange/20 text-white/70 font-display font-semibold uppercase tracking-wider text-xs px-4 py-2 rounded-full"
              >
                {area}
              </span>
            ))}
            <span className="bg-brand-orange/10 border border-brand-orange/40 text-brand-orange font-display font-semibold uppercase tracking-wider text-xs px-4 py-2 rounded-full">
              & More
            </span>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
