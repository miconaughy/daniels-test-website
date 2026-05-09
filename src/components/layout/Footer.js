import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery',  href: '/gallery' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="https://lirp.cdn-website.com/d13e17ca/dms3rep/multi/opt/FullLogo+2-189w.png"
              alt="RidgeLine Aerial Services"
              width={120}
              height={48}
              className="h-14 w-auto object-contain"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Professional drone services delivering actionable aerial insights for agriculture,
              construction, insurance, and landowners across Tulsa and surrounding Oklahoma.
            </p>
            <p className="text-brand-orange font-display font-semibold uppercase tracking-widest text-xs">
              See More. Know More. Act Faster.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className="font-display font-semibold uppercase tracking-widest text-xs text-brand-gold mb-5">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-brand-orange text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3 className="font-display font-semibold uppercase tracking-widest text-xs text-brand-gold mb-5">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="tel:+14232173311" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                (423) 217-3311
              </a>
              <a href="mailto:danielperry@ridgelineaerialllc.com" className="flex items-center gap-2 hover:text-brand-orange transition-colors break-all">
                <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                danielperry@ridgelineaerialllc.com
              </a>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
                Sapulpa, OK — Serving Tulsa & Surrounding Areas
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                Mon–Sun, 9:00 AM – 6:00 PM
              </div>

              {/* Social */}
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://facebook.com/RidgeLineAerial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-brand-orange transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/ridgeline-aerial-solutions-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-brand-orange transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p>© {new Date().getFullYear()} RidgeLine Aerial Services LLC. All rights reserved.</p>
          <p>Sapulpa, OK · FAA Part 107 Certified · Veteran Owned &amp; Operated</p>
        </div>
      </div>
    </footer>
  );
}
