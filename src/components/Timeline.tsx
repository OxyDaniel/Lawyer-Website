import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import type { TimelineMilestone } from '../data/firmData';

export function Timeline({
  milestones,
  variant = 'dark',
}: {
  milestones: TimelineMilestone[];
  variant?: 'dark' | 'ivory';
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const isIvory = variant === 'ivory';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%'],
  });

  const progressLineScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [0, 1]
  );

  return (
    <div ref={containerRef} className="relative pt-6">
      {/* Scroll-Driven Connecting Spine (Desktop) */}
      <div className="relative hidden md:block">
        {/* Background track line */}
        <div
          className={`absolute top-4 inset-x-0 h-[1.5px] ${
            isIvory ? 'bg-ivory-border/70' : 'bg-primary/25'
          }`}
          aria-hidden="true"
        />
        {/* Animated fill progress line */}
        <motion.div
          style={{ scaleX: progressLineScale, transformOrigin: '0%' }}
          className={`absolute top-4 inset-x-0 h-[2px] ${
            isIvory
              ? 'bg-gradient-to-r from-ivory-gold via-ivory-ink to-ivory-gold'
              : 'bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_8px_rgba(197,161,90,0.4)]'
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Milestones Grid */}
      <div
        className={`grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-${milestones.length} md:gap-6 lg:gap-8`}
        style={{
          gridTemplateColumns:
            milestones.length === 3
              ? 'repeat(auto-fit, minmax(240px, 1fr))'
              : undefined,
        }}
      >
        {milestones.map((item, index) => {
          const isSelected = activeIdx === index;

          return (
            <motion.div
              key={item.year}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setActiveIdx(index)}
              onMouseLeave={() => setActiveIdx(null)}
              className="group relative flex flex-col pt-2 cursor-default"
            >
              {/* Milestone Node on Desktop */}
              <div className="hidden md:flex items-center mb-6">
                <div
                  className={`relative flex h-8 w-8 items-center justify-center transition-all duration-300 ${
                    isSelected ? 'scale-110' : 'scale-100'
                  }`}
                >
                  {/* Concentric pulse ring */}
                  <div
                    className={`absolute inset-0 rounded-full border transition-colors duration-300 ${
                      isSelected
                        ? isIvory
                          ? 'border-ivory-gold bg-ivory-gold/10'
                          : 'border-primary bg-primary/20 shadow-[0_0_12px_rgba(197,161,90,0.3)]'
                        : isIvory
                        ? 'border-ivory-border bg-ivory-surface'
                        : 'border-primary/40 bg-background'
                    }`}
                  />
                  {/* Inner node dot */}
                  <div
                    className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                      isSelected
                        ? isIvory
                          ? 'bg-ivory-gold'
                          : 'bg-primary'
                        : isIvory
                        ? 'bg-ivory-gold/60'
                        : 'bg-primary/50'
                    }`}
                  />
                </div>
              </div>

              {/* Milestone Card Body */}
              <div
                className={`flex-1 border-l pl-5 transition-colors duration-300 md:border-l-0 md:pl-0 md:pt-2 ${
                  isIvory
                    ? isSelected
                      ? 'border-ivory-gold'
                      : 'border-ivory-border/70'
                    : isSelected
                    ? 'border-primary'
                    : 'border-primary/30'
                }`}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span
                    className={`font-display text-3xl sm:text-4xl font-medium tabular-nums transition-colors duration-300 ${
                      isIvory
                        ? isSelected
                          ? 'text-ivory-gold drop-shadow-sm'
                          : 'text-ivory-gold/90'
                        : isSelected
                        ? 'text-accent drop-shadow-[0_2px_8px_rgba(197,161,90,0.3)]'
                        : 'text-primary'
                    }`}
                  >
                    {item.year}
                  </span>
                  <span
                    className={`font-mono text-[11px] uppercase tracking-widest ${
                      isIvory ? 'text-ivory-muted' : 'text-muted/80'
                    }`}
                  >
                    Milestone 0{index + 1}
                  </span>
                </div>

                <h3
                  className={`mt-3 font-display text-xl font-medium leading-snug transition-colors duration-300 ${
                    isIvory
                      ? isSelected
                        ? 'text-ivory-gold'
                        : 'text-ivory-ink'
                      : isSelected
                      ? 'text-accent'
                      : 'text-foreground'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-2.5 text-sm leading-relaxed transition-colors duration-300 ${
                    isIvory
                      ? isSelected
                        ? 'text-ivory-ink/80'
                        : 'text-ivory-muted'
                      : isSelected
                      ? 'text-foreground/90'
                      : 'text-muted'
                  }`}
                >
                  {item.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
