import { type ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export function ScrollReveal({
  children,
  delay = 0,
  yOffset = 20,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GoldDivider({
  className = '',
  origin = 'left',
}: {
  className?: string;
  origin?: 'left' | 'center';
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={`h-px w-full bg-primary/40 ${className}`} />;
  }

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0.3 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className={`h-px w-full bg-primary/45 ${
        origin === 'center' ? 'origin-center' : 'origin-left'
      } ${className}`}
    />
  );
}

export function ParallaxFrame({
  children,
  offset = 18,
  className = '',
}: {
  children: ReactNode;
  offset?: number;
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

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
