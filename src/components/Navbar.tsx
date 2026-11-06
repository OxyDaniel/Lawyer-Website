import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Our Work', path: '/our-work' },
  { label: 'Your Lawyers', path: '/your-lawyers' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);

    const scrollToContact = () => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/#contact');
      window.setTimeout(scrollToContact, 120);
    } else {
      scrollToContact();
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-primary/35 bg-background/95'
          : 'border-b border-transparent bg-gradient-to-b from-background/90 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-4 md:px-12 md:py-5">
        <Link
          to="/"
          className="group inline-flex flex-col whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="font-display text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
            Austin Mamedu &amp; Co.
          </span>
          <span className="font-display text-xs italic tracking-wider text-primary sm:text-sm">
            Solicitors | Research | Consulting
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex md:items-center md:gap-8 lg:gap-10"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`relative whitespace-nowrap shrink-0 py-2 text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                  isActive
                    ? 'text-primary'
                    : 'text-foreground/85 hover:text-accent'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-px bg-primary" />
                )}
              </Link>
            );
          })}

          <a
            href="/#contact"
            onClick={handleContactClick}
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap shrink-0 border border-primary/45 bg-surface px-5 py-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-primary/35 bg-surface text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation-drawer"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-primary/25 bg-background md:hidden"
          >
            <div className="flex flex-col divide-y divide-primary/15 px-6 py-4">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-12 items-center justify-between py-3 font-display text-xl transition-colors ${
                      isActive ? 'text-primary' : 'text-foreground hover:text-accent'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        Current
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 pb-2">
                <a
                  href="/#contact"
                  onClick={handleContactClick}
                  className="flex min-h-11 w-full items-center justify-center border border-primary bg-primary px-5 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-accent"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
