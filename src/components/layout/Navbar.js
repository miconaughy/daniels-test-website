'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery',  href: '/gallery' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://lirp.cdn-website.com/d13e17ca/dms3rep/multi/opt/FullLogo+2-189w.png"
              alt="RidgeLine Aerial Services"
              width={120}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display font-semibold uppercase tracking-wider text-sm transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-brand-orange border-b-2 border-brand-orange pb-0.5'
                    : 'text-white/80 hover:text-brand-orange'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:+14232173311"
            className="hidden lg:inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-display font-semibold uppercase tracking-wider text-sm px-5 py-2.5 rounded transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-brand-orange transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-brand-charcoal border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-display font-semibold uppercase tracking-wider text-sm py-3 px-2 rounded transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-brand-orange bg-brand-orange/10'
                    : 'text-white/80 hover:text-brand-orange hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+14232173311"
              className="mt-3 flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-display font-semibold uppercase tracking-wider text-sm py-3 rounded transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              (423) 217-3311
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
