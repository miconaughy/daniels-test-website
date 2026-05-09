import './globals.css';
import { Inter, Oswald } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', weight: ['500', '600', '700'] });

export const metadata = {
  title: {
    default: 'RidgeLine Aerial Services | Drone Mapping & Inspections — Tulsa, OK',
    template: '%s | RidgeLine Aerial Services',
  },
  description:
    'Veteran-owned drone services in Tulsa, Sapulpa, Broken Arrow, Owasso, and surrounding Oklahoma areas. FAA Part 107 certified aerial mapping, roofing inspections, thermal imaging, and deer recovery.',
  keywords: [
    'drone services Tulsa Oklahoma',
    'aerial mapping Tulsa OK',
    'roofing inspection drone Tulsa',
    'thermal imaging drone Oklahoma',
    'deer recovery drone Tulsa',
    'FAA Part 107 certified Tulsa',
    'veteran owned drone company Oklahoma',
    'drone inspection Sapulpa OK',
    'aerial survey Broken Arrow Oklahoma',
    'commercial drone pilot Tulsa',
    'drone company near me Tulsa',
    'RidgeLine Aerial Services',
  ],
  openGraph: {
    siteName: 'RidgeLine Aerial Services',
    type: 'website',
    locale: 'en_US',
  },
  metadataBase: new URL('https://ridgelineaerialllc.com'),
};

export const viewport = {
  themeColor: '#1A1A1A',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RidgeLine Aerial Services LLC',
  description: 'Veteran-owned drone services company offering aerial mapping, roofing inspections, thermal imaging, and deer recovery in Tulsa and surrounding Oklahoma areas.',
  url: 'https://ridgelineaerialllc.com',
  telephone: '+14232173311',
  email: 'danielperry@ridgelineaerialllc.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sapulpa',
    addressRegion: 'OK',
    postalCode: '74066',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.9987,
    longitude: -96.1147,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: [
    'Tulsa, OK', 'Sapulpa, OK', 'Broken Arrow, OK', 'Jenks, OK',
    'Owasso, OK', 'Bixby, OK', 'Sand Springs, OK', 'Claremore, OK',
  ],
  sameAs: [
    'https://facebook.com/RidgeLineAerial',
    'https://linkedin.com/company/ridgeline-aerial-solutions-llc',
  ],
  priceRange: '$$',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
