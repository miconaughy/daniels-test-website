import ServiceCard from '@/components/services/ServiceCard';
import CTABanner from '@/components/home/CTABanner';

export const metadata = {
  title: 'Drone Services Tulsa OK | Aerial Mapping, Roofing Inspections, Thermal & Deer Recovery',
  description:
    'Professional drone services in Tulsa and Sapulpa, Oklahoma: aerial mapping, roofing inspections, thermal imaging, and deer recovery. FAA Part 107 certified, veteran-owned. Serving Broken Arrow, Owasso, Jenks & beyond.',
};

const services = [
  {
    id: 'aerial-mapping',
    title: 'Aerial Mapping',
    description:
      'From topographic surveys to construction progress documentation, our aerial mapping services give you the precise, data-driven overhead view you need. We generate detailed orthomosaic maps, 3D point clouds, and elevation models tailored to agriculture, land development, and commercial projects.',
    bullets: [
      'High-resolution topographic surveys',
      'Construction progress documentation',
      'Land boundary and acreage assessment',
      'Agricultural field analysis',
      'GIS-compatible deliverables',
    ],
    imageAlt: 'Aerial Mapping',
    flip: false,
  },
  {
    id: 'roofing-inspections',
    title: 'Roofing Inspections',
    description:
      'Skip the ladders and the liability. Our drone roof inspections deliver comprehensive, high-resolution imagery of every square foot of your roof — ideal for insurance claims, pre-purchase assessments, storm damage documentation, and routine maintenance checks.',
    bullets: [
      'Full-coverage roof imagery — no blind spots',
      'Insurance claim documentation',
      'Storm and hail damage assessment',
      'Pre-purchase and pre-listing inspections',
      'Fast turnaround on detailed reports',
    ],
    imageAlt: 'Roofing Inspection',
    flip: true,
  },
  {
    id: 'thermal-services',
    title: 'Thermal Services',
    description:
      'Our thermal drone imaging uncovers what the naked eye can\'t see. Detect hidden moisture intrusion, heat loss through insulation gaps, electrical hot spots, solar panel inefficiencies, and HVAC leaks — quickly and non-invasively.',
    bullets: [
      'Building envelope heat loss detection',
      'Moisture and water intrusion mapping',
      'Solar panel performance analysis',
      'Electrical and mechanical hot spot identification',
      'Energy audit support for commercial properties',
    ],
    imageAlt: 'Thermal Services',
    flip: false,
  },
  {
    id: 'deer-recovery',
    title: 'Deer Recovery',
    description:
      'When a successful harvest ends with a difficult recovery, RidgeLine Aerial is there. Using thermal drone imaging, we scan large areas quickly and efficiently — even in darkness — to locate downed deer and get you back to the truck faster.',
    bullets: [
      'Thermal heat signature detection after dark',
      'Covers large acreage in a fraction of the time',
      'Systematic grid search patterns',
      'Available evenings and weekends',
      'Serving hunters across eastern Oklahoma',
    ],
    imageAlt: 'Deer Recovery',
    flip: true,
  },
];

export default function ServicesPage() {
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
            Our Services
          </h1>
          <div className="mt-3 mx-auto w-16 h-1 bg-brand-orange rounded" />
          <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
            Professional, FAA-certified drone services built around your needs.
          </p>
        </div>
      </section>

      {/* Service detail blocks */}
      <div className="bg-brand-dark">
        {services.map((s) => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>

      <CTABanner />
    </>
  );
}
