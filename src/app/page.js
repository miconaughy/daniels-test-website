import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyUs from '@/components/home/WhyUs';
import CTABanner from '@/components/home/CTABanner';

export const metadata = {
  title: 'RidgeLine Aerial Services | Veteran-Owned Drone Company — Tulsa, OK',
  description:
    'Veteran-owned drone services in Tulsa, Sapulpa, Broken Arrow & surrounding Oklahoma. FAA Part 107 certified aerial mapping, roofing inspections, thermal imaging, and deer recovery. Free quotes available.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyUs />
      <CTABanner />
    </>
  );
}
