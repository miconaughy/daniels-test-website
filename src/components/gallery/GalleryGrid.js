const tags = [
  'Aerial Mapping',
  'Roofing Inspection',
  'Thermal Services',
  'Deer Recovery',
  'Aerial Mapping',
  'Roofing Inspection',
  'Thermal Services',
  'Deer Recovery',
  'Aerial Mapping',
  'Roofing Inspection',
  'Thermal Services',
  'Deer Recovery',
];

export default function GalleryGrid({ items }) {
  const cells = items || tags.map((tag) => ({ src: null, tag }));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cells.map((cell, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className="aspect-video bg-brand-charcoal border border-brand-orange/20 rounded-lg flex items-center justify-center overflow-hidden">
            {cell.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={cell.src} alt={cell.alt || cell.tag} className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-2 text-brand-orange/40 px-4 text-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="font-display uppercase tracking-widest text-xs leading-tight">
                  Media Coming Soon
                </span>
              </div>
            )}
          </div>
          <span className="inline-block self-start bg-brand-orange/10 text-brand-orange text-xs font-display font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
            {cell.tag}
          </span>
        </div>
      ))}
    </div>
  );
}
