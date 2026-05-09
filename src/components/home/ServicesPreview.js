import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  {
    slug: 'aerial-mapping',
    title: 'Aerial Mapping',
    description:
      'High-resolution topographic surveys, construction progress tracking, and land assessment delivered with precision.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    slug: 'roofing-inspections',
    title: 'Roofing Inspections',
    description:
      'Detailed drone roof inspections for insurance claims and damage assessments — no ladders, no risk, full coverage.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    slug: 'thermal-services',
    title: 'Thermal Services',
    description:
      'Thermal imaging to detect heat loss, moisture intrusion, solar panel inefficiencies, and hidden structural issues.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    slug: 'deer-recovery',
    title: 'Deer Recovery',
    description:
      'Efficient post-harvest deer recovery using thermal drone imaging — cover more ground faster, even after dark.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What We Do"
          subtitle="Cutting-edge drone technology tailored to your needs — from precision mapping to after-dark thermal recovery."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group flex flex-col gap-4 p-6 bg-brand-charcoal rounded-xl border border-white/5 hover:border-brand-orange/50 hover:scale-[1.02] transition-all duration-200"
            >
              <div className="text-brand-orange">{s.icon}</div>
              <h3 className="font-display font-bold uppercase tracking-wide text-lg text-white">
                {s.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed flex-1">{s.description}</p>
              <span className="text-brand-orange text-sm font-semibold group-hover:underline">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
