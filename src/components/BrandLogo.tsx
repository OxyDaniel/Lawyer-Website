import { type ImgHTMLAttributes } from 'react';
import { BRAND_LOGO } from '../data/firmData';

export type LogoVariant = 'gold' | 'darkGold' | 'white' | 'black';

interface BrandLogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  variant?: LogoVariant;
  useHiRes?: boolean;
  className?: string;
}

export function BrandLogo({
  variant = 'gold',
  useHiRes = false,
  className = 'h-10 w-auto',
  alt = BRAND_LOGO.alt,
  loading = 'lazy',
  ...props
}: BrandLogoProps) {
  let src = BRAND_LOGO.gold;
  if (variant === 'gold') {
    src = useHiRes ? BRAND_LOGO.goldHiRes : BRAND_LOGO.gold;
  } else if (variant === 'darkGold') {
    src = useHiRes ? BRAND_LOGO.darkGoldHiRes : BRAND_LOGO.darkGold;
  } else if (variant === 'white') {
    src = useHiRes ? BRAND_LOGO.whiteHiRes : BRAND_LOGO.white;
  } else if (variant === 'black') {
    src = BRAND_LOGO.black;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      className={`inline-block object-contain select-none ${className}`}
      {...props}
    />
  );
}

interface LogoWatermarkProps {
  variant?: LogoVariant;
  className?: string;
  imgClassName?: string;
  opacityClassName?: string;
  position?: 'center' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left' | 'center-right';
  scale?: string;
}

export function LogoWatermark({
  variant = 'gold',
  className = '',
  imgClassName = '',
  opacityClassName = 'opacity-[0.045] md:opacity-[0.06]',
  position = 'center',
  scale = 'w-[420px] md:w-[680px] lg:w-[860px]',
}: LogoWatermarkProps) {
  const positionClasses = {
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'center-right': 'top-1/2 right-0 -translate-y-1/2 translate-x-1/6',
    'top-right': 'top-0 right-0 -translate-y-1/6 translate-x-1/6',
    'bottom-right': 'bottom-0 right-0 translate-y-1/6 translate-x-1/6',
    'bottom-left': 'bottom-0 left-0 translate-y-1/6 -translate-x-1/6',
    'top-left': 'top-0 left-0 -translate-y-1/6 -translate-x-1/6',
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
    >
      <div
        className={`absolute ${positionClasses} ${scale} max-w-none transition-opacity duration-700 ${opacityClassName}`}
      >
        <BrandLogo
          variant={variant}
          useHiRes={true}
          className={`h-auto w-full object-contain ${imgClassName}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}
