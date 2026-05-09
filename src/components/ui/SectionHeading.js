export default function SectionHeading({ title, subtitle, centered = true, accent = 'orange' }) {
  const accentColor = accent === 'gold' ? 'bg-brand-gold' : 'bg-brand-orange';
  const align = centered ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${align} mb-12`}>
      <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white">
        {title}
      </h2>
      <div className={`${accentColor} mt-3 h-1 w-16 rounded`} />
      {subtitle && (
        <p className="mt-4 text-lg text-white/70 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
