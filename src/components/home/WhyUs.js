const stats = [
  { value: '500+', label: 'Flights Completed' },
  { value: '15+',  label: 'Counties Served' },
  { value: 'FAA',  label: 'Part 107 Certified' },
  { value: '★',    label: 'Veteran Owned & Operated' },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="font-display font-bold text-5xl text-gradient-brand">{s.value}</span>
              <span className="font-display font-semibold uppercase tracking-widest text-sm text-white/60">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-white/50 max-w-2xl mx-auto text-sm leading-relaxed">
          RidgeLine Aerial Services is fully licensed, insured, and locally owned — committed to
          delivering precision aerial data that helps you make better decisions faster.
        </p>
      </div>
    </section>
  );
}
