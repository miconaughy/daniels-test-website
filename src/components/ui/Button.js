import Link from 'next/link';

const variants = {
  primary: 'bg-brand-orange hover:bg-brand-orange-hover text-white',
  secondary: 'bg-brand-gold hover:bg-brand-gold-hover text-brand-dark',
  outline: 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark',
  dark: 'bg-brand-dark hover:bg-brand-charcoal text-white border border-white/20',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
}) {
  const base =
    'inline-flex items-center justify-center font-display font-semibold uppercase tracking-wider rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-brand-dark';
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
