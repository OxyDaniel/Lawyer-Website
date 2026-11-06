import type { TimelineMilestone } from '../data/firmData';
import { ScrollReveal } from './ScrollReveal';

export function Timeline({
  milestones,
  variant = 'dark',
}: {
  milestones: TimelineMilestone[];
  variant?: 'dark' | 'ivory';
}) {
  const isIvory = variant === 'ivory';

  return (
    <div
      className={`grid grid-cols-1 gap-8 border-t pt-8 md:grid-cols-2 lg:grid-cols-4 ${
        isIvory ? 'border-ivory-border' : 'border-primary/30'
      }`}
    >
      {milestones.map((item, index) => (
        <ScrollReveal
          key={item.year}
          delay={index * 0.1}
          className={`flex min-w-0 flex-col justify-between border-l pl-5 ${
            isIvory ? 'border-ivory-gold/50' : 'border-primary/45'
          }`}
        >
          <div>
            <span
              className={`font-display text-3xl font-medium tabular-nums md:text-4xl ${
                isIvory ? 'text-ivory-gold' : 'text-primary'
              }`}
            >
              {item.year}
            </span>
            <h3
              className={`mt-3 font-display text-xl font-medium leading-snug ${
                isIvory ? 'text-ivory-ink' : 'text-foreground'
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${
                isIvory ? 'text-ivory-muted' : 'text-muted'
              }`}
            >
              {item.detail}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
