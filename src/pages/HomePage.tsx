import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import {
  ESTABLISHMENT_TIMELINE,
  FIRM_ASSETS,
  TESTIMONIALS,
} from '../data/firmData';
import { ArchivalImage } from '../components/ui';
import {
  CurtainImageReveal,
  EditorialTextReveal,
  GoldDivider,
  ParallaxFrame,
  ScrollReveal,
  ScrollyQuote,
  SectionSentinel,
} from '../components/ScrollReveal';
import { ContactSection } from '../components/ContactSection';
import { LogoWatermark } from '../components/BrandLogo';

const PRACTICE_AREAS = [
  'Legislative Drafting',
  'Tax Law',
  'International Human Rights',
  'Employment',
  'Child Rights',
  'Residential & Commercial Conveyancing',
  'Company / Commercial Law',
  'Litigation',
];

export function HomePage() {
  useEffect(() => {
    document.title = 'Austin Mamedu & Co. | Solicitors, Research & Consulting';
  }, []);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <main>
        {/* 5.1 HERO SECTION */}
        <section
          aria-labelledby="hero-heading"
          className="relative flex min-h-dvh flex-col justify-between overflow-hidden border-b border-primary/30 bg-background px-6 pt-28 pb-12 md:px-12 md:pt-36 md:pb-16"
        >
          <SectionSentinel name="Overview" />
          {/* Monumental Low-Opacity Background Watermark */}
          <LogoWatermark
            variant="gold"
            position="center-right"
            scale="w-[660px] md:w-[980px] lg:w-[1180px]"
            opacityClassName="opacity-[0.055] md:opacity-[0.08]"
          />

          {/* Restrained architectural brass hairlines in background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="mx-auto flex h-full max-w-[90rem] justify-between px-6 md:px-12">
              <div className="h-full w-px bg-primary/10" />
              <div className="hidden h-full w-px bg-primary/10 md:block" />
              <div className="h-full w-px bg-primary/10" />
            </div>
            <div
              className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[90rem]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-primary/25 pb-5">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                Established 1988 · Lagos &amp; Abuja
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Nigeria · England &amp; Wales · Republic of Ireland
              </span>
            </div>
          </div>

          <div className="relative z-10 mx-auto my-auto w-full max-w-[90rem] py-14 md:py-20">
            <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-8">
                <ScrollReveal yOffset={16}>
                  {/* Strongly Present Corporate Monogram Seal on Hero Screen */}
                  <div className="mb-7 flex items-center gap-4">
                    <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center border border-primary/50 bg-surface/90 p-2.5 shadow-[0_4px_24px_rgba(197,161,90,0.14)]">
                      <img
                        src="/assets/brand/amco_logo_gold_hi.png"
                        alt="Austin Mamedu & Co. official logo monogram"
                        className="h-full w-full object-contain"
                      />
                      <span className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-primary" />
                      <span className="absolute -top-1 -right-1 h-2 w-2 border-t border-r border-primary" />
                      <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-primary" />
                      <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
                        AM&amp;Co. Corporate Monogram
                      </span>
                      <span className="font-mono text-[11px] tracking-wider text-muted">
                        Solicitors | Research | Consulting · Est. 1988
                      </span>
                    </div>
                  </div>

                  <EditorialTextReveal>
                    <h1
                      id="hero-heading"
                      className="font-display text-hero font-medium tracking-tight text-foreground"
                    >
                      Austin Mamedu &amp; Co.
                    </h1>
                  </EditorialTextReveal>
                  <p className="mt-4 font-display text-2xl italic tracking-wide text-primary sm:text-3xl md:text-4xl">
                    Solicitors | Research | Consulting
                  </p>
                </ScrollReveal>

                <GoldDivider className="my-8 max-w-xl" />

                <ScrollReveal delay={0.12}>
                  <p className="max-w-2xl font-display text-xl leading-relaxed text-foreground/90 sm:text-2xl">
                    Legal expertise shaped by experience, strengthened by
                    research, and guided by professional excellence.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.22}>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                      to="/our-work"
                      className="inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap border border-primary bg-primary px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-accent hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <span>Explore Our Work</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/your-lawyers"
                      className="inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap border border-primary/40 bg-surface px-7 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <span>Your Lawyers</span>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right architectural column: Practice Pedigree & Mandate summary */}
              <div className="min-w-0 lg:col-span-4">
                <ScrollReveal
                  delay={0.25}
                  className="relative overflow-hidden border border-primary/30 bg-surface/90 p-6 md:p-8"
                >
                  <LogoWatermark
                    variant="gold"
                    position="bottom-right"
                    scale="w-[280px]"
                    opacityClassName="opacity-[0.04]"
                  />
                  <div className="relative z-10 flex items-center justify-between border-b border-primary/20 pb-3 mb-2">
                    <p className="font-mono text-xs uppercase tracking-widest text-primary">
                      Practice Pedigree
                    </p>
                    <img
                      src="/assets/brand/amco_logo_gold.png"
                      alt="AM&Co. emblem"
                      className="h-6 w-auto object-contain opacity-85"
                    />
                  </div>
                  <dl className="relative z-10 mt-3 divide-y divide-primary/20">
                    <div className="py-3.5 first:pt-0">
                      <dt className="text-xs text-muted">Foundation</dt>
                      <dd className="mt-1 font-display text-lg text-foreground">
                        Established in 1988 by Augustine Mamedu
                      </dd>
                    </div>
                    <div className="py-3.5">
                      <dt className="text-xs text-muted">Principal Chambers</dt>
                      <dd className="mt-1 font-display text-lg text-foreground">
                        23 Okemesi Crescent, Garki II, Abuja
                      </dd>
                    </div>
                    <div className="py-3.5 last:pb-0">
                      <dt className="text-xs text-muted">Core Disciplines</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted">
                        Legislative Drafting · Tax Law · International Human
                        Rights · Corporate &amp; Maritime Law · Litigation
                      </dd>
                    </div>
                  </dl>
                </ScrollReveal>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[90rem] items-center justify-between border-t border-primary/20 pt-6">
            <a
              href="#about-us"
              className="group inline-flex items-center gap-3 text-xs font-medium tracking-widest text-muted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span className="uppercase">Scroll to Read</span>
              <ArrowDown className="h-4 w-4 text-primary transition-transform group-hover:translate-y-0.5" />
            </a>
            <span className="hidden font-mono text-xs text-muted sm:inline">
              Section I — VII
            </span>
          </div>
        </section>

        {/* 5.2 ABOUT US */}
        <section
          id="about-us"
          aria-labelledby="about-heading"
          className="relative overflow-hidden border-b border-primary/25 bg-background px-6 py-24 md:px-12 md:py-36"
        >
          <SectionSentinel name="01 · Practice Profile" />
          <LogoWatermark
            variant="gold"
            position="bottom-left"
            scale="w-[480px] md:w-[740px]"
            opacityClassName="opacity-[0.035] md:opacity-[0.045]"
          />
          <div className="relative z-10 mx-auto max-w-[90rem]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left sticky editorial column */}
              <div className="min-w-0 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                <ScrollReveal>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    01 · Practice Profile
                  </p>
                  <EditorialTextReveal>
                    <h2
                      id="about-heading"
                      className="mt-3 font-display text-display text-foreground"
                    >
                      About Us
                    </h2>
                  </EditorialTextReveal>
                  <GoldDivider className="mt-6 max-w-xs" />
                  <p className="mt-6 text-sm leading-relaxed text-muted max-w-sm">
                    Multidisciplinary legal advisory combining domestic practice
                    authority with international legal exposure.
                  </p>
                </ScrollReveal>
              </div>

              {/* Right scrolling narrative column */}
              <div className="min-w-0 lg:col-span-7">
                <ScrollReveal>
                  <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
                    We offer general legal advisory services with specialism in{' '}
                    <span className="text-accent">legislative drafting</span>,{' '}
                    <span className="text-accent">tax law</span>,{' '}
                    <span className="text-accent">
                      international human rights
                    </span>
                    , <span className="text-accent">employment</span>,{' '}
                    <span className="text-accent">child rights</span>,{' '}
                    <span className="text-accent">
                      residential and commercial conveyancing
                    </span>
                    ,{' '}
                    <span className="text-accent">
                      company/commercial law
                    </span>{' '}
                    and <span className="text-accent">litigation</span>.
                  </p>
                </ScrollReveal>

                <GoldDivider className="my-10" />

                <ScrollReveal delay={0.14}>
                  <p className="max-w-[40rem] text-lg leading-relaxed text-muted">
                    Client care standards are the foundation of our success, and
                    we take care to satisfy our clients’ needs while delivering
                    excellence and professionalism through the employment of
                    innovative skills gained from a mix of international
                    exposure and cultures.
                  </p>
                </ScrollReveal>

                {/* Ruled Practice Index with subtle hover illumination */}
                <ScrollReveal delay={0.22} className="mt-12">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                    Areas of Specialism
                  </p>
                  <div className="grid grid-cols-1 border-t border-primary/25 sm:grid-cols-2">
                    {PRACTICE_AREAS.map((area, idx) => (
                      <div
                        key={area}
                        className="group flex items-center justify-between border-b border-primary/20 py-3.5 pr-4 transition-colors hover:border-primary/60"
                      >
                        <span className="font-display text-lg text-foreground transition-colors group-hover:text-accent">
                          {area}
                        </span>
                        <span className="font-mono text-xs text-primary/80 tabular-nums transition-colors group-hover:text-primary">
                          0{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 5.3 MOTTO */}
        <section
          aria-labelledby="motto-heading"
          className="relative overflow-hidden border-b border-primary/30 bg-surface px-6 py-28 md:px-12 md:py-40"
        >
          <SectionSentinel name="Firm Motto" />
          <LogoWatermark
            variant="gold"
            position="center"
            scale="w-[460px] md:w-[720px]"
            opacityClassName="opacity-[0.045] md:opacity-[0.06]"
          />
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <h2
              id="motto-heading"
              className="mb-8 font-mono text-xs uppercase tracking-widest text-primary"
            >
              Motto
            </h2>

            <ScrollyQuote
              quote="In law, a man is guilty when he violates the rights of others. In ethics, he is guilty if he only thinks of doing so."
              attribution="Immanuel Kant"
            />
          </div>
        </section>

        {/* 5.4 ESTABLISHMENT (Editorial Warm Ivory Contrast Spread) */}
        <section
          id="establishment"
          aria-labelledby="establishment-heading"
          className="relative overflow-hidden border-b border-primary/35 bg-ivory px-6 py-24 text-ivory-ink md:px-12 md:py-36"
        >
          <SectionSentinel name="02 · Heritage & Establishment" />
          {/* Subtle Dark Gold Watermark tuned for warm ivory surface */}
          <LogoWatermark
            variant="darkGold"
            position="center-right"
            scale="w-[520px] md:w-[840px] lg:w-[1020px]"
            opacityClassName="opacity-[0.055] md:opacity-[0.075]"
          />
          <div className="relative z-10 mx-auto max-w-[90rem]">
            <ScrollReveal>
              <div className="flex flex-col gap-4 border-b border-ivory-border pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-ivory-gold">
                    02 · Heritage &amp; Institutional Representation
                  </p>
                  <EditorialTextReveal>
                    <h2
                      id="establishment-heading"
                      className="mt-2 font-display text-display text-ivory-ink"
                    >
                      Establishment
                    </h2>
                  </EditorialTextReveal>
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-ivory-muted">
                  3 Medical Road, Ikeja (1988) — Garki II, Abuja (Present)
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Narrative Text Column */}
              <div className="min-w-0 lg:col-span-6">
                <ScrollReveal>
                  <p className="font-display text-2xl leading-relaxed text-ivory-ink">
                    The law firm of Austin Mamedu &amp; Co. (AM&amp;Co.) was
                    established in 1988 by Augustine Mamedu, with its first
                    practice office at 3 Medical Road, Ikeja, Lagos. The firm
                    established a strong pedigree in maritime law and corporate
                    services, acting in several carriage of goods by sea and
                    commercial law disputes. The firm&apos;s principal office is
                    now located in Abuja.
                  </p>
                </ScrollReveal>

                <div className="my-8 h-px w-full bg-ivory-border" />

                <ScrollReveal delay={0.12}>
                  <p className="text-lg leading-relaxed text-ivory-muted">
                    Austin Mamedu &amp; Co. has served UN Agencies and
                    international non-governmental organisations (INGOs) such as{' '}
                    <strong className="font-medium text-ivory-ink">
                      UNICEF
                    </strong>
                    ,{' '}
                    <strong className="font-medium text-ivory-ink">IOM</strong>,
                    and{' '}
                    <strong className="font-medium text-ivory-ink">
                      Save the Children International
                    </strong>
                    , and corporate organisations such as{' '}
                    <strong className="font-medium text-ivory-ink">
                      Microsoft Nigeria Ltd
                    </strong>{' '}
                    (AM&amp;Co. registered Microsoft Nigeria Limited in the year
                    2000 and served as its company secretary),{' '}
                    <strong className="font-medium text-ivory-ink">
                      DAAR Communications Plc
                    </strong>
                    ,{' '}
                    <strong className="font-medium text-ivory-ink">
                      SGS Inspections Services Nigeria Ltd
                    </strong>
                    ,{' '}
                    <strong className="font-medium text-ivory-ink">
                      NICON Insurance Plc
                    </strong>
                    , etc.
                  </p>
                </ScrollReveal>
              </div>

              {/* Asymmetrical Editorial Gallery of Supplied Establishment Images with Shutter Curtains */}
              <div className="min-w-0 lg:col-span-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
                  {/* Large Primary Image (establishment_1) */}
                  <ScrollReveal className="sm:col-span-12">
                    <figure className="border border-ivory-gold/40 bg-ivory-surface p-5 md:p-7">
                      <CurtainImageReveal curtainColor="bg-[#E4DFD3]">
                        <ParallaxFrame offset={12} className="bg-white p-6 md:p-8">
                          <ArchivalImage
                            src={FIRM_ASSETS.establishment.establishment_1.src}
                            alt={FIRM_ASSETS.establishment.establishment_1.alt}
                            fallbackTitle={
                              FIRM_ASSETS.establishment.establishment_1.title
                            }
                            className="h-44 w-full sm:h-52"
                            imgClassName="object-contain"
                          />
                        </ParallaxFrame>
                      </CurtainImageReveal>
                      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-ivory-border pt-3">
                        <span className="font-display text-lg font-medium text-ivory-ink">
                          {FIRM_ASSETS.establishment.establishment_1.title}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-ivory-gold">
                          {FIRM_ASSETS.establishment.establishment_1.category}
                        </span>
                      </figcaption>
                    </figure>
                  </ScrollReveal>

                  {/* Smaller Supporting Image 1 (establishment_2 - asymmetric 5 cols) */}
                  <ScrollReveal delay={0.12} className="sm:col-span-5">
                    <figure className="flex h-full flex-col justify-between border border-ivory-gold/40 bg-ivory-surface p-5">
                      <CurtainImageReveal curtainColor="bg-[#E4DFD3]">
                        <ParallaxFrame offset={10} className="bg-white p-5">
                          <ArchivalImage
                            src={FIRM_ASSETS.establishment.establishment_2.src}
                            alt={FIRM_ASSETS.establishment.establishment_2.alt}
                            fallbackTitle={
                              FIRM_ASSETS.establishment.establishment_2.title
                            }
                            className="h-36 w-full"
                            imgClassName="object-contain"
                          />
                        </ParallaxFrame>
                      </CurtainImageReveal>
                      <figcaption className="mt-4 border-t border-ivory-border pt-3">
                        <span className="block font-display text-base font-medium text-ivory-ink">
                          {FIRM_ASSETS.establishment.establishment_2.title}
                        </span>
                        <span className="mt-0.5 block font-mono text-xs text-ivory-gold">
                          {FIRM_ASSETS.establishment.establishment_2.category}
                        </span>
                      </figcaption>
                    </figure>
                  </ScrollReveal>

                  {/* Smaller Supporting Image 2 (establishment_3 - asymmetric 7 cols, offset top on desktop) */}
                  <ScrollReveal
                    delay={0.22}
                    className="sm:col-span-7 sm:mt-6"
                  >
                    <figure className="flex h-full flex-col justify-between border border-ivory-gold/40 bg-ivory-surface p-5">
                      <CurtainImageReveal curtainColor="bg-[#E4DFD3]">
                        <ParallaxFrame offset={14} className="bg-white p-5">
                          <ArchivalImage
                            src={FIRM_ASSETS.establishment.establishment_3.src}
                            alt={FIRM_ASSETS.establishment.establishment_3.alt}
                            fallbackTitle={
                              FIRM_ASSETS.establishment.establishment_3.title
                            }
                            className="h-36 w-full"
                            imgClassName="object-contain"
                          />
                        </ParallaxFrame>
                      </CurtainImageReveal>
                      <figcaption className="mt-4 border-t border-ivory-border pt-3">
                        <span className="block font-display text-base font-medium text-ivory-ink">
                          {FIRM_ASSETS.establishment.establishment_3.title}
                        </span>
                        <span className="mt-0.5 block font-mono text-xs text-ivory-gold">
                          {FIRM_ASSETS.establishment.establishment_3.category}
                        </span>
                      </figcaption>
                    </figure>
                  </ScrollReveal>
                </div>
              </div>
            </div>

            {/* Integrated Historical Timeline (1988, 2000, Present) */}
            <div className="mt-20">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ivory-gold">
                Historical Milestones
              </p>
              <div className="grid grid-cols-1 gap-8 border-t border-ivory-border pt-8 md:grid-cols-3">
                {ESTABLISHMENT_TIMELINE.map((milestone, idx) => (
                  <ScrollReveal
                    key={milestone.year}
                    delay={idx * 0.12}
                    className="border-l border-ivory-gold/60 pl-6"
                  >
                    <span className="font-display text-4xl font-medium text-ivory-gold tabular-nums">
                      {milestone.year}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-medium text-ivory-ink">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory-muted">
                      {milestone.detail}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5.5 CLIENT CARE */}
        <section
          id="client-care"
          aria-labelledby="client-care-heading"
          className="relative overflow-hidden border-b border-primary/25 bg-background px-6 py-28 md:px-12 md:py-36"
        >
          <SectionSentinel name="03 · Client Care" />
          <LogoWatermark
            variant="gold"
            position="bottom-right"
            scale="w-[460px] md:w-[700px]"
            opacityClassName="opacity-[0.04] md:opacity-[0.05]"
          />
          <div className="relative z-10 mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                03 · Professional Standard
              </p>
              <EditorialTextReveal>
                <h2
                  id="client-care-heading"
                  className="mt-3 font-display text-display text-foreground"
                >
                  Client Care
                </h2>
              </EditorialTextReveal>

              <div className="mt-10 flex flex-col gap-6 border-l border-primary pl-6 md:pl-10">
                <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl md:text-4xl">
                  Clients are assured of our efficiency in professional service
                  delivery. Any observed deficiencies are immediately remedied at
                  no additional cost to the client.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 5.6 SOME TESTIMONIALS */}
        <section
          id="testimonials"
          aria-labelledby="testimonials-heading"
          className="relative overflow-hidden bg-surface px-6 py-24 md:px-12 md:py-36"
        >
          <SectionSentinel name="04 · Testimonials" />
          <LogoWatermark
            variant="gold"
            position="center"
            scale="w-[520px] md:w-[820px]"
            opacityClassName="opacity-[0.035] md:opacity-[0.045]"
          />
          <div className="relative z-10 mx-auto max-w-[90rem]">
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                04 · Judicial &amp; Professional Commendations
              </p>
              <EditorialTextReveal>
                <h2
                  id="testimonials-heading"
                  className="mt-3 font-display text-display text-foreground"
                >
                  Some Testimonials
                </h2>
              </EditorialTextReveal>
            </ScrollReveal>

            <GoldDivider className="my-10 md:my-14" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {TESTIMONIALS.map((item, idx) => (
                <ScrollReveal key={item.id} delay={idx * 0.14}>
                  <blockquote className="flex h-full flex-col justify-between border border-primary/30 bg-background p-8 md:p-12">
                    <div>
                      <div
                        aria-hidden="true"
                        className="font-display text-6xl leading-none text-primary"
                      >
                        &ldquo;
                      </div>
                      <p className="mt-2 font-display text-xl italic leading-relaxed text-foreground sm:text-2xl">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    <footer className="mt-10 border-t border-primary/25 pt-5">
                      <cite className="not-italic font-display text-lg font-medium text-accent">
                        — {item.attribution}
                      </cite>
                    </footer>
                  </blockquote>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 5.7 CONTACT & FOOTER */}
      <ContactSection />
    </div>
  );
}
