import {
  type ReactNode,
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useSpring,
  useInView,
} from 'motion/react';

/* -------------------------------------------------------------------------- */
/* 1. Global Reading & Scroll Progress Context                                */
/* -------------------------------------------------------------------------- */
interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: '',
  setActiveSection: () => {},
});

export const useActiveSection = () => useContext(ActiveSectionContext);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>('');
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Top Scroll Progress Bar                                                 */
/* -------------------------------------------------------------------------- */
export function ScrollProgressBar() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="pointer-events-none fixed top-0 inset-x-0 z-50 h-[2px] bg-gradient-to-r from-primary via-accent to-primary"
      aria-hidden="true"
    />
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Editorial Text Reveal (Line Masking & Soft Drift)                       */
/* -------------------------------------------------------------------------- */
export function EditorialTextReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. ScrollReveal (Standard Upward Fade)                                     */
/* -------------------------------------------------------------------------- */
export function ScrollReveal({
  children,
  delay = 0,
  yOffset = 24,
  className = '',
  amount = 0.12,
}: {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
  amount?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. Animated Gold Divider Line                                              */
/* -------------------------------------------------------------------------- */
export function GoldDivider({
  className = '',
  origin = 'left',
  variant = 'primary',
}: {
  className?: string;
  origin?: 'left' | 'center';
  variant?: 'primary' | 'ivory';
}) {
  const prefersReducedMotion = useReducedMotion();

  const colorClass =
    variant === 'ivory' ? 'bg-ivory-border' : 'bg-primary/45';

  if (prefersReducedMotion) {
    return <div className={`h-px w-full ${colorClass} ${className}`} />;
  }

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0.3 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`h-px w-full ${colorClass} ${
        origin === 'center' ? 'origin-center' : 'origin-left'
      } ${className}`}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* 6. Parallax Frame (Photographs & Archival Plates)                          */
/* -------------------------------------------------------------------------- */
export function ParallaxFrame({
  children,
  offset = 24,
  scale = false,
  className = '',
}: {
  children: ReactNode;
  offset?: number;
  scale?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [offset, -offset]
  );

  const scaleValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    prefersReducedMotion || !scale ? [1, 1, 1] : [1.05, 1, 1.02]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, scale: scaleValue }}
        className="h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 7. Curtain / Shutter Image Reveal                                          */
/* -------------------------------------------------------------------------- */
export function CurtainImageReveal({
  children,
  className = '',
  curtainColor = 'bg-surface',
}: {
  children: ReactNode;
  className?: string;
  curtainColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.div
        initial={{ x: '0%' }}
        animate={isInView ? { x: '101%' } : { x: '0%' }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        className={`pointer-events-none absolute inset-0 z-20 ${curtainColor}`}
        aria-hidden="true"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 8. Scrollytelling Quotation Reveal (Kant Quote & Testimonials)             */
/* -------------------------------------------------------------------------- */
export function ScrollyQuote({
  quote,
  attribution,
  className = '',
}: {
  quote: string;
  attribution: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'center 50%'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    prefersReducedMotion ? [1, 1, 1] : [0.25, 0.7, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [0.97, 1]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ opacity, scale }}
        className="mx-auto max-w-4xl text-center"
      >
        <div
          aria-hidden="true"
          className="font-display text-6xl leading-none text-primary/70 md:text-8xl select-none"
        >
          &ldquo;
        </div>
        <blockquote className="mt-2">
          <p className="font-display text-3xl italic leading-snug text-foreground sm:text-4xl md:text-5xl">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="mt-8 flex flex-col items-center">
            <GoldDivider origin="center" className="mx-auto mb-5 max-w-28" />
            <cite className="not-italic font-mono text-xs uppercase tracking-widest text-accent">
              ~ {attribution}
            </cite>
          </footer>
        </blockquote>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 9. Scroll-Triggered Section Sentinel                                       */
/* -------------------------------------------------------------------------- */
export function SectionSentinel({
  name,
  onEnter,
}: {
  name: string;
  onEnter?: (name: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(name);
            onEnter?.(name);
          }
        });
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [name, setActiveSection, onEnter]);

  return <div ref={ref} className="pointer-events-none absolute inset-x-0 top-0 h-10 -z-10" />;
}
