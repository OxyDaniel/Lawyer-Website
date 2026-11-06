import { useState, type ComponentProps, type ImgHTMLAttributes } from 'react';

// inset is reserved strictly for recessed interactive wells (editor, dropzone, canvas stage), never metric/callout sub-boxes inside cards or sidebars.
export const Surface = ({
  inset = false,
  className = '',
  ...p
}: ComponentProps<'div'> & { inset?: boolean }) => (
  <div
    className={`min-w-0 rounded-card text-foreground ${
      inset ? 'bg-background' : 'bg-surface shadow-surface'
    } ${className}`}
    {...p}
  />
);

const tones = {
  primary:
    'bg-primary text-primary-foreground border border-primary hover:bg-accent hover:border-accent',
  quiet:
    'border border-primary/40 bg-surface text-foreground hover:border-primary hover:text-accent',
  ivory:
    'border border-ivory-gold bg-ivory-ink text-ivory hover:bg-ivory-gold hover:text-ivory',
};

export const Button = ({
  tone = 'primary',
  type = 'button',
  className = '',
  ...p
}: ComponentProps<'button'> & { tone?: keyof typeof tones }) => (
  <button
    type={type}
    className={`inline-flex min-h-11 items-center justify-center gap-2.5 whitespace-nowrap rounded-control px-6 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 ${tones[tone]} ${className}`}
    {...p}
  />
);

export const Field = ({
  label,
  id,
  error,
  children,
  className = '',
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`flex min-w-0 flex-col gap-2 ${className}`}>
    <label
      htmlFor={id}
      className="text-sm font-medium tracking-wide text-foreground"
    >
      {label}
    </label>
    {children}
    {error ? (
      <p role="alert" className="text-xs text-accent">
        {error}
      </p>
    ) : null}
  </div>
);

export function ArchivalImage({
  src,
  alt,
  fallbackTitle,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & {
  fallbackTitle: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-surface via-background to-surface p-6 text-center border border-primary/25 ${className}`}
        role="img"
        aria-label={alt || fallbackTitle}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-primary/80 mb-2">
          AM&amp;Co. Archive
        </span>
        <span className="font-display text-lg text-foreground">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className={`block h-full w-full ${imgClassName}`}
        {...props}
      />
    </div>
  );
}

