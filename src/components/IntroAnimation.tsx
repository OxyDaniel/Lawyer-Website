import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const INTRO_STORAGE_KEY = 'amco_intro_seen_v1';

export function IntroAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState<boolean>(() => {
    try {
      if (typeof window === 'undefined') return false;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return false;
      }
      return sessionStorage.getItem(INTRO_STORAGE_KEY) !== '1';
    } catch {
      return false;
    }
  });

  const dismissIntro = () => {
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, '1');
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  useEffect(() => {
    if (!visible || prefersReducedMotion) {
      if (prefersReducedMotion && visible) {
        dismissIntro();
      }
      return;
    }

    const timer = window.setTimeout(() => {
      dismissIntro();
    }, 2600);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        dismissIntro();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [visible, prefersReducedMotion]);

  const titleWords = ['Austin', 'Mamedu', '&', 'Co'];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="amco-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-background px-6 py-10 text-foreground"
          aria-label="Austin Mamedu & Co. introduction"
        >
          <div className="flex w-full max-w-[90rem] items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Est. 1988 · Nigeria · UK · Ireland
            </span>
            <button
              type="button"
              onClick={dismissIntro}
              className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap border border-primary/35 bg-surface px-4 py-2 text-xs font-medium tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Skip Intro
            </button>
          </div>

          <div className="flex w-full max-w-4xl flex-col items-center text-center">
            {/* Converted Gold Brand Mark Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 flex flex-col items-center"
            >
              <div className="relative flex items-center justify-center p-2">
                <img
                  src="/assets/brand/amco_logo_gold_hi.png"
                  alt="Austin Mamedu & Co. logo mark"
                  className="h-16 w-auto object-contain sm:h-20 drop-shadow-[0_2px_12px_rgba(197,161,90,0.18)]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0.15, opacity: 0.5 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 h-px w-32 origin-center bg-primary md:w-56"
            />

            <div
              className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-7xl"
              aria-label="Austin Mamedu & Co"
            >
              {titleWords.map((word, idx) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0.15, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.25 + idx * 0.16,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={word === '&' ? 'text-primary italic font-normal' : ''}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95, ease: 'easeOut' }}
              className="mt-5 font-display text-lg italic tracking-wide text-accent sm:text-xl md:text-2xl"
            >
              Solicitors | Research | Consulting
            </motion.p>

            <motion.div
              initial={{ scaleX: 0.1, opacity: 0.4 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 h-px w-full max-w-xl origin-center bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>

          <div className="flex w-full max-w-[90rem] items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-muted/80">
              Abuja · Legal Advisory &amp; International Development Law
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
